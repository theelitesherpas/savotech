import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("generative-ai")!;

export const metadata: Metadata = {
  title: "Generative AI & LLM Integration",
  description: "Generative AI and LLM integration by Savo Technologies: chat, drafting, summarization and RAG features shipped into your product with eval suites, cost routing and zero vendor lock in. Instant price estimate.",
  alternates: { canonical: "/ai/generative-ai/" },
  openGraph: {
    title: "Generative AI & LLM Integration | Savo Technologies",
    description: "Generative AI and LLM integration by Savo Technologies: chat, drafting, summarization and RAG features shipped into your product with eval suites, cost routing and zero vendor lock in. Instant price estimate.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
