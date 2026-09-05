export type CaseCat = "web" | "mobile" | "ai" | "brand";

export type CaseStudy = {
  name: string;
  cat: CaseCat;
  img: string;
  tech: string[];
  stat: string;
  meta: string;
  big?: boolean;
};

export const CASE_FILTERS: { key: "all" | CaseCat; label: string }[] = [
  { key: "all", label: "All work" },
  { key: "web", label: "Web platforms" },
  { key: "mobile", label: "Mobile apps" },
  { key: "ai", label: "AI & agents" },
  { key: "brand", label: "Brand & design" },
];

export const CASE_STUDIES: CaseStudy[] = [
  { name: "MediBridge Health", cat: "web", img: "/work/medibridge.jpg", tech: ["React", "Node.js", "PostgreSQL"], stat: "40+ clinics live", meta: "Patient portal · Healthcare · Riyadh" },
  { name: "GulfPay", cat: "mobile", img: "/work/gulfpay.jpg", tech: ["Flutter", "Node.js", "PCI DSS"], stat: "GCC first wallet", meta: "Digital wallet · FinTech · Dubai" },
  { name: "Sahm AI Support Desk", cat: "ai", img: "/work/sahm.jpg", tech: ["Python", "LangChain", "RAG"], stat: "96% auto-resolved", meta: "AI agent · Telecom · GCC" },
  { name: "RideLink", cat: "mobile", img: "/work/ridelink.jpg", tech: ["Flutter", "Firebase", "Maps API"], stat: "12k vehicles tracked", meta: "Fleet tracking · Logistics · Sydney" },
  { name: "ClearLedger", cat: "web", img: "/work/clearledger.jpg", tech: ["React", "GraphQL", "Node.js"], stat: "Open banking ready", meta: "SME banking · FinTech · London" },
  { name: "EduSpring", cat: "web", img: "/work/eduspring.jpg", tech: ["React", "Node.js", "AWS"], stat: "200k students", meta: "Learning platform · EdTech · Indore" },
  { name: "Vela Studios", cat: "brand", img: "/work/vela.jpg", tech: ["Figma", "Design tokens", "Webflow"], stat: "Full rebrand in 8 weeks", meta: "Brand identity · Creative · Melbourne" },
  { name: "Nexora Retail", cat: "web", img: "/work/nexora.jpg", tech: ["Next.js", "Headless CMS", "Stripe"], stat: "3.2x conversion lift", meta: "Ecommerce · Retail · Bengaluru" },
  { name: "InsightIQ", cat: "ai", img: "/work/insightiq.jpg", tech: ["Python", "dbt", "LangChain"], stat: "6 hrs saved weekly per analyst", meta: "Analytics copilot · SaaS · Singapore" },
  { name: "Manama Pay", cat: "mobile", img: "/work/manama.jpg", tech: ["React Native", "Plaid", "AWS"], stat: "120k downloads year one", meta: "Payments app · FinTech · Manama" },
  { name: "GreenGrid", cat: "web", img: "/work/greengrid.jpg", tech: ["React", "TimescaleDB", "Grafana"], stat: "31% energy insights gain", meta: "Grid dashboard · Energy · Ahmedabad" },
  { name: "Studio Kavya", cat: "brand", img: "/work/kavya.jpg", tech: ["Figma", "Illustrator", "Rive"], stat: "Identity + motion system", meta: "Brand identity · Fashion · Mumbai" },
];
