import type { ProductCard } from "../types";

export const products: ProductCard[] = [
  {
    id: "agent",
    name: "MiniMax Agent",
    description: "基于 M2.7 的全能 AI 智能助手",
    image: "/images/products/agent.jpg",
    href: "https://agent.minimax.io",
  },
  {
    id: "hailuo-video",
    name: "海螺视频",
    description: "AI 视频创作平台",
    image: "/images/products/hailuo.jpg",
    href: "https://hailuoai.video",
  },
  {
    id: "audio",
    name: "MiniMax Audio",
    description: "超拟人 AI 声音平台",
    image: "/images/products/audio.jpg",
    href: "https://audio.minimax.io",
  },
  {
    id: "video-agent",
    name: "海螺视频 Agent",
    description: "零门槛成片直出",
    image: "/images/products/video-agent.jpg",
    href: "https://hailuoai.video/agent",
  },
  {
    id: "xingye",
    name: "星野",
    description: "虚拟角色互动平台",
    image: "/images/products/xingye.jpg",
    href: "https://www.xingyeai.com",
  },
];
