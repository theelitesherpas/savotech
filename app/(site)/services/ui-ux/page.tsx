import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("ui-ux");

export const metadata = pageMetadata({
  title: "UI/UX Design Services",
  description: "UI/UX design services by Savo Technologies: research, design systems and web and mobile interfaces developers can build without guessing. WCAG 2.2 AA by default. Instant price estimate inside.",
  path: "/services/ui-ux/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
