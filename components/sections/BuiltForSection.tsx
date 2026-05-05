"use client";

import { useRef, useState } from "react";
import type { ComponentType } from "react";
import { Reveal } from "@/components/animation/Reveal";
import {
  IconAdminReduction,
  IconAffordability,
  IconCaseManagement,
  IconCostClarity,
  IconDocuments,
  IconHousingAssociation,
  IconRegulationReady,
  IconResident,
  IconTransparency,
  IconTrustworthyForecasts,
} from "@/components/illustrations/ConceptIcons";

type Mode = "default" | "landlord" | "resident";
type Kind = "landlord" | "resident";
type Corner = "nw" | "ne" | "se" | "sw";
type IconComp = ComponentType<{ size?: number }>;

type FeatureSpec = {
  Icon: IconComp;
  kind: Kind;
  orbitIdx: number;
  corner: Corner;
  title: string;
  body: string;
};

// Each entry has its default orbit slot AND its corner destination so the
// same icon node animates from one to the other when its mode activates.
const FEATURES: FeatureSpec[] = [
  // i=0 NE area  →  HA Regulation
  {
    Icon: IconRegulationReady,
    kind: "landlord",
    orbitIdx: 0,
    corner: "ne",
    title: "Regulator-ready by default.",
    body: "One source of truth, audited end to end — the answers the regulator wants are already in the platform.",
  },
  // i=1 NE area  →  Resident Cost clarity
  {
    Icon: IconCostClarity,
    kind: "resident",
    orbitIdx: 1,
    corner: "ne",
    title: "Clarity on costs and processes.",
    body: "Rent, service charges, share value, and what happens next — all in one place.",
  },
  // i=2 SE area  →  Resident Lease transparency
  {
    Icon: IconTransparency,
    kind: "resident",
    orbitIdx: 2,
    corner: "se",
    title: "Lease transparency.",
    body: "The terms of your lease, surfaced in plain English instead of buried in a 90-page PDF.",
  },
  // i=3 SE area  →  HA Admin reduction
  {
    Icon: IconAdminReduction,
    kind: "landlord",
    orbitIdx: 3,
    corner: "se",
    title: "Less time on admin, more time on residents.",
    body: "Automation handles the rote work, so your team handles the work that matters.",
  },
  // i=4 SW area  →  HA Forecasts
  {
    Icon: IconTrustworthyForecasts,
    kind: "landlord",
    orbitIdx: 4,
    corner: "sw",
    title: "Forecasts you can trust.",
    body: "Asset and resident data combined in one model — not stitched together from spreadsheets the night before a board meeting.",
  },
  // i=5 SW area  →  Resident Documents
  {
    Icon: IconDocuments,
    kind: "resident",
    orbitIdx: 5,
    corner: "sw",
    title: "Document storage.",
    body: "Lease, statements, valuations, correspondence — always to hand.",
  },
  // i=6 NW area  →  Resident Affordability
  {
    Icon: IconAffordability,
    kind: "resident",
    orbitIdx: 6,
    corner: "nw",
    title: "Affordability tracking.",
    body: "Understand what you can afford to staircase, and when, without paying for advice you don't yet need.",
  },
  // i=7 NW area  →  HA Case management
  {
    Icon: IconCaseManagement,
    kind: "landlord",
    orbitIdx: 7,
    corner: "nw",
    title: "Cases close faster.",
    body: "Data flows automatically between systems, so staircasing and resales move from instruction to completion in weeks, not months.",
  },
];

const ORBIT_RADIUS = 220;
const CORNER_OFFSETS: Record<Corner, { x: number; y: number; labelSide: "left" | "right" }> = {
  nw: { x: -250, y: -130, labelSide: "left" },
  ne: { x: 250, y: -130, labelSide: "right" },
  se: { x: 250, y: 130, labelSide: "right" },
  sw: { x: -250, y: 130, labelSide: "left" },
};

function orbitPos(idx: number) {
  const angle = ((-90 + (360 / 8) * idx + 360 / 16) * Math.PI) / 180;
  return {
    x: Math.cos(angle) * ORBIT_RADIUS,
    y: Math.sin(angle) * ORBIT_RADIUS,
  };
}

type BuiltForSectionProps = {
  headline: string;
  headlineMuted?: string;
  subtitle?: string;
};

export function BuiltForSection({ headline, headlineMuted, subtitle }: BuiltForSectionProps) {
  const [hover, setHover] = useState<Mode>("default");
  const [locked, setLocked] = useState<Mode>("default");
  const mode: Mode = locked !== "default" ? locked : hover;
  const sectionRef = useRef<HTMLElement>(null);

  function enter(m: Mode) {
    if (locked === "default") setHover(m);
  }
  function leave() {
    if (locked === "default") setHover("default");
  }
  function click(m: Mode) {
    if (locked === m) {
      setLocked("default");
      setHover(m);
    } else {
      setLocked(m);
    }
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const isLandlord = mode === "landlord";
  const isResident = mode === "resident";
  const isDefault = mode === "default";

  // r=145 base, expanded r=170. Circumferences:
  // r=145 → 911. 75% arc = 683, 100% = 911
  // r=122 → 767. 75% arc = 575, 100% = 767
  // r=170 → 1068
  const lightR = isLandlord ? 175 : 145;
  const darkR = isResident ? 175 : 122;
  const lightDash = isLandlord ? "1100 0" : "683 228";
  const darkDash = isResident ? "1100 0" : "575 192";
  const lightOpacity = isResident ? 0 : 1;
  const darkOpacity = isLandlord ? 0 : 1;

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-page scroll-mt-8 px-section py-12 md:py-16">
      <Reveal className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12">
        <h2 className="text-heading-xl md:text-display-lg">
          <span
            className={`transition-colors duration-500 ${
              isResident ? "text-ink-light" : "text-ink"
            }`}
          >
            {headline}
          </span>
          {headlineMuted ? (
            <span
              className={`transition-colors duration-500 ${
                isResident ? "text-ink" : "text-ink-light"
              }`}
            >
              {" "}
              {headlineMuted}
            </span>
          ) : null}
        </h2>
        {subtitle ? (
          <p className="text-[15px] text-ink-muted md:border-l md:border-rule md:pl-12 md:text-body-md">
            {subtitle}
          </p>
        ) : null}
      </Reveal>

      <div className="mt-8 rounded-[10px] border border-white/60 bg-white/70 px-6 py-6 shadow-[0_8px_40px_-12px_rgba(38,4,93,0.10),0_2px_8px_-2px_rgba(38,4,93,0.06)] backdrop-blur-md md:px-12 md:py-8">
      <Reveal delay={120}>
        <div className="relative mx-auto h-[520px] w-full max-w-[1100px]">
          {/* Ring SVG, centered in 520px square */}
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden>
              <circle
                cx="250"
                cy="250"
                r={lightR}
                fill="none"
                stroke="#D4D2CD"
                strokeWidth="9"
                strokeDasharray={lightDash}
                strokeLinecap="round"
                className={isDefault ? "ring-spin-cw" : ""}
                style={{
                  opacity: lightOpacity,
                  transition:
                    "opacity 500ms ease, stroke-dasharray 700ms cubic-bezier(.4,0,.2,1), r 700ms cubic-bezier(.4,0,.2,1)",
                }}
              />
              <circle
                cx="250"
                cy="250"
                r={darkR}
                fill="none"
                stroke="#3D3D43"
                strokeWidth="9"
                strokeDasharray={darkDash}
                strokeDashoffset={isDefault ? 384 : 0}
                strokeLinecap="round"
                className={isDefault ? "ring-spin-ccw" : ""}
                style={{
                  opacity: darkOpacity,
                  transition:
                    "opacity 500ms ease, stroke-dasharray 700ms cubic-bezier(.4,0,.2,1), stroke-dashoffset 700ms cubic-bezier(.4,0,.2,1), r 700ms cubic-bezier(.4,0,.2,1)",
                }}
              />
            </svg>

            {/* Center icon buttons */}
            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5">
              <button
                type="button"
                aria-label="Resident view"
                onMouseEnter={() => enter("resident")}
                onMouseLeave={leave}
                onClick={() => click("resident")}
                className={`transition-all duration-500 ${
                  isResident ? "scale-110" : isLandlord ? "opacity-30" : "opacity-100"
                }`}
              >
                <IconResident size={64} />
              </button>
              <button
                type="button"
                aria-label="Housing association view"
                onMouseEnter={() => enter("landlord")}
                onMouseLeave={leave}
                onClick={() => click("landlord")}
                className={`transition-all duration-500 ${
                  isLandlord ? "scale-110" : isResident ? "opacity-30" : "opacity-100"
                }`}
              >
                <IconHousingAssociation size={64} />
              </button>
            </div>
          </div>

          {/* Persistent feature icons that animate between orbit and corner */}
          {FEATURES.map((f) => (
            <FeatureNode key={f.title} feature={f} mode={mode} />
          ))}
        </div>
      </Reveal>
      </div>
    </section>
  );
}

function FeatureNode({ feature, mode }: { feature: FeatureSpec; mode: Mode }) {
  const isActive = mode === feature.kind;
  const isDefault = mode === "default";
  const isOtherActive = !isActive && !isDefault;

  const orbit = orbitPos(feature.orbitIdx);
  const cornerPos = CORNER_OFFSETS[feature.corner];

  const x = isActive ? cornerPos.x : orbit.x;
  const y = isActive ? cornerPos.y : orbit.y;
  const labelSide = cornerPos.labelSide;

  return (
    <div
      className="absolute left-1/2 top-1/2 z-0"
      style={{
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        transition:
          "transform 700ms cubic-bezier(.4,0,.2,1), opacity 500ms ease",
        opacity: isOtherActive ? 0 : 1,
        pointerEvents: isOtherActive ? "none" : "auto",
      }}
    >
      <div className="relative flex items-center justify-center">
        <feature.Icon size={64} />

        {/* Label appears in active mode, anchored to one side of the icon */}
        <div
          className={`absolute top-1/2 w-[300px] -translate-y-1/2 transition-opacity duration-500 ${
            labelSide === "left" ? "right-[calc(100%+16px)] text-right" : "left-[calc(100%+16px)] text-left"
          }`}
          style={{
            opacity: isActive ? 1 : 0,
            transitionDelay: isActive ? "300ms" : "0ms",
            pointerEvents: isActive ? "auto" : "none",
          }}
          aria-hidden={!isActive}
        >
          <h3 className="text-heading-md font-medium leading-tight text-ink">{feature.title}</h3>
          <p className="mt-2 text-body-sm leading-snug text-ink-muted">{feature.body}</p>
        </div>
      </div>
    </div>
  );
}
