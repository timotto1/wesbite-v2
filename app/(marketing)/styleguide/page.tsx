import { CTAButton } from "@/components/primitives/CTAButton";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { MetricPanel } from "@/components/primitives/MetricPanel";
import { CaseStudyCard } from "@/components/primitives/CaseStudyCard";
import { LogoStrip } from "@/components/primitives/LogoStrip";
import { TwoSidedDiagram } from "@/components/primitives/TwoSidedDiagram";
import { HeroStaged } from "@/components/sections/HeroStaged";
import { ProductSpotlight } from "@/components/sections/ProductSpotlight";
import { FeatureStack } from "@/components/sections/FeatureStack";
import { DiagramSection } from "@/components/sections/DiagramSection";
import { PlaceholderStaged } from "@/components/illustrations/PlaceholderStaged";
import { PlaceholderDiagram } from "@/components/illustrations/PlaceholderDiagram";

export const metadata = {
  title: "Styleguide — Stairpay",
  robots: { index: false, follow: false },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-hairline border-rule py-16">
      <div className="mx-auto w-full max-w-page px-section">
        <p className="text-eyebrow uppercase text-ink-muted">{title}</p>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function Styleguide() {
  return (
    <div>
      {/* Header */}
      <div className="mx-auto w-full max-w-page px-section pt-16">
        <p className="text-eyebrow uppercase text-ink-muted">Phase 1 review</p>
        <h1 className="mt-3 text-display-lg text-ink">Stairpay styleguide.</h1>
        <p className="mt-4 max-w-prose text-body-lg text-ink-muted">
          Every primitive and section pattern, rendered with placeholder
          content. Sign-off here unblocks Phase 2.
        </p>
        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-body-sm text-ink-muted">
          <a href="#tokens" className="hover:text-ink">Tokens</a>
          <a href="#typography" className="hover:text-ink">Typography</a>
          <a href="#primitives" className="hover:text-ink">Primitives</a>
          <a href="#sections" className="hover:text-ink">Sections</a>
        </nav>
      </div>

      {/* Tokens */}
      <Section id="tokens" title="01 · Colour tokens">
        <div className="mx-auto w-full max-w-page px-section">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { name: "ink", swatch: "bg-ink" },
              { name: "ink.muted", swatch: "bg-ink-muted" },
              { name: "ink.light", swatch: "bg-ink-light" },
              { name: "paper", swatch: "bg-paper border-hairline border-rule" },
              { name: "paper.panel", swatch: "bg-paper-panel" },
              { name: "paper.card", swatch: "bg-paper-card border-hairline border-rule" },
              { name: "stairpay", swatch: "bg-stairpay" },
              { name: "stairpay.soft", swatch: "bg-stairpay-soft" },
              { name: "rule", swatch: "bg-rule" },
              { name: "rule.grid", swatch: "bg-rule-grid" },
            ].map((t) => (
              <div key={t.name}>
                <div className={`h-20 rounded-card ${t.swatch}`} />
                <p className="mt-2 text-body-sm text-ink">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Typography */}
      <Section id="typography" title="02 · Typography">
        <div className="mx-auto w-full max-w-page space-y-6 px-section">
          <p className="text-display-xl text-ink">Display XL — 72/light</p>
          <p className="text-display-lg text-ink">Display LG — 56/light</p>
          <p className="text-heading-xl text-ink">Heading XL — 44/light</p>
          <p className="text-heading-lg text-ink">Heading LG — 36/regular</p>
          <p className="text-heading-md text-ink">Heading MD — 28/regular</p>
          <p className="text-heading-sm text-ink">Heading SM — 20/medium</p>
          <p className="text-body-lg text-ink">Body LG — 18/regular. The quick brown fox jumps over the lazy dog.</p>
          <p className="text-body-md text-ink">Body MD — 17/regular. The quick brown fox jumps over the lazy dog.</p>
          <p className="text-body-sm text-ink-muted">Body SM — 15/regular. Captions and footnotes live here.</p>
          <p className="text-eyebrow uppercase text-ink-muted">Eyebrow — 12/medium/spaced</p>
        </div>
      </Section>

      {/* Primitives */}
      <Section id="primitives" title="03 · Primitives">
        <div className="mx-auto w-full max-w-page space-y-12 px-section">
          <div>
            <EyebrowLabel>CTA buttons</EyebrowLabel>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <CTAButton variant="primary" href="#" label="Request demo" arrow />
              <CTAButton variant="primary" href="#" label="Sign up" />
              <CTAButton variant="secondary" href="#" label="Learn more" />
            </div>
          </div>

          <div>
            <EyebrowLabel>Eyebrow label</EyebrowLabel>
            <div className="mt-4">
              <EyebrowLabel>Section eyebrow text</EyebrowLabel>
            </div>
          </div>

          <div>
            <EyebrowLabel>Metric panel (2×2)</EyebrowLabel>
            <div className="mt-4 max-w-2xl">
              <MetricPanel
                metrics={[
                  { label: "Cases closed", value: "12,400" },
                  { label: "Avg. weeks to complete", value: "6" },
                  { label: "Auto-checked eligibility", value: "92%" },
                  { label: "First-tranche rate", value: "98%" },
                ]}
              />
            </div>
          </div>

          <div>
            <EyebrowLabel>Logo strip</EyebrowLabel>
            <div className="mt-4 -mx-6 border-y border-hairline border-rule">
              <LogoStrip
                intro="Trusted by"
                logos={[
                  { name: "Clarion" },
                  { name: "Notting Hill Genesis" },
                  { name: "Midland Heart" },
                  { name: "Settle" },
                  { name: "M&G" },
                  { name: "Auxesia" },
                  { name: "Bromford Flagship" },
                  { name: "Southern" },
                  { name: "SNG" },
                ]}
              />
            </div>
          </div>

          <div>
            <EyebrowLabel>Case study card</EyebrowLabel>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <CaseStudyCard
                haName="Notting Hill Genesis"
                headlineResult="Cut staircasing case time from 14 weeks to 6"
                body="Stairpay replaced four spreadsheets and an inbox with one platform. Cases that previously took a quarter now close in six weeks."
                quote={{
                  text: "The first tool we've used that actually understands Shared Ownership.",
                  author: "Sarah Patel",
                  role: "Head of Sales, NHG",
                }}
                href="#"
              />
              <CaseStudyCard
                haName="Midland Heart"
                headlineResult="3× more residents instructed staircasing in-app"
                body="Affordability already on file means residents instruct the moment they're ready. Cases land in the team's workflow with the work already half done."
                quote={{
                  text: "We can finally answer the regulator's questions without a spreadsheet rebuild.",
                  author: "James Holloway",
                  role: "Director of Home Ownership",
                }}
                href="#"
              />
            </div>
          </div>

          <div>
            <EyebrowLabel>Two-sided diagram</EyebrowLabel>
            <div className="mt-4 rounded-card border-hairline border-rule bg-paper-card p-6">
              <TwoSidedDiagram />
            </div>
          </div>
        </div>
      </Section>

      {/* Sections */}
      <Section id="sections" title="04 · Section patterns">
        <div className="space-y-4">
          <div className="mx-auto w-full max-w-page px-section">
            <EyebrowLabel>Pattern 1 — HeroStaged</EyebrowLabel>
          </div>
          <HeroStaged
            eyebrow="Operating system for Shared Ownership"
            headline="The operating system for Shared Ownership."
            sub="One platform for every Housing Association workflow — connected directly to your residents."
            primaryCta={{ label: "Request demo", href: "/demo" }}
            illustration={<PlaceholderStaged label="Hero composition" />}
          />

          <div className="mx-auto w-full max-w-page px-section pt-12">
            <EyebrowLabel>Pattern 2 — ProductSpotlight (image right, soft purple)</EyebrowLabel>
          </div>
          <ProductSpotlight
            headline="One place residents manage their home."
            headlineMuted="One place data lands in yours."
            body="Documents, costs, payments, affordability, instructions — in the resident's hands, syncing back to your team in real time."
            illustration={<PlaceholderStaged label="Resident portal" />}
            layout="image-right"
            panelTone="soft-purple"
          />

          <div className="mx-auto w-full max-w-page px-section pt-12">
            <EyebrowLabel>Pattern 2 — ProductSpotlight (image below)</EyebrowLabel>
          </div>
          <ProductSpotlight
            headline="From PDF to provable."
            body="Stairpay turns the unstructured data hiding in your leases, management packs, and correspondence into a record the regulator can audit and your team can act on."
            illustration={<PlaceholderStaged label="Compliance" />}
            layout="image-below"
          />

          <div className="mx-auto w-full max-w-page px-section pt-12">
            <EyebrowLabel>Pattern 3 — FeatureStack (with illustration)</EyebrowLabel>
          </div>
          <FeatureStack
            eyebrow="For Housing Associations"
            headline="Built for Housing Associations."
            headlineMuted="Used by their residents."
            illustration={<PlaceholderStaged label="HA dashboard" />}
            features={[
              {
                leadPhrase: "Cases close faster.",
                body: "Data flows automatically between systems, so staircasing and resales move from instruction to completion in weeks, not months.",
              },
              {
                leadPhrase: "Regulator-ready by default.",
                body: "One source of truth, audited end to end — the answers the regulator wants are already in the platform.",
              },
              {
                leadPhrase: "Less time on admin, more time on residents.",
                body: "Automation handles the rote work, so your team handles the work that matters.",
              },
              {
                leadPhrase: "Forecasts you can trust.",
                body: "Asset and resident data combined in one model — not stitched together from spreadsheets the night before a board meeting.",
                inlineLink: { text: "See Finance →", href: "#" },
              },
            ]}
          />

          <div className="mx-auto w-full max-w-page px-section pt-12">
            <EyebrowLabel>Pattern 3 — FeatureStack (no illustration)</EyebrowLabel>
          </div>
          <FeatureStack
            headline="Why HAs choose Stairpay."
            features={[
              {
                leadPhrase: "Deep Shared Ownership expertise.",
                body: "Built with HAs from day one. Every workflow reflects how Shared Ownership actually works — leases, nomination periods, affordability, the lot.",
              },
              {
                leadPhrase: "Data and tech first.",
                body: "Modern stack, clean data model, real APIs. Built to integrate, built to scale, built to give you data you can actually trust and report on.",
              },
              {
                leadPhrase: "End-to-end and two-sided.",
                body: "The only platform that covers the full HA workflow and connects directly to the resident — so instructions, data, and documents flow without re-keying.",
              },
            ]}
          />

          <div className="mx-auto w-full max-w-page px-section pt-12">
            <EyebrowLabel>Pattern 4 — DiagramSection (right)</EyebrowLabel>
          </div>
          <DiagramSection
            eyebrow="The two-sided model"
            headline="One platform. Two sides. One source of truth."
            body="Residents instruct staircasing, resales, and changes from their app. Those instructions land directly in the HA's workflow — no email, no re-keying, no lost context."
            diagram={<TwoSidedDiagram />}
            layout="diagram-right"
          />

          <div className="mx-auto w-full max-w-page px-section pt-12">
            <EyebrowLabel>Pattern 4 — DiagramSection (below)</EyebrowLabel>
          </div>
          <DiagramSection
            eyebrow="Workflow anatomy"
            headline="From listing to first key."
            body="Every applicant on a single record, every stage on the same timeline."
            diagram={<PlaceholderDiagram label="Listings funnel" />}
            layout="diagram-below"
          />
        </div>
      </Section>
    </div>
  );
}
