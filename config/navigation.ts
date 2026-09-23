import { SERVICES } from "@/lib/services-data";
import { INDUSTRIES } from "@/lib/industries-data";
import { HIRE_ROLES } from "@/lib/hire-data";

/**
 * Centralized navigation data.
 *
 * Canonical link lists (services, industries, hire) are derived from the same
 * data modules that generate the pages and the sitemap, so a new page can
 * never appear in one place and miss the other. Surface-specific curation
 * (the footer's own labels and ordering, the header's shortened labels) is
 * expressed here too, as typed data — never duplicated inside components.
 *
 * `tests/navigation.test.ts` pins every href to the sitemap.
 */

export type NavLink = { label: string; href: string; pro?: boolean };

/** AI detail pages: the /ai-agents/ flagship plus the three /ai/ pages. */
export const AI_LINKS: NavLink[] = [
  { label: "AI Agents", href: "/ai-agents/", pro: true },
  { label: "Generative AI & LLM Integration", href: "/ai/generative-ai/" },
  { label: "AI Consulting & Strategy", href: "/ai/consulting/" },
  { label: "Machine Learning & Analytics", href: "/ai/machine-learning/" },
];

/** The three service slugs whose detail pages live under /ai/ instead of /services/. */
export const AI_SERVICE_SLUGS = new Set(["generative-ai", "ai-consulting", "machine-learning"]);

/** Canonical public path for any service slug (handles the /ai/ mount). */
export const servicePath = (slug: string) =>
  AI_SERVICE_SLUGS.has(slug) ? `/ai/${slug}/` : `/services/${slug}/`;

export const SERVICE_LINKS: NavLink[] = SERVICES.filter((s) => !AI_SERVICE_SLUGS.has(s.slug)).map(
  (s) => ({ label: s.title, href: `/services/${s.slug}/` }),
);

export const INDUSTRY_LINKS: NavLink[] = INDUSTRIES.map((i) => ({
  label: i.title,
  href: `/industries/${i.slug}/`,
}));

export const HIRE_LINKS: NavLink[] = HIRE_ROLES.map((r) => ({
  label: r.title,
  href: `/hire/${r.slug}/`,
}));

/**
 * The header mega-menu shortens a few canonical labels to keep the panel
 * scannable. Keyed by href so the mapping is provably attached to the right
 * route.
 */
export const HEADER_SHORT_LABELS: Record<string, string> = {
  "/services/custom-software/": "Custom Software",
  "/industries/real-estate/": "Real Estate",
  "/industries/manufacturing/": "Manufacturing & 4.0",
  "/industries/government/": "Government",
};

/** Footer curation: its own labels, ordering and hub entries. */
export const FOOTER_NAV = {
  services: [
    { label: "AI Development & Agents", href: "/services/ai-agent-development/" },
    { label: "Custom Software Development", href: "/services/custom-software/" },
    { label: "Mobile App Development", href: "/services/mobile-apps/" },
    { label: "Web Development", href: "/services/web-development/" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops/" },
    { label: "Data & Analytics", href: "/services/data-analytics/" },
    { label: "UI/UX & Brand Identity", href: "/services/ui-ux/" },
    { label: "Digital Marketing & SEO", href: "/services/digital-marketing/" },
    { label: "QA & Testing", href: "/services/qa-testing/" },
    { label: "Product Engineering", href: "/services/product-engineering/" },
    { label: "All Services", href: "/services/" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries/healthcare/" },
    { label: "FinTech & Banking", href: "/industries/fintech/" },
    { label: "Ecommerce & Retail", href: "/industries/ecommerce/" },
    { label: "Real Estate & PropTech", href: "/industries/real-estate/" },
    { label: "Logistics & Supply Chain", href: "/industries/logistics/" },
    { label: "Education & EdTech", href: "/industries/education/" },
    { label: "Travel & Hospitality", href: "/industries/travel/" },
    { label: "Manufacturing & 4.0", href: "/industries/manufacturing/" },
    { label: "Government & Public Sector", href: "/industries/government/" },
    { label: "Energy & Utilities", href: "/industries/energy/" },
    { label: "All Industries", href: "/industries/" },
  ],
  company: [
    { label: "About Us", href: "/about/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Resources & Blog", href: "/resources/" },
    { label: "Careers", href: "/careers/" },
    { label: "Contact Us", href: "/contact/" },
  ],
  quick: [
    { label: "Client Login", href: "/portal/" },
    { label: "Hire Developers", href: "/hire/" },
    { label: "AI Agents (PRO)", href: "/ai-agents/" },
    { label: "Get a Quote", href: "/start-your-project/" },
    { label: "Ask Savo Assistant", href: "/#ask-savo" },
  ],
} as const satisfies Record<string, readonly NavLink[]>;
