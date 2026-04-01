import { CarFront, Gift, LampDesk } from "lucide-react";

import { SectionWrapper } from "@/components/custom/section-wrapper";
import { useCases } from "@/data/products";

const icons = [Gift, CarFront, LampDesk];

export function UseCasesSection() {
  return (
    <SectionWrapper>
      <div className="mb-10 space-y-4">
        <span className="eyebrow">Use cases</span>
        <h2 className="section-title font-[family-name:var(--font-display)]">
          Built for gifting, car interiors, and everyday styling moments.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {useCases.map((item, index) => {
          const Icon = icons[index];
          return (
            <div key={item.title} className="surface-panel p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5ede3]">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
