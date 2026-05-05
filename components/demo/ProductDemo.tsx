"use client";

import { useState } from "react";

type SubTab = "support" | "staircasing" | "resales";
type Range = "Y" | "Q" | "M";

type Enquiry = {
  name: string;
  address: string;
  type: "email" | "phone";
  process: "resales" | "staircasing" | "other";
  signedUp: string;
  started: string;
  enquiryDate: string;
  support: { initial: string; name: string; tone: "purple" | "pink" };
};

const ENQUIRIES: Enquiry[] = [
  { name: "Patricia Adeyemi", address: "14 Beechwood Close", type: "email", process: "resales", signedUp: "15/01/26", started: "—", enquiryDate: "01/03/26", support: { initial: "M", name: "Mary", tone: "purple" } },
  { name: "Taiwo Ogundimu", address: "3 Rosamund Close", type: "phone", process: "staircasing", signedUp: "20/06/24", started: "—", enquiryDate: "01/03/26", support: { initial: "E", name: "Elena", tone: "pink" } },
  { name: "Marcus Williams", address: "11 Rowan Court", type: "email", process: "resales", signedUp: "10/03/22", started: "—", enquiryDate: "02/03/26", support: { initial: "D", name: "Dionne", tone: "purple" } },
  { name: "Anonymous Resident", address: "Address to be confirmed", type: "email", process: "other", signedUp: "—", started: "—", enquiryDate: "02/03/26", support: { initial: "M", name: "Mary", tone: "purple" } },
  { name: "Babatunde Ola", address: "6 Chestnut Grove", type: "phone", process: "staircasing", signedUp: "04/07/21", started: "—", enquiryDate: "02/03/26", support: { initial: "D", name: "Dionne", tone: "purple" } },
];

const SIDEBAR = [
  {
    label: "Residents",
    items: [
      { id: "case-management", name: "Case management", icon: IconCases },
      { id: "reporting", name: "Reporting", icon: IconReport },
      { id: "insights", name: "Insights", icon: IconSpark },
    ],
  },
  {
    label: "Sales and marketing",
    items: [
      { id: "listings", name: "Listings", icon: IconList },
      { id: "enquiries", name: "Enquiries", icon: IconUsers },
    ],
  },
  {
    label: "Units",
    items: [
      { id: "units", name: "Units", icon: IconHome },
      { id: "developments", name: "Developments", icon: IconBuilding },
      { id: "add-units", name: "Add new units", icon: IconPlus },
    ],
  },
  {
    label: "",
    items: [{ id: "compliance", name: "Compliance", icon: IconGrid }],
  },
];

export function ProductDemo() {
  const [subTab, setSubTab] = useState<SubTab>("support");
  const [range, setRange] = useState<Range>("Y");
  const [navItem, setNavItem] = useState("case-management");

  return (
    <div className="bg-paper-panel text-left text-ink">
      <div className="grid grid-cols-[220px_1fr]">
        <Sidebar active={navItem} onSelect={setNavItem} />
        <main className="min-w-0 px-8 pb-10 pt-8">
          <h2 className="text-heading-lg font-semibold tracking-tight text-ink">Case Management</h2>

          <div className="mt-6 flex items-center gap-2">
            {(["support", "staircasing", "resales"] as SubTab[]).map((t) => (
              <button
                key={t}
                onClick={() => setSubTab(t)}
                className={`rounded-pill px-5 py-2 text-body-sm font-medium capitalize transition-colors ${
                  subTab === t ? "bg-ink text-paper-card" : "text-ink-muted hover:text-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_280px]">
            <TotalEnquiriesCard range={range} onRange={setRange} />
            <EnquiryTypeCard />
          </div>

          <EnquiriesTable rows={ENQUIRIES} />
        </main>
      </div>
    </div>
  );
}

function Sidebar({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <aside className="flex flex-col gap-6 border-r border-hairline border-rule/60 bg-paper-panel px-5 py-6">
      <div className="flex items-center justify-between text-body-sm">
        <span className="font-semibold text-ink">
          Mary <span className="text-ink-light">/</span> Clarion <span className="text-ink-light">▾</span>
        </span>
        <button aria-label="Search" className="text-ink-light hover:text-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-5">
        {SIDEBAR.map((group, i) => (
          <div key={i} className="flex flex-col gap-1">
            {group.label ? (
              <p className="px-3 pb-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink-light">
                {group.label}
              </p>
            ) : null}
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-body-sm transition-colors ${
                    isActive
                      ? "bg-stairpay-soft text-stairpay"
                      : "text-ink-muted hover:bg-stairpay-soft/50 hover:text-ink"
                  }`}
                >
                  <Icon active={isActive} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-2 border-t border-hairline border-rule/60 pt-4 text-body-sm text-ink-muted">
        <button className="flex items-center gap-2 px-3 py-1 hover:text-ink">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.7M12 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Help
        </button>
        <button className="flex items-center gap-2 px-3 py-1 text-ink-light hover:text-ink">
          <span>‹</span> Collapse
        </button>
      </div>
    </aside>
  );
}

function TotalEnquiriesCard({ range, onRange }: { range: Range; onRange: (r: Range) => void }) {
  return (
    <div className="rounded-card bg-paper-card p-6">
      <div className="flex items-start justify-between">
        <h3 className="text-heading-sm font-semibold text-ink">Total Enquiries</h3>
        <button aria-label="Open" className="text-ink-light hover:text-ink">›</button>
      </div>
      <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-light">Enquiries</p>
      <div className="mt-1 flex items-end gap-3">
        <span className="text-heading-xl font-semibold text-ink">15</span>
        <span className="mb-2 inline-flex items-center gap-1 rounded-pill bg-rose-100 px-2 py-0.5 text-[11px] font-medium text-rose-600">
          ↓ 5%
        </span>
        <div className="ml-auto flex overflow-hidden rounded-md border-hairline border-rule">
          {(["Y", "Q", "M"] as Range[]).map((r) => (
            <button
              key={r}
              onClick={() => onRange(r)}
              className={`px-3 py-1 text-[11px] font-medium transition-colors ${
                range === r ? "bg-stairpay text-paper-card" : "text-ink-muted hover:bg-paper-panel"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <Sparkline />
      <div className="mt-2 flex justify-between px-1 text-[10px] uppercase tracking-[0.1em] text-ink-light">
        {["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 320 80" className="mt-4 h-20 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26045D" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#26045D" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 55 C 30 50, 50 58, 80 52 S 130 40, 160 44 S 220 32, 250 28 S 300 18, 320 14 L 320 80 L 0 80 Z"
        fill="url(#spark)"
      />
      <path
        d="M0 55 C 30 50, 50 58, 80 52 S 130 40, 160 44 S 220 32, 250 28 S 300 18, 320 14"
        fill="none"
        stroke="#26045D"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function EnquiryTypeCard() {
  const stairPct = 0.7;
  const C = 2 * Math.PI * 36;
  return (
    <div className="rounded-card bg-paper-card p-6">
      <h3 className="text-heading-sm font-semibold text-ink">Enquiry Type</h3>
      <div className="mt-4 flex justify-center">
        <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90">
          <circle cx="50" cy="50" r="36" fill="none" stroke="#FBCFE0" strokeWidth="14" />
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="none"
            stroke="#26045D"
            strokeWidth="14"
            strokeDasharray={`${C * stairPct} ${C}`}
          />
        </svg>
      </div>
      <ul className="mt-4 space-y-2 text-body-sm text-ink">
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-stairpay" /> Staircasing
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-300" /> Resales
        </li>
      </ul>
    </div>
  );
}

function EnquiriesTable({ rows }: { rows: Enquiry[] }) {
  return (
    <div className="mt-5 rounded-card bg-paper-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-heading-sm font-semibold text-ink">Enquiries</h3>
          <span className="rounded-pill bg-stairpay-soft px-3 py-1 text-[11px] font-medium text-stairpay">
            {rows.length} total enquiries
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-md border-hairline border-rule px-3 py-1.5 text-body-sm text-ink-light">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Search...</span>
          </div>
          <IconButton label="Filter">⛛</IconButton>
          <IconButton label="Columns">▥</IconButton>
          <IconButton label="Download">↓</IconButton>
          <button className="inline-flex items-center gap-1 rounded-[5px] bg-stairpay px-3 py-2 text-body-sm font-medium text-paper-card hover:bg-ink">
            + Add enquiry
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-hidden">
        <div className="grid grid-cols-[20px_minmax(120px,1.4fr)_minmax(140px,1.7fr)_44px_104px_88px_92px_104px] items-center gap-3 border-b border-hairline border-rule px-2 py-3 text-[11px] font-medium uppercase tracking-[0.06em] text-ink-light">
          <span />
          <span>Name ↕</span>
          <span>Address</span>
          <span>Type</span>
          <span>Process</span>
          <span>Signed up ↕</span>
          <span>Enquiry ↕</span>
          <span>Support</span>
        </div>
        {rows.map((row) => (
          <Row key={row.name} row={row} />
        ))}
      </div>
    </div>
  );
}

function Row({ row }: { row: Enquiry }) {
  return (
    <div className="grid grid-cols-[20px_minmax(120px,1.4fr)_minmax(140px,1.7fr)_44px_104px_88px_92px_104px] items-center gap-3 border-b border-hairline border-rule/70 px-2 py-3 text-body-sm text-ink hover:bg-paper-panel/50">
      <input type="checkbox" className="h-3.5 w-3.5 rounded-sm border-rule" />
      <span className="min-w-0 truncate font-medium">{row.name}</span>
      <span className="min-w-0 truncate text-ink-muted">{row.address}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stairpay-soft text-stairpay">
        {row.type === "email" ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 4 7a2 2 0 0 1 1-3z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <ProcessBadge value={row.process} />
      <span className="text-ink-muted">{row.signedUp}</span>
      <span className="text-ink-muted">{row.enquiryDate}</span>
      <span className="flex min-w-0 items-center gap-2">
        <span
          className={`flex h-5 w-5 flex-none items-center justify-center rounded-full text-[10px] font-semibold text-paper-card ${
            row.support.tone === "purple" ? "bg-stairpay" : "bg-rose-300"
          }`}
        >
          {row.support.initial}
        </span>
        <span className="truncate">{row.support.name}</span>
      </span>
    </div>
  );
}

function ProcessBadge({ value }: { value: Enquiry["process"] }) {
  const styles: Record<Enquiry["process"], string> = {
    resales: "bg-rose-100 text-rose-600",
    staircasing: "bg-stairpay-soft text-stairpay",
    other: "bg-paper-panel text-ink-muted",
  };
  return (
    <span className={`inline-flex w-fit items-center rounded-pill px-3 py-1 text-[11px] font-medium capitalize ${styles[value]}`}>
      {value}
    </span>
  );
}

function IconButton({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-md border-hairline border-rule text-ink-light hover:text-ink"
    >
      {children}
    </button>
  );
}

function IconCases({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
      <path d="M8 9h8M8 13h6M8 17h4" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconReport({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V8m6 12V4m6 16v-8m6 8V12" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconSpark({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconList({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h2M4 12h2M4 18h2M9 6h11M9 12h11M9 18h11" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconUsers({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
      <path d="M3 19a6 6 0 0 1 12 0M16 11a3 3 0 1 0 0-6M21 19a5 5 0 0 0-4-4.9" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconHome({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="m3 11 9-7 9 7v9a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2v-9z" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function IconBuilding({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="3" width="14" height="18" rx="1.5" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconPlus({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
      <path d="M12 8v8M8 12h8" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconGrid({ active }: { active: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke={active ? "#26045D" : "currentColor"} strokeWidth="1.5" />
    </svg>
  );
}
