import type { ProductPageData } from "@/lib/types";

export const compliance: ProductPageData = {
  slug: "compliance",
  name: "Compliance",
  hero: {
    headline: "From PDF to provable.",
    sub: "Stairpay turns the unstructured data hiding in your leases, management packs, and correspondence into a record the regulator can audit and your team can act on.",
  },
  problem: {
    headline:
      "The data the regulator wants lives in PDFs and people's heads.",
    body: "Lease PDFs, scanned management packs, email threads, the heads of long-tenured staff. Pulling a clean answer out of it takes weeks, and the answer is rarely the same twice. Stairpay extracts the structured data automatically, monitors it for quality, and gives compliance teams a single source of truth they can stand behind.",
  },
  features: {
    headline: "Document chaos in. Structured truth out.",
    items: [
      {
        leadPhrase: "Lease and document intelligence.",
        body: "Upload leases, valuations, and management packs — Stairpay extracts the fields that matter into a structured, searchable record.",
      },
      {
        leadPhrase: "Data quality monitoring.",
        body: "Confidence scores on every extracted field. Gaps and inconsistencies surfaced before the regulator finds them.",
      },
      {
        leadPhrase: "Workflow automations.",
        body: "Renewals, rent reviews, lease events — triggered automatically from the structured data, never missed.",
      },
    ],
  },
  metrics: [
    { label: "DOCUMENTS PROCESSED", value: "[verify]" },
    { label: "FIELDS EXTRACTED", value: "[verify]" },
    { label: "AVG. EXTRACTION CONFIDENCE", value: "[verify]%" },
    { label: "RENEWAL EVENTS AUTOMATED", value: "[verify]" },
  ],
  diagramBrief:
    "Document-extraction diagram: a PDF on the left, parsed fields flowing out to the right into a structured table; one field highlighted with a confidence score.",
  fitsWith: {
    headline: "Where Compliance sits in the platform.",
    body: "Compliance feeds the rest of the platform with the structured truth — Aftersales runs cases against it, Finance reconciles to it, Comms triggers off lease events.",
    relatedProducts: ["aftersales", "finance", "comms"],
  },
  caseStudy: {
    haName: "[Verify HA]",
    headlineResult: "Closed 90 days of compliance debt in a quarter.",
    body: "Lease intelligence pulled the structured data out of decades of PDFs. Renewal events that used to be missed are now triggered automatically.",
    quote: {
      text: "[Verify quote]",
      author: "[Verify name]",
      role: "Head of Compliance",
    },
  },
};
