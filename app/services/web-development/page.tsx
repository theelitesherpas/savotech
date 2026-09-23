import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("web-development");

export const metadata = pageMetadata({
  title: "Web Development Services",
  description: "Web development services by Savo Technologies: React, Next.js and Node.js platforms, portals and headless commerce with performance budgets, accessibility and weekly shipping. Get an instant price estimate.",
  path: "/services/web-development/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
