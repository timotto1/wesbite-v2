import { IllustrationFrame } from "./IllustrationFrame";

const FONT = "Poppins, system-ui, sans-serif";

/* Listings — applicant grid + foreground "Eligibility passed" insight card */
export function ListingsHero() {
  return (
    <IllustrationFrame aspect="4-3" tone="panel">
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" role="img" aria-label="Listings dashboard with applicants and an eligibility insight card">
        {/* Map of new development tiles */}
        <g transform="translate(48 60)">
          <rect width="704" height="60" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
          <text x="20" y="38" fontFamily={FONT} fontSize="13" fill="#1A1A1F" fontWeight="500">Greenford Vale · 38 homes</text>
          <text x="220" y="38" fontFamily={FONT} fontSize="11" fill="#5C5C66">Phase 2 · launching 14 May</text>
          <rect x="600" y="20" width="80" height="20" rx="10" fill="#F0EBF8" />
          <text x="615" y="34" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#26045D">LIVE</text>

          {/* Applicants grid */}
          {Array.from({ length: 12 }).map((_, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            const x = col * 178;
            const y = 80 + row * 110;
            const isHighlighted = i === 5;
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                <rect width="170" height="96" rx="8" fill={isHighlighted ? "#F0EBF8" : "#FFFFFF"} stroke={isHighlighted ? "#26045D" : "#E5E5DD"} />
                <circle cx="22" cy="28" r="11" fill={isHighlighted ? "#26045D" : "#F2F2EC"} />
                <rect x="42" y="20" width="86" height="8" rx="2" fill={isHighlighted ? "#26045D" : "#1A1A1F"} />
                <rect x="42" y="34" width="60" height="6" rx="2" fill="#9094A0" />
                <rect x="14" y="60" width="142" height="4" rx="2" fill="#F2F2EC" />
                <rect x="14" y="60" width={20 + (i * 11) % 100} height="4" rx="2" fill={isHighlighted ? "#26045D" : "#5C5C66"} />
                <text x="14" y="80" fontFamily={FONT} fontSize="9" fill="#9094A0">
                  {isHighlighted ? "92% match" : `${50 + (i * 7) % 40}% match`}
                </text>
              </g>
            );
          })}
        </g>

        {/* Foreground card */}
        <g transform="translate(440 410)">
          <rect x="-2" y="-2" width="332" height="148" rx="14" fill="#1A1A1F" opacity="0.04" />
          <rect width="328" height="144" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="20" y="34" fontFamily={FONT} fontSize="11" letterSpacing="2" fill="#26045D">ELIGIBILITY · AUTO-CHECKED</text>
          <text x="20" y="64" fontFamily={FONT} fontSize="20" fontWeight="500" fill="#1A1A1F">Cleared in 4 minutes</text>
          <text x="20" y="86" fontFamily={FONT} fontSize="12" fill="#5C5C66">Income, savings & local connection</text>
          <text x="20" y="104" fontFamily={FONT} fontSize="12" fill="#5C5C66">all on file · scheme rules met</text>
          <rect x="20" y="116" width="100" height="16" rx="8" fill="#F0EBF8" />
          <text x="32" y="128" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#26045D">RESERVE →</text>
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Resident Portal — phone hero with affordability ring + structured tiles */
export function ResidentPortalHero() {
  return (
    <IllustrationFrame aspect="4-3" tone="soft">
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" role="img" aria-label="Resident portal phone with affordability and lease tiles">
        {/* Background phone */}
        <g transform="translate(140 60)">
          <rect width="240" height="480" rx="32" fill="#FFFFFF" stroke="#E5E5DD" />
          <rect x="14" y="20" width="212" height="446" rx="20" fill="#FAFAF7" />

          <text x="32" y="48" fontFamily={FONT} fontSize="11" letterSpacing="1.5" fill="#5C5C66">12 BIRCH LANE</text>

          {/* Affordability ring */}
          <g transform="translate(120 130)">
            <circle r="46" fill="none" stroke="#F0EBF8" strokeWidth="8" />
            <circle r="46" fill="none" stroke="#26045D" strokeWidth="8" strokeDasharray="289" strokeDashoffset="100" transform="rotate(-90)" strokeLinecap="round" />
            <text textAnchor="middle" y="-2" fontFamily={FONT} fontSize="11" letterSpacing="1.5" fill="#5C5C66">OWNED</text>
            <text textAnchor="middle" y="22" fontFamily={FONT} fontSize="24" fill="#1A1A1F" fontWeight="500">65%</text>
          </g>
          <text x="120" y="218" textAnchor="middle" fontFamily={FONT} fontSize="11" fill="#5C5C66">CAN AFFORD UP TO 50%</text>

          {/* Tiles */}
          {[
            ["Lease", "78 years left"],
            ["Service charge", "£148 · April"],
            ["Documents", "All up to date"],
          ].map(([title, body], i) => (
            <g key={i} transform={`translate(28 ${244 + i * 50})`}>
              <rect width="184" height="42" rx="8" fill="#FFFFFF" stroke="#E5E5DD" />
              <text x="14" y="20" fontFamily={FONT} fontSize="11" fill="#1A1A1F">{title}</text>
              <text x="14" y="34" fontFamily={FONT} fontSize="10" fill="#5C5C66">{body}</text>
            </g>
          ))}
          <rect x="28" y="404" width="184" height="38" rx="19" fill="#26045D" />
          <text x="118" y="428" textAnchor="middle" fontFamily={FONT} fontSize="11" fill="#FAFAF7" fontWeight="500">Instruct staircase →</text>
        </g>

        {/* Foreground "structured insight" card */}
        <g transform="translate(420 360)">
          <rect x="-2" y="-2" width="316" height="156" rx="14" fill="#1A1A1F" opacity="0.04" />
          <rect width="312" height="152" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="20" y="34" fontFamily={FONT} fontSize="11" letterSpacing="2" fill="#26045D">LANDS IN HOUSING ASSOCIATION WORKFLOW</text>
          <text x="20" y="64" fontFamily={FONT} fontSize="20" fontWeight="500" fill="#1A1A1F">Case opened automatically</text>
          <text x="20" y="86" fontFamily={FONT} fontSize="12" fill="#5C5C66">Affordability already on file</text>
          <text x="20" y="104" fontFamily={FONT} fontSize="12" fill="#5C5C66">Lease terms attached · ready to triage</text>
          <text x="20" y="134" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#26045D">2 SECONDS · END-TO-END</text>
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Comms — message threads converging into one resident record */
export function CommsHero() {
  return (
    <IllustrationFrame aspect="4-3" tone="panel">
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" role="img" aria-label="Comms threads converging into a single resident record">
        {/* Source channels */}
        {["Email", "SMS", "In-app", "Letter"].map((label, i) => (
          <g key={label} transform={`translate(48 ${80 + i * 100})`}>
            <rect width="220" height="68" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
            <rect x="14" y="14" width="40" height="40" rx="8" fill="#F2F2EC" />
            <rect x="64" y="20" width="80" height="8" rx="2" fill="#1A1A1F" />
            <rect x="64" y="36" width="120" height="6" rx="2" fill="#9094A0" />
            <text x="14" y="58" fontFamily={FONT} fontSize="9" letterSpacing="1.5" fill="#9094A0">{label.toUpperCase()}</text>
          </g>
        ))}

        {/* Convergence into resident card */}
        <g transform="translate(480 200)">
          <rect x="-2" y="-2" width="284" height="208" rx="14" fill="#1A1A1F" opacity="0.04" />
          <rect width="280" height="204" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="20" y="34" fontFamily={FONT} fontSize="11" letterSpacing="2" fill="#26045D">RESIDENT THREAD</text>
          <text x="20" y="62" fontFamily={FONT} fontSize="18" fontWeight="500" fill="#1A1A1F">12 Birch Lane</text>
          <line x1="20" y1="78" x2="260" y2="78" stroke="#E5E5DD" />

          {[
            ["Email", "Service charge update"],
            ["SMS", "Valuation reminder"],
            ["In-app", "Document requested"],
            ["Email", "Mortgage offer received"],
          ].map(([type, msg], i) => (
            <g key={i} transform={`translate(20 ${94 + i * 24})`}>
              <circle cx="4" cy="6" r="2.5" fill={i === 3 ? "#26045D" : "#9094A0"} />
              <text x="14" y="10" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#9094A0">{(type as string).toUpperCase()}</text>
              <text x="76" y="10" fontFamily={FONT} fontSize="11" fill="#1A1A1F">{msg}</text>
            </g>
          ))}
        </g>

        {/* Connecting lines */}
        <g fill="none" stroke="#5C5C66" strokeWidth="1.25">
          <path d="M268,114 C360,114 380,260 480,260" className="dash-flow" />
          <path d="M268,214 C360,214 380,290 480,290" className="dash-flow" />
          <path d="M268,314 C360,314 380,320 480,320" className="dash-flow" />
          <path d="M268,414 C360,414 380,350 480,350" className="dash-flow" />
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Compliance — PDF on left, structured fields on right */
export function ComplianceHero() {
  return (
    <IllustrationFrame aspect="4-3" tone="panel">
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" role="img" aria-label="Lease PDF parsed into structured compliance fields">
        {/* PDF */}
        <g transform="translate(60 80)">
          <rect width="240" height="320" rx="6" fill="#FFFFFF" stroke="#E5E5DD" />
          <text x="20" y="36" fontFamily={FONT} fontSize="9" letterSpacing="1.5" fill="#9094A0">LEASE · 12 BIRCH LANE</text>
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x="20" y={56 + i * 16} width={i % 4 === 3 ? 140 : 200} height="6" rx="2" fill="#E5E5DD" />
          ))}
          <rect x="20" y="304" width="100" height="6" rx="2" fill="#9094A0" />
        </g>

        {/* Connecting flow */}
        <g fill="none" stroke="#26045D" strokeWidth="1.25" markerEnd="url(#extract-arrow)">
          <defs>
            <marker id="extract-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M0,0 L0,10 L9,5 z" fill="#26045D" />
            </marker>
          </defs>
          <path d="M310,160 C380,160 380,180 440,180" className="dash-flow" />
          <path d="M310,220 C380,220 380,260 440,260" className="dash-flow" />
          <path d="M310,280 C380,280 380,340 440,340" className="dash-flow" />
        </g>

        {/* Structured fields */}
        <g transform="translate(440 100)">
          {[
            { label: "LEASE LENGTH", value: "78 years remaining", confidence: 96 },
            { label: "GROUND RENT", value: "£250 / yr · doubling 2030", confidence: 92 },
            { label: "STAIRCASING CAP", value: "Up to 100%", confidence: 98 },
            { label: "FORFEITURE TRIGGER", value: "Rent arrears > 30 days", confidence: 92 },
          ].map((row, i) => (
            <g key={row.label} transform={`translate(0 ${i * 80})`}>
              <rect width="280" height="68" rx="10" fill="#FFFFFF" stroke={i === 3 ? "#26045D" : "#E5E5DD"} />
              <text x="14" y="22" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#9094A0">{row.label}</text>
              <text x="14" y="42" fontFamily={FONT} fontSize="13" fontWeight="500" fill="#1A1A1F">{row.value}</text>
              <rect x="14" y="52" width="120" height="4" rx="2" fill="#F0EBF8" />
              <rect x="14" y="52" width={row.confidence * 1.2} height="4" rx="2" fill={i === 3 ? "#26045D" : "#5C5C66"} />
              <text x="142" y="56" fontFamily={FONT} fontSize="10" fill={i === 3 ? "#26045D" : "#9094A0"}>{row.confidence}%</text>
            </g>
          ))}
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Finance — two-rail composition (asset above, resident below) converging into a forecast card */
export function FinanceHero() {
  return (
    <IllustrationFrame aspect="4-3" tone="panel">
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" role="img" aria-label="Finance two-rail diagram converging into a portfolio forecast">
        {/* Asset rail */}
        <g transform="translate(60 90)">
          <text x="0" y="0" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#9094A0">ASSET-SIDE</text>
          {[
            ["Rent receipts", "£428k"],
            ["Service charges", "£91k"],
            ["Capital receipts", "£612k"],
          ].map(([title, value], i) => (
            <g key={i} transform={`translate(${i * 145} 16)`}>
              <rect width="130" height="60" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
              <text x="14" y="22" fontFamily={FONT} fontSize="10" fill="#9094A0">{title}</text>
              <text x="14" y="42" fontFamily={FONT} fontSize="14" fontWeight="500" fill="#1A1A1F">{value}</text>
            </g>
          ))}
        </g>

        {/* Resident rail */}
        <g transform="translate(60 310)">
          <text x="0" y="0" fontFamily={FONT} fontSize="10" letterSpacing="1.5" fill="#9094A0">RESIDENT-SIDE</text>
          {[
            ["Affordability uplift", "+12 cohort"],
            ["Arrears risk", "11 flagged"],
            ["Active staircases", "38"],
          ].map(([title, value], i) => (
            <g key={i} transform={`translate(${i * 145} 16)`}>
              <rect width="130" height="60" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
              <text x="14" y="22" fontFamily={FONT} fontSize="10" fill="#9094A0">{title}</text>
              <text x="14" y="42" fontFamily={FONT} fontSize="14" fontWeight="500" fill="#1A1A1F">{value}</text>
            </g>
          ))}
        </g>

        {/* Convergence into forecast card */}
        <g transform="translate(516 200)">
          <rect x="-2" y="-2" width="240" height="208" rx="14" fill="#1A1A1F" opacity="0.04" />
          <rect width="236" height="204" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="18" y="32" fontFamily={FONT} fontSize="10" letterSpacing="2" fill="#26045D">PORTFOLIO FORECAST</text>
          <text x="18" y="60" fontFamily={FONT} fontSize="22" fontWeight="500" fill="#1A1A1F">£11.2m NOI</text>
          <text x="18" y="80" fontFamily={FONT} fontSize="11" fill="#5C5C66">FY26 · live model · combined</text>

          {/* Mini chart */}
          <polyline
            points="18,160 50,144 82,150 114,128 146,116 178,98 210,84"
            fill="none"
            stroke="#26045D"
            strokeWidth="2"
          />
          <polyline
            points="18,170 50,162 82,170 114,154 146,148 178,140 210,128"
            fill="none"
            stroke="#9094A0"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <text x="18" y="190" fontFamily={FONT} fontSize="10" fill="#9094A0">SOLID = ACTUAL  ·  DASHED = FORECAST</text>
        </g>

        {/* Connecting flow */}
        <g fill="none" stroke="#5C5C66" strokeWidth="1.25">
          <path d="M495,130 C510,130 510,250 516,250" className="dash-flow" />
          <path d="M495,350 C510,350 510,330 516,330" className="dash-flow" />
        </g>
      </svg>
    </IllustrationFrame>
  );
}

/* Aftersales — case timeline with parties working from one record */
export function AftersalesHero() {
  return (
    <IllustrationFrame aspect="4-3" tone="panel">
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" role="img" aria-label="Aftersales case timeline with parties on one record">
        <text x="48" y="76" fontFamily={FONT} fontSize="11" letterSpacing="2" fill="#5C5C66">CASE · STAIRCASE TO 50% · 12 BIRCH LANE</text>
        <text x="48" y="98" fontFamily={FONT} fontSize="22" fontWeight="500" fill="#1A1A1F">Week 4 of 6</text>

        {/* Timeline */}
        <g transform="translate(48 150)">
          <line x1="0" y1="20" x2="704" y2="20" stroke="#E5E5DD" />
          <line x1="0" y1="20" x2="380" y2="20" stroke="#26045D" strokeWidth="2" />
          {[
            { label: "Instruction", at: 0, done: true },
            { label: "Affordability", at: 130, done: true },
            { label: "Valuation", at: 260, done: true },
            { label: "Solicitor", at: 380, done: false, current: true },
            { label: "Mortgage", at: 510, done: false },
            { label: "Completion", at: 700, done: false },
          ].map((step) => (
            <g key={step.label} transform={`translate(${step.at} 0)`}>
              <circle cx="0" cy="20" r={step.current ? 9 : 6} fill={step.done || step.current ? "#26045D" : "#FFFFFF"} stroke={step.done || step.current ? "#26045D" : "#9094A0"} />
              {step.current ? <circle cx="0" cy="20" r="14" fill="#26045D" opacity="0.18" className="glow-pulse" /> : null}
              <text x="0" y="-2" textAnchor="middle" fontFamily={FONT} fontSize="11" fill={step.current ? "#26045D" : "#5C5C66"} fontWeight={step.current ? 500 : 400}>
                {step.label}
              </text>
            </g>
          ))}
        </g>

        {/* Party rows */}
        <g transform="translate(48 280)">
          {["Housing Association team", "Resident", "Solicitor", "Valuer", "Mortgage broker"].map((name, i) => (
            <g key={name} transform={`translate(0 ${i * 44})`}>
              <text x="0" y="14" fontFamily={FONT} fontSize="11" fill="#9094A0">{name}</text>
              <line x1="120" y1="10" x2="704" y2="10" stroke="#F2F2EC" />
              {/* activity dots scattered across lane */}
              {[40, 140, 240, 340, 440].slice(0, 1 + (i % 5)).map((x, j) => (
                <circle key={j} cx={120 + x} cy="10" r="4" fill={i === 2 && j === 0 ? "#26045D" : "#5C5C66"} />
              ))}
            </g>
          ))}
        </g>

        {/* Foreground card */}
        <g transform="translate(440 410)">
          <rect x="-2" y="-2" width="316" height="124" rx="14" fill="#1A1A1F" opacity="0.04" />
          <rect width="312" height="120" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="18" y="32" fontFamily={FONT} fontSize="10" letterSpacing="2" fill="#26045D">SHARED RECORD</text>
          <text x="18" y="60" fontFamily={FONT} fontSize="20" fontWeight="500" fill="#1A1A1F">Six weeks, not fourteen</text>
          <text x="18" y="84" fontFamily={FONT} fontSize="12" fill="#5C5C66">Every party reads the same case.</text>
          <text x="18" y="102" fontFamily={FONT} fontSize="12" fill="#5C5C66">No re-keying. No lost context.</text>
        </g>
      </svg>
    </IllustrationFrame>
  );
}
