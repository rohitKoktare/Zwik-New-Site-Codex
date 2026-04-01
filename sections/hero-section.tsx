import { Carousel } from "@/components/custom/carousel";
import { CTAButton } from "@/components/custom/cta-button";
import { RatingBadge } from "@/components/custom/rating-badge";
import { SectionWrapper } from "@/components/custom/section-wrapper";

const heroSlides = [
  {
    id: "hero-1",
    image: "/images/products/hero-product.svg",
    alt: "Romantic lifestyle arrangement for hero banner",
    eyebrow: "Lifestyle-led",
    title: "Warm product storytelling that feels gift-worthy at first glance.",
    description: "Use lifestyle photography with soft window light, skin tones, and tactile styling."
  },
  {
    id: "hero-2",
    image: "/images/products/story-scene.svg",
    alt: "Refined product styling scene",
    eyebrow: "Minimal premium",
    title: "Premium composition without visual noise.",
    description: "Keep overlays calm and legible so the CTA remains the focal point."
  },
  {
    id: "hero-3",
    image: "/images/products/about-scene.svg",
    alt: "Gift presentation environment",
    eyebrow: "Gift-first branding",
    title: "A homepage that sells mood before it asks for a click.",
    description: "Best used for romantic gifting, festive launches, and high-intent seasonal campaigns."
  },
  {
    id: "hero-4",
    image: "/images/products/lune-gift-set-1.svg",
    alt: "Premium gift set packaging in warm light",
    eyebrow: "Conversion-ready",
    title: "Clear presentation, subtle motion, and strong trust cues.",
    description: "Designed to feel elevated on mobile and calm on desktop."
  }
];

export function HeroSection() {
  return (
    <SectionWrapper className="pt-8 md:pt-12">
      <div className="section-shell grid gap-10 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-10">
        <div className="space-y-8">
          <span className="eyebrow">Made for meaningful spaces</span>
          <div className="space-y-5">
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.95] md:text-7xl">
              Objects that make gifting and everyday living feel more intentional.
            </h1>
            <p className="max-w-xl text-base leading-8 text-textSecondary md:text-lg">
              zwik blends soft minimalism with gift-ready presentation, helping customers discover products that feel calm, premium, and easy to trust.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/products" size="lg">
              Explore the collection
            </CTAButton>
            <CTAButton href="/about" variant="outline" size="lg">
              Discover the story
            </CTAButton>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <RatingBadge rating={4.8} reviewsCount={2600} />
            <div className="rounded-full border border-border bg-white/75 px-4 py-2 text-sm text-textSecondary">
              Amazon-loved products with boutique presentation
            </div>
          </div>
        </div>

        <div className="surface-panel relative overflow-hidden p-4 md:p-6">
          <div className="absolute inset-x-10 top-6 h-20 rounded-full bg-primary/50 blur-3xl" />
          <Carousel slides={heroSlides} autoPlayMs={3600} />
        </div>
      </div>
    </SectionWrapper>
  );
}
