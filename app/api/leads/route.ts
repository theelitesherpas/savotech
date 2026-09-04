import { NextResponse } from "next/server";
import { saveLead, type LeadRecord } from "@/db/db";

/** Instant-estimator lead capture. Persists to PostgreSQL (or local fallback). */
export async function POST(req: Request) {
  try {
    const b = (await req.json()) as Partial<LeadRecord>;
    const name = (b.name ?? "").toString().trim().slice(0, 120);
    const email = (b.email ?? "").toString().trim().slice(0, 190);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Name and valid email are required." }, { status: 422 });
    }
    const lead: LeadRecord = {
      name,
      email,
      phone: b.phone?.toString().slice(0, 40) || undefined,
      company: b.company?.toString().slice(0, 160) || undefined,
      source: b.source === "estimator" ? "estimator" : "estimator",
      services: Array.isArray(b.services) ? b.services.map(String).slice(0, 20) : [],
      project_type: String(b.project_type ?? "new"),
      complexity: String(b.complexity ?? "standard"),
      timeline: String(b.timeline ?? "standard"),
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
