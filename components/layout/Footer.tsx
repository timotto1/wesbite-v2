import Link from "next/link";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Listings", href: "/products/listings" },
      { label: "Aftersales", href: "/products/aftersales" },
      { label: "Compliance", href: "/products/compliance" },
      { label: "Finance", href: "/products/finance" },
      { label: "Communications", href: "/products/comms" },
      { label: "Residents", href: "/products/resident-portal" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms & conditions", href: "/terms-and-conditions" },
      { label: "Cookie policy", href: "/legal/cookie-policy" },
      {
        label: "Accessibility statement",
        href: "/legal/accessibility",
      },
      {
        label: "Modern Slavery statement",
        href: "/legal/modern-slavery",
      },
    ],
  },
  {
    title: "Sign in",
    links: [{ label: "Platform login", href: "/login" }],
  },
];

const TRUST_BAND = [
  "Cyber Essentials",
  "UK GDPR",
  "UK-hosted",
  "WCAG 2.2 AA",
];

const META = [
  "© 2026 Stairpay Ltd",
  "Company no. 14018444",
  "Registered office: Lawford House, Albert Place, N3 1QA",
  "ICO registration ZB674517",
];

const isExternal = (href: string) => href.startsWith("http");

export function Footer() {
  return (
    <footer className="mt-32 bg-[#13022E] text-white">
      <div className="mx-auto w-full max-w-page px-section py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-eyebrow uppercase text-white/55">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      target={isExternal(l.href) ? "_blank" : undefined}
                      rel={isExternal(l.href) ? "noopener noreferrer" : undefined}
                      className="text-body-sm text-white/85 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust band */}
        <div className="mt-16">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-white/70">
            {TRUST_BAND.map((item, i) => (
              <li key={item} className="flex items-center gap-x-6">
                <span>{item}</span>
                {i < TRUST_BAND.length - 1 ? (
                  <span aria-hidden className="text-white/40">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        {/* Meta line */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-body-sm text-white/55 md:flex-row md:items-center">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {META.map((item, i) => (
              <li key={item} className="flex items-center gap-x-3">
                <span>{item}</span>
                {i < META.length - 1 ? <span aria-hidden>·</span> : null}
              </li>
            ))}
          </ul>
          <Link
            href="https://www.linkedin.com/company/stairpay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stairpay on LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
