"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";

type Feature = {
  icon: React.ReactNode;
  t: string;
  d: string;
  cta: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: [string, string][];
  feature?: Feature;
  flip?: boolean; // right-align the panel for nav items near the right edge
  start?: boolean; // left-align the panel for nav items near the left edge
};

const F = {
  services: (
    <svg viewBox="0 0 120 84" fill="none" aria-hidden="true">
      <rect x="34" y="12" width="52" height="60" rx="6" stroke="rgba(77,92,255,.5)" />
      <rect x="42" y="20" width="36" height="12" rx="2" stroke="rgba(29,40,255,.6)" />
      <circle cx="48" cy="46" r="3" fill="#1D28FF" /><circle cx="60" cy="46" r="3" fill="#4D5CFF" /><circle cx="72" cy="46" r="3" fill="#2BD926" />
      <circle cx="48" cy="58" r="3" fill="#4D5CFF" /><circle cx="60" cy="58" r="3" fill="#1D28FF" /><circle cx="72" cy="58" r="3" fill="#ff5c5c" />
    </svg>
  ),
  hire: (
    <svg viewBox="0 0 120 84" fill="none" aria-hidden="true">
      <circle cx="46" cy="28" r="10" stroke="rgba(29,40,255,.6)" />
      <path d="M30 66c2-12 8-18 16-18s14 6 16 18" stroke="rgba(77,92,255,.5)" />
      <circle cx="78" cy="34" r="8" stroke="rgba(43,217,38,.55)" />
      <path d="M64 66c1.5-9 6-14 13-14s9.5 5 11 14" stroke="rgba(43,217,38,.4)" />
    </svg>
  ),
  industries: (
    <svg viewBox="0 0 120 84" fill="none" aria-hidden="true">
      <rect x="30" y="16" width="24" height="24" rx="4" stroke="rgba(29,40,255,.6)" />
      <rect x="66" y="16" width="24" height="24" rx="4" stroke="rgba(255,92,92,.55)" />
      <rect x="30" y="46" width="24" height="24" rx="4" stroke="rgba(255,92,92,.45)" />
      <rect x="66" y="46" width="24" height="24" rx="4" stroke="rgba(43,217,38,.55)" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 120 84" fill="none" aria-hidden="true">
      <path d="M32 22v40M56 38v24M80 28v34" stroke="rgba(29,40,255,.6)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="16" r="3.5" fill="#1D28FF" /><circle cx="56" cy="32" r="3.5" fill="#4D5CFF" /><circle cx="80" cy="22" r="3.5" fill="#2BD926" />
      <path d="M24 70h72" stroke="rgba(77,92,255,.4)" />
    </svg>
  ),
  resources: (
    <svg viewBox="0 0 120 84" fill="none" aria-hidden="true">
      <rect x="34" y="14" width="52" height="56" rx="6" stroke="rgba(77,92,255,.5)" />
      <path d="M46 30h28M46 42h28M46 54h18" stroke="rgba(29,40,255,.6)" strokeLinecap="round" />
      <circle cx="90" cy="16" r="4" fill="#2BD926" />
    </svg>
  ),
};

const NAV: NavItem[] = [
  {
    label: "Services",
    href: "/#services",
    start: true,
    feature: {
      icon: F.services,
      t: "Scope it in minutes",
      d: "The instant estimator prices your project in INR with no contact details needed.",
      cta: "Open the estimator",
      href: "/#estimator",
    },
    children: [
      ["AI Agent Development", "/services/ai-agent-development/"],
      ["Web Development", "/services/web-development/"],
      ["Mobile App Development", "/services/mobile-apps/"],
      ["UI/UX Design", "/services/ui-ux/"],
      ["Cloud & DevOps", "/services/cloud-devops/"],
      ["Data & Analytics", "/services/data-analytics/"],
    ],
  },
  {
    label: "Hire Resources",
    href: "/#hire",
    feature: {
      icon: F.hire,
      t: "A senior dev in your standup within 2 weeks",
      d: "Vetted engineers, transparent INR monthly rates and a two week trial on every engagement.",
      cta: "See roles and rates",
      href: "/#hire",
    },
    children: [
      ["AI & ML Engineers", "/hire/ai-ml-engineers/"],
      ["Frontend Developers", "/hire/frontend-developers/"],
      ["Backend Developers", "/hire/backend-developers/"],
      ["Full Stack Developers", "/hire/full-stack-developers/"],
      ["Mobile Developers", "/hire/mobile-developers/"],
      ["DevOps & QA Engineers", "/hire/devops-qa-engineers/"],
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
    feature: {
      icon: F.industries,
      t: "Ten sectors, one playbook",
      d: "Regulation fluent teams in healthcare, fintech and the Gulf energy economy.",
      cta: "Explore industries",
      href: "/#industries",
    },
    children: [
      ["Healthcare", "/industries/healthcare/"],
      ["FinTech & Banking", "/industries/fintech/"],
      ["Ecommerce & Retail", "/industries/ecommerce/"],
      ["Real Estate", "/industries/real-estate/"],
      ["Logistics & Supply Chain", "/industries/logistics/"],
      ["Energy & Utilities", "/industries/"],
    ],
  },
  { label: "Case Study", href: "/case-studies/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact Us", href: "/contact/" },
];

const Caret = () => (
  <svg className="caret" viewBox="0 0 12 12" aria-hidden="true">
    <path
      d="M2.5 4.5 6 8l3.5-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAcc, setOpenAcc] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);
  const dropRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen && !openDrop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (megaOpen) {
        setMegaOpen(false);
        megaBtnRef.current?.focus();
      }
      if (openDrop) {
        const label = openDrop;
        setOpenDrop(null);
        dropRefs.current[label]?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (megaOpen && megaRef.current && !megaRef.current.contains(t) && !megaBtnRef.current?.contains(t)) setMegaOpen(false);
      if (openDrop) {
        const btn = dropRefs.current[openDrop];
        const panel = btn?.parentElement?.querySelector(".mega");
        if (btn?.contains(t) || panel?.contains(t)) return;
        setOpenDrop(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen, openDrop]);

  const mobileNavRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) mobileNavRef.current?.scrollTo({ top: 0 });
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // grace timer: keep the panel open briefly when the mouse leaves,
  // so diagonal moves between the button and the submenu never close it
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keepOpen = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const closeSoon = (close: () => void) => {
    keepOpen();
    closeTimer.current = setTimeout(close, 160);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} id="siteHeader">
      <div className="header-inner">
        <Link href="/" aria-label="Savo Technologies home" style={{ display: "inline-flex" }}>
          <Logo />
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul className="nav-list">
            <li
              onMouseEnter={() => {
                keepOpen();
                setOpenDrop(null);
                setMegaOpen(true);
              }}
              onMouseLeave={() => closeSoon(() => setMegaOpen(false))}
            >
              <button
                ref={megaBtnRef}
                className="nav-drop-btn"
                aria-expanded={megaOpen}
                aria-controls="aiMega"
                onClick={() => {
                  setOpenDrop(null);
                  setMegaOpen((v) => !v);
                }}
              >
                AI
                <Caret />
              </button>
              <div className="mega mega-start" id="aiMega" ref={megaRef} hidden={!megaOpen}>
                <div className="mega-grid">
                  <div className="mega-col">
                    <p className="mega-title">AI Services</p>
                    <Link className="mega-link" href="/ai-agents/">
                      <span>AI Agents</span>
                      <span className="pro-badge">PRO</span>
                    </Link>
                    <Link className="mega-link" href="/ai/generative-ai/">
                      <span>Generative AI &amp; LLM Integration</span>
                    </Link>
                    <Link className="mega-link" href="/ai/consulting/">
                      <span>AI Consulting &amp; Strategy</span>
                    </Link>
                    <Link className="mega-link" href="/ai/machine-learning/">
                      <span>Machine Learning &amp; Analytics</span>
                    </Link>
                  </div>
                  <div className="mega-feature">
                    <p className="mega-title">Flagship</p>
                    <div className="mega-feature-card">
                      <svg viewBox="0 0 120 84" fill="none" aria-hidden="true">
                        <circle cx="60" cy="42" r="30" stroke="rgba(77,92,255,.4)" strokeDasharray="3 6" />
                        <circle cx="60" cy="42" r="18" stroke="rgba(29,40,255,.55)" />
                        <circle cx="60" cy="42" r="5" fill="#1D28FF" />
                        <circle cx="88" cy="30" r="4" fill="#4D5CFF" />
                        <circle cx="34" cy="54" r="4" fill="#2BD926" />
                        <circle cx="72" cy="66" r="3" fill="#1D28FF" />
                        <circle cx="46" cy="20" r="3" fill="#4D5CFF" />
                      </svg>
                      <h3>Deploy your first AI agent in 2 to 4 weeks</h3>
                      <p>Six production ready personas, trained on your data, guarded by enterprise security.</p>
                      <Link className="btn btn-ghost-sm" href="/ai-agents/">
                        Explore the fleet
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {NAV.map((n) =>
              n.children ? (
                <li
                  key={n.label}
                  onMouseEnter={() => {
                    keepOpen();
                    setMegaOpen(false);
                    setOpenDrop(n.label);
                  }}
                  onMouseLeave={() => closeSoon(() => setOpenDrop((cur) => (cur === n.label ? null : cur)))}
                >
                  <button
                    ref={(el) => {
                      dropRefs.current[n.label] = el;
                    }}
                    className="nav-drop-btn"
                    aria-expanded={openDrop === n.label}
                    aria-controls={`drop-${n.label.replace(/\s+/g, "")}`}
                    onClick={() => {
                      setMegaOpen(false);
                      setOpenDrop((cur) => (cur === n.label ? null : n.label));
                    }}
                  >
                    {n.label}
                    <Caret />
                  </button>
                  <div
                    className={`mega mega-sub${n.flip ? " mega-flip" : ""}${n.start ? " mega-start" : ""}`}
                    id={`drop-${n.label.replace(/\s+/g, "")}`}
                    hidden={openDrop !== n.label}
                  >
                    <div className="mega-grid">
                      <div className="mega-col">
                        <p className="mega-title">{n.label}</p>
                        {n.children?.map(([label, href]) => (
                          <Link className="mega-link" key={label} href={href}>
                            <span>{label}</span>
                          </Link>
                        ))}
                        <Link className="mega-link mega-all" href={n.href}>
                          <span>All {n.label}</span>
                          <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path
                              d="M2 8h11M9 3.5 13.5 8 9 12.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                      {n.feature && (
                        <div className="mega-feature">
                          <p className="mega-title">Featured</p>
                          <div className="mega-feature-card">
                            {n.feature.icon}
                            <h3>{n.feature.t}</h3>
                            <p>{n.feature.d}</p>
                            <Link className="btn btn-ghost-sm" href={n.feature.href}>
                              {n.feature.cta}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={n.label}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="header-actions">
          <Link className="btn-login" href="/portal/">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
              <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
            </svg>
            Client Login
          </Link>
          <Link className="btn btn-primary btn-header" href="/start-your-project/">
            Start Your Project
          </Link>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      <div className="mobile-nav" id="mobileNav" ref={mobileNavRef} hidden={!mobileOpen}>
        <ul>
          <li>
            <button
              className="mobile-acc"
              aria-expanded={openAcc === "AI"}
              onClick={() => setOpenAcc((cur) => (cur === "AI" ? null : "AI"))}
            >
              AI
              <Caret />
            </button>
            <ul className="mobile-sub" hidden={openAcc !== "AI"}>
              <li>
                <Link href="/ai-agents/" onClick={() => setMobileOpen(false)}>
                  AI Agents <span className="pro-badge">PRO</span>
                </Link>
              </li>
              <li>
                <Link href="/ai/generative-ai/" onClick={() => setMobileOpen(false)}>
                  Generative AI &amp; LLM Integration
                </Link>
              </li>
              <li>
                <Link href="/ai/consulting/" onClick={() => setMobileOpen(false)}>
                  AI Consulting &amp; Strategy
                </Link>
              </li>
              <li>
                <Link href="/ai/machine-learning/" onClick={() => setMobileOpen(false)}>
                  Machine Learning &amp; Analytics
                </Link>
              </li>
            </ul>
          </li>
          {NAV.map((n) =>
            n.children ? (
              <li key={n.label}>
                <button
                  className="mobile-acc"
                  aria-expanded={openAcc === n.label}
                  onClick={() => setOpenAcc((cur) => (cur === n.label ? null : n.label))}
                >
                  {n.label}
                  <Caret />
                </button>
                <ul className="mobile-sub" hidden={openAcc !== n.label}>
                  {n.children.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} onClick={() => setMobileOpen(false)}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={n.label}>
                <a href={n.href} onClick={() => setMobileOpen(false)}>
                  {n.label}
                </a>
              </li>
            )
          )}
        </ul>
        <Link className="btn-login btn-block-login" href="/portal/" onClick={() => setMobileOpen(false)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
            <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
          </svg>
          Client Login
        </Link>
        <Link className="btn btn-primary btn-block" href="/start-your-project/" onClick={() => setMobileOpen(false)}>
          Start Your Project
        </Link>
      </div>
    </header>
  );
}
