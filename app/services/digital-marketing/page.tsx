import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const svc = mustGetService("digital-marketing");

export const metadata = pageMetadata({
  title: svc.title,
  description: svc.tagline + " " + svc.intro[0],
  path: "/services/digital-marketing/",
});

export default function Page() {
  return <ServicePageView service={svc} />;
}
