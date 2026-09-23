import { describe, expect, it } from "vitest";
import { issueCaptcha, verifyCaptcha } from "@/lib/captcha";

function solve(question: string): string {
  const plus = question.match(/What is (\d+) plus (\d+)\?/);
  if (plus) return String(Number(plus[1]) + Number(plus[2]));
  const minus = question.match(/What is (\d+) minus (\d+)\?/);
  if (minus) return String(Number(minus[1]) - Number(minus[2]));
  const word = question.match(/Type the word (\w+) to confirm/);
  if (word) return word[1];
  throw new Error("unknown question: " + question);
}

describe("captcha", () => {
  it("issues a signed challenge and accepts the correct answer", () => {
    const { question, token } = issueCaptcha();
    expect(question).toBeTruthy();
    expect(token).toContain(".");
    expect(verifyCaptcha(token, solve(question))).toBe(true);
  });

  it("is case-insensitive but rejects wrong answers", () => {
    const { question, token } = issueCaptcha();
    expect(verifyCaptcha(token, solve(question).toLowerCase())).toBe(true);

    const q2 = issueCaptcha();
    expect(verifyCaptcha(q2.token, "definitely-wrong")).toBe(false);
  });

  it("rejects tampered tokens and garbage", () => {
    const { token } = issueCaptcha();
    const parts = token.split(".");
    const tampered = `${Buffer.from("0|99999999999999").toString("base64url")}.${parts[1]}`;
    expect(verifyCaptcha(tampered, "0")).toBe(false);
    expect(verifyCaptcha("not-a-token", "0")).toBe(false);
    expect(verifyCaptcha(undefined, "0")).toBe(false);
    expect(verifyCaptcha(42, "0")).toBe(false);
  });

  it("burns each token after one use", () => {
    const { question, token } = issueCaptcha();
    const answer = solve(question);
    expect(verifyCaptcha(token, answer)).toBe(true);
    expect(verifyCaptcha(token, answer)).toBe(false);
  });
});
