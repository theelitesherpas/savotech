export type Article = {
  slug: string;
  title: string;
  cat: "Engineering" | "AI" | "Design" | "Delivery";
  excerpt: string;
  time: string;
  date: string;
  author: string;
  role: string;
  img: string;
  body: { h?: string; p?: string; li?: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "ai-agents-in-production",
    title: "What we learned shipping AI agents into production",
    cat: "AI",
    excerpt: "Seven copilots later, the patterns that survived contact with real users, and the ones we retired.",
    time: "9 min read",
    date: "Feb 2026",
    author: "Rohan Desai",
    role: "Head of AI",
    img: "/work/sahm.jpg",
    body: [
      { p: "Everyone can demo an AI agent. Keeping one in production, earning trust with real users every day, is a different discipline. After shipping seven production agents across healthcare, telecom and finance, here is what survived and what we quietly retired." },
      { h: "Guardrails are the product" },
      { p: "The single biggest lesson: users forgive a limited agent and abandon an unreliable one. Our best performing copilot answers fewer question types than the version before it, but every answer it gives is one it can stand behind." },
      { li: [
        "Every agent action passes a confidence gate, and low confidence routes to a human with full context.",
        "The agent declares what it cannot do, in plain language, on the interface itself.",
        "Every conversation is logged for review, and the review loop ships improvements weekly.",
      ] },
      { h: "Retrieval beats fine tuning, still" },
      { p: "For enterprise knowledge, a well structured retrieval layer with fresh documents outperformed every fine tuning experiment we ran, at a fraction of the cost. Fine tuning earned its place for tone and format, not for facts." },
      { h: "The metric that matters is containment with satisfaction" },
      { p: "Deflection alone is a vanity metric. An agent that closes 70% of tickets while satisfying users is a win. An agent that closes 70% while enraging them is a slow motion brand failure. Measure both, publish both, improve both." },
      { p: "The teams winning with agents treat them like products with owners, roadmaps and support, not like features that shipped once. That is the entire secret." },
    ],
  },
  {
    slug: "core-web-vitals-budgets",
    title: "Core Web Vitals: the budgets we ship with",
    cat: "Engineering",
    excerpt: "The exact performance numbers in every Savo web proposal, and how we enforce them in CI.",
    time: "6 min read",
    date: "Jan 2026",
    author: "Priya Nair",
    role: "Head of Engineering",
    img: "/work/nexora.jpg",
    body: [
      { p: "Speed is a feature users can feel and search engines can measure. Rather than promising performance and hoping, we put numbers in the contract and gates in the pipeline. These are the budgets." },
      { h: "The budgets" },
      { li: [
        "Largest Contentful Paint under 2.5 seconds on a mid tier phone over 4G.",
        "Interaction to Next Paint under 200 milliseconds on the top ten pages.",
        "Cumulative Layout Shift under 0.1, enforced with element level annotations.",
        "Total JavaScript under 170KB compressed on first load for marketing routes.",
      ] },
      { h: "How CI keeps them honest" },
      { p: "Every pull request runs Lighthouse against the changed routes, and a regression beyond ten percent fails the build. Budgets are cheap when they are enforced by machines and expensive when they are enforced by arguments." },
      { p: "The result across our portfolio: a 98 average Lighthouse score and conversion lifts that correlate directly with speed work. Fast is not a nice to have. It is the cheapest growth lever most teams never pull." },
    ],
  },
  {
    slug: "wcag-aa-in-practice",
    title: "WCAG AA in practice: the testing loop behind every portal",
    cat: "Design",
    excerpt: "Accessibility as a build requirement, not a compliance scramble. Our exact checklist and test loop.",
    time: "8 min read",
    date: "Jan 2026",
    author: "Sara Mathew",
    role: "Head of Design",
    img: "/work/medibridge.jpg",
    body: [
      { p: "Accessibility fails in the gap between the guidelines and the pull request. Closing that gap is a process problem, and after years of shipping portals that must pass audits, ours looks like this." },
      { h: "The loop" },
      { li: [
        "Design tokens encode contrast, focus and touch target rules, so compliance is the default path.",
        "Every component ships with keyboard only test notes in the PR description.",
        "A screen reader pass happens before handover, not after the complaint.",
        "Automated checks run in CI, but the final call is always a human using the product the way a user would.",
      ] },
      { h: "What automated tools miss" },
      { p: "Automated scans catch roughly a third of real issues. The rest lives in focus order, semantic structure and error messaging, things only a person with assistive technology experiences. Budget for that pass or budget for the audit failure later." },
      { p: "The payoff compounds: portals we built four years ago still pass their annual audits unchanged, because the floor was built into the system rather than patched onto it." },
    ],
  },
  {
    slug: "offshore-without-the-risk",
    title: "How to hire an offshore team without the classic risks",
    cat: "Delivery",
    excerpt: "The questions to ask, the contracts to demand and the warning signs we would flag even about ourselves.",
    time: "7 min read",
    date: "Dec 2025",
    author: "Aarav Mehta",
    role: "Founder & CEO",
    img: "/work/clearledger.jpg",
    body: [
      { p: "We are an offshore team, so this is written with inside knowledge. Offshore delivery fails in predictable ways, and every one of them is checkable before you sign." },
      { h: "Ask these four questions" },
      { li: [
        "Who exactly will build this, named, with their tenure? Vague staffing means bait and switch.",
        "What is your trial exit? A team confident in fit offers a short paid trial with a clean ending.",
        "Where does the code live from day one? Anything other than your repository is a hostage situation.",
        "Show me a status call recording. If reporting is theater in the sales phase, it is theater forever.",
      ] },
      { h: "The contract clauses that matter" },
      { p: "IP assignment from the first commit, documentation as a deliverable with acceptance criteria, and a wind down clause that guarantees handover regardless of how the relationship ends. Any team that resists these three is telling you something." },
      { p: "Done right, offshore is not a compromise. It is how a mid size company gets a senior team it could never afford locally, at rates that make the math work." },
    ],
  },
  {
    slug: "offline-first-field-apps",
    title: "Offline first field apps that drivers actually keep using",
    cat: "Engineering",
    excerpt: "The sync patterns behind field tools with 92% driver retention across 12,000 vehicles.",
    time: "11 min read",
    date: "Dec 2025",
    author: "Priya Nair",
    role: "Head of Engineering",
    img: "/work/ridelink.jpg",
    body: [
      { p: "Most field apps die in the dead zone. The ones that survive are architected for the network their users actually have, which in logistics and utilities is often no network at all." },
      { h: "Local first, sync always" },
      { p: "The app treats the local database as the source of truth for the driver and the server as the source of truth for the fleet. Every action works offline, queues durably, and syncs with conflict resolution the moment signal returns." },
      { h: "Conflict resolution users understand" },
      { p: "Technical merges should be invisible, and where they cannot be, the interface must make the resolution obvious and reversible. A dispatcher seeing a merge surprise has lost trust in the data, and trust in data is the entire product." },
      { h: "Why adoption holds" },
      { p: "Drivers keep using tools that respect their reality: fast on cheap devices, frugal with battery and data, and functional in a basement or a highway tunnel. That is an architecture decision, made on day one, not a patch release." },
    ],
  },
  {
    slug: "estimating-software-honestly",
    title: "Why software estimates are always wrong, and how to plan anyway",
    cat: "Delivery",
    excerpt: "A calmer way to budget software: ranges, milestones and the conversations estimates should trigger.",
    time: "6 min read",
    date: "Nov 2025",
    author: "Aarav Mehta",
    role: "Founder & CEO",
    img: "/work/kavya.jpg",
    body: [
      { p: "Any single number for a software project is a guess wearing a suit. The honest version is a range with assumptions attached, and a plan that survives contact with reality." },
      { h: "Estimate ranges, plan milestones" },
      { p: "We quote ranges tied to scope decisions, then break delivery into milestones small enough that a wrong assumption surfaces in weeks, not quarters. The estimate is a forecast; the milestone is a checkpoint where the forecast gets corrected with evidence." },
      { h: "The budget conversation clients never regret" },
      { p: "The most valuable meeting is the one where we walk through what the budget buys at the low end, the likely middle and the ambitious top, and the client chooses deliberately. Clients never regret choosing. They regret discovering." },
      { p: "Every calculator on this site shows ranges for exactly this reason. Precision is a cost, and usually the wrong place to spend it." },
    ],
  },
];

const AUTHOR_IMG: Record<string, string> = {
  "Aarav Mehta": "/team/aarav.jpg",
  "Priya Nair": "/team/priya.jpg",
  "Rohan Desai": "/team/rohan.jpg",
  "Sara Khan": "/team/sara.jpg",
  "Vikram Rao": "/team/vikram.jpg",
};

export function authorImg(name: string) {
  return AUTHOR_IMG[name] ?? "/team/aarav.jpg";
}

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
