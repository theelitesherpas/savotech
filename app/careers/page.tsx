import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Reveal from "@/components/reveal";
import CareersHero from "@/components/careers-hero";
import CareersRoles from "@/components/careers-roles";
import { TEAM_STATS } from "@/lib/careers-data";

export const metadata = pageMetadata({
  title: "Careers",
  description: "Open engineering and design roles at Savo Technologies: frontend, backend, AI and ML, mobile, DevOps and UI/UX. Remote first in India, INR salaries, honest hiring in four steps.",
  path: "/careers/",
  ogDescription: "Open engineering and design roles. Remote first in India, INR salaries, honest hiring in four steps.",
});

export default function CareersPage() {
  return (
    <>
      <CareersHero />

      <section className="section section-light" id="openings">
        <div className="wrap">
          <Reveal>
            <CareersRoles />
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
