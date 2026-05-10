import type { ProductPageData } from "@/lib/types";

export const aftersales: ProductPageData = {
  slug: "aftersales",
  name: "Aftersales",
  hero: {
    headline: "Complete more staircasings and resales, in less time.",
    sub: "Run every case from resident instruction to completion on a single record — solicitors, surveyors, and your team all working from the same source of truth.",
  },
  problem: {
    headline:
      "Staircasing and resales are the most painful in-life transactions in Shared Ownership.",
    body: "Cases run for months across email threads, Word templates, and shared drives. Residents wait, solicitors chase, valuers go quiet, and the Housing Association carries the case-management load alone. Stairpay was built here first: residents instruct in the app, the case opens automatically, and every party — solicitor, valuer, mortgage broker, Housing Association team — works from a single live record through to completion.",
  },
  outcomes: [
    {
      heading: "Higher staircasing rates",
      body: "Shared owners in the Stairpay pipeline staircase materially more often than those left on a passive list. Continuous scoring and Stairpay-run nurture surface intent and convert it into instructions.",
    },
    {
      heading: "More efficient transactions through case manager",
      body: "Leaseholders nurtured into instructing through your team rather than drifting to brokers or sitting still. ~2-month average payback — one extra instruction covers the platform.",
    },
    {
      heading: "Defensible, auditable aftersales",
      body: "Every case has a timestamped trail from instruction to completion. Pass regulator and lender audits without forensic email digs.",
    },
  ],
  richFeatures: [
    {
      template: "cards",
      headline: "Stairpay-run nurture",
      intro:
        "Automated comms — annual statements, equity progress reports, valuation prompts — tuned to where each resident sits in the staircasing journey. The right prompt lands at the right time without your team running campaigns by hand, so leaseholders instruct through you rather than drifting to a broker or sitting still.",
      detail:
        "Comms are sequenced off the propensity score and the resident's life-cycle events — newly past their first review window, equity past a stair-step threshold, rate change reshaping affordability. Each resident gets a tailored cadence; your team gets the instructions that fall out of it.",
      cards: [
        {
          heading: "Convert intent before brokers do",
          body: "Residents nurtured into instructing through your team — not drifting to a broker who'll route the deal somewhere else and leave you with the admin.",
        },
        {
          heading: "Pay the platform back in one extra deal",
          body: "Average payback lands around two months. One extra staircasing instruction over baseline covers the platform; everything after is upside.",
        },
      ],
    },
    {
      template: "checklist",
      headline: "Continuous resident scoring",
      intro:
        "Equity progress, market triggers, lender-rate prompts, and life-event signals roll into a per-resident propensity score that updates automatically — so your team focuses nurture on the residents most likely to convert, not last quarter's static list.",
      columns: [
        {
          heading: "Resident & equity signals",
          items: [
            "Equity built to date",
            "Years into the lease",
            "Rent and service charge history",
            "Engagement with previous comms",
            "Affordability headroom",
            "Life-event prompts (where surfaced)",
          ],
        },
        {
          heading: "Market & external signals",
          items: [
            "Local house price movement",
            "Lender rate changes",
            "New mortgage product availability",
            "Comparable staircasings in the scheme",
            "Wider SO market activity",
            "Housing Association-specific custom signals",
          ],
        },
      ],
    },
    {
      template: "workflow",
      headline: "End-to-end case management",
      intro:
        "Instruction → RICS valuation → solicitor → completion. Every party sees what they need on one record, every milestone has an SLA timer, and Stairpay chases the right party automatically when a timer slips.",
      steps: [
        {
          heading: "Instruction lands",
          body: "Case opens with milestones pre-populated for the staircasing type (further share, final 100%, lease extension alongside).",
        },
        {
          heading: "Valuation triggered",
          body: "RICS valuer instructed from inside the case; valuation report attaches automatically when complete.",
        },
        {
          heading: "Solicitors and broker join",
          body: "Role-scoped access for the resident's solicitor, the Housing Association's solicitor, and the broker — no new accounts, no portal sprawl.",
        },
        {
          heading: "SLAs run in the background",
          body: "Each milestone has a configurable SLA timer (\"valuation to memo of sale: 10 working days\"), and Stairpay chases the right party automatically when timers slip.",
        },
        {
          heading: "Completion settles cleanly",
          body: "Settlement figures, equity changes, and lease updates write back to the resident record, so finance and compliance see the new state without a handover note.",
        },
      ],
    },
    {
      template: "cards",
      headline: "Pipeline and revenue MI",
      intro:
        "Cases by stage, days-in-stage, conversion rates, expected revenue, and leakage analysis — forecast staircasing revenue from real cases at real stages, and find the bottleneck before it costs the year.",
      cards: [
        {
          heading: "Forecast staircasing revenue with real numbers",
          body: "Expected revenue rolled up from real cases at real stages — not last year's average multiplied by ambition. Finance models on actuals, not assumptions.",
        },
        {
          heading: "Find the leak before it costs the year",
          body: "Leakage analysis surfaces where cases stall — instruction to valuation, valuation to mortgage offer, offer to completion — so you fix the bottleneck rather than guessing at it.",
        },
      ],
    },
  ],
  features: {
    headline: "Where Stairpay started. Where Stairpay is deepest.",
    items: [
      {
        leadPhrase: "Higher staircasing rates.",
        body: "Residents instruct staircasing in-app the moment they're ready, with affordability already on file. More transactions, less friction.",
      },
      {
        leadPhrase: "Configurable case management.",
        body: "The stages, deadlines, and handoffs your team actually uses — not a vendor's idealised workflow.",
      },
      {
        leadPhrase: "Intelligent automation.",
        body: "Reminders, document requests, and status updates handled by the platform. Your team intervenes on the cases that need a human.",
      },
    ],
  },
  metrics: [
    { label: "CASES RUN / YEAR", value: "[verify]" },
    { label: "AVG. WEEKS TO COMPLETE", value: "6" },
    { label: "STAIRCASING UPLIFT", value: "[verify]%" },
    {
      label: "50+ structured datapoints per resident",
      value: "",
      image: "/images/aftersales/case-manager.png",
    },
  ],
  diagramBrief:
    "Case-timeline diagram: instruction → KYC → valuation → solicitor → completion, with the Housing Association, resident, and third parties all reading from the same horizontal record. One purple highlight on the instruction node.",
  fitsWith: {
    headline: "Where Aftersales sits in the platform.",
    body: "Aftersales is the workflow Stairpay was built around. It pulls from the Resident Portal for instructions, from Compliance for the lease record, and settles into Finance.",
    relatedProducts: ["resident-portal", "compliance", "finance"],
  },
  caseStudy: {
    haName: "Notting Hill Genesis",
    headlineResult: "Cut staircasing case time from 14 weeks to 6.",
    body: "Stairpay replaced four spreadsheets and an inbox with one platform. Cases that previously took a quarter now close in six weeks.",
    quote: {
      text: "The first tool we've used that actually understands Shared Ownership.",
      author: "[Verify name]",
      role: "Head of Sales, NHG",
    },
  },
};
