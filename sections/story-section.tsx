import Image from "next/image";

import { SectionWrapper } from "@/components/custom/section-wrapper";

export function StorySection() {
  return (
    <SectionWrapper>
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="surface-panel relative overflow-hidden p-4">
          <div className="relative min-h-[26rem] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f0e6d8_0%,#e6d7c7_100%)]">
            <Image
              src="/images/products/story-scene.svg"
              alt="Brand storytelling composition"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-5">
          <span className="eyebrow">The brand story</span>
          <h2 className="section-title font-[family-name:var(--font-display)]">
            We design for the quiet moment when a product instantly feels considered.
          </h2>
          <p className="section-copy">
            zwik began with a simple belief: useful products deserve the same attention to mood, material, and presentation as luxury objects. That belief now shapes every item we launch.
          </p>
          <p className="section-copy">
            Instead of clutter, we focus on tactile finishes, warm tones, and details that help every product feel worthy of display, gifting, and repeat purchase.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
