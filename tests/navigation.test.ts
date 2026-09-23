import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { AI_LINKS, SERVICE_LINKS, INDUSTRY_LINKS, HIRE_LINKS, FOOTER_NAV } from "@/config/navigation";
import { SERVICES } from "@/lib/services-data";
import { INDUSTRIES } from "@/lib/industries-data";
import { HIRE_ROLES } from "@/lib/hire-data";
import { ARTICLES } from "@/lib/resources-data";

const urls = () => sitemap().map((e) => e.url);

describe("sitemap", () => {
  it("contains every data-driven page exactly once", () => {
    const all = urls();
    for (const s of SERVICES) {
      const path = s.slug === "generative-ai" ? "/ai/generative-ai/"
        : s.slug === "ai-consulting" ? "/ai/consulting/"
        : s.slug === "machine-learning" ? "/ai/machine-learning/"
        : `/services/${s.slug}/`;
      expect(all.some((u) => u.includes(path)), `missing ${path}`).toBe(true);
    }
    for (const i of INDUSTRIES) expect(all.some((u) => u.includes(`/industries/${i.slug}/`))).toBe(true);
    for (const r of HIRE_ROLES) expect(all.some((u) => u.includes(`/hire/${r.slug}/`))).toBe(true);
    for (const a of ARTICLES) expect(all.some((u) => u.includes(`/resources/${a.slug}/`))).toBe(true);
    expect(new Set(all).size).toBe(all.length); // no duplicates
  });

  it("excludes private and utility routes", () => {
    const all = urls();
    expect(all.some((u) => u.includes("/portal"))).toBe(false);
    expect(all.some((u) => u.includes("/api/"))).toBe(false);
    expect(all.some((u) => u.includes("/careers/apply"))).toBe(false);
  });
});

describe("navigation config", () => {
  it("links only to routes that exist in the sitemap (anchors exempt)", () => {
    const all = new Set(urls().map((u) => new URL(u).pathname));
    const navLinks = [
      ...AI_LINKS,
      ...SERVICE_LINKS,
      ...INDUSTRY_LINKS,
      ...HIRE_LINKS,
      ...FOOTER_NAV.services,
      ...FOOTER_NAV.industries,
      ...FOOTER_NAV.company,
      ...FOOTER_NAV.quick,
    ];
    // Linked in the UI but deliberately excluded from the sitemap (noindex).
    const LINKED_BUT_NOT_INDEXED = new Set(["/portal/"]);
    for (const l of navLinks) {
      if (l.href.startsWith("/#") || l.href.includes("#")) continue;
      if (LINKED_BUT_NOT_INDEXED.has(l.href)) continue;
      expect(all.has(l.href), `nav link ${l.href} missing from sitemap`).toBe(true);
    }
  });

  it("has unique hrefs per list", () => {
    for (const list of [AI_LINKS, SERVICE_LINKS, INDUSTRY_LINKS, HIRE_LINKS]) {
      expect(new Set(list.map((l) => l.href)).size).toBe(list.length);
    }
  });
});
