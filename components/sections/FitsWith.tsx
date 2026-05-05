import Link from "next/link";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { TwoSidedDiagram } from "@/components/primitives/TwoSidedDiagram";
import { Reveal } from "@/components/animation/Reveal";

const PRODUCT_NAMES: Record<string, string> = {
  listings: "Listings",
  "resident-portal": "Resident Portal",
  comms: "Comms",
  compliance: "Compliance",
  finance: "Finance",
  aftersales: "Aftersales",
};

type FitsWithProps = {
  eyebrow?: string;
  headline: string;
  body: string;
  relatedProducts: string[];
};

export function FitsWith({
  eyebrow,
  headline,
  body,
  relatedProducts,
}: FitsWithProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24">
      <div className="grid grid-cols-12 items-center gap-12">
        <Reveal className="col-span-12 md:col-span-5">
          {eyebrow ? <EyebrowLabel>{eyebrow}</EyebrowLabel> : null}
          <h2 className="mt-4 text-heading-xl text-ink">{headline}</h2>
          <p className="mt-6 text-body-lg text-ink-muted">{body}</p>
          {relatedProducts.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {relatedProducts.map((slug, i) => (
                <Reveal key={slug} delay={140 + i * 60}>
                  <Link
                    href={`/products/${slug}`}
                    className="group inline-flex items-center gap-2 rounded-pill border-hairline border-rule bg-paper-card px-4 py-2 text-body-sm text-ink transition-all duration-200 hover:border-stairpay hover:text-stairpay"
                  >
                    {PRODUCT_NAMES[slug] ?? slug}
                    <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : null}
        </Reveal>
        <Reveal className="col-span-12 md:col-span-7" delay={160}>
          <div className="rounded-card border-hairline border-rule bg-paper-card p-6">
            <TwoSidedDiagram />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
