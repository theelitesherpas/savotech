"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import {
  CCY_COOKIE,
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

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // start from the default so server and client paint identically,
  // then adopt the cookie (or geo detection) right after mount
  const [ccy, setCcy] = useState<Currency>(() => getCurrency(null));

  const setCode = useCallback((code: CurrencyCode) => {
    document.cookie = `${CCY_COOKIE}=${code}; max-age=${60 * 60 * 24 * 365}; path=/; samesite=lax`;
    setCcy(getCurrency(code));
  }, []);

  // first visit: detect currency from the visitor's network location
  useEffect(() => {
    const saved = readCookie();
    if (saved) {
      const c = getCurrency(saved);
      if (c.code !== "INR") setCcy(c);
      return;
    }
    let alive = true;
    fetch(api("/api/geo"))
      .then((r) => r.json() as Promise<{ country: string }>)
      .then(({ country }) => {
        const code = ccyFromCountry(country);
        if (alive && code) setCode(code);
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
