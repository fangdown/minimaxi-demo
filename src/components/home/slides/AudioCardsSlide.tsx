import Image from "next/image";
import type { HeroSlide } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useLocale } from "@/hooks/useLocale";
import { getAudioSamples } from "@/data";

interface AudioCardsSlideProps {
  slide: HeroSlide;
}

export function AudioCardsSlide({ slide }: AudioCardsSlideProps) {
  const locale = useLocale();
  const samples = getAudioSamples(locale);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          {slide.tag && <Badge>{slide.tag}</Badge>}
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[var(--color-text-heading)]">
            {slide.title}
          </h2>
        </div>
        {slide.subtitle && (
          <p className="text-xl text-[var(--color-text-heading)] font-medium">
            {slide.subtitle}
          </p>
        )}
        {slide.description && (
          <p className="text-[var(--color-text-secondary)] text-base max-w-md">
            {slide.description}
          </p>
        )}
        <div className="flex items-center gap-3 pt-2">
          {slide.ctas.map((cta) => (
            <Button
              key={cta.label}
              variant={cta.variant}
              href={cta.href}
              external={cta.href.startsWith("http")}
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {samples.map((sample) => (
          <div
            key={sample.title}
            className="group flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-violet-100 to-purple-100">
              <Image
                src={sample.image}
                alt={sample.title}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-[var(--color-text-heading)]">
                {sample.title}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)]">
                {sample.description}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-[var(--color-accent-purple)] flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 2L10 6L3 10V2Z" fill="white" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
