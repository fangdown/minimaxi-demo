import { Button } from "@/components/ui/Button";
import { getStrings } from "@/data";

const jobsData = {
  zh: [
    { id: "ml-researcher", title: "机器学习研究员", department: "研究院", location: "上海", type: "全职" },
    { id: "backend-engineer", title: "后端工程师", department: "工程团队", location: "上海", type: "全职" },
    { id: "frontend-engineer", title: "前端工程师", department: "工程团队", location: "上海", type: "全职" },
    { id: "product-manager", title: "产品经理", department: "产品团队", location: "上海 / 北京", type: "全职" },
    { id: "data-engineer", title: "数据工程师", department: "数据团队", location: "上海", type: "全职" },
    { id: "nlp-engineer", title: "NLP 算法工程师", department: "研究院", location: "上海", type: "全职" },
  ],
  en: [
    { id: "ml-researcher", title: "ML Researcher", department: "Research", location: "Shanghai", type: "Full-time" },
    { id: "backend-engineer", title: "Backend Engineer", department: "Engineering", location: "Shanghai", type: "Full-time" },
    { id: "frontend-engineer", title: "Frontend Engineer", department: "Engineering", location: "Shanghai", type: "Full-time" },
    { id: "product-manager", title: "Product Manager", department: "Product", location: "Shanghai / Beijing", type: "Full-time" },
    { id: "data-engineer", title: "Data Engineer", department: "Data", location: "Shanghai", type: "Full-time" },
    { id: "nlp-engineer", title: "NLP Algorithm Engineer", department: "Research", location: "Shanghai", type: "Full-time" },
  ],
};

const heroData = {
  zh: {
    title: "加入我们",
    subtitle: "与全球顶尖的 AI 人才一起，共同推动通用人工智能的发展",
  },
  en: {
    title: "Join Us",
    subtitle: "Work alongside world-class AI talent to advance artificial general intelligence",
  },
};

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "zh";
  const jobs = jobsData[lang];
  const hero = heroData[lang];
  const t = getStrings(locale);

  return (
    <div>
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="mx-auto max-w-[1400px] text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-heading)] mb-4">
            {hero.title}
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-2xl font-bold text-[var(--color-text-heading)] mb-8">
            {t.openPositions}
          </h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-[0_0_22px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-text-heading)] mb-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span>{job.department}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{job.location}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {t.viewDetails}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
