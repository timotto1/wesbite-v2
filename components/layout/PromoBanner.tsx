"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PROMO_BANNER } from "@/components/layout/promoBanner.config";

const INITIAL_DELAY_MS = 500;
const SLIDE_MS = 600;
const HOLD_BEFORE_GREY_MS = 3000;
const COLOR_FADE_MS = 1500;

const PURPLE_BG = "#AE78F1";
const PURPLE_FG = "#FFFFFF";
// End-state matches the page background colour (`paper`, --paper).
const GREY_BG = "#F6F5F6";
const GREY_FG = "#26045D";

export function PromoBanner() {
  const pathname = usePathname() ?? "";
  const allowed = (PROMO_BANNER.allowedPaths as readonly string[]).includes(
    pathname,
  );

  if (!allowed) return null;

  // `key={pathname}` remounts BannerAnimation on each navigation to an allowed
  // page, so the slide-in + colour fade re-fires every time and any local
  // dismiss state resets.
  return (
    <div className="overflow-hidden bg-white">
      <BannerAnimation key={pathname} />
    </div>
  );
}

function BannerAnimation() {
  const [slidIn, setSlidIn] = useState(false);
  const [showGrey, setShowGrey] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setSlidIn(true);
      setShowGrey(true);
      return;
    }

    const slideTimer = window.setTimeout(
      () => setSlidIn(true),
      INITIAL_DELAY_MS,
    );
    const greyTimer = window.setTimeout(
      () => setShowGrey(true),
      INITIAL_DELAY_MS + SLIDE_MS + HOLD_BEFORE_GREY_MS,
    );

    return () => {
      window.clearTimeout(slideTimer);
      window.clearTimeout(greyTimer);
    };
  }, []);

  const handleDismiss = () => {
    setSlidIn(false);
    window.setTimeout(() => setDismissed(true), SLIDE_MS);
  };

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Site announcement"
      style={{
        transition: `transform ${SLIDE_MS}ms ease-out, background-color ${COLOR_FADE_MS}ms ease-out, color ${COLOR_FADE_MS}ms ease-out`,
        transform: slidIn ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: showGrey ? GREY_BG : PURPLE_BG,
        color: showGrey ? GREY_FG : PURPLE_FG,
      }}
      className="relative flex items-center justify-center gap-x-3 gap-y-1 px-section py-2 text-[13px] font-light md:py-2.5"
    >
      <Link
        href={PROMO_BANNER.href}
        className="group inline-flex items-center gap-2 focus-visible:outline-none"
      >
        <span>{PROMO_BANNER.message}</span>
        <span
          aria-hidden
          className="underline-offset-4 group-hover:underline group-focus-visible:underline"
          style={{
            color: showGrey ? PURPLE_BG : "currentColor",
            transition: `color ${COLOR_FADE_MS}ms ease-out, transform 200ms ease-out`,
            display: "inline-block",
          }}
        >
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            {PROMO_BANNER.ctaLabel} →
          </span>
        </span>
      </Link>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={handleDismiss}
        className="absolute right-6 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-current opacity-80 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40 md:right-12"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M3 3l6 6M9 3l-6 6" />
        </svg>
      </button>
    </div>
  );
}
