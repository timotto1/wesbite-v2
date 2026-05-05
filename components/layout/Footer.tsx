import Link from "next/link";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Listings", href: "/products/listings" },
      { label: "Resident Portal", href: "/products/resident-portal" },
      { label: "Comms", href: "/products/comms" },
      { label: "Compliance", href: "/products/compliance" },
      { label: "Finance", href: "/products/finance" },
      { label: "Aftersales", href: "/products/aftersales" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/company#careers" },
      { label: "Contact", href: "/company#contact" },
      { label: "Together for Homes", href: "/together-for-homes" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Security", href: "/security" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "DPA", href: "/legal/dpa" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline border-rule">
      <div className="mx-auto w-full max-w-page px-section py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-eyebrow uppercase text-ink-muted">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-body-sm text-ink hover:text-stairpay"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline border-rule pt-8 md:flex-row md:items-center">
          <div className="flex items-baseline gap-4">
            <span className="text-heading-sm font-medium text-ink">stairpay</span>
            <span className="text-body-sm text-ink-light">
              © {new Date().getFullYear()} Stairpay
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-body-sm text-ink-muted">
              <span aria-hidden className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stairpay opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-stairpay" />
              </span>
              All systems operational
            </span>
            <Link
              href="https://www.linkedin.com/company/stairpay"
              className="text-body-sm text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
