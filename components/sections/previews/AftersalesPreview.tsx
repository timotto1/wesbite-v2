"use client";

import { useEffect, useState, type MouseEvent, type KeyboardEvent } from "react";
import "@/components/demo/product/styles.css";
import { Icon } from "@/components/demo/product/icons";
import { BarChart } from "@/components/demo/product/charts";

/**
 * Composite illustration for the Aftersales card.
 *
 * Two surfaces side-by-side: a resident-side staircasing checklist on the
 * left, and the landlord-side Case Management screen on the right. The
 * browser styling mirrors the homepage product demo so the two surfaces
 * read as the same product seen from both sides.
 */

const STEPS: string[] = [
  "See what you can afford",
  "Update property details",
  "Speak with a broker",
  "Contact your solicitors",
  "Obtain a RICs valuation",
  "Upload your documents",
  "Submit your application!",
];

/* Animation timing — line travels through the steps with a varied dwell at
   each circle, then holds full, then resets and repeats.

   Pauses are deliberately uneven so the sweep doesn't feel mechanical. */
const HEAD_DELAY_MS = 320; // initial blank pause at the top of each cycle
const SEG_TRAVEL_MS = 900; // time to travel between two adjacent circles
const TAIL_HOLD_MS = 1900; // hold full once every circle is lit
const PAUSES_MS = [560, 320, 620, 380, 500, 280, 580]; // dwell at each circle (length === STEPS.length)

const ARRIVAL_TIMES_MS: number[] = (() => {
  const arr: number[] = [];
  let t = HEAD_DELAY_MS;
  for (let i = 0; i < STEPS.length; i++) {
    arr.push(t);
    t += PAUSES_MS[i] + SEG_TRAVEL_MS;
  }
  return arr;
})();
const CYCLE_MS =
  ARRIVAL_TIMES_MS[ARRIVAL_TIMES_MS.length - 1] +
  PAUSES_MS[PAUSES_MS.length - 1] +
  TAIL_HOLD_MS;

function computeTravelP(elapsed: number): number {
  if (elapsed <= HEAD_DELAY_MS) return 0;
  for (let i = 0; i < STEPS.length; i++) {
    const arr = ARRIVAL_TIMES_MS[i];
    const pauseEnd = arr + PAUSES_MS[i];
    if (i > 0 && elapsed < arr) {
      // Travelling between circle i-1 and circle i
      const prevP = (i - 1) / (STEPS.length - 1);
      const curP = i / (STEPS.length - 1);
      const segStart = arr - SEG_TRAVEL_MS;
      const segP = (elapsed - segStart) / SEG_TRAVEL_MS;
      return prevP + Math.max(0, Math.min(1, segP)) * (curP - prevP);
    }
    if (elapsed <= pauseEnd) {
      // Paused at circle i
      return i / (STEPS.length - 1);
    }
  }
  return 1; // tail hold — line full
}

/* Dashed-line travel timing: starts the moment the final step (Submit your
   application!) lights up and runs for LINE_TRAVEL_MS, after which the
   case-management table picks up a new row. */
const LINE_TRAVEL_MS = 850;
const SUBMIT_ARRIVAL_MS = ARRIVAL_TIMES_MS[STEPS.length - 1];

/** 0 → 1 across the line's travel; clamps before/after. */
function computeLineProgress(elapsed: number): number {
  if (elapsed < SUBMIT_ARRIVAL_MS) return 0;
  const p = (elapsed - SUBMIT_ARRIVAL_MS) / LINE_TRAVEL_MS;
  return Math.min(1, Math.max(0, p));
}

type StageColor = "indigo" | "pink" | "amber" | "blue" | "green" | "gray";

type Row = {
  name: string;
  addr: string;
  amount: string;
  status: { l: string; c: StageColor };
  days: number;
  mgr: string | null;
};

const STAIRCASING_ROWS: Row[] = [
  { name: "Mohammed Al-Rashid", addr: "2 Granary Square, Kings Cross, Lo…", amount: "£110,000", status: { l: "MOS", c: "indigo" }, days: 58, mgr: null },
  { name: "Taiwo Ogundimu", addr: "3 Rosamund Close, Stratford, Lond…", amount: "£97,500", status: { l: "MOS", c: "indigo" }, days: 31, mgr: null },
  { name: "Funmilayo Adedoyin", addr: "17 Maple Court, Tooting, London S…", amount: "£96,250", status: { l: "Pre-…", c: "pink" }, days: 72, mgr: "Tracey" },
  { name: "Josephine Tremblay", addr: "7 Willowmere Close, Peckham, Lon…", amount: "£93,750", status: { l: "AML", c: "indigo" }, days: 18, mgr: "Dionne" },
];

/* Row that lands in case management once the resident's submission arrives. */
const NEW_STAIRCASING_ROW: Row = {
  name: "New application received",
  addr: "Submitted just now…",
  amount: "Pending",
  status: { l: "Det", c: "blue" },
  days: 0,
  mgr: null,
};

const RESALES_ROWS: Row[] = [
  { name: "Helen Asare", addr: "22 Linden Way, Camden, London NW1…", amount: "£325,000", status: { l: "Listed", c: "blue" }, days: 12, mgr: "Mary" },
  { name: "Patricia Adeyemi", addr: "14 Beechwood Close, Hackney, Lond…", amount: "£298,500", status: { l: "Viewing", c: "indigo" }, days: 27, mgr: null },
  { name: "Marcus Williams", addr: "11 Rowan Court, Lewisham, London…", amount: "£275,000", status: { l: "Offer", c: "pink" }, days: 41, mgr: "Elena" },
  { name: "Sade Adekunle", addr: "5 Birchwood Mews, Brixton, London…", amount: "£312,750", status: { l: "Exchange", c: "amber" }, days: 64, mgr: "Dionne" },
];

type TabId = "Staircasing" | "Resales";

export function AftersalesPreview() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      setElapsed((t - start) % CYCLE_MS);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const lineProgress = computeLineProgress(elapsed);
  const lineVisible = lineProgress > 0 && lineProgress < 1;
  const arrived = lineProgress >= 1;

  return (
    <div className="relative h-full w-full">
      {/* Dashed line — passes from behind the steps card to behind the
          browser. 100px long, with the trail fading on the left so it reads
          as a moving comet of data. Sits at z-0 so both cards occlude it. */}
      {lineVisible && (
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: "55%",
            left: `calc(${28 + lineProgress * 3}% + ${(lineProgress - 1) * 100}px)`,
            width: "100px",
            height: "2px",
            zIndex: 0,
            backgroundImage:
              "repeating-linear-gradient(to right, #5b3fd6 0 5px, transparent 5px 9px)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 65%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 65%)",
          }}
        />
      )}

      {/* Steps panel — stays inside the card */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[28%]"
        style={{ zIndex: 1 }}
      >
        <StepsCard elapsed={elapsed} />
      </div>

      {/* Browser — extends past the right edge for depth, and past the bottom so the card clips it */}
      <div
        className="absolute left-[31%] right-[-10%] top-0"
        style={{ bottom: "-22%", zIndex: 1 }}
      >
        <BrowserWindow arrived={arrived} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Steps checklist (animated line + circles)
   ───────────────────────────────────────────────────────── */
function StepsCard({ elapsed }: { elapsed: number }) {
  const travelP = computeTravelP(elapsed);

  return (
    <div className="flex h-full w-full flex-col rounded-[18px] border border-[#ECE9F0] bg-white px-6 py-6 shadow-[0_1px_3px_rgba(38,4,93,0.08)]">
      <ol className="relative flex flex-1 flex-col justify-between">
        {/* Static grey line spanning every circle's center */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[11px] top-[11px] w-[2px] bg-[#DDD7E5]"
          style={{ height: "calc(100% - 22px)" }}
        />
        {/* Green growing line — sits on top of the grey, behind the circles */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[11px] top-[11px] w-[2px] bg-[#1f9d6b]"
          style={{ height: `calc((100% - 22px) * ${travelP})` }}
        />

        {STEPS.map((label, i) => {
          const done = elapsed >= ARRIVAL_TIMES_MS[i];
          return (
            <li key={label} className="relative flex items-center gap-5">
              <StepMarker done={done} />
              <span
                className={`relative z-10 inline-block origin-left text-[14px] leading-none text-ink transition-[font-weight] duration-300 ${
                  done ? "font-medium animate-step-pop" : "font-normal"
                }`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function StepMarker({ done }: { done: boolean }) {
  return (
    <span
      className={`relative z-10 inline-block h-[22px] w-[22px] flex-none ${
        done ? "animate-step-pop" : ""
      }`}
    >
      {/* Inactive ring — fades out as the active state fades in */}
      <span
        className={`absolute inset-0 rounded-full border-[1.5px] border-[#DDD7E5] bg-white transition-opacity duration-200 ${
          done ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Active state — green disc + check, fades in as the line touches */}
      <span
        className={`absolute inset-0 inline-flex items-center justify-center rounded-full bg-[#1f9d6b] text-white shadow-[0_1px_2px_rgba(31,157,107,0.35)] transition-opacity duration-300 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 6.5 5 9l4.5-5.5" />
        </svg>
      </span>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   Browser window with Case Management content
   ───────────────────────────────────────────────────────── */
function BrowserWindow({ arrived }: { arrived: boolean }) {
  const [tab, setTab] = useState<TabId>("Staircasing");

  /** Stop the parent product card from opening the modal when interacting with the browser. */
  const stop = (e: MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={stop}
      onKeyDown={stop}
      className="product-demo-scope flex h-full w-full flex-col overflow-hidden rounded-[14px] border border-[rgba(20,10,50,0.06)] bg-[#fbfafa] shadow-[0_24px_48px_-20px_rgba(38,4,93,0.22),0_8px_20px_-10px_rgba(38,4,93,0.10)]"
    >
      {/* Title bar — chrome */}
      <div className="flex h-[34px] items-center gap-3 border-b border-[#D8D8DC] bg-[#ECECEC] px-3">
        <div className="flex gap-[6px]">
          <span className="h-[10px] w-[10px] rounded-full bg-[#ff5e57] ring-1 ring-black/10" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#ffbd2e] ring-1 ring-black/10" />
          <span className="h-[10px] w-[10px] rounded-full bg-[#28c840] ring-1 ring-black/10" />
        </div>
        <div className="mx-auto flex h-[20px] max-w-[260px] flex-1 items-center justify-center rounded-[5px] border border-[#D8D8DC] bg-white px-2 text-[10px] text-[#7a7390]">
          www.stairpay.com
        </div>
        <div className="w-[28px]" />
      </div>

      {/* App content — uses the .pd- classes so styling matches the hero demo */}
      <div className="flex-1 overflow-hidden bg-white px-5 pb-5 pt-4">
        <div className="mb-3">
          <h1 className="pd-page-title" style={{ fontSize: 18 }}>
            Case Management
          </h1>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <div className="pd-tabs" style={{ marginBottom: 0 }}>
            {(["Staircasing", "Resales"] as TabId[]).map((t) => (
              <button
                key={t}
                type="button"
                className={`pd-tab ${tab === t ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setTab(t);
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="pd-period-switch">
            <span className="on" style={{ width: "auto", padding: "0 10px" }}>All</span>
            <span style={{ width: "auto", padding: "0 10px" }}>Mine</span>
          </div>
        </div>

        {tab === "Staircasing" ? <StaircasingPanel arrived={arrived} /> : <ResalesPanel />}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Tab content panels
   ───────────────────────────────────────────────────────── */
function StaircasingPanel({ arrived }: { arrived: boolean }) {
  const activeCount = arrived ? 20 : 19;
  const totalCount = arrived ? 39 : 38;
  const rows = arrived ? [NEW_STAIRCASING_ROW, ...STAIRCASING_ROWS] : STAIRCASING_ROWS;

  return (
    <CasePanel
      headTitle="Staircasing"
      headPill={`${totalCount} total`}
      stats={[
        { l: "Active", v: activeCount, sub: "Open cases", pct: arrived ? 51 : 50, active: true },
        { l: "Completed", v: 18, sub: "Completed cases", pct: arrived ? 46 : 47, active: false },
        { l: "Archived", v: 1, sub: "Archived cases", pct: 3, active: false },
      ]}
      chartGroups={["Det", "AML", "MOS", "Pre", "Post"]}
      chartValues={arrived ? [4, 4, 6, 5, 1] : [3, 4, 6, 5, 1]}
      chartGroupColors={["#7eb6e8", "#7c5cf0", "#a78bfa", "#f4a8c5", "#fcd34d"]}
      chartMax={8}
      chartSubtitle={`· ${activeCount} across stages`}
      tableTitle="Active Cases"
      tablePill={`${activeCount}`}
      tableHeaders={["Name", "Address", "Transaction size", "Status", "Days since start", "Case manager"]}
      rows={rows}
      highlightFirstRow={arrived}
    />
  );
}

function ResalesPanel() {
  return (
    <CasePanel
      headTitle="Resales"
      headPill="24 total"
      stats={[
        { l: "Active", v: 11, sub: "Open cases", pct: 46, active: true },
        { l: "Completed", v: 12, sub: "Completed cases", pct: 50, active: false },
        { l: "Archived", v: 1, sub: "Archived cases", pct: 4, active: false },
      ]}
      chartGroups={["List", "View", "Off", "Exch", "Comp"]}
      chartValues={[3, 2, 3, 2, 1]}
      chartGroupColors={["#7eb6e8", "#7c5cf0", "#f4a8c5", "#fcd34d", "#86d3a4"]}
      chartMax={6}
      chartSubtitle="· 11 across stages"
      tableTitle="Active Cases"
      tablePill="11"
      tableHeaders={["Name", "Address", "Sale price", "Status", "Days since listed", "Case manager"]}
      rows={RESALES_ROWS}
    />
  );
}

/* ─────────────────────────────────────────────────────────
   Shared tab-content layout
   ───────────────────────────────────────────────────────── */
type Stat = { l: string; v: number; sub: string; pct: number; active: boolean };

function CasePanel({
  headTitle,
  headPill,
  stats,
  chartGroups,
  chartValues,
  chartGroupColors,
  chartMax,
  chartSubtitle,
  tableTitle,
  tablePill,
  tableHeaders,
  rows,
  highlightFirstRow,
}: {
  headTitle: string;
  headPill: string;
  stats: Stat[];
  chartGroups: string[];
  chartValues: number[];
  chartGroupColors: string[];
  chartMax: number;
  chartSubtitle: string;
  tableTitle: string;
  tablePill: string;
  tableHeaders: string[];
  rows: Row[];
  highlightFirstRow?: boolean;
}) {
  return (
    <>
      <div className="pd-grid c-2-1" style={{ marginBottom: 12, gap: 10 }}>
        <div className="pd-card" style={{ padding: 14 }}>
          <div className="pd-card-head" style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <div className="pd-card-title">{headTitle}</div>
              <span className="pd-pill gray tiny">{headPill}</span>
            </div>
          </div>
          <div className="pd-grid c-3" style={{ gap: 8 }}>
            {stats.map((c) => (
              <div
                key={c.l}
                style={{
                  border: c.active ? "1px solid var(--pd-primary)" : "1px solid var(--pd-line)",
                  background: c.active ? "var(--pd-primary-soft)" : "white",
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <div className="pd-stat-label" style={{ marginBottom: 2, fontSize: 10 }}>{c.l}</div>
                <div className="pd-stat-value" style={{ fontSize: 18, marginTop: 2 }}>{c.v}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8, fontSize: 9, color: "var(--pd-ink-3)" }}>
                  <span>{c.sub}</span>
                  <span style={{ color: "var(--pd-ink)", fontWeight: 500 }}>{c.pct}%</span>
                </div>
                <div style={{ height: 3, background: "var(--pd-line)", borderRadius: 99, marginTop: 4, overflow: "hidden" }}>
                  <div style={{ width: c.pct + "%", height: "100%", background: "var(--pd-ink)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pd-card" style={{ padding: 14, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div className="pd-card-head" style={{ marginBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <div className="pd-card-title">Active Cases</div>
              <span style={{ fontSize: 10, color: "var(--pd-ink-3)" }}>{chartSubtitle}</span>
            </div>
          </div>
          <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
            <div style={{ position: "absolute", inset: 0 }}>
              <BarChart
                groups={chartGroups}
                series={[{ name: "Stages", color: "#5b3fd6", values: chartValues }]}
                groupColors={chartGroupColors}
                yTicks={4}
                max={chartMax}
                fillHeight
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pd-card" style={{ padding: 14 }}>
        <div className="pd-card-head" style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div className="pd-card-title">{tableTitle}</div>
            <span className="pd-pill indigo tiny">{tablePill}</span>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div className="pd-search-input" style={{ minWidth: 90, fontSize: 10 }}>
              <Icon.Search style={{ width: 11, height: 11 }} />
              Search…
            </div>
            <span className="pd-btn icon" style={{ width: 26, height: 26 }}><Icon.Filter style={{ width: 12, height: 12 }} /></span>
            <span className="pd-btn icon" style={{ width: 26, height: 26 }}><Icon.Sort style={{ width: 12, height: 12 }} /></span>
            <span className="pd-btn icon" style={{ width: 26, height: 26 }}><Icon.Expand style={{ width: 12, height: 12 }} /></span>
          </div>
        </div>

        <div className="pd-table-wrap">
          <table className="pd-table" style={{ fontSize: 11 }}>
            <thead>
              <tr>
                <th style={{ width: 22 }}><span style={{ display: "inline-block", width: 11, height: 11, borderRadius: 3, border: "1px solid var(--pd-line-2)" }} /></th>
                {tableHeaders.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className={highlightFirstRow && i === 0 ? "case-new-row" : undefined}
                >
                  <td><span style={{ display: "inline-block", width: 11, height: 11, borderRadius: 3, border: "1px solid var(--pd-line-2)" }} /></td>
                  <td className="name">{r.name}</td>
                  <td>{r.addr}</td>
                  <td>{r.amount}</td>
                  <td>
                    <span className={`pd-pill ${r.status.c} tiny`} style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                      {r.status.l}
                      <Icon.Caret style={{ width: 9, height: 9, opacity: 0.7 }} />
                    </span>
                  </td>
                  <td>{r.days}</td>
                  <td>
                    {r.mgr ? (
                      <span className="pd-pill gray tiny" style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                        {r.mgr}
                        <Icon.Caret style={{ width: 9, height: 9, opacity: 0.7 }} />
                      </span>
                    ) : (
                      <span className="pd-pill gray tiny" style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                        <Icon.Caret style={{ width: 9, height: 9, opacity: 0.7 }} />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
