/**
 * Form guard: layered protection for all public POST endpoints.
 *
 * 1. Requires a browser User-Agent (scripted clients usually send none).
 * 2. Same-origin check: cross-site scripted submissions are rejected.
 * 3. Honeypot: a hidden "website" field that only bots fill.
 * 4. Time trap: forms must stay open >= 2.5s before submitting
 *    (auto-fillers submit in milliseconds).
 * 5. In-memory sliding-window rate limit per IP to stop floods.
 *
 * No external services or cookies. For tougher abuse, Cloudflare Turnstile
 * can be layered on later without touching the UI contract.
 */

type Bucket = { count: number; reset: number };
const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit = 6, windowMs = 10 * 60_000): boolean {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || now > b.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  b.count += 1;
  return b.count <= limit;
}

export function clientKey(req: Request, scope: string): string {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local";
  return `${scope}:${ip}`;
}

export type GuardedBody = { website?: unknown; elapsed?: unknown };

type GuardResult = { ok: true } | { ok: false; status: number; error: string };

export function guardForm(req: Request, body: GuardedBody): GuardResult {
  if (!req.headers.get("user-agent")) {
    return { ok: false, status: 403, error: "Automated submissions are not accepted." };
  }
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return { ok: false, status: 403, error: "Cross-site submissions are blocked." };
      }
    } catch {
      return { ok: false, status: 403, error: "Cross-site submissions are blocked." };
    }
  }
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return { ok: false, status: 400, error: "Submission rejected." };
  }
  const elapsed = Number(body.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < 2500 || elapsed > 30 * 60_000) {
    return {
      ok: false,
      status: 400,
      error: "Please take a moment to complete the form, then submit again.",
    };
  }
  if (!rateLimit(clientKey(req, "form"), 6, 10 * 60_000)) {
    return {
      ok: false,
      status: 429,
      error: "Too many submissions from this network. Please try again in a few minutes.",
    };
  }
  return { ok: true };
}
