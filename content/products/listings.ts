import type { ProductPageData } from "@/lib/types";

export const listings: ProductPageData = {
  slug: "listings",
  name: "Listings",
  hero: {
    headline: "From listing to first key.",
    sub: "Every new home, every applicant, every eligibility check — managed in one place from the moment a development goes live to the day a resident moves in.",
  },
  problem: {
    headline:
      "Initial sales run across portal admin, an inbox, and a spreadsheet of applicants.",
    body: "Most HAs run initial sales across portal admin tools, an inbox, a spreadsheet of applicants, and a separate system for affordability. Leads get lost between them, eligibility is checked manually, and nobody can tell you the real conversion rate from enquiry to reservation. Stairpay closes the loop — one record per applicant, from the portal listing to first-tranche completion.",
  },
  features: {
    headline: "From listing to reservation, on rails.",
    items: [
      {
        leadPhrase: "One-click listing across portals.",
        body: "Push new homes to Rightmove, Zoopla, Share to Buy, and your own site from a single record. Updates propagate everywhere automatically.",
      },
      {
        leadPhrase: "Lead quality grading.",
        body: "Every applicant scored on affordability, eligibility, and engagement signals — so your team works the leads most likely to convert, not the loudest ones.",
      },
      {
        leadPhrase: "Automated eligibility.",
        body: "Income, savings, and local-connection rules checked automatically against your scheme criteria. Applicants find out in minutes, not weeks.",
      },
      {
        leadPhrase: "Configurable case management.",
        body: "Build the case stages your team actually uses, with handoffs, deadlines, and audit trails baked in.",
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
