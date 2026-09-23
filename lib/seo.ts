import type { Metadata } from "next";

/**
 * Canonical site origin. `NEXT_PUBLIC_SITE_URL` is the production domain;
 * `NEXT_PUBLIC_BASE_PATH` matches the basePath in next.config.ts (e.g. the
 * /newdesign mount on Vercel). Both are public, non-secret values.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.savotechnologies.com";
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const SITE_ORIGIN = SITE_URL + BASE_PATH;

type PageMetaInput = {
  /** Page title — rendered as "{title} | Savo Technologies" by the root template. */
  title: string;
  /** Unique page description (max ~160 chars). */
  description: string;
  /** Canonical path from the site root, always with a trailing slash, e.g. "/services/web-development/". */
  path: string;
  /** Open Graph type; "website" for hubs, "article" for resources. */
  type?: "website" | "article";
  /** Optional shorter social-card description when it should differ from the meta description. */
  ogDescription?: string;
};

/**
 * Single source of truth for per-page metadata: title, description,
 * canonical URL, Open Graph and Twitter cards. Keeps every indexable
 * page consistent without duplicating boilerplate in each route.
 */
export function pageMetadata({ title, description, path, type = "website", ogDescription }: PageMetaInput): Metadata {
  const url = path;
  const social = ogDescription ?? description;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Savo Technologies`,
      description: social,
      url,
      type,
      siteName: "Savo Technologies",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Savo Technologies`,
      description: social,
    },
  };
}

/** Absolute URL for JSON-LD ids and sitemap entries. */
export function absoluteUrl(path: string): string {
  return SITE_ORIGIN + path;
}

/** Prefix a public/ asset path with the basePath (next/image does not add it to `src`). */
export function asset(path: string): string {
  return BASE_PATH + path;
}
