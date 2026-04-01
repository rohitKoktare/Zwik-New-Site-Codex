import { Gift, Leaf, ShieldCheck, Star } from "lucide-react";

import { HorizontalScroll } from "@/components/custom/horizontal-scroll";
import { SectionWrapper } from "@/components/custom/section-wrapper";

const items = [
  { icon: Star, title: "4.8 average rating", copy: "Social proof that builds purchase confidence fast." },
  { icon: Gift, title: "Gift-ready presentation", copy: "Unboxing designed to feel polished and personal." },
  { icon: Leaf, title: "Soft, minimal aesthetic", copy: "A visual language that feels calm and premium." },
  { icon: ShieldCheck, title: "Amazon convenience", copy: "Fast, familiar checkout with trusted delivery." },
];

export function TrustStrip() {
  return (
    <SectionWrapper className="py-6 md:py-8">
      <div className="surface-panel p-5 md:p-6">
        <HorizontalScroll>
          {items.map((item) => (
          <div
            key={item.title}
            className="min-w-[18rem] snap-start rounded-[24px] border border-border bg-white/85 p-5 shadow-[0_18px_50px_-34px_rgba(117,95,95,0.2)] md:min-w-[19rem]"
          >
            <item.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-textSecondary">{item.copy}</p>
          </div>
          ))}
        </HorizontalScroll>
      </div>
    </SectionWrapper>
  );
}
