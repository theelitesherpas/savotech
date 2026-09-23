import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/config/site";

/** Organization + ProfessionalService + WebSite JSON-LD (AEO/GEO), site-wide. */
export default function StructuredData() {
  const siteUrl = absoluteUrl("/").replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#org`,
        name: "Savo Technologies",
        alternateName: ["Savo", "Savo Tech", "Savo Technologies Pvt Ltd", "Savo Technologies Private Limited"],
        legalName: siteConfig.legalName,
        url: siteUrl,
        logo: `${siteUrl}/savotech-logo.svg`,
        foundingDate: siteConfig.foundingYear,
        slogan: "AI agents, web platforms and mobile apps, engineered by one accountable team.",
        description:
          "Savo Technologies is a 10-year global technology company specializing in AI agent development, website design and development, mobile app development, and full spectrum digital and software services.",
        email: siteConfig.email,
        telephone: siteConfig.phoneE164,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          addressCountry: "IN",
        },
        areaServed: [
          "IN", "US", "SA", "AE", "QA", "KW", "BH", "OM", "GB", "AU",
          { "@type": "City", name: "Indore" },
          { "@type": "City", name: "Ahmedabad" },
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Riyadh" },
          { "@type": "City", name: "London" },
          { "@type": "City", name: "Sydney" },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Savo Technologies | Software & AI Development Company",
        parentOrganization: { "@id": `${siteUrl}/#org` },
        url: siteUrl,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Australia" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Full-Spectrum Services",
          itemListElement: [
            "AI Development & Agents",
            "Custom Software Development",
            "Mobile App Development",
            "Web Development",
            "Cloud & DevOps",
            "Data & Analytics",
            "UI/UX & Brand Identity",
            "Digital Marketing & SEO",
            "QA & Testing",
            "IT Consulting",
            "Cybersecurity",
            "Product Engineering",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Savo Technologies",
        alternateName: ["Savo", "Savo Tech"],
        publisher: { "@id": `${siteUrl}/#org` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
