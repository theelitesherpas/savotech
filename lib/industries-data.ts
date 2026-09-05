export type Industry = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  intro: string[];
  numeral: { v: string; l: string };
  stats: { v: string; l: string }[];
  challenges: { t: string; d: string }[];
  solutions: { t: string; d: string }[];
  tech: string[];
  cases: { name: string; meta: string; img: string; stat: string }[];
  compliance: string[];
  outcomes: { v: string; l: string }[];
  faqs: { q: string; a: string }[];
  knowledge: { t: string; d: string; time: string }[];
  photo: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    short: "Healthcare",
    tagline: "Software that clinicians actually trust.",
    intro: [
      "Patient portals, telehealth and clinical workflows built to HIPAA aligned standards, with the uptime and accessibility that healthcare demands.",
      "From 40 clinic patient portals to clinical copilots, our teams ship healthcare software that survives audits and real clinical use.",
    ],
    numeral: { v: "40+", l: "clinics running our software" },
    stats: [
      { v: "99.98%", l: "uptime maintained" },
      { v: "70%", l: "tickets deflected by AI" },
      { v: "HIPAA", l: "aligned from day one" },
    ],
    challenges: [
      { t: "Compliance load", d: "HIPAA, local data residency and audit trails slow every release cycle." },
      { t: "Clinician time", d: "Interfaces that cost nurses clicks cost hospitals money and patience." },
      { t: "Integration maze", d: "EHRs, labs and billing systems that were never designed to talk." },
      { t: "Patient expectations", d: "Consumers now expect app grade experiences from care providers." },
    ],
    solutions: [
      { t: "Patient portals", d: "Appointments, records, prescriptions and telehealth in one accessible flow." },
      { t: "Clinical copilots", d: "AI summarization and triage that deflects 70% of tier 1 queries." },
      { t: "Telehealth platforms", d: "Low latency video consults with scheduling, notes and follow ups." },
      { t: "Interoperability", d: "HL7 and FHIR integrations that finally connect your systems." },
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "FHIR", "HL7", "WebRTC", "AWS", "Python", "LangChain"],
    cases: [
      { name: "MediBridge Health", meta: "Patient portal · 40+ clinics", img: "/work/medibridge.jpg", stat: "40+ clinics live" },
      { name: "Sahm AI Support Desk", meta: "Clinical copilot · Telecom scale", img: "/work/sahm.jpg", stat: "70% tickets deflected" },
    ],
    compliance: ["HIPAA", "GDPR", "SOC 2 workflows", "Audit trails", "Data residency"],
    outcomes: [
      { v: "4 min", l: "average portal task time, down from 11" },
      { v: "70%", l: "tier 1 queries deflected by copilot" },
      { v: "0", l: "critical compliance findings in 2 years" },
    ],
    faqs: [
      { q: "How do you handle PHI?", a: "Protected health information stays inside your infrastructure with encryption at rest and in transit, least privilege access and full audit logging. We sign BAAs before touching any environment." },
      { q: "Have you integrated EHRs before?", a: "Yes, via HL7 and FHIR against major EHR vendors, including messy legacy interfaces. We scope integration risk in week one, not after launch." },
      { q: "Can you work inside our compliance program?", a: "We adapt to your controls: SOC 2 workflows, pen test cycles and change management. Several of our healthcare clients run quarterly audits against our releases." },
      { q: "What does a patient portal cost?", a: "Most portals land between ₹15L and ₹40L depending on integrations and modules. The calculator on our services pages gives a tailored range in under a minute." },
    ],
    knowledge: [
      { t: "FHIR without the fear", d: "A practical starter guide for teams inheriting HL7 estates.", time: "9 min read" },
      { t: "Accessibility in clinical UIs", d: "WCAG patterns that survive real hospital workflows.", time: "7 min read" },
      { t: "AI triage that clinicians accept", d: "Designing guardrails humans actually trust.", time: "8 min read" },
    ],
    photo: "/work/medibridge.jpg",
  },
  {
    slug: "fintech",
    title: "FinTech & Banking",
    short: "FinTech",
    tagline: "Money software that passes every audit.",
    intro: [
      "Wallets, payment rails and banking dashboards built PCI DSS ready, with reconciliation, fraud signals and the boring reliability finance demands.",
      "Our fintech work moves real money across India, the GCC and the UK, and has passed PCI audits and open banking reviews without drama.",
    ],
    numeral: { v: "PCI", l: "ready infrastructure, audited" },
    stats: [
      { v: "3 regions", l: "India, GCC and UK rails" },
      { v: "120k", l: "downloads, year one" },
      { v: "99.99%", l: "payment uptime" },
    ],
    challenges: [
      { t: "Regulatory pressure", d: "PCI, RBI and open banking rules that change under your feet." },
      { t: "Fraud and risk", d: "Real time signals needed without punishing good customers." },
      { t: "Legacy cores", d: "Banking systems older than the teams integrating with them." },
      { t: "Trust and UX", d: "Users demand simplicity from systems that cannot fail." },
    ],
    solutions: [
      { t: "Digital wallets", d: "KYC, transfers, bill pay and cards under one thumb, PCI DSS ready." },
      { t: "Banking dashboards", d: "Open banking aggregation with live cashflow insight for SMEs." },
      { t: "Payment platforms", d: "Settlement engines, dispute workflows and merchant tools." },
      { t: "Risk and fraud tooling", d: "Anomaly detection and case management for compliance teams." },
    ],
    tech: ["Flutter", "React Native", "Node.js", "PostgreSQL", "Kafka", "Redis", "gRPC", "AWS", "Terraform", "Python"],
    cases: [
      { name: "GulfPay", meta: "GCC digital wallet", img: "/work/gulfpay.jpg", stat: "PCI DSS ready" },
      { name: "ClearLedger", meta: "SME banking dashboard · UK", img: "/work/clearledger.jpg", stat: "Open banking ready" },
    ],
    compliance: ["PCI DSS", "RBI guidelines", "Open banking", " PSD2", "SOC 2", "Fraud tooling"],
    outcomes: [
      { v: "120k", l: "app downloads in the first year" },
      { v: "0", l: "critical audit findings at launch" },
      { v: "3.2s", l: "median KYC journey, down from 11" },
    ],
    faqs: [
      { q: "Have you passed PCI audits before?", a: "Yes. GulfPay runs on infrastructure we built and hardened through a successful PCI DSS readiness audit, including tokenization and network segmentation." },
      { q: "Can you integrate with banking cores?", a: "We have integrated cores and open banking APIs across three regions. Where documentation lies, we build contract tests and reconciliation first." },
      { q: "How do you approach fraud detection?", a: "Rules first for explainability, ML where the numbers justify it, always with case management so your analysts stay in control." },
      { q: "Do you build wallets for India specifically?", a: "Yes, including UPI flows, RBI compliance posture and KYC journeys tuned for Indian users." },
    ],
    knowledge: [
      { t: "PCI DSS without panic", d: "The checklist we run before any payment launch.", time: "10 min read" },
      { t: "Open banking integration patterns", d: "Lessons from UK and GCC rollouts.", time: "8 min read" },
      { t: "KYC journeys that convert", d: "Cutting drop off without cutting corners.", time: "6 min read" },
    ],
    photo: "/work/gulfpay.jpg",
  },
  {
    slug: "ecommerce",
    title: "Ecommerce & Retail",
    short: "Ecommerce",
    tagline: "Storefronts engineered to convert.",
    intro: [
      "Headless storefronts, PIM systems and omnichannel retail platforms with the page speed and checkout flow that directly move revenue.",
      "From 3.2x conversion lifts to 200k student marketplaces, our retail work is measured in numbers your CFO cares about.",
    ],
    numeral: { v: "3.2x", l: "conversion lift, best result" },
    stats: [
      { v: "98", l: "avg Lighthouse score" },
      { v: "200k", l: "marketplace users shipped" },
      { v: "1.1s", l: "median product page load" },
    ],
    challenges: [
      { t: "Speed is revenue", d: "Every 100ms of load time costs conversion you paid to acquire." },
      { t: "Catalog chaos", d: "Thousands of SKUs, five systems of record, zero single truth." },
      { t: "Checkout friction", d: "Carts abandoned at the exact moment of intent." },
      { t: "Omnichannel reality", d: "Online, offline and marketplace inventory that never agrees." },
    ],
    solutions: [
      { t: "Headless storefronts", d: "Next.js commerce with CMS driven content and sub second pages." },
      { t: "PIM and inventory", d: "One product truth feeding web, app, marketplaces and stores." },
      { t: "Checkout optimization", d: "UPI, cards and wallets in flows tuned by real funnel data." },
      { t: "Marketplace platforms", d: "Multi vendor commerce with payouts, ratings and moderation." },
    ],
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Stripe", "Razorpay", "AWS", "dbt"],
    cases: [
      { name: "Nexora Retail", meta: "Headless commerce · Bengaluru", img: "/work/nexora.jpg", stat: "3.2x conversion lift" },
      { name: "EduSpring", meta: "Marketplace · India", img: "/work/eduspring.jpg", stat: "200k students" },
    ],
    compliance: ["PCI SAQ A", "GDPR", "GST ready", "Accessibility"],
    outcomes: [
      { v: "3.2x", l: "conversion after replatform" },
      { v: "62%", l: "faster product page loads" },
      { v: "1", l: "source of truth for 40k SKUs" },
    ],
    faqs: [
      { q: "Headless or platform first?", a: "We recommend headless when content velocity and speed matter, platforms when you need maximum ecosystem quickly. We build both and say so honestly after seeing your catalog." },
      { q: "Can you migrate without downtime?", a: "Yes, with traffic shifting and rollback plans at every step. Our replatforming playbook has moved stores through peak seasons unharmed." },
      { q: "Which payment providers do you support?", a: "Razorpay, Stripe, PayPal, UPI flows and GCC gateways, unified behind one checkout abstraction so adding providers stays cheap." },
      { q: "How do you prove conversion gains?", a: "Baseline funnel analytics before we touch anything, then measured lifts after launch. No vanity redesign claims." },
    ],
    knowledge: [
      { t: "The headless decision tree", d: "When Next.js commerce beats a platform, honestly.", time: "7 min read" },
      { t: "Checkout psychology that is not dark", d: "Friction cuts that respect your customers.", time: "6 min read" },
      { t: "PIM in weeks not years", d: "A pragmatic modelling path for messy catalogs.", time: "8 min read" },
    ],
    photo: "/work/nexora.jpg",
  },
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    short: "Logistics",
    tagline: "Fleets, warehouses and routes, in sync.",
    intro: [
      "Live fleet tracking, route optimization and warehouse systems that keep 12,000 vehicles honest across Australia and India.",
      "We build the operational software logistics teams live in daily, offline first and accurate to the minute.",
    ],
    numeral: { v: "12k", l: "vehicles tracked live" },
    stats: [
      { v: "99.5%", l: "tracking accuracy" },
      { v: "18%", l: "route cost saved" },
      { v: "Offline", l: "first field apps" },
    ],
    challenges: [
      { t: "Dead zones", d: "Field apps that die exactly where the work happens." },
      { t: "ETAs that lie", d: "Customers and planners both stop trusting bad estimates." },
      { t: "Fragmented data", d: "GPS, telematics and orders in three disconnected systems." },
      { t: "Driver adoption", d: "Tools drivers abandon within a week of rollout." },
    ],
    solutions: [
      { t: "Fleet tracking", d: "Live maps, geofences and scorecards drivers actually accept." },
      { t: "Route optimization", d: "Dynamic routing that respects real world constraints." },
      { t: "Warehouse systems", d: "Picking, packing and inventory with barcode and scan flows." },
      { t: "Customer portals", d: "Self service tracking and PODs that cut support tickets." },
    ],
    tech: ["Flutter", "React Native", "Node.js", "PostgreSQL", "Redis", "Maps API", "Kafka", "TimescaleDB", "AWS", "GraphQL"],
    cases: [
      { name: "RideLink", meta: "Fleet tracking · Australia", img: "/work/ridelink.jpg", stat: "12k vehicles tracked" },
      { name: "GreenGrid", meta: "Grid analytics · Energy", img: "/work/greengrid.jpg", stat: "31% insight gain" },
    ],
    compliance: ["GDPR", "Driver privacy", "Data residency", "SOC 2 workflows"],
    outcomes: [
      { v: "18%", l: "fuel and route cost reduction" },
      { v: "4.7★", l: "driver app store rating" },
      { v: "92%", l: "driver retention on new tools" },
    ],
    faqs: [
      { q: "How do your apps survive bad networks?", a: "Offline first architecture with conflict aware sync. Drivers keep working through dead zones and data reconciles when signal returns." },
      { q: "Can you use our existing telematics?", a: "Yes, we integrate major providers and normalize their quirks into one tracking truth." },
      { q: "Do you build driver facing or ops facing first?", a: "Driver facing. If drivers abandon the tool, ops dashboards become fiction. We win adoption first, then build reporting on real data." },
      { q: "What does fleet tracking cost to run?", a: "We design event pipelines to keep per vehicle costs flat as fleets grow. Caching and batching typically hold telemetry spend predictable." },
    ],
    knowledge: [
      { t: "Offline sync that drivers trust", d: "Conflict resolution patterns from the field.", time: "11 min read" },
      { t: "ETAs people believe", d: "Building estimate models that earn back trust.", time: "7 min read" },
      { t: "Telematics integration survival guide", d: "Normalizing provider chaos into one truth.", time: "9 min read" },
    ],
    photo: "/work/ridelink.jpg",
  },
  {
    slug: "real-estate",
    title: "Real Estate & PropTech",
    short: "Real Estate",
    tagline: "Property platforms that close deals.",
    intro: [
      "Listings platforms, virtual tours and property management suites that turn browsing into booked site visits.",
      "From developer portals to tenant apps, we build PropTech that agents and buyers actually use.",
    ],
    numeral: { v: "2.4x", l: "site visit bookings, best lift" },
    stats: [
      { v: "1.2s", l: "median listing page load" },
      { v: "60%", l: "leads captured after hours" },
      { v: "3D", l: "tours integrated" },
    ],
    challenges: [
      { t: "Listing sprawl", d: "Inventory scattered across portals, sheets and WhatsApp." },
      { t: "Lead leakage", d: "Interest that arrives after hours and never gets answered." },
      { t: "Tour scheduling", d: "Calendar ping pong between agents and buyers." },
      { t: "Trust gaps", d: "Buyers who cannot verify what they see online." },
    ],
    solutions: [
      { t: "Listings platforms", d: "Search, filters and maps fast enough for serious buyers." },
      { t: "Virtual tours", d: "3D walkthroughs and video tours embedded in listings." },
      { t: "CRM and lead routing", d: "Every enquiry captured, routed and followed up on time." },
      { t: "Property management", d: "Tenant apps, maintenance flows and owner dashboards." },
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "Elasticsearch", "Maps API", "WebRTC", "AWS"],
    cases: [
      { name: "Atlas Properties", meta: "Listings platform · Mumbai", img: "/work/kavya.jpg", stat: "2.4x site visits" },
      { name: "Nexora Retail", meta: "Platform build · Bengaluru", img: "/work/nexora.jpg", stat: "3.2x conversion" },
    ],
    compliance: ["RERA ready", "GDPR", "Accessibility"],
    outcomes: [
      { v: "2.4x", l: "site visit bookings after launch" },
      { v: "60%", l: "of leads now captured automatically" },
      { v: "9 min", l: "average first response to enquiries" },
    ],
    faqs: [
      { q: "Can you migrate listings from our portals?", a: "Yes, including deduplicating and enriching from multiple sources into one clean inventory." },
      { q: "Do virtual tours really help?", a: "Qualified visits rise when buyers pre screen online. We measure booking quality, not just tour counts." },
      { q: "How is RERA handled?", a: "We build RERA ready disclosure patterns and audit trails so compliance does not fight UX." },
      { q: "Agent adoption is our fear. Address it.", a: "We design agent workflows first and pilot with your best agents before rollout. Tools that save agents time get adopted; tools that surveil them do not." },
    ],
    knowledge: [
      { t: "Listings search that scales", d: "Elasticsearch patterns for property portals.", time: "7 min read" },
      { t: "After hours lead capture", d: "Automation that answers before competitors wake.", time: "5 min read" },
      { t: "3D tours without the bloat", d: "Virtual tour tech that does not sink page speed.", time: "6 min read" },
    ],
    photo: "/work/kavya.jpg",
  },
  {
    slug: "education",
    title: "Education & EdTech",
    short: "Education",
    tagline: "Learning platforms students finish.",
    intro: [
      "LMS platforms, live classrooms and assessment engines with the engagement mechanics that keep learners coming back.",
      "200,000 students later, we know what makes learning software get used and what makes it get abandoned.",
    ],
    numeral: { v: "200k", l: "students on our platforms" },
    stats: [
      { v: "87%", l: "course completion uplift" },
      { v: "200k", l: "learners served" },
      { v: "Live", l: "classes at scale" },
    ],
    challenges: [
      { t: "Completion cliff", d: "Enrolment is easy; week three is where courses die." },
      { t: "Live at scale", d: "Video that degrades exactly when a class fills up." },
      { t: "Assessment integrity", d: "Proctoring that respects honest students." },
      { t: "Institutional systems", d: "SIS and ERP integrations from another era." },
    ],
    solutions: [
      { t: "LMS platforms", d: "Courses, cohorts and progress mechanics that drive completion." },
      { t: "Live classrooms", d: "Low latency classes with recordings, notes and chat." },
      { t: "Assessment engines", d: "Question banks, proctoring and analytics for institutions." },
      { t: "Mobile learning", d: "Offline capable apps for commute sized lessons." },
    ],
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "WebRTC", "Redis", "Flutter", "AWS"],
    cases: [
      { name: "EduSpring", meta: "Learning platform · India", img: "/work/eduspring.jpg", stat: "200k students" },
      { name: "MediBridge Health", meta: "Training workflows", img: "/work/medibridge.jpg", stat: "40+ clinics" },
    ],
    compliance: ["FERPA aligned", "GDPR", "Accessibility", "Child safety"],
    outcomes: [
      { v: "87%", l: "uplift in course completion" },
      { v: "1.4s", l: "join time for live classes" },
      { v: "31%", l: "support tickets down via self serve" },
    ],
    faqs: [
      { q: "How do you improve completion rates?", a: "Cohorts, streaks, progress visibility and reminder loops designed from behavior data. Mechanics, not gimmicks, measured weekly." },
      { q: "Can you handle 10,000 live students?", a: "Yes, with WebRTC architectures that degrade gracefully and recordings within minutes of class end." },
      { q: "What about exam integrity?", a: "Layered proctoring options from browser lockdown to live monitoring, with appeal flows so honest students are not punished." },
      { q: "Do you integrate with university systems?", a: "We have integrated SIS and ERP systems of many vintages, always behind adapters so the LMS stays clean." },
    ],
    knowledge: [
      { t: "The completion playbook", d: "Every lever we pull to keep learners past week three.", time: "9 min read" },
      { t: "Live classes that scale", d: "WebRTC architecture for full rooms.", time: "8 min read" },
      { t: "Proctoring with dignity", d: "Assessment integrity that respects students.", time: "7 min read" },
    ],
    photo: "/work/eduspring.jpg",
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
