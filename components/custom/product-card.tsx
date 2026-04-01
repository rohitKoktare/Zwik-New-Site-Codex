import Image from "next/image";
import Link from "next/link";

import { CTAButton } from "@/components/custom/cta-button";
import { RatingBadge } from "@/components/custom/rating-badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/4.5] overflow-hidden bg-[linear-gradient(180deg,#f4ede3_0%,#ece2d5_100%)]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <CardHeader className="space-y-3">
        <RatingBadge rating={product.rating} reviewsCount={product.reviewsCount} />
        <CardTitle>{product.name}</CardTitle>
        <p className="text-sm leading-7 text-muted-foreground">{product.description}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {product.features.slice(0, 2).map((feature) => (
          <div key={feature} className="text-sm text-foreground/80">
            {feature}
          </div>
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between gap-4">
        <Link href={`/products/${product.slug}`} className="text-sm font-medium text-foreground">
          View details
        </Link>
        <CTAButton href={product.amazonLink} external size="sm">
          Buy on Amazon
        </CTAButton>
      </CardFooter>
    </Card>
  );
}
