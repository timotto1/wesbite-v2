import type { ProductPageData } from "@/lib/types";

export const finance: ProductPageData = {
  slug: "finance",
  name: "Finance",
  hero: {
    headline: "Close the books on real numbers.",
    sub: "Forecast rent, service charges, arrears, and staircasing settlements from live asset and resident data — not spreadsheets reverse-engineered the night before board.",
  },
  problem: {
    headline: "Finance teams forecast against data that doesn't agree with itself.",
    body: "Numbers are stitched together from a finance system, a housing system, and a handful of Excel files — none of which agree. Resident affordability data, the single best signal of arrears risk, sits on the other side of the business and never makes it into the model. Stairpay Finance combines asset-side and resident-side data so forecasts hold up, arrears risk is visible early, and the numbers the board sees are the numbers operations work from.",
  },
  features: {
    headline: "Asset-side and resident-side, in one model.",
    items: [
      {
        leadPhrase: "Rent and service charge billing.",
        body: "Configured to your schemes, calculated on your terms, reconciled automatically.",
      },
      {
        leadPhrase: "Direct Debit and payment collection.",
        body: "Built-in collection with the failure-handling logic Shared Ownership actually needs — not generic billing-tool defaults.",
      },
      {
        leadPhrase: "Arrears tracking with affordability context.",
        body: "Risk surfaced against the resident's real income picture, not a flat aging bucket.",
      },
      {
        leadPhrase: "Staircasing and resale settlement.",
        body: "Capital receipts handled cleanly, with the audit trail finance teams need to close the books.",
      },
      {
        leadPhrase: "Integration with finance systems.",
        body: "Plays nicely with Xero, Sage, and Oracle — the platform feeds your existing GL, not the other way around.",
      },
      {
        leadPhrase: "Financial reporting.",
        body: "Board-ready reporting on portfolio health, with the ability to drill from headline numbers to specific cases.",
      },
    ],
  },
  metrics: [
    { label: "PORTFOLIO VALUE TRACKED", value: "[verify]" },
    { label: "FORECAST ACCURACY UPLIFT", value: "[verify]%" },
    { label: "ARREARS DETECTED EARLIER (DAYS)", value: "[verify]" },
    { label: "RECONCILIATION TIME SAVED", value: "[verify]%" },
  ],
  diagramBrief:
    "Two-rail diagram: asset-side data on top rail, resident-side data on bottom rail, converging into a single forecast model on the right with one purple highlight on the convergence node.",
  fitsWith: {
    headline: "Where Finance sits in the platform.",
    body: "Finance is the model that everything else feeds into and that the board reads off. Aftersales settles capital receipts here. Compliance keeps the lease economics current. Resident Portal closes the affordability loop.",
    relatedProducts: ["aftersales", "compliance", "resident-portal"],
  },
  caseStudy: {
    haName: "[Verify HA]",
    headlineResult: "Replaced three spreadsheets with one forecast.",
    body: "Asset and resident data combined in one model. Numbers the board sees are the numbers operations work from.",
    quote: {
      text: "[Verify quote]",
      author: "[Verify name]",
      role: "Director of Finance",
    },
  },
};
