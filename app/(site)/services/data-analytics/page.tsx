import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("data-analytics");

export const metadata = pageMetadata({
  title: "Data & Analytics Services",
  description: "Data and analytics by Savo Technologies: pipelines, dbt warehouses, trusted BI dashboards and production ML. Instant price estimate in your currency inside.",
  path: "/services/data-analytics/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
