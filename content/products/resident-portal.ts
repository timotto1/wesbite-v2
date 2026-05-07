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
