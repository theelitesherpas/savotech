import { NextResponse } from "next/server";
import { issueCaptcha } from "@/lib/captcha";
import { rateLimit, clientKey } from "@/lib/form-guard";

/** Issue one captcha challenge per form render. Rate limited per IP. */
export async function GET(req: Request) {
  if (!rateLimit(clientKey(req, "captcha"), 30, 10 * 60_000)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }
  return NextResponse.json(issueCaptcha());
}
