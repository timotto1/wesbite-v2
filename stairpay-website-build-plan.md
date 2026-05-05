# Stairpay Website — Build Plan

> **What this is.** A complete build specification for the Stairpay marketing website, written to be handed to Claude Code (or any developer) and executed.
>
> **How to use it.** Read top to bottom once. Then work through the phases in order. Every section that makes a design decision points back to the brand framework or to a design token — the goal is that **all visual decisions live in one place** and changing them updates the whole site.
>
> **Decision-owner.** Tim. When something is ambiguous, the question goes to Tim, not to a vote.
>
> **Companion docs.**
>
> - Stairpay Brand & Design Framework — the rules behind every design decision. Read first.
> - Website Copy & Structure — the source-of-truth copy. This build plan embeds the latest copy but the Notion doc is the canonical version going forward.

---

## 1. The brief in one paragraph

Build stairpay.com: a marketing website for Stairpay, the operating system for Shared Ownership. The site sells to UK Housing Associations and showcases six products: Listings, Resident Portal, Comms, Compliance, Finance, and Aftersales. The site is light, considered, British in register, and data/tech-first in feel. Visual references: Linear and Stripe for polish; Vanta for staged product compositions; Unsiloed for structural illustrations. Anti-references: Microsoft (boring), Rightmove (clunky), tech-bro startup aesthetic (unearned confidence). The site must feel like it was built by people who know Shared Ownership deeply — because that's the actual moat.

---

## 2. Stack and project setup

### Stack

- **Framework:** Next.js 14 (App Router), TypeScript, React Server Components by default.
- **Styling:** Tailwind CSS, with a custom config that bakes the design tokens (see Section 3). No styled-components, no CSS-in-JS runtime. Design tokens live in `tailwind.config.ts` and `app/globals.css`.
- **Content:** All marketing copy lives in typed TypeScript data files under `/content/`. Blog posts live as MDX files under `/content/blog/`. **No copy is hardcoded inside components** — components take data as props.
- **Fonts:** Poppins, self-hosted via `next/font/google`. Weights loaded: 300, 400, 500. No other typefaces.
- **Images:** `next/image` for everything. Staged product compositions delivered as SVG where possible, otherwise PNG at 2x.
- **Deployment:** Vercel (assumed). Configure preview deployments per branch.
- **Analytics:** PostHog (already in use at Stairpay).
- **Forms:** "Request demo" CTA submits to a form handler — specify the endpoint with Tim before build, or stub it to a placeholder for v1 and wire up post-launch.

### Project structure

```
/app
  /(marketing)
    /page.tsx                    — landing page
    /products
      /[slug]
        /page.tsx                — product page template, takes [slug] and renders the matching product
    /company
      /page.tsx                  — about / company page
    /blog
      /page.tsx                  — blog index
      /[slug]
        /page.tsx                — individual blog post
    /together-for-homes
      /page.tsx                  — charity run page (standalone styling allowed)
    /layout.tsx                  — marketing site shell (nav, footer, fixed grid background)
  /globals.css                   — root styles, font loading, CSS custom properties
/components
  /sections                      — the four section patterns (Pattern 1–4) as composable components
  /primitives                    — button, card, link, etc.
  /illustrations                 — staged product compositions, diagrams (one file per illustration)
  /layout                        — nav, footer, grid-background
/content
  /products                      — one file per product, typed
  /landing.ts                    — landing page copy
  /company.ts                    — company page copy
  /blog                          — MDX files for blog posts
  /together-for-homes.ts         — charity run page copy
/lib
  /types.ts                      — shared TypeScript types for content
/public
  /illustrations                 — SVG and PNG assets
  /logos                         — customer logos, integration logos
/tailwind.config.ts
```

**Critical architectural rule:** every product page is rendered by the **same component** (`app/(marketing)/products/[slug]/page.tsx`) which reads from a typed data structure in `/content/products/{slug}.ts`. To restyle product pages globally, change the section components or the design tokens — never edit individual product pages. This guarantees consistency and trivial restyling.

---

## 3. Design tokens — the single source of truth for all visual decisions

Everything visual on the site reads from these tokens. Change a token, the whole site updates. **Do not hardcode colours, spacing, or font sizes anywhere in components.** If a component needs a value not in the tokens, add it to the tokens first.

### Colour tokens

```ts
// tailwind.config.ts colour extensions
colors: {
  ink: {
    DEFAULT: '#1A1A1F',     // body text, headlines
    muted: '#5C5C66',        // secondary text, sub-headlines
    light: '#9094A0',        // tertiary text, captions
  },
  paper: {
    DEFAULT: '#FAFAF7',     // primary background (off-white, NOT pure white)
    panel: '#F2F2EC',        // tinted panel background for product spotlight sections
    card: '#FFFFFF',         // card surfaces (sit on paper)
  },
  stairpay: {
    DEFAULT: '#26045D',     // brand purple, used for primary CTAs and key highlights
    soft: '#F0EBF8',        // very pale purple tint for occasional panel backgrounds
  },
  rule: {
    DEFAULT: '#E5E5DD',     // hairline borders, dividers
    grid: '#EDEDE5',         // background grid pattern (lighter than rule)
  },
}
```

**Hex values above are starting points. Tim adjusts during first design pass; once locked, do not change without his approval.**

### Typography tokens

```ts
fontFamily: {
  sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
},
fontSize: {
  // Display sizes for hero headlines
  'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
  'display-lg': ['56px', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '300' }],
  // Section headlines
  'heading-xl': ['44px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '300' }],
  'heading-lg': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
  'heading-md': ['28px', { lineHeight: '1.25', fontWeight: '400' }],
  'heading-sm': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
  // Body sizes
  'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
  'body-md': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
  'body-sm': ['15px', { lineHeight: '1.5', fontWeight: '400' }],
  // Eyebrow / label
  'eyebrow': ['12px', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '500' }],
}
```

### Spacing and layout tokens

```ts
// 4px base unit, used throughout
spacing: { /* Tailwind defaults extend the 4px scale */ },
borderRadius: {
  card: '12px',     // ALL cards, buttons, inputs use this single value
  pill: '9999px',   // for pill-shaped CTAs only
},
maxWidth: {
  prose: '680px',     // body copy max-width
  content: '1200px',  // main content max-width
  page: '1440px',     // page max-width
},
```

### Border tokens

```ts
borderWidth: {
  hairline: '1px',  // standard card and divider weight
}
// All cards on the site use: border-hairline border-rule
```

### Critical implementation notes

- **Tailwind classes that hardcode values (e.g. `text-[#26045D]`, `p-[17px]`) are banned.** Add to the tokens or use a token class.
- **A pre-commit hook should grep for `text-\[#`, `bg-\[#`, and `text-\[\d` patterns and fail the commit.**
- **Every component file should be reviewable by reading just its props — no inline styles, no magic numbers.**

---

## 4. Layout shell

### Fixed grid background

The entire site sits on a fixed grid background that does not scroll. Implementation:

- A `<div>` with `position: fixed; inset: 0; z-index: -1; pointer-events: none;` placed in `app/(marketing)/layout.tsx`.
- Background is the `paper` colour with a CSS-painted grid pattern using `background-image` of two crossed linear gradients in the `rule.grid` colour, repeating every 56px (or 8× the spacing base unit).
- All page content sits at z-index 0 or higher, scrolls normally over the top.

**Mobile behaviour:** on viewports under 768px, the grid is *hidden entirely* (display: none). This is cleaner than the alternative of having it scroll, and avoids known performance issues with fixed backgrounds on mobile Safari.

### Cards

Most sections are open compositions on the gridded background. Cards are used selectively:

- Staged product compositions sit inside cards.
- Metric panels sit inside cards.
- Case study blocks sit inside cards.
- Feature blocks within Pattern 3 sections do **not** sit inside cards — they are open prose on the background.

All cards use the same treatment: **bg-paper.card, border-hairline border-rule, rounded-card, no shadow.** No drop shadows anywhere on the site.

### Top nav

Fixed to top, semi-transparent paper background with backdrop blur. Contents:

- Stairpay wordmark (lowercase) on the left
- Centre nav: **Products** (dropdown to six products), **Company**, **Blog**, **Together for Homes**
- Right: **Log in** (text link), **Request demo** (primary CTA pill)

### Footer

Four columns:

1. **Product**: links to all six product pages
2. **Company**: About, Careers, Contact, Together for Homes
3. **Resources**: Blog, Case studies, Security, Status
4. **Legal**: Privacy, Terms, DPA, Cookies

Below the columns: Stairpay wordmark, copyright line, social links (LinkedIn primary; only add others if they're actively used).

---

## 5. Section patterns — the four reusable components

These are the four building blocks the site is composed from. Each is a single React component that takes typed props. **Every section on the site is one of these four**, with the exception of the hero on charity-run page (which gets its own treatment).

### Pattern 1 — `<HeroStaged>`

Vanta-style staged composition.

**Props:**
```ts
type HeroStagedProps = {
  eyebrow?: string;             // optional small label above headline
  headline: string;             // main promise
  headlineMuted?: string;       // optional continuation in muted tone
  sub: string;                  // 1–2 sentences
  primaryCta: { label: string; href: string };
  illustration: ReactNode;      // staged product composition component
}
```

**Layout:** two-column grid, copy 5/12 columns left, illustration 7/12 right. Asymmetric, not balanced. Generous vertical padding (96–128px).

### Pattern 2 — `<ProductSpotlight>`

Stripe-style full-frame product on a tinted panel.

**Props:**
```ts
type ProductSpotlightProps = {
  headline: string;
  headlineMuted?: string;
  body: string;                 // 1–3 sentences
  illustration: ReactNode;      // full-frame product surface
  layout: 'image-right' | 'image-left' | 'image-below';
  panelTone?: 'paper' | 'soft-purple';  // background tone of the panel
}
```

The illustration always sits inside a panel using `bg-paper.panel` (or `bg-stairpay.soft` if `panelTone='soft-purple'`).

### Pattern 3 — `<FeatureStack>`

Stripe-style multi-feature stacked list. **No bullet points, ever.**

**Props:**
```ts
type FeatureStackProps = {
  eyebrow?: string;
  headline: string;
  headlineMuted?: string;
  features: Array<{
    leadPhrase: string;         // bold lead
    body: string;               // lighter explanation
    inlineLink?: { text: string; href: string };  // optional inline emphasis
  }>;
  illustration?: ReactNode;     // optional, displayed alongside
}
```

Each feature renders as: `<p><strong>{leadPhrase}</strong> {body}</p>` with generous vertical spacing between paragraphs (32–40px).

### Pattern 4 — `<DiagramSection>`

Unsiloed-style annotated diagram.

**Props:**
```ts
type DiagramSectionProps = {
  eyebrow?: string;
  headline: string;
  body?: string;                // optional intro paragraph
  diagram: ReactNode;           // annotated diagram component
  layout: 'diagram-right' | 'diagram-below';
}
```

Diagrams render in greys with one purple highlight; uppercase annotation labels in `text-eyebrow` style.

---

## 6. Reusable primitives

### `<CTAButton>`

Props: `variant: 'primary' | 'secondary'`, `href: string`, `label: string`, `arrow?: boolean`.

- **Primary**: `bg-stairpay text-paper`, pill shape (`rounded-pill`), arrow circle on right.
- **Secondary**: `bg-transparent border-hairline border-ink text-ink`, pill shape, no arrow.

Hero and final CTA components both use the primary variant only. Secondary is reserved for the rare case where two CTAs are genuinely needed.

### `<EyebrowLabel>`

Props: `children: string`. Renders uppercase, letter-spaced, small, in `ink.muted`.

### `<MetricPanel>`

Props:
```ts
{ metrics: Array<{ label: string; value: string }> }  // exactly 4 metrics
```
Renders a 2×2 grid of large numbers with small uppercase labels above each.

### `<CaseStudyCard>`

Props:
```ts
{
  haName: string;
  headlineResult: string;       // "Cut staircasing case time from 14 weeks to 6"
  body: string;                 // 2–3 sentences
  quote: { text: string; author: string; role: string };
  href: string;                 // link to full case study
}
```

The headline result number is shown in `stairpay` purple at large size.

### `<LogoStrip>`

Props: `{ logos: Array<{ name: string; src: string }> }`.

Renders monochrome, single horizontal row, even spacing. Logos auto-converted to greyscale + reduced opacity.

### `<TwoSidedDiagram>`

A specific diagram variant. Renders an HA dashboard on one side, a phone/resident frame on the other, with labelled directional arrows showing instruction flow. **This component appears at least once on the landing page and at least once per product page where the two-sided story is relevant.**

---

## 7. Pages — specifications

### 7.1 Landing page (`/`)

Built entirely from the section patterns above. Section order:

1. **Hero** (Pattern 1)
2. **Logo strip** (LogoStrip primitive)
3. **Problem statement** (Pattern 3 with no features list — just headline + body, OR a custom `<ProblemStatement>` component)
4. **Two-sided model** (custom section using TwoSidedDiagram)
5. **Product suite grid** (six tiles in a 3×2 grid, each linking to its product page)
6. **Who we serve** (Pattern 3, two columns: "For HAs" and "For residents")
7. **Why Stairpay — three pillars** (Pattern 3 in three-column variant)
8. **Data security** (Pattern 3)
9. **Integrations** (Pattern 3 with categorised logos)
10. **Case studies** (three CaseStudyCard primitives)
11. **Final CTA** (Pattern 1 layout, simplified)
12. **Footer**

#### Landing page copy (canonical)

```ts
// /content/landing.ts
export const landing = {
  hero: {
    headline: "The operating system for Shared Ownership.",
    sub: "One platform for every Housing Association workflow — connected directly to your residents.",
    primaryCta: { label: "Request demo", href: "/demo" },
  },
  logoStrip: {
    intro: "Trusted by",
    logos: ["Clarion", "Notting Hill Genesis", "Midland Heart", "Settle", "M&G", "Auxesia", "Bromford Flagship", "Southern", "SNG"],
  },
  problem: {
    headline: "Shared Ownership runs on spreadsheets. The regulator has noticed.",
    body: "A typical HA runs it across a legacy HMS, an inbox, a finance system, and three Excel files nobody trusts. Cases drag. Reports are reverse-engineered. Residents wait. Stairpay replaces the chaos with one platform, built for Shared Ownership.",
  },
  twoSided: {
    headline: "One platform. Two sides. One source of truth.",
    body: "Stairpay is the only Shared Ownership platform built for both the Housing Association and the resident. Residents instruct staircasing, resales, and changes from their app. Those instructions land directly in the HA's workflow — no email, no re-keying, no lost context.",
  },
  productSuite: {
    headline: "Every Shared Ownership workflow. One platform.",
    products: [
      { slug: "listings", name: "Listings", outcome: "Get new homes to market faster.", proof: "Automated eligibility, configurable workflows, and a single record from listing to first key." },
      { slug: "resident-portal", name: "Resident Portal", outcome: "Give residents one place to manage their home.", proof: "Every staircasing instruction, document, and payment lands directly in your team's workflow." },
      { slug: "comms", name: "Comms", outcome: "Every resident conversation, in one place.", proof: "Target by development, cohort, or case — with the full history attached to every record." },
      { slug: "compliance", name: "Compliance", outcome: "Turn leases and management packs into structured, searchable data.", proof: "Built for the regulator's questions before they ask." },
      { slug: "finance", name: "Finance", outcome: "Forecast portfolio health on real data.", proof: "Asset-side and resident-side combined — not stitched together from spreadsheets." },
      { slug: "aftersales", name: "Aftersales", outcome: "Run staircasing and resales end to end.", proof: "The original Stairpay product, and still the deepest in the market." },
    ],
  },
  whoWeServe: {
    headline: "Built for Housing Associations. Used by their residents.",
    forHAs: {
      title: "For Housing Associations",
      points: [
        { lead: "Cases close faster.", body: "Data flows automatically between systems, so staircasing and resales move from instruction to completion in weeks, not months." },
        { lead: "Regulator-ready by default.", body: "One source of truth, audited end to end — the answers the regulator wants are already in the platform." },
        { lead: "Less time on admin, more time on residents.", body: "Automation handles the rote work, so your team handles the work that matters." },
        { lead: "Forecasts you can trust.", body: "Asset and resident data combined in one model — not stitched together from spreadsheets the night before a board meeting." },
      ],
    },
    forResidents: {
      title: "For residents",
      points: [
        { lead: "Clarity on costs and processes.", body: "Rent, service charges, share value, and what happens next — all in one place." },
        { lead: "Affordability tracking.", body: "Understand what you can afford to staircase, and when, without paying for advice you don't yet need." },
        { lead: "Document storage.", body: "Lease, statements, valuations, correspondence — always to hand." },
        { lead: "Lease transparency.", body: "The terms of your lease, surfaced in plain English instead of buried in a 90-page PDF." },
      ],
    },
  },
  pillars: {
    headline: "Why HAs choose Stairpay.",
    pillars: [
      { title: "Deep Shared Ownership expertise", body: "Built with HAs from day one. Every workflow reflects how Shared Ownership actually works — leases, nomination periods, affordability, the lot. Not generic CRM bent into shape." },
      { title: "Data and tech first", body: "Modern stack, clean data model, real APIs. Built to integrate, built to scale, built to give you data you can actually trust and report on." },
      { title: "End-to-end and two-sided", body: "The only platform that covers the full HA workflow and connects directly to the resident — so instructions, data, and documents flow without re-keying." },
    ],
  },
  security: {
    headline: "Your data, properly protected.",
    body: "HA and resident data treated with the seriousness it deserves.",
    points: [
      { lead: "ISO 27001.", body: "[Confirm: certified or in progress — do not publish until verified.]" },
      { lead: "UK data residency.", body: "All data stored in UK regions." },
      { lead: "GDPR-aligned by design.", body: "DPIAs, DPAs, role-based access, audit trails on every change." },
      { lead: "Encryption at rest and in transit.", body: "With key management to specification." },
      { lead: "Pen tested.", body: "Regular third-party testing." },
    ],
  },
  integrations: {
    headline: "Plays well with the rest of your stack.",
    body: "No rip-and-replace. Stairpay integrates with the housing management systems, finance systems, and document tools HAs already use.",
    categories: [
      { name: "Housing management systems", logos: ["MRI", "Civica", "Capita", "Aareon"] },  // confirm which are live
      { name: "Finance & accounting", logos: ["Xero", "Sage", "Oracle"] },
      { name: "Document & e-signature", logos: ["DocuSign", "Adobe Sign"] },
      { name: "Identity & SSO", logos: ["Microsoft Entra", "Okta", "Google"] },
      { name: "Comms", logos: ["Twilio", "GOV.UK Notify"] },
    ],
  },
  caseStudies: [
    // populate once Sinead/Marta provide verified case studies
  ],
  finalCta: {
    headline: "Ready to run Shared Ownership properly?",
    sub: "30-minute demo. We'll show you the platform with your own workflows in mind.",
    primaryCta: { label: "Request demo", href: "/demo" },
  },
}
```

### 7.2 Product pages (`/products/[slug]`)

**Architectural rule (critical):** all six product pages are rendered by **a single component** that reads from a typed data file per product. The component composes section patterns based on a fixed structure. Result: changing the section components or design tokens updates all six product pages identically.

#### The product page template

Fixed section order, every product:

1. **Hero** (Pattern 1) — product name as eyebrow, one-liner as headline, problem framing as sub
2. **Problem statement** — dedicated section using ProblemStatement component
3. **Feature stack** (Pattern 3) — the bold-lead feature blocks
4. **Metric panel + diagram** (custom section combining MetricPanel and DiagramSection) — the workflow-anatomy moment
5. **How it fits with the rest of Stairpay** (Pattern 4 with TwoSidedDiagram or custom diagram)
6. **Security & integrations** (short, links out)
7. **Case study** (single CaseStudyCard)
8. **Final CTA** (Pattern 1 simplified)

#### Per-product data structure

```ts
// /lib/types.ts
export type ProductPageData = {
  slug: string;
  name: string;
  hero: {
    headline: string;
    headlineMuted?: string;
    sub: string;
  };
  problem: {
    headline: string;
    body: string;
  };
  features: {
    headline: string;
    headlineMuted?: string;
    items: Array<{ leadPhrase: string; body: string }>;
  };
  metrics: Array<{ label: string; value: string }>;  // exactly 4
  diagramBrief: string;  // briefing note for the illustration team
  fitsWith: {
    headline: string;
    body: string;
    relatedProducts: string[];  // slugs of related products
  };
  caseStudy?: {
    haName: string;
    headlineResult: string;
    body: string;
    quote: { text: string; author: string; role: string };
  };
}
```

#### Per-product copy (canonical, ready to ship)

##### Listings (`/content/products/listings.ts`)

```ts
hero: {
  headline: "From listing to first key.",
  sub: "Every new home, every applicant, every eligibility check — managed in one place from the moment a development goes live to the day a resident moves in.",
},
problem: {
  headline: "Initial sales run across portal admin, an inbox, and a spreadsheet of applicants.",
  body: "Most HAs run initial sales across portal admin tools, an inbox, a spreadsheet of applicants, and a separate system for affordability. Leads get lost between them, eligibility is checked manually, and nobody can tell you the real conversion rate from enquiry to reservation. Stairpay closes the loop — one record per applicant, from the portal listing to first-tranche completion.",
},
features: {
  headline: "From listing to reservation, on rails.",
  items: [
    { leadPhrase: "One-click listing across portals.", body: "Push new homes to Rightmove, Zoopla, Share to Buy, and your own site from a single record. Updates propagate everywhere automatically." },
    { leadPhrase: "Lead quality grading.", body: "Every applicant scored on affordability, eligibility, and engagement signals — so your team works the leads most likely to convert, not the loudest ones." },
    { leadPhrase: "Automated eligibility.", body: "Income, savings, and local-connection rules checked automatically against your scheme criteria. Applicants find out in minutes, not weeks." },
    { leadPhrase: "Configurable case management.", body: "Build the case stages your team actually uses, with handoffs, deadlines, and audit trails baked in." },
  ],
},
metrics: [
  { label: "APPLICATIONS PROCESSED", value: "[verify]" },
  { label: "AVG. TIME TO RESERVATION", value: "[verify]" },
  { label: "ELIGIBILITY AUTO-CHECKED", value: "[verify]%" },
  { label: "FIRST-TRANCHE COMPLETION RATE", value: "[verify]" },
],
```

##### Resident Portal (`/content/products/resident-portal.ts`)

```ts
hero: {
  headline: "One place residents manage their home. One place data lands in yours.",
  sub: "Documents, costs, payments, affordability, instructions — in the resident's hands, syncing back to your team in real time.",
},
problem: {
  headline: "Residents in Shared Ownership are largely in the dark.",
  body: "Residents are unsure what they own, what they pay, what they can afford, or how to instruct a change. They call, email, and chase. HAs answer the same questions for years and still hold a fragmented picture of each resident. The Resident Portal gives residents one trusted place to manage their home, and gives the HA a clean, live record of everyone in their portfolio.",
},
features: {
  headline: "Two sides, one record.",
  items: [
    { leadPhrase: "Clarity on costs and processes.", body: "Rent, service charges, share value, and what happens next — explained in plain English, in one place residents actually visit." },
    { leadPhrase: "Affordability tracking.", body: "Residents understand what they can afford to staircase, and when, with their real income and outgoings already on file." },
    { leadPhrase: "Lease transparency.", body: "The key terms of the lease, surfaced as searchable structured data — not buried in a 90-page PDF." },
    { leadPhrase: "Direct instruction.", body: "Staircasing, resales, name changes, lease queries — instructed in the app, landing in your team's workflow with the case already half-built." },
  ],
},
```

##### Comms (`/content/products/comms.ts`)

```ts
hero: {
  headline: "Every resident conversation, in one place.",
  sub: "Email, SMS, and in-app — threaded against the case, the development, and the resident, with the data to target the right cohort and the audit trail to prove it.",
},
problem: {
  headline: "Resident comms today live in shared inboxes and mail-merge spreadsheets.",
  body: "Nobody can see the full thread with a resident. Nobody can prove what was sent when. Segmenting a development for a service charge change is a manual export-and-merge job. Stairpay Comms gives every conversation one home, every send a target, and every message an audit trail.",
},
features: {
  headline: "From mail-merge to managed comms.",
  items: [
    { leadPhrase: "Templates and automated comms.", body: "Standard messages built once, sent at the right moment in a case lifecycle, with full audit of what went where and when." },
    { leadPhrase: "Bulk comms by cohort.", body: "Service charge changes, scheme updates, regulatory notices — sent to the right development, age band, or arrears cohort, not to everyone." },
    { leadPhrase: "Full history per resident.", body: "Every email, every SMS, every in-app message threaded against the resident and the relevant case. No more digging through inboxes." },
  ],
},
```

##### Compliance (`/content/products/compliance.ts`)

```ts
hero: {
  headline: "From PDF to provable.",
  sub: "Stairpay turns the unstructured data hiding in your leases, management packs, and correspondence into a record the regulator can audit and your team can act on.",
},
problem: {
  headline: "The data the regulator wants lives in PDFs and people's heads.",
  body: "Lease PDFs, scanned management packs, email threads, the heads of long-tenured staff. Pulling a clean answer out of it takes weeks, and the answer is rarely the same twice. Stairpay extracts the structured data automatically, monitors it for quality, and gives compliance teams a single source of truth they can stand behind.",
},
features: {
  headline: "Document chaos in. Structured truth out.",
  items: [
    { leadPhrase: "Lease and document intelligence.", body: "Upload leases, valuations, and management packs — Stairpay extracts the fields that matter into a structured, searchable record." },
    { leadPhrase: "Data quality monitoring.", body: "Confidence scores on every extracted field. Gaps and inconsistencies surfaced before the regulator finds them." },
    { leadPhrase: "Workflow automations.", body: "Renewals, rent reviews, lease events — triggered automatically from the structured data, never missed." },
  ],
},
```

##### Finance (`/content/products/finance.ts`)

```ts
hero: {
  headline: "Forecast on real data — not reverse-engineered spreadsheets.",
  sub: "Rent, service charges, arrears, and staircasing settlements, with asset and resident data in the same model.",
},
problem: {
  headline: "Finance teams forecast against data that doesn't agree with itself.",
  body: "Numbers are stitched together from a finance system, a housing system, and a handful of Excel files — none of which agree. Resident affordability data, the single best signal of arrears risk, sits on the other side of the business and never makes it into the model. Stairpay Finance combines asset-side and resident-side data so forecasts hold up, arrears risk is visible early, and the numbers the board sees are the numbers operations work from.",
},
features: {
  headline: "Asset-side and resident-side, in one model.",
  items: [
    { leadPhrase: "Rent and service charge billing.", body: "Configured to your schemes, calculated on your terms, reconciled automatically." },
    { leadPhrase: "Direct Debit and payment collection.", body: "Built-in collection with the failure-handling logic Shared Ownership actually needs — not generic billing-tool defaults." },
    { leadPhrase: "Arrears tracking with affordability context.", body: "Risk surfaced against the resident's real income picture, not a flat aging bucket." },
    { leadPhrase: "Staircasing and resale settlement.", body: "Capital receipts handled cleanly, with the audit trail finance teams need to close the books." },
    { leadPhrase: "Integration with finance systems.", body: "Plays nicely with Xero, Sage, and Oracle — the platform feeds your existing GL, not the other way around." },
    { leadPhrase: "Financial reporting.", body: "Board-ready reporting on portfolio health, with the ability to drill from headline numbers to specific cases." },
  ],
},
```

##### Aftersales (`/content/products/aftersales.ts`)

```ts
hero: {
  headline: "Staircasing and resales, run end to end.",
  sub: "From resident instruction to completion — every party working from the same record.",
},
problem: {
  headline: "Staircasing and resales are the most painful in-life transactions in Shared Ownership.",
  body: "Cases run for months across email threads, Word templates, and shared drives. Residents wait, solicitors chase, valuers go quiet, and the HA carries the case-management load alone. Stairpay was built here first: residents instruct in the app, the case opens automatically, and every party — solicitor, valuer, mortgage broker, HA team — works from a single live record through to completion.",
},
features: {
  headline: "Where Stairpay started. Where Stairpay is deepest.",
  items: [
    { leadPhrase: "Higher staircasing rates.", body: "Residents instruct staircasing in-app the moment they're ready, with affordability already on file. More transactions, less friction." },
    { leadPhrase: "Configurable case management.", body: "The stages, deadlines, and handoffs your team actually uses — not a vendor's idealised workflow." },
    { leadPhrase: "Intelligent automation.", body: "Reminders, document requests, and status updates handled by the platform. Your team intervenes on the cases that need a human." },
  ],
},
```

### 7.3 Company page (`/company`)

A single page introducing Stairpay as a company. Sections:

1. **Hero** (Pattern 1, simplified — no product visual; replace with a single editorial photo of the team or office, *only if* a high-quality one exists)
2. **Mission** (custom prose section)
3. **Team** (grid of team members — photo, name, role)
4. **Backers / investors** (logo strip)
5. **Careers** (Pattern 3, link out to roles)
6. **Contact** (Pattern 3, with email and address)
7. **Final CTA**

**Copy to draft separately** — not in this build plan. Tim writes the company page in a follow-up.

**Note:** the team list (Floris, Tim, Hugh, Prince, Daniel, Marta, Sinead) is in the brand context. Use it.

### 7.4 Blog (`/blog` and `/blog/[slug]`)

#### Index page

- Hero with title "Field notes from Shared Ownership"
- Grid of post cards — each card has: post title, eyebrow with category and date, 2-line excerpt, link to full post.
- No author photos, no tags-as-buttons, no "recommended" sidebars. Clean editorial.

#### Post page

- Title, eyebrow with category and date, optional 1-line dek
- Body in MDX (so we can embed components like staged compositions, metric panels, callouts)
- Footer with one related-post link and a Final CTA

#### Post structure (MDX frontmatter)

```yaml
---
title: "Why staircasing is broken"
category: "Industry"
date: 2026-05-10
author: "Floris Verhoeff"
dek: "And what fixes it."
---
```

#### Implementation

- Posts are MDX files in `/content/blog/`.
- Index page reads filesystem at build time, sorts by date desc, paginates if more than 12 posts.
- Use `next-mdx-remote` or built-in App Router MDX support.
- No CMS for v1. (If post volume passes 50, revisit.)

### 7.5 Together for Homes (`/together-for-homes`)

Stairpay's annual charity run page. **This page is allowed to deviate from the main brand framework** — charity events benefit from feeling distinct from the company brand.

- Standalone page, linked from main nav and footer.
- Inherits the global layout shell (top nav, fixed grid background, footer) but uses its own colour and typography overrides scoped to the page.
- Sections: hero (event name, date, location, primary CTA: "Sign up"), about the charity, route map, sponsors, past years' photos, FAQs, sign-up CTA.
- **Copy and detailed structure to be drafted separately** — there's already a Notion page ("Together for Homes 2026 Website") that should be used as the source.
- Style overrides allowed: a more vibrant accent (suggest deferring to Tim's call), photographic imagery (the only place on the wider site where photos of people are allowed), and a more energetic register.

---

## 8. Illustrations — production plan

The site requires the following illustrations. **None of these are screenshots of the actual product** — they are designed compositions in the spirit of the Vanta and Unsiloed references, rendered in the Stairpay palette.

### Required illustrations (priority order)

1. **Landing page hero — staged composition.** A partial product surface (case manager view) on the left, a foreground card showing a structured insight (e.g. "Forfeiture trigger: Non-payment of rent for 30 days, 92% confident"). One purple highlight, generous crop.
2. **Landing page — two-sided diagram.** HA dashboard on one side, resident phone frame on the other, with three labelled directional arrows: instruction → case, document upload → record, status update → notification.
3. **Six product hero compositions** — one per product page. Each follows the Vanta-staged pattern with a foreground card naming the product's most striking insight. Briefs for each are in the diagramBrief field of the product data.
4. **Six product diagrams** — one annotated diagram per product page (Pattern 4). Funnel for Listings, two-sided for Resident Portal, inbox-converging for Comms, document-extraction for Compliance, two-rail for Finance, case-timeline for Aftersales.

### Illustration delivery

- All as SVG. Inline in JSX where possible (better for theming via CSS variables); otherwise as standalone components in `/components/illustrations/`.
- Every illustration uses **only** colours from the design tokens. No hardcoded colours.
- One purple highlight per illustration, no exceptions.
- Annotation labels rendered as SVG text in the eyebrow style (uppercase, letter-spaced).

### Briefing

The brief for whoever produces these is: *"Stage one composition per illustration in the spirit of the Vanta hero — a partial product surface with one or two foreground cards naming the structured insight the product produces. Use only the Stairpay palette. One purple highlight per scene."*

This is an **art direction job**, not a UI design job. If it's handed to someone who only thinks in clean UI, the result will be six clean dashboards, which is not what's wanted.

---

## 9. Build phases

Deliver in phases. Each phase produces something deployable.

### Phase 1 — Foundation (build first, do not skip)

- Project setup: Next.js, Tailwind, design tokens, Poppins loading
- Layout shell: marketing layout, fixed grid background, top nav, footer
- Primitives: `<CTAButton>`, `<EyebrowLabel>`, `<MetricPanel>`, `<CaseStudyCard>`, `<LogoStrip>`
- Section pattern components: `<HeroStaged>`, `<ProductSpotlight>`, `<FeatureStack>`, `<DiagramSection>`
- A `/styleguide` route (visible in dev only) that renders every primitive and pattern at every size with placeholder content. **Tim reviews this before Phase 2 starts.**

### Phase 2 — Landing page

- Build the landing page using the section patterns and primitives, with copy from `/content/landing.ts`
- Use placeholder illustrations (simple grey blocks with labels) until real illustrations land
- Deploy to a preview URL for review

### Phase 3 — Product page template + first product

- Build the product page template at `/products/[slug]`
- Wire up the first product (Aftersales — the strongest copy)
- Verify the entire section order works end to end with one product
- Tim reviews

### Phase 4 — Five remaining product pages

- Add data files for Listings, Resident Portal, Comms, Compliance, Finance
- All five render automatically via the template. Confirm visual consistency across all six.
- This phase should take a fraction of the time of Phase 3 — if it doesn't, the template wasn't built right.

### Phase 5 — Illustrations

- Replace placeholder illustrations with real ones as they land
- Each illustration replaces a placeholder cleanly via the `illustration` prop on the section components

### Phase 6 — Company page

- Build company page using existing patterns
- Tim drafts copy in parallel; copy slots into the page

### Phase 7 — Blog

- Set up MDX pipeline
- Build blog index and post page
- Seed with two or three posts to verify pipeline works

### Phase 8 — Together for Homes

- Build standalone charity-run page
- Copy from existing Notion source
- Apply scoped style overrides

### Phase 9 — Pre-launch

- Cross-browser testing (Chrome, Safari, Firefox, mobile Safari, mobile Chrome)
- Accessibility audit (axe-core, manual keyboard nav, screen reader pass)
- Performance audit (Lighthouse, target 95+ on all metrics)
- SEO basics: meta tags, OG images, sitemap, robots.txt
- Form wiring: "Request demo" CTA actually submits somewhere
- Analytics wiring: PostHog events on CTA clicks, scroll depth, demo form submissions

---

## 10. How to globally restyle the site

The whole architecture is built so that Tim (or a designer) can change the look of the site — including all six product pages — by editing one place. The hierarchy is:

1. **Design tokens** (`tailwind.config.ts`) — change colours, type scale, spacing. Updates everywhere on the site instantly.
2. **Section pattern components** (`/components/sections/`) — change layout, structure, or composition of a pattern. Updates every section using that pattern.
3. **Primitive components** (`/components/primitives/`) — change buttons, cards, eyebrows. Updates everywhere they're used.
4. **Per-page content** (`/content/`) — change words on a specific page only.

**If you ever find yourself editing `app/(marketing)/products/listings/page.tsx` directly, you've broken the model.** Product pages are rendered by a single template. Edit the template, the data, or the tokens — never the individual page.

---

## 11. Open decisions — to resolve before build starts

Things deliberately not yet decided. Tim resolves these before Phase 1, or builds with placeholders that get swapped later.

- **Demo form endpoint.** Where does "Request demo" submit?
- **Final hex values for ink, paper, rule, grid.** Starting points are in the tokens; verify in design pass.
- **Whether to support a sticky "Book a demo" floating CTA on long pages** (probably yes, but not specified above).
- **Case study content** — currently empty. Sinead/Marta supply real ones before launch.
- **"1 in 3" stat for Aftersales** — verify the actual scope of the claim before publishing anywhere.
- **Logo list for trusted-by strip** — currently includes nine HAs; confirm we have permission to display each.
- **Integration list** — currently aspirational. Mark each as live, in progress, or roadmap before publishing.
- **Security claims** — ISO 27001 status currently flagged for verification.
- **Status page** — footer references a Status link. Build a real status page or remove the link.
- **Cookie banner / consent management** — specify approach (Cookiebot, Iubenda, custom).
- **Together for Homes scoped styling** — specific colour/type overrides for that page.
