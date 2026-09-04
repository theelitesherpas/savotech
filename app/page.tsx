import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Services from "@/components/services";
import AiAgents from "@/components/ai-agents";
import AskSavo from "@/components/ask-savo";
import Industries from "@/components/industries";
import Portfolio from "@/components/portfolio";
import Hire from "@/components/hire";
import Estimator from "@/components/estimator";
import Why from "@/components/why";
import PortalTeaser from "@/components/portal-teaser";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import Careers from "@/components/careers";
import FinalCta from "@/components/final-cta";

/**
 * Savo Technologies homepage.
 * Static-first server render: every section above is either a server component
 * (zero client JS) or a thin client island (hero slider, chat, estimator, rates).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <AiAgents />
      <AskSavo />
      <Industries />
      <Portfolio />
      <Hire />
      <Estimator />
      <Why />
      <PortalTeaser />
      <Testimonials />
      <Faq />
      <Careers />
      <FinalCta />
    </>
  );
}
