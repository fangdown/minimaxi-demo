import type { CompanyData } from "../types";

export const company: CompanyData = {
  title: "MiniMax",
  descriptions: [
    "MiniMax 成立于 2021 年 12 月，是一家全球领先的通用人工智能科技公司，致力于与用户共创智能。",
    "MiniMax 自主研发了全栈多模态大模型，包括万亿参数的 MoE 文本大模型、语音大模型、视频大模型和音乐大模型，并推出了多款面向用户的 AI 产品。",
  ],
  stats: [
    { value: "200", suffix: "+", label: "服务国家和地区" },
    { value: "2.36", suffix: "亿+", label: "全球用户" },
    { value: "214,000", suffix: "+", label: "企业客户" },
    { value: "100", suffix: "+", label: "企业服务国家" },
  ],
};
