"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () =>
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <div className="space-y-4">
      <div className="surface-panel relative overflow-hidden p-3">
        <div className="relative min-h-[24rem] overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,#f4e4e4_0%,#ebdddd_100%)] md:min-h-[34rem]">
          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${productName} image ${activeIndex + 1}`}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1a1a]/8 to-transparent" />
          {images.length > 1 ? (
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
              <GalleryArrow direction="left" onClick={showPrevious} />
              <GalleryArrow direction="right" onClick={showNext} />
            </div>
          ) : null}
        </div>
      </div>

      {images.length > 1 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "surface-panel relative overflow-hidden p-2 text-left transition",
                index === activeIndex && "ring-2 ring-accent"
              )}
              aria-label={`View thumbnail ${index + 1}`}
            >
              <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#f4e4e4_0%,#ebdddd_100%)]">
                <Image
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function GalleryArrow({
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
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/75 text-textPrimary shadow-[0_18px_50px_-28px_rgba(0,0,0,0.2)] backdrop-blur"
      aria-label={direction === "left" ? "Previous image" : "Next image"}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
