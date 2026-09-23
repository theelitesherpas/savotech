import { pageMetadata } from "@/lib/seo";
import HirePageView from "@/components/hire-page";
import { mustGetHireRole } from "@/lib/hire-data";

const r = mustGetHireRole("mobile-developers");

export const metadata = pageMetadata({
  title: "Hire Mobile Developers",
  description: "Hire dedicated mobile developers from Savo Technologies: React Native, Flutter, Swift and Kotlin with weekly store releases. Matched in 48 hours with a two week paid trial and transparent rates.",
  path: "/hire/mobile-developers/",
});

export default function Page() {
  return <HirePageView role={r} />;
}
