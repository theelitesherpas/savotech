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
  ];
}
