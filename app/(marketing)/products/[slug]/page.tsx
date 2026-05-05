import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, productSlugs } from "@/content/products";
import { HeroStaged } from "@/components/sections/HeroStaged";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { FeatureStack } from "@/components/sections/FeatureStack";
import { MetricsAnatomy } from "@/components/sections/MetricsAnatomy";
import { FitsWith } from "@/components/sections/FitsWith";
import { ProductSecurityIntegrations } from "@/components/sections/ProductSecurityIntegrations";
import { CaseStudyCard } from "@/components/primitives/CaseStudyCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ListingsHero,
  ResidentPortalHero,
  CommsHero,
  ComplianceHero,
  FinanceHero,
  AftersalesHero,
} from "@/components/illustrations/ProductHeroes";
import {
  ListingsDiagram,
  ResidentPortalDiagram,
  CommsDiagram,
  ComplianceDiagram,
  FinanceDiagram,
  AftersalesDiagram,
} from "@/components/illustrations/ProductDiagrams";

const HEROES: Record<string, React.ReactNode> = {
  listings: <ListingsHero />,
  "resident-portal": <ResidentPortalHero />,
  comms: <CommsHero />,
  compliance: <ComplianceHero />,
  finance: <FinanceHero />,
  aftersales: <AftersalesHero />,
};

const DIAGRAMS: Record<string, React.ReactNode> = {
  listings: <ListingsDiagram />,
  "resident-portal": <ResidentPortalDiagram />,
  comms: <CommsDiagram />,
  compliance: <ComplianceDiagram />,
  finance: <FinanceDiagram />,
  aftersales: <AftersalesDiagram />,
};

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = products[params.slug];
  if (!product) return {};
  return {
    title: `${product.name} — Stairpay`,
    description: product.hero.sub,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug];
  if (!product) notFound();

  return (
    <>
      <HeroStaged
        eyebrow={product.name}
        headline={product.hero.headline}
        headlineMuted={product.hero.headlineMuted}
        sub={product.hero.sub}
        primaryCta={{ label: "Request demo", href: "/demo" }}
        illustration={HEROES[product.slug]}
      />

      <ProblemStatement
        headline={product.problem.headline}
        body={product.problem.body}
      />

      <FeatureStack
        headline={product.features.headline}
        headlineMuted={product.features.headlineMuted}
        features={product.features.items}
      />

      <MetricsAnatomy
        eyebrow="In production"
        headline="The numbers behind it."
        metrics={product.metrics as [
          (typeof product.metrics)[number],
          (typeof product.metrics)[number],
          (typeof product.metrics)[number],
          (typeof product.metrics)[number],
        ]}
        diagram={DIAGRAMS[product.slug]}
      />

      <FitsWith
        eyebrow="One platform"
        headline={product.fitsWith.headline}
        body={product.fitsWith.body}
        relatedProducts={product.fitsWith.relatedProducts}
      />

      <ProductSecurityIntegrations />

      {product.caseStudy ? (
        <section className="mx-auto w-full max-w-page px-section py-24">
          <div className="mx-auto max-w-3xl">
            <CaseStudyCard
              haName={product.caseStudy.haName}
              headlineResult={product.caseStudy.headlineResult}
              body={product.caseStudy.body}
              quote={product.caseStudy.quote}
              href="#"
            />
          </div>
        </section>
      ) : null}

      <FinalCTA
        headline={`See ${product.name} in your workflow.`}
        sub="30-minute demo. We'll show you the platform with your own workflows in mind."
        primaryCta={{ label: "Request demo", href: "/demo" }}
      />
    </>
  );
}
