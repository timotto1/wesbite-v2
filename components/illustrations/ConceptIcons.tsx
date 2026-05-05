import { useId } from "react";

const INK = "#26045D";
const STROKE = 1.6;

type IconProps = { size?: number };

function Hatched({ x, y, w, h, gap = 3.2, angle = 45 }: { x: number; y: number; w: number; h: number; gap?: number; angle?: number }) {
  const id = useId();
  return (
    <g>
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={gap} height={gap} patternTransform={`rotate(${angle})`}>
          <line x1="0" y1="0" x2="0" y2={gap} stroke={INK} strokeWidth="0.7" />
        </pattern>
      </defs>
      <rect x={x} y={y} width={w} height={h} fill={`url(#${id})`} />
      <rect x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth={STROKE} />
    </g>
  );
}

function Box({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return <rect x={x} y={y} width={w} height={h} fill="none" stroke={INK} strokeWidth={STROKE} />;
}

function CheckDot({ cx, cy, r = 5 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={INK} />
      <polyline
        points={`${cx - r * 0.45},${cy + 0.1} ${cx - r * 0.1},${cy + r * 0.4} ${cx + r * 0.5},${cy - r * 0.35}`}
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function ArrowR({ x, y, len = 10 }: { x: number; y: number; len?: number }) {
  const head = 3.2;
  return (
    <g stroke={INK} strokeWidth={STROKE} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1={x} y1={y} x2={x + len} y2={y} />
      <polyline points={`${x + len - head},${y - head * 0.7} ${x + len},${y} ${x + len - head},${y + head * 0.7}`} />
    </g>
  );
}

function ArrowU({ x, y, len = 10 }: { x: number; y: number; len?: number }) {
  const head = 3.2;
  return (
    <g stroke={INK} strokeWidth={STROKE} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1={x} y1={y} x2={x} y2={y - len} />
      <polyline points={`${x - head * 0.7},${y - len + head} ${x},${y - len} ${x + head * 0.7},${y - len + head}`} />
    </g>
  );
}

function ArrowD({ x, y, len = 10 }: { x: number; y: number; len?: number }) {
  const head = 3.2;
  return (
    <g stroke={INK} strokeWidth={STROKE} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1={x} y1={y} x2={x} y2={y + len} />
      <polyline points={`${x - head * 0.7},${y + len - head} ${x},${y + len} ${x + head * 0.7},${y + len - head}`} />
    </g>
  );
}

function IconSVG({ size = 80, children }: { size?: number; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      {children}
    </svg>
  );
}

export function IconCaseManagement({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={26} y={28} w={36} h={11} />
      <Hatched x={26} y={44.5} w={36} h={11} />
      <Box x={26} y={61} w={36} h={11} />
      <line x1={68} y1={33.5} x2={74} y2={33.5} stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
      <line x1={68} y1={50} x2={74} y2={50} stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
      <line x1={68} y1={66.5} x2={74} y2={66.5} stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
    </IconSVG>
  );
}

export function IconRegulationReady({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={20} y={28} w={32} h={11} />
      <CheckDot cx={64} cy={33.5} r={4.6} />
      <Hatched x={20} y={44.5} w={32} h={11} />
      <CheckDot cx={64} cy={50} r={4.6} />
      <Box x={20} y={61} w={32} h={11} />
      <CheckDot cx={64} cy={66.5} r={4.6} />
    </IconSVG>
  );
}

export function IconAdminReduction({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={22} y={22} w={28} h={6} />
      <Box x={22} y={30} w={28} h={6} />
      <Box x={22} y={38} w={28} h={6} />
      <Box x={22} y={46} w={28} h={6} />
      <ArrowD x={36} y={56} len={9} />
      <Hatched x={22} y={68} w={28} h={7} />
      <line x1={60} y1={36} x2={70} y2={36} stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
      <line x1={60} y1={71.5} x2={66} y2={71.5} stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
    </IconSVG>
  );
}

export function IconTrustworthyForecasts({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={22} y={56} w={14} h={20} />
      <Hatched x={40} y={44} w={14} h={32} />
      <Box x={58} y={30} w={14} h={46} />
      <ArrowU x={65} y={26} len={8} />
    </IconSVG>
  );
}

export function IconCostClarity({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={22} y={40} w={20} h={20} />
      <ArrowR x={45} y={50} len={10} />
      <Hatched x={59} y={40} w={20} h={20} />
      <line x1={22} y1={66} x2={79} y2={66} stroke={INK} strokeWidth="0.8" strokeLinecap="round" />
    </IconSVG>
  );
}

export function IconAffordability({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={22} y={32} w={14} h={20} />
      <Box x={40} y={40} w={14} h={20} />
      <Hatched x={58} y={48} w={14} h={20} />
      <ArrowD x={80} y={48} len={10} />
    </IconSVG>
  );
}

export function IconDocuments({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={28} y={26} w={34} h={42} />
      <Hatched x={40} y={38} w={34} h={42} />
    </IconSVG>
  );
}

export function IconTransparency({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <Box x={22} y={22} w={56} h={56} />
      <Hatched x={38} y={38} w={24} h={24} />
      <ArrowR x={10} y={50} len={9} />
    </IconSVG>
  );
}

export function IconResident({ size = 80 }: IconProps) {
  return (
    <IconSVG size={size}>
      <circle cx="50" cy="30" r="7" fill="none" stroke={INK} strokeWidth={STROKE} />
      <line x1="46" y1="38.5" x2="46" y2="41" stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
      <line x1="54" y1="38.5" x2="54" y2="41" stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
      <Hatched x={38} y={41} w={24} h={24} gap={2.8} />
      <Box x={40} y={65} w={8} h={14} />
      <Box x={52} y={65} w={8} h={14} />
      <line x1="32" y1="80" x2="68" y2="80" stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
    </IconSVG>
  );
}

export function IconHousingAssociation({ size = 80 }: IconProps) {
  const houseAt = (x0: number, hatched: boolean) => {
    const apex: [number, number] = [x0 + 9, 30];
    const eaveL: [number, number] = [x0, 44];
    const eaveR: [number, number] = [x0 + 18, 44];
    return (
      <g key={`h-${x0}`}>
        <polyline
          points={`${eaveL[0]},${eaveL[1]} ${apex[0]},${apex[1]} ${eaveR[0]},${eaveR[1]}`}
          fill="none"
          stroke={INK}
          strokeWidth={STROKE}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {hatched ? <Hatched x={eaveL[0]} y={eaveL[1]} w={18} h={28} gap={2.8} /> : <Box x={eaveL[0]} y={eaveL[1]} w={18} h={28} />}
      </g>
    );
  };
  return (
    <IconSVG size={size}>
      <polyline
        points="20,22 20,18 80,18 80,22"
        fill="none"
        stroke={INK}
        strokeWidth="1.1"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      <line x1="50" y1="18" x2="50" y2="24" stroke={INK} strokeWidth="1.1" strokeOpacity="0.7" strokeLinecap="round" />
      {houseAt(14, false)}
      {houseAt(41, true)}
      {houseAt(68, false)}
      <line x1="10" y1="72" x2="90" y2="72" stroke={INK} strokeWidth={STROKE} strokeLinecap="round" />
    </IconSVG>
  );
}
