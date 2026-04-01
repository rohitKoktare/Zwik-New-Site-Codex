import type { Metadata } from "next";
import Image from "next/image";

import { SectionWrapper } from "@/components/custom/section-wrapper";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn about the story, design philosophy, and premium positioning behind zwik.",
  path: "/about",
  keywords: ["about brand", "premium brand story"]
});

export default function AboutPage() {
  return (
    <SectionWrapper className="pt-10 md:pt-14">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="surface-panel relative overflow-hidden p-4">
          <div className="relative min-h-[32rem] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f2e7da_0%,#e7d8c8_100%)]">
            <Image
              src="/images/products/about-scene.svg"
              alt="About the brand"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-5">
          <span className="eyebrow">About us</span>
          <h1 className="section-title font-[family-name:var(--font-display)]">
            A premium Amazon-first brand built around calm design and clear conversion.
          </h1>
          <p className="section-copy">
            We believe great products should feel emotionally resonant before they become functional. That is why every launch begins with the mood it should create in a room, a car, or a gift moment.
          </p>
          <p className="section-copy">
            Our approach is intentionally simple: refined palettes, tactile finishes, and storytelling that helps customers understand the value immediately. The result is a digital storefront that feels aspirational but never distant.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface-panel p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Mission</p>
              <p className="mt-3 text-sm leading-7 text-foreground/85">
                Turn everyday decor and gifting into a more elevated, low-friction decision.
              </p>
            </div>
            <div className="surface-panel p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Approach</p>
              <p className="mt-3 text-sm leading-7 text-foreground/85">
                Pair premium presentation with Amazon convenience for stronger trust and faster conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
