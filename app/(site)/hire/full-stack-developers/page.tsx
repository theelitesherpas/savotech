import { pageMetadata } from "@/lib/seo";
import HirePageView from "@/components/hire-page";
import { mustGetHireRole } from "@/lib/hire-data";

const r = mustGetHireRole("full-stack-developers");

export const metadata = pageMetadata({
  title: "Hire Full Stack Developers",
  description: "Hire dedicated full stack developers from Savo Technologies: React, Node and PostgreSQL engineers who own features end to end. Matched in 48 hours with a two week paid trial and transparent rates.",
  path: "/hire/full-stack-developers/",
});

export default function Page() {
  return <HirePageView role={r} />;
}
