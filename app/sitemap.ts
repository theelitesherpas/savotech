import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { AI_SERVICE_SLUGS } from "@/config/navigation";
import { SERVICES } from "@/lib/services-data";
import { INDUSTRIES } from "@/lib/industries-data";
import { HIRE_ROLES } from "@/lib/hire-data";
import { ARTICLES } from "@/lib/resources-data";

/**
 * Sitemap generated from the same data modules that render the site, so new
 * service/industry/role/article pages can never drift out of the sitemap.
 * Private routes (client portal) and API endpoints are excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    // Core + conversion pages
    page("/", 1, "weekly"),
    page("/start-your-project/", 0.9),
    page("/ai-agents/", 0.9),
    page("/services/", 0.9),
    page("/industries/", 0.9),
    page("/case-studies/", 0.8),
    page("/careers/", 0.8, "weekly"),
    page("/contact/", 0.8),
    page("/about/", 0.7),
    page("/resources/", 0.7, "weekly"),
    page("/hire/", 0.8),
    page("/privacy/", 0.3),
    page("/terms/", 0.3),

    // AI service detail pages
    page("/ai/generative-ai/", 0.8),
    page("/ai/consulting/", 0.8),
    page("/ai/machine-learning/", 0.8),

    // Data-driven detail pages
    ...SERVICES.filter((s) => !AI_SERVICE_SLUGS.has(s.slug)).map((s) => page(`/services/${s.slug}/`, 0.8)),
    ...INDUSTRIES.map((i) => page(`/industries/${i.slug}/`, 0.8)),
    ...HIRE_ROLES.map((r) => page(`/hire/${r.slug}/`, 0.8)),

    // Resource articles
    ...ARTICLES.map((a) => page(`/resources/${a.slug}/`, 0.6, "weekly")),
  ];
}
