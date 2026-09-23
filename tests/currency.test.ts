import { describe, expect, it } from "vitest";
import { ccyFromCountry, convert, formatMoney, getCurrency, CURRENCIES } from "@/lib/currency";

describe("currency", () => {
  it("falls back to INR for unknown or missing codes", () => {
    expect(getCurrency(null).code).toBe("INR");
    expect(getCurrency("XXL").code).toBe("INR");
    expect(getCurrency("USD").code).toBe("USD");
  });

  it("maps visitor countries to sensible currencies", () => {
    expect(ccyFromCountry("IN")).toBe("INR");
    expect(ccyFromCountry("US")).toBe("USD");
    expect(ccyFromCountry("SA")).toBe("SAR");
    expect(ccyFromCountry("AE")).toBe("AED");
    expect(ccyFromCountry("GB")).toBe("GBP");
    expect(ccyFromCountry("AU")).toBe("AUD");
    expect(ccyFromCountry("ZZ")).toBeNull();
    expect(ccyFromCountry(undefined)).toBeNull();
  });

  it("converts and formats without float drift", () => {
    const usd = getCurrency("USD");
    // 100000 INR * (1/86) = 1162.8 -> rounded to the 100 step = 1200
    expect(convert(100000, usd, 100)).toBe(1200);
    expect(convert(100000, getCurrency("INR"))).toBe(100000);
    expect(formatMoney(1234.5, getCurrency("INR"))).toMatch(/₹/);
    // every currency has the fields the UI needs
    for (const c of CURRENCIES) {
      expect(c.code).toMatch(/^[A-Z]{3}$/);
      expect(c.flag.length).toBeGreaterThan(0);
      expect(c.perINR).toBeGreaterThan(0);
    }
  });
});
