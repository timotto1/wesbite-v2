import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, productSlugs } from "@/content/products";
import { landing } from "@/content/landing";
import { HeroStaged } from "@/components/sections/HeroStaged";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { BenefitsRow } from "@/components/sections/BenefitsRow";
import { ProductFeaturesSection } from "@/components/sections/ProductFeaturesSection";
import { MetricsAnatomy } from "@/components/sections/MetricsAnatomy";
import { FitsWith } from "@/components/sections/FitsWith";
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

  const fallbackBenefits =
    landing.productSuite.products.find((p) => p.slug === product.slug)
      ?.benefits ?? [];
  const benefits =
    product.outcomes ??
    fallbackBenefits.map((heading) => ({ heading }));

  return (
    <div className="md:px-6 lg:px-12 xl:px-20">
      <HeroStaged
        eyebrow={product.name}
        headline={product.hero.headline}
        headlineMuted={product.hero.headlineMuted}
        sub={product.hero.sub}
        primaryCta={{ label: "Request demo", href: "/demo" }}
        illustration={HEROES[product.slug]}
      />

      <ProblemStatement body={product.problem.body} />

      {benefits.length ? <BenefitsRow benefits={benefits} /> : null}

      <ProductFeaturesSection
        features={product.richFeatures ?? product.features.items}
      />

      {product.metrics.length ? (
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
      ) : null}

      <FitsWith
        eyebrow="One platform"
        headline={product.fitsWith.headline}
        body={product.fitsWith.body}
        relatedProducts={product.fitsWith.relatedProducts}
      />

      <FinalCTA
        headline={`See ${product.name} in your workflow.`}
        sub="30-minute demo. We'll show you the platform with your own workflows in mind."
        primaryCta={{ label: "Request demo", href: "/demo" }}
      />
    </div>
  );
}
