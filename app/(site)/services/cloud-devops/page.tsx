import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("cloud-devops");

export const metadata = pageMetadata({
  title: "Cloud & DevOps Services",
  description: "Cloud and DevOps by Savo Technologies: AWS landing zones, Kubernetes operations, CI/CD pipelines and FinOps that cuts 20 to 35% of cloud spend. Instant price estimate inside.",
  path: "/services/cloud-devops/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
