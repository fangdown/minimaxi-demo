import type { NavigationData } from "../types";

export const navigation: NavigationData = {
  logo: "/images/logo/minimax-logo.svg",
  menuItems: [
    {
      label: "模型",
      megaMenu: [
        {
          icon: "text",
          title: "文本",
          links: [
            { label: "M2.7", href: "/models/text/m27" },
            { label: "M2.5", href: "/models/text" },
            { label: "M2-Her", href: "/models/text/m2her" },
            { label: "M2.1", href: "/models/text/m21" },
            { label: "M2", href: "/models/text/m2" },
          ],
        },
        {
          icon: "speech",
          title: "语音",
          links: [
            { label: "Speech 2.8", href: "/models/speech/28" },
            { label: "Speech 2.6", href: "/models/speech/26" },
            { label: "Speech 2.5", href: "/models/speech/25" },
          ],
        },
        {
          icon: "video",
          title: "视频",
          links: [
            { label: "Hailuo 2.3", href: "/models/video/23" },
            { label: "Hailuo 2.3 Fast", href: "/models/video/23fast" },
            { label: "Hailuo 02", href: "/models/video/02" },
          ],
        },
        {
          icon: "music",
          title: "音乐",
          links: [
            { label: "Music 2.6", href: "/models/music/26" },
            { label: "Music 2.5+", href: "/models/music/25plus" },
            { label: "Music 2.5", href: "/models/music/25" },
            { label: "Music 2.0", href: "/models/music/20" },
            { label: "Music 1.5", href: "/models/music/15" },
          ],
        },
      ],
    },
    {
      label: "产品",
      dropdown: {
        label: "产品",
        description: "探索 MiniMax 的 AI 产品矩阵",
        links: [
          { label: "MiniMax Agent", href: "https://agent.minimax.io", external: true },
          { label: "海螺视频", href: "https://hailuoai.video", external: true },
          { label: "MiniMax Audio", href: "https://audio.minimax.io", external: true },
          { label: "海螺视频 Agent", href: "https://hailuoai.video/agent", external: true },
          { label: "星野", href: "https://www.xingyeai.com", external: true },
        ],
      },
    },
    {
      label: "开放平台",
      dropdown: {
        label: "开放平台",
        description: "开发者工具与资源",
        links: [
          { label: "文档中心", href: "https://platform.minimaxi.com/docs", external: true },
          { label: "Token Plan", href: "https://platform.minimaxi.com/token-plan", external: true },
          { label: "产品定价", href: "https://platform.minimaxi.com/pricing", external: true },
          { label: "平台登录", href: "https://platform.minimaxi.com", external: true },
        ],
      },
    },
    {
      label: "新闻动态",
      href: "/news",
    },
    {
      label: "关于我们",
      dropdown: {
        label: "关于我们",
        description: "了解 MiniMax",
        links: [
          { label: "公司介绍", href: "/about" },
          { label: "加入我们", href: "/careers" },
        ],
      },
    },
  ],
  loginOptions: [
    { label: "MiniMax 开放平台", href: "https://platform.minimaxi.com", external: true },
    { label: "MiniMax Agent", href: "https://agent.minimax.io", external: true },
    { label: "海螺视频", href: "https://hailuoai.video", external: true },
    { label: "星野", href: "https://www.xingyeai.com", external: true },
  ],
};
