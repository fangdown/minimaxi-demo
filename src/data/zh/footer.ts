import type { FooterData } from "../types";

export const footer: FooterData = {
  columns: [
    {
      title: "研究",
      links: [
        { label: "文本", href: "/models/text/m27" },
        { label: "语音", href: "/models/speech/28" },
        { label: "视频", href: "/models/video/23" },
        { label: "音乐", href: "/models/music/26" },
      ],
    },
    {
      title: "产品",
      links: [
        { label: "MiniMax Agent", href: "https://agent.minimax.io", external: true },
        { label: "海螺视频", href: "https://hailuoai.video", external: true },
        { label: "MiniMax Audio", href: "https://audio.minimax.io", external: true },
        { label: "海螺视频 Agent", href: "https://hailuoai.video/agent", external: true },
        { label: "星野", href: "https://www.xingyeai.com", external: true },
      ],
    },
    {
      title: "开放平台",
      links: [
        { label: "文档中心", href: "https://platform.minimaxi.com/docs", external: true },
        { label: "Token Plan", href: "https://platform.minimaxi.com/token-plan", external: true },
        { label: "产品定价", href: "https://platform.minimaxi.com/pricing", external: true },
        { label: "平台登录", href: "https://platform.minimaxi.com", external: true },
      ],
    },
    {
      title: "关于我们",
      links: [
        { label: "公司介绍", href: "/about" },
        { label: "加入我们", href: "/careers" },
      ],
    },
    {
      title: "新闻动态",
      links: [
        { label: "全部新闻", href: "/news" },
      ],
    },
  ],
  social: [
    { label: "邮箱", icon: "mail", href: "mailto:bd@minimax.io" },
    { label: "MiniMax公众号", icon: "wechat", qrcode: "/images/qrcodes/minimax-wechat.png" },
    { label: "开平公众号", icon: "wechat2", qrcode: "/images/qrcodes/platform-wechat.png" },
    { label: "官方交流群", icon: "group", qrcode: "/images/qrcodes/group-wechat.png" },
    { label: "飞书交流群", icon: "feishu", qrcode: "/images/qrcodes/feishu-group.png" },
    { label: "GitHub", icon: "github", href: "https://github.com/MiniMax-AI" },
    { label: "HuggingFace", icon: "huggingface", href: "https://huggingface.co/MiniMaxAI" },
    { label: "Discord", icon: "discord", href: "https://discord.gg/minimax" },
  ],
  legal: [
    { label: "隐私条款", href: "/privacy" },
    { label: "用户协议", href: "/terms" },
    { label: "涉企侵权举报", href: "/report" },
  ],
  copyright: "Copyright © 2025 上海稀宇科技有限公司",
  icp: "沪ICP备2023025014号-2",
};
