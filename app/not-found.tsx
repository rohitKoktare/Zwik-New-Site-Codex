import Link from "next/link";

import { CTAButton } from "@/components/custom/cta-button";
import { SectionWrapper } from "@/components/custom/section-wrapper";

export default function NotFound() {
  return (
    <SectionWrapper className="pt-12 md:pt-16">
      <div className="surface-panel mx-auto max-w-3xl px-6 py-10 text-center md:px-10 md:py-14">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
          This page drifted out of the collection.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
          The page you were looking for is not here right now, but the core brand experience is still ready to explore.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton href="/products" size="lg">
            Browse products
          </CTAButton>
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white/70 px-7 text-sm font-medium text-foreground transition hover:bg-white"
          >
            Return home
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
