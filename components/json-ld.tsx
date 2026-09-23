import { absoluteUrl } from "@/lib/seo";
import type { Article } from "@/lib/resources-data";

/**
 * Reusable JSON-LD emitters. Every schema is emitted only on the page whose
 * visible content supports it (see README "Structured data" for the map).
 */

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(svc: { slug: string; title: string; tagline: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.tagline,
    url: absoluteUrl(`/services/${svc.slug}/`),
    provider: { "@id": absoluteUrl("/") + "#org" },
    areaServed: ["IN", "US", "SA", "AE", "QA", "KW", "BH", "OM", "GB", "AU"],
  };
}

/** "Feb 2026" → "2026-02" (ISO 8601 month precision). */
function isoMonth(date: string): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [mon, year] = date.trim().split(" ");
  const m = months.indexOf(mon ?? "") + 1;
  if (!/^\d{4}$/.test(year ?? "") || m === 0) return new Date().toISOString().slice(0, 7);
  return `${year}-${String(m).padStart(2, "0")}`;
}

export function articleSchema(a: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    datePublished: isoMonth(a.date),
    image: absoluteUrl(a.img),
    author: { "@type": "Person", name: a.author, jobTitle: a.role },
    publisher: { "@id": absoluteUrl("/") + "#org" },
    mainEntityOfPage: absoluteUrl(`/resources/${a.slug}/`),
  };
}
