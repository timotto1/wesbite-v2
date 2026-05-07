"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Composite illustration for the Resident Portal card.
 *
 * iPhone-in-hand mockup PNG with the resident dashboard absolutely positioned
 * over the phone's screen rect. The dashboard renders at its native size
 * (192 x 402); the mockup is sized so its screen exactly matches that, and
 * the hand around the phone is clipped where it overflows the card.
 */

// Constants derived from the centered mockup PNG (1814 x 1714, screen rect at
// left=577, top=23, width=660, height=1441). Image is sized so the screen
// width equals the dashboard width (192px); container size = mockup * 0.2909.
const CONTAINER_W = 528;
const CONTAINER_H = 499;
const SCREEN_TOP = 4;
const SCREEN_W = 192;
const SCREEN_H = 402;

export function ResidentPortalPreview() {
  // Stop interactions inside the phone from bubbling to the card button
  // (otherwise dragging would also fire the card's onClick).
  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      onClick={stop}
      onMouseDown={stop}
      onPointerDown={stop}
    >
      <div
        className="relative flex-none"
        style={{ width: CONTAINER_W, height: CONTAINER_H, transform: "translateY(36px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mockup/iphone-hand-mockup-centered.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden bg-[#FBF9FF]"
          style={{
            top: SCREEN_TOP,
            width: SCREEN_W,
            height: SCREEN_H,
            borderRadius: 30,
          }}
        >
          <DraggableScrollArea>
            <ResidentAppContent />
          </DraggableScrollArea>
        </div>
      </div>
    </div>
  );
}

function DraggableScrollArea({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [grabbing, setGrabbing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let down = false;
    let startY = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      down = true;
      startY = e.clientY;
      startScroll = el.scrollTop;
      setGrabbing(true);
      el.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      e.preventDefault();
      el.scrollTop = startScroll - (e.clientY - startY);
    };
    const onUp = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      setGrabbing(false);
      el.releasePointerCapture?.(e.pointerId);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("pointerleave", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("pointerleave", onUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`h-full w-full overflow-y-scroll select-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none] ${
        grabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ touchAction: "pan-y" }}
    >
      {children}
    </div>
  );
}

function ResidentAppContent() {
  return (
    <div className="flex min-h-full flex-col bg-[#FBF9FF] text-[#26045D] [letter-spacing:-0.02em]">
      <StatusBar />
      <TopBar />
      <div className="flex flex-col gap-3 px-3 pb-3 pt-1">
        <CtaHero />
        <StatGrid />
        <HousingCostsCard />
        <TilesCarousel />
        <LandlordCard />
        <AdminCard />
        <SupportPill />
      </div>
      <BottomNav />
    </div>
  );
}

/* ─── Status bar ─── */
function StatusBar() {
  return (
    <div className="flex h-[22px] items-center justify-between bg-[#1F0B56] px-3 text-[6px] font-semibold text-white">
      <span>9:09</span>
      <span className="flex items-center gap-[3px]">
        <svg width="9" height="6" viewBox="0 0 17 11" fill="none" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="0.5" fill="#fff" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="#fff" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" fill="#fff" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="#fff" />
        </svg>
        <svg width="9" height="6" viewBox="0 0 16 11" fill="none" aria-hidden>
          <path d="M8 11 L10 8.5 A2.5 2.5 0 0 0 6 8.5 Z" fill="#fff" />
          <path d="M3 6 a8 8 0 0 1 10 0" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M0.7 3.6 a12 12 0 0 1 14.6 0" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>
        <svg width="13" height="6" viewBox="0 0 26 12" aria-hidden>
          <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" fill="none" stroke="#fff" strokeOpacity="0.6" />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill="#fff" />
          <rect x="23.5" y="4" width="1.5" height="4" rx="0.6" fill="#fff" fillOpacity="0.6" />
        </svg>
      </span>
    </div>
  );
}

/* ─── Top bar (avatar / logo / settings) ─── */
function TopBar() {
  return (
    <div className="flex items-center justify-between px-3 pt-2 pb-1">
      <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#A486F7] bg-white text-[7px] font-medium text-[#26045D]">
        TO
      </span>
      <span className="grid h-[14px] w-[14px] grid-cols-2 grid-rows-2 gap-[1px]" aria-label="Risehome">
        <span className="rounded-[1px] bg-transparent" />
        <span className="rounded-[1px] bg-[#7114E2]" />
        <span className="rounded-[1px] bg-[#7114E2]" />
        <span className="rounded-[1px] bg-[#7114E2]" />
      </span>
      <span className="text-[#26045D]">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M19.14 12.94a7.49 7.49 0 0 0 0-1.88l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.42 7.42 0 0 0-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54a7.42 7.42 0 0 0-1.62.94l-2.39-.96a.5.5 0 0 0-.6.22L2.7 8.84a.5.5 0 0 0 .12.64l2.03 1.58a7.49 7.49 0 0 0 0 1.88L2.82 14.52a.5.5 0 0 0-.12.64l1.92 3.32a.5.5 0 0 0 .6.22l2.39-.96c.5.39 1.05.7 1.62.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54c.57-.24 1.12-.55 1.62-.94l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </span>
    </div>
  );
}

/* ─── CTA hero ─── */
function CtaHero() {
  return (
    <section
      className="relative overflow-hidden rounded-[12px] px-3 pb-3 pt-3 text-white shadow-[0_8px_18px_-8px_rgba(38,4,93,0.45)]"
      style={{
        backgroundImage: [
          "radial-gradient(120% 90% at 100% 0%, rgba(174,120,241,0.55), transparent 60%)",
          "radial-gradient(80% 60% at 0% 100%, rgba(38,4,93,0.55), transparent 70%)",
          "linear-gradient(135deg, #7114E2 0%, #4C1CB0 60%, #26045D 100%)",
        ].join(", "),
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="absolute right-2 top-2 h-3 w-3 opacity-85"
        aria-hidden
      >
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </svg>
      <div className="text-[7px] font-normal opacity-90">Your next step:</div>
      <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-white/18 px-1.5 py-[2px] text-[6.5px] font-medium backdrop-blur-[2px]">
        <span className="h-[3px] w-[3px] rounded-full bg-[#CDA6FD]" />
        Recommended
      </span>
      <h1 className="mt-2 max-w-[90%] text-[13px] font-semibold leading-[1.15] [letter-spacing:-0.02em]">
        Can you buy more of your home?
      </h1>
      <p className="mt-1 max-w-[92%] text-[7px] font-light leading-[1.5] opacity-90 [letter-spacing:0.01em]">
        Takes 2 minutes to check eligibility and affordability
      </p>
      <button
        type="button"
        className="mt-2.5 w-full rounded-full bg-white px-3 py-1.5 text-[8px] font-medium text-[#26045D] [letter-spacing:-0.015em]"
      >
        Start staircasing
      </button>
    </section>
  );
}

/* ─── 2x2 Stat grid ─── */
function StatGrid() {
  return (
    <section className="grid grid-cols-2 gap-2">
      <StatCard
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 11l9-7 9 7" />
            <path d="M5 10v9h14v-9" />
            <path d="M10 19v-5h4v5" />
          </svg>
        }
        label="Home value"
        value="£352,019"
      />
      <StatCard
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 14l6-6" />
            <circle cx="9.5" cy="8.5" r="1.2" />
            <circle cx="14.5" cy="14.5" r="1.2" />
            <path d="M5 4h11l3 3v13H5z" />
          </svg>
        }
        label="% change"
        valueNode={
          <span className="inline-flex items-center gap-[3px] rounded-[10px] bg-[#ECFDF3] px-1.5 py-[2px] text-[10px] leading-none text-[#027A48] [letter-spacing:-0.02em]">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="6 11 12 5 18 11" />
            </svg>
            53%
          </span>
        }
      />
      <StatCard
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 3v18" />
            <path d="M5 8l-3 6h6z" />
            <path d="M19 8l-3 6h6z" />
            <path d="M5 21h14" />
          </svg>
        }
        label="Your share"
        value="40%"
      />
      <StatCard
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 7h12l-1 13H7z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
        }
        label="Your equity"
        value="£12,052"
      />
    </section>
  );
}

function StatCard({
  icon,
  label,
  value,
  valueNode,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  valueNode?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[52px] items-center gap-1.5 rounded-[10px] border border-[#E3E2E4] bg-white px-2 py-2 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <span className="h-[14px] w-[14px] flex-none text-[#26045D]">{icon}</span>
      <div className="flex min-w-0 flex-col gap-[2px]">
        <span className="text-[7px] leading-[10px] text-[#87858E] [letter-spacing:-0.02em]">
          {label}
        </span>
        {valueNode ?? (
          <span className="text-[11px] font-normal leading-tight text-[#26045D] [letter-spacing:-0.02em]">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Housing costs ─── */
function HousingCostsCard() {
  return (
    <section className="overflow-hidden rounded-[10px] border border-[#E3E2E4] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="border-b border-[#E3E2E4] px-3 py-2 text-[7px] text-[#87858E] [letter-spacing:-0.02em]">
        Housing costs breakdown
      </div>
      <div className="px-3 py-3">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[9px] font-medium [letter-spacing:-0.01em] text-[#26045D]">
            Monthly spend
          </span>
          <span className="text-[7px] text-[#87858E] [letter-spacing:-0.02em]">£2.5k of £5k</span>
        </div>
        <div className="h-[7px] w-full overflow-hidden rounded-full bg-[#E5DAFB]">
          <div className="h-full w-[65%] rounded-full bg-[#26045D]" />
        </div>
        <div className="mt-[2px] text-right text-[7.5px] text-[#26045D] [letter-spacing:-0.01em]">
          65%
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <LegendRow
            swatchClass="bg-[#CDA6FD]"
            barTrack="bg-[#F2E7FF]"
            barFill="bg-[#CDA6FD]"
            fillPct={49}
            name="Mortgage"
            pct="23%"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M3 21h18" />
                <path d="M5 21V8l4-3 4 3v13" />
                <path d="M13 21V11l4-3 4 3v10" />
              </svg>
            }
          />
          <LegendRow
            swatchClass="bg-[#8C8CF8]"
            barTrack="bg-[#D2D2FF]"
            barFill="bg-[#8C8CF8]"
            fillPct={28}
            name="Rent"
            pct="18%"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2.5" y="6" width="19" height="13" rx="2" />
                <line x1="2.5" y1="10" x2="21.5" y2="10" />
              </svg>
            }
          />
        </div>

        <button
          type="button"
          className="mt-3 w-full rounded-full border border-[#E3E2E4] bg-white px-3 py-1.5 text-[8px] text-[#26045D] [letter-spacing:-0.015em]"
        >
          See all
        </button>
      </div>
    </section>
  );
}

function LegendRow({
  swatchClass,
  barTrack,
  barFill,
  fillPct,
  name,
  pct,
  icon,
}: {
  swatchClass: string;
  barTrack: string;
  barFill: string;
  fillPct: number;
  name: string;
  pct: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full text-white ${swatchClass}`}>
        <span className="h-2.5 w-2.5">{icon}</span>
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-[7px] text-[#26045D]">{name}</div>
        <div className={`h-[3px] w-full overflow-hidden rounded-full ${barTrack}`}>
          <div className={`h-full rounded-full ${barFill}`} style={{ width: `${fillPct}%` }} />
        </div>
      </div>
      <span className="w-5 text-right text-[7px] text-[#26045D]">{pct}</span>
    </div>
  );
}

/* ─── Tile carousel ─── */
function TilesCarousel() {
  return (
    <section className="-mx-3 px-3">
      <div className="flex gap-1.5 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        <Tile
          name="Staircasing"
          desc="Own more of your home"
          gradient="linear-gradient(135deg, #d6f7e0, #7fd99c)"
          stroke="#0fb872"
        >
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="21 7 21 13 15 7" />
        </Tile>
        <Tile
          name="Resales"
          desc="Make your next move"
          gradient="linear-gradient(135deg, #fff2d4, #ffd07a)"
          stroke="#a06a00"
        >
          <rect x="3" y="9" width="18" height="11" rx="1.5" />
          <path d="M3 12h18" />
          <path d="M8 9V6a4 4 0 0 1 8 0v3" />
        </Tile>
        <Tile
          name="1% staircasing"
          desc="Lease-dependent"
          gradient="linear-gradient(135deg, #e6dafc, #b59cf3)"
          stroke="#4a1ba8"
        >
          <path d="M3 21h18" />
          <path d="M5 21v-7l4-2 4 2 4-2 4 2v7" />
          <path d="M9 21v-4" />
          <path d="M15 21v-4" />
        </Tile>
        <Tile
          name="Mortgage"
          desc="Track your mortgage"
          gradient="linear-gradient(135deg, #d6e6ff, #7faaf3)"
          stroke="#1d3a96"
        >
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="7" y1="15" x2="11" y2="15" />
        </Tile>
        <Tile
          name="My landlord"
          desc="Policies, contact, etc."
          gradient="linear-gradient(135deg, #ffe0ee, #f59ec4)"
          stroke="#a31964"
        >
          <path d="M3 21h18" />
          <path d="M6 21V8l6-4 6 4v13" />
          <rect x="10" y="13" width="4" height="8" />
        </Tile>
      </div>
    </section>
  );
}

function Tile({
  name,
  desc,
  gradient,
  stroke,
  children,
}: {
  name: string;
  desc: string;
  gradient: string;
  stroke: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[88px] w-[78px] flex-none flex-col justify-end gap-1 rounded-[10px] border border-[#E3E2E4] bg-white p-2 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
      <div
        className="-mt-1 flex h-[44px] w-[44px] items-center justify-center self-center rounded-[8px] shadow-[0_2px_6px_rgba(0,0,0,0.10)]"
        style={{ background: gradient }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          {children}
        </svg>
      </div>
      <div className="text-[8.5px] leading-tight text-[#26045D] [letter-spacing:-0.02em]">
        {name}
      </div>
      <div className="text-[6px] leading-[8px] text-[#87858E] [letter-spacing:-0.02em]">
        {desc}
      </div>
    </div>
  );
}

/* ─── Landlord card ─── */
function LandlordCard() {
  return (
    <section className="overflow-hidden rounded-[10px] border border-[#E3E2E4] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between bg-[#E3E2E4] px-3 py-2">
        <span className="text-[7px] text-[#87858E] [letter-spacing:-0.02em]">My landlord</span>
        <span className="text-[9px] font-medium text-[#26045D] [letter-spacing:-0.02em]">
          Risehome
        </span>
      </div>
      <div className="px-3 py-3">
        <p className="m-0 text-[7px] font-light leading-[12px] text-[#26045D] [letter-spacing:0.01em]">
          We&apos;re a fictional housing association used to demo this product. If we
          were real, we&apos;d use the latest technology to serve our residents.
        </p>
        <button
          type="button"
          className="mt-2 w-full rounded-full border border-[#E3E2E4] bg-white px-3 py-1.5 text-[8px] text-[#26045D] [letter-spacing:-0.015em]"
        >
          View my landlord
        </button>
      </div>
    </section>
  );
}

/* ─── Admin list ─── */
function AdminCard() {
  return (
    <section className="overflow-hidden rounded-[10px] border border-[#E3E2E4] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="border-b border-[#E3E2E4] px-3 py-2 text-[7px] text-[#87858E] [letter-spacing:-0.02em]">
        Admin
      </div>
      <div className="px-3 py-1">
        <AdminRow
          name="Documents"
          desc="Store all your documents in one place"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M3 10h18" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
          }
        />
        <AdminRow
          name="Messages from your landlord"
          desc="View any alerts or updates"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          }
        />
        <AdminRow
          name="FAQs"
          desc="Common questions for shared owners"
          last
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12" y2="17.01" />
            </svg>
          }
        />
      </div>
    </section>
  );
}

function AdminRow({
  icon,
  name,
  desc,
  last,
}: {
  icon: React.ReactNode;
  name: string;
  desc: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 py-1.5 ${
        last ? "" : "border-b border-[rgba(227,226,228,0.6)]"
      }`}
    >
      <span className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-[rgba(229,218,251,0.5)] text-[#26045D]">
        <span className="h-3 w-3">{icon}</span>
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[8px] text-[#26045D] [letter-spacing:-0.01em]">{name}</div>
        <div className="text-[6px] leading-[10px] text-[#87858E] [letter-spacing:-0.02em]">
          {desc}
        </div>
      </div>
      <Chevron />
    </div>
  );
}

/* ─── Support pill ─── */
function SupportPill() {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 rounded-full border border-white bg-[#AE78F1] px-3 py-1.5 text-white"
    >
      <span className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full text-white">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.9 14.7h-1.8v-1.8h1.8v1.8zm1.86-7-.81.83a3.05 3.05 0 0 0-.95 2.27v.4h-1.8v-.4a4.85 4.85 0 0 1 1.41-3.5l1.12-1.13a1.95 1.95 0 1 0-3.31-1.39h-1.81a3.75 3.75 0 1 1 6.15 2.9z" />
        </svg>
      </span>
      <div className="min-w-0 flex-1 text-left">
        <div className="text-[8px]">Support</div>
        <div className="text-[6px] leading-[9px] opacity-90">Email Risehome for help</div>
      </div>
      <span className="text-white">
        <Chevron />
      </span>
    </button>
  );
}

function Chevron() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

/* ─── Bottom nav ─── */
function BottomNav() {
  return (
    <nav className="sticky bottom-0 mt-auto flex items-stretch justify-between border-t border-[#E3E2E4] bg-white px-1 pb-2 pt-1.5">
      <NavTab active label="Home">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v9h14v-9" />
        </svg>
      </NavTab>
      <NavTab label="Transact">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 12a9 9 0 1 1-9-9v9z" />
          <path d="M21 12A9 9 0 0 0 12 3v9z" fill="currentColor" fillOpacity="0.1" />
        </svg>
      </NavTab>
      <NavTab label="Profile">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      </NavTab>
      <NavTab label="Ask AI">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 15a3 3 0 0 1-3 3H8l-5 4V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
        </svg>
      </NavTab>
    </nav>
  );
}

function NavTab({
  active,
  label,
  children,
}: {
  active?: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`flex flex-1 flex-col items-center justify-center gap-[3px] py-1 text-[6.5px] [letter-spacing:-0.01em] ${
        active ? "font-medium text-[#26045D]" : "text-[#87858E]"
      }`}
    >
      {children}
      <span>{label}</span>
    </button>
  );
}
