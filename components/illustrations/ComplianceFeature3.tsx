import type { CSSProperties, ReactNode } from "react";

const FRAME_W = 914;
const FRAME_H = 714;

// Surface chrome — same tokens as Compliance cards 1 & 2
const SURFACE = "#FFFFFF";
const BORDER = "#DCD9D2";
const DIVIDER = "#EBE8E0";

// Type stack
const TEXT_INK = "#15131F";
const TEXT_MUTED = "#5C5A68";
const TEXT_FAINT = "#8B8995";

// Status palette
const GREEN = "#137A50";
const AMBER = "#9D6E12";
const RED = "#A6334A";

// Pill tints — very faint, calm
const TINT_GREEN = "#E7F0EA";
const TINT_AMBER = "#F4ECD8";
const TINT_RED = "#F5DEE2";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[25px]"
      style={{
        aspectRatio: `${FRAME_W} / ${FRAME_H}`,
        containerType: "inline-size",
        backgroundImage: "url('/images/compliance/background-gradient.png')",
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

type RowStatus = "ok" | "soon" | "overdue";

type CertRow = {
  name: string;
  cadence: string;
  status: RowStatus;
  date: string;
  note?: string;
};

type CardStatus = "compliant" | "action-soon" | "action-needed";

type BuildingData = {
  postcode: string;
  name: string;
  units: number;
  summary: string;
  status: CardStatus;
  rows: CertRow[];
};

const STATUS_LABEL: Record<CardStatus, string> = {
  compliant: "Compliant",
  "action-soon": "Action soon",
  "action-needed": "Action needed",
};

const STATUS_COLOR: Record<CardStatus, string> = {
  compliant: GREEN,
  "action-soon": AMBER,
  "action-needed": RED,
};

const STATUS_TINT: Record<CardStatus, string> = {
  compliant: TINT_GREEN,
  "action-soon": TINT_AMBER,
  "action-needed": TINT_RED,
};

const ROW_COLOR: Record<RowStatus, string> = {
  ok: GREEN,
  soon: AMBER,
  overdue: RED,
};

/* ─── Building data ─── (today's date: 8 May 2026) */
const MAPLE: BuildingData = {
  postcode: "SE1 4AB",
  name: "Maple Court",
  units: 42,
  summary: "All resale-ready",
  status: "compliant",
  rows: [
    { name: "Gas safety", cadence: "Annual", status: "ok", date: "04 Aug 2026" },
    { name: "EICR", cadence: "5-yearly", status: "ok", date: "22 Mar 2029" },
    { name: "EWS1", cadence: "5-yearly", status: "ok", date: "17 Jun 2028" },
    { name: "Asbestos", cadence: "Annual", status: "ok", date: "06 Sep 2026" },
    { name: "Water / Legionella", cadence: "Annual", status: "ok", date: "27 Feb 2027" },
    { name: "Fire risk", cadence: "Annual", status: "ok", date: "11 Apr 2027" },
    { name: "EPC", cadence: "10-yearly", status: "ok", date: "14 Aug 2032" },
  ],
};

const CHANDLER: BuildingData = {
  postcode: "E8 2JL",
  name: "Chandler House",
  units: 36,
  summary: "2 renewals due soon",
  status: "action-soon",
  rows: [
    { name: "Gas safety", cadence: "Annual", status: "soon", date: "21 Jun 2026", note: "in 44d" },
    { name: "EICR", cadence: "5-yearly", status: "ok", date: "14 Oct 2030" },
    { name: "EWS1", cadence: "5-yearly", status: "ok", date: "03 Apr 2028" },
    { name: "Asbestos", cadence: "Annual", status: "soon", date: "02 Jul 2026", note: "in 55d" },
    { name: "Water / Legionella", cadence: "Annual", status: "ok", date: "19 Nov 2026" },
    { name: "Fire risk", cadence: "Annual", status: "ok", date: "24 Sep 2026" },
    { name: "EPC", cadence: "10-yearly", status: "ok", date: "03 Mar 2031" },
  ],
};

const RIVERSIDE: BuildingData = {
  postcode: "M4 6HN",
  name: "Riverside Walk",
  units: 58,
  summary: "1 active resale blocker",
  status: "action-needed",
  rows: [
    { name: "Gas safety", cadence: "Annual", status: "ok", date: "14 Aug 2026" },
    { name: "EICR", cadence: "5-yearly", status: "ok", date: "09 Feb 2029" },
    { name: "EWS1", cadence: "5-yearly", status: "overdue", date: "24 Apr 2026", note: "14d overdue" },
    { name: "Asbestos", cadence: "Annual", status: "ok", date: "18 Sep 2026" },
    { name: "Water / Legionella", cadence: "Annual", status: "soon", date: "27 Jun 2026", note: "in 50d" },
    { name: "Fire risk", cadence: "Annual", status: "ok", date: "12 Mar 2027" },
    { name: "EPC", cadence: "10-yearly", status: "ok", date: "22 Nov 2030" },
  ],
};

const BUILDINGS = [MAPLE, CHANDLER, RIVERSIDE];

function StatusDot({ color, size = 6 }: { color: string; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
      }}
    />
  );
}

function StatusPill({ status }: { status: CardStatus }) {
  const color = STATUS_COLOR[status];
  const tint = STATUS_TINT[status];
  const isLive = status === "action-needed";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: tint,
        padding: "3px 8px",
        borderRadius: 4,
        fontSize: 9.5,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color,
        fontWeight: 600,
        lineHeight: 1.4,
        whiteSpace: "nowrap",
      }}
    >
      {isLive ? (
        <span
          style={{
            position: "relative",
            width: 5,
            height: 5,
            display: "inline-block",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: color,
              opacity: 0.5,
              animation: "cf3-ping 2.2s ease-out infinite",
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: color,
            }}
          />
        </span>
      ) : (
        <StatusDot color={color} size={5} />
      )}
      {STATUS_LABEL[status]}
    </span>
  );
}

function CertRowItem({ row, isLast }: { row: CertRow; isLast: boolean }) {
  const dotColor = ROW_COLOR[row.status];
  const dateColor =
    row.status === "ok" ? TEXT_MUTED : ROW_COLOR[row.status];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10px 1fr auto",
        columnGap: 10,
        alignItems: "center",
        padding: "8px 0",
        borderBottom: isLast ? undefined : `1px solid ${DIVIDER}`,
      }}
    >
      <StatusDot color={dotColor} size={6} />
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 12.5,
            color: TEXT_INK,
            fontWeight: 500,
            letterSpacing: "-0.005em",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {row.name}
        </div>
        <div
          style={{
            fontSize: 10.5,
            color: TEXT_FAINT,
            marginTop: 1,
            lineHeight: 1.3,
            letterSpacing: "0.005em",
          }}
        >
          {row.cadence}
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 500,
            color: dateColor,
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "0.005em",
            lineHeight: 1.2,
          }}
        >
          {row.date}
        </div>
        {row.note ? (
          <div
            style={{
              fontSize: 9.5,
              fontWeight: 600,
              color: dateColor,
              marginTop: 2,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {row.note}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BuildingCard({
  data,
  dimmed = false,
}: {
  data: BuildingData;
  dimmed?: boolean;
}) {
  return (
    <div
      style={{
        width: 360,
        background: dimmed ? "#EAE7DF" : SURFACE,
        borderRadius: 16,
        padding: "22px 24px",
        border: `1px solid ${dimmed ? "#D7D4CC" : BORDER}`,
        boxShadow: dimmed
          ? "0 8px 24px rgba(15, 13, 30, 0.06)"
          : "0 28px 70px -22px rgba(15, 13, 30, 0.32), 0 6px 18px rgba(15, 13, 30, 0.12)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Eyebrow row: postcode (left) + status pill (right) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <StatusDot color={STATUS_COLOR[data.status]} size={5} />
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: TEXT_FAINT,
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {data.postcode}
          </span>
        </div>
        <StatusPill status={data.status} />
      </div>

      {/* Title */}
      <h4
        style={{
          margin: "10px 0 0",
          fontSize: 16,
          fontWeight: 600,
          color: TEXT_INK,
          letterSpacing: "-0.018em",
          lineHeight: 1.2,
        }}
      >
        {data.name}
      </h4>

      {/* Subtitle */}
      <p
        style={{
          margin: "4px 0 0",
          fontSize: 12,
          color: TEXT_MUTED,
          lineHeight: 1.4,
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "0.005em",
        }}
      >
        {data.units} units
        <span style={{ color: DIVIDER, margin: "0 6px" }}>·</span>
        {data.summary}
      </p>

      {/* Section divider */}
      <div
        style={{
          height: 1,
          background: DIVIDER,
          marginTop: 14,
          marginBottom: 4,
        }}
      />

      {/* Cert rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.rows.map((row, i) => (
          <CertRowItem
            key={row.name}
            row={row}
            isLast={i === data.rows.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export function ComplianceFeature3() {
  const positions: {
    data: BuildingData;
    left: number;
    top: number;
    z: number;
    dimmed: boolean;
  }[] = [
    { data: MAPLE, left: 20, top: 230, z: 1, dimmed: true },
    { data: CHANDLER, left: 277, top: 60, z: 3, dimmed: false },
    { data: RIVERSIDE, left: 534, top: 230, z: 2, dimmed: true },
  ];

  return (
    <Frame>
      <style>{`
        @keyframes cf3-ping {
          0%   { transform: scale(0.55); opacity: 0.55; }
          80%, 100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
      {positions.map((p) => (
        <div
          key={p.data.postcode}
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            zIndex: p.z,
          }}
        >
          <BuildingCard data={p.data} dimmed={p.dimmed} />
        </div>
      ))}
    </Frame>
  );
}
