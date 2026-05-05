"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Composite illustration for the Listings card.
 *
 * Cycles between two example listings to show the product handling more than
 * one shape of inventory. Numbers and images change; labels stay constant.
 *
 * On each swap both the outgoing and incoming values are mounted at once: the
 * old slides off in one direction while the new slides in from the opposite
 * side, so there's no white-space gap between them. Phone hero + desktop
 * image thumbs slide horizontally; text values slide vertically.
 */

type Listing = {
  addressLine1: string;
  addressLine2: string;
  postcode: string;
  fullMarketValue: string;
  initialShare: string;
  initialPrice: string;
  fullAddress: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  size: string;
  tenure: string;
  sharedOwnership: string;
  images: string[];
};

const SLIDE_MS = 1200;
const HOLD_MS = 4500;

const LISTINGS: Listing[] = [
  {
    addressLine1: "14 Bishop's Way",
    addressLine2: "Maple Avenue",
    postcode: "BO90 4YA",
    fullMarketValue: "£285,000",
    initialShare: "50%",
    initialPrice: "£142,500",
    fullAddress: "14 Bishop's Way, Maple Avenue, BO90 4YA",
    propertyType: "Terraced",
    bedrooms: "3",
    bathrooms: "2",
    size: "Ask agent",
    tenure: "Leasehold",
    sharedOwnership: "50%",
    images: [
      "/images/listings/exterior.png",
      "/images/listings/kitchen.png",
      "/images/listings/living.png",
      "/images/listings/bedroom.png",
      "/images/listings/development.png",
    ],
  },
  {
    addressLine1: "9 Royal Crescent",
    addressLine2: "Westgate",
    postcode: "BS8 4DR",
    fullMarketValue: "£420,000",
    initialShare: "40%",
    initialPrice: "£168,000",
    fullAddress: "9 Royal Crescent, Westgate, BS8 4DR",
    propertyType: "Apartment",
    bedrooms: "2",
    bathrooms: "1",
    size: "742 sq ft",
    tenure: "Leasehold",
    sharedOwnership: "40%",
    images: [
      "/images/listings/development.png",
      "/images/listings/living.png",
      "/images/listings/bedroom.png",
      "/images/listings/kitchen.png",
      "/images/listings/exterior.png",
    ],
  },
];

type State = { current: number; previous: number | null };

export function ListingsPreview() {
  const [state, setState] = useState<State>({ current: 0, previous: null });

  useEffect(() => {
    let alive = true;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const cycle = () => {
      if (!alive) return;
      setState((s) => ({
        current: (s.current + 1) % LISTINGS.length,
        previous: s.current,
      }));
      timers.push(
        setTimeout(() => {
          if (!alive) return;
          setState((s) => ({ ...s, previous: null }));
          timers.push(setTimeout(cycle, HOLD_MS));
        }, SLIDE_MS + 60),
      );
    };

    timers.push(setTimeout(cycle, HOLD_MS));
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, []);

  const current = LISTINGS[state.current];
  const previous = state.previous !== null ? LISTINGS[state.previous] : null;

  return (
    <div className="relative h-full w-full">
      {/* Desktop browser — anchored bottom-right, extends past the card edges. */}
      <div className="absolute left-[36%] right-[-10%] top-[22%] bottom-[-10%]">
        <DesktopBrowser current={current} previous={previous} swapKey={state.current} />
      </div>

      {/* Phone — iPhone-style bezel wrapping the screen content. */}
      <div className="absolute left-[6%] top-[4%] h-[412px] w-[201px] rounded-[30px] bg-[#0B0820] p-[5px] shadow-[0_22px_40px_-12px_rgba(38,4,93,0.35)] ring-1 ring-black/20">
        <div className="relative h-full w-full overflow-hidden rounded-[24px]">
          <PropertyDetailScreen current={current} previous={previous} swapKey={state.current} />
          <div className="pointer-events-none absolute left-1/2 top-[6px] h-[14px] w-[44px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Slide primitives — simultaneous old-out / new-in
   ───────────────────────────────────────────────────────── */
function HSlide({
  current,
  previous,
  swapKey,
  className,
}: {
  current: ReactNode;
  previous: ReactNode | null;
  swapKey: string;
  className?: string;
}) {
  const isSwapping = previous != null;
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {isSwapping && (
        <div
          key={`out-${swapKey}`}
          className="absolute inset-0 h-full w-full animate-listing-slide-out-x"
        >
          {previous}
        </div>
      )}
      <div
        key={`in-${swapKey}`}
        className={`h-full w-full ${isSwapping ? "animate-listing-slide-in-x" : ""}`}
      >
        {current}
      </div>
    </div>
  );
}

function VSlide({
  current,
  previous,
  swapKey,
}: {
  current: ReactNode;
  previous: ReactNode | null;
  swapKey: string;
}) {
  const isSwapping = previous != null;
  return (
    <span className="relative inline-block overflow-hidden whitespace-nowrap align-top">
      {isSwapping && (
        <span
          key={`out-${swapKey}`}
          className="absolute inset-0 block whitespace-nowrap animate-listing-slide-out-y"
        >
          {previous}
        </span>
      )}
      <span
        key={`in-${swapKey}`}
        className={`block whitespace-nowrap ${isSwapping ? "animate-listing-slide-in-y" : ""}`}
      >
        {current}
      </span>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   Desktop browser frame
   ───────────────────────────────────────────────────────── */
function DesktopBrowser({
  current,
  previous,
  swapKey,
}: {
  current: Listing;
  previous: Listing | null;
  swapKey: number;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[10px] border border-[#E1DDE6] bg-white shadow-[0_18px_40px_-12px_rgba(38,4,93,0.18)]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 border-b border-[#ECE9F0] bg-[#F8F6FA] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#E0DCE3]" />
        <span className="h-2 w-2 rounded-full bg-[#E0DCE3]" />
        <span className="h-2 w-2 rounded-full bg-[#E0DCE3]" />
        <div className="ml-3 flex h-4 flex-1 items-center justify-center rounded-[4px] bg-white text-[6px] text-[#9994A3]">
          stairpay.com/listings/new
        </div>
      </div>

      {/* App content */}
      <div className="flex flex-1 flex-col bg-white px-4 pb-3 pt-3 text-[#26045D]">
        {/* App header row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[8px] font-medium">
            <span className="text-stairpay">stairpay</span>
            <span className="text-[#C5C0CB]">/</span>
            <span className="text-[#26045D]">Create new listing</span>
          </div>
          <div className="rounded-[3px] bg-stairpay px-2 py-[3px] text-[7px] font-medium text-white">
            Create listing
          </div>
        </div>

        {/* Form grid */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="space-y-1.5">
            <FieldStack label="Address line 1" current={current.addressLine1} previous={previous?.addressLine1 ?? null} swapKey={`a1-${swapKey}`} />
            <FieldStack label="Address line 2" current={current.addressLine2} previous={previous?.addressLine2 ?? null} swapKey={`a2-${swapKey}`} />
            <FieldStack label="Postcode" current={current.postcode} previous={previous?.postcode ?? null} swapKey={`pc-${swapKey}`} />
          </div>
          <div className="space-y-1.5">
            <FieldStack label="Full market value" current={current.fullMarketValue} previous={previous?.fullMarketValue ?? null} swapKey={`fv-${swapKey}`} />
            <FieldStack label="Initial share" current={current.initialShare} previous={previous?.initialShare ?? null} swapKey={`is-${swapKey}`} />
            <FieldStack label="Initial price" current={current.initialPrice} previous={previous?.initialPrice ?? null} swapKey={`ip-${swapKey}`} />
          </div>
        </div>

        {/* Images section */}
        <div className="mt-3 flex items-center justify-between text-[7px] font-medium">
          <span>Images</span>
        </div>
        <div className="mt-1 grid flex-1 grid-cols-6 gap-1">
          {current.images.map((src, i) => (
            <ImgCell
              key={i}
              currentSrc={src}
              previousSrc={previous?.images[i] ?? null}
              swapKey={`cell-${i}-${swapKey}`}
            />
          ))}
          <UploadCell />
        </div>
      </div>
    </div>
  );
}

function FieldStack({
  label,
  current,
  previous,
  swapKey,
}: {
  label: string;
  current: string;
  previous: string | null;
  swapKey: string;
}) {
  return (
    <div>
      <div className="text-[6px] font-medium uppercase tracking-wide text-[#8A85A0]">
        {label}
      </div>
      <div className="mt-0.5 rounded-[3px] border border-[#ECE9F0] bg-white px-1.5 py-1 text-[7px] text-[#26045D]">
        <VSlide swapKey={swapKey} current={current} previous={previous} />
      </div>
    </div>
  );
}

function ImgCell({
  currentSrc,
  previousSrc,
  swapKey,
}: {
  currentSrc: string;
  previousSrc: string | null;
  swapKey: string;
}) {
  return (
    <HSlide
      swapKey={swapKey}
      className="aspect-square rounded-[3px] bg-[#F2EFF6]"
      current={
        // eslint-disable-next-line @next/next/no-img-element
        <img src={currentSrc} alt="" className="h-full w-full object-cover" />
      }
      previous={
        previousSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previousSrc} alt="" className="h-full w-full object-cover" />
        ) : null
      }
    />
  );
}

function UploadCell() {
  return (
    <div className="flex aspect-square items-center justify-center rounded-[3px] border border-dashed border-[#CCC5DA] text-[6px] font-medium text-[#9994A3]">
      Upload
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Property detail screen (rendered without an iPhone bezel)
   ───────────────────────────────────────────────────────── */
function PropertyDetailScreen({
  current,
  previous,
  swapKey,
}: {
  current: Listing;
  previous: Listing | null;
  swapKey: number;
}) {
  const detailPairs: [string, keyof Listing][] = [
    ["PROPERTY TYPE", "propertyType"],
    ["BEDROOMS", "bedrooms"],
    ["BATHROOMS", "bathrooms"],
    ["SIZE", "size"],
    ["TENURE", "tenure"],
    ["SHARED OWNERSHIP", "sharedOwnership"],
  ];

  return (
    <div className="flex h-full flex-col bg-[#F4F1F4] text-[#1A1228]">
      {/* Top navy bar with curved bottom — title + back chevron */}
      <div className="relative bg-[#0F0832] pt-[18px] pb-3">
        <button
          aria-hidden
          className="absolute left-2 top-1/2 mt-1 -translate-y-1/2 text-white"
        >
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="text-center text-[8px] font-bold text-white">
          Property details
        </div>
      </div>

      {/* Hero image — slides horizontally on swap */}
      <HSlide
        swapKey={`hero-${swapKey}`}
        className="h-[24%]"
        current={
          // eslint-disable-next-line @next/next/no-img-element
          <img src={current.images[0]} alt="" className="h-full w-full object-cover" />
        }
        previous={
          previous ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={previous.images[0]} alt="" className="h-full w-full object-cover" />
          ) : null
        }
      />

      {/* Gallery / 360 Tour pill row */}
      <div className="mx-2 mt-2 grid grid-cols-2 gap-1.5">
        <div className="flex items-center justify-center gap-1 rounded-[5px] bg-white px-1 py-1.5 text-[7px] font-bold text-[#0F0832] shadow-sm">
          <svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
            <rect x="0" y="0" width="3.2" height="3.2" rx="0.6" />
            <rect x="4.8" y="0" width="3.2" height="3.2" rx="0.6" />
            <rect x="0" y="4.8" width="3.2" height="3.2" rx="0.6" />
            <rect x="4.8" y="4.8" width="3.2" height="3.2" rx="0.6" />
          </svg>
          Gallery
        </div>
        <div className="flex items-center justify-center rounded-[5px] bg-white px-1 py-1.5 text-[7px] font-bold text-[#0F0832] shadow-sm">
          360 Tour
        </div>
      </div>

      {/* Body card */}
      <div className="mx-2 mt-2 flex-1 rounded-[6px] bg-white px-2.5 pb-2 pt-2 text-[#1A1228] shadow-sm">
        {/* Price + actions */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] font-bold leading-tight">
              <VSlide
                swapKey={`price-${swapKey}`}
                current={current.initialPrice}
                previous={previous?.initialPrice ?? null}
              />
            </div>
            <div className="mt-0.5 text-[5.5px] text-[#8A85A0]">
              Shared ownership
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#1A1228" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#FF2E73" stroke="#FF2E73" strokeWidth="2" strokeLinejoin="round" aria-hidden>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>

        <div className="mt-1.5 text-[7px] font-bold leading-tight">
          <VSlide
            swapKey={`addr-${swapKey}`}
            current={current.fullAddress}
            previous={previous?.fullAddress ?? null}
          />
        </div>
        <div className="mt-0.5 text-[5.5px] text-[#8A85A0]">
          Added on 16/05/2026
        </div>

        {/* Detail grid */}
        <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
          {detailPairs.map(([label, key]) => (
            <div key={label}>
              <div className="text-[5px] font-semibold uppercase tracking-wider text-[#8A85A0]">
                {label}
              </div>
              <div className="mt-0.5 text-[7px] font-bold text-[#1A1228]">
                <VSlide
                  swapKey={`${label}-${swapKey}`}
                  current={current[key]}
                  previous={previous ? previous[key] : null}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="grid grid-cols-2 gap-1.5 bg-[#0F0832] px-2 pb-3 pt-2">
        <div className="flex items-center justify-center gap-1 rounded-[6px] bg-[#22D27D] px-2 py-1.5 text-[8px] font-bold text-[#0F0832]">
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </div>
        <div className="flex items-center justify-center gap-1 rounded-[6px] bg-[#22D27D] px-2 py-1.5 text-[8px] font-bold text-[#0F0832]">
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Email
        </div>
      </div>
    </div>
  );
}
