import { NextResponse } from "next/server";
import { respond } from "@/lib/savo-intelligence";
import { saveChatLog } from "@/db/db";

/**
 * "Ask Savo Anything" backend. The answer engine (Savo Intelligence) runs
 * server-side so responses are attributed to Savo Technologies' own assistant;
 * the underlying provider is never named to the visitor. Swap `respond()` for
 * an LLM call in production without touching the UI contract.
 */
export async function POST(req: Request) {
  try {
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
