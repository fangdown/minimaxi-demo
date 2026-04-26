"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { getModels, getStrings } from "@/data";
import { Badge } from "@/components/ui/Badge";
import { ScrollableCards } from "@/components/ui/ScrollableCards";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ModelMatrix() {
  const locale = useLocale();
  const modelList = getModels(locale);
  const t = getStrings(locale);

  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)] mb-3">
              {t.fullStackModels}
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base max-w-xl">
              {t.fullStackModelsDesc}
            </p>
          </div>
        </ScrollReveal>

        <ScrollableCards>
          {modelList.map((model) => (
            <Link
              key={model.id}
              href={`/${locale}${model.href}`}
              className="flex-shrink-0 w-[280px] group"
            >
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_0_22px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="280px"
                  />
                  {model.isNew && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge>NEW</Badge>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-[var(--color-text-heading)]">
                      {model.name}
                    </h3>
                    <span className="text-xs text-[var(--color-text-muted)] bg-gray-50 px-2 py-0.5 rounded">
                      {model.category}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3 line-clamp-2">
                    {model.description}
                  </p>
                  <div className="flex items-center text-sm text-[var(--color-accent-purple)] font-medium group-hover:gap-2 transition-all">
                    {t.learnMore}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ScrollableCards>
      </div>
    </section>
  );
}
