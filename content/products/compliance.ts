import type { ProductPageData } from "@/lib/types";

export const compliance: ProductPageData = {
  slug: "compliance",
  name: "Compliance",
  hero: {
    headline: "Pass audits without the fire drill.",
    sub: "Stairpay turns the unstructured data hiding in your leases, management packs, and correspondence into a structured record — so regulator requests take hours, not weeks.",
  },
  problem: {
    headline:
      "The data the regulator wants lives in PDFs and people's heads.",
    body: "Lease PDFs, scanned management packs, email threads, the heads of long-tenured staff. Pulling a clean answer out of it takes weeks, and the answer is rarely the same twice. Stairpay extracts the structured data automatically, monitors it for quality, and gives compliance teams a single source of truth they can stand behind.",
  },
  outcomes: [
    {
      heading: "De-risk the SO portfolio",
      body: "Surface short leases, defective clauses, missing EWS1s, and expired EPCs at unit level — before they become regulatory or sale-blocking.",
    },
    {
      heading: "Cut hours of manual lease review per case",
      body: "AI extraction reads every SO lease and pulls the clauses that matter — staircase caps, resale restrictions, lender protection, RPI/CPI escalators, expiry.",
    },
    {
      heading: "Audit-ready evidence packs",
      body: "Regulator, lender, or buyer requests answered with a one-click export, not a fire drill.",
    },
  ],
  richFeatures: [
    {
      template: "cards",
      headline: "Surface portfolio risk at unit level — before it blocks a sale",
      intro:
        "Most HAs only discover a short lease, a defective clause, or a missing EWS1 when conveyancing on a resale grinds to a halt. Stairpay surfaces these risks at unit level across the entire SO portfolio, continuously, so you fix the problem in the months before resale rather than the weeks during it.",
      detail:
        "Every lease, building safety document, and management pack you ingest is parsed and structured. Stairpay then runs continuous checks across the unit-level register — flagging short leases, expiring EPCs, missing EWS1s, defective clauses, and lender-protection gaps as soon as the data shows them, not when a buyer's solicitor finds them.",
      cards: [
        {
          heading: "Stop resales dying at conveyancing",
          body: "Short leases, defective clauses, and missing safety docs surfaced before a unit goes to market — so the resale doesn't fall through after a buyer's solicitor flags it.",
        },
        {
          heading: "Fix at portfolio scale, not deal scale",
          body: "One unit-level register across the whole SO portfolio means you address risks in batches when there's time, not in panic when there isn't.",
        },
      ],
    },
    {
      template: "checklist",
      headline: "AI lease extraction — every clause that matters, on every lease",
      intro:
        "SO leases are long, inconsistent, and full of clauses that shape what you can and can't do — staircase caps, resale restrictions, lender protection, RPI vs CPI escalators, ground rent, expiry. Stairpay's extraction reads every lease in your portfolio and pulls the structured fields your team and the regulator actually need, so you stop spending hours per case reading PDFs.",
      columns: [
        {
          heading: "Lease terms",
          items: [
            "Term and expiry date",
            "Staircase caps (e.g. capped at 80%)",
            "Resale restrictions and nominations",
            "Lender protection clauses",
            "Permitted alterations and consents",
            "Subletting and assignment rules",
          ],
        },
        {
          heading: "Financial & escalator clauses",
          items: [
            "Ground rent amount and frequency",
            "Rent review escalator (RPI / CPI / fixed)",
            "Service charge mechanism",
            "Sinking fund provisions",
            "Insurance recharge terms",
            "Defective or non-standard clauses flagged",
          ],
        },
      ],
    },
    {
      template: "workflow",
      headline:
        "Building safety compliance, tracked block by block, unit by unit",
      intro:
        "Building safety isn't one document — it's a rolling set of certificates with different lifespans, different responsible parties, and different consequences when they lapse. Stairpay tracks the full set across every SO block, with renewal SLAs and overdue alerts, so nothing expires unnoticed.",
      steps: [
        {
          heading: "Documents ingested",
          body: "EWS1s, gas, electric, asbestos, water, fire, EPC certificates uploaded or extracted from existing systems.",
        },
        {
          heading: "Structured per block and per unit",
          body: "Status visible at portfolio, block, and unit level — so a regulator question about a specific address gets an answer in seconds.",
        },
        {
          heading: "Renewal SLAs run",
          body: "Each certificate type has its own renewal cadence (annual gas, five-year EICR, ten-year EWS1) and Stairpay tracks the next due date automatically.",
        },
        {
          heading: "Alerts fire before expiry",
          body: "Overdue and approaching-overdue alerts to the responsible team, escalating if unactioned — so a lapsed gas cert doesn't surface during a resale.",
        },
        {
          heading: "Status feeds the resale-ready check",
          body: "When a unit goes to market, its building safety position is already known and exportable, not assembled from scratch.",
        },
      ],
    },
    {
      template: "cards",
      headline: "Audit-ready evidence packs, exported in one click",
      intro:
        "Regulator inspections, lender due diligence, and buyer-side conveyancing all ask for the same thing in different shapes: a structured record of what you hold, what's current, and what's been done. Stairpay assembles that record continuously, so any of those requests is a one-click export rather than a week of forensic email digs.",
      cards: [
        {
          heading: "Answer regulator and lender requests in hours",
          body: "One-click exports tailored to who's asking — RSH, lenders running portfolio reviews, buyer-side solicitors at conveyancing — each with the data and trail they actually need.",
        },
        {
          heading: "Defensible by default — not assembled in panic",
          body: "Every document, every status change, every alert sits with a timestamped audit trail. The evidence pack isn't built when the request lands — it already exists.",
        },
      ],
    },
  ],
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
