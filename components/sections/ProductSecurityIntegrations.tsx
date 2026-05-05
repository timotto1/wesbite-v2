import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";

export function ProductSecurityIntegrations() {
  return (
    <section className="mx-auto w-full max-w-page px-section py-16">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border-hairline border-rule bg-rule md:grid-cols-2">
        <Reveal>
          <Link
            href="/#security"
            className="group flex h-full flex-col bg-paper-card p-8 transition-colors duration-200 hover:bg-paper-panel"
          >
            <p className="text-eyebrow uppercase text-ink-muted">Security</p>
            <p className="mt-4 text-heading-md text-ink transition-colors duration-200 group-hover:text-stairpay">
              ISO 27001, UK data residency, audit trails on every change.
            </p>
            <span className="mt-auto pt-4 text-body-sm text-stairpay transition-transform duration-200 group-hover:translate-x-0.5">
              How we handle your data →
            </span>
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <Link
            href="/#integrations"
            className="group flex h-full flex-col bg-paper-card p-8 transition-colors duration-200 hover:bg-paper-panel"
          >
            <p className="text-eyebrow uppercase text-ink-muted">Integrations</p>
            <p className="mt-4 text-heading-md text-ink transition-colors duration-200 group-hover:text-stairpay">
              Plays well with MRI, Civica, Xero, Sage, DocuSign, Entra, and the rest.
            </p>
            <span className="mt-auto pt-4 text-body-sm text-stairpay transition-transform duration-200 group-hover:translate-x-0.5">
              See the full integration list →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
