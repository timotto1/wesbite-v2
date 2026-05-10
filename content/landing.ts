export const landing = {
  hero: {
    stat: { label: "Shared Owners are on Stairpay", value: "3" },
    headline: "The operating system for shared ownership",
    sub: "One platform for every Housing Association workflow — connected directly to your residents.",
    primaryCta: { label: "Contact sales", href: "/demo" },
    secondaryCta: { label: "Log in", href: "/login" },
  },
  logoStrip: {
    intro: "Trusted by a third of the industry, including",
    introHighlight: "4 of the G15",
    logos: [
      { name: "Clarion", src: "/logos/grayscale/Clarion_greyscale.png" },
      { name: "Notting Hill Genesis", src: "/logos/grayscale/NHG_greyscale.png" },
      { name: "Midland Heart", src: "/logos/grayscale/midland_heart_greyscale.png" },
      { name: "Settle", src: "/logos/grayscale/settle_greyscale.png" },
      { name: "M&G", src: "/logos/grayscale/M&G_greyscale.png" },
      { name: "Places for People", src: "/logos/grayscale/Places_for_People__greyscale.png" },
      { name: "Bromford Flagship", src: "/logos/grayscale/Bromford_Flagship_Livewest_greyscale.png" },
      { name: "MTVH", src: "/logos/grayscale/MTVH_greyscale.png" },
      { name: "Sage", src: "/logos/grayscale/Sage__greyscale.png" },
      { name: "GreenSquare Accord", src: "/logos/grayscale/greensquare_accord_greyscale.png" },
      { name: "Newarch", src: "/logos/grayscale/newarch_greyscale.png" },
      { name: "Platform Housing", src: "/logos/grayscale/platform_housing__greyscale.png" },
      { name: "Resi Homes", src: "/logos/grayscale/resi_homes_greyscale.png" },
      { name: "Settle Paradigm", src: "/logos/grayscale/settle_paradimg_greyscale.png" },
    ],
  },
  problem: {
    headline: "Shared Ownership has outdated tools.",
    body: "Housing Associations are forced to use a legacy HMS, multiple inboxes, a finance system and outdated spreadsheets. Cases drag, reports are lost, residents wait. Stairpay is building the operating system of the future, replacing chaos with simplicity, guesswork with audit trails.",
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
          "Market leading by design.",
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
          body: "One source of truth, audited end to end. The answers the regulator wants are already in the platform.",
        },
        {
          lead: "Less time on admin, more time on residents.",
          body: "Automation handles the rote work, so your team handles the work that matters.",
        },
        {
          lead: "Forecasts you can trust.",
          body: "Asset and resident data combined in one model. No stitching together from spreadsheets the night before a board meeting.",
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
          body: "Understand what you can afford to staircase, and plan your future with confidence.",
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
    headline: "Why Housing Associations choose Stairpay.",
    items: [
      {
        title: "Deep Shared Ownership expertise",
        body: "Built with Housing Associations from day one. Every workflow — leases, nominations, affordability — reflects how Shared Ownership actually works.",
        linkLabel: "Learn more about our approach",
        href: "/blog/built-for-shared-ownership",
      },
      {
        title: "Data and tech first",
        body: "Modern stack, clean data, real APIs. Built to integrate, scale, and lay the foundation for the future of Shared Ownership.",
        linkLabel: "Learn more about our platform",
        href: "/blog/built-on-modern-data",
      },
      {
        title: "End-to-end and two-sided",
        body: "The only platform covering the full Housing Association workflow and connecting directly to residents. No re-keying.",
        linkLabel: "Learn more about how it fits together",
        href: "/blog/connecting-has-and-residents",
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
    body: "No rip-and-replace. Stairpay integrates with the housing management systems, finance systems, and document tools Housing Associations already use.",
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
        haName: "Auxesia",
        headlineResult: "Auxesia sees annual staircasing rates within 3 weeks of launch with Stairpay.",
        body: "Three weeks after going live, Auxesia's first resident email outperformed every campaign they'd sent before — surfacing five live staircasing opportunities in the first seven days.",
        quote: {
          text: "We have only been live for about three weeks, but our initial email's click-through rate outperformed any we've sent before. Within a week, we identified three individuals ready to fully staircase and two more interested but not yet ready to transact.",
          author: "Claire Donnelly",
          role: "Chief Financial Officer",
        },
        image: "https://picsum.photos/seed/auxesia-stairpay/800/960",
        href: "#",
      },
      {
        haName: "Midland Heart",
        headlineResult: "Midland Heart triples in-app staircasing instructions in 90 days.",
        body: "Affordability already on file means residents instruct the moment they're ready. Cases land in the team's workflow with the work already half done.",
        quote: {
          text: "We can finally answer the regulator's questions without a spreadsheet rebuild.",
          author: "[Verify: name pending]",
          role: "Director of Home Ownership",
        },
        image: "https://picsum.photos/seed/midland-heart-stairpay/800/960",
        href: "#",
      },
      {
        haName: "Settle",
        headlineResult: "Settle clears 90 days of compliance debt in a single quarter.",
        body: "Lease intelligence pulled the structured data out of decades of PDFs. Renewal events that used to be missed are now triggered automatically.",
        quote: {
          text: "We stopped reverse-engineering our own portfolio.",
          author: "[Verify: name pending]",
          role: "Head of Compliance",
        },
        image: "https://picsum.photos/seed/settle-stairpay/800/960",
        href: "#",
      },
    ],
  },
  finalCta: {
    headline: "The future of Shared Ownership",
    sub: "30-minute demo. We'll show you the platform with your own workflows in mind.",
    primaryCta: { label: "Contact sales", href: "/demo" },
  },
};

export type Landing = typeof landing;
