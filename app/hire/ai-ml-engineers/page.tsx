import type { Metadata } from "next";
import HirePageView from "@/components/hire-page";
import { getHireRole } from "@/lib/hire-data";

const r = getHireRole("ai-ml-engineers")!;

export const metadata: Metadata = {
  title: "Hire AI & ML Engineers",
  description: "Hire dedicated AI and ML engineers from Savo Technologies: LLM applications, RAG, predictive models and MLOps, matched in 48 hours with a two week paid trial. Transparent monthly, quarterly and yearly rates.",
  alternates: { canonical: "/hire/ai-ml-engineers/" },
  openGraph: {
    title: "Hire AI & ML Engineers | Savo Technologies",
    description: "Hire dedicated AI and ML engineers from Savo Technologies: LLM applications, RAG, predictive models and MLOps, matched in 48 hours with a two week paid trial. Transparent monthly, quarterly and yearly rates.",
  },
};

export default function Page() {
  return <HirePageView role={r} />;
}
