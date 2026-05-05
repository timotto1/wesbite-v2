export const landing = {
  hero: {
    stat: { label: "National SO using Stairpay:", value: "33%" },
    headline: "The operating system for shared ownership",
    sub: "One platform for every Housing Association workflow — connected directly to your residents",
    primaryCta: { label: "Contact sales", href: "/demo" },
    secondaryCta: { label: "Log in", href: "/login" },
  },
  logoStrip: {
    intro: "Trusted by",
    logos: [
      { name: "Clarion" },
      { name: "Notting Hill Genesis" },
      { name: "Midland Heart" },
      { name: "Settle" },
      { name: "M&G" },
      { name: "Auxesia" },
      { name: "Bromford Flagship" },
      { name: "Southern" },
      { name: "SNG" },
    ],
  },
  problem: {
    headline:
      "Shared Ownership runs on spreadsheets. The regulator has noticed.",
    body: "A typical HA runs it across a legacy HMS, an inbox, a finance system, and three Excel files nobody trusts. Cases drag. Reports are reverse-engineered. Residents wait. Stairpay replaces the chaos with one platform, built for Shared Ownership.",
  },
  builtFor: {
    headline: "Built for Housing Associations.",
    headlineMuted: "Used by residents.",
    subtitle:
      "The only Shared Ownership platform built for both the Housing Association and the resident. Residents act from their app; landlords run operations on the platform.",
  },
  productSuite: {
    headline: "End-to-end solutions for your business model.",
    headlineMuted:
      "Invest in your business targets with our comprehensive set of Shared Ownership tools — built to work as a single platform.",
    products: [
      {
        slug: "listings",
        name: "Listings",
        outcome: "Get new homes to market faster.",
        proof:
          "Automated eligibility, configurable workflows, and a single record from listing to first key.",
        benefits: [
          "Automated eligibility checks",
          "Configurable listing workflows",
          "Single record from listing to first key",
          "Direct sync to your HMS",
        ],
      },
      {
        slug: "resident-portal",
        name: "Resident Portal",
        outcome: "Give residents one place to manage their home.",
        proof:
          "Every staircasing instruction, document, and payment lands directly in your team's workflow.",
        benefits: [
          "In-app staircasing instructions",
          "Lease and document storage",
          "Live share value and balances",
          "Affordability tracking",
        ],
      },
      {
        slug: "comms",
        name: "Comms",
        outcome: "Every resident conversation, in one place.",
        proof:
          "Target by development, cohort, or case — with the full history attached to every record.",
        benefits: [
          "Target by development or cohort",
          "Full thread history per resident",
          "Email and SMS in one inbox",
          "Templates with merge fields",
        ],
      },
      {
        slug: "compliance",
        name: "Compliance",
        outcome:
          "Turn documents into structured, searchable data.",
        proof: "Built for the regulator's questions before they ask.",
        benefits: [
          "Lease intelligence on every PDF",
          "Structured, searchable clause data",
          "Auto-triggered renewal events",
          "Regulator-ready exports",
        ],
      },
      {
        slug: "finance",
        name: "Finance",
        outcome: "Forecast portfolio health on real data.",
        proof:
          "Asset-side and resident-side combined — not stitched together from spreadsheets.",
        benefits: [
          "Asset and resident data combined",
          "Real-time portfolio forecasts",
          "Board-ready reporting",
          "Reconciliation against finance system",
        ],
      },
      {
        slug: "aftersales",
        name: "Aftersales",
        outcome: "Run staircasing and resales end to end.",
        proof:
          "The original Stairpay product, and still the deepest in the market.",
        benefits: [
          "End-to-end staircasing workflow",
          "Resales from instruction to completion",
          "Built-in affordability checks",
          "Case management with full audit trail",
        ],
      },
    ],
  },
  whoWeServe: {
    headline: "Built for Housing Associations. Used by their residents.",
    forHAs: {
      title: "For Housing Associations",
      points: [
        {
          lead: "Cases close faster.",
          body: "Data flows automatically between systems, so staircasing and resales move from instruction to completion in weeks, not months.",
        },
        {
          lead: "Regulator-ready by default.",
          body: "One source of truth, audited end to end — the answers the regulator wants are already in the platform.",
        },
        {
          lead: "Less time on admin, more time on residents.",
          body: "Automation handles the rote work, so your team handles the work that matters.",
        },
        {
          lead: "Forecasts you can trust.",
          body: "Asset and resident data combined in one model — not stitched together from spreadsheets the night before a board meeting.",
        },
      ],
    },
    forResidents: {
      title: "For residents",
      points: [
        {
          lead: "Clarity on costs and processes.",
          body: "Rent, service charges, share value, and what happens next — all in one place.",
        },
        {
          lead: "Affordability tracking.",
          body: "Understand what you can afford to staircase, and when, without paying for advice you don't yet need.",
        },
        {
          lead: "Document storage.",
          body: "Lease, statements, valuations, correspondence — always to hand.",
        },
        {
          lead: "Lease transparency.",
          body: "The terms of your lease, surfaced in plain English instead of buried in a 90-page PDF.",
        },
      ],
    },
  },
  pillars: {
    headline: "Why HAs choose Stairpay.",
    items: [
      {
        title: "Deep Shared Ownership expertise",
        body: "Built with HAs from day one. Every workflow reflects how Shared Ownership actually works — leases, nomination periods, affordability, the lot. Not generic CRM bent into shape.",
      },
      {
        title: "Data and tech first",
        body: "Modern stack, clean data model, real APIs. Built to integrate, built to scale, built to give you data you can actually trust and report on.",
      },
      {
        title: "End-to-end and two-sided",
        body: "The only platform that covers the full HA workflow and connects directly to the resident — so instructions, data, and documents flow without re-keying.",
      },
    ],
  },
  security: {
    eyebrow: "Security",
    headline: "Your data, properly protected.",
    body: "All data and workflows are controlled in code. Stairpay only accesses authorised data and nothing ever leaves our infrastructure.",
    points: [
      {
        leadPhrase: "ISO 27001.",
        body: "[Confirm: certified or in progress — do not publish until verified.]",
      },
      {
        leadPhrase: "UK data residency.",
        body: "All data stored in UK regions.",
      },
      {
        leadPhrase: "GDPR-aligned by design.",
        body: "DPIAs, DPAs, role-based access, audit trails on every change.",
      },
      {
        leadPhrase: "Encryption at rest and in transit.",
        body: "With key management to specification.",
      },
      {
        leadPhrase: "Pen tested.",
        body: "Regular third-party testing.",
      },
    ],
  },
  integrations: {
    eyebrow: "Integrations",
    headline: "Plays well with the rest of your stack.",
    body: "No rip-and-replace. Stairpay integrates with the housing management systems, finance systems, and document tools HAs already use.",
    categories: [
      {
        name: "Housing management systems",
        logos: ["MRI", "Civica", "Capita", "Aareon"],
      },
      { name: "Finance & accounting", logos: ["Xero", "Sage", "Oracle"] },
      { name: "Document & e-signature", logos: ["DocuSign", "Adobe Sign"] },
      {
        name: "Identity & SSO",
        logos: ["Microsoft Entra", "Okta", "Google"],
      },
      { name: "Comms", logos: ["Twilio", "GOV.UK Notify"] },
    ],
  },
  caseStudies: {
    eyebrow: "Case studies",
    headline: "Housing Associations running Shared Ownership on Stairpay.",
    items: [
      {
        haName: "Notting Hill Genesis",
        headlineResult: "Cut staircasing case time from 14 weeks to 6.",
        body: "Stairpay replaced four spreadsheets and an inbox with one platform. Cases that previously took a quarter now close in six weeks.",
        quote: {
          text: "The first tool we've used that actually understands Shared Ownership.",
          author: "[Verify: name pending]",
          role: "Head of Sales, NHG",
        },
        href: "#",
      },
      {
        haName: "Midland Heart",
        headlineResult: "3× more residents instructed staircasing in-app.",
        body: "Affordability already on file means residents instruct the moment they're ready. Cases land in the team's workflow with the work already half done.",
        quote: {
          text: "We can finally answer the regulator's questions without a spreadsheet rebuild.",
          author: "[Verify: name pending]",
          role: "Director of Home Ownership",
        },
        href: "#",
      },
      {
        haName: "Settle",
        headlineResult: "Closed 90 days of compliance debt in a quarter.",
        body: "Lease intelligence pulled the structured data out of decades of PDFs. Renewal events that used to be missed are now triggered automatically.",
        quote: {
          text: "We stopped reverse-engineering our own portfolio.",
          author: "[Verify: name pending]",
          role: "Head of Compliance",
        },
        href: "#",
      },
    ],
  },
  finalCta: {
    headline: "Ready to run Shared Ownership properly?",
    sub: "30-minute demo. We'll show you the platform with your own workflows in mind.",
    primaryCta: { label: "Request demo", href: "/demo" },
  },
};

export type Landing = typeof landing;
