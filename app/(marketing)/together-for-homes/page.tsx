import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/animation/Reveal";
import { CTAButton } from "@/components/primitives/CTAButton";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { HeroVideo } from "./HeroVideo";
import { PizzaVideo } from "./PizzaVideo";
import { PartnerMarquee } from "./PartnerMarquee";
import { FAQList } from "./FAQList";

export const metadata: Metadata = {
  title: "Together for Homes 2026 — In Support of Crisis",
  description:
    "The second annual charity run from Stairpay. 16 September 2026, Battersea Park. Run with us in collaboration with Crisis to raise money for homelessness in the UK.",
  openGraph: {
    title: "Together for Homes 2026",
    description:
      "Join Stairpay on 16 September 2026 in Battersea Park, in collaboration with Crisis, raising money for homelessness in the UK.",
    type: "website",
    locale: "en_GB",
    siteName: "Stairpay",
  },
};

const detailItems = [
  { icon: <CalendarIcon />, label: "When", value: "16 September 2026" },
  { icon: <PinIcon />, label: "Where", value: "Battersea Park, London" },
  { icon: <FootprintsIcon />, label: "Distance", value: "5K" },
  { icon: <HeartIcon />, label: "In Collaboration With", value: "Crisis" },
];

const recapMetrics = [
  {
    value: "500",
    label: "Runners on the start line",
    image: "/images/together-for-homes/recap-1.jpg",
  },
  {
    value: "35",
    label: "Companies represented",
    image: "/images/together-for-homes/recap-2.jpg",
  },
  {
    value: "£50,000",
    label: "Raised for Crisis",
    image: "/images/together-for-homes/recap-3.jpg",
  },
];

const newIn2026 = [
  {
    icon: <UsersIcon />,
    title: "More runners.",
    description:
      "We're opening up more places this year. 500 turned out in 2025 — we want to beat that handily and put more pounds into Crisis's hands.",
  },
  {
    icon: <PizzaIcon />,
    title: "More pizza.",
    description:
      "Last year's pizza queue went around the park. This year we're bringing a second oven so nobody has to choose between a personal best and a slice.",
  },
  {
    icon: <MusicIcon />,
    title: "More music.",
    description:
      "A live set on the start line, a DJ at the finish, and a longer post-race programme so the morning carries on properly.",
  },
];

const faqs = [
  {
    question: "Where do my ticket fees go?",
    answer:
      "Net proceeds — every pound after race-day costs — are donated to Crisis, our charity collaborator. Crisis runs year-round services helping people out of homelessness in the UK, including housing, education, and employment programmes. Last year we raised £50,000.",
  },
  {
    question: "Can my company enter a team?",
    answer:
      "Yes — and that's most of the field. Last year we had 500 runners from 35 companies on the start line. Pick the Corporate Pack and we'll handle team registration, kit, and a place in the company leaderboard.",
  },
  {
    question: "Can my organisation sponsor the run?",
    answer:
      "Yes — we have a small number of sponsorship slots for 2026. Email runs@stairpay.com for the 2026 sponsorship pack.",
  },
  {
    question: "Are tickets refundable?",
    answer:
      "Tickets are non-refundable, but you can transfer your place to another runner up to seven days before the event. If we have to cancel for any reason outside our control, your fee is rolled to the 2027 run.",
  },
  {
    question: "Who organised the 2025 run?",
    answer:
      "Stairpay started Together for Homes in 2025, in collaboration with Crisis. 500 runners from 35 companies took part and we raised £50,000.",
  },
];

const partners = [
  "Clarion",
  "SNG",
  "Settle",
  "Paradigm",
  "Midland Heart",
  "Sage Homes",
  "Places for People",
  "Southern Housing",
  "Platform",
  "Moat",
];

export default function TogetherForHomesPage() {
  return (
    <>
      <HeroVideo videoSources={["/videos/together-for-homes-hero.mp4"]} />

      {/* Run details strip */}
      <section
        className="relative w-screen"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          backgroundImage: "url('/images/cta-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(255, 255, 255, 0.6)" }}
        />
        <div className="relative mx-auto w-full max-w-page px-section">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {detailItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start gap-4 px-6 py-12 md:py-16"
              >
                <p className="text-eyebrow uppercase text-ink-muted">
                  {item.label}
                </p>
                <p className="text-[24px] font-medium leading-tight tracking-[-0.01em] text-ink md:text-[32px]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the run */}
      <section
        id="about"
        className="bg-paper py-24 md:py-32"
      >
        <div className="mx-auto w-full max-w-page px-section">
          <div className="mx-auto max-w-prose">
            <Reveal>
              <EyebrowLabel>ABOUT THE RUN</EyebrowLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 text-display-xl !font-semibold tracking-tight text-ink md:text-[64px] md:leading-[1.05]">
                A run started by the sector, for the sector.
              </h2>
            </Reveal>
            <Reveal delay={240} className="mt-8">
              <div className="space-y-5 text-body-lg font-medium text-ink-light">
                <p>
                  Together for Homes started in 2025: Stairpay, our partners,
                  and the people who build, finance, and run shared ownership
                  showed up for one morning in Battersea Park to raise money
                  for homelessness in the UK. 500 runners from 35 companies
                  turned up, and we raised £50,000 for Crisis.
                </p>
                <p>
                  The 2026 run is the second iteration, in collaboration with{" "}
                  <strong className="font-medium text-ink">Crisis</strong> —
                  the national charity for people experiencing homelessness.
                  Every pound raised goes to their year-round services helping
                  people out of homelessness, from emergency support to
                  long-term housing, education, and employment programmes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2025 Recap — case-study card grid */}
      <section className="mx-auto w-full max-w-page px-8 py-12 md:px-20 md:py-16 lg:px-28">
        <Reveal>
          <EyebrowLabel>2025 IN NUMBERS</EyebrowLabel>
          <h3 className="mt-4 text-heading-xl !font-medium text-ink md:text-display-lg">
            What we did last year.
          </h3>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {recapMetrics.map((m, i) => (
            <Reveal key={m.label} delay={160 + i * 200}>
              <div className="group relative flex aspect-[5/6] flex-col overflow-hidden rounded-card transition-all duration-300 hover:-translate-y-0.5">
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url(${m.image}), linear-gradient(135deg, #1f2538, #0f1320)`,
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85"
                />
                <div className="relative flex flex-1 flex-col p-7 text-white">
                  <span className="inline-flex items-center gap-2 text-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M3 19 L12 5 L21 19" />
                      <path d="M8 19 L12 12 L16 19" />
                    </svg>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">
                      {m.label}
                    </span>
                  </span>
                  <h3 className="flex flex-1 items-center justify-center text-center text-[52px] font-semibold leading-none tracking-tight text-white md:text-[64px]">
                    {m.value}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-prose text-center text-body-md text-ink-muted">
          Every pound raised in 2025 went directly to Crisis, funding
          year-round services that help people out of homelessness in the UK
          — from emergency support to long-term housing, education, and
          employment.
        </p>
      </section>

      {/* What's changed in 2026 */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto w-full max-w-page px-section">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
            <Reveal>
              <PizzaVideo
                src="/videos/together-for-homes-pizza-2025.mp4"
                playbackRate={2}
              />
            </Reveal>
            <div>
              <Reveal>
                <EyebrowLabel>NEW THIS YEAR</EyebrowLabel>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-4 text-heading-xl text-ink md:text-display-lg">
                  What&rsquo;s changed in 2026.
                </h2>
              </Reveal>
              <div className="mt-10 space-y-4">
                {newIn2026.map((item, i) => (
                  <Reveal key={item.title} delay={240 + i * 120}>
                    <div className="flex gap-5 rounded-card border-hairline border-rule bg-paper-card p-6">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-stairpay-soft text-stairpay">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="mb-1.5 text-heading-sm font-medium text-ink">
                          {item.title}
                        </h3>
                        <p className="text-body-sm font-light leading-relaxed text-ink-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Crisis */}
      <section id="crisis" className="bg-paper-panel py-24 md:py-32">
        <div className="mx-auto w-full max-w-page px-section">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <Reveal>
                <EyebrowLabel>WHO WE&rsquo;RE RUNNING FOR</EyebrowLabel>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-4 text-heading-xl text-ink md:text-display-lg">
                  Crisis is the reason this run exists.
                </h2>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 text-body-md text-ink-muted">
                  Crisis is the national charity for people experiencing
                  homelessness in the UK. Everything we raise on race day goes
                  to them — they are the beneficiary of Together for Homes,
                  full stop.
                </p>
              </Reveal>
            </div>
            <div className="space-y-5 text-body-md text-ink-muted">
              <Reveal>
                <p>
                  Crisis offers year-round, one-to-one support to people
                  trapped in homelessness — through their Skylight centres
                  across the UK they help with housing, mental and physical
                  health, learning, employment, and benefits.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p>
                  They also campaign for the policy changes that would end
                  homelessness for good: more genuinely affordable homes, a
                  housing benefit system that actually covers rents, and a
                  homelessness response that meets people early instead of
                  when they&rsquo;re already on the street.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  We work in housing every day. Crisis is who we run for
                  because the people they serve are the people the housing
                  system has failed. Our £50,000 in 2025 was a start. We want
                  to make 2026 considerably bigger.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="pt-3">
                  <Link
                    href="https://www.crisis.org.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-[5px] border-hairline border-ink bg-transparent px-5 py-2 text-body-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    <span>Learn more about Crisis</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3 6h6m0 0L6 3m3 3L6 9"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Register Interest */}
      <section id="tickets" className="bg-paper py-24 md:py-32">
        <div className="mx-auto w-full max-w-page px-section">
          <div className="mx-auto max-w-prose text-center">
            <Reveal>
              <EyebrowLabel>REGISTER YOUR INTEREST</EyebrowLabel>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 text-heading-xl text-ink md:text-display-lg">
                Tickets are coming.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-body-md text-ink-muted">
                Registration opens later this year. Drop us a line and
                we&rsquo;ll send you the ticket link the moment places go
                live, plus the corporate pack if you want to enter a team.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <CTAButton
                  variant="primary"
                  href="mailto:runs@stairpay.com?subject=Together%20for%20Homes%202026%20-%20Register%20Interest&body=Please%20let%20me%20know%20when%20tickets%20go%20on%20sale%20for%20Together%20for%20Homes%202026."
                  label="Register Interest"
                  arrow
                />
                <CTAButton
                  variant="secondary"
                  href="mailto:runs@stairpay.com?subject=Together%20for%20Homes%202026%20-%20Corporate%20Team"
                  label="Enter a Company Team"
                  arrow
                />
              </div>
            </Reveal>
            <p className="mt-6 text-body-sm font-light text-ink-light">
              Last year sold out before race day. We&rsquo;ll email you first.
            </p>
          </div>
        </div>
      </section>

      {/* Partner marquee */}
      <section
        className="relative w-screen py-16 md:py-20"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          backgroundImage: "url('/images/cta-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto mb-10 w-full max-w-page px-section">
          <p className="text-center text-eyebrow uppercase text-ink-muted">
            35 COMPANIES TURNED OUT IN 2025
          </p>
        </div>
        <PartnerMarquee partners={partners} />
      </section>

      {/* FAQ */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto w-full max-w-page px-section">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <Reveal>
                <EyebrowLabel>QUESTIONS</EyebrowLabel>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-4 text-heading-xl text-ink md:text-display-lg">
                  Everything you&rsquo;d want to know.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={240}>
              <FAQList items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA — pastel background, two CTAs side by side */}
      <section
        className="relative -mb-32 w-screen py-24 md:py-32"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          backgroundImage: "url('/images/cta-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto w-full max-w-page px-section">
          <div className="mx-auto max-w-prose text-center">
            <Reveal>
              <span className="text-eyebrow uppercase text-ink-muted">
                JOIN US
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 text-heading-xl text-ink md:text-display-lg">
                Run with us. Raise more for Crisis.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-body-md text-ink-muted">
                Wednesday 16 September 2026, Battersea Park. Drop us your
                details and we&rsquo;ll let you know the moment tickets are
                live.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  href="#tickets"
                  className="group inline-flex items-center gap-2 rounded-[5px] border-hairline border-ink bg-ink px-5 py-2 text-body-sm font-medium text-paper transition-colors duration-200 hover:bg-stairpay"
                >
                  <span>Register Interest</span>
                  <ArrowIcon />
                </Link>
                <Link
                  href="mailto:runs@stairpay.com?subject=Together%20for%20Homes%202026%20-%20Sponsorship"
                  className="group inline-flex items-center gap-2 rounded-[5px] border-hairline border-ink/40 bg-transparent px-5 py-2 text-body-sm font-medium text-ink transition-colors duration-200 hover:bg-white/40"
                >
                  <span>Sponsor the Run</span>
                  <ArrowIcon />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* Arrow used by the two CTA links above. */
function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M3 6h6m0 0L6 3m3 3L6 9"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Inline icons (replaces lucide-react from v1) ─── */

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FootprintsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 16v-2.38c0-.86-.07-1.72-.2-2.55l-.41-2.65a4 4 0 0 1 8.08-1.38l.5 1.83a8 8 0 0 1 .27 2.4L12 15" />
      <path d="M20 20v-2.38c0-.86.07-1.72.2-2.55l.41-2.65a4 4 0 0 0-8.08-1.38l-.5 1.83a8 8 0 0 0-.27 2.4L12 19" />
      <path d="M3 20h6" />
      <path d="M15 16h6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PizzaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 11h.01" />
      <path d="M11 15h.01" />
      <path d="M16 16h.01" />
      <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
      <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
