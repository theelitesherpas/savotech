"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";

const NAV = [
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/#services", anchor: true },
  { label: "Hire Resources", href: "/#hire", anchor: true },
  { label: "Industries", href: "/#industries", anchor: true },
  { label: "Case Study", href: "/#work", anchor: true },
  { label: "Resources", href: "/resources/" },
  { label: "Contact Us", href: "/#contact", anchor: true },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        megaBtnRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

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
              <Link href="/about/">About Us</Link>
            </li>
            <li>
              <button
                ref={megaBtnRef}
                className="nav-drop-btn"
                aria-expanded={megaOpen}
                aria-controls="aiMega"
                onClick={() => setMegaOpen((v) => !v)}
              >
                AI
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
                      <p>Six production-ready personas, trained on your data, guarded by enterprise security.</p>
                      <Link className="btn btn-ghost-sm" href="/ai-agents/">
                        Explore the fleet
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {NAV.filter((n) => n.label !== "About Us").map((n) => (
              <li key={n.label}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
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
            <Link href="/about/" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <button
              className="mobile-acc"
              aria-expanded={accOpen}
              onClick={() => setAccOpen((v) => !v)}
            >
              AI
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
            </button>
            <ul className="mobile-sub" hidden={!accOpen}>
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
          {NAV.filter((n) => n.label !== "About Us").map((n) => (
            <li key={n.label}>
              <a href={n.href} onClick={() => setMobileOpen(false)}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <Link className="btn btn-primary btn-block" href="/start-your-project/" onClick={() => setMobileOpen(false)}>
          Start Your Project
        </Link>
      </div>
    </header>
  );
}
