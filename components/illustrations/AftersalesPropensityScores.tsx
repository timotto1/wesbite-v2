type Ramp = {
  avatarBg: string;
  avatarText: string;
  badgeBg: string;
  badgeText: string;
  scoreText: string;
  iconText: string;
  iconBg: string;
  progressTrack: string;
  progressFill: string;
};

const TEAL_RAMP: Ramp = {
  avatarBg: "#CCFBF1",
  avatarText: "#0F766E",
  badgeBg: "#CCFBF1",
  badgeText: "#0F766E",
  scoreText: "#0F766E",
  iconText: "#0F766E",
  iconBg: "#E0F7F2",
  progressTrack: "#E0F7F2",
  progressFill: "#14B8A6",
};

const PURPLE_RAMP: Ramp = {
  avatarBg: "#EDE9FE",
  avatarText: "#6D28D9",
  badgeBg: "#EDE9FE",
  badgeText: "#6D28D9",
  scoreText: "#6D28D9",
  iconText: "#6D28D9",
  iconBg: "#F1ECFE",
  progressTrack: "#F1ECFE",
  progressFill: "#8B5CF6",
};

const AMBER_RAMP: Ramp = {
  avatarBg: "#FEF3C7",
  avatarText: "#B45309",
  badgeBg: "#FEF3C7",
  badgeText: "#B45309",
  scoreText: "#B45309",
  iconText: "#B45309",
  iconBg: "#FEF6D9",
  progressTrack: "#FEF6D9",
  progressFill: "#F59E0B",
};

const TREND_GREEN = "#059669";
const MUTED = "#6B7280";
const INK = "#111827";
const CARD_BORDER = "rgba(17, 24, 39, 0.08)";

type SignalType =
  | "bank"
  | "wallet"
  | "mail"
  | "trending-down"
  | "stairs"
  | "chart"
  | "click"
  | "calendar";

type CardData = {
  initials: string;
  resident: string;
  lease: string;
  tier: string;
  score: number;
  trend: string;
  signals: { type: SignalType; text: string }[];
  updated: string;
  ramp: Ramp;
};

const CARDS: CardData[] = [
  {
    initials: "RM",
    resident: "R.M.",
    lease: "Year 8",
    tier: "High",
    score: 87,
    trend: "+6%",
    signals: [
      { type: "bank", text: "48% equity built" },
      { type: "wallet", text: "£22k headroom" },
      { type: "mail", text: "5 comms opened" },
    ],
    updated: "Updated 2 hours ago",
    ramp: TEAL_RAMP,
  },
  {
    initials: "SK",
    resident: "S.K.",
    lease: "Year 5",
    tier: "Building",
    score: 64,
    trend: "+12%",
    signals: [
      { type: "trending-down", text: "Rates ↓ 0.4%" },
      { type: "stairs", text: "3 scheme comparables" },
      { type: "bank", text: "31% equity built" },
    ],
    updated: "Updated 4 hours ago",
    ramp: PURPLE_RAMP,
  },
  {
    initials: "JP",
    resident: "J.P.",
    lease: "Year 3",
    tier: "Watch",
    score: 41,
    trend: "+8%",
    signals: [
      { type: "chart", text: "HPI ↑ 3.1% YoY" },
      { type: "click", text: "4 portal visits" },
      { type: "calendar", text: "Year 3 — early window" },
    ],
    updated: "Updated 1 hour ago",
    ramp: AMBER_RAMP,
  },
];

export function AftersalesPropensityScores() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-card bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/resident/resident-portal-background.png')",
      }}
    >
      <div className="relative flex h-full w-full items-center justify-center p-4 md:p-6">
        <div className="grid w-full max-w-[820px] grid-cols-3 gap-3">
          {CARDS.map((c) => (
            <PropensityCard key={c.initials} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PropensityCard({
  initials,
  resident,
  lease,
  tier,
  score,
  trend,
  signals,
  updated,
  ramp,
}: CardData) {
  return (
    <div
      className="flex flex-col rounded-[12px] bg-white p-3.5"
      style={{ border: `1px solid ${CARD_BORDER}` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <span
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full"
          style={{ backgroundColor: ramp.avatarBg, color: ramp.avatarText }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label={initials}
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21 a8 8 0 0 1 16 0 Z" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p
            className="text-[11px] font-medium leading-tight"
            style={{ color: INK }}
          >
            {resident}
          </p>
          <p className="text-[9px] leading-tight" style={{ color: MUTED }}>
            {lease}
          </p>
        </div>
        <span
          className="flex-none rounded-full px-2 py-0.5 text-[9px] font-medium"
          style={{ backgroundColor: ramp.badgeBg, color: ramp.badgeText }}
        >
          {tier}
        </span>
      </div>

      {/* Score block */}
      <div className="mt-3 flex items-baseline gap-1.5">
        <span
          className="text-[28px] font-medium leading-none tracking-tight"
          style={{ color: ramp.scoreText }}
        >
          {score}
        </span>
        <span className="text-[11px] font-normal" style={{ color: MUTED }}>
          / 100
        </span>
        <span
          className="ml-auto inline-flex flex-none items-center gap-0.5 whitespace-nowrap text-[9px] font-medium"
          style={{ color: TREND_GREEN }}
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="6 11 12 5 18 11" />
          </svg>
          {trend}
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="mt-2.5 h-1 w-full overflow-hidden rounded-full"
        style={{ backgroundColor: ramp.progressTrack }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${score}%`,
            backgroundColor: ramp.progressFill,
          }}
        />
      </div>

      {/* Signals */}
      <div className="mt-3.5">
        <p className="text-[9px] font-normal" style={{ color: MUTED }}>
          Top signals
        </p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {signals.map((s, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span
                className="flex h-4 w-4 flex-none items-center justify-center rounded-[3px]"
                style={{ backgroundColor: ramp.iconBg, color: ramp.iconText }}
              >
                <SignalIcon type={s.type} />
              </span>
              <span
                className="whitespace-nowrap text-[10px] leading-snug"
                style={{ color: INK }}
              >
                {s.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div
        className="-mx-3.5 mt-3.5 flex items-center gap-1.5 border-t px-3.5 pt-2.5"
        style={{ borderColor: CARD_BORDER }}
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          style={{ color: MUTED }}
        >
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
          <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
        </svg>
        <span className="text-[9px]" style={{ color: MUTED }}>
          {updated}
        </span>
      </div>
    </div>
  );
}

function SignalIcon({ type }: { type: SignalType }) {
  const props = {
    width: 9,
    height: 9,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor" as const,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (type) {
    case "bank":
      return (
        <svg {...props}>
          <path d="M3 21h18" />
          <path d="M5 21V10l7-5 7 5v11" />
          <line x1="9" y1="14" x2="9" y2="19" />
          <line x1="15" y1="14" x2="15" y2="19" />
          <line x1="12" y1="14" x2="12" y2="19" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...props}>
          <rect x="2.5" y="6" width="19" height="13" rx="2" />
          <path d="M16 12h4" />
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 8 12 14 21 8" />
        </svg>
      );
    case "trending-down":
      return (
        <svg {...props}>
          <polyline points="3 7 10 14 14 10 21 17" />
          <polyline points="21 11 21 17 15 17" />
        </svg>
      );
    case "stairs":
      return (
        <svg {...props}>
          <polyline points="3 20 3 16 8 16 8 12 13 12 13 8 18 8 18 4 21 4" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <line x1="3" y1="20" x2="21" y2="20" />
          <line x1="6" y1="16" x2="6" y2="20" />
          <line x1="11" y1="11" x2="11" y2="20" />
          <line x1="16" y1="6" x2="16" y2="20" />
          <line x1="21" y1="4" x2="21" y2="20" />
        </svg>
      );
    case "click":
      return (
        <svg {...props}>
          <path d="M9 9 L13 21 L15.5 15.5 L21 13 Z" />
          <line x1="3" y1="3" x2="6" y2="6" />
          <line x1="3" y1="11" x2="7" y2="11" />
          <line x1="11" y1="3" x2="11" y2="7" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="16" y1="3" x2="16" y2="7" />
        </svg>
      );
  }
}
