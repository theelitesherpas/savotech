import Link from "next/link";
import Logo from "./logo";
import NewsletterForm from "./newsletter-form";

const SERVICE_LINKS = [
  ["AI Development & Agents", "/services/ai-development/"],
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
  ["E-commerce & Retail", "/industries/ecommerce/"],
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
  ["Case Studies", "/#work"],
  ["Resources & Blog", "/resources/"],
  ["Careers", "/careers/"],
  ["Contact Us", "/#contact"],
] as const;

const QUICK_LINKS = [
  ["Client Login", "/portal/"],
  ["Hire Developers", "/#hire"],
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
                    <a href={href}>{t.replace(" (PRO)", "")}{t.includes("PRO") && <> <span className="pro-badge">PRO</span></>}</a>
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
            <h3>India · HQ</h3>
            <p>
              Savo Technologies Pvt. Ltd.
              <br />
              Indore · Ahmedabad
            </p>
          </div>
          <div className="fc-item">
            <h3>USA</h3>
            <p>
              Delivery &amp; client success
              <br />
              North America
            </p>
          </div>
          <div className="fc-item">
            <h3>Saudi Arabia &amp; GCC</h3>
            <p>
              Delivery &amp; client success
              <br />
              Riyadh · Dubai · Manama
            </p>
          </div>
          <div className="fc-item">
            <h3>United Kingdom</h3>
            <p>
              Delivery &amp; client success
              <br />
              London
            </p>
          </div>
          <div className="fc-item">
            <h3>Australia</h3>
            <p>
              Delivery &amp; client success
              <br />
              Sydney
            </p>
          </div>
          <div className="fc-item fc-touch">
            <h3>Talk to us</h3>
            <p>
              <a href="mailto:hello@savotechnologies.com">hello@savotechnologies.com</a>
              <br />
              <a href="tel:+910000000000">+91 00000 00000</a>
              <br />
              <Link href="/portal/">Client Login</Link>
            </p>
          </div>
        </div>

        <div className="footer-news">
          <div>
            <h3>Engineering notes, monthly.</h3>
            <p>AI agents, shipping practices and lessons from a decade of delivery. No fluff.</p>
          </div>
          <NewsletterForm />
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
              PCI-DSS Ready
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
