"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useCurrency } from "./currency-provider";

const SERVICES = [
  "AI Agents",
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "UI/UX Design",
  "Cloud & DevOps",
  "Data & Analytics",
  "QA & Testing",
  "Digital Marketing",
];
const PROJECT_TYPES = ["New product", "Scale an existing product", "Team extension", "Automation"];
const TIMELINES = ["ASAP", "1 to 3 months", "3 to 6 months", "Exploring"];

type Props = { onSubmitted: () => void };

const Ico = {
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 19c.9-3 3.4-4.6 6.5-4.6s5.6 1.6 6.5 4.6" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.8 3.8 9 3.2c.7-.2 1.4.2 1.7.9l1 2.4c.2.6.1 1.3-.4 1.7l-1.3 1.2a12.6 12.6 0 0 0 4.6 4.6l1.2-1.3c.4-.5 1.1-.6 1.7-.4l2.4 1c.7.3 1.1 1 .9 1.7l-.6 2.2c-.2.7-.8 1.2-1.5 1.2C11.6 18.4 5.6 12.4 5.6 5.3c0-.7.5-1.3 1.2-1.5Z" />
    </svg>
  ),
  org: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="9" width="7" height="11" rx="1.4" />
      <path d="M13 4.5h7V20h-7z" />
      <path d="M7 6h1M7 12.5h1M7 16h1M16 8h1M16 11.5h1M16 15h1" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="m13.5 6.5 4 4" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5Z" />
      <path d="m4.5 12 7.5 4 7.5-4M4.5 16l7.5 4 7.5-4" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <rect x="4.5" y="7.5" width="15" height="12" rx="2" />
      <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <rect x="3.5" y="6.5" width="17" height="12" rx="2.2" />
      <path d="M3.5 10.5h17M16 14.5h2" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
};

export default function StartForm({ onSubmitted }: Props) {
  const { compact } = useCurrency();
  const BUDGETS = [`Under ${compact(500000)}`, `${compact(500000)} to ${compact(1500000)}`, `${compact(1500000)} to ${compact(4000000)}`, `${compact(4000000)}+`];
  const [services, setServices] = useState<string[]>([]);
  const [projectType, setProjectType] = useState("New product");
  const [budget, setBudget] = useState(1);
  const [timeline, setTimeline] = useState("1 to 3 months");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", notes: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mountedAt] = useState(() => Date.now());

  const toggle = (list: string[], set: (v: string[]) => void, item: string) =>
    set(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "A valid work email helps us reply.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    setFailed(false);
    try {
      const res = await fetch(api("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          elapsed: Date.now() - mountedAt,
          source: "start-your-project",
          services,
          project_type: projectType,
          complexity: BUDGETS[budget],
          timeline,
          roles: [],
          estimate_min: 0,
          estimate_max: 0,
        }),
      });
      if (!res.ok) throw new Error("failed");
      onSubmitted();
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="start-form" onSubmit={submit} noValidate>
      <div className="lead-grid">
        <div className={`field f-wrap${errors.name ? " has-error" : ""}`}>
          <label htmlFor="sfName">Your name</label>
          <div className="f-icon">
            {Ico.user}
            <input
              id="sfName"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Aarav Sharma"
              autoComplete="name"
            />
          </div>
          {errors.name && <p className="field-err">{errors.name}</p>}
        </div>
        <div className={`field f-wrap${errors.email ? " has-error" : ""}`}>
          <label htmlFor="sfEmail">Work email</label>
          <div className="f-icon">
            {Ico.mail}
            <input
              id="sfEmail"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </div>
          {errors.email && <p className="field-err">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="sfPhone">Phone (optional)</label>
          <div className="f-icon">
            {Ico.phone}
            <input
              id="sfPhone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 00000 00000"
              autoComplete="tel"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="sfCompany">Company (optional)</label>
          <div className="f-icon">
            {Ico.org}
            <input
              id="sfCompany"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Company Pvt. Ltd."
              autoComplete="organization"
            />
          </div>
        </div>
      </div>

      <fieldset className="est-step">
        <legend>{Ico.layers}What do you need?</legend>
        <div className="chip-row">
          {SERVICES.map((s) => (
            <button
              type="button"
              key={s}
              className={`chip${services.includes(s) ? " sel" : ""}`}
              aria-pressed={services.includes(s)}
              onClick={() => toggle(services, setServices, s)}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="est-step">
        <legend>{Ico.box}Project type</legend>
        <div className="chip-row">
          {PROJECT_TYPES.map((t) => (
            <button
              type="button"
              key={t}
              className={`chip${projectType === t ? " sel" : ""}`}
              aria-pressed={projectType === t}
              onClick={() => setProjectType(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="lead-grid">
        <fieldset className="est-step">
          <legend>{Ico.wallet}Budget range</legend>
          <div className="chip-row">
            {BUDGETS.map((b, i) => (
              <button
                type="button"
                key={b}
                className={`chip${budget === i ? " sel" : ""}`}
                aria-pressed={budget === i}
                onClick={() => setBudget(i)}
              >
                {b}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="est-step">
          <legend>{Ico.clock}Timeline</legend>
          <div className="chip-row">
            {TIMELINES.map((t) => (
              <button
                type="button"
                key={t}
                className={`chip${timeline === t ? " sel" : ""}`}
                aria-pressed={timeline === t}
                onClick={() => setTimeline(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="field" style={{ marginTop: "1.15rem" }}>
        <label htmlFor="sfNotes">{Ico.pen}Tell us about the project</label>
        <textarea
          id="sfNotes"
          rows={5}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="What are you building, who is it for, and what does success look like? The more you share, the sharper our first reply."
        />
      </div>

      <input
        className="hp-field"
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="est-submit-row">
        <button className="btn btn-primary btn-lg" type="submit" disabled={busy}>
          {busy ? "Sending your brief" : "Send Project Brief"}
        </button>
        <p className="est-fine">
          No sales spam. A senior engineer reviews every brief. Your details stay with Savo
          Technologies.
        </p>
      </div>
      {failed && (
        <p className="field-err" role="alert" style={{ marginTop: "0.6rem" }}>
          Something went wrong sending your brief. Please retry, or email
          hello@savotechnologies.com directly.
        </p>
      )}
    </form>
  );
}
