import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("data-analytics")!;

export const metadata: Metadata = {
  title: "Data & Analytics Services",
  description: "Data and analytics by Savo Technologies: pipelines, dbt warehouses, trusted BI dashboards and production ML. Instant price estimate in your currency inside.",
  alternates: { canonical: "/services/data-analytics/" },
  openGraph: {
    title: "Data & Analytics Services | Savo Technologies",
    description: "Data and analytics by Savo Technologies: pipelines, dbt warehouses, trusted BI dashboards and production ML. Instant price estimate in your currency inside.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
