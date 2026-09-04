import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("cloud-devops")!;

export const metadata: Metadata = {
  title: "Cloud & DevOps Services",
  description: "Cloud and DevOps by Savo Technologies: AWS landing zones, Kubernetes operations, CI/CD pipelines and FinOps that cuts 20 to 35% of cloud spend. Instant price estimate inside.",
  alternates: { canonical: "/services/cloud-devops/" },
  openGraph: {
    title: "Cloud & DevOps Services | Savo Technologies",
    description: "Cloud and DevOps by Savo Technologies: AWS landing zones, Kubernetes operations, CI/CD pipelines and FinOps that cuts 20 to 35% of cloud spend. Instant price estimate inside.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
