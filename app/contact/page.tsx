import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to the engineers who will build it. Message Savo Technologies, book a call back, or reach the team in Indore, Ahmedabad, Dubai, London and Sydney. One business day reply.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | Savo Technologies",
    description:
      "Message us, book a call back or meet the team. One business day reply, NDA on request.",
  },
};

const OFFICES = [
  {
    h: "India · HQ",
    p: "Savo Technologies Pvt. Ltd., Indore · Ahmedabad",
    art: (
      <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    ),
  },
  {
    h: "GCC",
    p: "Delivery & client success, Riyadh · Dubai · Manama",
    art: (
      <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 40C21 22 28 10 43 4" />
        <path d="M43 4C36 14 32.5 26 32.5 40" />
        <path d="M24.5 31.5c3-.6 5.5-1.4 8-2.6" />
        <path d="M27.5 24.5c2.6-.8 5-1.9 7.3-3.4" />
        <path d="M6 40h52M14 43h36" />
      </svg>
    ),
  },
  {
    h: "United Kingdom",
    p: "Delivery & client success, London",
    art: (
      <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="32" cy="18" r="5" />
        <path d="M32 15v3.2l2.6 1.3" />
        <path d="M26.5 23.5 32 8.5l5.5 15" />
        <path d="M25 23.5h14" />
        <path d="M26.5 23.5V42M37.5 23.5V42" />
        <path d="M30 30v3.5M34 30v3.5" />
        <path d="M22 42h20" />
      </svg>
    ),
  },
  {
    h: "Australia",
    p: "Delivery & client success, Sydney",
    art: (
      <svg viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 38c4.5-18 15-24.5 21.5-23.5C23 19 17 27 15.5 38" />
        <path d="M21 38c4-17 15-24.5 21-23.5-7.5 5-13.5 13-14.5 23.5" />
        <path d="M33 38c4-15.5 13.5-22 18.5-21-6 5-11 12-12 21" />
        <path d="M6 38h52M10 42h44" />
      </svg>
    ),
  },
];

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const TEAM = [
  { n: "Aarav Mehta", r: "Founder & CEO", d: "Ex fintech architect. Still reviews every proposal personally.", img: "aarav.jpg", in: "aarav-mehta" },
  { n: "Priya Nair", r: "Head of Engineering", d: "Shipped patient systems for three hospital networks.", img: "priya.jpg", in: "priya-nair" },
  { n: "Rohan Desai", r: "Principal Architect, AI", d: "Built the agent framework behind the Savo Intelligence desk.", img: "rohan.jpg", in: "rohan-desai" },
  { n: "Sara Khan", r: "Head of Design", d: "Believes the best interface is the one you stop noticing.", img: "sara.jpg", in: "sara-khan" },
  { n: "Vikram Rao", r: "Delivery Lead", d: "Keeps twelve client sprints honest, calmly.", img: "vikram.jpg", in: "vikram-rao" },
  { n: "Ananya Iyer", r: "Client Success Lead", d: "The voice on your onboarding calls and your escalation line.", img: "ananya.jpg", in: "ananya-iyer" },
];

export default function ContactPage() {
  return (
    <>
      <section className="section section-alt start-hero contact-hero">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "1.6rem" }}>
            <Reveal>
              <p className="page-kicker">Contact Us</p>
              <h1>Talk to the people who will build it.</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                No gatekeeping, no discovery paywalls. Tell us what you are thinking about and a
                senior consultant replies within one business day.
              </p>
            </Reveal>
          </div>

        </div>
      </section>

      <section className="section section-light contact-form-section">
        <div className="wrap">
          <div className="start-grid">
            <div className="start-card">
              <div className="start-card-head">
                <h2>Send a message</h2>
                <p>Takes a minute. Everything reaches a human.</p>
              </div>
              <ContactForm />
            </div>

            <aside className="start-aside">
              <div className="start-aside-card">
                <div className="aside-head">
                  <div className="aside-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6.8 3.8 9 3.2c.7-.2 1.4.2 1.7.9l1 2.4c.2.6.1 1.3-.4 1.7l-1.3 1.2a12.6 12.6 0 0 0 4.6 4.6l1.2-1.3c.4-.5 1.1-.6 1.7-.4l2.4 1c.7.3 1.1 1 .9 1.7l-.6 2.2c-.2.7-.8 1.2-1.5 1.2C11.6 18.4 5.6 12.4 5.6 5.3c0-.7.5-1.3 1.2-1.5Z" />
                    </svg>
                  </div>
                  <h3>Reach us directly</h3>
                </div>
                <div className="direct-rows">
                  <a className="direct-row" href="mailto:hello@savotechnologies.com">
                    <span className="dr-ico b" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
                        <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
                      </svg>
                    </span>
                    <span className="dr-text">
                      <strong>Email</strong>
                      hello@savotechnologies.com
                    </span>
                  </a>
                  <a className="direct-row" href="tel:+917502901234">
                    <span className="dr-ico r" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6.8 3.8 9 3.2c.7-.2 1.4.2 1.7.9l1 2.4c.2.6.1 1.3-.4 1.7l-1.3 1.2a12.6 12.6 0 0 0 4.6 4.6l1.2-1.3c.4-.5 1.1-.6 1.7-.4l2.4 1c.7.3 1.1 1 .9 1.7l-.6 2.2c-.2.7-.8 1.2-1.5 1.2C11.6 18.4 5.6 12.4 5.6 5.3c0-.7.5-1.3 1.2-1.5Z" />
                      </svg>
                    </span>
                    <span className="dr-text">
                      <strong>Call</strong>
                      +91 75029 01234
                    </span>
                  </a>
                  <a
                    className="direct-row direct-wa"
                    href="https://wa.me/917502901234?text=Hi%20Savo%20Technologies%2C%20I%20would%20like%20to%20talk%20about%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="dr-ico g" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6a12.5 12.5 0 0 1-4.8-4.4c-.6-1-.9-1.9-.9-2.7 0-.8.4-1.5.7-1.8.3-.3.7-.4.9-.4h.6c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.8.9c.5.2.5.4.5.6 0 .1 0 .8-.2 1.3Z" />
                      </svg>
                    </span>
                    <span className="dr-text">
                      <strong>WhatsApp</strong>
                      Chat with us instantly
                    </span>
                  </a>
                </div>
              </div>

              <div className="start-aside-card">
                <div className="aside-head">
                  <div className="aside-ico ico-red" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5Z" />
                      <path d="m4.5 12 7.5 4 7.5-4M4.5 16l7.5 4 7.5-4" />
                    </svg>
                  </div>
                  <h3>Already know what you need?</h3>
                </div>
                <ul className="start-links">
                  <li>
                    <Link href="/start-your-project/">Send a full project brief</Link>
                  </li>
                  <li>
                    <Link href="/#estimator">Price it with the instant estimator</Link>
                  </li>
                  <li>
                    <Link href="/careers/">Join the team instead</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="office-grid">
            {OFFICES.map((o) => (
              <Reveal key={o.h}>
                <div className="office-card">
                  <span className="office-art" aria-hidden="true">{o.art}</span>
                  <h3>{o.h}</h3>
                  <p>{o.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="team">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="page-kicker">Meet the team</p>
              <h2>The people who answer.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                No account managers relaying messages. The faces below are who you talk to, from
                first call to final release.
              </p>
            </Reveal>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <Reveal key={m.n} delay={0.04 * i}>
                <article className="team-card">
                  <div className="team-photo">
                    <img src={`${BP}/team/${m.img}`} alt={`${m.n}, ${m.r} at Savo Technologies`} loading="lazy" />
                    <span className="team-photo-ring" aria-hidden="true" />
                  </div>
                  <h3>{m.n}</h3>
                  <p className="team-role">{m.r}</p>
                  <p className="team-bio">{m.d}</p>
                  <div className="team-socials">
                    <a
                      className="ts-btn ts-in"
                      href={`https://www.linkedin.com/in/${m.in}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.n} on LinkedIn`}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21h-4V9Z" />
                      </svg>
                    </a>
                    <a className="ts-btn ts-mail" href="mailto:hello@savotechnologies.com" aria-label={`Email ${m.n}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
                        <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
