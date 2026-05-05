import type { ReactNode } from "react";

export type CTALink = { label: string; href: string };

export type HeroStagedProps = {
  eyebrow?: string;
  stat?: { label: string; value: string };
  headline: string;
  headlineMuted?: string;
  sub: string;
  primaryCta: CTALink;
  secondaryCta?: CTALink;
  illustration: ReactNode;
};

export type ProductSpotlightProps = {
  headline: string;
  headlineMuted?: string;
  body: string;
  illustration: ReactNode;
  layout: "image-right" | "image-left" | "image-below";
  panelTone?: "paper" | "soft-purple";
};

export type FeatureItem = {
  leadPhrase: string;
  body: string;
  inlineLink?: { text: string; href: string };
};

export type FeatureStackProps = {
  eyebrow?: string;
  headline: string;
  headlineMuted?: string;
  features: FeatureItem[];
  illustration?: ReactNode;
};

export type DiagramSectionProps = {
  eyebrow?: string;
  headline: string;
  body?: string;
  diagram: ReactNode;
  layout: "diagram-right" | "diagram-below";
};

export type Metric = { label: string; value: string };

export type CaseStudy = {
  haName: string;
  headlineResult: string;
  body: string;
  quote: { text: string; author: string; role: string };
  href: string;
};

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
    items: FeatureItem[];
  };
  metrics: Metric[];
  diagramBrief: string;
  fitsWith: {
    headline: string;
    body: string;
    relatedProducts: string[];
  };
  caseStudy?: Omit<CaseStudy, "href">;
};
