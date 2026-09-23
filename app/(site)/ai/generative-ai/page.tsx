import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("generative-ai");

export const metadata = pageMetadata({
  title: "Generative AI & LLM Integration",
  description: "Generative AI and LLM integration by Savo Technologies: chat, drafting, summarization and RAG features shipped into your product with eval suites, cost routing and zero vendor lock in. Instant price estimate.",
  path: "/ai/generative-ai/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
