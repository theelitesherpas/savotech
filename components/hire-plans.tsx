"use client";

import { useState } from "react";
import Link from "next/link";
import { useCurrency } from "./currency-provider";

/** Monthly / quarterly / yearly engagement plans, priced in the visitor's currency. */
export default function HirePlans({ monthly, role }: { monthly: number; role: string }) {
  const { price } = useCurrency();
  const [cycle, setCycle] = useState<"m" | "q" | "y">("m");

  const plans = [
    { key: "m" as const, label: "Monthly", months: 1, discount: 0, note: "Maximum flexibility", best: false },
    { key: "q" as const, label: "Quarterly", months: 3, discount: 0.05, note: "5% saved, quarterly billing", best: true },
    { key: "y" as const, label: "Yearly", months: 12, discount: 0.1, note: "10% saved, yearly billing", best: false },
  ];
  const active = plans.find((p) => p.key === cycle)!;
  const total = Math.round(monthly * active.months * (1 - active.discount));
  const perMonth = Math.round(total / active.months);

  return (
    <section className="section hire-plans" id="plans">
      <div className="wrap">
        <div className="section-head">
          <p className="page-kicker">Simple pricing</p>
          <h2>One engineer. One transparent rate.</h2>
          <p className="lead">
            Dedicated {role.toLowerCase()} working only for you, in your tools. Pick a billing
            cycle; longer commitments simply cost less. Prices in your currency.
          </p>
        </div>

        <div className="plan-cycle" role="tablist" aria-label="Billing cycle">
          {plans.map((p) => (
            <button
              key={p.key}
              type="button"
              role="tab"
              aria-selected={cycle === p.key}
              className={`chip${cycle === p.key ? " sel" : ""}`}
              onClick={() => setCycle(p.key)}
            >
              {p.label}
              {p.discount > 0 && <span className="plan-save">save {Math.round(p.discount * 100)}%</span>}
            </button>
          ))}
        </div>

        <div className="plan-grid">
          {plans.map((p) => {
            const t = Math.round(monthly * p.months * (1 - p.discount));
            const pm = Math.round(t / p.months);
            return (
              <article key={p.key} className={`plan-card${p.key === cycle ? " is-active" : ""}${p.best ? " plan-best" : ""}`}>
                {p.best && <span className="plan-flag">Most popular</span>}
                <h3>{p.label}</h3>
                <p className="plan-price">
                  {price(pm, 50)}
                  <span> / month</span>
                </p>
                <p className="plan-total">
                  {price(t, 100)} billed {p.months === 1 ? "monthly" : p.label.toLowerCase()}
                </p>
                <ul>
                  <li>Dedicated senior engineer</li>
                  <li>{p.months === 1 ? "Cancel with 30 days notice" : `${p.months} month commitment`}</li>
                  <li>Two week paid trial to start</li>
                  <li>Your tools, your standups</li>
                  <li>Swap or scale anytime</li>
                </ul>
                <Link
                  className={p.key === cycle ? "btn btn-primary" : "btn btn-login"}
                  href="/start-your-project/"
                >
                  Hire now
                </Link>
              </article>
            );
          })}
        </div>

        <p className="plan-fine">
          Effective rate on your selection: <strong>{price(perMonth, 50)} / month</strong>. GST
          extra where applicable. Need a pod of three or more?{" "}
          <Link className="text-cta" href="/contact/">Talk to us for volume rates</Link>.
        </p>
      </div>
    </section>
  );
}
