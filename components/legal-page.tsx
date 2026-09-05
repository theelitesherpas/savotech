import Link from "next/link";
import Reveal from "./reveal";

export type LegalSection = { h: string; p?: string; li?: string[] };

/** Shared layout for legal documents (privacy, terms). */
export default function LegalPageView({
  kicker, title, updated, intro, sections,
}: {
  kicker: string; title: string; updated: string; intro: string; sections: LegalSection[];
}) {
  return (
    <>
      <section className="section section-dark cs-hero res-article-hero">
        <div className="wrap wrap-narrow">
          <Reveal>
            <p className="page-kicker">{kicker}</p>
            <h1 className="res-article-h1">{title}</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="res-legal-updated">Last updated {updated}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="wrap wrap-narrow res-article">
          <Reveal><p className="res-legal-intro">{intro}</p></Reveal>
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={0.02 * i}>
              <h2>{i + 1}. {s.h}</h2>
              {s.p && <p>{s.p}</p>}
              {s.li && (
                <ul className="res-article-list">
                  {s.li.map((item) => <li key={item.slice(0, 24)}>{item}</li>)}
                </ul>
              )}
            </Reveal>
          ))}
          <Reveal>
            <p className="res-legal-contact">
              Questions about this document? Write to <a href="mailto:legal@savotechnologies.com">legal@savotechnologies.com</a>{" "}
              or use the <Link href="/contact/" className="text-cta">contact page</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
