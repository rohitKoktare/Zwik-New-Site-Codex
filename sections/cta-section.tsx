import { CTAButton } from "@/components/custom/cta-button";
import { SectionWrapper } from "@/components/custom/section-wrapper";

export function CTASection() {
  return (
    <SectionWrapper>
      <div className="surface-panel overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <span className="eyebrow">Ready to shop</span>
            <h2 className="section-title font-[family-name:var(--font-display)]">
              Explore the full collection and choose the piece that fits your space.
            </h2>
            <p className="section-copy">
              Every product page is designed to guide interest, reduce friction, and move customers confidently to Amazon.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <CTAButton href="/products" size="lg">
              Browse products
            </CTAButton>
            <CTAButton href="https://www.amazon.in/" external variant="outline" size="lg">
              Visit Amazon
            </CTAButton>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
