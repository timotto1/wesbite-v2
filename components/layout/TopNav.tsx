"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTAButton } from "@/components/primitives/CTAButton";

const PRODUCTS = [
  { slug: "listings", name: "Listings", desc: "Plot-to-portal listing engine" },
  { slug: "resident-portal", name: "Resident Portal", desc: "Self-service for residents" },
  { slug: "comms", name: "Comms", desc: "Connected messaging and updates" },
  { slug: "compliance", name: "Compliance", desc: "Document control and audits" },
  { slug: "finance", name: "Finance", desc: "Rent, service charge, billing" },
  { slug: "aftersales", name: "Aftersales", desc: "Staircasing and resales" },
];

const NAV_LINKS = [
  { href: "/customers", label: "Customers", match: /^\/customers|^\/case-studies/ },
  { href: "/together-for-homes", label: "Partners", match: /^\/together-for-homes/ },
  { href: "/company", label: "Company", match: /^\/company/ },
  { href: "/blog", label: "Resources", match: /^\/blog|^\/resources/ },
];

export function TopNav() {
  const pathname = usePathname() ?? "/";
  const productActive = pathname.startsWith("/products");

  return (
    <header className="sticky top-0 z-50 border-b border-hairline border-rule/80 bg-white">
      <nav className="flex h-[56px] w-full items-center px-section">
        <Link
          href="/"
          aria-label="Stairpay home"
          className="flex items-center gap-2 font-sans text-[18px] font-semibold lowercase leading-none tracking-[-0.01em] text-ink transition-opacity duration-200 hover:opacity-80"
        >
          <span aria-hidden className="h-2 w-2 rounded-[2px] bg-stairpay" />
          stairpay
        </Link>

        <div className="ml-10 hidden items-center gap-7 text-body-sm font-medium text-ink-muted md:flex">
          <ProductDropdown active={productActive} />
          {NAV_LINKS.map((l) => {
            const active = l.match.test(pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative transition-colors duration-200 ${
                  active ? "text-ink" : "hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -bottom-1.5 left-0 right-0 mx-auto h-[1.5px] origin-center bg-stairpay transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <CTAButton variant="secondary" href="/login" label="Log in" />
          <CTAButton variant="primary" href="/demo" label="Contact sales" />
        </div>
      </nav>
    </header>
  );
}

function ProductDropdown({ active }: { active: boolean }) {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        className={`flex items-center gap-1.5 transition-colors duration-200 ${
          active ? "text-ink" : "hover:text-ink"
        }`}
      >
        Platform
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden
          className="transition-transform duration-200 group-hover:rotate-180"
        >
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.25" fill="none" />
        </svg>
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-[420px] -translate-x-1/2 -translate-y-1 rounded-xl border-hairline border-rule bg-paper-card p-2 opacity-0 shadow-[0_20px_40px_-12px_rgba(38,4,93,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid grid-cols-2 gap-1">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group/item flex flex-col gap-0.5 rounded-md px-3 py-2 transition-colors duration-150 hover:bg-paper-panel"
            >
              <span className="text-body-sm font-medium text-ink">{p.name}</span>
              <span className="text-[12px] leading-snug text-ink-muted">{p.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
