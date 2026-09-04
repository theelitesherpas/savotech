import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("web-development")!;

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Web development services by Savo Technologies: React, Next.js and Node.js platforms, portals and headless commerce with performance budgets, accessibility and weekly shipping. Get an instant price estimate.",
  alternates: { canonical: "/services/web-development/" },
  openGraph: {
    title: "Web Development Services | Savo Technologies",
    description: "Web development services by Savo Technologies: React, Next.js and Node.js platforms, portals and headless commerce with performance budgets, accessibility and weekly shipping. Get an instant price estimate.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
