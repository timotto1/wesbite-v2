/* ─── Palette ─── */

const STAIR_LIGHT = "#EDE9FE";
const STAIR_DARK = "#7C3AED";
const RESALES_LIGHT = "#FFEDD5";
const RESALES_DARK = "#F97316";
const AXIS_LABEL = "#9CA3AF";
const GRID_COLOR = "rgba(17, 24, 39, 0.06)";
const POSITIVE = "#10B981";
const NEGATIVE = "#DC2626";
const TILE_LABEL = "#6B7280";
const TILE_VALUE = "#111827";
const CARD_BORDER = "rgba(17, 24, 39, 0.08)";

/* ─── Receipts data — staircasing & resales (forecast vs actual) ─── */

const MONTHS = ["Dec", "Jan", "Feb", "Mar", "Apr", "May"];

const STAIR_RECEIPTS = {
  forecast: [180, 190, 200, 210, 220, 230],
  actual: [190, 175, 215, 200, 230, null] as Array<number | null>,
};

const RESALES_RECEIPTS = {
  forecast: [320, 340, 360, 380, 390, 400],
  actual: [305, 350, 335, 390, 370, null] as Array<number | null>,
};

/* ─── Time-to-complete data ─── */

const TIME_STAIR = [82, 78, 75, 72, 70, 68];
const TIME_RESALES = [121, 119, 117, 115, 113, 112];

/* ─── Wrapper ─── */

export function AftersalesPipelineMI() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-card bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/resident/resident-portal-background.png')",
      }}
    >
      {/* Card 2 — sits behind, offset right + down */}
      <div className="absolute right-[3%] top-[18%] bottom-[4%] z-0 w-[62%]">
        <TimeToCompleteCard />
      </div>

      {/* Card 1 — sits on top, left-aligned */}
      <div className="absolute left-[3%] top-[5%] z-10 w-[62%]">
        <ReceiptsCard />
      </div>
    </div>
  );
}

/* ─── Card 1 — Receipts: forecast vs actual ─── */

function ReceiptsCard() {
  return (
    <div
      className="flex w-full flex-col rounded-[14px] bg-white px-4 pb-3 pt-4 md:px-5 md:pb-3 md:pt-5"
      style={{ border: `1px solid ${CARD_BORDER}` }}
    >
      <h4 className="text-[13px] font-medium text-ink">Receipts: forecast vs actual</h4>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <SummaryTile
          label="Staircasing actual vs forecast"
          value="+4.3%"
          tone="positive"
        />
        <SummaryTile
          label="Resales actual vs forecast"
          value="−8.1%"
          tone="negative"
        />
        <SummaryTile label="Combined YTD" value="£2.81m" />
      </div>

      <div className="mt-3 flex flex-col">
        <ReceiptsSubChart
          title="Staircasing receipts"
          forecast={STAIR_RECEIPTS.forecast}
          actual={STAIR_RECEIPTS.actual}
          lightColor={STAIR_LIGHT}
          darkColor={STAIR_DARK}
          dashed={false}
        />
      </div>
    </div>
  );
}

/* ─── Card 2 — Average time to complete ─── */

function TimeToCompleteCard() {
  return (
    <div
      className="flex h-full w-full flex-col overflow-hidden rounded-[14px] bg-white p-4 md:p-5"
      style={{ border: `1px solid ${CARD_BORDER}` }}
    >
      <h4 className="text-[13px] font-medium text-ink">
        Average time to complete
      </h4>

      <div className="mt-3 grid grid-cols-4 gap-2">
        <SummaryTile label="Staircasing latest" value="68 days" />
        <SummaryTile label="vs 6mo ago" value="−14d" tone="positive" />
        <SummaryTile label="Resales latest" value="112 days" />
        <SummaryTile label="vs 6mo ago" value="−9d" tone="positive" />
      </div>

      <div className="mt-3 flex items-center gap-4">
        <Legend variant="solid-dot" color={STAIR_DARK} label="Staircasing" />
        <Legend variant="dashed-square" color={RESALES_DARK} label="Resales" />
      </div>

      <div className="mt-2 flex-1">
        <TimeChart />
      </div>
    </div>
  );
}

/* ─── Summary tile ─── */

function SummaryTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "positive" | "negative";
}) {
  const valueColor =
    tone === "positive" ? POSITIVE : tone === "negative" ? NEGATIVE : TILE_VALUE;
  return (
    <div
      className="rounded-[8px] px-2.5 py-2"
      style={{ border: `1px solid ${CARD_BORDER}` }}
    >
      <p
        className="text-[9px] font-normal leading-tight"
        style={{ color: TILE_LABEL }}
      >
        {label}
      </p>
      <p
        className="mt-1 text-[13px] font-semibold leading-none tracking-tight"
        style={{ color: valueColor }}
      >
        {value}
      </p>
    </div>
  );
}

/* ─── Inline legend ─── */

function Legend({
  variant,
  color,
  label,
}: {
  variant: "solid-dot" | "dashed-square" | "swatch";
  color: string;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px]" style={{ color: TILE_LABEL }}>
      {variant === "swatch" ? (
        <span
          aria-hidden
          className="inline-block h-2.5 w-2.5 rounded-[2px]"
          style={{ backgroundColor: color }}
        />
      ) : variant === "solid-dot" ? (
        <svg width="20" height="8" viewBox="0 0 20 8" aria-hidden>
          <line x1="0" y1="4" x2="20" y2="4" stroke={color} strokeWidth="1.5" />
          <circle cx="10" cy="4" r="2.2" fill={color} />
        </svg>
      ) : (
        <svg width="20" height="8" viewBox="0 0 20 8" aria-hidden>
          <line
            x1="0"
            y1="4"
            x2="20"
            y2="4"
            stroke={color}
            strokeWidth="1.5"
            strokeDasharray="3 2"
          />
          <rect x="8" y="2" width="4" height="4" fill={color} />
        </svg>
      )}
      {label}
    </span>
  );
}

/* ─── Receipts sub-chart (bars + overlay line) ─── */

function ReceiptsSubChart({
  title,
  forecast,
  actual,
  lightColor,
  darkColor,
  dashed,
}: {
  title: string;
  forecast: number[];
  actual: Array<number | null>;
  lightColor: string;
  darkColor: string;
  dashed: boolean;
}) {
  const VB_W = 320;
  const VB_H = 120;
  const PLOT_X = 30;
  const PLOT_R = 312;
  const PLOT_TOP = 8;
  const PLOT_BOTTOM = 96;
  const PLOT_W = PLOT_R - PLOT_X;
  const PLOT_H = PLOT_BOTTOM - PLOT_TOP;
  const SLOT_W = PLOT_W / MONTHS.length;
  const BAR_W = 18;

  const yMax = Math.ceil(Math.max(...forecast) / 50) * 50 + 50;
  const yFor = (v: number) => PLOT_BOTTOM - (v / yMax) * PLOT_H;

  const tickStep = yMax / 2;
  const ticks = [0, tickStep, yMax];

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium text-ink">{title}</p>
        <div className="flex items-center gap-3">
          <Legend variant="swatch" color={lightColor} label="Forecast" />
          <Legend
            variant={dashed ? "dashed-square" : "solid-dot"}
            color={darkColor}
            label="Actual"
          />
        </div>
      </div>
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid meet"
        className="mt-1 block w-full"
        style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
        aria-hidden
      >
        {/* Gridlines + y labels */}
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PLOT_X}
              x2={PLOT_R}
              y1={yFor(t)}
              y2={yFor(t)}
              stroke={GRID_COLOR}
              strokeWidth="1"
            />
            <text
              x={PLOT_X - 6}
              y={yFor(t) + 3}
              textAnchor="end"
              fontSize="9"
              fill={AXIS_LABEL}
            >
              {t === 0 ? "£0" : `£${t}k`}
            </text>
          </g>
        ))}

        {/* Forecast bars */}
        {forecast.map((v, i) => {
          const slot = PLOT_X + i * SLOT_W;
          const x = slot + (SLOT_W - BAR_W) / 2;
          const y = yFor(v);
          const h = PLOT_BOTTOM - y;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={BAR_W}
              height={h}
              rx="2"
              ry="2"
              fill={lightColor}
            />
          );
        })}

        {/* Actual line */}
        <ActualLine
          values={actual}
          slotW={SLOT_W}
          plotX={PLOT_X}
          yFor={yFor}
          color={darkColor}
          dashed={dashed}
        />

        {/* X-axis month labels */}
        {MONTHS.map((m, i) => {
          const slot = PLOT_X + i * SLOT_W;
          return (
            <text
              key={m}
              x={slot + SLOT_W / 2}
              y={PLOT_BOTTOM + 14}
              textAnchor="middle"
              fontSize="9"
              fill={AXIS_LABEL}
            >
              {m}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function ActualLine({
  values,
  slotW,
  plotX,
  yFor,
  color,
  dashed,
}: {
  values: Array<number | null>;
  slotW: number;
  plotX: number;
  yFor: (v: number) => number;
  color: string;
  dashed: boolean;
}) {
  const points = values
    .map((v, i) => (v == null ? null : { x: plotX + i * slotW + slotW / 2, y: yFor(v) }))
    .filter((p): p is { x: number; y: number } => p != null);

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "4 3" : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2.6" fill="white" stroke={color} strokeWidth="1.5" />
      ))}
    </g>
  );
}

/* ─── Time-to-complete line chart ─── */

function TimeChart() {
  const VB_W = 320;
  const VB_H = 200;
  const PLOT_X = 30;
  const PLOT_R = 312;
  const PLOT_TOP = 16;
  const PLOT_BOTTOM = 168;
  const PLOT_W = PLOT_R - PLOT_X;
  const PLOT_H = PLOT_BOTTOM - PLOT_TOP;
  const SLOT_W = PLOT_W / MONTHS.length;

  const Y_MIN = 50;
  const Y_MAX = 130;
  const yFor = (v: number) => PLOT_BOTTOM - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;

  const ticks = [50, 70, 90, 110, 130];

  const stairPoints = TIME_STAIR.map((v, i) => ({
    x: PLOT_X + i * SLOT_W + SLOT_W / 2,
    y: yFor(v),
  }));
  const resalesPoints = TIME_RESALES.map((v, i) => ({
    x: PLOT_X + i * SLOT_W + SLOT_W / 2,
    y: yFor(v),
  }));

  const stairPath = stairPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const resalesPath = resalesPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden
    >
      {/* Y axis title */}
      <text
        x={6}
        y={PLOT_TOP + (PLOT_H / 2)}
        transform={`rotate(-90, 6, ${PLOT_TOP + PLOT_H / 2})`}
        textAnchor="middle"
        fontSize="9"
        fill={AXIS_LABEL}
      >
        Average days to complete
      </text>

      {/* Gridlines + labels */}
      {ticks.map((t) => (
        <g key={t}>
          <line
            x1={PLOT_X}
            x2={PLOT_R}
            y1={yFor(t)}
            y2={yFor(t)}
            stroke={GRID_COLOR}
            strokeWidth="1"
          />
          <text
            x={PLOT_X - 4}
            y={yFor(t) + 3}
            textAnchor="end"
            fontSize="9"
            fill={AXIS_LABEL}
          >
            {t}d
          </text>
        </g>
      ))}

      {/* Resales line — dashed coral */}
      <path
        d={resalesPath}
        fill="none"
        stroke={RESALES_DARK}
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {resalesPoints.map((p, i) => (
        <rect
          key={i}
          x={p.x - 2.6}
          y={p.y - 2.6}
          width={5.2}
          height={5.2}
          fill="white"
          stroke={RESALES_DARK}
          strokeWidth="1.5"
        />
      ))}

      {/* Staircasing line — solid purple */}
      <path
        d={stairPath}
        fill="none"
        stroke={STAIR_DARK}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {stairPoints.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="2.8"
          fill="white"
          stroke={STAIR_DARK}
          strokeWidth="1.5"
        />
      ))}

      {/* X-axis month labels */}
      {MONTHS.map((m, i) => (
        <text
          key={m}
          x={PLOT_X + i * SLOT_W + SLOT_W / 2}
          y={PLOT_BOTTOM + 14}
          textAnchor="middle"
          fontSize="9"
          fill={AXIS_LABEL}
        >
          {m}
        </text>
      ))}
    </svg>
  );
}
