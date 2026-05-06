import { Reveal } from "@/components/animation/Reveal";

type ProblemStatementProps = {
  headline?: string;
  body: string;
};

export function ProblemStatement({ headline, body }: ProblemStatementProps) {
  return (
    <section
      className="bg-white"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div className="mx-auto w-full max-w-page px-section py-32">
        <Reveal className="mx-auto max-w-3xl">
          {headline ? (
            <h3 className="text-heading-xl !font-medium text-ink md:text-display-lg">
              {headline}
            </h3>
          ) : null}
          <p
            className={`${headline ? "mt-8" : ""} max-w-prose text-body-lg text-ink-muted`}
          >
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
