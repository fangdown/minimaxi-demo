import type { FooterData } from "../types";

export const footer: FooterData = {
  columns: [
    {
      title: "Research",
      links: [
        { label: "Text", href: "/models/text/m27" },
        { label: "Speech", href: "/models/speech/28" },
        { label: "Video", href: "/models/video/23" },
        { label: "Music", href: "/models/music/26" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "MiniMax Agent", href: "https://agent.minimax.io", external: true },
        { label: "Hailuo Video", href: "https://hailuoai.video", external: true },
        { label: "MiniMax Audio", href: "https://audio.minimax.io", external: true },
        { label: "Hailuo Video Agent", href: "https://hailuoai.video/agent", external: true },
        { label: "Talkie", href: "https://www.xingyeai.com", external: true },
      ],
    },
    {
      title: "Platform",
      links: [
        { label: "Documentation", href: "https://platform.minimaxi.com/docs", external: true },
        { label: "Token Plan", href: "https://platform.minimaxi.com/token-plan", external: true },
        { label: "Pricing", href: "https://platform.minimaxi.com/pricing", external: true },
        { label: "Sign In", href: "https://platform.minimaxi.com", external: true },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Company", href: "/about" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "News",
      links: [
        { label: "All News", href: "/news" },
      ],
    },
  ],
  social: [
    { label: "Email", icon: "mail", href: "mailto:bd@minimax.io" },
    { label: "MiniMax WeChat", icon: "wechat", qrcode: "/images/qrcodes/minimax-wechat.png" },
    { label: "Platform WeChat", icon: "wechat2", qrcode: "/images/qrcodes/platform-wechat.png" },
    { label: "Community Group", icon: "group", qrcode: "/images/qrcodes/group-wechat.png" },
    { label: "Feishu Group", icon: "feishu", qrcode: "/images/qrcodes/feishu-group.png" },
    { label: "GitHub", icon: "github", href: "https://github.com/MiniMax-AI" },
    { label: "HuggingFace", icon: "huggingface", href: "https://huggingface.co/MiniMaxAI" },
    { label: "Discord", icon: "discord", href: "https://discord.gg/minimax" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Report Infringement", href: "/report" },
  ],
  copyright: "Copyright © 2025 MiniMax Inc.",
  icp: "",
};
