import Reveal from "./reveal";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="wrap">
        <Reveal>
          <h2>Let&apos;s build something great.</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p>
            Tell us where you&apos;re headed. A senior engineer, not a sales rep, replies within
            one business day with a plan, a team and a number.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="cta-row">
            <Link className="btn btn-primary btn-lg" href="/start-your-project/">
              Start Your Project
            </Link>
            <a className="btn btn-outline btn-lg" href="mailto:hello@savotechnologies.com">
              hello@savotechnologies.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
