import type { Metadata } from "next";
import HirePageView from "@/components/hire-page";
import { getHireRole } from "@/lib/hire-data";

const r = getHireRole("mobile-developers")!;

export const metadata: Metadata = {
  title: "Hire Mobile Developers",
  description: "Hire dedicated mobile developers from Savo Technologies: React Native, Flutter, Swift and Kotlin with weekly store releases. Matched in 48 hours with a two week paid trial and transparent rates.",
  alternates: { canonical: "/hire/mobile-developers/" },
  openGraph: {
    title: "Hire Mobile Developers | Savo Technologies",
    description: "Hire dedicated mobile developers from Savo Technologies: React Native, Flutter, Swift and Kotlin with weekly store releases. Matched in 48 hours with a two week paid trial and transparent rates.",
  },
};

export default function Page() {
  return <HirePageView role={r} />;
}
