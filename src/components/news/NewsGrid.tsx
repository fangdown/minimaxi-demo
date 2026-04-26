"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { getNews, getStrings } from "@/data";
import { Badge } from "@/components/ui/Badge";

const PAGE_SIZE = 4;

export function NewsGrid() {
  const locale = useLocale();
  const newsList = getNews(locale);
  const t = getStrings(locale);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleNews = newsList.slice(0, visibleCount);
  const hasMore = visibleCount < newsList.length;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleNews.map((item) => (
          <Link
            key={item.slug}
            href={`/${locale}/news/${item.slug}`}
            className="group"
          >
            <article className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_0_22px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <span className="text-5xl opacity-20">📰</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="tag">{item.tag}</Badge>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[var(--color-text-heading)] mb-2 line-clamp-2 group-hover:text-[var(--color-accent-purple)] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-sm text-[var(--color-accent-purple)] font-medium">
                  {t.readMore}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="px-8 py-2.5 text-sm font-medium border border-gray-200 rounded-[var(--radius-pill)] text-[var(--color-text-primary)] hover:bg-gray-50 transition-colors"
          >
            {t.loadMore}
          </button>
        </div>
      )}
    </div>
  );
}
