"use client";

import { useState } from "react";
import Link from "next/link";
import { useCurrency } from "./currency-provider";

const CYCLES = [
  { key: "m" as const, label: "Monthly", months: 1, discount: 0, note: "Cancel with 30 days notice" },
  { key: "q" as const, label: "Quarterly", months: 3, discount: 0.05, note: "3 month commitment" },
  { key: "y" as const, label: "Yearly", months: 12, discount: 0.1, note: "12 month commitment" },
];

const INCLUDED = [
  "Dedicated senior engineer, yours only",
  "Two week paid trial to start",
  "Your tools, your standups, your repo",
  "Free instant replacement, anytime",
];

/** Clean segmented pricing: pick a cycle, see one honest price. */
export default function HirePlans({ monthly, role }: { monthly: number; role: string }) {
  const { price } = useCurrency();
  const [cycle, setCycle] = useState<(typeof CYCLES)[number]>(CYCLES[1]);

  const total = Math.round(monthly * cycle.months * (1 - cycle.discount));
  const perMonth = Math.round(total / cycle.months);
  const saved = Math.round(monthly * cycle.months - total);

  return (
    <section className="section section-alt hire-plans" id="plans">
      <div className="wrap">
        <div className="plans-v2">
          <div className="plan-choices">
            <p className="page-kicker">Simple pricing</p>
            <h2>Pick a billing cycle.</h2>
            <p className="plan-lead">
              One {role.toLowerCase().replace(/s$/, "")} rate, in your currency. Longer
              commitments simply cost less.
            </p>
            <div className="plan-options" role="tablist" aria-label="Billing cycle">
              {CYCLES.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  role="tab"
                  aria-selected={cycle.key === c.key}
                  className={`plan-option${cycle.key === c.key ? " is-on" : ""}`}
                  onClick={() => setCycle(c)}
                >
                  <span className="po-radio" aria-hidden="true" />
                  <span className="po-main">
                    <strong>{c.label}</strong>
                    <em>{c.note}</em>
                  </span>
                  {c.discount > 0 && <span className="po-save">save {Math.round(c.discount * 100)}%</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="plan-spotlight">
            <span className="ps-cycle">{cycle.label} plan</span>
            <p className="ps-price">
              {price(perMonth, 50)}
              <span> / month</span>
            </p>
            <p className="ps-billed">
              {price(total, 100)} billed {cycle.months === 1 ? "monthly" : cycle.label.toLowerCase()}
              {saved > 0 && <> · you save {price(saved, 100)}</>}
            </p>
            <ul className="ps-list">
              {INCLUDED.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link className="btn btn-primary btn-lg ps-cta" href="/start-your-project/">
              Hire now
            </Link>
            <p className="ps-fine">
              Need a pod of three or more?{" "}
              <Link className="text-cta" href="/contact/">Ask for volume rates</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
