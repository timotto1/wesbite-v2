import { landing } from "@/content/landing";
import { HeroLanding } from "@/components/sections/HeroLanding";
import { LogoStrip } from "@/components/primitives/LogoStrip";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { AudienceCards } from "@/components/sections/AudienceCards";
import { ProductSuiteGrid } from "@/components/sections/ProductSuiteGrid";
import { Pillars } from "@/components/sections/Pillars";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MacbookDemo } from "@/components/demo/product/MacbookDemo";

export default function LandingPage() {
  return (
    <>
      <HeroLanding
        stat={landing.hero.stat}
        headline={landing.hero.headline}
        sub={landing.hero.sub}
        primaryCta={landing.hero.primaryCta}
        secondaryCta={landing.hero.secondaryCta}
        illustration={<MacbookDemo />}
      />

      <LogoStrip
        intro={landing.logoStrip.intro}
        introHighlight={landing.logoStrip.introHighlight}
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

      <AudienceCards subtitle={landing.builtFor.subtitle} />

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
