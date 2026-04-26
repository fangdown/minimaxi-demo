import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getStrings } from "@/data";

const m27Data = {
  zh: {
    category: "文本模型",
    subtitle: "模型自我进化，Agent Harness 能力全面升级",
    description: "M2.7 是 MiniMax 最新一代文本大模型，在 Agent 能力、代码生成和 Office 自动化方面实现重大突破。基于万亿参数 MoE 架构，M2.7 具备强大的推理能力和任务执行能力。",
    apiBtn: "API 接入",
    docsBtn: "技术文档",
    capabilities: [
      { icon: "🤖", title: "Agent Harness", desc: "自主规划和执行复杂任务，支持多步骤推理和工具调用" },
      { icon: "💻", title: "强 Coding 能力", desc: "多语言代码生成与调试，在主流编程基准测试中达到业界领先" },
      { icon: "📊", title: "Office 自动化", desc: "处理复杂文档编辑、数据分析和报告生成任务" },
    ],
    specs: [
      ["模型架构", "MoE (Mixture of Experts)"],
      ["参数规模", "万亿级"],
      ["上下文窗口", "128K tokens"],
      ["支持语言", "中文、英文及多种语言"],
      ["输出格式", "文本、代码、JSON、Markdown"],
      ["API 协议", "兼容 OpenAI API 格式"],
    ],
  },
  en: {
    category: "Text Model",
    subtitle: "Self-evolving model with enhanced Agent Harness capabilities",
    description: "M2.7 is MiniMax's latest-generation text model, achieving major breakthroughs in Agent capabilities, code generation, and Office automation. Built on a trillion-parameter MoE architecture, M2.7 delivers powerful reasoning and task execution.",
    apiBtn: "API Access",
    docsBtn: "Documentation",
    capabilities: [
      { icon: "🤖", title: "Agent Harness", desc: "Autonomous planning and execution of complex tasks with multi-step reasoning and tool calling" },
      { icon: "💻", title: "Advanced Coding", desc: "Multi-language code generation and debugging, achieving industry-leading benchmarks" },
      { icon: "📊", title: "Office Automation", desc: "Complex document editing, data analysis, and report generation" },
    ],
    specs: [
      ["Architecture", "MoE (Mixture of Experts)"],
      ["Parameters", "Trillion-scale"],
      ["Context Window", "128K tokens"],
      ["Languages", "Chinese, English, and more"],
      ["Output Formats", "Text, Code, JSON, Markdown"],
      ["API Protocol", "OpenAI API compatible"],
    ],
  },
};

export default async function M27Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "zh";
  const d = m27Data[lang];
  const t = getStrings(locale);

  return (
    <div>
      <section className="relative py-20 px-6 lg:px-10 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Badge>NEW</Badge>
              <span className="text-sm text-[var(--color-text-muted)]">{d.category}</span>
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-[var(--color-text-heading)] mb-4">
              M2.7
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] mb-6">
              {d.subtitle}
            </p>
            <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-8">
              {d.description}
            </p>
            <div className="flex items-center gap-3">
              <Button href="https://platform.minimaxi.com" external>
                {d.apiBtn}
              </Button>
              <Button variant="outline" href="https://platform.minimaxi.com/docs" external>
                {d.docsBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold text-[var(--color-text-heading)] mb-10">
            {t.coreCaps}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_0_22px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--color-text-heading)] mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-gray-50/50">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold text-[var(--color-text-heading)] mb-10">
            {t.techSpecs}
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {d.specs.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="px-6 py-4 font-medium text-[var(--color-text-heading)] w-1/3">
                      {label}
                    </td>
                    <td className="px-6 py-4 text-[var(--color-text-secondary)]">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
