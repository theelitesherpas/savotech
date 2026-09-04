import Reveal from "./reveal";

const QUOTES = [
  {
    quote:
      "Savo rebuilt our patient portal in four months. Uptime has been flawless. Their support agent now resolves 70% of tier-1 tickets before a human sees them.",
    name: "Dr. Reem Al-Otaibi",
    role: "CIO · Healthcare group · Riyadh, Saudi Arabia",
  },
  {
    quote:
      "The dedicated-team model just works. Same engineers for two years running. They know our codebase better than we do.",
    name: "James Whitfield",
    role: "CTO · Logistics scale-up · Sydney, Australia",
  },
  {
    quote:
      "Transparent pricing, weekly demos, zero surprises. Their instant estimator quoted our build within 5% of the final invoice.",
    name: "Ananya Iyer",
    role: "VP Product · FinTech · Bengaluru, India",
  },
];

const LOGOS = ["MediBridge", "GulfPay", "RideLink", "ClearLedger", "EduSpring", "Sahm Telecom", "Vela Studios", "Nexora"];

export default function Testimonials() {
  return (
    <section className="section section-light section-alt" id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2>Trusted across five regions.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              What clients say after the contract ends matters more than anything we could write
              here. A representative sample from the last decade of delivery.
            </p>
          </Reveal>
        </div>

        <div className="quotes-grid">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={0.07 * i}>
              <figure className="quote">
                <div className="quote-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote>“{q.quote}”</blockquote>
                <figcaption>
                  <strong>{q.name}</strong>
                  <span>{q.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="logo-strip" aria-label="Selected clients">
            {LOGOS.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <p className="logos-note">
            Engagements and references shown are representative of a decade of delivery; full,
            attributed client list available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
