"use client";

import { useLocale } from "@/hooks/useLocale";
import { getCompany } from "@/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CompanyIntro() {
  const locale = useLocale();
  const comp = getCompany(locale);

  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)]">
              {comp.title}
            </h2>
            {comp.descriptions.map((p, i) => (
              <p key={i} className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-6">
          {comp.stats.map((stat) => (
            <AnimatedCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
