"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CTAButton } from "@/components/primitives/CTAButton";

const PRODUCTS = [
  { slug: "listings", name: "Listings", desc: "Plot-to-portal listing engine" },
  { slug: "resident-portal", name: "Resident Portal", desc: "Self-service for residents" },
  { slug: "comms", name: "Comms", desc: "Connected messaging and updates", comingSoon: true },
  { slug: "compliance", name: "Compliance", desc: "Document control and audits" },
  { slug: "finance", name: "Finance", desc: "Rent, service charge, billing", comingSoon: true },
  { slug: "aftersales", name: "Aftersales", desc: "Staircasing and resales" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/cookies", label: "Cookie policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/dpa", label: "Data processing" },
  { href: "/security", label: "Security" },
];

const NAV_LINKS = [
  { href: "/company", label: "Company", match: /^\/company/ },
  { href: "/blog", label: "Resources", match: /^\/blog|^\/resources/ },
];

export function TopNav() {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const productActive = pathname.startsWith("/products");
  const isDarkHero = pathname === "/products/finance";
  const [platformOpen, setPlatformOpen] = useState(false);
  const [navigating, setNavigating] = useState(false);

  const closePanel = () => setPlatformOpen(false);

  const handleDrawerNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    closePanel();
    setNavigating(true);
    window.setTimeout(() => {
      router.push(href);
      window.setTimeout(() => setNavigating(false), 250);
    }, 600);
  };

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 top-[56px] z-[45] bg-white"
        style={{
          opacity: navigating ? 1 : 0,
          transition: `opacity ${navigating ? 600 : 700}ms cubic-bezier(0.22,1,0.36,1)`,
        }}
      />
    <header
      className={`sticky top-0 z-50 ${
        isDarkHero
          ? "bg-white/10 backdrop-blur-md"
          : "bg-white"
      }`}
      onMouseLeave={closePanel}
    >
      <nav className="mx-auto flex h-[56px] w-full max-w-page items-center px-section">
        <Link
          href="/"
          aria-label="Stairpay home"
          onMouseEnter={closePanel}
          className={`flex items-center gap-2 font-sans text-[18px] font-semibold lowercase leading-none tracking-[-0.01em] transition-opacity duration-200 hover:opacity-80 ${
            isDarkHero ? "text-white" : "text-ink"
          }`}
        >
          <span
            aria-hidden
            className={`h-2 w-2 rounded-[2px] ${
              isDarkHero ? "bg-white" : "bg-stairpay"
            }`}
          />
          stairpay
        </Link>

        <div
          className={`ml-10 hidden items-center gap-7 text-body-sm font-light md:flex ${
            isDarkHero ? "text-white/70" : "text-ink-muted"
          }`}
        >
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={platformOpen}
            onMouseEnter={() => setPlatformOpen(true)}
            onFocus={() => setPlatformOpen(true)}
            className={`flex items-center gap-1.5 transition-colors duration-200 ${
              productActive || platformOpen
                ? isDarkHero ? "text-white" : "text-ink"
                : isDarkHero ? "hover:text-white" : "hover:text-ink"
            }`}
          >
            Platform
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden
              className={`transition-transform duration-300 ${
                platformOpen ? "rotate-180" : ""
              }`}
            >
              <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.25" fill="none" />
            </svg>
          </button>
          {NAV_LINKS.map((l) => {
            const active = l.match.test(pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={closePanel}
                className={`relative transition-colors duration-200 ${
                  active
                    ? isDarkHero ? "text-white" : "text-ink"
                    : isDarkHero ? "hover:text-white" : "hover:text-ink"
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

        <div
          className="ml-auto flex items-center gap-3"
          onMouseEnter={closePanel}
        >
          <CTAButton
            variant="secondary"
            href="/login"
            label="Log in"
            className={
              isDarkHero
                ? "!border-white !text-white hover:!bg-white hover:!text-ink"
                : ""
            }
          />
          <CTAButton
            variant="primary"
            href="/demo"
            label="Contact sales"
            className={
              isDarkHero
                ? "!border-white !bg-white !text-ink hover:!border-white hover:!bg-white/90 hover:!text-ink"
                : ""
            }
          />
        </div>
      </nav>

      {/* Backdrop blur over the page beneath the drawer when open */}
      <div
        aria-hidden
        onMouseEnter={closePanel}
        className={`fixed inset-x-0 bottom-0 top-[56px] backdrop-blur-md transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          platformOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Full-width Platform panel — slides down beneath the nav. */}
      <div
        aria-hidden={!platformOpen}
        className={`absolute inset-x-0 top-full overflow-hidden bg-white transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          platformOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-page px-section py-12">
          <div className="flex flex-col gap-10 md:flex-row md:gap-40 md:pl-[8.5rem]">
            <div>
              <StaggerItem open={platformOpen} delay={80}>
                <p className="text-[11px] font-normal tracking-wider text-ink-muted">
                  Modules
                </p>
              </StaggerItem>
              <div className="mt-5 flex flex-col gap-2.5">
                {PRODUCTS.map((p, i) => (
                  <StaggerItem key={p.slug} open={platformOpen} delay={130 + i * 50}>
                    <Link
                      href={`/products/${p.slug}`}
                      onClick={(e) => handleDrawerNav(e, `/products/${p.slug}`)}
                      className="group/module flex items-center gap-2 text-heading-md font-medium text-ink transition-colors duration-150 hover:text-stairpay"
                    >
                      {p.name}
                      {p.comingSoon ? (
                        <span className="rounded-full bg-stairpay/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-stairpay">
                          Coming soon
                        </span>
                      ) : null}
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </div>
            <div>
              <StaggerItem open={platformOpen} delay={280}>
                <p className="text-[11px] font-normal tracking-wider text-ink-muted">
                  Legal
                </p>
              </StaggerItem>
              <div className="mt-5 flex flex-col gap-2.5">
                {LEGAL_LINKS.map((l, i) => (
                  <StaggerItem key={l.href} open={platformOpen} delay={330 + i * 50}>
                    <Link
                      href={l.href}
                      onClick={(e) => handleDrawerNav(e, l.href)}
                      className="text-body-sm font-normal text-ink-muted transition-colors duration-150 hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

function StaggerItem({
  open,
  delay,
  children,
}: {
  open: boolean;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "400ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: open ? `${delay}ms` : "0ms",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-6px)",
      }}
    >
      {children}
    </div>
  );
}
