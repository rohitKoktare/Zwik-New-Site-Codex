import { Star } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ReviewCardProps = {
  review: {
    id: string;
    name: string;
    title: string;
    quote: string;
    rating: number;
  };
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full bg-white/72">
      <CardHeader className="space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star key={`${review.id}-${index}`} className="h-4 w-4 fill-[#d89b46] text-[#d89b46]" />
          ))}
        </div>
        <CardTitle className="text-lg">{review.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-7 text-muted-foreground">{review.quote}</p>
        <p className="text-sm font-medium text-foreground">{review.name}</p>
      </CardContent>
    </Card>
  );
}
