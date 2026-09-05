import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Savo Technologies: one accountable team engineering AI agents, web platforms and mobile apps since 2016. Our story, values, leadership and how we work.",
  alternates: { canonical: "/about/" },
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const MILESTONES = [
  { year: "2016", t: "Two engineers, one promise", d: "Savo starts in a Jaipur office with a simple rule: every client talks to the people building their software." },
  { year: "2018", t: "First platform at scale", d: "A logistics platform crosses 5,000 daily users and stays up through its first peak season. The reliability playbook we still use is written that winter." },
  { year: "2020", t: "Remote, fully", d: "We go remote first and turn it into an advantage: senior engineers across India, one delivery standard, zero geography tax on clients." },
  { year: "2022", t: "AI practice begins", d: "The first production copilot ships for a healthcare client and deflects 70% of tier 1 queries. AI becomes a practice, not a pitch." },
  { year: "2024", t: "Across three regions", d: "Wallets in the GCC, banking dashboards in the UK, education for 200,000 students in India. Same model: matched in 48 hours, two week trial." },
  { year: "2026", t: "Still accountable", d: "Forty people, ten industries, one rule unchanged: you always know exactly who is building your software and why." },
];

const VALUES = [
  { t: "Say the hard thing early", d: "Bad news travels fastest here. A risk named in week one is a plan; the same risk named at launch is an apology.", n: "01" },
  { t: "Own the outcome", d: "We do not hand over code and disappear. We ship outcomes and stay reachable while they prove themselves.", n: "02" },
  { t: "Write it down", d: "Decisions live in documents, not memories. Every project can survive a team change without drama.", n: "03" },
  { t: "Boring where it counts", d: "Proven technology for the load bearing walls. Innovation budget spent where users can feel it.", n: "04" },
  { t: "Teach the client", d: "Success means you understand your system deeply enough to leave us. Most stay anyway, which is the point.", n: "05" },
  { t: "Craft is respect", d: "Accessible, fast, documented software is how we respect the people who use it and the ones who maintain it.", n: "06" },
];

const LEADERSHIP = [
  { name: "Aarav Mehta", role: "Founder & CEO", bio: "Ex fintech architect. Still reviews every proposal personally.", img: "/team/aarav.jpg", in: "aarav-mehta", mail: "aarav@savotechnologies.com" },
  { name: "Priya Nair", role: "Head of Engineering", bio: "Runs the delivery standard. Has shipped platforms in all three regions we serve.", img: "/team/priya.jpg", in: "priya-nair", mail: "priya@savotechnologies.com" },
  { name: "Rohan Desai", role: "Head of AI", bio: "Built our first production copilot. Believes guardrails are a feature, not a limit.", img: "/team/rohan.jpg", in: "rohan-desai", mail: "rohan@savotechnologies.com" },
  { name: "Sara Khan", role: "Head of Design", bio: "Champions WCAG AA and research led product design across every engagement.", img: "/team/sara.jpg", in: "sara-khan", mail: "sara@savotechnologies.com" },
];

export default function AboutPage() {
  return (
    <>
      {/* ---------- hero ---------- */}
      <section className="section section-dark cs-hero">
        <div className="wrap">
          <div className="cs-hero-grid">
            <div className="cs-hero-copy">
              <Reveal>
                <p className="page-kicker">About Us</p>
                <h1>One team, accountable since 2016.</h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="lead">
                  Savo Technologies is forty engineers, designers and consultants who believe software
                  outsourcing should feel like an in house team that simply never sleeps.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="cs-hero-num-wrap" aria-hidden="true">
              <span className="cs-hero-num">10y</span>
              <span className="cs-hero-num-label">one accountable team</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- story: editorial split ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="about-story">
            <div className="about-story-copy">
              <Reveal>
                <p className="page-kicker">Our story</p>
                <h2>Started because the alternative was broken.</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p>
                  Our founders spent years inside agencies where sales teams promised, junior teams
                  delivered, and clients discovered the gap at launch. Savo was built as the opposite:
                  the people who scope your project are the people who build it.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  Ten years later that rule still holds. Every engagement starts with a senior
                  consultant, every architecture is reviewed by a lead, and every client can name the
                  engineer who wrote the code they depend on.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="about-stats-row" role="list" aria-label="Company facts">
                  <div role="listitem"><strong>40+</strong><span>people</span></div>
                  <div role="listitem"><strong>200+</strong><span>projects shipped</span></div>
                  <div role="listitem"><strong>3</strong><span>regions served</span></div>
                  <div role="listitem"><strong>92%</strong><span>client retention</span></div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="about-story-media">
              <img src={`${BP}/work/medibridge.jpg`} alt="The Savo team shipping a client platform" />
              <div className="about-media-note">
                <strong>Jaipur to everywhere</strong>
                <span>Remote first since 2020, delivery standard unchanged.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- timeline: ink band ---------- */}
      <section className="section about-timeline">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Ten years, honestly told.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">The milestones that shaped how we build, including the hard ones.</p>
            </Reveal>
          </div>
          <div className="about-miles">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={0.04 * i}>
                <article className="about-mile">
                  <span className="about-mile-year">{m.year}</span>
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- values: paper cards ---------- */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <p className="page-kicker">How we work</p>
              <h2>Six rules we actually enforce.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Values that show up in code reviews and status calls, not on posters.</p>
            </Reveal>
          </div>
          <div className="about-values">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={0.04 * i}>
                <article className="about-value">
                  <span className={`av-num n${i % 3}`}>{v.n}</span>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- leadership: white ---------- */}
      <section className="section section-light">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>The people accountable to you.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">Leadership that stays hands on, on your project, not just on the org chart.</p>
            </Reveal>
          </div>
          <div className="about-leaders">
            {LEADERSHIP.map((l, i) => (
              <Reveal key={l.name} delay={0.05 * i}>
                <article className="about-leader">
                  <div className="about-leader-photo">
                    <img src={`${BP}${l.img}`} alt={`${l.name}, ${l.role} at Savo Technologies`} loading="lazy" />
                  </div>
                  <div className="about-leader-head">
                    <div>
                      <h3>{l.name}</h3>
                      <span className="about-leader-role">{l.role}</span>
                    </div>
                    <div className="team-socials">
                    <a
                      className="ts-btn ts-in"
                      href={`https://www.linkedin.com/in/${l.in}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${l.name} on LinkedIn`}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21h-4V9Z" />
                      </svg>
                    </a>
                    <a className="ts-btn ts-mail" href={`mailto:${l.mail}`} aria-label={`Email ${l.name}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
                        <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
                      </svg>
                    </a>
                    </div>
                  </div>
                  <p>{l.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA: ink ---------- */}
      <section className="section svc-cta cs-cta-ink">
        <div className="wrap svc-cta-wrap">
          <Reveal>
            <h2>Work with the team you just met.</h2>
            <p>Start with a free scoping call. You will talk to one of the four people above.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="svc-hire-ctas">
              <Link className="btn btn-primary btn-lg" href="/start-your-project/">Start your project</Link>
              <Link className="btn btn-ghost btn-lg" href="/careers">Join the team</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
