import { ReviewCard } from "@/components/custom/review-card";
import { SectionWrapper } from "@/components/custom/section-wrapper";
import { reviews } from "@/data/products";

export function ReviewsSection() {
  return (
    <SectionWrapper>
      <div className="mb-10 space-y-4">
        <span className="eyebrow">What customers say</span>
        <h2 className="section-title font-[family-name:var(--font-display)]">
          Reviews that reinforce trust before the click to Amazon.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </SectionWrapper>
  );
}
