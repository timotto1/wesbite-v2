/* ─── Palette ─── */

const PRE_COLOR = "#6B7280";
const POST_COLOR = "#6D28D9";
const POST_DEEP = "#3C3489";
const GRID_COLOR = "rgba(17, 24, 39, 0.12)";
const AXIS_LINE = "rgba(17, 24, 39, 0.22)";
const AXIS_LABEL = "#6B7280";
const DIVIDER_COLOR = "#9CA3AF";
const BASELINE_COLOR = "#9CA3AF";
const TEXT_INK = "#26045D";
const TEXT_BODY = "#374151";
const TEXT_MUTED = "#6B7280";
const PILL_SOFT_BG = "#F0EBF8";

/* ─── Data ─── */

type Datum = { month: string; value: number | null; era: "pre" | "post" | "divider" };

const DATA: Datum[] = [
  { month: "Aug", value: 0.3, era: "pre" },
  { month: "Sep", value: 0.5, era: "pre" },
  { month: "Oct", value: 0.4, era: "pre" },
  { month: "Nov", value: 0.3, era: "pre" },
  { month: "Dec", value: 0.5, era: "pre" },
  { month: "Jan", value: null, era: "divider" },
  { month: "Feb", value: 1.7, era: "post" },
  { month: "Mar", value: 1.9, era: "post" },
  { month: "Apr", value: 1.8, era: "post" },
  { month: "May", value: 1.6, era: "post" },
  { month: "Jun", value: 2.0, era: "post" },
  { month: "Jul", value: 1.8, era: "post" },
];

const BASELINE = 0.4;
const Y_MAX = 2.4;
const Y_TICKS = [0, 0.6, 1.2, 1.8, 2.4];

/* ─── Chart geometry ─── */

const VB_W = 900;
const VB_H = 360;
const PLOT_X = 56;
const PLOT_R = 880;
const PLOT_TOP = 36;
const PLOT_BOTTOM = 308;
const PLOT_W = PLOT_R - PLOT_X;
const PLOT_H = PLOT_BOTTOM - PLOT_TOP;

const SLOT_W = PLOT_W / DATA.length;
const BAR_W = 28;
const DIVIDER_INDEX = DATA.findIndex((d) => d.era === "divider");
const TRANSITION_X = PLOT_X + (DIVIDER_INDEX + 0.5) * SLOT_W;

function yFor(value: number) {
  return PLOT_BOTTOM - (value / Y_MAX) * PLOT_H;
}

/* ─── Top-level component ─── */

export function AftersalesStaircaseChart() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-card bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/resident/resident-portal-background.png')",
      }}
    >
      <div className="flex h-full w-full items-center p-5 md:p-6">
        <div
          className="flex h-full w-full flex-col overflow-hidden rounded-[16px] bg-white p-5 md:p-6"
          style={{ boxShadow: "0 8px 40px rgba(0, 0, 0, 0.08)" }}
        >
          <Header />
          <div className="mt-3 -mx-5 border-t border-rule md:-mx-6" />
          <div className="mt-2 min-h-0 flex-1">
            <Chart />
          </div>
          <div className="mt-2 -mx-5 border-t border-rule md:-mx-6" />
          <div className="mt-2.5 flex items-center justify-between">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-normal"
              style={{ color: TEXT_MUTED }}
            >
              <InfoIcon />
              Twelve-month window, single scheme
            </span>
            <span className="text-[11px] font-normal" style={{ color: TEXT_MUTED }}>
              Example data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Header ─── */

function Header() {
  return (
    <>
      <div>
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: TEXT_MUTED }}
        >
          Staircasing rate
        </p>
        <p
          className="mt-1.5 whitespace-nowrap text-[14px] font-normal leading-snug"
          style={{ color: TEXT_BODY }}
        >
          Annualised completion rate, before and after Stairpay launch
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
        <BeforeAfterStat label="Before" value="0.4%" color={TEXT_INK} />
        <span
          aria-hidden
          className="text-[22px] font-medium leading-none"
          style={{ color: TEXT_MUTED }}
        >
          →
        </span>
        <BeforeAfterStat label="After" value="1.8%" color={POST_DEEP} />
        <UpliftPill />
        <div className="ml-auto flex items-center gap-5 pb-1">
          <LegendSwatch color={PRE_COLOR}>Pre-launch</LegendSwatch>
          <LegendSwatch color={POST_COLOR}>Post-launch</LegendSwatch>
        </div>
      </div>
    </>
  );
}

function BeforeAfterStat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div>
      <p className="text-[11px] font-normal" style={{ color: TEXT_MUTED }}>
        {label}
      </p>
      <p
        className="mt-1.5 text-[22px] font-medium leading-none tracking-tight"
        style={{ color }}
      >
        {value}
      </p>
    </div>
  );
}

function UpliftPill() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium leading-none"
      style={{ backgroundColor: PILL_SOFT_BG, color: POST_DEEP }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
      4.5&times; uplift
    </span>
  );
}

function LegendSwatch({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] font-normal"
      style={{ color: TEXT_MUTED }}
    >
      <span
        aria-hidden
        className="inline-block h-2.5 w-2.5 rounded-[2px]"
        style={{ backgroundColor: color }}
      />
      {children}
    </span>
  );
}

function InfoIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

/* ─── Chart ─── */

function Chart() {
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      role="img"
      aria-label="Monthly staircasing rate before and after Stairpay went live"
    >
      <Gridlines />
      <Axes />
      <YAxisLabels />
      <Bars />
      <BaselineLine />
      <LaunchMarker />
      <XAxisLabels />
    </svg>
  );
}

function Axes() {
  return (
    <g>
      {/* Y-axis */}
      <line
        x1={PLOT_X}
        x2={PLOT_X}
        y1={PLOT_TOP}
        y2={PLOT_BOTTOM}
        stroke={AXIS_LINE}
        strokeWidth="1"
      />
      {/* X-axis */}
      <line
        x1={PLOT_X}
        x2={PLOT_R}
        y1={PLOT_BOTTOM}
        y2={PLOT_BOTTOM}
        stroke={AXIS_LINE}
        strokeWidth="1"
      />
    </g>
  );
}

function Gridlines() {
  return (
    <g>
      {Y_TICKS.map((tick) => {
        const y = yFor(tick);
        return (
          <line
            key={tick}
            x1={PLOT_X}
            x2={PLOT_R}
            y1={y}
            y2={y}
            stroke={GRID_COLOR}
            strokeWidth="1"
            strokeDasharray="1 4"
            strokeLinecap="round"
          />
        );
      })}
    </g>
  );
}

function YAxisLabels() {
  return (
    <g>
      {Y_TICKS.map((tick) => (
        <text
          key={tick}
          x={PLOT_X - 12}
          y={yFor(tick) + 4}
          textAnchor="end"
          fontSize="13"
          fill={AXIS_LABEL}
        >
          {tick.toFixed(1)}%
        </text>
      ))}
    </g>
  );
}

function Bars() {
  return (
    <g>
      {DATA.map((d, i) => {
        if (d.value == null) return null;
        const slotX = PLOT_X + i * SLOT_W;
        const x = slotX + (SLOT_W - BAR_W) / 2;
        const y = yFor(d.value);
        const h = PLOT_BOTTOM - y;
        const fill = d.era === "pre" ? PRE_COLOR : POST_COLOR;
        return (
          <rect
            key={d.month}
            x={x}
            y={y}
            width={BAR_W}
            height={h}
            rx="3"
            ry="3"
            fill={fill}
          />
        );
      })}
    </g>
  );
}

function BaselineLine() {
  const y = yFor(BASELINE);
  return (
    <line
      x1={PLOT_X}
      x2={PLOT_R}
      y1={y}
      y2={y}
      stroke={BASELINE_COLOR}
      strokeWidth="1"
      strokeDasharray="4 4"
    />
  );
}

function LaunchMarker() {
  const pillW = 104;
  const pillH = 24;
  const pillCenterY = PLOT_TOP + 2;
  return (
    <g>
      <line
        x1={TRANSITION_X}
        x2={TRANSITION_X}
        y1={pillCenterY + pillH / 2 - 2}
        y2={PLOT_BOTTOM}
        stroke={DIVIDER_COLOR}
        strokeWidth="1"
        strokeDasharray="5 4"
      />
      <rect
        x={TRANSITION_X - pillW / 2}
        y={pillCenterY - pillH / 2}
        width={pillW}
        height={pillH}
        rx="6"
        ry="6"
        fill={POST_COLOR}
      />
      <text
        x={TRANSITION_X}
        y={pillCenterY + 4}
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="#FFFFFF"
      >
        Stairpay live
      </text>
    </g>
  );
}

function XAxisLabels() {
  return (
    <g>
      {DATA.map((d, i) => {
        const slotX = PLOT_X + i * SLOT_W;
        const cx = slotX + SLOT_W / 2;
        return (
          <text
            key={d.month}
            x={cx}
            y={PLOT_BOTTOM + 22}
            textAnchor="middle"
            fontSize="13"
            fill={AXIS_LABEL}
          >
            {d.month}
          </text>
        );
      })}
    </g>
  );
}
