"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import type { CompanyStat } from "@/data/types";

interface AnimatedCounterProps {
  stat: CompanyStat;
}

export function AnimatedCounter({ stat }: AnimatedCounterProps) {
  const numericValue = parseFloat(stat.value.replace(/,/g, ""));
  const [ref, count] = useAnimatedCounter(numericValue, 2000);
  const isDecimal = stat.value.includes(".");
  const hasComma = stat.value.includes(",");

  const formatCount = (n: number) => {
    if (isDecimal) return n.toFixed(2);
    if (hasComma) return n.toLocaleString();
    return n.toString();
  };

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)] mb-1">
        <span className="font-heading tabular-nums">{formatCount(count)}</span>
        <span className="text-[var(--color-accent-purple)]">{stat.suffix}</span>
      </div>
      <p className="text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
    </div>
  );
}
