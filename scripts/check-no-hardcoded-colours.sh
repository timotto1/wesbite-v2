#!/usr/bin/env bash
# Per build plan §3: ban hardcoded colours and arbitrary numeric Tailwind values.
# Add tokens to tailwind.config.ts instead.

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Patterns we forbid in source.
PATTERNS=(
  'text-\[#'
  'bg-\[#'
  'border-\[#'
  'ring-\[#'
  'fill-\[#'
  'stroke-\[#'
  'shadow-\[#'
  'from-\[#'
  'via-\[#'
  'to-\[#'
)

# Files we scan: tsx/ts/jsx/js/mdx under app, components, content, lib.
INCLUDE=(
  'app'
  'components'
  'content'
  'lib'
)

failed=0
for pat in "${PATTERNS[@]}"; do
  hits=$(grep -RHn -E "$pat" "${INCLUDE[@]}" \
    --include='*.ts' --include='*.tsx' --include='*.mdx' \
    || true)
  if [ -n "$hits" ]; then
    echo "Hardcoded colour pattern '$pat' found:"
    echo "$hits"
    echo
    failed=1
  fi
done

if [ "$failed" -ne 0 ]; then
  echo "Add to design tokens in tailwind.config.ts instead."
  exit 1
fi

echo "OK: no hardcoded colours."
