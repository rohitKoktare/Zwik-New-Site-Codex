import type { Metadata } from "next";

import { ProductCard } from "@/components/custom/product-card";
import { SectionWrapper } from "@/components/custom/section-wrapper";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description: "Explore premium lifestyle accents and giftable decor designed to convert with confidence.",
  path: "/products",
  keywords: ["premium product listing", "amazon redirect products"]
});

export default function ProductsPage() {
  return (
    <SectionWrapper className="pt-10 md:pt-14">
      <div className="mb-10 max-w-3xl space-y-4">
        <span className="eyebrow">Collection</span>
        <h1 className="section-title font-[family-name:var(--font-display)]">
          Premium products designed for gifting, display, and repeat discovery.
        </h1>
        <p className="section-copy">
          Each product pairs a calm visual identity with practical use cases and a direct path to purchase on Amazon.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
}
