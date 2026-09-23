import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import StructuredData from "@/components/structured-data";
import MouseEffects from "@/components/mouse-effects";
import { CurrencyProvider } from "@/components/currency-provider";
import ScrollManager from "@/components/scroll-manager";

/**
 * Chrome layout for the existing website (everything except the /v2 concept
 * homepage, which renders standalone under its own route).
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      <ScrollManager />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <MouseEffects />
      <main id="main">{children}</main>
      <SiteFooter />
      <StructuredData />
    </CurrencyProvider>
  );
}
