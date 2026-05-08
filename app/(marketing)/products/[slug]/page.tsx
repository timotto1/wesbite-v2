import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, productSlugs } from "@/content/products";
import { landing } from "@/content/landing";
import { HeroStaged } from "@/components/sections/HeroStaged";
import { FinanceFullHero } from "@/components/sections/FinanceFullHero";
import { CommsFullHero } from "@/components/sections/CommsFullHero";
import { BenefitsRow } from "@/components/sections/BenefitsRow";
import { ProductFeaturesSection } from "@/components/sections/ProductFeaturesSection";
import { MetricsAnatomy } from "@/components/sections/MetricsAnatomy";
import { OnePlatformCarousel } from "@/components/sections/OnePlatformCarousel";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ListingsHero,
  ResidentPortalHero,
  CommsHero,
  FinanceHero,
  AftersalesHero,
} from "@/components/illustrations/ProductHeroes";
import { ComplianceHero } from "@/components/illustrations/ComplianceHero";
import { ComplianceFeature1 } from "@/components/illustrations/ComplianceFeature1";
import { ComplianceFeature2 } from "@/components/illustrations/ComplianceFeature2";
import { ComplianceFeature3 } from "@/components/illustrations/ComplianceFeature3";
import { ComplianceFeature4 } from "@/components/illustrations/ComplianceFeature4";
import {
  ListingsDiagram,
  ResidentPortalDiagram,
  CommsDiagram,
  ComplianceDiagram,
  FinanceDiagram,
  AftersalesDiagram,
} from "@/components/illustrations/ProductDiagrams";
import {
  ComplianceFeatureBackground,
  ListingsFeature1,
  ListingsFeature2,
} from "@/components/illustrations/ProductHeroes";
import { ListingsFeature3 } from "@/components/illustrations/ListingsFeature3";
import { ListingsFeature4 } from "@/components/illustrations/ListingsFeature4";

const FEATURE_ILLUSTRATIONS: Record<string, React.ReactNode[]> = {
  listings: [
    <ListingsFeature1 key="syndication" />,
    <ListingsFeature2 key="eligibility" />,
    <ListingsFeature3 key="case" />,
    <ListingsFeature4 key="velocity" />,
  ],
  compliance: [
    <ComplianceFeature1 key="compliance-1" />,
    <ComplianceFeature2 key="compliance-2" />,
    <ComplianceFeature3 key="compliance-3" />,
    <ComplianceFeature4 key="compliance-4" />,
  ],
};

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

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const product = products[params.slug];
  if (!product) return {};
  return {
    title: `${product.name} — Stairpay`,
    description: product.hero.sub,
  };
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products[params.slug];
  if (!product) notFound();

  const fallbackBenefits =
    landing.productSuite.products.find((p) => p.slug === product.slug)
      ?.benefits ?? [];
  const benefits =
    product.outcomes ??
    fallbackBenefits.map((heading) => ({ heading }));

  const heroOnly = product.slug === "finance" || product.slug === "comms";

  return (
    <div
      className={`md:px-6 lg:px-12 xl:px-20 ${heroOnly ? "-mb-32" : ""}`}
    >
      {product.slug === "finance" ? <FinanceFullHero /> : null}
      {product.slug === "comms" ? <CommsFullHero /> : null}

      {heroOnly ? (
        <OnePlatformCarousel activeSlug={product.slug} />
      ) : null}

      {!heroOnly ? (
        <>
          <HeroStaged
            eyebrow={product.name}
            headline={product.hero.headline}
            headlineMuted={product.hero.headlineMuted}
            sub={product.hero.sub}
            primaryCta={{ label: "Contact sales", href: "/demo" }}
            illustration={HEROES[product.slug]}
          />

          {benefits.length ? <BenefitsRow benefits={benefits} /> : null}

          <ProductFeaturesSection
            features={product.richFeatures ?? product.features.items}
            illustrations={FEATURE_ILLUSTRATIONS[product.slug]}
          />

          {product.slug === "aftersales" && product.metrics.length ? (
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

          <OnePlatformCarousel activeSlug={product.slug} />

          <FinalCTA
            headline={`See ${product.name} in your workflow.`}
            primaryCta={{ label: "Contact sales", href: "/demo" }}
          />
        </>
      ) : null}
    </div>
  );
}
