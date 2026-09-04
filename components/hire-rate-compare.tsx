"use client";

import { useCurrency } from "./currency-provider";

const REGIONS: { name: string; flag: string; factor: number; note: string }[] = [
  { name: "India · Savo", flag: "🇮🇳", factor: 1, note: "You are here" },
  { name: "United States", flag: "🇺🇸", factor: 5.5, note: "Typical agency rate" },
  { name: "United Kingdom", flag: "🇬🇧", factor: 5.0, note: "Typical agency rate" },
  { name: "Australia", flag: "🇦🇺", factor: 4.5, note: "Typical agency rate" },
  { name: "Canada", flag: "🇨🇦", factor: 4.0, note: "Typical agency rate" },
];

/** Same seniority, different geography: what this role costs per region. */
export default function HireRateCompare({ monthly }: { monthly: number }) {
  const { price } = useCurrency();
  const savo = monthly;

  return (
    <div className="rate-table-wrap">
      <table className="rate-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>Monthly cost</th>
            <th>You save with Savo</th>
          </tr>
        </thead>
        <tbody>
          {REGIONS.map((rg) => {
            const amount = Math.round(savo * rg.factor);
            const save = rg.factor === 1 ? null : Math.round((1 - 1 / rg.factor) * 100);
            return (
              <tr key={rg.name} className={rg.factor === 1 ? "is-savo" : ""}>
                <td>
                  <span className="rt-region">
                    <span className="rt-flag" aria-hidden="true">{rg.flag}</span>
                    <span>
                      <strong>{rg.name}</strong>
                      <em>{rg.note}</em>
                    </span>
                  </span>
                </td>
                <td className="rt-cost">{price(amount, 100)}</td>
                <td className="rt-save">
                  {save === null ? (
                    <span className="rt-pill">Baseline</span>
                  ) : (
                    <span className="rt-pill green">save {save}%</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="rate-note">
        Comparison rates are indicative market averages for senior dedicated engineers via
        agencies. Same seniority, English fluency and timezone overlap; the geography is the
        only difference.
      </p>
    </div>
  );
}
