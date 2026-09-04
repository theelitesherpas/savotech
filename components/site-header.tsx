"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";

type NavItem = {
  label: string;
  href: string;
  children?: [string, string][];
};

const NAV: NavItem[] = [
  {
    label: "Services",
    href: "/#services",
    children: [
      ["AI Agent Development", "/ai-agents/"],
      ["Web Development", "/#services"],
      ["Mobile App Development", "/#services"],
      ["UI/UX Design", "/#services"],
      ["Cloud & DevOps", "/#services"],
      ["Data & Analytics", "/#services"],
    ],
  },
  {
    label: "Hire Resources",
    href: "/#hire",
    children: [
      ["AI & ML Engineers", "/#hire"],
      ["Frontend Developers", "/#hire"],
      ["Backend Developers", "/#hire"],
      ["Full Stack Developers", "/#hire"],
      ["Mobile Developers", "/#hire"],
      ["DevOps & QA Engineers", "/#hire"],
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
    children: [
      ["Healthcare", "/#industries"],
      ["FinTech & Banking", "/#industries"],
      ["Ecommerce & Retail", "/#industries"],
      ["Real Estate", "/#industries"],
      ["Logistics & Supply Chain", "/#industries"],
      ["Energy & Utilities", "/#industries"],
    ],
  },
  {
    label: "Case Study",
    href: "/#work",
    children: [
      ["MediBridge Health", "/#work"],
      ["GulfPay", "/#work"],
      ["Sahm AI Support Desk", "/#work"],
      ["RideLink", "/#work"],
      ["ClearLedger", "/#work"],
      ["EduSpring", "/#work"],
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      ["Blog & Engineering Notes", "/resources/"],
      ["Case Studies", "/#work"],
      ["FAQs", "/#faq"],
      ["Client Portal", "/portal/"],
    ],
  },
  { label: "Careers", href: "/careers/" },
  { label: "Contact Us", href: "/#contact" },
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
      if (megaOpen && megaRef.current && !megaRef.current.contains(t) && !megaBtnRef.current?.contains(t)) setMegaOpen(false);
      if (openDrop) {
        const btn = dropRefs.current[openDrop];
        const panel = btn?.parentElement?.querySelector(".nav-drop");
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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`} id="siteHeader">
      <div className="header-inner">
        <Link href="/" aria-label="Savo Technologies home" style={{ display: "inline-flex" }}>
          <Logo />
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul className="nav-list">
            <li>
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
              <div className="mega" id="aiMega" ref={megaRef} hidden={!megaOpen}>
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
                    setMegaOpen(false);
                    setOpenDrop(n.label);
                  }}
                  onMouseLeave={() => setOpenDrop((cur) => (cur === n.label ? null : cur))}
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
                    className="nav-drop"
                    id={`drop-${n.label.replace(/\s+/g, "")}`}
                    hidden={openDrop !== n.label}
                  >
                    {n.children.map(([label, href]) => (
                      <a key={label} className="nav-drop-link" href={href}>
                        {label}
                      </a>
                    ))}
                    <a className="nav-drop-link nav-drop-all" href={n.href}>
                      All {n.label}
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
                    </a>
                  </div>
                </li>
              ) : (
                <li key={n.label}>
                  <a href={n.href}>{n.label}</a>
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

      <div className="mobile-nav" id="mobileNav" hidden={!mobileOpen}>
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
