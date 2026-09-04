"use client";

import { useState } from "react";
import Reveal from "./reveal";
import { api } from "@/lib/api";
import { useCurrency } from "./currency-provider";
import Link from "next/link";

/* ------- pricing model (transparent, "affordable premium" INR) ------- */
const SERVICE_COST: Record<string, number> = {
  ai: 500000,
  web: 250000,
  mobile: 350000,
  software: 400000,
  cloud: 150000,
  data: 200000,
  uiux: 100000,
  marketing: 80000,
  qa: 60000,
};
const TYPE_MULT: Record<string, number> = { new: 1, redesign: 0.6, mvp: 0.7, enterprise: 1.6 };
const COMPLEXITY_MULT: Record<string, number> = { lean: 0.7, standard: 1, complex: 1.6 };
const TIMELINE_MULT: Record<string, number> = { flexible: 0.95, standard: 1, urgent: 1.3 };
const COMPLEXITY_MONTHS: Record<string, number> = { lean: 2, standard: 4, complex: 7 };
const ROLE_MONTHLY: Record<string, number> = {
  pm: 100000,
  designer: 70000,
  devs: 85000,
  ai: 120000,
  qa: 60000,
  devops: 95000,
};

const SERVICES = [
  ["ai", "AI Agent Development"],
  ["web", "Web Development"],
  ["mobile", "Mobile App"],
  ["software", "Custom Software"],
  ["cloud", "Cloud & DevOps"],
  ["data", "Data & Analytics"],
  ["uiux", "UI/UX Design"],
  ["marketing", "Marketing & SEO"],
  ["qa", "QA & Testing"],
] as const;

const TYPES = [
  ["new", "New build", "From zero to launch"],
  ["redesign", "Redesign", "Modernize what exists"],
  ["mvp", "MVP", "Validate fast, then scale"],
  ["enterprise", "Enterprise", "Platform built to scale"],
] as const;

const COMPLEXITIES = [
  ["lean", "Lean", "Few screens, standard integrations"],
  ["standard", "Standard", "Typical product breadth"],
  ["complex", "Complex", "Deep logic, many integrations"],
] as const;

const TIMELINES = [
  ["flexible", "Flexible", "3 to 6 months"],
  ["standard", "Standard", "2 to 3 months"],
  ["urgent", "Urgent", "4 to 8 weeks"],
] as const;

const ROLES = [
  ["pm", "Project Manager"],
  ["designer", "Designer"],
  ["devs", "Developers"],
  ["ai", "AI Engineer"],
  ["qa", "QA"],
  ["devops", "DevOps"],
] as const;


function compute(services: Set<string>, type: string, complexity: string, timeline: string, roles: Set<string>) {
  const svcSum = [...services].reduce((s, k) => s + (SERVICE_COST[k] ?? 0), 0);
  const svcBase = services.size > 1 ? svcSum * 0.88 : svcSum; // overlap discount
  const rolesCost = [...roles].reduce((s, k) => s + (ROLE_MONTHLY[k] ?? 0), 0) * COMPLEXITY_MONTHS[complexity];
  let total = (svcBase * TYPE_MULT[type] * COMPLEXITY_MULT[complexity] * TIMELINE_MULT[timeline]) + rolesCost;
  total = Math.max(total, 150000);
  const round10k = (v: number) => Math.round(v / 10000) * 10000;
  const months = COMPLEXITY_MONTHS[complexity];
  const durText =
    timeline === "urgent" ? `≈ ${Math.max(1, months - 1)} to ${months} months (compressed)` : `≈ ${months} to ${months + 2} months`;
  return {
    min: round10k(total * 0.9),
    max: round10k(total * 1.25),
    durText,
  };
}

type Errors = Partial<Record<"name" | "email", string>>;

export default function Estimator() {
  const { price } = useCurrency();
  const [services, setServices] = useState<Set<string>>(new Set(["ai"]));
  const [type, setType] = useState("new");
  const [complexity, setComplexity] = useState("standard");
  const [timeline, setTimeline] = useState("standard");
  const [roles, setRoles] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState("");
  const [lead, setLead] = useState({ name: "", email: "", phone: "", company: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ min: number; max: number; durText: string } | null>(null);

  const toggleSet = (set: Set<string>, v: string, apply: (s: Set<string>) => void) => {
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
    const est = compute(services, type, complexity, timeline, roles);
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
                  {SERVICES.map(([v, label]) => (
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
                  {TYPES.map(([v, strong, span]) => (
                    <button key={v} type="button" className={optBtn(type === v)} onClick={() => setType(v)}>
                      <strong>{strong}</strong>
                      <span>{span}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Complexity &amp; scope</legend>
                <div className="opt-row" id="estComplexity">
                  {COMPLEXITIES.map(([v, strong, span]) => (
                    <button key={v} type="button" className={optBtn(complexity === v)} onClick={() => setComplexity(v)}>
                      <strong>{strong}</strong>
                      <span>{span}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Timeline</legend>
                <div className="opt-row" id="estTimeline">
                  {TIMELINES.map(([v, strong, span]) => (
                    <button key={v} type="button" className={optBtn(timeline === v)} onClick={() => setTimeline(v)}>
                      <strong>{strong}</strong>
                      <span>{span}</span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="est-step">
                <legend>Team roles needed</legend>
                <div className="chip-row" id="estRoles">
                  {ROLES.map(([v, label]) => (
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
