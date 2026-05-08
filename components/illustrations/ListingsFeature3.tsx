import type { CSSProperties, ReactNode } from "react";

const FRAME_W = 914;
const FRAME_H = 714;

const PURPLE_DARK = "#26045D";
const PURPLE_MID = "#7114E2";
const PURPLE_LIGHT = "#AE78F1";

const GREEN_PILL_BG = "#DCEFE3";
const GREEN_PILL_FG = "#1B6F44";
const AMBER_PILL_BG = "#F8E9C8";
const AMBER_PILL_FG = "#7A5A12";
const NEUTRAL_PILL_BG = "#EFEAFA";
const NEUTRAL_PILL_FG = "#3B1A8A";

const TEXT_INK = "#1A1530";
const TEXT_MUTED = "#7B7A88";
const RULE = "#E8E5EE";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[25px]"
      style={{
        aspectRatio: `${FRAME_W} / ${FRAME_H}`,
        containerType: "inline-size",
        backgroundImage: "url('/images/listings/background-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={
          {
            width: `${FRAME_W}px`,
            height: `${FRAME_H}px`,
            transform: `scale(calc(100cqi / ${FRAME_W}px))`,
            transformOrigin: "top left",
            position: "absolute",
            inset: 0,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}

type StatusTone = "positive" | "amber" | "neutral";

type Party = {
  initials: string;
  avatarColor: string;
  name: string;
  role: string;
  org: string;
  status: { label: string; tone: StatusTone };
  detail: { label: string; value: string };
  next: string;
};

const PARTIES: Party[] = [
  {
    initials: "SC",
    avatarColor: PURPLE_DARK,
    name: "Sara Chen",
    role: "HOUSING ASSOCIATION",
    org: "Northgate Housing Group · Sales lead",
    status: { label: "Case open", tone: "positive" },
    detail: { label: "Plot", value: "MC-014 · Maple Court" },
    next: "Memo of sale issued · Tue",
  },
  {
    initials: "JM",
    avatarColor: PURPLE_MID,
    name: "Jordan Miles",
    role: "BUYER",
    org: "First-time buyer · 35% share",
    status: { label: "Eligibility complete", tone: "positive" },
    detail: { label: "Identity", value: "AML & ID verified" },
    next: "Mortgage offer · awaited",
  },
  {
    initials: "DS",
    avatarColor: PURPLE_LIGHT,
    name: "Dev Singh",
    role: "SOLICITOR",
    org: "Lewis & Hart · Buyer-side",
    status: { label: "Awaiting docs", tone: "amber" },
    detail: { label: "SLA", value: "5 working days" },
    next: "Searches ordered · Mon",
  },
];

function Pill({ tone, children }: { tone: StatusTone; children: ReactNode }) {
  const map = {
    positive: { bg: GREEN_PILL_BG, fg: GREEN_PILL_FG },
    amber: { bg: AMBER_PILL_BG, fg: AMBER_PILL_FG },
    neutral: { bg: NEUTRAL_PILL_BG, fg: NEUTRAL_PILL_FG },
  } as const;
  const { bg, fg } = map[tone];
  return (
    <span
      style={{
        background: bg,
        color: fg,
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 8px",
        borderRadius: 5,
        lineHeight: 1.4,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function PartyCard({ party, dimmed = false }: { party: Party; dimmed?: boolean }) {
  return (
    <div
      style={{
        width: 380,
        background: dimmed ? "#EFEAF6" : "#FFFFFF",
        borderRadius: 22,
        boxShadow: dimmed
          ? "0 10px 30px rgba(38, 4, 93, 0.10)"
          : "0 24px 64px rgba(38, 4, 93, 0.24), 0 6px 16px rgba(38, 4, 93, 0.10)",
        padding: "28px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: party.avatarColor,
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: "0.02em",
            flexShrink: 0,
          }}
        >
          {party.initials}
        </div>
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              color: TEXT_MUTED,
              fontWeight: 600,
            }}
          >
            {party.role}
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: TEXT_INK,
              marginTop: 4,
              letterSpacing: "-0.005em",
            }}
          >
            {party.name}
          </div>
        </div>
      </div>
      <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.45 }}>
        {party.org}
      </div>
      <div
        style={{
          height: 1,
          background: RULE,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <span style={{ fontSize: 14, color: TEXT_MUTED }}>Status</span>
          <Pill tone={party.status.tone}>{party.status.label}</Pill>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
          <span style={{ fontSize: 14, color: TEXT_MUTED }}>{party.detail.label}</span>
          <span style={{ fontSize: 14, color: TEXT_INK, fontWeight: 500, textAlign: "right" }}>
            {party.detail.value}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
          <span style={{ fontSize: 14, color: TEXT_MUTED }}>Next</span>
          <span style={{ fontSize: 14, color: TEXT_INK, fontWeight: 500, textAlign: "right" }}>
            {party.next}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ListingsFeature3() {
  const positions: { top: number; left: number; z: number; dimmed: boolean }[] = [
    { top: 230, left: 47, z: 1, dimmed: true },
    { top: 170, left: 267, z: 3, dimmed: false },
    { top: 230, left: 487, z: 2, dimmed: true },
  ];
  return (
    <Frame>
      {PARTIES.map((p, i) => {
        const pos = positions[i];
        return (
          <div
            key={p.initials}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              zIndex: pos.z,
            }}
          >
            <PartyCard party={p} dimmed={pos.dimmed} />
          </div>
        );
      })}
    </Frame>
  );
}
