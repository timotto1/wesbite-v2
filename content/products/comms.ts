import type { ProductPageData } from "@/lib/types";

export const comms: ProductPageData = {
  slug: "comms",
  name: "Comms",
  hero: {
    headline: "Reach the right residents, prove every message.",
    sub: "Send email, SMS, and in-app messages threaded against the case, development, and resident — with the targeting to hit the right cohort and the audit trail to prove you did.",
  },
  problem: {
    headline:
      "Resident comms today live in shared inboxes and mail-merge spreadsheets.",
    body: "Nobody can see the full thread with a resident. Nobody can prove what was sent when. Segmenting a development for a service charge change is a manual export-and-merge job. Stairpay Comms gives every conversation one home, every send a target, and every message an audit trail.",
  },
  features: {
    headline: "From mail-merge to managed comms.",
    items: [
      {
        leadPhrase: "Templates and automated comms.",
        body: "Standard messages built once, sent at the right moment in a case lifecycle, with full audit of what went where and when.",
      },
      {
        leadPhrase: "Bulk comms by cohort.",
        body: "Service charge changes, scheme updates, regulatory notices — sent to the right development, age band, or arrears cohort, not to everyone.",
      },
      {
        leadPhrase: "Full history per resident.",
        body: "Every email, every SMS, every in-app message threaded against the resident and the relevant case. No more digging through inboxes.",
      },
    ],
  },
  metrics: [
    { label: "MESSAGES SENT / MONTH", value: "[verify]" },
    { label: "OPEN RATE", value: "[verify]%" },
    { label: "RESIDENTS REACHED", value: "[verify]" },
    { label: "INBOUND CALL DEFLECTION", value: "[verify]%" },
  ],
  diagramBrief:
    "Inbox-converging diagram: many fragmented inboxes and exports flowing into a single Stairpay thread per resident, with a target-cohort callout.",
  fitsWith: {
    headline: "Where Comms sits in the platform.",
    body: "Comms reads from the same record as the rest of the platform — segments are live cuts of resident, scheme, and case data, not yesterday's CSV.",
    relatedProducts: ["resident-portal", "aftersales", "compliance"],
  },
  caseStudy: {
    haName: "[Verify HA]",
    headlineResult: "Cut comms drafting time by 70% on service charge changes.",
    body: "Cohort-targeted templates replaced the export-and-merge ritual. Fewer mistakes, full audit trail, residents better informed.",
    quote: {
      text: "[Verify quote]",
      author: "[Verify name]",
      role: "Resident Engagement Lead",
    },
  },
};
