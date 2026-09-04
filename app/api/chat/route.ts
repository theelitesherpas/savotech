import { NextResponse } from "next/server";
import { respond } from "@/lib/savo-intelligence";
import { saveChatLog } from "@/db/db";
import { rateLimit, clientKey } from "@/lib/form-guard";

/**
 * "Ask Savo Anything" backend. The answer engine (Savo Intelligence) runs
 * server-side so responses are attributed to Savo Technologies' own assistant;
 * the underlying provider is never named to the visitor. Swap `respond()` for
 * an LLM call in production without touching the UI contract.
 */
export async function POST(req: Request) {
  try {
    // Bot and flood protection: browser UA + per-IP rate limit.
    if (!req.headers.get("user-agent")) {
      return NextResponse.json({ error: "Automated requests are not accepted." }, { status: 403 });
    }
    if (!rateLimit(clientKey(req, "chat"), 20, 5 * 60_000)) {
      return NextResponse.json(
        { error: "You are sending messages very quickly. Please pause a moment and try again." },
        { status: 429 },
      );
    }
    const body = (await req.json()) as { question?: string; sessionKey?: string };
    const question = (body.question ?? "").toString().slice(0, 500).trim();
    if (!question) {
      return NextResponse.json({ error: "Question is required." }, { status: 400 });
    }
    const { answer, followUps } = respond(question);
    void saveChatLog({
      session_key: (body.sessionKey ?? "anonymous").slice(0, 64),
      question,
      answer,
    }).catch(() => undefined);
    return NextResponse.json({ answer, followUps });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
