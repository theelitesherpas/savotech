"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Client Portal demo: credential gate plus a working dashboard preview.
 * Sessions persist in localStorage; swap the fake gate for real auth
 * (NextAuth, Clerk, Cognito) without touching the dashboard markup.
 */

type Milestone = { t: string; due: string; state: "done" | "active" | "next" };
type Project = {
  name: string;
  code: string;
  progress: number;
  lead: string;
  team: string[];
  milestones: Milestone[];
};
type Invoice = { id: string; forWhat: string; amount: string; due: string; state: "paid" | "due" };

const PROJECTS: Project[] = [
  {
    name: "MediBridge Patient Portal",
    code: "MB 204",
    progress: 72,
    lead: "Priya N.",
    team: ["PN", "RD", "AS", "MK"],
    milestones: [
      { t: "Sprint 11: appointment rebooking", due: "Shipped", state: "done" },
      { t: "Sprint 12: lab reports module", due: "In progress", state: "active" },
      { t: "UAT round 2 with clinical team", due: "Jun 18", state: "next" },
    ],
  },
  {
    name: "GulfPay Merchant Dashboard",
    code: "GP 118",
    progress: 41,
    lead: "Rohan D.",
    team: ["RD", "VI", "SJ"],
    milestones: [
      { t: "Settlement engine v2", due: "Shipped", state: "done" },
      { t: "Dispute workflow builder", due: "In progress", state: "active" },
      { t: "PCI readiness audit", due: "Jul 02", state: "next" },
    ],
  },
];

const INVOICES: Invoice[] = [
  { id: "INV 2025 041", forWhat: "Sprint 11, MediBridge", amount: "₹4,80,000", due: "Paid", state: "paid" },
  { id: "INV 2025 042", forWhat: "Sprint 12, MediBridge", amount: "₹4,80,000", due: "Due Jun 20", state: "due" },
  { id: "INV 2025 043", forWhat: "Sprint 6, GulfPay", amount: "₹3,60,000", due: "Paid", state: "paid" },
];

const MESSAGES = [
  { from: "Priya N.", role: "Engagement lead", text: "Lab reports module is on staging. Link and test log are in the deliverables tab.", time: "2h ago" },
  { from: "Rohan D.", role: "Architect", text: "Dispute builder schema is ready for your review before we wire the UI.", time: "Yesterday" },
];

export default function PortalApp() {
  const [view, setView] = useState<"login" | "forgot" | "app">("login");
  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("savo-portal-user");
    if (saved) {
      setUser(saved);
      setView("app");
    }
  }, []);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (attempts >= 5) {
      setError("Too many attempts. Please reset your password or contact your delivery lead.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || pass.length < 6) {
      setAttempts((a) => a + 1);
      setError("Enter a valid work email and a password of at least 6 characters.");
      return;
    }
    setUser(email.split("@")[0].replace(/[._]/g, " "));
    if (remember) localStorage.setItem("savo-portal-user", email.split("@")[0].replace(/[._]/g, " "));
    setView("app");
  };

  const logout = () => {
    localStorage.removeItem("savo-portal-user");
    setUser("");
    setEmail("");
    setPass("");
    setView("login");
  };

  /* ---------------- login + forgot ---------------- */
  if (view !== "app") {
    return (
      <div className="portal-login">
        <div className="portal-login-left">
          <div className="pf-art" aria-hidden="true">
            <svg viewBox="0 0 560 320" fill="none">
              <circle cx="452" cy="64" r="46" stroke="rgba(16,16,20,.22)" strokeDasharray="3 7" />
              <circle cx="452" cy="64" r="17" fill="#F3B98A" />
              <circle cx="118" cy="252" r="9" fill="#1D28FF" />
              <circle cx="522" cy="212" r="6" fill="#2BD926" />
              <circle cx="38" cy="96" r="5" fill="#FF1E1D" />
              <rect x="96" y="70" width="286" height="196" rx="14" fill="#fff" stroke="#101014" strokeWidth="2.4" />
              <path d="M96 100h286" stroke="#101014" strokeWidth="2.4" />
              <circle cx="116" cy="85" r="4.6" fill="#1D28FF" />
              <circle cx="132" cy="85" r="4.6" fill="#FF1E1D" />
              <circle cx="148" cy="85" r="4.6" fill="#2BD926" />
              <path d="M124 216l44-42 34 26 40-52 36 30 46-58" stroke="#101014" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="168" cy="174" r="5.4" fill="#1D28FF" />
              <circle cx="242" cy="148" r="5.4" fill="#FF1E1D" />
              <circle cx="324" cy="90" r="5.4" fill="#2BD926" />
              <rect x="124" y="128" width="118" height="9" rx="4.5" fill="#F3B98A" />
              <rect x="124" y="236" width="196" height="9" rx="4.5" fill="#E9E4D8" />
              <rect x="124" y="236" width="128" height="9" rx="4.5" fill="#1D28FF" />
              <path d="M352 240c0-24 19-44 43-44h34c24 0 43 20 43 44s-19 42-43 42h-18l-16 14v-15c-25-1-43-18-43-41Z" fill="#F3B98A" stroke="#101014" strokeWidth="2.4" strokeLinejoin="round" />
              <circle cx="381" cy="240" r="4.4" fill="#101014" />
              <circle cx="397" cy="240" r="4.4" fill="#101014" />
              <circle cx="413" cy="240" r="4.4" fill="#101014" />
            </svg>
          </div>

          <div className="pf-copy">
            <h2>Your project, visible end to end.</h2>
            <p>
              Milestones, deliverables, invoices and your delivery team, in one auditable
              place. Sign in with the email your engagement lead invited you with.
            </p>
            <ul className="pf-points">
              <li>Bank grade encryption in transit and at rest</li>
              <li>Role based access with full audit trails</li>
              <li>SSO via Okta, Entra ID or Google Workspace</li>
            </ul>
          </div>
        </div>

        <div className="portal-card">
            <div className="start-card-head">
              <h2>{view === "login" ? "Sign in" : "Reset password"}</h2>
              <p>
                {view === "login"
                  ? "Use the email your engagement lead invited you with."
                  : "We will email a secure reset link, valid for 30 minutes."}
              </p>
            </div>

            {view === "login" ? (
              <form className="portal-form" onSubmit={login} noValidate>
                <div className="field f-wrap">
                  <label htmlFor="ptEmail">Work email</label>
                  <input
                    id="ptEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </div>
                <div className="field f-wrap">
                  <label htmlFor="ptPass">Password</label>
                  <input
                    id="ptPass"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Your password"
                    autoComplete="current-password"
                  />
                </div>
                <div className="portal-row">
                  <label className="portal-check">
                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                    Keep me signed in
                  </label>
                  <button type="button" className="text-cta" onClick={() => setView("forgot")}>
                    Forgot password?
                  </button>
                </div>
                {error && <p className="field-err" role="alert">{error}</p>}
                <button className="btn btn-primary btn-lg portal-submit" type="submit">
                  Sign in to portal
                </button>
                <p className="est-fine">
                  Trouble signing in?{" "}
                  <Link className="text-cta" href="/contact/">
                    Contact support
                  </Link>
                  . Accounts are provisioned by your engagement lead on day one.
                </p>
              </form>
            ) : (
              <form
                className="portal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setSent(true);
                }}
                noValidate
              >
                <div className="field f-wrap">
                  <label htmlFor="ptReset">Work email</label>
                  <input
                    id="ptReset"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </div>
                {sent ? (
                  <p className="portal-ok" role="status">
                    If that address has an account, a reset link is on its way. Check your inbox in
                    the next two minutes.
                  </p>
                ) : (
                  <button className="btn btn-primary btn-lg portal-submit" type="submit">
                    Send reset link
                  </button>
                )}
                <button type="button" className="text-cta portal-back" onClick={() => { setView("login"); setSent(false); }}>
                  Back to sign in
                </button>
              </form>
            )}
          </div>
      </div>
    );
  }

  /* ---------------- signed in dashboard ---------------- */
  return (
    <div className="portal-app">
      <header className="portal-topbar">
        <div>
          <p className="page-kicker">Client Portal</p>
          <h1>Welcome back, {user}.</h1>
        </div>
        <div className="portal-topbar-actions">
          <Link className="btn btn-ghost-sm" href="/contact/">Talk to your lead</Link>
          <button className="btn-login" type="button" onClick={logout}>
            Sign out
          </button>
        </div>
      </header>

      <div className="portal-stats">
        <div className="pstat">
          <span>Active projects</span>
          <strong>2</strong>
        </div>
        <div className="pstat">
          <span>Open tasks for you</span>
          <strong>3</strong>
        </div>
        <div className="pstat">
          <span>Next milestone</span>
          <strong>Lab reports UAT · Jun 18</strong>
        </div>
        <div className="pstat">
          <span>Invoice due</span>
          <strong>₹4,80,000 · Jun 20</strong>
        </div>
      </div>

      <div className="portal-grid">
        <section className="portal-projects" aria-label="Projects">
          <h2>Projects</h2>
          {PROJECTS.map((p) => (
            <article key={p.code} className="pproject">
              <div className="pproject-head">
                <div>
                  <h3>{p.name}</h3>
                  <p className="pproject-meta">
                    {p.code} · Lead {p.lead}
                  </p>
                </div>
                <span className="pproject-progress">{p.progress}%</span>
              </div>
              <div className="pproject-bar" role="progressbar" aria-valuenow={p.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${p.name} progress`}>
                <span style={{ width: `${p.progress}%` }} />
              </div>
              <ul className="pproject-milestones">
                {p.milestones.map((m) => (
                  <li key={m.t} className={`ms-${m.state}`}>
                    <span className="ms-tick" aria-hidden="true" />
                    <span className="ms-title">{m.t}</span>
                    <span className="ms-due">{m.due}</span>
                  </li>
                ))}
              </ul>
              <div className="pproject-team" aria-label="Team">
                {p.team.map((t, i) => (
                  <span key={t} className={`pavatar av-${i % 3}`} title={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <aside className="portal-side-col">
          <div className="portal-panel">
            <h2>Invoices</h2>
            <ul className="pinvoices">
              {INVOICES.map((inv) => (
                <li key={inv.id}>
                  <div>
                    <strong>{inv.id}</strong>
                    <span>{inv.forWhat}</span>
                  </div>
                  <div className="pinv-right">
                    <strong>{inv.amount}</strong>
                    <span className={`pinv-state ${inv.state}`}>{inv.due}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="portal-panel">
            <h2>Messages</h2>
            <ul className="pmessages">
              {MESSAGES.map((m) => (
                <li key={m.from}>
                  <span className={`pavatar av-${m.from.length % 3}`}>{m.from.split(" ").map((x) => x[0]).join("")}</span>
                  <div>
                    <p className="pm-head">
                      <strong>{m.from}</strong> · {m.role} · {m.time}
                    </p>
                    <p>{m.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <p className="portal-demo-note">
        Portal preview with sample data. Your engagement lead provisions the live workspace on
        day one, wired to your real sprints, invoices and team.
      </p>
    </div>
  );
}
