import type { HeroSlide } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface FeaturePillsSlideProps {
  slide: HeroSlide;
}

export function FeaturePillsSlide({ slide }: FeaturePillsSlideProps) {
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
      <div className="flex flex-col gap-4">
        {slide.features?.map((feat) => (
          <div
            key={feat.title}
            className="group bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
          >
            <h3 className="text-base font-semibold text-[var(--color-text-heading)] mb-1">
              {feat.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {feat.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
