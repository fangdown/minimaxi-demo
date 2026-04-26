import Link from "next/link";
import { getModels, getStrings } from "@/data";
import { Badge } from "@/components/ui/Badge";

export default async function ModelsTextPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getStrings(locale);
  const allModels = getModels(locale);
  const textModels = allModels.filter(
    (m) => m.category === "文本" || m.category === "Text"
  );

  return (
    <div className="py-16 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-heading)] mb-3">
            {t.textModels}
          </h1>
          <p className="text-[var(--color-text-secondary)] text-base">
            {t.textModelsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {textModels.map((model) => (
            <Link
              key={model.id}
              href={`/${locale}${model.href}`}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_0_22px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-40 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <span className="text-5xl opacity-20">📝</span>
                  {model.isNew && (
                    <div className="absolute top-3 left-3">
                      <Badge>NEW</Badge>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-text-heading)] mb-2">
                    {model.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    {model.description}
                  </p>
                  <div className="flex items-center text-sm text-[var(--color-accent-purple)] font-medium">
                    {t.learnMore}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
