import { NextResponse } from "next/server";
import { saveLead, type LeadRecord } from "@/db/db";
import { guardForm } from "@/lib/form-guard";

/**
 * Lead capture: instant estimator, Start Your Project briefs, footer
 * callback requests and careers applications. Every submission passes the
 * form guard (honeypot, time trap, same-origin, rate limit) before it
 * reaches the database. Persists to PostgreSQL (or local fallback).
 */
export async function POST(req: Request) {
  try {
    const b = (await req.json()) as Record<string, unknown>;

    const guard = guardForm(req, b as { website?: unknown; elapsed?: unknown });
    if (!guard.ok) {
      return NextResponse.json({ ok: false, error: guard.error }, { status: guard.status });
    }

    const source =
      b.source === "start-your-project" || b.source === "callback" || b.source === "careers"
        ? b.source
        : "estimator";

    const name = (b.name ?? "").toString().trim().slice(0, 120);
    const email = (b.email ?? "").toString().trim().slice(0, 190);
    const phone = (b.phone ?? "").toString().slice(0, 40);
    const digits = phone.replace(/\D/g, "");

    if (source === "callback") {
      // Footer call-back: only a reachable phone number is required.
      if (digits.length < 7 || digits.length > 13) {
        return NextResponse.json(
          { ok: false, error: "A valid phone number is required." },
          { status: 422 },
        );
      }
    } else if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Name and valid email are required." },
        { status: 422 },
      );
    }

    const lead: LeadRecord = {
      name: source === "callback" ? name || "Callback request" : name,
      // Callback leads may arrive without an email; the column is NOT NULL so we store an empty string.
      email: email || "",
      phone: phone || undefined,
      company: (b.company ?? "").toString().slice(0, 160) || undefined,
      source,
      services: Array.isArray(b.services) ? b.services.map(String).slice(0, 20) : [],
      project_type: String(b.project_type ?? "new").slice(0, 120),
      complexity: String(b.complexity ?? "standard").slice(0, 120),
      timeline: String(b.timeline ?? "standard").slice(0, 120),
      roles: Array.isArray(b.roles) ? b.roles.map(String).slice(0, 20) : [],
      notes: b.notes?.toString().slice(0, 4000) || undefined,
      estimate_min: Number(b.estimate_min) || 0,
      estimate_max: Number(b.estimate_max) || 0,
    };
    const result = await saveLead(lead);
    return NextResponse.json({ ok: result.ok, backend: result.backend }, { status: result.ok ? 201 : 500 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
