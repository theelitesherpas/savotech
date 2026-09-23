import { pageMetadata } from "@/lib/seo";
import HirePageView from "@/components/hire-page";
import { mustGetHireRole } from "@/lib/hire-data";

const r = mustGetHireRole("ai-ml-engineers");

export const metadata = pageMetadata({
  title: "Hire AI & ML Engineers",
  description: "Hire dedicated AI and ML engineers from Savo Technologies: LLM applications, RAG, predictive models and MLOps, matched in 48 hours with a two week paid trial. Transparent monthly, quarterly and yearly rates.",
  path: "/hire/ai-ml-engineers/",
});

export default function Page() {
  return <HirePageView role={r} />;
}
