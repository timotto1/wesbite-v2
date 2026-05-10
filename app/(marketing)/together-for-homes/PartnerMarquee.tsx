interface PartnerMarqueeProps {
  partners: string[];
}

export function PartnerMarquee({ partners }: PartnerMarqueeProps) {
  const loop = [...partners, ...partners];

  return (
    <div className="marquee relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{
          background:
            "linear-gradient(to left, rgba(255,255,255,0.95), rgba(255,255,255,0))",
        }}
      />

      <div
        className="marquee-track flex gap-12 whitespace-nowrap md:gap-16"
        style={{ animationDuration: "45s" }}
      >
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 text-[clamp(28px,4vw,56px)] font-medium tracking-[-1.5px] text-ink"
          >
            {name}
            <span className="ml-12 select-none text-ink-muted md:ml-16">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
