import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.savotechnologies.com";
const ORIGIN = SITE_URL + (process.env.NEXT_PUBLIC_BASE_PATH ?? "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ORIGIN + "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: ORIGIN + "/start-your-project/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: ORIGIN + "/ai-agents/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: ORIGIN + "/careers/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: ORIGIN + "/contact/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["ai-agent-development", "web-development", "mobile-apps", "ui-ux", "cloud-devops", "data-analytics"].map((slug) => ({
      url: ORIGIN + "/services/" + slug + "/",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["ai-ml-engineers", "frontend-developers", "backend-developers", "full-stack-developers", "mobile-developers", "devops-qa-engineers"].map((slug) => ({
      url: ORIGIN + "/hire/" + slug + "/",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["generative-ai", "consulting", "machine-learning"].map((slug) => ({
      url: ORIGIN + "/ai/" + slug + "/",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: ORIGIN + "/portal/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
