import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("machine-learning")!;

export const metadata: Metadata = {
  title: "Machine Learning & Analytics",
  description: "Machine learning by Savo Technologies: forecasting, recommendations, anomaly detection and churn models shipped as monitored production services tied to business metrics. Instant price estimate.",
  alternates: { canonical: "/ai/machine-learning/" },
  openGraph: {
    title: "Machine Learning & Analytics | Savo Technologies",
    description: "Machine learning by Savo Technologies: forecasting, recommendations, anomaly detection and churn models shipped as monitored production services tied to business metrics. Instant price estimate.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
