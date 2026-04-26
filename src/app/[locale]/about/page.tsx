import { getAbout, getStrings } from "@/data";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const about = getAbout(locale);
  const t = getStrings(locale);

  return (
    <div>
      <section className="relative h-[400px] bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-heading)]">
            {about.heroTitle}
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)]">
            {about.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-6">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-[var(--color-text-secondary)] text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gray-50/50">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold text-[var(--color-text-heading)] text-center mb-12">
            {t.ourValues}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_0_22px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
