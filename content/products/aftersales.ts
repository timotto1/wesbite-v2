import type { ProductPageData } from "@/lib/types";

export const aftersales: ProductPageData = {
  slug: "aftersales",
  name: "Aftersales",
  hero: {
    headline: "Staircasing and resales, run end to end.",
    sub: "From resident instruction to completion — every party working from the same record.",
  },
  problem: {
    headline:
      "Staircasing and resales are the most painful in-life transactions in Shared Ownership.",
    body: "Cases run for months across email threads, Word templates, and shared drives. Residents wait, solicitors chase, valuers go quiet, and the HA carries the case-management load alone. Stairpay was built here first: residents instruct in the app, the case opens automatically, and every party — solicitor, valuer, mortgage broker, HA team — works from a single live record through to completion.",
  },
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
    { label: "AUTO-HANDLED CASE EVENTS", value: "[verify]%" },
  ],
  diagramBrief:
    "Case-timeline diagram: instruction → KYC → valuation → solicitor → completion, with the HA, resident, and third parties all reading from the same horizontal record. One purple highlight on the instruction node.",
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
