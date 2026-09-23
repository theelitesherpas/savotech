import { describe, expect, it } from "vitest";
import { respond } from "@/lib/savo-intelligence";

describe("savo intelligence (rule-based assistant)", () => {
  it("answers pricing questions with an INR range", () => {
    const { answer, followUps } = respond("how much does an AI agent cost?");
    expect(answer).toMatch(/₹/);
    expect(followUps.length).toBeGreaterThan(0);
  });

  it("covers the core topics a prospect asks about", () => {
    for (const q of [
      "what services do you offer?",
      "tell me about your ai agents",
      "do you work with clients in saudi arabia?",
      "how does your process work?",
      "is my data secure?",
      "can I hire dedicated developers?",
      "what is the client portal?",
      "which industries do you serve?",
    ]) {
      const { answer } = respond(q);
      expect(answer.length).toBeGreaterThan(40);
    }
  });

  it("always returns a graceful fallback", () => {
    const { answer, followUps } = respond("zzz qwerty asdf 12345 ???");
    expect(answer.length).toBeGreaterThan(0);
    expect(Array.isArray(followUps)).toBe(true);
  });
});
