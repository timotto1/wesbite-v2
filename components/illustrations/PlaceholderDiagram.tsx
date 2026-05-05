export function PlaceholderDiagram({ label = "Annotated diagram" }: { label?: string }) {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-card border-hairline border-rule bg-paper-card">
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full">
        <text x="40" y="40" fontSize="10" letterSpacing="2" fill="#5C5C66">
          STAGE 01
        </text>
        <rect x="40" y="60" width="140" height="80" rx="10" fill="#F2F2EC" stroke="#E5E5DD" />
        <text x="100" y="280" fontSize="10" letterSpacing="2" fill="#5C5C66" textAnchor="middle">
          STAGE 02
        </text>
        <rect x="220" y="160" width="160" height="100" rx="10" fill="#F0EBF8" stroke="#26045D" />
        <text x="300" y="340" fontSize="10" letterSpacing="2" fill="#5C5C66" textAnchor="middle">
          STAGE 03
        </text>
        <rect x="420" y="240" width="140" height="80" rx="10" fill="#F2F2EC" stroke="#E5E5DD" />
        <g stroke="#5C5C66" strokeWidth="1.25" fill="none">
          <path d="M180 100 L220 200" />
          <path d="M380 220 L420 280" />
        </g>
      </svg>
      <span className="absolute bottom-3 right-4 text-eyebrow uppercase text-ink-light">
        {label}
      </span>
    </div>
  );
}
