"use client";

import { useState } from "react";
import { api } from "@/lib/api";

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
const BUDGETS = ["Under ₹5L", "₹5L to ₹15L", "₹15L to ₹40L", "₹40L+"];
const TIMELINES = ["ASAP", "1 to 3 months", "3 to 6 months", "Exploring"];

type Props = { onSubmitted: () => void };

export default function StartForm({ onSubmitted }: Props) {
  const [services, setServices] = useState<string[]>([]);
  const [projectType, setProjectType] = useState("New product");
  const [budget, setBudget] = useState("₹5L to ₹15L");
  const [timeline, setTimeline] = useState("1 to 3 months");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

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
          source: "start-your-project",
          services,
          project_type: projectType,
          complexity: budget,
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
        <div className={`field${errors.name ? " has-error" : ""}`}>
          <label htmlFor="sfName">Your name</label>
          <input
            id="sfName"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Aarav Sharma"
            autoComplete="name"
          />
          {errors.name && <p className="field-err">{errors.name}</p>}
        </div>
        <div className={`field${errors.email ? " has-error" : ""}`}>
          <label htmlFor="sfEmail">Work email</label>
          <input
            id="sfEmail"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@company.com"
            autoComplete="email"
          />
          {errors.email && <p className="field-err">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="sfPhone">Phone (optional)</label>
          <input
            id="sfPhone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 00000 00000"
            autoComplete="tel"
          />
        </div>
        <div className="field">
          <label htmlFor="sfCompany">Company (optional)</label>
          <input
            id="sfCompany"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Company Pvt. Ltd."
            autoComplete="organization"
          />
        </div>
      </div>

      <fieldset className="est-step">
        <legend>What do you need?</legend>
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
        <legend>Project type</legend>
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
          <legend>Budget range</legend>
          <div className="chip-row">
            {BUDGETS.map((b) => (
              <button
                type="button"
                key={b}
                className={`chip${budget === b ? " sel" : ""}`}
                aria-pressed={budget === b}
                onClick={() => setBudget(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="est-step">
          <legend>Timeline</legend>
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
        <label htmlFor="sfNotes">Tell us about the project</label>
        <textarea
          id="sfNotes"
          rows={4}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="What are you building, who is it for, and what does success look like?"
        />
      </div>

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
