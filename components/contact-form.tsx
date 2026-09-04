"use client";

import { useState } from "react";
import { api } from "@/lib/api";

const TOPICS = ["New project", "Hire a team", "Support", "Careers", "Something else"];

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
  org: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="9" width="7" height="11" rx="1.4" />
      <path d="M13 4.5h7V20h-7z" />
      <path d="M7 6h1M7 12.5h1M7 16h1M16 8h1M16 11.5h1M16 15h1" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.8 3.8 9 3.2c.7-.2 1.4.2 1.7.9l1 2.4c.2.6.1 1.3-.4 1.7l-1.3 1.2a12.6 12.6 0 0 0 4.6 4.6l1.2-1.3c.4-.5 1.1-.6 1.7-.4l2.4 1c.7.3 1.1 1 .9 1.7l-.6 2.2c-.2.7-.8 1.2-1.5 1.2C11.6 18.4 5.6 12.4 5.6 5.3c0-.7.5-1.3 1.2-1.5Z" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="m13.5 6.5 4 4" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z" />
    </svg>
  ),
};

/** Contact page form. Posts to /api/leads with the shared bot guard. */
export default function ContactForm() {
  const [topic, setTopic] = useState("New project");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", notes: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mountedAt] = useState(() => Date.now());

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "A valid email helps us reply.";
    if (!form.notes.trim()) errs.notes = "A sentence or two is enough.";
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
          source: "contact",
          project_type: topic,
          timeline: "standard",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
    }
  };

  if (done) {
    return (
      <div className="career-done">
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" />
          <path d="m15 24.5 6 6L33 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3>Message received.</h3>
        <p>
          A senior consultant replies within one business day. If it is urgent, WhatsApp or the
          phone line below reaches a human faster.
        </p>
      </div>
    );
  }

  return (
    <form className="start-form" onSubmit={submit} noValidate>
      <fieldset className="est-step">
        <legend>{Ico.chat}What is this about?</legend>
        <div className="chip-row">
          {TOPICS.map((t) => (
            <button
              type="button"
              key={t}
              className={`chip${topic === t ? " sel" : ""}`}
              aria-pressed={topic === t}
              onClick={() => setTopic(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="lead-grid">
        <div className={`field f-wrap${errors.name ? " has-error" : ""}`}>
          <label htmlFor="ctName">Your name</label>
          <div className="f-icon">
            {Ico.user}
            <input
              id="ctName"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Aarav Sharma"
              autoComplete="name"
            />
          </div>
          {errors.name && <p className="field-err">{errors.name}</p>}
        </div>
        <div className={`field f-wrap${errors.email ? " has-error" : ""}`}>
          <label htmlFor="ctEmail">Email</label>
          <div className="f-icon">
            {Ico.mail}
            <input
              id="ctEmail"
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
          <label htmlFor="ctPhone">Phone (optional)</label>
          <div className="f-icon">
            {Ico.phone}
            <input
              id="ctPhone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 00000 00000"
              autoComplete="tel"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="ctCompany">Company (optional)</label>
          <div className="f-icon">
            {Ico.org}
            <input
              id="ctCompany"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="Company Pvt. Ltd."
              autoComplete="organization"
            />
          </div>
        </div>
      </div>

      <div className={`field${errors.notes ? " has-error f-wrap" : ""}`} style={{ marginTop: "1.15rem" }}>
        <label htmlFor="ctNotes">{Ico.pen}Your message</label>
        <textarea
          id="ctNotes"
          rows={5}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="What are you thinking about? A sentence or two is plenty to start."
        />
        {errors.notes && <p className="field-err">{errors.notes}</p>}
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
          {busy ? "Sending" : "Send message"}
        </button>
        <p className="est-fine">
          One business day reply, NDA on request, and your details never leave Savo Technologies.
        </p>
      </div>
      {failed && (
        <p className="field-err" role="alert" style={{ marginTop: "0.6rem" }}>
          Something went wrong sending your message. Please retry, or email
          hello@savotechnologies.com directly.
        </p>
      )}
    </form>
  );
}
