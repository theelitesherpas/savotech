import Link from "next/link";
import Reveal from "./reveal";

export const INDUSTRY_CARDS: {
  slug: string;
  t: string;
  d: string;
  href: string;
  tint: string;
  icon: React.ReactNode;
}[] = [
  {
    slug: "healthcare",
    t: "Healthcare",
    d: "HIPAA aligned patient portals, telehealth and clinical workflows.",
    href: "/industries/healthcare/",
    tint: "t1",
    icon: <path d="M5 16h5l2.5-6 4 12 3-6h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    slug: "fintech",
    t: "FinTech & Banking",
    d: "Payments, wallets and compliance first banking experiences.",
    href: "/industries/fintech/",
    tint: "t2",
    icon: <path d="M6 26h20M8 26V15M13 26V10M18 26v-8M23 26V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
  },
  {
    slug: "ecommerce",
    t: "Ecommerce & Retail",
    d: "Omnichannel storefronts, headless commerce and PIM systems.",
    href: "/industries/ecommerce/",
    tint: "t3",
    icon: (
      <>
        <path d="M6 11h20l-1.6 14a2.5 2.5 0 0 1-2.5 2.2H10.1a2.5 2.5 0 0 1-2.5-2.2L6 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11.5 11V8.5a4.5 4.5 0 0 1 9 0V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    slug: "real-estate",
    t: "Real Estate & PropTech",
    d: "Listings platforms, virtual tours and property management suites.",
    href: "/industries/real-estate/",
    tint: "t4",
    icon: <path d="M5 27V13.5L16 6l11 7.5V27" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  },
  {
    slug: "logistics",
    t: "Logistics & Supply Chain",
    d: "Fleet tracking, route optimization and warehouse automation.",
    href: "/industries/logistics/",
    tint: "t5",
    icon: <path d="M3 21V10h12v11M15 14h6l4 4v3h-10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  },
  {
    slug: "education",
    t: "Education & EdTech",
    d: "LMS platforms, live classrooms and assessment engines.",
    href: "/industries/education/",
    tint: "t6",
    icon: <path d="M16 8 3.5 13.5 16 19l12.5-5.5L16 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  },
  {
    slug: "travel",
    t: "Travel & Hospitality",
    d: "Booking engines, channel managers and guest apps.",
    href: "/industries/travel/",
    tint: "t7",
    icon: <path d="M16 5.5c1.5 2.4 2.3 5.4 2.3 8.5l4.2 3.2v4l-4.4-1.5v3.6l2.4 2v2.2L16 26.5l-4.5 1v-2.2l2.4-2v-3.6L9.5 21.2v-4l4.2-3.2c0-3.1.8-6.1 2.3-8.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
  },
  {
    slug: "manufacturing",
    t: "Manufacturing & Industry 4.0",
    d: "IoT telemetry, digital twins and shop floor dashboards.",
    href: "/industries/manufacturing/",
    tint: "t8",
    icon: <path d="M4 26V13l7 4v-4l7 4v-4l10 6v11H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  },
  {
    slug: "government",
    t: "Government & Public Sector",
    d: "Accessible citizen services on secure infrastructure.",
    href: "/industries/government/",
    tint: "t9",
    icon: <path d="M16 5 4 11h24L16 5ZM7 11v10M13 11v10M19 11v10M25 11v10M5 24h22M3 27h26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    slug: "energy",
    t: "Energy & Utilities",
    d: "Grid analytics, SCADA dashboards and field ops tools for the GCC.",
    href: "/industries/energy/",
    tint: "t10",
    icon: <path d="M17.5 4 8 18h6.5L14 28l10-14.5h-6.5L17.5 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  },
];

export default function Industries() {
  return (
    <section className="section section-light" id="industries">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <Reveal>
              <h2>Industries we serve.</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="lead">
                A decade of delivery across ten sectors, with particular depth in healthcare,
                fintech and the Gulf&apos;s energy economy. Every engagement arrives fluent in your
                domain&apos;s regulations and rituals.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link className="text-cta" href="/industries/">
              All industries
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="industries-grid">
          {INDUSTRY_CARDS.map((ind, i) => (
            <Reveal key={ind.slug} delay={0.05 * (i % 5)}>
              <Link className="ind" href={ind.href}>
                <span className={`ind-art ${ind.tint}`} aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none">
                    {ind.icon}
                  </svg>
                </span>
                <h3>{ind.t}</h3>
                <p>{ind.d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
