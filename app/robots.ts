import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.savotechnologies.com";
const ORIGIN = SITE_URL + (process.env.NEXT_PUBLIC_BASE_PATH ?? "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: ORIGIN + "/sitemap.xml",
  };
}
