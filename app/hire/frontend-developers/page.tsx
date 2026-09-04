import type { Metadata } from "next";
import HirePageView from "@/components/hire-page";
import { getHireRole } from "@/lib/hire-data";

const r = getHireRole("frontend-developers")!;

export const metadata: Metadata = {
  title: "Hire Frontend Developers",
  description: "Hire dedicated React and Next.js frontend developers from Savo Technologies: design systems, performance budgets and accessibility, matched in 48 hours with a two week paid trial. Transparent rates.",
  alternates: { canonical: "/hire/frontend-developers/" },
  openGraph: {
    title: "Hire Frontend Developers | Savo Technologies",
    description: "Hire dedicated React and Next.js frontend developers from Savo Technologies: design systems, performance budgets and accessibility, matched in 48 hours with a two week paid trial. Transparent rates.",
  },
};

export default function Page() {
  return <HirePageView role={r} />;
}
