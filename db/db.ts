import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import pg from "pg";

/**
 * Savo Technologies — data layer.
 * Primary path: PostgreSQL via DATABASE_URL (see db/schema.sql).
 * Fallback path: local JSON store (.data/store.json) when PostgreSQL is
 * unreachable, so the local preview and demo never break. All writes return
 * `{ ok: true, backend: "postgres" | "fallback" }`.
 */

export type LeadRecord = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source: string;
  services: string[];
  project_type: string;
  complexity: string;
  timeline: string;
  roles: string[];
  notes?: string;
  estimate_min: number;
  estimate_max: number;
};

export type ChatRecord = {
  session_key: string;
  question: string;
  answer: string;
};

type Pool = pg.Pool;
const g = globalThis as unknown as { __savoPool?: Pool; __savoSchemaReady?: boolean };

function getPool(): Pool | null {
  if (!process.env.DATABASE_URL) return null;
  if (!g.__savoPool) {
    g.__savoPool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      connectionTimeoutMillis: 3000,
    });
  }
  return g.__savoPool;
}

async function ensureSchema(pool: Pool): Promise<boolean> {
  if (g.__savoSchemaReady) return true;
  const { readFile } = await import("node:fs/promises");
  const schema = await readFile(path.join(process.cwd(), "db", "schema.sql"), "utf8");
  await pool.query(schema);
  g.__savoSchemaReady = true;
  return true;
}

/* ---------------- fallback store ---------------- */

/* On serverless (Vercel) the project cwd is read-only; use the writable tmp dir. */
const FALLBACK_DIR = process.env.VERCEL
  ? path.join(tmpdir(), "savo-data")
  : path.join(process.cwd(), ".data");
const FALLBACK_FILE = path.join(FALLBACK_DIR, "store.json");

type FallbackStore = {
  leads: (LeadRecord & { created_at: string })[];
  newsletter: { email: string; created_at: string }[];
  chat: (ChatRecord & { created_at: string })[];
};

async function readFallback(): Promise<FallbackStore> {
  try {
    if (!existsSync(FALLBACK_FILE)) return { leads: [], newsletter: [], chat: [] };
    return JSON.parse(await readFile(FALLBACK_FILE, "utf8")) as FallbackStore;
  } catch {
    return { leads: [], newsletter: [], chat: [] };
  }
}

async function writeFallback(mutate: (store: FallbackStore) => void): Promise<void> {
  const store = await readFallback();
  mutate(store);
  if (!existsSync(FALLBACK_DIR)) await mkdir(FALLBACK_DIR, { recursive: true });
  await writeFile(FALLBACK_FILE, JSON.stringify(store, null, 2));
}

/* ---------------- public API ---------------- */

export async function saveLead(lead: LeadRecord): Promise<{ ok: boolean; backend: string }> {
  const pool = getPool();
  if (pool) {
    try {
      await ensureSchema(pool);
      await pool.query(
        `INSERT INTO leads (name, email, phone, company, source, services, project_type,
                            complexity, timeline, roles, notes, estimate_min, estimate_max)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
        [
          lead.name, lead.email, lead.phone ?? null, lead.company ?? null, lead.source,
          JSON.stringify(lead.services), lead.project_type, lead.complexity, lead.timeline,
          JSON.stringify(lead.roles), lead.notes ?? null, lead.estimate_min, lead.estimate_max,
        ],
      );
      return { ok: true, backend: "postgres" };
    } catch (err) {
      console.warn("[savo-db] Postgres write failed, using fallback store:", (err as Error).message);
    }
  }
  try {
    await writeFallback((s) => s.leads.push({ ...lead, created_at: new Date().toISOString() }));
    return { ok: true, backend: "fallback" };
  } catch (err) {
    console.error("[savo-db] fallback write failed:", (err as Error).message);
    return { ok: false, backend: "none" };
  }
}

export async function saveSubscriber(email: string): Promise<{ ok: boolean; backend: string }> {
  const pool = getPool();
  if (pool) {
    try {
      await ensureSchema(pool);
      await pool.query(
        `INSERT INTO newsletter_subscribers (email) VALUES ($1)
         ON CONFLICT (email) DO NOTHING`,
        [email],
      );
      return { ok: true, backend: "postgres" };
    } catch (err) {
      console.warn("[savo-db] Postgres write failed, using fallback store:", (err as Error).message);
    }
  }
  try {
    await writeFallback((s) => {
      if (!s.newsletter.some((n) => n.email === email)) {
        s.newsletter.push({ email, created_at: new Date().toISOString() });
      }
    });
    return { ok: true, backend: "fallback" };
  } catch (err) {
    console.error("[savo-db] fallback write failed:", (err as Error).message);
    return { ok: false, backend: "none" };
  }
}

export async function saveChatLog(entry: ChatRecord): Promise<{ ok: boolean; backend: string }> {
  const pool = getPool();
  if (pool) {
    try {
      await ensureSchema(pool);
      await pool.query(
        `INSERT INTO chat_logs (session_key, question, answer) VALUES ($1,$2,$3)`,
        [entry.session_key, entry.question, entry.answer],
      );
      return { ok: true, backend: "postgres" };
    } catch (err) {
      console.warn("[savo-db] Postgres write failed, using fallback store:", (err as Error).message);
    }
  }
  try {
    await writeFallback((s) => s.chat.push({ ...entry, created_at: new Date().toISOString() }));
    return { ok: true, backend: "fallback" };
  } catch (err) {
    console.error("[savo-db] fallback write failed:", (err as Error).message);
    return { ok: false, backend: "none" };
  }
}
