import type { NavigationData } from "../types";

export const navigation: NavigationData = {
  logo: "/images/logo/minimax-logo.svg",
  menuItems: [
    {
      label: "Models",
      megaMenu: [
        {
          icon: "text",
          title: "Text",
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
          title: "Speech",
          links: [
            { label: "Speech 2.8", href: "/models/speech/28" },
            { label: "Speech 2.6", href: "/models/speech/26" },
            { label: "Speech 2.5", href: "/models/speech/25" },
          ],
        },
        {
          icon: "video",
          title: "Video",
          links: [
            { label: "Hailuo 2.3", href: "/models/video/23" },
            { label: "Hailuo 2.3 Fast", href: "/models/video/23fast" },
            { label: "Hailuo 02", href: "/models/video/02" },
          ],
        },
        {
          icon: "music",
          title: "Music",
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
      label: "Products",
      dropdown: {
        label: "Products",
        description: "Explore MiniMax AI product suite",
        links: [
          { label: "MiniMax Agent", href: "https://agent.minimax.io", external: true },
          { label: "Hailuo Video", href: "https://hailuoai.video", external: true },
          { label: "MiniMax Audio", href: "https://audio.minimax.io", external: true },
          { label: "Hailuo Video Agent", href: "https://hailuoai.video/agent", external: true },
          { label: "Talkie", href: "https://www.xingyeai.com", external: true },
        ],
      },
    },
    {
      label: "Platform",
      dropdown: {
        label: "Platform",
        description: "Developer tools & resources",
        links: [
          { label: "Documentation", href: "https://platform.minimaxi.com/docs", external: true },
          { label: "Token Plan", href: "https://platform.minimaxi.com/token-plan", external: true },
          { label: "Pricing", href: "https://platform.minimaxi.com/pricing", external: true },
          { label: "Sign In", href: "https://platform.minimaxi.com", external: true },
        ],
      },
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "About",
      dropdown: {
        label: "About",
        description: "Learn about MiniMax",
        links: [
          { label: "Company", href: "/about" },
          { label: "Careers", href: "/careers" },
        ],
      },
    },
  ],
  loginOptions: [
    { label: "MiniMax Platform", href: "https://platform.minimaxi.com", external: true },
    { label: "MiniMax Agent", href: "https://agent.minimax.io", external: true },
    { label: "Hailuo Video", href: "https://hailuoai.video", external: true },
    { label: "Talkie", href: "https://www.xingyeai.com", external: true },
  ],
};
