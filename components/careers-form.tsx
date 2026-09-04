"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { ROLES } from "@/lib/careers-data";

const EXPERIENCE = ["0 to 1 year", "1 to 3 years", "3 to 5 years", "5 to 8 years", "8+ years"];
const CTCS = ["Under ₹10L", "₹10L to ₹20L", "₹20L to ₹35L", "₹35L+", "Open to discussion"];
const NOTICES = ["Immediate", "15 days", "30 days", "60 days", "90 days"];
const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AI / ML",
  "Flutter",
  "React Native",
  "AWS",
  "Docker",
  "Kubernetes",
  "CI / CD",
  "Testing",
  "UI / UX",
  "Figma",
];

type Props = { initialRole?: string };

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
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6.5-5.3-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.7 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </svg>
  ),
  org: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="9" width="7" height="11" rx="1.4" />
      <path d="M13 4.5h7V20h-7z" />
      <path d="M7 6h1M7 12.5h1M7 16h1M16 8h1M16 11.5h1M16 15h1" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 14a4.2 4.2 0 0 0 6 0l3.2-3.2a4.24 4.24 0 0 0-6-6L11.8 6.2" />
      <path d="M14 10a4.2 4.2 0 0 0-6 0l-3.2 3.2a4.24 4.24 0 0 0 6 6L12.2 17.8" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h4L19.5 8.5a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="m13.5 6.5 4 4" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <path d="M12 3.5l1.8 5 5 1.8-5 1.8-1.8 5-1.8-5-5-1.8 5-1.8L12 3.5Z" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <rect x="3.5" y="6.5" width="17" height="12" rx="2.2" />
      <path d="M3.5 10.5h17M16 14.5h2" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="legend-ico">
      <rect x="4.5" y="7.5" width="15" height="12" rx="2" />
      <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
    </svg>
  ),
};

/** Careers application form: openings grid + full IT industry application, bot guarded. */
const FILTERS: [string, string][] = [
  ["all", "All roles"],
  ["eng", "Engineering"],
  ["design", "Design"],
  ["ops", "Operations"],
];

export default function CareersApply({ initialRole }: Props) {
  const [filter, setFilter] = useState("all");
  const [openRole, setOpenRole] = useState<string | null>(null);
  const visible = ROLES.filter((r) => filter === "all" || r.cat === filter);
  const [role, setRole] = useState(initialRole ?? ROLES[0].title);
  const [experience, setExperience] = useState("1 to 3 years");
  const [ctc, setCtc] = useState("Open to discussion");
  const [notice, setNotice] = useState("30 days");
  const [skills, setSkills] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    links: "",
    resume: "",
    notes: "",
    consent: false,
    website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const [mountedAt] = useState(() => Date.now());

  const toggleSkill = (s: string) =>
    setSkills((list) => (list.includes(s) ? list.filter((x) => x !== s) : [...list, s]));

  const pickRole = (title: string) => {
    setRole(title);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "A valid email is required.";
    if (!form.city.trim()) errs.city = "Your current city helps with logistics.";
    if (!form.resume.trim() && !form.links.trim())
      errs.resume = "Share a resume link or a GitHub / portfolio link.";
    if (!form.consent) errs.consent = "Please confirm we may process your application.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    setFailed(false);
    try {
      const res = await fetch(api("/api/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website: form.website,
          elapsed: Date.now() - mountedAt,
          source: "careers",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          project_type: role,
          complexity: experience,
          timeline: notice,
          services: skills,
          roles: [form.city, ctc],
          notes: [
            form.notes,
            form.links ? `Portfolio / GitHub: ${form.links}` : "",
            form.resume ? `Resume: ${form.resume}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          estimate_min: ctc.includes("Under") ? 0 : parseInt(ctc.replace(/\D/g, ""), 10) || 0,
          estimate_max: parseInt(ctc.replace(/\D+/g, "").split(/\D/).pop() ?? "0", 10) || 0,
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

  return (
    <>
      <div className="role-filters" role="tablist" aria-label="Filter roles by team">
        {FILTERS.map(([key, label]) => (
          <button
            type="button"
            key={key}
            role="tab"
            aria-selected={filter === key}
            className={`chip${filter === key ? " sel" : ""}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="role-grid">
        {visible.map((r) => {
          const open = openRole === r.title;
          return (
            <article key={r.title} className={`role-card${open ? " is-open" : ""}`}>
              <div className="role-top">
                <span className="role-track">{r.track}</span>
                <span className="role-type">Full time · Remote (India)</span>
              </div>
              <h3>{r.title}</h3>
              <ul className="role-meta">
                <li>{r.exp}</li>
                <li>{r.band}</li>
                <li>Indore · Ahmedabad · Remote</li>
              </ul>
              <p>{r.blurb}</p>
              <div className="role-actions">
                <button type="button" className="role-apply" onClick={() => pickRole(r.title)}>
                  Apply for this role
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="role-more"
                  aria-expanded={open}
                  onClick={() => setOpenRole(open ? null : r.title)}
                >
                  {open ? "Hide details" : "Role details"}
                </button>
              </div>
              {open && (
                <div className="role-details">
                  <div>
                    <h4>What you will do</h4>
                    <ul>
                      {r.duties.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>What you bring</h4>
                    <ul>
                      {r.brings.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="start-grid" id="apply">
        <div className="start-card">
          <div className="start-card-head">
            <h2>Apply now</h2>
            <p>Ten minutes, one form, no portals to create accounts on.</p>
          </div>

          {done ? (
            <div className="career-done">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" />
                <path d="m15 24.5 6 6L33 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>Application received.</h3>
              <p>
                A senior engineer reviews every application personally. Expect a reply within two
                business days, either way. Meanwhile, meet the agent fleet your work could power.
              </p>
              <Link className="btn btn-ghost-sm" href="/ai-agents/">
                Meet our AI agents
              </Link>
            </div>
          ) : (
            <form className="start-form" onSubmit={submit} noValidate>
              <fieldset className="est-step">
                <legend>{Ico.spark}Role you are applying for</legend>
                <div className="chip-row">
                  {ROLES.map((r) => (
                    <button
                      type="button"
                      key={r.title}
                      className={`chip${role === r.title ? " sel" : ""}`}
                      aria-pressed={role === r.title}
                      onClick={() => setRole(r.title)}
                    >
                      {r.title}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="lead-grid">
                <div className={`field f-wrap${errors.name ? " has-error" : ""}`}>
                  <label htmlFor="cfName">Full name</label>
                  <div className="f-icon">
                    {Ico.user}
                    <input
                      id="cfName"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Aarav Sharma"
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && <p className="field-err">{errors.name}</p>}
                </div>
                <div className={`field f-wrap${errors.email ? " has-error" : ""}`}>
                  <label htmlFor="cfEmail">Email</label>
                  <div className="f-icon">
                    {Ico.mail}
                    <input
                      id="cfEmail"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <p className="field-err">{errors.email}</p>}
                </div>
                <div className="field">
                  <label htmlFor="cfPhone">Phone (optional)</label>
                  <div className="f-icon">
                    {Ico.phone}
                    <input
                      id="cfPhone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className={`field f-wrap${errors.city ? " has-error" : ""}`}>
                  <label htmlFor="cfCity">Current city</label>
                  <div className="f-icon">
                    {Ico.pin}
                    <input
                      id="cfCity"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Bengaluru"
                    />
                  </div>
                  {errors.city && <p className="field-err">{errors.city}</p>}
                </div>
                <div className="field">
                  <label htmlFor="cfCompany">Current employer (optional)</label>
                  <div className="f-icon">
                    {Ico.org}
                    <input
                      id="cfCompany"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Where you work today"
                      autoComplete="organization"
                    />
                  </div>
                </div>
              </div>

              <fieldset className="est-step">
                <legend>{Ico.spark}Key skills</legend>
                <div className="chip-row">
                  {SKILLS.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className={`chip${skills.includes(s) ? " sel" : ""}`}
                      aria-pressed={skills.includes(s)}
                      onClick={() => toggleSkill(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="lead-grid">
                <fieldset className="est-step">
                  <legend>{Ico.box}Experience</legend>
                  <div className="chip-row">
                    {EXPERIENCE.map((x) => (
                      <button
                        type="button"
                        key={x}
                        className={`chip${experience === x ? " sel" : ""}`}
                        aria-pressed={experience === x}
                        onClick={() => setExperience(x)}
                      >
                        {x}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="est-step">
                  <legend>{Ico.clock}Notice period</legend>
                  <div className="chip-row">
                    {NOTICES.map((n) => (
                      <button
                        type="button"
                        key={n}
                        className={`chip${notice === n ? " sel" : ""}`}
                        aria-pressed={notice === n}
                        onClick={() => setNotice(n)}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <fieldset className="est-step">
                <legend>{Ico.wallet}Expected annual CTC</legend>
                <div className="chip-row">
                  {CTCS.map((c) => (
                    <button
                      type="button"
                      key={c}
                      className={`chip${ctc === c ? " sel" : ""}`}
                      aria-pressed={ctc === c}
                      onClick={() => setCtc(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="lead-grid">
                <div className={`field f-wrap${errors.links ? " has-error" : ""}`}>
                  <label htmlFor="cfLinks">GitHub or portfolio link</label>
                  <div className="f-icon">
                    {Ico.link}
                    <input
                      id="cfLinks"
                      value={form.links}
                      onChange={(e) => setForm({ ...form, links: e.target.value })}
                      placeholder="github.com/you"
                    />
                  </div>
                </div>
                <div className={`field f-wrap${errors.resume ? " has-error" : ""}`}>
                  <label htmlFor="cfResume">Resume link (Drive or Dropbox)</label>
                  <div className="f-icon">
                    {Ico.link}
                    <input
                      id="cfResume"
                      value={form.resume}
                      onChange={(e) => setForm({ ...form, resume: e.target.value })}
                      placeholder="Link to your PDF resume"
                    />
                  </div>
                  {errors.resume && <p className="field-err">{errors.resume}</p>}
                </div>
              </div>

              <div className="field" style={{ marginTop: "1.15rem" }}>
                <label htmlFor="cfNotes">{Ico.pen}Why Savo? (optional)</label>
                <textarea
                  id="cfNotes"
                  rows={4}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="One honest paragraph beats a cover letter. What do you want to build next?"
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

              <label className={`consent-row${errors.consent ? " has-error" : ""}`}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
                <span>
                  I agree that Savo Technologies may process this application for recruitment
                  purposes, as described in the privacy policy.
                </span>
              </label>
              {errors.consent && <p className="field-err">{errors.consent}</p>}

              <div className="est-submit-row">
                <button className="btn btn-primary btn-lg" type="submit" disabled={busy}>
                  {busy ? "Submitting application" : "Submit Application"}
                </button>
                <p className="est-fine">
                  Read by a senior engineer within two business days. Your details are never
                  shared outside Savo Technologies.
                </p>
              </div>
              {failed && (
                <p className="field-err" role="alert" style={{ marginTop: "0.6rem" }}>
                  Something went wrong submitting your application. Please retry, or email
                  careers@savotechnologies.com directly.
                </p>
              )}
            </form>
          )}
        </div>

        <aside className="start-aside">
          <div className="start-aside-card">
            <div className="aside-head">
              <div className="aside-ico" aria-hidden="true">{Ico.clock}</div>
              <h3>How we hire</h3>
            </div>
            <ol className="start-steps">
              <li>
                <strong>Application review</strong>
                <span>Two business days, personal reply either way.</span>
              </li>
              <li>
                <strong>Technical conversation</strong>
                <span>60 minutes on real problems, not trick puzzles.</span>
              </li>
              <li>
                <strong>Pairing session</strong>
                <span>A paid two hour session on a small real task.</span>
              </li>
              <li>
                <strong>Offer and start</strong>
                <span>Written offer within a week of the final round.</span>
              </li>
            </ol>
          </div>
          <div className="start-aside-card start-aside-ink">
            <div className="aside-head">
              <div className="aside-ico" aria-hidden="true">{Ico.mail}</div>
              <h3>Questions first?</h3>
            </div>
            <p>
              Write to <a href="mailto:careers@savotechnologies.com">careers@savotechnologies.com</a>{" "}
              and a human replies, usually the same day.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
