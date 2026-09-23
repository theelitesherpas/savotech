import { pageMetadata } from "@/lib/seo";
import ServicePageView from "@/components/service-page";
import { mustGetService } from "@/lib/services-data";

const s = mustGetService("mobile-apps");

export const metadata = pageMetadata({
  title: "Mobile App Development Services",
  description: "Mobile app development by Savo Technologies: React Native, Flutter, Swift and Kotlin apps for iOS and Android with weekly store releases and 99.5% crash free sessions. Instant price estimate inside.",
  path: "/services/mobile-apps/",
});

export default function Page() {
  return <ServicePageView service={s} />;
}
