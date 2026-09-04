import type { ReactNode } from "react";

/**
 * The Savo agent fleet — single source of truth.
 * Used by the homepage fleet section and the /ai-agents detail page.
 */
export type Agent = {
  name: string;
  slug: string;
  desc: string;
  detail: string;
  deliverables: string[];
  tags: string[];
  href: string;
  avatar: ReactNode;
};

export const AGENTS: Agent[] = [
  {
    name: "Savo SalesBot",
    slug: "salesbot",
    desc: "Qualifies inbound leads, answers product questions and books meetings straight into your CRM, around the clock.",
    detail:
      "SalesBot talks to every visitor the moment they arrive: it answers product questions with your approved knowledge base, scores intent against your ideal customer profile, and books qualified meetings directly into your reps' calendars. Unqualified traffic is nurtured instead of lost.",
    deliverables: [
      "Trained on your product docs, pricing and FAQs",
      "Lead scoring against your ideal customer profile",
      "Calendar booking with routing to the right rep",
      "Full conversation transcripts synced to your CRM",
    ],
    tags: ["24/7", "CRM Integration", "Lead Scoring"],
    href: "/ai-agents/#salesbot",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag1" x1="9" y1="14" x2="39" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#2BD926" />
          </linearGradient>
        </defs>
        <path d="M15 18c-4 2-6 5.5-6 9.5 0 4.5 3 7 6.5 7 2.4 0 4.3-1 5.5-2.7L24 28l3 3.8c1.2 1.7 3.1 2.7 5.5 2.7 3.5 0 6.5-2.5 6.5-7 0-4-2-7.5-6-9.5" stroke="url(#ag1)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M24 28v-6" stroke="url(#ag1)" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="18" cy="15" r="3.4" fill="#1D28FF" />
        <circle cx="30" cy="15" r="3.4" fill="#4D5CFF" />
      </svg>
    ),
  },
  {
    name: "Savo SupportAgent",
    slug: "supportagent",
    desc: "Resolves tier 1 support in 40+ languages and escalates edge cases to humans with full context attached.",
    detail:
      "SupportAgent absorbs the repetitive 70% of your ticket queue. It resolves tier 1 questions from your help center, tracks sentiment, and hands edge cases to humans with the full conversation, customer history and a suggested resolution attached.",
    deliverables: [
      "Tier 1 resolution across chat, email and widget",
      "40+ languages with native quality fluency",
      "Human handoff with summarized context",
      "CSAT capture and weekly quality reports",
    ],
    tags: ["Multilingual", "Human Handoff", "Ticket Sync"],
    href: "/ai-agents/#supportagent",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag2" x1="9" y1="10" x2="39" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF1E1D" />
            <stop offset="1" stopColor="#FF6B5C" />
          </linearGradient>
        </defs>
        <path d="M9 15h30v20a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V15Z" stroke="url(#ag2)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="m15 27 4.5 4.5L28 23" stroke="url(#ag2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 15v-2a7 7 0 0 1 14 0v2" stroke="url(#ag2)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Savo RecruitAI",
    slug: "recruitai",
    desc: "Screens resumes, runs structured first round chats and ranks candidates against your scorecard, bias audited.",
    detail:
      "RecruitAI reads every resume against your scorecard, runs structured first round conversations, and delivers a ranked shortlist with evidence for every decision. Bias audits run on each cohort so your process stays defensible and fair.",
    deliverables: [
      "Resume screening against a custom scorecard",
      "Structured async first round interviews",
      "Ranked shortlists with per candidate evidence",
      "Bias audit report for every hiring cohort",
    ],
    tags: ["Resume Parsing", "ATS Sync", "Bias Audits"],
    href: "/ai-agents/#recruitai",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag3" x1="8" y1="10" x2="40" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <circle cx="18" cy="16" r="5.5" stroke="url(#ag3)" strokeWidth="2.2" />
        <path d="M8 38c1-5.5 4.8-8.5 10-8.5 3 0 5.4 1 7.2 2.8" stroke="url(#ag3)" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="32.5" cy="21" r="6.5" stroke="url(#ag3)" strokeWidth="2.2" />
        <path d="M23 39c.8-6 4.6-9.5 9.5-9.5s6.3 3.5 7.5 9.5" stroke="url(#ag3)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Savo InsightAgent",
    slug: "insightagent",
    desc: "Answers data questions in plain English, builds live dashboards and flags anomalies before they cost money.",
    detail:
      "InsightAgent sits on your warehouse and turns plain-English questions into governed SQL. Every answer cites its query, every dashboard stays live, and anomalies surface before the monthly report would have caught them.",
    deliverables: [
      "Plain English queries over governed SQL",
      "Live dashboards your team can trust",
      "Anomaly alerts on revenue and ops metrics",
      "Row-level security and query audit logs",
    ],
    tags: ["NL → SQL", "Live Dashboards", "Anomaly Alerts"],
    href: "/ai-agents/#insightagent",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag4" x1="8" y1="9" x2="40" y2="41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2BD926" />
            <stop offset="1" stopColor="#1D28FF" />
          </linearGradient>
        </defs>
        <rect x="8" y="9" width="32" height="24" rx="3" stroke="url(#ag4)" strokeWidth="2.2" />
        <path d="M8 16h32" stroke="url(#ag4)" strokeWidth="2.2" />
        <path d="M15 33v4M33 33v4M13 41h22" stroke="url(#ag4)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 23h4M18 27h9" stroke="url(#ag4)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="25" r="3" stroke="url(#ag4)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Savo ContentAgent",
    slug: "contentagent",
    desc: "Drafts brand aligned marketing copy, SEO pages and social posts in your voice, with human approval built in.",
    detail:
      "ContentAgent learns your brand voice from your best-performing material, then drafts landing pages, SEO articles and social campaigns that sound like you on the first pass. Nothing publishes without human approval, and every draft carries its sources.",
    deliverables: [
      "Brand voice model trained on your best copy",
      "SEO aware landing pages and articles",
      "Multichannel social drafts on a calendar",
      "Human approval gate with revision history",
    ],
    tags: ["Brand Voice", "SEO aware", "Approval Flows"],
    href: "/ai-agents/#contentagent",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag5" x1="12" y1="7" x2="36" y2="41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4D5CFF" />
            <stop offset="1" stopColor="#2BD926" />
          </linearGradient>
        </defs>
        <path d="m24 7 3.4 7.3 8 .9-6 5.4 1.7 7.9L24 24.5l-7.1 4 1.7-7.9-6-5.4 8-.9L24 7Z" stroke="url(#ag5)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M14 34.5 12 41l8-3M34 34.5 36 41l-8-3" stroke="url(#ag5)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Savo OpsAgent",
    slug: "opsagent",
    desc: "Triages incidents, runs remediation runbooks and posts status updates to your channels at 3 a.m.",
    detail:
      "OpsAgent watches your stack, triages alerts by blast radius, and executes the runbooks you trust while paging a human only when it matters. It posts status updates to your channels in plain language, so 3 a.m. incidents get handled before customers notice.",
    deliverables: [
      "Alert triage ranked by customer impact",
      "Automated remediation via your runbooks",
      "Plain language status posts to Slack and email",
      "Post-incident reports with timeline and root cause",
    ],
    tags: ["Incident Triage", "Runbooks", "Cloud native"],
    href: "/ai-agents/#opsagent",
    avatar: (
      <svg viewBox="0 0 48 48" fill="none">
        <defs>
          <linearGradient id="ag6" x1="9" y1="9" x2="39" y2="39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D28FF" />
            <stop offset="1" stopColor="#4D5CFF" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="15" stroke="url(#ag6)" strokeWidth="2.2" />
        <path d="M24 9v30M9.8 17l28.4 14M9.8 31 38.2 17" stroke="url(#ag6)" strokeWidth="1.4" opacity=".55" />
        <circle cx="24" cy="24" r="4.5" fill="url(#ag6)" />
        <path d="M24 13.5a10.5 10.5 0 0 1 9 5.2" stroke="#2BD926" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];
