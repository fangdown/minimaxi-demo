import { notFound } from "next/navigation";
import Link from "next/link";
import { getNews, getStrings } from "@/data";
import { Badge } from "@/components/ui/Badge";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const newsList = getNews(locale);
  const t = getStrings(locale);
  const article = newsList.find((n) => n.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-16 px-6 lg:px-10">
      <article className="mx-auto max-w-3xl">
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-purple)] transition-colors mb-8"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mr-1">
            <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t.backToNews}
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <Badge variant="tag">{article.tag}</Badge>
          <span className="text-sm text-[var(--color-text-muted)]">{article.date}</span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)] mb-6">
          {article.title}
        </h1>

        <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-8">
          <span className="text-6xl opacity-20">📰</span>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
            {article.content}
          </p>
        </div>
      </article>
    </div>
  );
}
