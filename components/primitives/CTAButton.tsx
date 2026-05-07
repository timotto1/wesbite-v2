"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useContactPanel } from "@/components/contact/ContactPanelContext";

type CTAButtonProps = {
  variant: "primary" | "secondary";
  href: string;
  label: string;
  arrow?: boolean;
  className?: string;
};

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-[5px] border-hairline px-5 py-2 text-body-sm font-medium transition-colors duration-200";

const VARIANT: Record<CTAButtonProps["variant"], string> = {
  primary: "border-stairpay bg-stairpay text-paper hover:border-ink hover:bg-ink",
  secondary: "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
};

/** Hrefs that should open the contact slide-out instead of navigating. */
function isContactHref(href: string) {
  return href === "/demo";
}

export function CTAButton({ variant, href, label, arrow = false, className = "" }: CTAButtonProps) {
  const panel = useContactPanel();
  const opensPanel = panel != null && isContactHref(href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!opensPanel) return;
    // Honour the user's intent to open in a new tab / save target.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    panel.open();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${BASE} ${VARIANT[variant]} ${className}`}
    >
      <span>{label}</span>
      {arrow ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M3 6h6m0 0L6 3m3 3L6 9"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : null}
    </Link>
  );
}
