import Link from "next/link";
import type { ComponentProps } from "react";

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      {...props}
      className="mt-12 text-heading-xl text-ink"
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 {...props} className="mt-12 text-heading-lg text-ink" />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 {...props} className="mt-10 text-heading-md text-ink" />
  ),
  p: (props: ComponentProps<"p">) => (
    <p {...props} className="mt-6 text-body-lg text-ink" />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      {...props}
      className="mt-6 space-y-3 pl-6 text-body-lg text-ink [list-style:disc] marker:text-ink-light"
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      {...props}
      className="mt-6 space-y-3 pl-6 text-body-lg text-ink [list-style:decimal] marker:text-ink-light"
    />
  ),
  li: (props: ComponentProps<"li">) => <li {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className="mt-8 border-l-2 border-stairpay pl-6 text-body-lg italic text-ink-muted"
    />
  ),
  hr: () => (
    <hr className="my-12 border-0 border-t border-hairline border-rule" />
  ),
  a: ({ href = "#", ...props }: ComponentProps<"a">) => (
    <Link
      href={href}
      className="text-stairpay underline decoration-stairpay/30 underline-offset-4 hover:decoration-stairpay"
      {...props}
    />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong {...props} className="font-medium text-ink" />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      {...props}
      className="rounded-md bg-paper-panel px-1.5 py-0.5 text-[0.95em] text-ink"
    />
  ),
};
