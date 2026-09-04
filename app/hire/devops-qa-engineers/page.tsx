import type { Metadata } from "next";
import HirePageView from "@/components/hire-page";
import { getHireRole } from "@/lib/hire-data";

const r = getHireRole("devops-qa-engineers")!;

export const metadata: Metadata = {
  title: "Hire DevOps & QA Engineers",
  description: "Hire dedicated DevOps and QA engineers from Savo Technologies: AWS, Kubernetes, Terraform, CI/CD and test automation. Matched in 48 hours with a two week paid trial and transparent rates.",
  alternates: { canonical: "/hire/devops-qa-engineers/" },
  openGraph: {
    title: "Hire DevOps & QA Engineers | Savo Technologies",
    description: "Hire dedicated DevOps and QA engineers from Savo Technologies: AWS, Kubernetes, Terraform, CI/CD and test automation. Matched in 48 hours with a two week paid trial and transparent rates.",
  },
};

export default function Page() {
  return <HirePageView role={r} />;
}
