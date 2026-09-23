import { pageMetadata } from "@/lib/seo";
import HirePageView from "@/components/hire-page";
import { mustGetHireRole } from "@/lib/hire-data";

const r = mustGetHireRole("frontend-developers");

export const metadata = pageMetadata({
  title: "Hire Frontend Developers",
  description: "Hire dedicated React and Next.js frontend developers from Savo Technologies: design systems, performance budgets and accessibility, matched in 48 hours with a two week paid trial. Transparent rates.",
  path: "/hire/frontend-developers/",
});

export default function Page() {
  return <HirePageView role={r} />;
}
