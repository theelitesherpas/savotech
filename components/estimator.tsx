"use client";

import { useState } from "react";
import Reveal from "./reveal";
import { api } from "@/lib/api";
import { useCurrency } from "./currency-provider";
import {
  SERVICES,
  TYPES,
  COMPLEXITIES,
  TIMELINES,
  ROLES,
  computeEstimate,
  type ServiceKey,
  type TypeKey,
  type ComplexityKey,
  type TimelineKey,
  type RoleKey,
} from "@/lib/estimator/pricing";
import Link from "next/link";

type Errors = Partial<Record<"name" | "email", string>>;

export default function Estimator() {
  const { price } = useCurrency();
  const [services, setServices] = useState<Set<ServiceKey>>(new Set(["ai"]));
  const [type, setType] = useState<TypeKey>("new");
  const [complexity, setComplexity] = useState<ComplexityKey>("standard");
  const [timeline, setTimeline] = useState<TimelineKey>("standard");
  const [roles, setRoles] = useState<Set<RoleKey>>(new Set());
  const [notes, setNotes] = useState("");
  const [lead, setLead] = useState({ name: "", email: "", phone: "", company: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof computeEstimate> | null>(null);

  const toggleSet = <T extends string>(set: Set<T>, v: T, apply: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(v)) next.delete(v);
    else next.add(v);
    apply(next);
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Errors = {};
    if (!lead.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) errs.email = "Please enter a valid email.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    const est = computeEstimate({ services, type, complexity, timeline, roles });
    try {
      await fetch(api("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name.trim(),
          email: lead.email.trim(),
          phone: lead.phone.trim() || undefined,
          company: lead.company.trim() || undefined,
          source: "estimator",
          services: [...services],
          project_type: type,
          complexity,
          timeline,
          roles: [...roles],
          notes: notes.trim() || undefined,
          estimate_min: est.min,
          estimate_max: est.max,
        }),
      });
    } catch {
      /* estimate still shows; lead capture retries silently on next submit */
    }
    setResult(est);
    setSubmitting(false);
  }

  const chipBtn = (selected: boolean) => `chip ${selected ? "sel" : ""}`;
  const optBtn = (selected: boolean) => `opt ${selected ? "sel" : ""}`;

  return (
    <section className="section estimator-section" id="estimator">
      <div className="wrap">
        <Reveal>
          <div className="estimator" id="estimatorPanel">
            <div className="estimator-head">
              <h2>Instant project estimate.</h2>
              <p>Answer six questions. Get a transparent INR range in seconds, no sales call required.</p>
            </div>

            <form id="estimatorForm" onSubmit={submit} noValidate>
              <fieldset className="est-step">
                <legend>Which services do you need?</legend>
                <div className="chip-row" id="estServices">
                  {SERVICES.map(({ key: v, label }) => (
                    <button
                      key={v}
                      type="button"
                      className={chipBtn(services.has(v))}
                      aria-pressed={services.has(v)}
                      onClick={() => toggleSet(services, v, setServices)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Project type</legend>
                <div className="opt-row" id="estType">
                  {TYPES.map(({ key: v, label, hint }) => (
                    <button key={v} type="button" className={optBtn(type === v)} onClick={() => setType(v)}>
                      <strong>{label}</strong>
                      <span>{hint}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Complexity &amp; scope</legend>
                <div className="opt-row" id="estComplexity">
                  {COMPLEXITIES.map(({ key: v, label, hint }) => (
                    <button key={v} type="button" className={optBtn(complexity === v)} onClick={() => setComplexity(v)}>
                      <strong>{label}</strong>
                      <span>{hint}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Timeline</legend>
                <div className="opt-row" id="estTimeline">
                  {TIMELINES.map(({ key: v, label, hint }) => (
                    <button key={v} type="button" className={optBtn(timeline === v)} onClick={() => setTimeline(v)}>
                      <strong>{label}</strong>
                      <span>{hint}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Team roles needed</legend>
                <div className="chip-row" id="estRoles">
                  {ROLES.map(({ key: v, label }) => (
                    <button
                      key={v}
                      type="button"
                      className={chipBtn(roles.has(v))}
                      aria-pressed={roles.has(v)}
                      onClick={() => toggleSet(roles, v, setRoles)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Describe your custom requirement</legend>
                <label className="sr-only" htmlFor="estNotes">
                  Describe your custom requirement
                </label>
                <textarea
                  id="estNotes"
                  rows={3}
                  placeholder="Anything the options above don't cover: integrations, compliance, legacy systems, grand ambitions…"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </fieldset>

              <fieldset className="est-step est-lead">
                <legend>Where should we send the detailed breakdown?</legend>
                <div className="lead-grid">
                  <div className={`field ${errors.name ? "has-error" : ""}`}>
                    <label htmlFor="leadName">Full name *</label>
                    <input
                      id="leadName"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={lead.name}
                      onChange={(e) => setLead({ ...lead, name: e.target.value })}
                    />
                    {errors.name && (
                      <p className="field-err" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className={`field ${errors.email ? "has-error" : ""}`}>
                    <label htmlFor="leadEmail">Work email *</label>
                    <input
                      id="leadEmail"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={lead.email}
                      onChange={(e) => setLead({ ...lead, email: e.target.value })}
                    />
                    {errors.email && (
                      <p className="field-err" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="leadPhone">Phone / WhatsApp</label>
                    <input
                      id="leadPhone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 …"
                      value={lead.phone}
                      onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="leadCompany">Company</label>
                    <input
                      id="leadCompany"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={lead.company}
                      onChange={(e) => setLead({ ...lead, company: e.target.value })}
                    />
                  </div>
                </div>
              </fieldset>

              <div className="est-submit-row">
                <button className="btn btn-primary btn-lg" type="submit" disabled={submitting}>
                  {submitting ? "Calculating…" : "Get Instant Estimate"}
                </button>
                <p className="est-fine">
                  Your details stay with Savo Technologies: no spam, no sharing, GDPR aligned
                  handling.
                </p>
              </div>
            </form>

            <div className="est-result" id="estResult" role="status" aria-live="polite" hidden={!result}>
              {result && (
                <div className="est-result-card">
                  <p className="est-result-label">Estimated project investment</p>
                  <p className="est-result-range">
                    {price(result.min)} to {price(result.max)}
                  </p>
                  <p className="est-result-detail">
                    {services.size} service{services.size === 1 ? "" : "s"} · {complexity} complexity ·{" "}
                    {timeline} timeline · {roles.size || "no"} team role{roles.size === 1 ? "" : "s"} ·{" "}
                    {result.durText}
                  </p>
                  <div className="est-result-note">
                    <p>
                      Transparent India based delivery pricing, typically{" "}
                      <strong>40 to 60% below equivalent US/UK/Gulf rates</strong> for the same
                      seniority and quality.
                    </p>
                    <p className="est-result-caveat">
                      Indicative range. A free discovery call converts this into a fixed,
                      itemized quote.
                    </p>
                  </div>
                  <div className="est-result-ctas">
                    <Link className="btn btn-primary" href="/start-your-project/">
                      Book a Discovery Call
                    </Link>
                    <button className="btn btn-outline-inv" type="button" onClick={() => setResult(null)}>
                      Edit Requirements
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
