import Reveal from "./reveal";
import { FAQS } from "@/lib/faq-data";

const Caret = () => (
  <svg className="faq-caret" viewBox="0 0 14 14" aria-hidden="true">
    <path
      d="M3 5.2 7 9.2l4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Faq() {
  return (
    <section className="section section-light" id="faq">
      <div className="wrap wrap-narrow">
        <div className="section-head">
          <Reveal>
            <h2>Frequently asked questions.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Straight answers to the questions buyers actually ask. Anything else, the Savo
              Assistant above replies instantly.
            </p>
          </Reveal>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={0.03 * i}>
              <details className="faq-item" open={i === 0}>
                <summary>
                  {f.q}
                  <Caret />
                </summary>
                <div className="faq-body">
                  <p>{f.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
