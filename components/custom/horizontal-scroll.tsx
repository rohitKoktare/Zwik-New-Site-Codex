"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type HorizontalScrollProps = {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  showArrows?: boolean;
};

export function HorizontalScroll({
  children,
  className,
  trackClassName,
  showArrows = true,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    const element = containerRef.current;
    if (!element) {
      return;
    }

    const offset = element.clientWidth * 0.8;
    element.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      {showArrows ? (
        <div className="hidden justify-end gap-2 md:flex">
          <ScrollArrow direction="left" onClick={() => scrollByAmount("left")} />
          <ScrollArrow direction="right" onClick={() => scrollByAmount("right")} />
        </div>
      ) : null}
      <div
        ref={containerRef}
        className={cn(
          "hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2",
          trackClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

function ScrollArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/75 text-textPrimary transition hover:bg-white"
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
