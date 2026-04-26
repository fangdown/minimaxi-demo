import type { HeroSlide, AudioSample } from "../types";

export const heroSlides: HeroSlide[] = [
  {
    id: "music-26",
    tag: "NEW",
    title: "Music 2.6",
    subtitle: "AI 音乐创作新纪元",
    description: "支持 Cover 翻唱、器乐生成，与 Agent 深度集成",
    ctas: [
      {
        label: "立即体验",
        href: "https://agent.minimax.io",
        variant: "primary",
      },
      { label: "了解更多", href: "/models/music/26", variant: "outline" },
    ],
    visual: "music-scroller",
    bgGradient: "from-purple-50 to-indigo-50",
    titleIcon: "/images/music/icon-title.png",
  },
  {
    id: "m27",
    tag: "NEW",
    title: "M2.7",
    subtitle: "模型自我进化",
    description: "Agent Harness 能力、强 Coding 能力、复杂 Office 自动化",
    ctas: [
      {
        label: "API 接入",
        href: "https://platform.minimaxi.com",
        variant: "primary",
      },
      { label: "技术报告", href: "/models/text/m27", variant: "outline" },
    ],
    features: [
      { title: "Agent Harness", subtitle: "自主任务执行" },
      { title: "Coding", subtitle: "代码生成与调试" },
      { title: "Office 自动化", subtitle: "复杂文档处理" },
    ],
    visual: "feature-pills",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: "annual-report",
    title: "2025 年全年业绩",
    subtitle: "MiniMax 年度报告",
    description: "回顾 2025 年的技术突破与业务增长",
    ctas: [
      {
        label: "查看报告",
        href: "/news/annual-report-2025",
        variant: "primary",
      },
    ],
    visual: "image",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    id: "token-plan",
    title: "Token Plan",
    subtitle: "开发者超高性价比套餐",
    description: "灵活的 Token 计费方案，满足不同规模需求",
    ctas: [
      {
        label: "查看方案",
        href: "https://platform.minimaxi.com/token-plan",
        variant: "primary",
      },
      {
        label: "文档中心",
        href: "https://platform.minimaxi.com/docs",
        variant: "outline",
      },
    ],
    features: [
      { title: "按量计费", subtitle: "用多少付多少" },
      { title: "套餐优惠", subtitle: "批量折扣" },
      { title: "企业定制", subtitle: "专属方案" },
    ],
    visual: "feature-pills",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "hailuo-23",
    tag: "NEW",
    title: "Hailuo 2.3",
    subtitle: "AI 视频生成",
    description: "更高质量、更长时长、更精准的视频生成能力",
    ctas: [
      { label: "开始创作", href: "https://hailuoai.video", variant: "primary" },
      {
        label: "API 接入",
        href: "https://platform.minimaxi.com",
        variant: "secondary",
      },
      { label: "了解更多", href: "/models/video/23", variant: "outline" },
    ],
    visual: "image",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    id: "speech-28",
    tag: "NEW",
    title: "Speech 2.8",
    subtitle: "赋予 AI 语音人的温度",
    description: "超拟人语音合成，支持多种情感表达",
    ctas: [
      {
        label: "在线试听",
        href: "https://audio.minimax.io",
        variant: "primary",
      },
      {
        label: "API 接入",
        href: "https://platform.minimaxi.com",
        variant: "secondary",
      },
      { label: "了解更多", href: "/models/speech/28", variant: "outline" },
    ],
    visual: "audio-cards",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    id: "agent",
    title: "MiniMax Agent",
    subtitle: "你的智能助手",
    description: "基于 M2.7 的全能 AI 助手，支持多模态交互",
    ctas: [
      {
        label: "立即使用",
        href: "https://agent.minimax.io",
        variant: "primary",
      },
      { label: "了解更多", href: "/products/agent", variant: "outline" },
    ],
    visual: "image",
    bgGradient: "from-sky-50 to-blue-50",
  },
  {
    id: "m2-her",
    title: "M2-Her",
    subtitle: "更懂你的 AI",
    description: "专为情感交互优化的对话模型",
    ctas: [
      {
        label: "开始对话",
        href: "https://agent.minimax.io",
        variant: "primary",
      },
      { label: "了解更多", href: "/models/text/m2her", variant: "outline" },
    ],
    visual: "image",
    bgGradient: "from-pink-50 to-rose-50",
  },
];

export const musicCards = [
  { title: "Cover 翻唱", tag: "Cover", image: "/images/music/cover.jpg" },
  { title: "流行", tag: "Pop", image: "/images/music/pop.jpg" },
  { title: "超流行", tag: "Hyperpop", image: "/images/music/hyperpop.jpg" },
  { title: "电子", tag: "Electronic", image: "/images/music/electronic.jpg" },
  { title: "Trap", tag: "Trap", image: "/images/music/trap.jpg" },
  { title: "EDM", tag: "EDM", image: "/images/music/edm.jpg" },
];

export const audioSamples: AudioSample[] = [
  {
    title: "睡前低语",
    description: "温柔舒缓的睡前故事",
    image: "/images/audio/sleep-whisper.png",
  },
  {
    title: "恐怖故事",
    description: "紧张刺激的悬疑叙述",
    image: "/images/audio/goblin-deal.png",
  },
  {
    title: "哥布林的交易",
    description: "奇幻角色扮演配音",
    image: "/images/audio/goblin-deal.png",
  },
];
