import type { ProductPageData } from "@/lib/types";

export const listings: ProductPageData = {
  slug: "listings",
  name: "Listings",
  hero: {
    headline: "Fill homes faster, with less admin.",
    sub: "Stairpay manages every new home, applicant, and eligibility check in one place — so your team moves from launch to first key without losing days to spreadsheets and inboxes.",
  },
  problem: {
    headline:
      "Initial sales run across portal admin, an inbox, and a spreadsheet of applicants.",
    body: "Most Housing Associations run initial sales across portal admin tools, an inbox, a spreadsheet of applicants, and a separate system for affordability. Leads get lost between them, eligibility is checked manually, and nobody can tell you the real conversion rate from enquiry to reservation. Stairpay closes the loop — one record per applicant, from the portal listing to first-tranche completion.",
  },
  outcomes: [
    {
      heading: "Sell SO homes faster",
      body: "Single record syndicated everywhere, with case management to legal completion. Fewer handoffs, fewer dropouts, shorter time from launch to keys-handover.",
    },
    {
      heading: "Save on admin time",
      body: "Multi-portal exposure (Zoopla, Rightmove, Share to Buy, your own microsite) from one record means a wider funnel and fewer mis-eligible applicants reaching reservation.",
    },
    {
      heading: "One auditable record per home",
      body: "Listing, applicant, eligibility checks, offer, solicitor, completion all stitched to a single SO unit. Regulator and lender requests answered in minutes.",
    },
  ],
  richFeatures: [
    {
      template: "cards",
      headline: "List once, sell everywhere",
      intro:
        "Push a Shared Ownership listing to Rightmove, Zoopla, Share to Buy, and the Housing Association's own website from a single record in Stairpay. Update once, propagate everywhere.",
      detail:
        "When a development goes live, Stairpay creates the listing record once. Each portal pulls from that record, so a price change, status update, or new photo set updates everywhere within minutes. Health checks flag any portal where syndication has drifted, before a buyer sees a stale listing.",
      cards: [
        {
          heading: "Cut listing admin",
          body: "One record, four portals, zero re-keying. Listings teams stop spending Mondays updating Rightmove and Zoopla one by one.",
        },
        {
          heading: "Catch drift before buyers do",
          body: "Automatic health checks surface listings that have gone stale on any portal — so you find them, not the buyer who turns up to view a reserved home.",
        },
      ],
    },
    {
      template: "checklist",
      headline: "Eligibility, identity, and AML — handled before reservation",
      intro:
        "Configure the eligibility rules for each scheme and Stairpay runs them automatically the moment an applicant enquires — local connection, income caps, first-time buyer status, military priority. Identity verification and AML checks run through Thirdfort as part of the same flow, so by the time an applicant reaches reservation, the compliance work is already on file.",
      columns: [
        {
          heading: "Eligibility rules",
          items: [
            "Local connection",
            "Household income caps (£80k / £90k London)",
            "First-time buyer status",
            "Existing homeowner status",
            "Military priority",
            "Custom Housing Association-defined rules",
          ],
        },
        {
          heading: "Verification & compliance",
          items: [
            "Identity verification",
            "AML via Thirdfort",
            "Sanctions and PEP screening",
            "Document capture and storage",
            "Audit trail per applicant",
            "Re-verification on case events",
          ],
        },
      ],
    },
    {
      template: "workflow",
      headline: "One case, every party, no chasing",
      intro:
        "A Shared Ownership case touches the Housing Association sales team, two solicitors, a broker, a surveyor, and the buyer. Stairpay gives all of them access to the same case record — each seeing what they need, contributing what they own — and chases automatically when anyone falls behind.",
      steps: [
        {
          heading: "Reservation lands",
          body: "Case opens with milestones pre-populated for the scheme type (new build, resale, staircasing).",
        },
        {
          heading: "Parties join",
          body: "Solicitors, broker, surveyor, and buyer get role-scoped access via secure links — no new accounts, no portal sprawl.",
        },
        {
          heading: "SLAs run in the background",
          body: "Each milestone has a configurable SLA timer (e.g. \"memo of sale to solicitor instruction: 5 working days\").",
        },
        {
          heading: "Stairpay chases",
          body: "When a party is approaching or past SLA, automated reminders go out by email or SMS — to that party, not your team.",
        },
        {
          heading: "Exceptions surface",
          body: "Cases stuck on the same milestone for too long appear on the sales manager's dashboard, so human intervention happens once it's actually needed.",
        },
      ],
    },
    {
      template: "cards",
      headline: "Sales velocity reporting, built for Shared Ownership",
      intro:
        "A generic CRM tells your Head of Sales which sites are converting. Stairpay also tells them which share percentages are selling, which marketing sources produce reservations that actually complete, and the staircasing pipeline value sitting inside the initial sales cohort.",
      cards: [
        {
          heading: "Reallocate marketing spend with confidence",
          body: "Attribution from enquiry source through to legal completion — not just lead volume. Cut the channels producing tyre-kickers, double down on the ones producing buyers.",
        },
        {
          heading: "See the future revenue inside today's sales",
          body: "Every initial sale is a future staircasing event. Stairpay surfaces the projected staircasing value of each scheme's resident base, so finance can model real numbers, not assumptions.",
        },
      ],
    },
  ],
  features: {
    headline: "From listing to reservation, on rails.",
    items: [
      {
        leadPhrase: "Multi-portal syndication.",
        body: "Push a SO listing to Zoopla, Rightmove, Share to Buy, and your own microsite from a single record; updates propagate everywhere.",
      },
      {
        leadPhrase: "Eligibility-aware applicant capture.",
        body: "Built-in SO eligibility and affordability checks so disqualified applicants drop out before reservation.",
      },
      {
        leadPhrase: "Case management to completion.",
        body: "Milestone tracking from offer through solicitor instruction to move-in, with SLA timers and chase automations.",
      },
      {
        leadPhrase: "Sales velocity reporting.",
        body: "Listing-to-completion days, conversion by source, marketing attribution, SO units sold by scheme.",
      },
    ],
  },
  metrics: [
    { label: "APPLICATIONS PROCESSED", value: "[verify]" },
    { label: "AVG. TIME TO RESERVATION", value: "[verify]" },
    { label: "ELIGIBILITY AUTO-CHECKED", value: "[verify]%" },
    { label: "FIRST-TRANCHE COMPLETION", value: "[verify]" },
  ],
  diagramBrief:
    "Funnel diagram: portal listings → enquiries graded → eligibility auto-check → reservation → completion. One purple highlight on the auto-eligibility node.",
  fitsWith: {
    headline: "Where Listings sits in the platform.",
    body: "Listings hands off cleanly into Aftersales when a buyer reserves, and feeds Finance with the asset record from day one.",
    relatedProducts: ["aftersales", "finance", "comms"],
  },
  caseStudy: {
    haName: "[Verify HA]",
    headlineResult: "Halved time from listing to reservation.",
    body: "Replaced four-system juggling with one record per applicant. Sales team now works the leads that convert, not the queue that arrived first.",
    quote: {
      text: "[Verify quote]",
      author: "[Verify name]",
      role: "Head of Sales",
    },
  },
};
