import { NextResponse } from "next/server";

/**
 * Returns the visitor's country from Vercel geo headers so the client
 * can price in the local currency on first visit.
 */
export async function GET(req: Request) {
  const country =
    req.headers.get("x-vercel-ip-country") ??
    // @ts-expect-error - geo is attached by the platform
    req.geo?.country ??
    "";
  return NextResponse.json(
    { country: String(country).slice(0, 2).toUpperCase() },
    { headers: { "cache-control": "no-store" } },
  );
}
