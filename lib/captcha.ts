import { createHmac, timingSafeEqual, randomBytes } from "crypto";

/**
 * Self-contained captcha: server issues an HMAC-signed challenge
 * (math sum or type-the-word), the visitor answers, and the server
 * verifies signature, expiry and single use. No third party, no
 * tracking. Bots get no valid token to replay, and tokens die with
 * one use or ten minutes.
 */

const TTL_MS = 10 * 60_000;

/** token -> expiry timestamp, so consumed tokens can be purged once expired. */
const used = new Map<string, number>();

const g = globalThis as unknown as { __savoCaptchaSecret?: string };

function secret(): string {
  const env = process.env.CAPTCHA_SECRET;
  if (env && env.length >= 16) return env;
  if (process.env.NODE_ENV === "production") {
    // Never fall back to a known constant in production: an attacker reading
    // the public repo could forge tokens. Use an ephemeral per-instance
    // secret instead — issuing and verifying usually land on the same
    // instance, and the rare cross-instance verify just asks for a retry.
    if (!g.__savoCaptchaSecret) {
      g.__savoCaptchaSecret = randomBytes(32).toString("hex");
      console.warn(
        "[savo-captcha] CAPTCHA_SECRET is not set; using an ephemeral per-instance secret. " +
          "Set CAPTCHA_SECRET in the deployment environment for reliable verification.",
      );
    }
    return g.__savoCaptchaSecret;
  }
  return "savo-dev-captcha-secret-change-me";
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
  // opportunistically purge consumed tokens whose window has passed
  if (used.size > 500) {
    const now = Date.now();
    for (const [t, exp] of used) if (exp < now) used.delete(t);
  }
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
  used.set(token, Number(exp));
  return true;
}
