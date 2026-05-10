import Link from "next/link";

type CaseStudyCardProps = {
  haName: string;
  headlineResult: string;
  body?: string;
  quote?: { text: string; author: string; role: string };
  image?: string;
  logo?: string;
  href: string;
};

export function CaseStudyCard({ haName, headlineResult, image, logo, href }: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-[5/6] flex-col overflow-hidden rounded-card transition-all duration-300 hover:-translate-y-0.5"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{
          backgroundImage: image
            ? `url(${image}), linear-gradient(135deg, #1f2538, #0f1320)`
            : "linear-gradient(135deg, #1f2538, #0f1320)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85"
      />
      <div className="relative flex flex-1 flex-col p-7 text-white">
        <div className="flex items-center">
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt={haName} className="h-7 w-auto select-none" />
          ) : (
            <PlaceholderLogo name={haName} />
          )}
        </div>
        <h3 className="mt-auto max-w-[95%] text-[22px] font-semibold leading-[1.18] tracking-tight text-white md:text-[24px]">
          {headlineResult}
        </h3>
      </div>
    </Link>
  );
}

function PlaceholderLogo({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center text-white">
      <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">{name}</span>
    </span>
  );
}
