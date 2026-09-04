import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import CareersHero from "@/components/careers-hero";
import CareersApply from "@/components/careers-form";
import { TEAM_STATS } from "@/lib/careers-data";

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

const STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "Kubernetes", "Terraform", "AWS", "Flutter", "React Native", "Figma",
  "LangChain", "Redis", "GraphQL", "Playwright",
];

export default function CareersPage() {
  return (
    <>
      <CareersHero />

      <div className="stack-marquee" aria-hidden="true">
        <div className="stack-track">
          {[...STACK, ...STACK].map((s, i) => (
            <span key={i} className={`stack-chip${i % 3 === 1 ? " c2" : i % 3 === 2 ? " c3" : ""}`}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <section className="section section-light" id="openings">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <h2>Open roles.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                Every role is a direct, full time position with Savo Technologies. Expand a role
                for the detail, hit apply, and the form appears right here. Not a perfect fit?
                Apply anyway, one honest paragraph beats a perfect checklist.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <CareersApply />
          </Reveal>

          <div className="team-stats" aria-label="Team at a glance">
            {TEAM_STATS.map((s) => (
              <div key={s.l}>
                <strong>{s.v}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>

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
