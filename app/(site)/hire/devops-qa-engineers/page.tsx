import { pageMetadata } from "@/lib/seo";
import HirePageView from "@/components/hire-page";
import { mustGetHireRole } from "@/lib/hire-data";

const r = mustGetHireRole("devops-qa-engineers");

export const metadata = pageMetadata({
  title: "Hire DevOps & QA Engineers",
  description: "Hire dedicated DevOps and QA engineers from Savo Technologies: AWS, Kubernetes, Terraform, CI/CD and test automation. Matched in 48 hours with a two week paid trial and transparent rates.",
  path: "/hire/devops-qa-engineers/",
});

export default function Page() {
  return <HirePageView role={r} />;
}
