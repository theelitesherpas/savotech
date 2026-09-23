import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("machine-learning");

export const metadata = pageMetadata({
  title: "Machine Learning & Analytics",
  description: "Machine learning by Savo Technologies: forecasting, recommendations, anomaly detection and churn models shipped as monitored production services tied to business metrics. Instant price estimate.",
  path: "/ai/machine-learning/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
