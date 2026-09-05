import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const svc = getService("qa-testing")!;

export const metadata: Metadata = {
  title: svc.title,
  description: svc.tagline + " " + svc.intro[0],
  alternates: { canonical: "/services/qa-testing/" },
};

export default function Page() {
  return <ServicePageView service={svc} />;
}
