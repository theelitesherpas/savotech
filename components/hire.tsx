"use client";

import { useMemo, useState } from "react";
import Reveal from "./reveal";
import { useCurrency } from "./currency-provider";
import Link from "next/link";
import { HIRE_ROLES } from "@/lib/hire-data";

/*
 * Homepage rate cards are generated from the same HIRE_ROLES set that powers
 * /hire/ and /hire/<slug>/, so the section and the Hire Resources pages can
 * never drift apart. "Hire Now" lands on the matching hire resource page.
 */

const ROLE_ICONS: Record<string, React.ReactNode> = {
  "frontend-developers": (
    <>
      <rect x="3" y="4.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 8.5h18M9.5 21h5M12 17.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m9 12 1.6 1.6L14 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "backend-developers": (
    <>
      <rect x="4" y="4" width="16" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="13" width="16" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="7.5" r="1.1" fill="currentColor" />
      <circle cx="8" cy="16.5" r="1.1" fill="currentColor" />
      <path d="M12 7.5h5M12 16.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  "full-stack-developers": (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12 20 7.5M12 12v9M12 12 4 7.5" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  "mobile-developers": (
    <>
      <rect x="7.5" y="3" width="9" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  "ai-ml-engineers": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M8.5 4.8 10 7M14 17l1.5 2.2M8.5 19.2 10 17M14 7l1.5-2.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  "devops-qa-engineers": (
    <>
      <path d="M7 14a4 4 0 0 1-.6-7.95A5.5 5.5 0 0 1 17 5.6 3.8 3.8 0 0 1 17.4 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 17.5 12 20l2.5-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12.5V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
};

const TIERS = { junior: 1, mid: 1.6, senior: 2.35 } as const;
const ENG = { full: 1, part: 0.55, hourly: 1 / 160 } as const;
type Tier = keyof typeof TIERS;
type Eng = keyof typeof ENG;


export default function Hire() {
  const { price } = useCurrency();
  const [tier, setTier] = useState<Tier>("junior");
  const [eng, setEng] = useState<Eng>("full");

  const label = useMemo(() => {
    if (eng === "hourly") return "/ hour";
    if (eng === "part") return "/ month · part-time";
    return "/ month · full time";
  }, [eng]);

  const rate = (base: number) => {
    let v = base * TIERS[tier] * ENG[eng];
    v = eng === "hourly" ? Math.round(v / 50) * 50 : Math.round(v / 1000) * 1000;
    return price(v, 50);
  };

  return (
    <section className="section section-light" id="hire">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <Reveal>
              <h2>Hire dedicated developers from India.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Vetted senior engineers, transparent INR pricing, and onboarding within two
                weeks. You get the quality clients hunt for among top freelancers and top Upwork
                developers in India, delivered with agency accountability. Scale up or down as the
                roadmap demands; the same engineers stay on your project for its life.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link className="text-cta" href="/hire/">
              All roles and rates
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="hire-controls" role="group" aria-label="Rate controls">
            <div className="seg" data-seg="tier">
              {(Object.keys(TIERS) as Tier[]).map((t) => (
                <button
                  key={t}
                  className={`seg-btn ${tier === t ? "is-active" : ""}`}
                  aria-pressed={tier === t}
                  onClick={() => setTier(t)}
                >
                  {t === "junior" ? "Junior" : t === "mid" ? "Mid level" : "Senior"}
                </button>
              ))}
            </div>
            <div className="seg" data-seg="engagement">
              {(Object.keys(ENG) as Eng[]).map((e) => (
                <button
                  key={e}
                  className={`seg-btn ${eng === e ? "is-active" : ""}`}
                  aria-pressed={eng === e}
                  onClick={() => setEng(e)}
                >
                  {e === "full" ? "Full time" : e === "part" ? "Part time" : "Hourly"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="roles-grid" id="rolesGrid">
          {HIRE_ROLES.map((r, i) => (
            <Reveal key={r.slug} delay={0.05 * (i % 3)}>
              <article className="role-card" data-base={r.monthly} data-hot={r.slug === "ai-ml-engineers" ? "" : undefined}>
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  {ROLE_ICONS[r.slug]}
                </svg>
                <h3>
                  {r.title}
                  {r.slug === "ai-ml-engineers" && <span className="pro-badge">PRO</span>}
                </h3>
                <p className="role-rate" aria-live="polite">
                  from {rate(r.monthly)} {label}
                </p>
                <div className="role-foot">
                  <Link className="text-cta" href={`/hire/${r.slug}/`}>
                    Hire Now
                  </Link>
                  <Link className="text-cta quiet" href="/start-your-project/">
                    Get a Quote
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="hire-note">
            Rates shown are indicative for India based remote delivery, typically 40 to 60% below
            equivalent US, UK and Gulf rates for the same seniority.{" "}
            <Link href="/start-your-project/">Talk to us</Link> about team bundles and long term engagements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
