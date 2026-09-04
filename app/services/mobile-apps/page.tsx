import type { Metadata } from "next";
import ServicePageView from "@/components/service-page";
import { getService } from "@/lib/services-data";

const s = getService("mobile-apps")!;

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description: "Mobile app development by Savo Technologies: React Native, Flutter, Swift and Kotlin apps for iOS and Android with weekly store releases and 99.5% crash free sessions. Instant price estimate inside.",
  alternates: { canonical: "/services/mobile-apps/" },
  openGraph: {
    title: "Mobile App Development Services | Savo Technologies",
    description: "Mobile app development by Savo Technologies: React Native, Flutter, Swift and Kotlin apps for iOS and Android with weekly store releases and 99.5% crash free sessions. Instant price estimate inside.",
  },
};

export default function Page() {
  return <ServicePageView service={s} />;
}
