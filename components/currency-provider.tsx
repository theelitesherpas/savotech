"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import {
  CCY_COOKIE,
  DEFAULT_CURRENCY,
  ccyFromCountry,
  getCurrency,
  price as priceOf,
  priceCompact as compactOf,
  type Currency,
  type CurrencyCode,
} from "@/lib/currency";
import { api } from "@/lib/api";

type Ctx = {
  ccy: Currency;
  setCode: (code: CurrencyCode) => void;
  /** format an INR amount in the active currency */
  price: (inr: number, step?: number) => string;
  /** compact chip format */
  compact: (inr: number) => string;
};

const CurrencyContext = createContext<Ctx | null>(null);

function readCookie(): string | undefined {
  if (typeof document === "undefined") return undefined;
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${CCY_COOKIE}=`))
    ?.split("=")[1];
}

/**
 * The currency cookie is an external store. useSyncExternalStore hydrates
 * with the server snapshot (INR) and adopts the cookie value right after
 * hydration without a cascading render or a hydration mismatch.
 */
const CCY_EVENT = "savo:ccy";

function subscribeCcy(onChange: () => void) {
  window.addEventListener(CCY_EVENT, onChange);
  return () => window.removeEventListener(CCY_EVENT, onChange);
}

function getSnapshot(): string {
  return readCookie() ?? DEFAULT_CURRENCY;
}

function getServerSnapshot(): string {
  return DEFAULT_CURRENCY;
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const code = useSyncExternalStore(subscribeCcy, getSnapshot, getServerSnapshot);
  const ccy = getCurrency(code);

  const setCode = useCallback((next: CurrencyCode) => {
    document.cookie = `${CCY_COOKIE}=${next}; max-age=${60 * 60 * 24 * 365}; path=/; samesite=lax`;
    window.dispatchEvent(new Event(CCY_EVENT));
  }, []);

  // First visit (no cookie yet): detect currency from the visitor's network
  // location. Runs entirely async, after hydration.
  useEffect(() => {
    if (readCookie()) return;
    let alive = true;
    fetch(api("/api/geo"))
      .then((r) => r.json() as Promise<{ country: string }>)
      .then(({ country }) => {
        const detected = ccyFromCountry(country);
        if (alive && detected) setCode(detected);
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [setCode]);

  const value = useMemo<Ctx>(
    () => ({
      ccy,
      setCode,
      price: (inr, step = 100) => priceOf(inr, ccy, step),
      compact: (inr) => compactOf(inr, ccy),
    }),
    [ccy, setCode],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): Ctx {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside CurrencyProvider");
  return ctx;
}
