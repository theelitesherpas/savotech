import { NextResponse } from "next/server";
import { saveSubscriber } from "@/db/db";

/** Footer newsletter signup. */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: string };
    const email = (body.email ?? "").toString().trim().toLowerCase().slice(0, 190);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Valid email is required." }, { status: 422 });
    }
    const result = await saveSubscriber(email);
    return NextResponse.json({ ok: result.ok }, { status: result.ok ? 201 : 500 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}
