"use client";

import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import { getMusicCards } from "@/data";

export function MusicCardScroller() {
  const locale = useLocale();
  const cards = getMusicCards(locale);
  const doubled = [...cards, ...cards];

  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 animate-infiniteScroll">
        {doubled.map((card, i) => (
          <div
            key={`${card.tag}-${i}`}
            className="flex-shrink-0 w-36 group cursor-pointer"
          >
            <div className="relative w-36 h-36 rounded-xl overflow-hidden mb-2">
              <Image
                src={card.image}
                alt={card.tag}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="144px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 2L12 7L3 12V2Z" fill="#181e25" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-[var(--color-text-heading)] truncate">
              {card.title}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">{card.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
