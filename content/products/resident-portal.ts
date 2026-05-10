import type { ProductPageData } from "@/lib/types";

export const residentPortal: ProductPageData = {
  slug: "resident-portal",
  name: "Resident Portal",
  hero: {
    headline: "Cut resident queries. Capture cleaner data.",
    sub: "Residents self-serve documents, payments, affordability checks, and instructions in a portal they actually want to use — and every action syncs back to your team in real time.",
  },
  problem: {
    headline: "Residents in Shared Ownership are largely in the dark.",
    body: "Residents are unsure what they own, what they pay, what they can afford, or how to instruct a change. They call, email, and chase. Housing Associations answer the same questions for years and still hold a fragmented picture of each resident. The Resident Portal gives residents one trusted place to manage their home, and gives the Housing Association a clean, live record of everyone in their portfolio.",
  },
  outcomes: [
    {
      heading: "Cut inbound query volume",
      body: "Residents self-serve the answers they used to phone for — balance, share value, what they own, what comes next. Aftersales and customer-service teams stop answering the same questions for years.",
    },
    {
      heading: "Capture cleaner, live resident data",
      body: "Income, outgoings, contact details, and consents kept current by the resident — in one record that Aftersales, Compliance, and Finance read from rather than chasing.",
    },
    {
      heading: "Convert intent into instructions earlier",
      body: "Residents instruct staircasing, resales, and changes the moment they're ready, with affordability already on file. Cases land in your team's workflow half-built.",
    },
  ],
  richFeatures: [
    {
      template: "cards",
      headline: "Self-service that residents actually use — and queries you stop answering",
      intro:
        "Most Housing Associations answer the same questions on repeat: what's my balance, what's my share worth, when does my service charge change, can I staircase yet. The Resident Portal puts those answers in front of the resident in plain English, kept live from your platform record — so the call doesn't get made in the first place.",
      detail:
        "Residents log in and see their home: the share they own, the rent and service charge they pay, the current valuation, the lease terms that matter, and the next thing happening on their case. Every value is read from the live record, so the answer in the app is the same answer your team would give over the phone — and it's available at 9pm on a Sunday.",
      cards: [
        {
          heading: "Deflect the calls before they land",
          body: "Balance, share value, payment history, and case status surfaced in-app — so the calls and emails your team used to handle one-by-one stop arriving in the first place.",
        },
        {
          heading: "Plain English, not policy language",
          body: "Service charge changes, rent reviews, and lease events explained the way a resident actually wants to read them — not lifted verbatim from a policy doc.",
        },
      ],
    },
    {
      template: "checklist",
      headline:
        "What residents can do for themselves — and what your team finally sees",
      intro:
        "Two sides of one record. Residents act from the app on the things they used to need a phone call for; your team sees every action land as structured data — not as another email to triage.",
      columns: [
        {
          heading: "Resident can self-serve",
          items: [
            "View share owned and current valuation",
            "Pay rent and service charge",
            "Update income, outgoings, and contact details",
            "Upload documents and ID",
            "Instruct staircasing, resale, name changes",
            "Track case progress in real time",
          ],
        },
        {
          heading: "Your team sees, in real time",
          items: [
            "Live affordability per resident",
            "Document and ID status",
            "Engagement with comms and statements",
            "Instructions landing as case-ready records",
            "Consent and contact-preference state",
            "Audit trail of every resident action",
          ],
        },
      ],
    },
    {
      template: "workflow",
      headline:
        "From in-app instruction to case opened — without a handover note",
      intro:
        "When a resident instructs staircasing, a resale, or a lease change in the app, the case doesn't land as an email for someone to read and re-key. It lands in your aftersales workflow with the resident's affordability, lease, and document trail already attached.",
      steps: [
        {
          heading: "Resident instructs in-app",
          body: "Staircasing, resale, name change, lease query — the resident picks the action and the app surfaces only the questions that aren't already on file.",
        },
        {
          heading: "Affordability re-checked silently",
          body: "Income and outgoings already in the resident's record are re-validated; only deltas are asked for, so the form is short and the data stays fresh.",
        },
        {
          heading: "Case opens with the work half-done",
          body: "The instruction lands in Aftersales as a structured case — with affordability, ID, and lease attached — so your team starts at step three, not step zero.",
        },
        {
          heading: "Status syncs back to the resident",
          body: "Every milestone in the case writes back to the app, so the resident sees progress without phoning to ask — and chases land as nudges, not letters.",
        },
        {
          heading: "Completion settles into one record",
          body: "Equity changes, lease updates, and balances write back to the resident's record at completion, so the next instruction starts from the new state automatically.",
        },
      ],
    },
    {
      template: "cards",
      headline: "A clean, live resident record — without forms or surveys",
      intro:
        "A generic CRM tells you what you stored when the resident first signed up. The Resident Portal keeps the record current by being the place residents already use — so income, outgoings, consents, and contact details stay live without your team running a data-cleanse cycle every two years.",
      cards: [
        {
          heading: "Stop running portfolio data-cleanses",
          body: "Resident-owned fields — income, outgoings, contact preferences, consents — kept current by the resident in-app, not by your team chasing forms once every two years.",
        },
        {
          heading: "Feed the rest of the platform with truth",
          body: "Aftersales runs cases against the live record, Compliance reads the resident-side of every lease event, Finance reconciles to current balances — all from one source of truth.",
        },
      ],
    },
  ],
  features: {
    headline: "Two sides, one record.",
    items: [
      {
        leadPhrase: "Clarity on costs and processes.",
        body: "Rent, service charges, share value, and what happens next — explained in plain English, in one place residents actually visit.",
      },
      {
        leadPhrase: "Affordability tracking.",
        body: "Residents understand what they can afford to staircase, and when, with their real income and outgoings already on file.",
      },
      {
        leadPhrase: "Lease transparency.",
        body: "The key terms of the lease, surfaced as searchable structured data — not buried in a 90-page PDF.",
      },
      {
        leadPhrase: "Direct instruction.",
        body: "Staircasing, resales, name changes, lease queries — instructed in the app, landing in your team's workflow with the case already half-built.",
      },
    ],
  },
  metrics: [
    { label: "ACTIVE RESIDENTS", value: "[verify]" },
    { label: "INSTRUCTIONS PER MONTH", value: "[verify]" },
    { label: "DOCUMENTS UPLOADED", value: "[verify]" },
    { label: "INBOUND CALLS DEFLECTED", value: "[verify]%" },
  ],
  diagramBrief:
    "Two-sided composition: resident phone frame on one side, Housing Association dashboard on the other, with three labelled arrows — instruction → case, document → record, status → notification.",
  fitsWith: {
    headline: "Where the Resident Portal sits in the platform.",
    body: "Every instruction the resident makes lands in the case workflow that runs on Aftersales, Compliance, and Finance — with the document trail already attached.",
    relatedProducts: ["aftersales", "comms", "finance"],
  },
  caseStudy: {
    haName: "[Verify HA]",
    headlineResult: "3× more residents instructed staircasing in-app.",
    body: "Affordability already on file means residents instruct the moment they're ready. Cases land in the team's workflow with the work already half done.",
    quote: {
      text: "[Verify quote]",
      author: "[Verify name]",
      role: "Director of Home Ownership",
    },
  },
};
