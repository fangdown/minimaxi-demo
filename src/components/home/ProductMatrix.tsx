"use client";

import Image from "next/image";
import { useLocale } from "@/hooks/useLocale";
import { getProducts, getStrings } from "@/data";
import { ScrollableCards } from "@/components/ui/ScrollableCards";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProductMatrix() {
  const locale = useLocale();
  const productList = getProducts(locale);
  const t = getStrings(locale);

  return (
    <section className="py-20 px-6 lg:px-10 bg-gray-50/50">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)] mb-3">
              {t.aiProducts}
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base max-w-xl">
              {t.aiProductsDesc}
            </p>
          </div>
        </ScrollReveal>

        <ScrollableCards>
          {productList.map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[260px] group"
            >
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_0_22px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="260px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center text-sm text-[var(--color-accent-purple)] font-medium">
                    {t.tryNow}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </ScrollableCards>
      </div>
    </section>
  );
}
