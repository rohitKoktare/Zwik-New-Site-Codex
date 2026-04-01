"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CarouselSlide = {
  id: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

type CarouselProps = {
  slides: CarouselSlide[];
  autoPlayMs?: number;
  className?: string;
};

export function Carousel({
  slides,
  autoPlayMs = 3800,
  className,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, autoPlayMs);

    return () => window.clearInterval(interval);
  }, [autoPlayMs, slides.length]);

  const goTo = (index: number) => setActiveIndex(index);
  const goPrevious = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((current) => (current + 1) % slides.length);

  return (
    <div className={cn("relative overflow-hidden rounded-[28px]", className)}>
      <div className="relative min-h-[25rem] bg-[linear-gradient(180deg,#f3dfdf_0%,#ead7d5_100%)] md:min-h-[32rem]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                isActive
                  ? "translate-x-0 opacity-100"
                  : index < activeIndex
                    ? "-translate-x-4 opacity-0"
                    : "translate-x-4 opacity-0"
              )}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/48 via-[#1a1a1a]/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <div className="max-w-md rounded-[24px] bg-white/16 p-4 text-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.55)] backdrop-blur-md">
                  {slide.eyebrow ? (
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/80">
                      {slide.eyebrow}
                    </p>
                  ) : null}
                  {slide.title ? (
                    <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight">
                      {slide.title}
                    </p>
                  ) : null}
                  {slide.description ? (
                    <p className="mt-2 text-sm leading-7 text-white/82">
                      {slide.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex items-center justify-between px-4 md:px-5">
        <div className="pointer-events-auto flex gap-2">
          <CarouselArrow direction="left" onClick={goPrevious} />
          <CarouselArrow direction="right" onClick={goNext} />
        </div>
        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/20 px-3 py-2 backdrop-blur-md">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all",
                index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CarouselArrow({
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
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/18 text-white backdrop-blur-md transition hover:bg-white/28"
      aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
