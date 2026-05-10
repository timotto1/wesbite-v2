import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, productSlugs } from "@/content/products";
import { landing } from "@/content/landing";
import { HeroStaged } from "@/components/sections/HeroStaged";
import { FinanceFullHero } from "@/components/sections/FinanceFullHero";
import { CommsFullHero } from "@/components/sections/CommsFullHero";
import { BenefitsRow } from "@/components/sections/BenefitsRow";
import { ProductFeaturesSection } from "@/components/sections/ProductFeaturesSection";
import { AftersalesNumbersGrid } from "@/components/sections/AftersalesNumbersGrid";
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
import { ResidentPortalHeroPhone } from "@/components/illustrations/ResidentPortalHeroPhone";
import {
  ResidentChatIllustration,
  ResidentProgressIllustration,
  ResidentInstructionIllustration,
  ResidentRecordIllustration,
} from "@/components/illustrations/ResidentPortalFeatureIllustrations";
import { AftersalesStaircaseChart } from "@/components/illustrations/AftersalesStaircaseChart";
import { AftersalesNurtureNotifications } from "@/components/illustrations/AftersalesNurtureNotifications";
import { AftersalesPipelineMI } from "@/components/illustrations/AftersalesPipelineMI";
import { AftersalesPropensityScores } from "@/components/illustrations/AftersalesPropensityScores";

const ResidentBackgroundPanel = () => (
  <div
    className="h-full w-full rounded-card bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/resident/resident-portal-background.png')",
    }}
  />
);

const AftersalesCaseManagerPanel = () => (
  <div
    className="relative h-full w-full overflow-hidden rounded-card bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/resident/resident-portal-background.png')",
    }}
  >
    {/* Laptop scaled to fill the height — anchored to the left with a thin
        gradient strip showing, right side cropped beyond the container. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/images/aftersales/case-manager.png"
      alt="Stairpay case management dashboard"
      className="absolute -bottom-[10%] left-[6%] h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_30px_55px_rgba(38,4,93,0.30)]"
    />
  </div>
);

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
  "resident-portal": [
    <ResidentChatIllustration key="rp-chat" />,
    <ResidentProgressIllustration key="rp-progress" />,
    <ResidentInstructionIllustration key="rp-instruction" />,
    <ResidentRecordIllustration key="rp-record" />,
  ],
  aftersales: [
    <AftersalesNurtureNotifications key="as-1" />,
    <AftersalesPropensityScores key="as-2" />,
    <AftersalesCaseManagerPanel key="as-3" />,
    <AftersalesPipelineMI key="as-4" />,
  ],
};

const HEROES: Record<string, React.ReactNode> = {
  listings: <ListingsHero />,
  "resident-portal": (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/resident/resident-portal-background.png')",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <ResidentPortalHeroPhone />
      </div>
    </div>
  ),
  comms: <CommsHero />,
  compliance: <ComplianceHero />,
  finance: <FinanceHero />,
  aftersales: (
    <div className="aspect-[5/4] w-full">
      <AftersalesStaircaseChart />
    </div>
  ),
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

          {product.slug === "aftersales" ? <AftersalesNumbersGrid /> : null}

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
