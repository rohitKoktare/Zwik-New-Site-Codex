import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { CTASection } from "@/sections/cta-section";
import { FeaturedProducts } from "@/sections/featured-products";
import { HeroSection } from "@/sections/hero-section";
import { ReviewsSection } from "@/sections/reviews-section";
import { StorySection } from "@/sections/story-section";
import { TrustStrip } from "@/sections/trust-strip";
import { UseCasesSection } from "@/sections/use-cases-section";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Discover a premium Amazon-first lifestyle brand built around storytelling, giftable products, and elegant conversion.",
  path: "/",
  keywords: ["premium homepage", "brand storytelling", "amazon-first brand"]
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedProducts />
      <StorySection />
      <ReviewsSection />
      <UseCasesSection />
      <CTASection />
    </>
  );
}
