import { describe, expect, it } from "vitest";
import { rateLimit, clientKey, guardForm } from "@/lib/form-guard";

const req = (headers: Record<string, string>): Request =>
  new Request("http://localhost/savotech/api/leads", {
    method: "POST",
    headers,
  });

describe("form guard", () => {
  it("blocks scripted clients without a user agent", () => {
    const r = guardForm(req({}), { elapsed: 5000 });
    expect(r).toEqual({ ok: false, status: 403, error: expect.any(String) });
  });

  it("blocks cross-site submissions", () => {
    const r = guardForm(
      req({ "user-agent": "Mozilla/5.0", origin: "https://evil.example", host: "www.savotechnologies.com" }),
      { elapsed: 5000 },
    );
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(403);
  });

  it("trips the honeypot when the hidden website field is filled", () => {
    const r = guardForm(req({ "user-agent": "Mozilla/5.0" }), { website: "http://spam.example", elapsed: 5000 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.status).toBe(400);
  });

  it("rejects instant (bot-like) and absurd elapsed times", () => {
    const fast = guardForm(req({ "user-agent": "Mozilla/5.0" }), { elapsed: 100 });
    expect(fast.ok).toBe(false);
    const stale = guardForm(req({ "user-agent": "Mozilla/5.0" }), { elapsed: 99 * 60 * 60 * 1000 });
    expect(stale.ok).toBe(false);
    const ok = guardForm(req({ "user-agent": "Mozilla/5.0" }), { elapsed: 4000 });
    expect(ok.ok).toBe(true);
  });

  it("rate limits within the sliding window and resets after it", () => {
    const key = clientKey(req({ "user-agent": "x", "x-forwarded-for": "9.9.9.9" }), "test");
    for (let i = 0; i < 3; i++) expect(rateLimit(key, 3, 60_000)).toBe(true);
    expect(rateLimit(key, 3, 60_000)).toBe(false);
    // a different key is unaffected
    const other = clientKey(req({ "user-agent": "x", "x-forwarded-for": "8.8.8.8" }), "test");
    expect(rateLimit(other, 3, 60_000)).toBe(true);
  });
});
