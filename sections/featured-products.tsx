import Link from "next/link";

import { ProductCard } from "@/components/custom/product-card";
import { SectionWrapper } from "@/components/custom/section-wrapper";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <SectionWrapper id="featured-products">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <span className="eyebrow">Featured picks</span>
          <h2 className="section-title font-[family-name:var(--font-display)]">
            The collection customers discover first and remember longest.
          </h2>
          <p className="section-copy">
            Thoughtful silhouettes, calm materials, and giftable positioning built to convert with less friction.
          </p>
        </div>
        <Link href="/products" className="text-sm font-medium text-foreground">
          View all products
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
}
