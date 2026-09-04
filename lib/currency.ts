/**
 * Currency system: every price on the site is modelled in INR and
 * rendered in the visitor's currency. Detection happens in middleware
 * from Vercel geo headers; the visitor can override it in the footer.
 */

export type CurrencyCode =
  | "INR" | "USD" | "EUR" | "GBP" | "AED" | "SAR" | "AUD" | "CAD" | "SGD" | "NZD";

export type Currency = {
  code: CurrencyCode;
  label: string;
  flag: string;
  locale: string;
  /** units of this currency per 1 INR (indicative, update quarterly) */
  perINR: number;
};

export const CURRENCIES: Currency[] = [
  { code: "INR", label: "Indian Rupee", flag: "🇮🇳", locale: "en-IN", perINR: 1 },
  { code: "USD", label: "US Dollar", flag: "🇺🇸", locale: "en-US", perINR: 1 / 86 },
  { code: "EUR", label: "Euro", flag: "🇪🇺", locale: "de-DE", perINR: 1 / 93 },
  { code: "GBP", label: "British Pound", flag: "🇬🇧", locale: "en-GB", perINR: 1 / 109 },
  { code: "AED", label: "UAE Dirham", flag: "🇦🇪", locale: "en-AE", perINR: 1 / 23.4 },
  { code: "SAR", label: "Saudi Riyal", flag: "🇸🇦", locale: "en-SA", perINR: 1 / 23 },
  { code: "AUD", label: "Australian Dollar", flag: "🇦🇺", locale: "en-AU", perINR: 1 / 56 },
  { code: "CAD", label: "Canadian Dollar", flag: "🇨🇦", locale: "en-CA", perINR: 1 / 63 },
  { code: "SGD", label: "Singapore Dollar", flag: "🇸🇬", locale: "en-SG", perINR: 1 / 64 },
  { code: "NZD", label: "NZ Dollar", flag: "🇳🇿", locale: "en-NZ", perINR: 1 / 51 },
];

export const DEFAULT_CURRENCY: CurrencyCode = "INR";
export const CCY_COOKIE = "savo_ccy";

const BY_CODE = new Map(CURRENCIES.map((c) => [c.code, c]));

export function getCurrency(code: string | undefined | null): Currency {
  return BY_CODE.get((code ?? "").toUpperCase() as CurrencyCode) ?? BY_CODE.get(DEFAULT_CURRENCY)!;
}

const COUNTRY_TO_CCY: Record<string, CurrencyCode> = {
  IN: "INR",
  US: "USD", PR: "USD",
  GB: "GBP",
  DE: "EUR", FR: "EUR", NL: "EUR", IE: "EUR", ES: "EUR", IT: "EUR", PT: "EUR",
  FI: "EUR", AT: "EUR", BE: "EUR", GR: "EUR",
  AE: "AED",
  SA: "SAR",
  AU: "AUD",
  CA: "CAD",
  SG: "SGD",
  NZ: "NZD",
  QA: "USD", KW: "USD", OM: "USD", BH: "USD",
};

export function ccyFromCountry(country: string | undefined | null): CurrencyCode | null {
  if (!country) return null;
  return COUNTRY_TO_CCY[country.toUpperCase()] ?? null;
}

/** Convert an INR amount into the target currency, rounded to a friendly step. */
export function convert(inr: number, ccy: Currency, step = 100): number {
  const v = inr * ccy.perINR;
  if (ccy.code === "INR") return Math.round(v);
  return Math.round(v / step) * step;
}

export function formatMoney(amount: number, ccy: Currency): string {
  return new Intl.NumberFormat(ccy.locale, {
    style: "currency",
    currency: ccy.code,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Full price string for an INR amount: convert + format. */
export function price(inr: number, ccy: Currency, step = 100): string {
  return formatMoney(convert(inr, ccy, step), ccy);
}

/** Compact form for chips: $5.8K, ₹5L style brevity. */
export function priceCompact(inr: number, ccy: Currency): string {
  const v = inr * ccy.perINR;
  if (ccy.code === "INR") {
    return v >= 100000 ? `₹${Math.round(v / 100000)}L` : `₹${Math.round(v / 1000)}K`;
  }
  return new Intl.NumberFormat(ccy.locale, {
    style: "currency",
    currency: ccy.code,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(v);
}
