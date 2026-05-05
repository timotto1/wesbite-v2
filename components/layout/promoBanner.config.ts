// Edit copy, link target, and the page allowlist here.

export const PROMO_BANNER = {
  message: "A letter from our CEO on the future of Shared Ownership.",
  ctaLabel: "Read",
  href: "/blog/letter-from-our-ceo",
  // Banner appears on these exact pathnames only — nowhere else.
  allowedPaths: [
    "/",
    "/products/listings",
    "/products/resident-portal",
    "/products/compliance",
    "/products/aftersales",
  ],
} as const;
