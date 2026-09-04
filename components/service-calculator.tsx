"use client";

import { useState } from "react";
import Link from "next/link";
import { useCurrency } from "./currency-provider";
import type { ServicePage } from "@/lib/services-data";

/** Service-specific price calculator. Prices in the visitor's currency. */
export default function ServiceCalculator({ service }: { service: ServicePage }) {
  const { price } = useCurrency();
  const [sel, setSel] = useState<number[]>(service.calc.opts.map(() => 1)); // default middle option
  const [touched, setTouched] = useState(false); // range appears only once the client chooses

  let min = service.calc.base[0];
  let max = service.calc.base[1];
  service.calc.opts.forEach((opt, i) => {
    const [, mn, mx] = opt.items[sel[i]] ?? opt.items[1];
    min *= mn;
    max *= mx;
  });

  return (
    <section className="section svc-calc" id="calculator">
      <div className="wrap">
        <div className="svc-calc-grid">
          <div className="svc-calc-copy">
            <p className="page-kicker">Price calculator</p>
            <h2>What would your {service.title.toLowerCase()} engagement cost?</h2>
            <p>
              Three questions, one honest range, in your currency. Every real proposal we write
              starts from the same model, so this is the number we will defend in a call.
            </p>
            <Link className="btn btn-ghost" href="/start-your-project/">
              Get an exact proposal
            </Link>
          </div>
          <div className="svc-calc-card">
            {service.calc.opts.map((opt, i) => (
              <fieldset className="est-step" key={opt.label}>
                <legend>{opt.label}</legend>
                <div className="chip-row">
                  {opt.items.map(([label], j) => (
                    <button
                      type="button"
                      key={label}
                      className={`chip${sel[i] === j ? " sel" : ""}`}
                      aria-pressed={sel[i] === j}
                      onClick={() => { setTouched(true); setSel((s) => s.map((v, k) => (k === i ? j : v))); }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
            <div className="svc-calc-result" role="status" aria-live="polite">
              {touched ? (
                <>
                  <span>Your estimated range</span>
                  <strong>{price(Math.round(min))} to {price(Math.round(max))}</strong>
                  <em>Indicative, milestone based, GST extra. Fixed in writing after a 30 minute scoping call.</em>
                </>
              ) : (
                <>
                  <span>Estimated range</span>
                  <strong className="svc-calc-hint">Choose your options to see the price</strong>
                  <em>Pick one option from each row and your tailored range appears instantly, in your currency.</em>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
