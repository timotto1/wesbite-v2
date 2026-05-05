import type { Metadata } from "next";
import { DemoForm } from "@/components/demo/DemoForm";

export const metadata: Metadata = {
  title: "Request a demo",
  description: "30-minute demo. We'll show you the platform with your own workflows in mind.",
};

export default function DemoPage() {
  return (
    <section className="mx-auto w-full max-w-page px-section py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="text-eyebrow uppercase text-ink-muted">Request demo</p>
          <h1 className="mt-4 text-display-lg text-ink">
            See Stairpay with your own workflows.
          </h1>
          <p className="mt-6 max-w-prose text-body-lg text-ink-muted">
            30 minutes. We&rsquo;ll walk through the platform end to end —
            staircasing, resales, listings, comms — using examples that look
            like your portfolio.
          </p>
          <ul className="mt-8 space-y-4 text-body-md text-ink-muted">
            <li>
              <strong className="font-medium text-ink">No prep needed.</strong>{" "}
              We&rsquo;ll do the homework before the call.
            </li>
            <li>
              <strong className="font-medium text-ink">Your stack.</strong> Tell
              us what you use today and we&rsquo;ll show how we plug in.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Real numbers.
              </strong>{" "}
              You&rsquo;ll leave with a sense of what changes — not just what we built.
            </li>
          </ul>
        </div>
        <div>
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
