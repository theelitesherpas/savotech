import Link from "next/link";
import Logo from "./logo";
import CallbackForm from "./callback-form";
import CurrencySelect from "./currency-select";

const SERVICE_LINKS = [
  ["AI Development & Agents", "/services/ai-agent-development/"],
  ["Custom Software Development", "/services/custom-software/"],
  ["Mobile App Development", "/services/mobile-apps/"],
  ["Web Development", "/services/web-development/"],
  ["Cloud & DevOps", "/services/cloud-devops/"],
  ["Data & Analytics", "/services/data-analytics/"],
  ["UI/UX & Brand Identity", "/services/ui-ux/"],
  ["Digital Marketing & SEO", "/services/digital-marketing/"],
  ["QA & Testing", "/services/qa-testing/"],
  ["Product Engineering", "/services/product-engineering/"],
] as const;

const INDUSTRY_LINKS = [
  ["Healthcare", "/industries/healthcare/"],
  ["FinTech & Banking", "/industries/fintech/"],
  ["Ecommerce & Retail", "/industries/ecommerce/"],
  ["Real Estate & PropTech", "/industries/real-estate/"],
  ["Logistics & Supply Chain", "/industries/logistics/"],
  ["Education & EdTech", "/industries/education/"],
  ["Travel & Hospitality", "/industries/travel/"],
  ["Manufacturing & 4.0", "/industries/manufacturing/"],
  ["Government & Public Sector", "/industries/government/"],
  ["Energy & Utilities", "/industries/energy/"],
] as const;

const COMPANY_LINKS = [
  ["About Us", "/about/"],
  ["Case Studies", "/case-studies/"],
  ["Resources & Blog", "/resources/"],
  ["Careers", "/careers/"],
  ["Contact Us", "/contact/"],
] as const;

const QUICK_LINKS = [
  ["Client Login", "/portal/"],
  ["Hire Developers", "/hire/"],
  ["AI Agents (PRO)", "/ai-agents/"],
  ["Get a Quote", "/start-your-project/"],
  ["Ask Savo Assistant", "/#ask-savo"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="foot-col foot-brand">
            <Link href="/" aria-label="Savo Technologies home" style={{ display: "inline-flex" }}>
              <Logo compact />
            </Link>
            <p className="foot-tag">
              AI agents, web platforms and mobile apps, engineered by one accountable team
              since 2016. 10 years of global delivery from India.
            </p>
            <ul className="socials" aria-label="Social media">
              <li>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn" rel="noopener noreferrer">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M4.2 7.2v9H1.4v-9h2.8ZM4.4 4.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM15 9.1c-.4-1.3-1.5-2.1-3-2.1-1.1 0-1.9.5-2.4 1.2V7.2H6.9v9h2.8v-4.8c0-1.1.6-1.9 1.6-1.9.9 0 1.4.6 1.4 1.9v4.8H15.5v-5.3c0-1-.3-2-.5-2.6Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://x.com/" aria-label="X (Twitter)" rel="noopener noreferrer">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M13.9 3h2.7l-6 6.8L17.8 17h-5.5l-4.3-5.4L3 17H.3l6.4-7.3L1 3h5.6l3.9 5 3.4-5Zm-1 12.4h1.5L5.7 4.5H4.1l8.8 10.9Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://github.com/" aria-label="GitHub" rel="noopener noreferrer">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 1.7a8.3 8.3 0 0 0-2.6 16.2c.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1-2.8-1-.4-1-.9-1.2-.9-1.2-.8-.5 0-.5 0-.5.8 0 1.3.9 1.3.9.7 1.3 2 1 2.4.7.1-.6.3-1 .5-1.2-1.9-.2-3.8-.9-3.8-4.1 0-.9.3-1.7.9-2.2-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.3.9a7.8 7.8 0 0 1 4.2 0c1.6-1 2.3-.9 2.3-.9.5 1.1.2 2 .1 2.2.6.6.9 1.3.9 2.2 0 3.2-2 3.9-3.8 4.1.3.3.6.8.6 1.6v2.3c0 .2.2.5.6.4A8.3 8.3 0 0 0 10 1.7Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" aria-label="Instagram" rel="noopener noreferrer">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="2.6" y="2.6" width="14.8" height="14.8" rx="4.2" />
                    <circle cx="10" cy="10" r="3.6" />
                    <circle cx="14.6" cy="5.4" r=".9" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" aria-label="YouTube" rel="noopener noreferrer">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M18.6 6.2a2.3 2.3 0 0 0-1.6-1.6C15.6 4.2 10 4.2 10 4.2s-5.6 0-7 .4A2.3 2.3 0 0 0 1.4 6.2 24 24 0 0 0 1 10c0 1.3.1 2.6.4 3.8a2.3 2.3 0 0 0 1.6 1.6c1.4.4 7 .4 7 .4s5.6 0 7-.4a2.3 2.3 0 0 0 1.6-1.6c.3-1.2.4-2.5.4-3.8 0-1.3-.1-2.6-.4-3.8ZM8.1 12.8V7.2L13.2 10l-5.1 2.8Z" />
                  </svg>
                </a>
              </li>
            </ul>

            <div className="foot-ccy">
              <CurrencySelect />
            </div>
          </div>

          <nav className="foot-col" aria-label="Services">
            <h3>Services</h3>
            <ul>
              {SERVICE_LINKS.map(([t, href]) => (
                <li key={t}>
                  <Link href={href}>{t}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="foot-col" aria-label="Industries">
            <h3>Industries</h3>
            <ul>
              {INDUSTRY_LINKS.map(([t, href]) => (
                <li key={t}>
                  <Link href={href}>{t}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="foot-col" aria-label="Company and resources">
            <h3>Company</h3>
            <ul>
              {COMPANY_LINKS.map(([t, href]) => (
                <li key={t}>
                  <Link href={href}>{t}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="foot-col" aria-label="Quick links">
            <h3>Quick Links</h3>
            <ul>
              {QUICK_LINKS.map(([t, href]) => (
                <li key={t}>
                  {href.startsWith("/#") ? (
                    <Link href={href}>{t.replace(" (PRO)", "")}{t.includes("PRO") && <> <span className="pro-badge">PRO</span></>}</Link>
                  ) : (
                    <Link href={href}>{t}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-contact">
          <div className="fc-item">
            <span className="fc-monument" aria-hidden="true">
              <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 2.5V5" />
                <path d="M32 5.5c3.6 4.3 5.4 7.7 5.4 10.9 0 3.3-2.3 5.6-5.4 5.6s-5.4-2.3-5.4-5.6c0-3.2 1.8-6.6 5.4-10.9Z" />
                <path d="M17 40V24h30v16" />
                <path d="M27.5 40v-8.2c0-2.7 9-2.7 9 0V40" />
                <path d="M21.5 40v-5.5M42.5 40v-5.5" />
                <path d="M10 40V16M54 40V16" />
                <path d="M8.5 16h3M52.5 16h3" />
                <path d="m9 16 1-2.5 1 2.5M53 16l1-2.5 1 2.5" />
                <path d="M6 40h52" />
              </svg>
            </span>
            <h3>India · HQ</h3>
            <p>
              Savo Technologies Pvt. Ltd.
              <br />
              Indore · Ahmedabad
            </p>
          </div>
          <div className="fc-item">
            <span className="fc-monument" aria-hidden="true">
              <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="m44 2 1.4 2L44 6.4 42.6 4Z" />
                <path d="m38 12 4.5-6.5" />
                <circle cx="33" cy="13.5" r="3.2" />
                <path d="M30 11.5 27.5 7.5M33 10.5V6M36 11.5 38.5 7.5" />
                <path d="M33 17c-5.5 4.5-8 10.5-8.6 21h17.2C41 27.5 38.5 21.5 33 17Z" />
                <path d="M21 38h24M23.5 42h19M25 38v4M41 38v4" />
              </svg>
            </span>
            <h3>USA</h3>
            <p>
              Delivery &amp; client success
              <br />
              North America
            </p>
          </div>
          <div className="fc-item">
            <span className="fc-monument" aria-hidden="true">
              <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 40C21 22 28 10 43 4" />
                <path d="M43 4C36 14 32.5 26 32.5 40" />
                <path d="M24.5 31.5c3-.6 5.5-1.4 8-2.6" />
                <path d="M27.5 24.5c2.6-.8 5-1.9 7.3-3.4" />
                <path d="M6 40h52M14 43h36" />
              </svg>
            </span>
            <h3>Saudi Arabia &amp; GCC</h3>
            <p>
              Delivery &amp; client success
              <br />
              Riyadh · Dubai · Manama
            </p>
          </div>
          <div className="fc-item">
            <span className="fc-monument" aria-hidden="true">
              <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="18" r="5" />
                <path d="M32 15v3.2l2.6 1.3" />
                <path d="M26.5 23.5 32 8.5l5.5 15" />
                <path d="M25 23.5h14" />
                <path d="M26.5 23.5V42M37.5 23.5V42" />
                <path d="M30 30v3.5M34 30v3.5" />
                <path d="M22 42h20" />
              </svg>
            </span>
            <h3>United Kingdom</h3>
            <p>
              Delivery &amp; client success
              <br />
              London
            </p>
          </div>
          <div className="fc-item">
            <span className="fc-monument" aria-hidden="true">
              <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 38c4.5-18 15-24.5 21.5-23.5C23 19 17 27 15.5 38" />
                <path d="M21 38c4-17 15-24.5 21-23.5-7.5 5-13.5 13-14.5 23.5" />
                <path d="M33 38c4-15.5 13.5-22 18.5-21-6 5-11 12-12 21" />
                <path d="M6 38h52M10 42h44" />
              </svg>
            </span>
            <h3>Australia</h3>
            <p>
              Delivery &amp; client success
              <br />
              Sydney
            </p>
          </div>
          <div className="fc-item fc-touch">
            <h3>Talk to us</h3>
            <div className="fc-contact">
              <a href="mailto:hello@savotechnologies.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
                  <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
                </svg>
                hello@savotechnologies.com
              </a>
              <a href="tel:+917502901234">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6.8 3.8 9 3.2c.7-.2 1.4.2 1.7.9l1 2.4c.2.6.1 1.3-.4 1.7l-1.3 1.2a12.6 12.6 0 0 0 4.6 4.6l1.2-1.3c.4-.5 1.1-.6 1.7-.4l2.4 1c.7.3 1.1 1 .9 1.7l-.6 2.2c-.2.7-.8 1.2-1.5 1.2C11.6 18.4 5.6 12.4 5.6 5.3c0-.7.5-1.3 1.2-1.5Z" />
                </svg>
                +91 75029 01234
              </a>
              <Link className="btn-login fc-login" href="/portal/">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
                  <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
                </svg>
                Client Login
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-call">
          <div>
            <h3>Prefer a call back?</h3>
            <p>Pick your country, leave your number and a senior consultant calls within two business hours.</p>
          </div>
          <CallbackForm />
        </div>
        <div className="footer-bottom">
          <ul className="badges" aria-label="Compliance and security">
            <li>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2.2 17 5v5.2c0 4.2-2.9 6.8-7 8.3-4.1-1.5-7-4.1-7-8.3V5l7-2.8Z" stroke="currentColor" strokeWidth="1.4" />
                <path d="m7 10 2.1 2.1L13.4 7.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              GDPR Compliant
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="5.2" y="9" width="9.6" height="7.4" rx="1.8" stroke="currentColor" strokeWidth="1.4" />
                <path d="M7.3 9V7a2.7 2.7 0 0 1 5.4 0v2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10 12v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              SSL Secured
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="3" y="4.5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M3 8h14M6.5 11.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              PCI DSS Ready
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="7.4" stroke="currentColor" strokeWidth="1.4" />
                <path d="M6.8 10.4 9 12.6l4.2-4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              ISO 27001 Aligned
            </li>
          </ul>
          <ul className="legal">
            <li>
              © <span id="year">2026</span> Savo Technologies. All Rights Reserved.
            </li>
            <li>
              <Link href="/privacy/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms/">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
