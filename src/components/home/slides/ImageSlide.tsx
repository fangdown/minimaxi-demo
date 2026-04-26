import type { HeroSlide } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ImageSlideProps {
  slide: HeroSlide;
}

export function ImageSlide({ slide }: ImageSlideProps) {
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
            <Button key={cta.label} variant={cta.variant} href={cta.href} external={cta.href.startsWith("http")}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
          <span className="text-6xl opacity-30">
            {slide.id === "annual-report" ? "📊" : slide.id === "agent" ? "🤖" : slide.id === "m2-her" ? "💜" : "🎬"}
          </span>
        </div>
      </div>
    </div>
  );
}
