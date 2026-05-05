import { IllustrationFrame } from "./IllustrationFrame";

/**
 * Landing-page hero composition (Vanta-staged style).
 * A partial case-manager surface in the back, a foreground "structured insight"
 * card naming the forfeiture trigger. One purple highlight only.
 */
export function HeroComposition() {
  return (
    <IllustrationFrame aspect="4-3" tone="panel">
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Stairpay case manager surface with a structured insight card highlighting a forfeiture trigger"
      >
        {/* Back surface — case-manager dashboard */}
        <g transform="translate(48 48)">
          {/* App chrome */}
          <rect width="800" height="60" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
          <circle cx="22" cy="30" r="4" fill="#E5E5DD" />
          <circle cx="36" cy="30" r="4" fill="#E5E5DD" />
          <circle cx="50" cy="30" r="4" fill="#E5E5DD" />
          <rect x="80" y="22" width="160" height="16" rx="4" fill="#F2F2EC" />
          <rect x="660" y="22" width="60" height="16" rx="4" fill="#F2F2EC" />

          {/* Sidebar */}
          <rect x="0" y="76" width="180" height="500" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
          <rect x="20" y="100" width="100" height="10" rx="3" fill="#1A1A1F" />
          <rect x="20" y="124" width="140" height="8" rx="3" fill="#E5E5DD" />
          <rect x="20" y="156" width="120" height="8" rx="3" fill="#E5E5DD" />
          <rect x="20" y="184" width="100" height="8" rx="3" fill="#E5E5DD" />
          <rect x="20" y="212" width="130" height="8" rx="3" fill="#E5E5DD" />
          <rect x="20" y="240" width="110" height="8" rx="3" fill="#E5E5DD" />
          <rect x="20" y="268" width="125" height="8" rx="3" fill="#E5E5DD" />
          <rect x="0" y="288" width="180" height="32" fill="#F0EBF8" />
          <rect x="20" y="300" width="120" height="8" rx="3" fill="#26045D" />

          {/* Main content frame */}
          <rect x="200" y="76" width="600" height="500" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
          <rect x="220" y="100" width="220" height="14" rx="4" fill="#1A1A1F" />
          <rect x="220" y="124" width="320" height="10" rx="3" fill="#9094A0" />

          {/* Tab strip */}
          <rect x="220" y="156" width="80" height="26" rx="6" fill="#F2F2EC" />
          <rect x="232" y="166" width="56" height="6" rx="2" fill="#5C5C66" />
          <rect x="312" y="156" width="80" height="26" rx="6" fill="#FFFFFF" stroke="#E5E5DD" />
          <rect x="324" y="166" width="56" height="6" rx="2" fill="#9094A0" />
          <rect x="404" y="156" width="80" height="26" rx="6" fill="#FFFFFF" stroke="#E5E5DD" />
          <rect x="416" y="166" width="56" height="6" rx="2" fill="#9094A0" />

          {/* Stat row */}
          <rect x="220" y="200" width="180" height="76" rx="8" fill="#F2F2EC" />
          <rect x="234" y="216" width="60" height="6" rx="2" fill="#9094A0" />
          <rect x="234" y="234" width="80" height="18" rx="3" fill="#1A1A1F" />
          <rect x="234" y="262" width="40" height="6" rx="2" fill="#5C5C66" />

          <rect x="412" y="200" width="180" height="76" rx="8" fill="#F2F2EC" />
          <rect x="426" y="216" width="60" height="6" rx="2" fill="#9094A0" />
          <rect x="426" y="234" width="60" height="18" rx="3" fill="#1A1A1F" />
          <rect x="426" y="262" width="40" height="6" rx="2" fill="#5C5C66" />

          <rect x="604" y="200" width="180" height="76" rx="8" fill="#F2F2EC" />
          <rect x="618" y="216" width="60" height="6" rx="2" fill="#9094A0" />
          <rect x="618" y="234" width="80" height="18" rx="3" fill="#1A1A1F" />
          <rect x="618" y="262" width="40" height="6" rx="2" fill="#5C5C66" />

          {/* Cases table header */}
          <rect x="220" y="304" width="564" height="1" fill="#E5E5DD" />
          <rect x="220" y="316" width="60" height="6" rx="2" fill="#9094A0" />
          <rect x="380" y="316" width="60" height="6" rx="2" fill="#9094A0" />
          <rect x="540" y="316" width="60" height="6" rx="2" fill="#9094A0" />
          <rect x="700" y="316" width="60" height="6" rx="2" fill="#9094A0" />

          {/* Cases rows */}
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} transform={`translate(0 ${340 + i * 38})`}>
                <rect x="220" y="0" width="564" height="32" rx="4" fill="transparent" />
                <rect x="220" y="6" width="120" height="8" rx="2" fill="#1A1A1F" />
                <rect x="220" y="20" width="80" height="6" rx="2" fill="#9094A0" />
                <rect x="380" y="10" width="80" height="8" rx="2" fill="#5C5C66" />
                <rect x="540" y="6" width="60" height="20" rx="10" fill="#F2F2EC" />
                <rect x="552" y="14" width="36" height="4" rx="2" fill="#5C5C66" />
                <rect x="700" y="10" width="60" height="8" rx="2" fill="#9094A0" />
              </g>
            ))}
          </g>
        </g>

        {/* Foreground "structured insight" card — the hero moment */}
        <g transform="translate(420 360)">
          {/* Subtle drop / shadow proxy via a dimmer rect behind */}
          <rect x="-2" y="-2" width="396" height="220" rx="14" fill="#1A1A1F" opacity="0.04" />
          <rect width="392" height="216" rx="12" fill="#FFFFFF" stroke="#26045D" strokeWidth="1" />

          {/* Eyebrow */}
          <text
            x="24"
            y="40"
            fontFamily="Poppins, system-ui, sans-serif"
            fontSize="11"
            letterSpacing="2"
            fill="#26045D"
          >
            STRUCTURED INSIGHT
          </text>

          {/* Title */}
          <text
            x="24"
            y="74"
            fontFamily="Poppins, system-ui, sans-serif"
            fontSize="22"
            fontWeight="500"
            fill="#1A1A1F"
          >
            Forfeiture trigger detected
          </text>

          {/* Body */}
          <text
            x="24"
            y="102"
            fontFamily="Poppins, system-ui, sans-serif"
            fontSize="13"
            fill="#5C5C66"
          >
            Non-payment of rent, &gt; 30 days
          </text>
          <text
            x="24"
            y="120"
            fontFamily="Poppins, system-ui, sans-serif"
            fontSize="13"
            fill="#5C5C66"
          >
            Lease clause 18.2 · Source: signed lease
          </text>

          {/* Confidence bar */}
          <text
            x="24"
            y="156"
            fontFamily="Poppins, system-ui, sans-serif"
            fontSize="10"
            letterSpacing="1.5"
            fill="#9094A0"
          >
            CONFIDENCE
          </text>
          <rect x="24" y="166" width="280" height="6" rx="3" fill="#F0EBF8" />
          <rect x="24" y="166" width="258" height="6" rx="3" fill="#26045D" />
          <text
            x="312"
            y="172"
            fontFamily="Poppins, system-ui, sans-serif"
            fontSize="11"
            fontWeight="500"
            fill="#26045D"
          >
            92%
          </text>

          {/* Action chip */}
          <rect x="24" y="186" width="136" height="20" rx="10" fill="#F0EBF8" />
          <text
            x="34"
            y="200"
            fontFamily="Poppins, system-ui, sans-serif"
            fontSize="10"
            letterSpacing="1.5"
            fill="#26045D"
          >
            OPEN CASE →
          </text>
        </g>

        {/* Glowing dot anchor on the relevant table row, behind the card */}
        <g transform="translate(248 386)">
          <circle r="6" fill="#26045D" opacity="0.3" className="glow-pulse" />
          <circle r="3" fill="#26045D" />
        </g>
      </svg>
    </IllustrationFrame>
  );
}
