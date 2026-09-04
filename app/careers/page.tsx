import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import CareersApply from "@/components/careers-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open engineering and design roles at Savo Technologies: frontend, backend, AI and ML, mobile, DevOps and UI/UX. Remote first in India, INR salaries, honest hiring in four steps.",
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers | Savo Technologies",
    description:
      "Open engineering and design roles. Remote first in India, INR salaries, honest hiring in four steps.",
  },
};

const PERKS = [
  { t: "Remote first, always", d: "Work from anywhere in India, with quarterly onsites in Indore and Ahmedabad." },
  { t: "Learning budget", d: "₹50,000 a year for courses, conferences and books. No approval theatre." },
  { t: "Health cover for family", d: "Insurance that includes parents, plus your choice of equipment." },
];

export default function CareersPage() {
  return (
    <>
      <section className="section section-light start-hero">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "2.5rem" }}>
            <Reveal>
              <p className="page-kicker">Careers</p>
              <h1>Do the best work of your career.</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Small senior teams, real products in healthcare, fintech and AI. No body shopping,
                no bench, no status meetings that could have been a sentence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="guarantee-grid">
              {PERKS.map((g, i) => (
                <div key={g.t} className={`guarantee-card g-${i + 1}`}>
                  <h3>{g.t}</h3>
                  <p>{g.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Open roles.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Every role is a direct full time position with Savo Technologies, paid in INR.
                Not sure you fit one perfectly? Apply anyway, the form is ten minutes.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <CareersApply />
          </Reveal>
          <p className="careers-footnote">
            No matching role today?{" "}
            <Link href="mailto:careers@savotechnologies.com" className="text-cta">
              Write to careers@savotechnologies.com
            </Link>{" "}
            and tell us what you would want to build here.
          </p>
        </div>
      </section>
    </>
  );
}
