import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("ui-ux")!;

export const metadata: Metadata = {
  title: "UI/UX Design Services",
  description: "UI/UX design services by Savo Technologies: research, design systems and web and mobile interfaces developers can build without guessing. WCAG 2.2 AA by default. Instant price estimate inside.",
  alternates: { canonical: "/services/ui-ux/" },
  openGraph: {
    title: "UI/UX Design Services | Savo Technologies",
    description: "UI/UX design services by Savo Technologies: research, design systems and web and mobile interfaces developers can build without guessing. WCAG 2.2 AA by default. Instant price estimate inside.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
