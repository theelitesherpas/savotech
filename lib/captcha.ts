import { createHmac, timingSafeEqual, randomBytes } from "crypto";

/**
 * Self-contained captcha: server issues an HMAC-signed challenge
 * (math sum or type-the-word), the visitor answers, and the server
 * verifies signature, expiry and single use. No third party, no
 * tracking. Bots get no valid token to replay, and tokens die with
 * one use or ten minutes.
 */

const TTL_MS = 10 * 60_000;
const used = new Set<string>();

function secret(): string {
  return process.env.CAPTCHA_SECRET ?? "savo-dev-captcha-secret-change-me";
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function makeQuestion(): { q: string; a: string } {
  const mode = randomBytes(1)[0] % 3;
  if (mode === 0) {
    const a = 3 + (randomBytes(1)[0] % 8);
    const b = 2 + (randomBytes(1)[0] % 7);
    return { q: `What is ${a} plus ${b}?`, a: String(a + b) };
  }
  if (mode === 1) {
    const a = 9 + (randomBytes(1)[0] % 7);
    const b = 2 + (randomBytes(1)[0] % 6);
    return { q: `What is ${a} minus ${b}?`, a: String(a - b) };
  }
  const words = ["SHIP", "BUILD", "SAVO", "CODE", "TRUST"];
  const w = words[randomBytes(1)[0] % words.length];
  return { q: `Type the word ${w} to confirm you are human.`, a: w };
}

export function issueCaptcha(): { question: string; token: string } {
  const { q, a } = makeQuestion();
  const expires = Date.now() + TTL_MS;
  const payload = `${a}|${expires}`;
  const token = `${Buffer.from(payload).toString("base64url")}.${sign(payload)}`;
  // opportunistically drop expired tokens from the used set
  if (used.size > 500) used.clear();
  return { question: q, token };
}

export function verifyCaptcha(token: unknown, answer: unknown): boolean {
  if (typeof token !== "string" || typeof answer !== "string") return false;
  if (used.has(token)) return false;
  const [b64, sig] = token.split(".");
  if (!b64 || !sig) return false;
  let payload: string;
  try {
    payload = Buffer.from(b64, "base64url").toString();
  } catch {
    return false;
  }
  const expected = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  const [ans, exp] = payload.split("|");
  if (!ans || !exp || Number(exp) < Date.now()) return false;
  if (answer.trim().toUpperCase() !== ans.toUpperCase()) return false;
  used.add(token);
  return true;
}
