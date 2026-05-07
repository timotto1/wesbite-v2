import { IllustrationFrame } from "./IllustrationFrame";

const FONT = "Poppins, system-ui, sans-serif";

function Eyebrow({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} fontFamily={FONT} fontSize="9" letterSpacing="1.5" fill="#9094A0">
      {children}
    </text>
  );
}

/* Listings — funnel: portals → enquiries → eligibility → reservation */
export function ListingsDiagram() {
  return (
    <IllustrationFrame aspect="3-2" tone="card">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" role="img" aria-label="Listings funnel diagram">
        {/* Stages */}
        <g transform="translate(40 60)">
          {[
            { x: 0,   w: 520, label: "Portals · Rightmove, Zoopla, Share to Buy", count: "1,240 enquiries" },
            { x: 40,  w: 440, label: "Graded leads · scored on affordability", count: "520 leads" },
            { x: 110, w: 300, label: "Auto-eligibility · scheme rules met", count: "230 cleared", highlight: true },
            { x: 180, w: 160, label: "Reservation", count: "92 reserved" },
          ].map((s, i) => (
            <g key={i} transform={`translate(${s.x} ${i * 72})`}>
              <rect width={s.w} height="58" rx="10" fill={s.highlight ? "#F0EBF8" : "#F2F2EC"} stroke={s.highlight ? "#26045D" : "transparent"} />
              <text x="20" y="26" fontFamily={FONT} fontSize="12" fill="#1A1A1F" fontWeight={s.highlight ? 500 : 400}>{s.label}</text>
              <text x="20" y="46" fontFamily={FONT} fontSize="11" fill={s.highlight ? "#26045D" : "#5C5C66"}>{s.count}</text>
            </g>
          ))}
        </g>
        <Eyebrow x={40} y={42}>FUNNEL</Eyebrow>
      </svg>
    </IllustrationFrame>
  );
}

/* Resident Portal — two-sided distilled */
export function ResidentPortalDiagram() {
  return (
    <IllustrationFrame aspect="3-2" tone="card">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" role="img" aria-label="Resident portal two-sided overview">
        <Eyebrow x={40} y={42}>TWO-SIDED</Eyebrow>

        {/* HA */}
        <g transform="translate(40 60)">
          <rect width="240" height="300" rx="10" fill="#F2F2EC" />
          <text x="20" y="32" fontFamily={FONT} fontSize="11" letterSpacing="1.5" fill="#5C5C66">HOUSING ASSOCIATION WORKFLOW</text>
          {["Cases", "Documents", "Compliance", "Finance"].map((label, i) => (
            <g key={label} transform={`translate(20 ${52 + i * 56})`}>
              <rect width="200" height="40" rx="8" fill="#FFFFFF" stroke="#E5E5DD" />
              <text x="14" y="24" fontFamily={FONT} fontSize="12" fill="#1A1A1F">{label}</text>
            </g>
          ))}
        </g>

        {/* Resident */}
        <g transform="translate(360 60)">
          <rect width="200" height="300" rx="20" fill="#FFFFFF" stroke="#E5E5DD" />
          <text x="20" y="32" fontFamily={FONT} fontSize="11" letterSpacing="1.5" fill="#5C5C66">RESIDENT</text>
          {["Affordability", "Lease terms", "Documents", "Instructions"].map((label, i) => (
            <g key={label} transform={`translate(20 ${52 + i * 56})`}>
              <rect width="160" height="40" rx="8" fill="#F0EBF8" />
              <text x="14" y="24" fontFamily={FONT} fontSize="12" fill="#26045D">{label}</text>
            </g>
          ))}
        </g>

        {/* Connectors */}
        <g fill="none" stroke="#26045D" strokeWidth="1.25">
          <path d="M280,120 L360,120" className="dash-flow" />
          <path d="M280,176 L360,176" className="dash-flow" />
          <path d="M280,232 L360,232" className="dash-flow" />
          <path d="M280,288 L360,288" className="dash-flow" />
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Comms — many channels into one resident thread */
export function CommsDiagram() {
  return (
    <IllustrationFrame aspect="3-2" tone="card">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" role="img" aria-label="Comms channels converging into one record">
        <Eyebrow x={40} y={42}>INBOX → ONE RECORD</Eyebrow>

        {/* Channels */}
        {["Email", "SMS", "In-app", "Letter", "Phone"].map((label, i) => (
          <g key={label} transform={`translate(40 ${68 + i * 56})`}>
            <rect width="160" height="40" rx="20" fill="#F2F2EC" />
            <circle cx="22" cy="20" r="8" fill="#FFFFFF" stroke="#E5E5DD" />
            <text x="40" y="24" fontFamily={FONT} fontSize="11" fill="#1A1A1F">{label}</text>
          </g>
        ))}

        {/* Convergence */}
        <g transform="translate(340 130)">
          <rect width="220" height="160" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="20" y="30" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#26045D">RESIDENT THREAD</text>
          <text x="20" y="56" fontFamily={FONT} fontSize="14" fontWeight="500" fill="#1A1A1F">12 Birch Lane</text>
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(20 ${74 + i * 18})`}>
              <circle cx="3" cy="6" r="2.5" fill={i === 0 ? "#26045D" : "#9094A0"} />
              <rect x="14" y="2" width={120 - i * 6} height="6" rx="2" fill="#E5E5DD" />
            </g>
          ))}
        </g>

        {/* Lines from channels to thread */}
        <g fill="none" stroke="#5C5C66" strokeWidth="1">
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M200,${88 + i * 56} C260,${88 + i * 56} 280,210 340,210`} className="dash-flow" />
          ))}
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Compliance — document parsed into fields */
export function ComplianceDiagram() {
  return (
    <IllustrationFrame aspect="3-2" tone="card">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" role="img" aria-label="Compliance document extraction diagram">
        <Eyebrow x={40} y={42}>DOCUMENT → STRUCTURED</Eyebrow>

        {/* PDF */}
        <g transform="translate(40 60)">
          <rect width="200" height="280" rx="6" fill="#F2F2EC" />
          <text x="16" y="30" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#9094A0">LEASE.PDF · 90 PAGES</text>
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={i} x="16" y={48 + i * 14} width={i % 4 === 3 ? 100 : 168} height="5" rx="2" fill="#E5E5DD" />
          ))}
        </g>

        {/* Output rows */}
        <g transform="translate(310 60)">
          {[
            ["Lease length", "78y"],
            ["Ground rent", "£250/yr"],
            ["Staircasing cap", "100%"],
            ["Forfeiture", "Rent > 30 days"],
            ["Service charge", "£148/qtr"],
          ].map(([label, value], i) => (
            <g key={i} transform={`translate(0 ${i * 52})`}>
              <rect width="240" height="40" rx="8" fill={i === 3 ? "#F0EBF8" : "#FFFFFF"} stroke={i === 3 ? "#26045D" : "#E5E5DD"} />
              <text x="14" y="18" fontFamily={FONT} fontSize="10" fill="#9094A0">{label as string}</text>
              <text x="14" y="32" fontFamily={FONT} fontSize="12" fontWeight="500" fill={i === 3 ? "#26045D" : "#1A1A1F"}>{value as string}</text>
              <text x="200" y="24" fontFamily={FONT} fontSize="10" fill={i === 3 ? "#26045D" : "#9094A0"}>{[96, 92, 98, 92, 88][i]}%</text>
            </g>
          ))}
        </g>

        {/* Flow lines */}
        <g fill="none" stroke="#26045D" strokeWidth="1.25">
          {[80, 132, 184, 236, 288].map((y, i) => (
            <path key={i} d={`M240,${y} C275,${y} 275,${80 + i * 52} 310,${80 + i * 52}`} className="dash-flow" />
          ))}
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Finance — two rails into a forecast */
export function FinanceDiagram() {
  return (
    <IllustrationFrame aspect="3-2" tone="card">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" role="img" aria-label="Finance two-rail forecast diagram">
        <Eyebrow x={40} y={42}>ASSET + RESIDENT → FORECAST</Eyebrow>

        {/* Asset rail */}
        <g transform="translate(40 80)">
          <text x="0" y="0" fontFamily={FONT} fontSize="9" letterSpacing="1.5" fill="#9094A0">ASSET</text>
          <line x1="0" y1="14" x2="240" y2="14" stroke="#E5E5DD" />
          {[40, 80, 140, 180].map((x, i) => (
            <circle key={i} cx={x} cy="14" r="6" fill="#5C5C66" />
          ))}
        </g>

        {/* Resident rail */}
        <g transform="translate(40 140)">
          <text x="0" y="0" fontFamily={FONT} fontSize="9" letterSpacing="1.5" fill="#9094A0">RESIDENT</text>
          <line x1="0" y1="14" x2="240" y2="14" stroke="#E5E5DD" />
          {[60, 110, 160].map((x, i) => (
            <circle key={i} cx={x} cy="14" r="6" fill="#5C5C66" />
          ))}
        </g>

        {/* Convergence */}
        <g fill="none" stroke="#26045D" strokeWidth="1.25">
          <path d="M280,94 C310,94 310,200 360,200" className="dash-flow" />
          <path d="M280,154 C310,154 310,200 360,200" className="dash-flow" />
        </g>

        {/* Forecast card */}
        <g transform="translate(360 90)">
          <rect width="200" height="220" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="16" y="30" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#26045D">FORECAST · FY26</text>
          <text x="16" y="64" fontFamily={FONT} fontSize="22" fontWeight="500" fill="#1A1A1F">£11.2m</text>
          <polyline
            points="16,160 50,148 84,154 118,128 152,116 186,98"
            fill="none"
            stroke="#26045D"
            strokeWidth="2"
          />
          <polyline
            points="16,178 50,168 84,176 118,156 152,148 186,138"
            fill="none"
            stroke="#9094A0"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Aftersales — case timeline */
export function AftersalesDiagram() {
  return (
    <IllustrationFrame aspect="3-2" tone="card">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full" role="img" aria-label="Aftersales case timeline">
        <Eyebrow x={40} y={42}>CASE · END TO END</Eyebrow>

        <g transform="translate(40 110)">
          <line x1="0" y1="20" x2="520" y2="20" stroke="#E5E5DD" />
          <line x1="0" y1="20" x2="240" y2="20" stroke="#26045D" strokeWidth="2" />
          {[
            { label: "Instruction", at: 0, done: true },
            { label: "Affordability", at: 100, done: true },
            { label: "Valuation", at: 180, done: true },
            { label: "Solicitor", at: 240, current: true },
            { label: "Mortgage", at: 360, done: false },
            { label: "Completion", at: 520, done: false },
          ].map((s) => (
            <g key={s.label} transform={`translate(${s.at} 0)`}>
              {s.current ? <circle cx="0" cy="20" r="14" fill="#26045D" opacity="0.18" className="glow-pulse" /> : null}
              <circle cx="0" cy="20" r={s.current ? 8 : 5} fill={s.done || s.current ? "#26045D" : "#FFFFFF"} stroke={s.done || s.current ? "#26045D" : "#9094A0"} />
              <text x="0" y="-2" textAnchor="middle" fontFamily={FONT} fontSize="11" fill={s.current ? "#26045D" : "#5C5C66"} fontWeight={s.current ? 500 : 400}>
                {s.label}
              </text>
            </g>
          ))}
        </g>

        {/* Parties */}
        <g transform="translate(40 220)">
          {["Housing Association team", "Resident", "Solicitor", "Valuer"].map((name, i) => (
            <g key={name} transform={`translate(0 ${i * 30})`}>
              <text x="0" y="14" fontFamily={FONT} fontSize="11" fill="#9094A0">{name}</text>
              <line x1="100" y1="10" x2="520" y2="10" stroke="#F2F2EC" />
              {[40, 100, 200, 300].slice(0, 1 + (i % 4)).map((x, j) => (
                <circle key={j} cx={100 + x} cy="10" r="4" fill={i === 2 && j === 0 ? "#26045D" : "#5C5C66"} />
              ))}
            </g>
          ))}
        </g>
      </svg>
    </IllustrationFrame>
  );
}
