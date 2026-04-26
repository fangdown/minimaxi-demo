"use client";

import { useEffect, useState } from "react";
import { useIntersection } from "./useIntersection";

export function useAnimatedCounter(
  end: number,
  duration = 2000
): [React.RefObject<HTMLDivElement | null>, number] {
  const [ref, isVisible] = useIntersection(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, end, duration]);

  return [ref, count];
}
