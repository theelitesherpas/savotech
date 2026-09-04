import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StructuredData from "@/components/structured-data";
import MouseEffects from "@/components/mouse-effects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.savotechnologies.com";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ORIGIN = SITE_URL + BASE_PATH;

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pjs",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  title: {
    default:
      "Savo Technologies | AI Agent Development & Web/Mobile App Development Company | 10+ Years, Global Delivery",
    template: "%s | Savo Technologies",
  },
  description:
    "Savo Technologies is a 10-year AI agent development, web and mobile app development company serving India, the USA, Saudi Arabia & GCC, the UK and Australia. Hire dedicated developers, meet production ready AI agents, and get an instant project estimate in INR.",
  keywords: [
    "Savo",
    "Savo Technologies",
    "Savo Technologies India",
    "Savo Technologies reviews",
    "Savo tech",
    "Savo Technologies AI agents",
    "top freelancers in India",
    "top freelancers in USA",
    "top freelancers in Saudi Arabia Dubai Gulf",
    "top Upwork developers in India",
    "best freelance developers India USA Dubai",
    "best AI developers India",
    "best website development company in India",
    "best mobile app development company in India",
    "best software company in Indore India",
    "top IT companies Indore",
    "AI agent development company",
    "AI development company in India",
    "web and mobile app development company",
    "custom software development company",
    "hire dedicated developers India",
    "web development services for USA clients",
    "software development company for Saudi Arabia and Gulf businesses",
    "AI agents for enterprise",
    "app development company Australia UK",
  ],
  applicationName: "Savo Technologies",
  authors: [{ name: "Savo Technologies" }],
  creator: "Savo Technologies",
  publisher: "Savo Technologies Private Limited",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Savo Technologies",
    title: "Savo Technologies | AI Agents, Web & Mobile Development. 10 Years. Global Delivery.",
    description:
      "A 10-year global technology company: AI agent development, web and mobile apps, and full spectrum software services for India, USA, Saudi Arabia & GCC, UK and Australia.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savo Technologies | AI Agents, Web & Mobile Development",
    description:
      "10 years of global delivery: AI agents, web & mobile apps, dedicated teams. India · USA · Saudi Arabia & GCC · UK · Australia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#070D1D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pjs.variable}`}>
      <body>
        {/* DIRECTION CONTRACT
        THESIS: A Swiss-light engineering identity: white ground, black type, and a pure
        RGB tricolor (red/blue/green) as the only chroma, spent on small decisive marks
        and one ink zone for AI. Refuses the dark-indigo gradient world it replaces.
        OWN-WORLD: White ground with 1px #E7E7EB hairlines; ink #101014 panels; flat
        electric accents #FF1E1D / #1D28FF / #28FF1E with pale tint chips (#FFE8E9 /
        #E8ECFC / #E9FBE6); Plus Jakarta Sans across display and body; no gradients, no glow
        except the PRO badge pulse; a dark agent-console panel inside a light hero.
        STORY: The visitor reads a confident decade-old engineering firm whose AI work is
        the only colorful thing in the room, and acts: Start Your Project, demo request,
        estimator.
        FIRST VIEWPORT: White hero, left-aligned black display H1 with a blue marker
        underline on the key phrase, blue primary + ink outline CTAs, RGB assurance
        ticks, and a large ink console panel holding the animated agent constellation;
        light sticky header above.
        FORM: User-pinned reference set (savo95-100; palette and structure extracted from
        pixels); code-led. Stack: Next.js + PostgreSQL per user instruction.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
        review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SiteHeader />
        <MouseEffects />
        <main id="main">{children}</main>
        <SiteFooter />
        <StructuredData siteUrl={ORIGIN} />
      </body>
    </html>
  );
}
