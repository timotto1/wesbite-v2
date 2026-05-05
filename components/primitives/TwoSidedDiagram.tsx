/**
 * Two-sided model diagram — HA dashboard ⇄ resident phone, three labelled flows:
 *  - INSTRUCTION  → CASE
 *  - DOCUMENT     → RECORD
 *  - STATUS       → NOTIFICATION
 *
 * Pure SVG, design-token colours only. The dashed flow lines animate
 * via the .dash-flow utility (disabled by prefers-reduced-motion).
 */
export function TwoSidedDiagram() {
  return (
    <div className="relative mx-auto w-full">
      <svg
        viewBox="0 0 880 540"
        className="w-full"
        role="img"
        aria-label="Two-sided diagram showing instructions, documents and statuses flowing between a resident phone and a Housing Association dashboard"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M0,0 L0,10 L9,5 z" fill="#5C5C66" />
          </marker>
          <marker
            id="arrowhead-purple"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M0,0 L0,10 L9,5 z" fill="#26045D" />
          </marker>
        </defs>

        {/* HA dashboard (left) */}
        <g>
          <rect x="20" y="60" width="380" height="420" rx="14" fill="#FFFFFF" stroke="#E5E5DD" />
          <text x="40" y="92" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" letterSpacing="2" fill="#5C5C66">
            HOUSING ASSOCIATION
          </text>
          <line x1="40" y1="110" x2="380" y2="110" stroke="#E5E5DD" />

          {/* Open cases */}
          <rect x="40" y="128" width="340" height="58" rx="8" fill="#F2F2EC" />
          <text x="56" y="153" fontFamily="Poppins, system-ui, sans-serif" fontSize="13" fill="#1A1A1F">
            Staircasing · 12 Birch Lane
          </text>
          <text x="56" y="171" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#5C5C66">
            Stage: Awaiting valuation
          </text>

          <rect x="40" y="196" width="340" height="58" rx="8" fill="#F2F2EC" />
          <text x="56" y="221" fontFamily="Poppins, system-ui, sans-serif" fontSize="13" fill="#1A1A1F">
            Resale · 4 Linden Court
          </text>
          <text x="56" y="239" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#5C5C66">
            Stage: Buyer in qualification
          </text>

          {/* Newly arrived case (purple accent) */}
          <rect x="40" y="264" width="340" height="58" rx="8" fill="#F0EBF8" stroke="#26045D" />
          <text x="56" y="289" fontFamily="Poppins, system-ui, sans-serif" fontSize="13" fill="#26045D" fontWeight="500">
            New · Staircase to 50%
          </text>
          <text x="56" y="307" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#26045D">
            Auto-opened from resident · 2 min ago
          </text>

          <rect x="40" y="332" width="340" height="58" rx="8" fill="#F2F2EC" />
          <text x="56" y="357" fontFamily="Poppins, system-ui, sans-serif" fontSize="13" fill="#1A1A1F">
            Lease query · 33 Albany Place
          </text>
          <text x="56" y="375" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#5C5C66">
            Stage: Awaiting clause review
          </text>

          {/* Document trail */}
          <rect x="40" y="402" width="340" height="58" rx="8" fill="#F2F2EC" />
          <text x="56" y="427" fontFamily="Poppins, system-ui, sans-serif" fontSize="13" fill="#1A1A1F">
            Documents on file · 17
          </text>
          <text x="56" y="445" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#5C5C66">
            Latest: Mortgage offer · 8 May
          </text>
        </g>

        {/* Resident phone (right) */}
        <g>
          <rect x="660" y="80" width="200" height="380" rx="26" fill="#FFFFFF" stroke="#E5E5DD" />
          <rect x="672" y="100" width="176" height="340" rx="14" fill="#FAFAF7" />

          <text x="686" y="128" fontFamily="Poppins, system-ui, sans-serif" fontSize="10" letterSpacing="1.5" fill="#5C5C66">
            RESIDENT
          </text>
          <text x="686" y="156" fontFamily="Poppins, system-ui, sans-serif" fontSize="14" fill="#1A1A1F">
            12 Birch Lane
          </text>
          <text x="686" y="174" fontFamily="Poppins, system-ui, sans-serif" fontSize="10" fill="#9094A0">
            Owned share: 25%
          </text>

          {/* Affordability tile */}
          <rect x="686" y="194" width="148" height="50" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
          <text x="700" y="216" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#1A1A1F">
            Affordability
          </text>
          <text x="700" y="232" fontFamily="Poppins, system-ui, sans-serif" fontSize="10" fill="#5C5C66">
            Can afford up to 50%
          </text>

          {/* Documents tile */}
          <rect x="686" y="254" width="148" height="50" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
          <text x="700" y="276" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#1A1A1F">
            Documents
          </text>
          <text x="700" y="292" fontFamily="Poppins, system-ui, sans-serif" fontSize="10" fill="#5C5C66">
            All up to date
          </text>

          {/* Status tile */}
          <rect x="686" y="314" width="148" height="50" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
          <text x="700" y="336" fontFamily="Poppins, system-ui, sans-serif" fontSize="11" fill="#1A1A1F">
            Case progress
          </text>
          <text x="700" y="352" fontFamily="Poppins, system-ui, sans-serif" fontSize="10" fill="#5C5C66">
            Valuation booked · 14 May
          </text>

          {/* Primary instruction CTA */}
          <rect x="686" y="378" width="148" height="44" rx="22" fill="#26045D" />
          <text x="700" y="406" fontFamily="Poppins, system-ui, sans-serif" fontSize="12" fill="#FAFAF7" fontWeight="500">
            Instruct staircase →
          </text>
        </g>

        {/* Flows — left-pointing (resident → HA) and right-pointing (HA → resident) */}
        <g fill="none">
          {/* Instruction → Case (purple, headline flow) */}
          <path
            d="M660,400 C560,400 540,293 405,293"
            stroke="#26045D"
            strokeWidth="1.25"
            className="dash-flow"
            markerEnd="url(#arrowhead-purple)"
          />
          {/* Document → Record (mid grey) */}
          <path
            d="M660,278 C560,278 540,431 405,431"
            stroke="#5C5C66"
            strokeWidth="1.25"
            className="dash-flow"
            markerEnd="url(#arrowhead)"
          />
          {/* Status → Resident (right, HA → phone) */}
          <path
            d="M405,157 C540,157 560,339 660,339"
            stroke="#5C5C66"
            strokeWidth="1.25"
            className="dash-flow"
            markerEnd="url(#arrowhead)"
          />
        </g>

        {/* Flow labels */}
        <g fontFamily="Poppins, system-ui, sans-serif" fontSize="10" letterSpacing="1.5" fill="#5C5C66">
          <text x="438" y="294" fill="#26045D">INSTRUCTION → CASE</text>
          <text x="438" y="425">DOCUMENT → RECORD</text>
          <text x="438" y="153">STATUS → RESIDENT</text>
        </g>
      </svg>
    </div>
  );
}
