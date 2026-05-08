import type { CSSProperties, ReactNode } from "react";

const FRAME_W = 914;
const FRAME_H = 714;

// Surface chrome — same tokens as other Compliance cards
const SURFACE = "#FFFFFF";
const BORDER = "#DCD9D2";
const DIVIDER = "#EBE8E0";

// Type stack
const TEXT_INK = "#15131F";
const TEXT_MUTED = "#5C5A68";
const TEXT_FAINT = "#8B8995";

// Status palette
const GREEN = "#137A50";

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

type DocType = "PDF" | "CSV";
type Doc = { type: DocType; name: string };
type ExportTarget = {
  recipient: string;
  role: string;
  docs: Doc[];
};

const EXPORTS: ExportTarget[] = [
  {
    recipient: "RSH submission",
    role: "Regulator",
    docs: [
      { type: "PDF", name: "Compliance summary" },
      { type: "PDF", name: "Resident pack" },
      { type: "CSV", name: "Lease register" },
    ],
  },
  {
    recipient: "Halifax portfolio review",
    role: "Lender",
    docs: [
      { type: "PDF", name: "Portfolio summary" },
      { type: "PDF", name: "Lender criteria" },
      { type: "CSV", name: "Block scoring" },
    ],
  },
  {
    recipient: "Buyer solicitor pack",
    role: "Conveyancer",
    docs: [
      { type: "PDF", name: "Lease abstract" },
      { type: "PDF", name: "EPC + EICR" },
      { type: "CSV", name: "Pre-contract Q&A" },
    ],
  },
];

const KPIS: { value: string; label: string }[] = [
  { value: "11s", label: "Avg pack assembly" },
  { value: "100%", label: "Documents timestamped" },
  { value: "0", label: "Manual email digs" },
];

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

function ChevronRight() {
  return (
    <svg width={5} height={9} viewBox="0 0 5 9" aria-hidden>
      <path
        d="M0.8 0.8 L4 4.5 L0.8 8.2"
        fill="none"
        stroke={TEXT_FAINT}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Source node — central "Stairpay record" element */
function SourceNode() {
  return (
    <div
      style={{
        width: 264,
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 8,
        padding: "11px 16px",
        boxShadow:
          "0 1px 2px rgba(15, 13, 30, 0.04), 0 8px 24px -12px rgba(15, 13, 30, 0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          fontSize: 9.5,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: TEXT_FAINT,
          fontWeight: 600,
        }}
      >
        <StatusDot color={GREEN} size={5} />
        <span>Stairpay record</span>
      </div>
      <div
        style={{
          marginTop: 5,
          fontSize: 13,
          color: TEXT_INK,
          fontWeight: 500,
          letterSpacing: "-0.005em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        Plot MC-014
        <span style={{ color: DIVIDER, margin: "0 6px" }}>·</span>
        <span style={{ color: TEXT_MUTED, fontWeight: 500 }}>
          12,847 events captured
        </span>
      </div>
    </div>
  );
}

function DocRow({ doc }: { doc: Doc }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "26px 1fr",
        columnGap: 8,
        alignItems: "baseline",
      }}
    >
      <span
        style={{
          fontSize: 9,
          color: TEXT_FAINT,
          letterSpacing: "0.08em",
          fontWeight: 600,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {doc.type}
      </span>
      <span
        style={{
          fontSize: 11.5,
          color: TEXT_INK,
          fontWeight: 500,
          letterSpacing: "-0.005em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {doc.name}
      </span>
    </div>
  );
}

function ExportCard({ target }: { target: ExportTarget }) {
  return (
    <div
      style={{
        flex: 1,
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 8,
        padding: "13px 14px 11px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* Recipient */}
      <div
        style={{
          fontSize: 12.5,
          color: TEXT_INK,
          fontWeight: 600,
          letterSpacing: "-0.005em",
          lineHeight: 1.2,
        }}
      >
        {target.recipient}
      </div>
      <div
        style={{
          fontSize: 9.5,
          color: TEXT_FAINT,
          marginTop: 3,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {target.role}
      </div>

      <div
        style={{
          height: 1,
          background: DIVIDER,
          margin: "11px 0 10px",
        }}
      />

      {/* Doc rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {target.docs.map((d) => (
          <DocRow key={d.name} doc={d} />
        ))}
      </div>

      <div
        style={{
          height: 1,
          background: DIVIDER,
          margin: "10px 0 0",
        }}
      />

      {/* Action row */}
      <div
        style={{
          marginTop: 9,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 10.5,
          color: TEXT_MUTED,
          fontWeight: 500,
          letterSpacing: "0.005em",
        }}
      >
        <span>PDF + CSV export</span>
        <ChevronRight />
      </div>
    </div>
  );
}

/* Connector lines from source node bottom to each export card top */
function Connectors() {
  // viewBox spans the 50px-tall band between node bottom and card top
  return (
    <svg
      width="100%"
      height={50}
      viewBox="0 0 764 50"
      preserveAspectRatio="none"
      aria-hidden
      style={{ display: "block" }}
    >
      {/* Left curve: from centre-top to card 1 centre-bottom */}
      <path
        d="M 382 0 C 382 24, 122 26, 122 50"
        fill="none"
        stroke={BORDER}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* Centre line */}
      <path
        d="M 382 0 L 382 50"
        fill="none"
        stroke={BORDER}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* Right curve */}
      <path
        d="M 382 0 C 382 24, 642 26, 642 50"
        fill="none"
        stroke={BORDER}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* Endpoint nodes — small circles */}
      <circle cx={122} cy={50} r={2.5} fill={SURFACE} stroke={BORDER} strokeWidth={1} />
      <circle cx={382} cy={50} r={2.5} fill={SURFACE} stroke={BORDER} strokeWidth={1} />
      <circle cx={642} cy={50} r={2.5} fill={SURFACE} stroke={BORDER} strokeWidth={1} />
    </svg>
  );
}

function VisualArea() {
  return (
    <div style={{ position: "relative" }}>
      {/* Source node — centered above the connectors */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SourceNode />
      </div>
      {/* Connector lines */}
      <div style={{ marginTop: 6 }}>
        <Connectors />
      </div>
      {/* Three export cards */}
      <div
        style={{
          marginTop: 4,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 18,
        }}
      >
        {EXPORTS.map((t) => (
          <ExportCard key={t.recipient} target={t} />
        ))}
      </div>
    </div>
  );
}

function KpiStrip() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 24,
        padding: "16px 0",
        borderTop: `1px solid ${DIVIDER}`,
        borderBottom: `1px solid ${DIVIDER}`,
      }}
    >
      {KPIS.map((k, i) => (
        <div
          key={k.label}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: i === 0 ? 0 : 24,
            borderLeft: i === 0 ? undefined : `1px solid ${DIVIDER}`,
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: TEXT_INK,
              letterSpacing: "-0.022em",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {k.value}
          </div>
          <div
            style={{
              fontSize: 11,
              color: TEXT_MUTED,
              marginTop: 6,
              letterSpacing: "0.005em",
            }}
          >
            {k.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ComplianceFeature4() {
  const cardW = 820;
  const cardH = 600;
  const cardLeft = (FRAME_W - cardW) / 2;
  const cardTop = (FRAME_H - cardH) / 2;

  return (
    <Frame>
      <div
        style={{
          position: "absolute",
          left: cardLeft,
          top: cardTop,
          width: cardW,
          height: cardH,
          background: SURFACE,
          borderRadius: 14,
          padding: "26px 30px",
          border: `1px solid ${BORDER}`,
          boxShadow:
            "0 1px 2px rgba(15, 13, 30, 0.04), 0 16px 40px -20px rgba(15, 13, 30, 0.20)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <StatusDot color={GREEN} size={6} />
            <span
              style={{
                fontSize: 10.5,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: TEXT_FAINT,
                fontWeight: 600,
              }}
            >
              Audit & evidence
            </span>
          </div>
          <h3
            style={{
              margin: "8px 0 0",
              fontSize: 19,
              fontWeight: 600,
              color: TEXT_INK,
              letterSpacing: "-0.018em",
              lineHeight: 1.22,
            }}
          >
            Audit-ready evidence packs, exported in one click
          </h3>
          <p
            style={{
              margin: "5px 0 0",
              fontSize: 12.5,
              color: TEXT_MUTED,
              lineHeight: 1.5,
              maxWidth: 560,
              letterSpacing: "0.001em",
            }}
          >
            One continuous Stairpay record
            <span style={{ color: DIVIDER, margin: "0 6px" }}>·</span>
            auto-tailored exports for regulators, lenders, and conveyancers
          </p>
        </div>

        {/* Visual */}
        <div style={{ marginTop: 22 }}>
          <VisualArea />
        </div>

        {/* KPI strip */}
        <div style={{ marginTop: 24 }}>
          <KpiStrip />
        </div>

        {/* Footer pinned to bottom */}
        <div style={{ flex: 1 }} />
        <div
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                  background: GREEN,
                  opacity: 0.4,
                  animation: "cf4-ping 2.6s ease-out infinite",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: GREEN,
                }}
              />
            </span>
            <span
              style={{
                fontSize: 11,
                color: TEXT_MUTED,
                lineHeight: 1.4,
                letterSpacing: "0.005em",
              }}
            >
              Timestamped audit trail on every export
              <span style={{ color: DIVIDER, margin: "0 8px" }}>·</span>
              <span style={{ color: TEXT_FAINT }}>
                Source events traceable to second
              </span>
            </span>
          </div>
          <span
            style={{
              fontSize: 10,
              color: TEXT_FAINT,
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0.02em",
            }}
          >
            v2.4 · sync 2s
          </span>
        </div>
      </div>
      <style>{`
        @keyframes cf4-ping {
          0%   { transform: scale(0.55); opacity: 0.55; }
          80%, 100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>
    </Frame>
  );
}
