"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/animation/Reveal";
import { ListingsPreview } from "@/components/sections/previews/ListingsPreview";
import { FinancePreview } from "@/components/sections/previews/FinancePreview";
import { CompliancePreview } from "@/components/sections/previews/CompliancePreview";
import { CommsPreview } from "@/components/sections/previews/CommsPreview";
import { ResidentPortalPreview } from "@/components/sections/previews/ResidentPortalPreview";
import { AftersalesPreview } from "@/components/sections/previews/AftersalesPreview";
import { ListingsModalPreview } from "@/components/sections/previews/ListingsModalPreview";

type Product = {
  slug: string;
  name: string;
  outcome: string;
  proof: string;
  benefits: string[];
};

type ProductSuiteGridProps = {
  headline: string;
  headlineMuted?: string;
  products: Product[];
};

const SPAN_BY_SLUG: Record<string, string> = {
  listings: "lg:col-span-2",
  aftersales: "lg:col-span-3",
};

const SHORT_BY_SLUG: Record<string, string> = {
  listings: "mb-[-72px]",
  "resident-portal": "mb-[-72px]",
};

export function ProductSuiteGrid({ headline, headlineMuted, products }: ProductSuiteGridProps) {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section
      className="border-t border-rule bg-white"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div className="mx-auto w-full max-w-page px-section py-24">
        <Reveal>
          <h3 className="max-w-3xl text-heading-md !font-medium md:text-heading-lg">
            <span className="text-ink">{headline}</span>
            {headlineMuted ? <span className="text-ink-muted"> {headlineMuted}</span> : null}
          </h3>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={120 + i * 140} className={SPAN_BY_SLUG[p.slug]}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActive(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(p);
                  }
                }}
                className={`group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-card bg-paper p-8 text-left transition-transform duration-300 ease-out hover:scale-[1.015] ${SHORT_BY_SLUG[p.slug] ?? ""}`}
              >
                <span
                  aria-hidden
                  className="absolute right-6 top-6 text-ink opacity-0 transition-all duration-300 ease-out translate-y-2 -translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 15 15 5" />
                    <path d="M6.5 5h8.5v8.5" />
                  </svg>
                </span>
                <p className="text-eyebrow uppercase text-ink-muted">{p.name}</p>
                <p className="mt-4 text-heading-md !font-medium text-ink transition-colors duration-200 group-hover:text-stairpay">
                  {p.outcome}
                </p>
                {p.slug === "listings" ? (
                  <div aria-hidden className="mt-8 aspect-[16/10] w-full">
                    <ListingsPreview />
                  </div>
                ) : p.slug === "finance" ? (
                  <div aria-hidden className="mt-8 aspect-[5/4] w-full">
                    <FinancePreview />
                  </div>
                ) : p.slug === "compliance" ? (
                  <div aria-hidden className="mt-8 aspect-[5/4] w-full">
                    <CompliancePreview />
                  </div>
                ) : p.slug === "comms" ? (
                  <div aria-hidden className="mt-8 aspect-[5/4] w-full min-h-0 overflow-hidden">
                    <CommsPreview />
                  </div>
                ) : p.slug === "resident-portal" ? (
                  <div aria-hidden className="mt-8 w-full flex-1 min-h-0">
                    <ResidentPortalPreview />
                  </div>
                ) : p.slug === "aftersales" ? (
                  <div aria-hidden className="mt-8 aspect-[16/6] w-full">
                    <AftersalesPreview />
                  </div>
                ) : (
                  <div aria-hidden className="mt-8 aspect-[16/10] w-full" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <ProductModal key={active.slug} product={active} onClose={() => setActive(null)} />
      ) : null}
    </section>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => setShown(true));
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(raf);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} details`}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 pb-0 pt-[6vh] sm:px-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        style={{
          backgroundImage: [
            "radial-gradient(at 18% 22%, rgba(229,218,251,0.65) 0%, rgba(229,218,251,0) 55%)",
            "radial-gradient(at 82% 18%, rgba(174,120,241,0.55) 0%, rgba(174,120,241,0) 50%)",
            "radial-gradient(at 30% 85%, rgba(113,20,226,0.45) 0%, rgba(113,20,226,0) 55%)",
            "radial-gradient(at 78% 78%, rgba(78,0,204,0.5) 0%, rgba(78,0,204,0) 55%)",
            "radial-gradient(at 50% 50%, rgba(38,4,93,0.35) 0%, rgba(38,4,93,0.18) 100%)",
          ].join(", "),
        }}
        className={`fixed inset-0 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`relative z-10 w-full max-w-5xl rounded-card bg-paper-card p-8 shadow-2xl transition-all duration-500 ease-out md:p-10 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-[60vh] opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-paper-panel hover:text-ink"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M4 4l10 10M14 4L4 14" />
          </svg>
        </button>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col">
            <p className="text-eyebrow uppercase text-ink-muted">{product.name}</p>
            <h3 className="mt-3 text-heading-lg text-ink">{product.outcome}</h3>
            <p className="mt-4 text-body-md text-ink-muted">{product.proof}</p>
            <div className="mt-6">
              <Link
                href={`/products/${product.slug}`}
                className="group inline-flex items-center gap-2 rounded-[5px] bg-stairpay px-5 py-3 text-body-sm font-medium text-paper transition-colors hover:bg-ink"
              >
                Explore {product.name}
                <span
                  aria-hidden
                  className="inline-flex translate-x-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10" />
                    <path d="M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <ul className="flex flex-col gap-3 md:pt-10">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-body-sm text-ink-muted">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#AE78F1]/25 text-[#AE78F1]">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 5.5 4.5 8l4.5-5" />
                  </svg>
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {product.slug === "listings" ? (
          <div className="mt-10">
            <ListingsModalPreview />
          </div>
        ) : (
          <div
            aria-hidden
            className="mt-10 flex aspect-[16/8] w-full items-center justify-center overflow-hidden rounded-card border border-dashed border-rule bg-paper-panel/60"
          >
            <span className="text-eyebrow uppercase tracking-wider text-ink-light">
              {product.name} preview
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
