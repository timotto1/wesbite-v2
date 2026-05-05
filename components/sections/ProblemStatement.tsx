import { Reveal } from "@/components/animation/Reveal";

type ProblemStatementProps = {
  headline: string;
  body: string;
};

export function ProblemStatement({ headline, body }: ProblemStatementProps) {
  return (
    <section className="mx-auto w-full max-w-page px-section py-32">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-heading-xl text-ink md:text-display-lg">
          {headline}
        </h2>
        <p className="mt-8 max-w-prose text-body-lg text-ink-muted">{body}</p>
      </Reveal>
    </section>
  );
}
