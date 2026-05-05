export function PlaceholderStaged({ label = "Staged composition" }: { label?: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-paper-panel">
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full">
        <rect x="40" y="40" width="500" height="40" rx="6" fill="#FFFFFF" stroke="#E5E5DD" />
        <rect x="40" y="100" width="720" height="320" rx="10" fill="#FFFFFF" stroke="#E5E5DD" />
        <rect x="60" y="120" width="200" height="14" rx="4" fill="#E5E5DD" />
        <rect x="60" y="148" width="680" height="1" fill="#E5E5DD" />
        <rect x="60" y="170" width="320" height="12" rx="3" fill="#EDEDE5" />
        <rect x="60" y="194" width="280" height="12" rx="3" fill="#EDEDE5" />
        <rect x="60" y="218" width="360" height="12" rx="3" fill="#EDEDE5" />
        <rect x="60" y="242" width="240" height="12" rx="3" fill="#EDEDE5" />
        <rect x="60" y="266" width="320" height="12" rx="3" fill="#EDEDE5" />

        {/* Foreground insight card */}
        <g transform="translate(420 320)">
          <rect width="320" height="160" rx="12" fill="#FFFFFF" stroke="#26045D" />
          <text x="20" y="36" fontSize="10" letterSpacing="2" fill="#26045D">
            STRUCTURED INSIGHT
          </text>
          <text x="20" y="68" fontSize="16" fill="#1A1A1F">
            Forfeiture trigger
          </text>
          <text x="20" y="92" fontSize="13" fill="#5C5C66">
            Non-payment of rent for 30 days
          </text>
          <rect x="20" y="116" width="170" height="6" rx="3" fill="#F0EBF8" />
          <rect x="20" y="116" width="156" height="6" rx="3" fill="#26045D" />
          <text x="200" y="124" fontSize="11" fill="#26045D">
            92% confident
          </text>
        </g>
      </svg>
      <span className="absolute bottom-3 right-4 text-eyebrow uppercase text-ink-light">
        {label}
      </span>
    </div>
  );
}
