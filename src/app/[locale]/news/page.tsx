import { NewsGrid } from "@/components/news/NewsGrid";

const pageData = {
  zh: { title: "新闻动态", subtitle: "了解 MiniMax 的最新动态和技术进展" },
  en: { title: "News", subtitle: "Stay up to date with MiniMax's latest developments and breakthroughs" },
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "zh";
  const d = pageData[lang];

  return (
    <div>
      <section className="py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)] mb-3">
              {d.title}
            </h1>
            <p className="text-[var(--color-text-secondary)] text-base">
              {d.subtitle}
            </p>
          </div>
          <NewsGrid />
        </div>
      </section>
    </div>
  );
}
