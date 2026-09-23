import { pageMetadata } from "@/lib/seo";
import HirePageView from "@/components/hire-page";
import { mustGetHireRole } from "@/lib/hire-data";

const r = mustGetHireRole("backend-developers");

export const metadata = pageMetadata({
  title: "Hire Backend Developers",
  description: "Hire dedicated backend developers from Savo Technologies: Node.js, Python and Go APIs, PostgreSQL and regulated experience, matched in 48 hours with a two week paid trial. Transparent rates.",
  path: "/hire/backend-developers/",
});

export default function Page() {
  return <HirePageView role={r} />;
}
