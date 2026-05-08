"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";

type Module = {
  slug: string;
  name: string;
  tagline: string;
  /** Tailwind background colour for the placeholder card. */
  tone: string;
};

const MODULES: Module[] = [
  {
    slug: "listings",
    name: "Listings",
    tagline: "Every home, every channel, one place.",
    tone: "bg-[#F4F0FE]",
  },
  {
    slug: "resident-portal",
    name: "Resident Portal",
    tagline: "Self-service that actually serves.",
    tone: "bg-[#FFE9D7]",
  },
  {
    slug: "comms",
    name: "Comms",
    tagline: "Comms that don\u2019t get lost.",
    tone: "bg-[#DCEFE3]",
  },
  {
    slug: "compliance",
    name: "Compliance",
    tagline: "Compliance, on autopilot.",
    tone: "bg-[#E0E8FB]",
  },
  {
    slug: "finance",
    name: "Finance",
    tagline: "Numbers that reconcile themselves.",
    tone: "bg-[#FCE0EA]",
  },
  {
    slug: "aftersales",
    name: "Aftersales",
    tagline: "The handover doesn\u2019t end at handover.",
    tone: "bg-[#F2EAB6]",
  },
];

type OnePlatformCarouselProps = {
  /** The currently-viewed product page slug — selects the initial card. */
  activeSlug: string;
};

export function OnePlatformCarousel({ activeSlug }: OnePlatformCarouselProps) {
  const initialIndex = Math.max(
    0,
    MODULES.findIndex((m) => m.slug === activeSlug),
  );
  const [active, setActive] = useState(initialIndex);
  const [prevSlug, setPrevSlug] = useState(activeSlug);

  // Keep the active card in sync if the page-provided slug changes
  // (e.g., during client-side route transitions).
  if (prevSlug !== activeSlug) {
    setPrevSlug(activeSlug);
    const idx = MODULES.findIndex((m) => m.slug === activeSlug);
    if (idx >= 0) setActive(idx);
  }

  return (
    <section
      className="bg-white py-24"
      style={{
        // Break out of the parent's max-w-page so the white background spans
        // the full viewport while inner content stays within max-w-page.
        marginLeft: "calc(50% - 50vw)",
        width: "100vw",
      }}
    >
      <div className="mx-auto w-full max-w-page px-section">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px]">
            The Shared Ownership platform that does everything.
          </h2>
        </Reveal>
      </div>

      <div className="mt-14">
        <CarouselTrack active={active} onSelect={setActive} />
        <PillNav active={active} onSelect={setActive} />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Carousel track — peek cards either side of the active.
   ───────────────────────────────────────────────────────── */
function CarouselTrack({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        // Span the full viewport, escaping the parent's max-w-page padding.
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
      }}
    >
      <div
        className="flex items-stretch transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          // Centre the active card in the viewport.
          // Track origin sits at 50vw - (active * (cardWidth + gap)) - cardWidth/2.
          transform: `translateX(calc(50vw - ${active} * (var(--carousel-card-w) + var(--carousel-gap)) - var(--carousel-card-w) / 2))`,
          // Tailwind doesn't have arbitrary CSS-var declarations, so set inline.
          ["--carousel-card-w" as string]: "min(720px, 56vw)",
          ["--carousel-gap" as string]: "16px",
        }}
      >
        {MODULES.map((m, i) => {
          const offset = i - active;
          return (
            <CarouselCard
              key={m.slug}
              module={m}
              isActive={offset === 0}
              fadeSide={offset === -1 ? "left" : offset === 1 ? "right" : null}
              onClick={() => onSelect(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

function CarouselCard({
  module,
  isActive,
  fadeSide,
  onClick,
}: {
  module: Module;
  isActive: boolean;
  /** Which side of the active card this card is on — drives the fade-to-white overlay. */
  fadeSide: "left" | "right" | null;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${module.name} card`}
      aria-current={isActive ? "true" : undefined}
      tabIndex={isActive ? 0 : -1}
      className={`group relative flex aspect-[16/10] flex-none cursor-pointer flex-col justify-center overflow-hidden rounded-card p-10 text-left transition-[opacity,transform] duration-700 ease-out ${module.tone}`}
      style={{
        width: "var(--carousel-card-w)",
        marginRight: "var(--carousel-gap)",
      }}
    >
      <div>
        <p className="text-eyebrow uppercase text-ink-muted">{module.name}</p>
        <h3 className="mt-5 max-w-[90%] text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
          {module.tagline}
        </h3>
      </div>

      {/* Fade-to-white overlay on cards immediately adjacent to the active.
          The visible portion of an adjacent card is only the half facing the
          centre, so the gradient ramps from transparent (inner edge, near the
          active card) to opaque white well within the first half of the card
          — by the time the eye reaches the screen edge, the card has fully
          dissolved into the page. */}
      {fadeSide ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
          style={{
            background:
              fadeSide === "left"
                ? "linear-gradient(to left, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%)"
                : "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%)",
          }}
        />
      ) : null}

      {/* Bottom-right CTA badge — always rendered, shown when active. */}
      <span
        className={`absolute bottom-6 right-6 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          href={`/products/${module.slug}`}
          onClick={(e) => e.stopPropagation()}
          aria-label={`Explore ${module.name}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition-colors hover:bg-stairpay"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 11 11 3" />
            <path d="M5 3h6v6" />
          </svg>
        </Link>
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
   Pill bar navigation
   ───────────────────────────────────────────────────────── */
function PillNav({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="flex items-center gap-1 rounded-pill bg-paper-card p-1.5">
        {MODULES.map((m, i) => (
          <button
            key={m.slug}
            type="button"
            onClick={() => onSelect(i)}
            aria-pressed={i === active}
            className={`rounded-pill px-4 py-2 text-body-sm font-medium transition-colors duration-200 ${
              i === active
                ? "bg-ink text-paper"
                : "text-ink-muted hover:bg-paper-panel hover:text-ink"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>
    </div>
  );
}
