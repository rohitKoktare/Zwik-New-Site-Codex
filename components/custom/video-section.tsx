"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

type VideoSectionProps = {
  title: string;
  caption: string;
  poster: string;
  mp4Src?: string;
  embedSrc?: string;
  autoplay?: boolean;
  className?: string;
};

export function VideoSection({
  title,
  caption,
  poster,
  mp4Src,
  embedSrc,
  autoplay = false,
  className,
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const hasVideo = Boolean(mp4Src || embedSrc);

  return (
    <div className={cn("surface-panel overflow-hidden p-4 md:p-5", className)}>
      <div className="mb-5 space-y-2">
        <p className="eyebrow">Product video</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight md:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-8 text-textSecondary">{caption}</p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f3dfdf_0%,#ead7d5_100%)] shadow-surface">
        {embedSrc && isPlaying ? (
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : mp4Src && isPlaying ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={mp4Src}
            poster={poster}
            controls
            muted
            playsInline
            autoPlay={autoplay}
            preload="metadata"
          />
        ) : (
          <>
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 via-[#1a1a1a]/10 to-transparent" />
            <button
              type="button"
              onClick={() => hasVideo && setIsPlaying(true)}
              className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-white/20 text-white backdrop-blur-md transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-90"
              disabled={!hasVideo}
              aria-label={hasVideo ? "Play product video" : "Video placeholder"}
            >
              <Play className="ml-1 h-6 w-6 fill-current" />
            </button>
            {!hasVideo ? (
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] bg-white/85 p-4 text-sm leading-7 text-textSecondary shadow-surface">
                Add an optimized MP4 in <code>/public/videos</code> or an embed URL in product data to activate playback.
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
