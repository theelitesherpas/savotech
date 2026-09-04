import type { Metadata } from "next";
import Link from "next/link";
import CareersForm from "@/components/careers-form";
import { ROLES } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply for a role at Savo Technologies. One form, ten minutes, a personal reply within two business days.",
  robots: { index: false, follow: false },
};

function slugify(t: string) {
  return t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default async function CareersApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const match = ROLES.find((r) => slugify(r.title) === (role ?? "").replace(/^\/|\/$/g, ""));
  const initialRole = match?.title ?? ROLES[0].title;

  return (
    <section className="section section-light start-hero">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: "1.8rem" }}>
          <p className="page-kicker">
            <Link href="/careers/" className="text-cta">Careers</Link> / Apply
          </p>
          <h1>{match ? `Apply: ${match.title}` : "Apply to join Savo."}</h1>
          <p className="lead">
            {match
              ? `${match.track} · ${match.exp} · ${match.band} · Full time, remote first across India.`
              : "Pick the role that fits inside the form and tell us about yourself. Ten minutes, one form."}
          </p>
        </div>

        <div className="start-grid">
          <div className="start-card">
            <div className="start-card-head">
              <h2>Application</h2>
              <p>The role is already selected. Fill in the rest.</p>
            </div>
            <CareersForm initialRole={initialRole} />
          </div>

          <aside className="start-aside">
            <div className="start-aside-card">
              <div className="aside-head">
                <div className="aside-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8.2" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                </div>
                <h3>What happens next</h3>
              </div>
              <ol className="start-steps">
                <li>
                  <strong>Two business days</strong>
                  <span>An engineer reads every application and replies personally.</span>
                </li>
                <li>
                  <strong>Technical conversation</strong>
                  <span>60 minutes on real problems, not trick puzzles.</span>
                </li>
                <li>
                  <strong>Paid pairing session</strong>
                  <span>Two hours on a small real task, compensated.</span>
                </li>
                <li>
                  <strong>Written offer</strong>
                  <span>Within a week of the final round.</span>
                </li>
              </ol>
            </div>
            <div className="start-aside-card start-aside-ink">
              <div className="aside-head">
                <div className="aside-ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-7Z" />
                  </svg>
                </div>
                <h3>Questions first?</h3>
              </div>
              <p>
                Write to{" "}
                <a href="mailto:careers@savotechnologies.com">careers@savotechnologies.com</a>{" "}
                and a human replies, usually the same day.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
