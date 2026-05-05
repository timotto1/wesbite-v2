"use client";

/**
 * Detail-page illustration for the Listings card modal.
 *
 * Renders a marketing mock of the Stairpay sales-and-marketing app: a browser
 * frame containing a sidebar nav + an Enquiries dashboard with stat tiles and
 * a sortable enquiries table.
 */

type StageColor =
  | "green"
  | "lavender"
  | "blue"
  | "amber"
  | "grey"
  | "violet"
  | "mos"
  | "orange";

type Enquiry = {
  stage: string;
  stageColor: StageColor;
  action: string;
  actionOk: boolean;
  days: string;
  daysAmber?: boolean;
  lead: string;
  listing: string;
  development: string;
  manager: string;
  received: string;
};

const ENQUIRIES: Enquiry[] = [
  {
    stage: "Completion",
    stageColor: "green",
    action: "Ready to advance",
    actionOk: true,
    days: "63d",
    lead: "Tim Otto",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "James Carter",
    received: "02/03/26",
  },
  {
    stage: "Reserved",
    stageColor: "green",
    action: "Ready to advance",
    actionOk: true,
    days: "63d",
    lead: "Jane Smith",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "James Carter",
    received: "02/03/26",
  },
  {
    stage: "Completion",
    stageColor: "green",
    action: "Ready to advance",
    actionOk: true,
    days: "63d",
    lead: "Sophie Allen",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "Sarah Mitchell",
    received: "01/03/26",
  },
  {
    stage: "Contacted",
    stageColor: "lavender",
    action: "Contact method recorded",
    actionOk: false,
    days: "67d",
    lead: "James Carter",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "25/02/26",
  },
  {
    stage: "Broker",
    stageColor: "blue",
    action: "Preferred share recorded",
    actionOk: false,
    days: "71d",
    lead: "Priya Sharma",
    listing: "3-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "20/02/26",
  },
  {
    stage: "Qualified",
    stageColor: "amber",
    action: "Application data complete",
    actionOk: false,
    days: "75d",
    daysAmber: true,
    lead: "Tom Wright",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "12/02/26",
  },
  {
    stage: "Lost",
    stageColor: "grey",
    action: "—",
    actionOk: false,
    days: "83d",
    daysAmber: true,
    lead: "Daniel Moore",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "10/02/26",
  },
  {
    stage: "Viewing",
    stageColor: "violet",
    action: "Ready to advance",
    actionOk: true,
    days: "83d",
    daysAmber: true,
    lead: "Hannah Lewis",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "02/02/26",
  },
  {
    stage: "Reserved",
    stageColor: "green",
    action: "ID check passed",
    actionOk: false,
    days: "94d",
    daysAmber: true,
    lead: "Michael Brown",
    listing: "2-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "16/01/26",
  },
  {
    stage: "MOS",
    stageColor: "mos",
    action: "Ready to advance",
    actionOk: true,
    days: "108d",
    daysAmber: true,
    lead: "Emma Davis",
    listing: "3-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "22/12/25",
  },
  {
    stage: "Exchange",
    stageColor: "orange",
    action: "Exchange deposit set",
    actionOk: false,
    days: "118d",
    daysAmber: true,
    lead: "Oliver Johnson",
    listing: "3-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "22/11/25",
  },
  {
    stage: "Completion",
    stageColor: "green",
    action: "Ready to advance",
    actionOk: true,
    days: "118d",
    daysAmber: true,
    lead: "Charlotte Wilson",
    listing: "3-bed apartment at M…",
    development: "Maple Gardens",
    manager: "—",
    received: "23/10/25",
  },
];

const STAGE_PILL_BY_COLOR: Record<StageColor, string> = {
  green: "border-[#A6E5C2] text-[#0F8C4D] bg-[#ECFDF3]",
  mos: "border-[#A6E5C2] text-[#0F8C4D] bg-[#ECFDF3]",
  lavender: "border-[#D8C8F5] text-[#6B3FBA] bg-[#F4ECFF]",
  blue: "border-[#BFD3F5] text-[#2E5BC4] bg-[#ECF2FF]",
  amber: "border-[#F2D27A] text-[#9A6B00] bg-[#FFF6E0]",
  grey: "border-[#D8D6DE] text-[#7F7B89] bg-[#F2F1F4]",
  violet: "border-[#CDB4F1] text-[#5C2BB7] bg-[#EFE6FB]",
  orange: "border-[#F4BEA0] text-[#B45520] bg-[#FFEBDC]",
};

export function ListingsModalPreview() {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#E1DDE6] bg-white shadow-[0_18px_40px_-12px_rgba(38,4,93,0.18)]">
      <BrowserChrome />
      <div className="flex bg-[#FBF9FF]">
        <Sidebar />
        <MainArea />
      </div>
    </div>
  );
}

function BrowserChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-[#ECE9F0] bg-[#F8F6FA] px-3 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#E0DCE3]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#E0DCE3]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#E0DCE3]" />
      <div className="ml-3 flex h-6 flex-1 items-center justify-center rounded-[6px] bg-white text-[10px] text-[#9994A3]">
        www.stairpay.com
      </div>
    </div>
  );
}

/* ─── Sidebar ─── */
function Sidebar() {
  return (
    <aside className="flex w-[170px] flex-none flex-col border-r border-[#ECE9F0] bg-white px-3 pt-3 pb-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-[10px] text-[#26045D]">
          <span className="font-semibold">Mary</span>
          <span className="text-[#C5C0CB]">/</span>
          <span>Clarion</span>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
        <SearchIcon />
      </div>

      <NavGroup label="Residents">
        <NavItem
          label="Case management"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          }
        />
        <NavItem
          label="Reporting"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="6" y1="20" x2="6" y2="14" />
              <line x1="12" y1="20" x2="12" y2="6" />
              <line x1="18" y1="20" x2="18" y2="11" />
            </svg>
          }
        />
        <NavItem
          label="Insights"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 1.5l1.7 6 6 1.7-6 1.7-1.7 6-1.7-6-6-1.7 6-1.7z" />
            </svg>
          }
        />
      </NavGroup>

      <NavGroup label="Sales and marketing">
        <NavItem
          label="Listings"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          }
        />
        <NavItem
          active
          label="Enquiries"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />
      </NavGroup>

      <NavGroup label="Units">
        <NavItem
          label="Units"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 11l9-7 9 7" />
              <path d="M5 10v9h14V10" />
            </svg>
          }
        />
        <NavItem
          label="Developments"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="7" height="9" rx="1" />
              <rect x="14" y="3" width="7" height="5" rx="1" />
              <rect x="14" y="12" width="7" height="9" rx="1" />
              <rect x="3" y="16" width="7" height="5" rx="1" />
            </svg>
          }
        />
        <NavItem
          label="Add new units"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          }
        />
      </NavGroup>

      <div className="mt-4">
        <NavItem
          label="Compliance"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          }
        />
      </div>

      <div className="mt-auto flex flex-col gap-1 pt-4 text-[#9994A3]">
        <NavItem
          dim
          label="Help"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12" y2="17.01" />
            </svg>
          }
        />
        <button
          type="button"
          className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-[#9994A3]"
        >
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Collapse
        </button>
      </div>
    </aside>
  );
}

function NavGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="px-2 pb-1.5 text-[8.5px] font-medium uppercase tracking-wider text-[#9994A3]">
        {label}
      </div>
      <div className="flex flex-col gap-0.5">{children}</div>
    </div>
  );
}

function NavItem({
  label,
  icon,
  active,
  dim,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  dim?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-[6px] px-2 py-1.5 text-[10px] ${
        active
          ? "bg-[#1F0B56] text-white"
          : dim
            ? "text-[#9994A3]"
            : "text-[#26045D]"
      }`}
    >
      <span className="h-3 w-3 flex-none">{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );
}

function SearchIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center text-[#9994A3]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </span>
  );
}

/* ─── Main area ─── */
function MainArea() {
  return (
    <div className="flex-1 px-5 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-medium text-[#26045D] [letter-spacing:-0.02em]">
          Enquiries
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#26045D] px-3 py-1.5 text-[11px] font-medium text-white"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New enquiry
        </button>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-3">
        <StatTile
          label="All enquiries"
          value="12"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            </svg>
          }
        />
        <StatTile
          label="New today"
          value="0"
          sub="received today"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="12" y1="14" x2="12" y2="18" />
              <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
          }
        />
        <StatTile
          label="At reservation"
          value="2"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 11l9-7 9 7" />
              <path d="M5 10v9h14V10" />
            </svg>
          }
        />
        <StatTile
          label="Stalled"
          value="11"
          sub="in stage > 7 days"
          tone="amber"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          }
        />
      </div>

      <div className="mt-4 rounded-[10px] border border-[#ECE9F0] bg-white">
        <div className="flex items-center justify-between border-b border-[#ECE9F0] px-4 py-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[12px] font-semibold text-[#26045D] [letter-spacing:-0.01em]">
              All enquiries
            </span>
            <span className="text-[10px] text-[#87858E]">12 enquiries</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-[160px] items-center gap-1.5 rounded-full border border-[#ECE9F0] bg-white px-2 text-[9px] text-[#9994A3]">
              <SearchIcon />
              <span>Search leads, listings…</span>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-md text-[#9994A3]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-md text-[#9994A3]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </span>
          </div>
        </div>

        <EnquiriesTable />
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
  sub,
  icon,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  tone?: "amber";
}) {
  const isAmber = tone === "amber";
  return (
    <div
      className={`relative rounded-[10px] border bg-white px-3 py-2.5 ${
        isAmber ? "border-[#F2D27A]" : "border-[#ECE9F0]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="text-[10px] text-[#87858E]">{label}</span>
        <span className={`h-3 w-3 ${isAmber ? "text-[#D69500]" : "text-[#9994A3]"}`}>
          {icon}
        </span>
      </div>
      <div
        className={`mt-1 text-[22px] font-semibold leading-none [letter-spacing:-0.02em] ${
          isAmber ? "text-[#D69500]" : "text-[#26045D]"
        }`}
      >
        {value}
      </div>
      {sub ? (
        <div className="mt-1 text-[9px] text-[#9994A3]">{sub}</div>
      ) : (
        <div className="mt-1 h-[11px]" />
      )}
    </div>
  );
}

/* ─── Enquiries table ─── */
function EnquiriesTable() {
  const cols = [
    { label: "Stage", icon: <LayersIcon /> },
    { label: "Next action", icon: <CheckCircleIcon /> },
    { label: "Days in stage", icon: <CalendarIcon /> },
    { label: "Lead", icon: <UserIcon /> },
    { label: "Listing", icon: <HomeIcon /> },
    { label: "Development", icon: <BuildingIcon /> },
    { label: "Case manager", icon: <ManagerIcon /> },
    { label: "Received", icon: <CalendarIcon /> },
  ];

  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-[20px_88px_140px_72px_100px_140px_120px_110px_70px] gap-2 border-b border-[#ECE9F0] px-4 py-2 text-[9px] font-medium uppercase tracking-wider text-[#87858E]">
        <span />
        {cols.map((c) => (
          <span key={c.label} className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 text-[#9994A3]">{c.icon}</span>
            <span className="truncate">{c.label}</span>
            <SortIcon />
          </span>
        ))}
      </div>

      <div className="flex flex-col">
        {ENQUIRIES.map((e) => (
          <Row key={`${e.lead}-${e.received}`} e={e} />
        ))}
      </div>
    </div>
  );
}

function Row({ e }: { e: Enquiry }) {
  return (
    <div className="grid grid-cols-[20px_88px_140px_72px_100px_140px_120px_110px_70px] items-center gap-2 border-b border-[#F4F1F4] px-4 py-2 text-[10px] text-[#26045D]">
      <span className="flex h-3 w-3 items-center justify-center rounded-[3px] border border-[#D8D6DE]" />
      <span>
        <span
          className={`inline-flex rounded-[5px] border px-1.5 py-[2px] text-[9px] font-medium ${
            STAGE_PILL_BY_COLOR[e.stageColor]
          }`}
        >
          {e.stage}
        </span>
      </span>
      <span className="flex items-center gap-1 truncate">
        {e.actionOk ? (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F8C4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <polyline points="8 12 11 15 16 9" />
          </svg>
        ) : null}
        <span className={`truncate ${e.actionOk ? "text-[#0F8C4D]" : "text-[#87858E]"}`}>
          {e.action}
        </span>
      </span>
      <span className={e.daysAmber ? "text-[#D69500]" : "text-[#26045D]"}>{e.days}</span>
      <span className="truncate font-medium">{e.lead}</span>
      <span className="truncate text-[#26045D]">{e.listing}</span>
      <span className="truncate text-[#26045D]">{e.development}</span>
      <span className="truncate text-[#87858E]">{e.manager}</span>
      <span className="truncate text-[#87858E]">{e.received}</span>
    </div>
  );
}

function SortIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="8 9 12 5 16 9" />
      <polyline points="8 15 12 19 16 15" />
    </svg>
  );
}

/* ─── Tiny header icons ─── */
function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="8 12 11 15 16 9" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9h14V10" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="2" width="16" height="20" rx="1.5" />
      <line x1="9" y1="6" x2="9" y2="6" />
      <line x1="15" y1="6" x2="15" y2="6" />
      <line x1="9" y1="10" x2="9" y2="10" />
      <line x1="15" y1="10" x2="15" y2="10" />
      <path d="M10 22v-4h4v4" />
    </svg>
  );
}
function ManagerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 21a6 6 0 0 1 12 0" />
      <path d="M19 9v6" />
      <path d="M16 12h6" />
    </svg>
  );
}
