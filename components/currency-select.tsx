"use client";

import { CURRENCIES } from "@/lib/currency";
import { useCurrency } from "./currency-provider";

/** Footer currency selector: reprices the whole site instantly. */
export default function CurrencySelect() {
  const { ccy, setCode } = useCurrency();
  return (
    <label className="ccy-pick">
      <span>Prices shown in</span>
      <span className="ccy-select">
        <select
          value={ccy.code}
          onChange={(e) => setCode(e.target.value as typeof ccy.code)}
          aria-label="Currency"
        >
          {CURRENCIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.code} {c.label}
            </option>
          ))}
        </select>
      </span>
    </label>
  );
}
