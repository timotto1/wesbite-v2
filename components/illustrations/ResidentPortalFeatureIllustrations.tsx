"use client";

import { PhoneFrame } from "@/components/primitives/PhoneFrame";

const BG_URL = "/images/resident/resident-portal-background.png";

function FeatureFrame({
  children,
  scale = 1,
}: {
  children: React.ReactNode;
  scale?: number;
}) {
  return (
    <div
      className="relative h-full w-full rounded-card bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_URL}')` }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Section 1 — Self-service chat ─── */

export function ResidentChatIllustration() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-card bg-cover bg-center"
      style={{ backgroundImage: `url('${BG_URL}')` }}
    >
      {/* Phone — centered, scaled to fit, nudged slightly left */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/resident/stairpay-ai-chat.png"
          alt="Stairpay AI chat on a resident's phone"
          className="block h-full w-auto max-w-full -translate-x-6 object-contain md:-translate-x-10"
        />
      </div>

      {/* Floating "Stairpay AI" insight card — bottom-right, overlapping phone */}
      <div className="absolute bottom-10 right-4 w-[64%] max-w-[360px] md:bottom-14 md:right-6">
        <StairpayAICard />
      </div>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="flex h-full flex-col bg-[#FBF9FF] text-[#26045D] [letter-spacing:-0.02em]">
      <PhoneStatusBar />
      <ChatTitleBar />

      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-3 pt-3">
        <UserQueryPill>Can I staircase to 100%?</UserQueryPill>
        <AIResponse>
          Most modern Shared Ownership leases let you staircase to 100% — but
          some older leases cap at 80%. To check yours, open the Lease section
          in your dashboard. You&rsquo;ll need a fresh valuation, mortgage
          approval for the final tranche, and a solicitor.
        </AIResponse>
        <ReactionRow />
        <SuggestedChip>How much would it cost to staircase?</SuggestedChip>
      </div>

      <ChatInput />
    </div>
  );
}

function ChatTitleBar() {
  return (
    <div className="flex items-center gap-2 px-3 pt-3 pb-2">
      <span className="flex h-[18px] w-[18px] items-center justify-center text-[#26045D]">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </span>
      <span className="flex-1 text-[11px] font-medium text-[#26045D]">
        Staircasing questions
      </span>
      <span className="text-[#26045D]">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      </span>
      <span className="text-[#26045D]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <circle cx="5" cy="12" r="1.6" />
          <circle cx="12" cy="12" r="1.6" />
          <circle cx="19" cy="12" r="1.6" />
        </svg>
      </span>
    </div>
  );
}

function UserQueryPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="rounded-[14px] bg-[#F1ECFA] px-3 py-1.5 text-[10px] font-medium text-[#26045D]">
        {children}
      </div>
    </div>
  );
}

function AIResponse({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] leading-[1.55] text-[#26045D] [letter-spacing:0]">
      {children}
    </p>
  );
}

function ReactionRow() {
  return (
    <div className="flex items-center gap-2 text-[#9994A3]">
      <ReactionIcon>
        <rect x="9" y="9" width="10" height="12" rx="1.5" />
        <path d="M5 15V5h10" />
      </ReactionIcon>
      <ReactionIcon>
        <path d="M14 9V5a2 2 0 0 0-2-2l-3 7v10h8.5a2 2 0 0 0 2-1.7l1.4-7A2 2 0 0 0 19 9z" />
        <path d="M5 12h4v9H5z" />
      </ReactionIcon>
      <ReactionIcon>
        <path d="M10 15v4a2 2 0 0 0 2 2l3-7V4H6.5a2 2 0 0 0-2 1.7l-1.4 7A2 2 0 0 0 5 15z" />
        <path d="M19 12h-4V3h4z" />
      </ReactionIcon>
    </div>
  );
}

function ReactionIcon({ children }: { children: React.ReactNode }) {
  return (
    <span>
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </span>
  );
}

function SuggestedChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-auto self-start">
      <div className="flex items-center gap-1 rounded-full border border-[#E3E2E4] bg-white px-2.5 py-1.5 text-[8.5px] font-medium text-[#26045D] shadow-[0_1px_4px_rgba(38,4,93,0.05)]">
        <SparkleIcon size={9} />
        {children}
      </div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="border-t border-[#E3E2E4] bg-white px-3 py-2">
      <div className="flex items-center gap-1.5 rounded-full border border-[#E3E2E4] bg-[#FBF9FF] px-2.5 py-1.5">
        <SparkleIcon size={10} />
        <span className="flex-1 text-[8.5px] text-[#9994A3]">Ask anything</span>
        <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#26045D] text-white">
          <svg
            width="8"
            height="8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="6 11 12 5 18 11" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function StairpayAICard() {
  return (
    <div className="relative">
      {/* Soft iridescent halo */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[22px] opacity-55 blur-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(174,120,241,0.55), rgba(229,218,251,0.30), rgba(38,4,93,0.45))",
        }}
      />

      <div className="relative overflow-hidden rounded-[16px] bg-white shadow-[0_24px_60px_-18px_rgba(38,4,93,0.40)]">
        {/* Iridescent gradient border (always-on, masked so it draws only on the edge) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[16px]"
          style={{
            padding: "1.25px",
            background:
              "linear-gradient(135deg, #E5DAFB, #AE78F1, #7114E2, #4E00CC, #26045D)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Subtle inner sheen — top-left whitening to feel a bit glassy */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[16px]"
          style={{
            background:
              "radial-gradient(120% 80% at 0% 0%, rgba(255,255,255,0.85), rgba(255,255,255,0) 55%)",
          }}
        />

        <div className="relative px-5 py-4 md:px-5 md:py-[18px]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              <GradientSparkle size={13} />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                Stairpay AI
              </span>
            </div>

            <span className="flex items-center gap-1.5 rounded-full bg-stairpay-soft px-2 py-[3px] text-[9px] font-semibold uppercase tracking-[0.10em] text-stairpay">
              <LivePulseDot />
              Live
            </span>
          </div>

          <p className="mt-3 text-[14px] font-medium leading-[1.35] tracking-[-0.012em] text-ink md:text-[15px]">
            Residents are asking about lease lengths
          </p>
        </div>
      </div>
    </div>
  );
}

function GradientSparkle({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient
          id="sp-ai-sparkle"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#AE78F1" />
          <stop offset="55%" stopColor="#7114E2" />
          <stop offset="100%" stopColor="#26045D" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 13.5 8.5 20 10 13.5 11.5 12 18 10.5 11.5 4 10 10.5 8.5z"
        fill="url(#sp-ai-sparkle)"
      />
      <path
        d="M19 16 19.6 18.4 22 19 19.6 19.6 19 22 18.4 19.6 16 19 18.4 18.4z"
        fill="url(#sp-ai-sparkle)"
      />
    </svg>
  );
}

function LivePulseDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-stairpay opacity-60" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-stairpay" />
    </span>
  );
}

function SparkleIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-stairpay"
      aria-hidden
    >
      <path d="M12 2 13.5 8.5 20 10 13.5 11.5 12 18 10.5 11.5 4 10 10.5 8.5z" />
      <path d="M19 16 19.6 18.4 22 19 19.6 19.6 19 22 18.4 19.6 16 19 18.4 18.4z" />
    </svg>
  );
}

/* ─── Section 2 — Staircase progression card ─── */

const STEPS = [
  { pct: 40, cost: null, label: "Today" },
  { pct: 60, cost: "+£42k", label: "+20%" },
  { pct: 80, cost: "+£42k", label: "+20%" },
  { pct: 100, cost: "+£42k", label: "Outright" },
];

export function ResidentProgressIllustration() {
  return (
    <FeatureFrame>
      <div className="w-[440px] rounded-card border border-rule bg-white p-6 shadow-[0_30px_60px_-25px_rgba(38,4,93,0.18)]">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] uppercase tracking-[0.08em] text-ink-muted">
            Tim&rsquo;s ownership path
          </p>
          <p className="text-[10px] text-ink-light">50a Glenloch Road</p>
        </div>

        <div className="mt-6 grid grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.pct} className="relative flex flex-col items-center">
              {i > 0 ? (
                <span
                  aria-hidden
                  className="absolute right-1/2 top-[14px] h-[1.5px] w-full bg-stairpay/25"
                />
              ) : null}
              <span
                className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-[1.5px] text-[10px] font-semibold ${
                  i === 0
                    ? "border-stairpay bg-stairpay text-paper"
                    : "border-stairpay/30 bg-white text-stairpay"
                }`}
              >
                {s.pct}
              </span>
              <p className="mt-2 text-[11px] font-medium text-ink">{s.pct}%</p>
              <p className="mt-0.5 text-[9px] text-ink-muted">{s.label}</p>
              {s.cost ? (
                <p className="mt-2 text-[10px] font-medium text-stairpay">{s.cost}</p>
              ) : (
                <p className="mt-2 text-[10px] font-medium text-ink-light">Owned</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-rule pt-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.08em] text-ink-light">
              Affordability
            </p>
            <p className="mt-0.5 text-[12px] font-medium text-ink">
              Approved up to 60% today
            </p>
          </div>
          <span className="rounded-full bg-stairpay/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.06em] text-stairpay">
            Ready
          </span>
        </div>
      </div>
    </FeatureFrame>
  );
}

/* ─── Section 3 — Instruction submitted phone ─── */

export function ResidentInstructionIllustration() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-card bg-white">
      {/* Pink → purple gradient panel on the left */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[45%] bg-cover bg-center"
        style={{ backgroundImage: `url('${BG_URL}')` }}
      />

      {/* Staircasing email — anchored to the right; left edge runs behind the phone */}
      <div className="absolute inset-y-0 right-0 flex w-[62%] items-center justify-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/resident/staircasing-email.png"
          alt=""
          aria-hidden
          className="block h-full w-auto max-w-none object-contain object-right"
        />
      </div>

      {/* Phone — sits on top, centred over the gradient, overlapping the email */}
      <div className="absolute inset-y-0 left-0 flex w-[55%] items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/resident/iphone-submitted.png"
          alt="Resale instruction submitted on a resident's phone"
          className="block h-[92%] w-auto translate-x-[8%] object-contain drop-shadow-[0_25px_45px_rgba(38,4,93,0.35)]"
        />
      </div>
    </div>
  );
}

/* ─── Section 4 — Clean resident record ─── */

export function ResidentRecordIllustration() {
  return (
    <FeatureFrame>
      <div className="overflow-hidden rounded-card border border-rule bg-white shadow-[0_30px_60px_-25px_rgba(38,4,93,0.18)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/resident/clean-record.png"
          alt="Resident record"
          className="block w-[480px]"
        />
      </div>
    </FeatureFrame>
  );
}

/* ─── Shared phone status bar ─── */

function PhoneStatusBar() {
  return (
    <div className="flex h-[26px] items-center justify-between bg-[#1F0B56] px-4 text-[8px] font-semibold text-white">
      <span>9:09</span>
      <span className="flex items-center gap-1">
        <svg width="11" height="7" viewBox="0 0 17 11" fill="none" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="0.5" fill="#fff" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="#fff" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" fill="#fff" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="#fff" />
        </svg>
        <svg width="16" height="7" viewBox="0 0 26 12" aria-hidden>
          <rect
            x="0.5"
            y="0.5"
            width="22"
            height="11"
            rx="2.5"
            fill="none"
            stroke="#fff"
            strokeOpacity="0.6"
          />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill="#fff" />
          <rect
            x="23.5"
            y="4"
            width="1.5"
            height="4"
            rx="0.6"
            fill="#fff"
            fillOpacity="0.6"
          />
        </svg>
      </span>
    </div>
  );
}
