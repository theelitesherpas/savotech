import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("ai-agent-development")!;

export const metadata: Metadata = {
  title: "AI Agent Development Services",
  description:
    "AI agent development by Savo Technologies: support agents, knowledge copilots and workflow automators with RAG, guardrails and eval suites, deployed across web, WhatsApp and email. Instant price estimate in your currency.",
  alternates: { canonical: "/services/ai-agent-development/" },
  openGraph: {
    title: "AI Agent Development Services | Savo Technologies",
    description:
      "Support agents, copilots and automators with guardrails and evals. Instant price estimate inside.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
