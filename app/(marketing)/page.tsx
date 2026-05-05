import { landing } from "@/content/landing";
import { HeroStaged } from "@/components/sections/HeroStaged";
import { LogoStrip } from "@/components/primitives/LogoStrip";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { BuiltForSection } from "@/components/sections/BuiltForSection";
import { ProductSuiteGrid } from "@/components/sections/ProductSuiteGrid";
import { Pillars } from "@/components/sections/Pillars";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ProductDemoWindow } from "@/components/demo/product/ProductDemoWindow";

export default function LandingPage() {
  return (
    <>
      <HeroStaged
        stat={landing.hero.stat}
        headline={landing.hero.headline}
        sub={landing.hero.sub}
        primaryCta={landing.hero.primaryCta}
        secondaryCta={landing.hero.secondaryCta}
        illustration={<ProductDemoWindow />}
      />

      <LogoStrip
        intro={landing.logoStrip.intro}
        logos={landing.logoStrip.logos}
      />

      <ProblemStatement
        headline={landing.problem.headline}
        body={landing.problem.body}
      />

      <ProductSuiteGrid
        headline={landing.productSuite.headline}
        headlineMuted={landing.productSuite.headlineMuted}
        products={landing.productSuite.products}
      />

      <BuiltForSection
        headline={landing.builtFor.headline}
        headlineMuted={landing.builtFor.headlineMuted}
        subtitle={landing.builtFor.subtitle}
      />

      <Pillars
        headline={landing.pillars.headline}
        items={landing.pillars.items}
      />

      <IntegrationsGrid
        eyebrow={landing.integrations.eyebrow}
        headline={landing.integrations.headline}
        body={landing.integrations.body}
        categories={landing.integrations.categories}
      />

      <CaseStudiesGrid
        eyebrow={landing.caseStudies.eyebrow}
        headline={landing.caseStudies.headline}
        items={landing.caseStudies.items}
      />

      <FinalCTA
        headline={landing.finalCta.headline}
        sub={landing.finalCta.sub}
        primaryCta={landing.finalCta.primaryCta}
      />
    </>
  );
}
