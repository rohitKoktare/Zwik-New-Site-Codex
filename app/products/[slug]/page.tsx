import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { CTAButton } from "@/components/custom/cta-button";
import { ProductGallery } from "@/components/custom/product-gallery";
import { RatingBadge } from "@/components/custom/rating-badge";
import { SectionWrapper } from "@/components/custom/section-wrapper";
import { VideoSection } from "@/components/custom/video-section";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/metadata";
import { getProductBySlug } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product not found",
      description: "The requested product could not be found.",
      path: `/products/${slug}`
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.images[0],
    keywords: [product.name, ...product.features]
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SectionWrapper className="pt-10 md:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <ProductGallery images={product.images} productName={product.name} />

          <div className="surface-panel sticky top-28 space-y-6 p-6 md:p-8">
            <span className="eyebrow">Product detail</span>
            <div className="space-y-4">
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">
                {product.name}
              </h1>
              <RatingBadge rating={product.rating} reviewsCount={product.reviewsCount} />
              <p className="text-base leading-8 text-textSecondary">{product.description}</p>
            </div>

            <div className="space-y-3">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm leading-7 text-foreground/85">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={product.amazonLink} external size="lg">
                Buy on Amazon
              </CTAButton>
              <CTAButton href="/products" variant="outline" size="lg">
                Back to products
              </CTAButton>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {product.video ? (
        <SectionWrapper className="pt-0">
          <VideoSection
            title={product.video.title}
            caption={product.video.caption}
            poster={product.video.poster}
            mp4Src={product.video.mp4Src}
            embedSrc={product.video.embedSrc}
            autoplay={product.video.autoplay}
          />
        </SectionWrapper>
      ) : null}
    </>
  );
}
