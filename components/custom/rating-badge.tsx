import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type RatingBadgeProps = {
  rating: number;
  reviewsCount?: number;
};

export function RatingBadge({ rating, reviewsCount }: RatingBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="gap-1.5 border-white/70 bg-white/85 px-3 py-1.5 text-[0.75rem] shadow-sm"
    >
      <Star className="h-3.5 w-3.5 fill-[#d89b46] text-[#d89b46]" />
      <span>{rating.toFixed(1)}</span>
      {reviewsCount ? <span className="text-muted-foreground">({reviewsCount})</span> : null}
    </Badge>
  );
}
