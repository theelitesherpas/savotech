/**
 * Centralized, typed site facts shared across components (footer contact
 * block, direct channels, structured data). Only genuinely shared, stable
 * values live here.
 *
 * NOTE: social profile URLs are placeholders pointing at platform homepages
 * until Savo provides the real profile links (tracked in README).
 */
export const siteConfig = {
  name: "Savo Technologies",
  legalName: "Savo Technologies Private Limited",
  foundingYear: "2016",
  email: "hello@savotechnologies.com",
  phone: "+91 75029 01234",
  phoneE164: "+917502901234",
  /** Placeholder profiles — replace with real URLs when available. */
  socials: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    github: "https://github.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;
