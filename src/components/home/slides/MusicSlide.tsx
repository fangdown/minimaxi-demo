import Image from "next/image";
import type { HeroSlide } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MusicCardScroller } from "../MusicCardScroller";

interface MusicSlideProps {
  slide: HeroSlide;
}

export function MusicSlide({ slide }: MusicSlideProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          {slide.tag && <Badge>{slide.tag}</Badge>}
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[var(--color-text-heading)]">
            <span className="text-[var(--color-accent-purple)]">MiniMax</span>
            {slide.titleIcon && (
              <Image
                src={slide.titleIcon}
                alt="Title Icon"
                width={36}
                height={36}
                className="inline mx-2 align-middle"
              />
            )}
            <span className="text-[var(--color-accent-purple)]">
              {slide.title.replace("Music ", "")}
            </span>
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
      <div className="overflow-hidden rounded-2xl">
        <MusicCardScroller />
      </div>
    </div>
  );
}
