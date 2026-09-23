import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("ai-agent-development");

export const metadata = pageMetadata({
  title: "AI Agent Development Services",
  description: "AI agent development by Savo Technologies: support agents, knowledge copilots and workflow automators with RAG, guardrails and eval suites, deployed across web, WhatsApp and email. Instant price estimate in your currency.",
  path: "/services/ai-agent-development/",
  ogDescription: "Support agents, copilots and automators with guardrails and evals. Instant price estimate inside.",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
