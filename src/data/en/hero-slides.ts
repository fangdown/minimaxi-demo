import type { HeroSlide, AudioSample } from "../types";

export const heroSlides: HeroSlide[] = [
  {
    id: "music-26",
    tag: "NEW",
    title: "Music 2.6",
    subtitle: "A New Era of AI Music Creation",
    description:
      "Supports cover songs, instrumental generation, deeply integrated with Agent",
    ctas: [
      {
        label: "Try Now",
        href: "https://agent.minimax.io",
        variant: "primary",
      },
      { label: "Learn More", href: "/models/music/26", variant: "outline" },
    ],
    visual: "music-scroller",
    bgGradient: "from-purple-50 to-indigo-50",
    titleIcon: "/images/music/icon-title.png",
  },
  {
    id: "m27",
    tag: "NEW",
    title: "M2.7",
    subtitle: "Self-Evolving Model",
    description: "Agent Harness, advanced coding, complex Office automation",
    ctas: [
      {
        label: "API Access",
        href: "https://platform.minimaxi.com",
        variant: "primary",
      },
      { label: "Tech Report", href: "/models/text/m27", variant: "outline" },
    ],
    features: [
      { title: "Agent Harness", subtitle: "Autonomous task execution" },
      { title: "Coding", subtitle: "Code generation & debugging" },
      { title: "Office Automation", subtitle: "Complex document processing" },
    ],
    visual: "feature-pills",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: "annual-report",
    title: "2025 Annual Performance",
    subtitle: "MiniMax Annual Report",
    description: "A review of 2025 breakthroughs and business growth",
    ctas: [
      {
        label: "View Report",
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
    subtitle: "Cost-Effective Developer Packages",
    description: "Flexible token billing plans for every scale",
    ctas: [
      {
        label: "View Plans",
        href: "https://platform.minimaxi.com/token-plan",
        variant: "primary",
      },
      {
        label: "Docs",
        href: "https://platform.minimaxi.com/docs",
        variant: "outline",
      },
    ],
    features: [
      { title: "Pay-as-you-go", subtitle: "Pay only for what you use" },
      { title: "Package Deals", subtitle: "Volume discounts" },
      { title: "Enterprise", subtitle: "Custom plans" },
    ],
    visual: "feature-pills",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "hailuo-23",
    tag: "NEW",
    title: "Hailuo 2.3",
    subtitle: "AI Video Generation",
    description:
      "Higher quality, longer duration, more precise video generation",
    ctas: [
      {
        label: "Start Creating",
        href: "https://hailuoai.video",
        variant: "primary",
      },
      {
        label: "API Access",
        href: "https://platform.minimaxi.com",
        variant: "secondary",
      },
      { label: "Learn More", href: "/models/video/23", variant: "outline" },
    ],
    visual: "image",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    id: "speech-28",
    tag: "NEW",
    title: "Speech 2.8",
    subtitle: "Giving AI Voice a Human Touch",
    description:
      "Ultra-realistic speech synthesis with rich emotional expression",
    ctas: [
      {
        label: "Listen Now",
        href: "https://audio.minimax.io",
        variant: "primary",
      },
      {
        label: "API Access",
        href: "https://platform.minimaxi.com",
        variant: "secondary",
      },
      { label: "Learn More", href: "/models/speech/28", variant: "outline" },
    ],
    visual: "audio-cards",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    id: "agent",
    title: "MiniMax Agent",
    subtitle: "Your Intelligent Assistant",
    description:
      "All-in-one AI assistant powered by M2.7, supporting multimodal interaction",
    ctas: [
      {
        label: "Try Now",
        href: "https://agent.minimax.io",
        variant: "primary",
      },
      { label: "Learn More", href: "/products/agent", variant: "outline" },
    ],
    visual: "image",
    bgGradient: "from-sky-50 to-blue-50",
  },
  {
    id: "m2-her",
    title: "M2-Her",
    subtitle: "AI That Understands You",
    description: "A conversational model optimized for emotional interaction",
    ctas: [
      {
        label: "Start Chat",
        href: "https://agent.minimax.io",
        variant: "primary",
      },
      { label: "Learn More", href: "/models/text/m2her", variant: "outline" },
    ],
    visual: "image",
    bgGradient: "from-pink-50 to-rose-50",
  },
];

export const musicCards = [
  { title: "Cover Songs", tag: "Cover", image: "/images/music/cover.jpg" },
  { title: "Pop", tag: "Pop", image: "/images/music/pop.jpg" },
  { title: "Hyperpop", tag: "Hyperpop", image: "/images/music/hyperpop.jpg" },
  {
    title: "Electronic",
    tag: "Electronic",
    image: "/images/music/electronic.jpg",
  },
  { title: "Trap", tag: "Trap", image: "/images/music/trap.jpg" },
  { title: "EDM", tag: "EDM", image: "/images/music/edm.jpg" },
];

export const audioSamples: AudioSample[] = [
  {
    title: "Bedtime Whisper",
    description: "Gentle and soothing bedtime stories",
    image: "/images/audio/sleep-whisper.png",
  },
  {
    title: "Horror Story",
    description: "Thrilling suspense narration",
    image: "/images/audio/goblin-deal.png",
  },
  {
    title: "Goblin's Deal",
    description: "Fantasy role-play voice acting",
    image: "/images/audio/goblin-deal.png",
  },
];
