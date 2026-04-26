"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/hooks/useLocale";
import { getHeroSlides } from "@/data";
import { MusicSlide } from "./slides/MusicSlide";
import { FeaturePillsSlide } from "./slides/FeaturePillsSlide";
import { ImageSlide } from "./slides/ImageSlide";
import { AudioCardsSlide } from "./slides/AudioCardsSlide";

export function HeroCarousel() {
  const locale = useLocale();
  const slides = getHeroSlides(locale);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStart = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo, slides.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo, slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden h-[480px] sm:h-[560px] lg:h-[630px]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-all duration-700",
          slide.bgGradient
        )}
      />

      <div className="relative h-full mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center">
        <div key={slide.id} className="w-full animate-slideUp">
          {slide.visual === "music-scroller" && <MusicSlide slide={slide} />}
          {slide.visual === "feature-pills" && <FeaturePillsSlide slide={slide} />}
          {slide.visual === "image" && <ImageSlide slide={slide} />}
          {slide.visual === "audio-cards" && <AudioCardsSlide slide={slide} />}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
        aria-label="Previous"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L6 8L10 12" stroke="#181e25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
        aria-label="Next"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="#181e25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current ? "w-8 bg-[var(--color-cta-dark)]" : "w-1.5 bg-black/20 hover:bg-black/40"
            )}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
