import { Reveal } from "@/components/animation/Reveal";

export function CommsFullHero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-paper"
      style={{
        marginTop: "-56px",
        paddingTop: "56px",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-section text-center text-ink">
        <Reveal delay={900}>
          <img
            src="/logo-variation.png"
            alt="Stairpay"
            className="h-72 w-72 select-none"
          />
        </Reveal>
        <Reveal delay={1200} duration={3000} className="mt-8">
          <h1 className="text-[72px] font-semibold leading-none tracking-tight">
            Comms
          </h1>
        </Reveal>
        <Reveal delay={1500} className="mt-6">
          <p className="text-heading-md">
            Reach the right residents. Prove every message.
          </p>
        </Reveal>
        <Reveal delay={2100} className="mt-8 inline-block">
          <button
            type="button"
            className="rounded-md border border-ink px-5 py-1.5 text-body-sm font-medium text-ink transition-colors duration-300 hover:bg-ink/[0.06]"
          >
            Register your interest
          </button>
        </Reveal>
      </div>
    </section>
  );
}
