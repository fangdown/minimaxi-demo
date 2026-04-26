import type { Locale } from "@/lib/i18n";
import type {
  NavigationData,
  CompanyData,
  FooterData,
  AboutData,
  ModelCard,
  ProductCard,
  NewsItem,
  HeroSlide,
  AudioSample,
} from "./types";

import { navigation as zhNav } from "./zh/navigation";
import { company as zhCompany } from "./zh/company";
import { footer as zhFooter } from "./zh/footer";
import { about as zhAbout } from "./zh/about";
import { models as zhModels } from "./zh/models";
import { products as zhProducts } from "./zh/products";
import { news as zhNews } from "./zh/news";
import {
  heroSlides as zhHeroSlides,
  musicCards as zhMusicCards,
  audioSamples as zhAudioSamples,
} from "./zh/hero-slides";

import { navigation as enNav } from "./en/navigation";
import { company as enCompany } from "./en/company";
import { footer as enFooter } from "./en/footer";
import { about as enAbout } from "./en/about";
import { models as enModels } from "./en/models";
import { products as enProducts } from "./en/products";
import { news as enNews } from "./en/news";
import {
  heroSlides as enHeroSlides,
  musicCards as enMusicCards,
  audioSamples as enAudioSamples,
} from "./en/hero-slides";

const data = {
  zh: {
    navigation: zhNav,
    company: zhCompany,
    footer: zhFooter,
    about: zhAbout,
    models: zhModels,
    products: zhProducts,
    news: zhNews,
    heroSlides: zhHeroSlides,
    musicCards: zhMusicCards,
    audioSamples: zhAudioSamples,
  },
  en: {
    navigation: enNav,
    company: enCompany,
    footer: enFooter,
    about: enAbout,
    models: enModels,
    products: enProducts,
    news: enNews,
    heroSlides: enHeroSlides,
    musicCards: enMusicCards,
    audioSamples: enAudioSamples,
  },
} as const;

function resolve(locale: string): Locale {
  return locale === "en" ? "en" : "zh";
}

export function getNavigation(locale: string): NavigationData {
  return data[resolve(locale)].navigation;
}

export function getCompany(locale: string): CompanyData {
  return data[resolve(locale)].company;
}

export function getFooter(locale: string): FooterData {
  return data[resolve(locale)].footer;
}

export function getAbout(locale: string): AboutData {
  return data[resolve(locale)].about;
}

export function getModels(locale: string): ModelCard[] {
  return data[resolve(locale)].models;
}

export function getProducts(locale: string): ProductCard[] {
  return data[resolve(locale)].products;
}

export function getNews(locale: string): NewsItem[] {
  return data[resolve(locale)].news;
}

export function getHeroSlides(locale: string): HeroSlide[] {
  return data[resolve(locale)].heroSlides;
}

export function getMusicCards(locale: string) {
  return data[resolve(locale)].musicCards;
}

export function getAudioSamples(locale: string) {
  return data[resolve(locale)].audioSamples;
}

export interface LocaleStrings {
  readMore: string;
  learnMore: string;
  loadMore: string;
  tryNow: string;
  viewDetails: string;
  joinUs: string;
  openPositions: string;
  ourValues: string;
  backToNews: string;
  fullStackModels: string;
  fullStackModelsDesc: string;
  aiProducts: string;
  aiProductsDesc: string;
  textModels: string;
  textModelsDesc: string;
  coreCaps: string;
  techSpecs: string;
  login: string;
}

const strings: Record<Locale, LocaleStrings> = {
  zh: {
    readMore: "阅读更多",
    learnMore: "了解更多",
    loadMore: "加载更多",
    tryNow: "前往体验",
    viewDetails: "查看详情",
    joinUs: "加入我们",
    openPositions: "开放职位",
    ourValues: "我们的价值观",
    backToNews: "返回新闻列表",
    fullStackModels: "全栈模型矩阵",
    fullStackModelsDesc: "覆盖文本、语音、视频、音乐的全模态大模型能力",
    aiProducts: "AI 产品矩阵",
    aiProductsDesc:
      "面向用户的多款 AI 产品，覆盖智能助手、视频创作、语音合成等场景",
    textModels: "文本模型",
    textModelsDesc: "MiniMax 全系列文本大模型",
    coreCaps: "核心能力",
    techSpecs: "技术规格",
    login: "登录",
  },
  en: {
    readMore: "Read More",
    learnMore: "Learn More",
    loadMore: "Load More",
    tryNow: "Try Now",
    viewDetails: "View Details",
    joinUs: "Join Us",
    openPositions: "Open Positions",
    ourValues: "Our Values",
    backToNews: "Back to News",
    fullStackModels: "Full-Stack Model Matrix",
    fullStackModelsDesc:
      "Full-modal AI capabilities spanning text, speech, video, and music",
    aiProducts: "AI Product Suite",
    aiProductsDesc:
      "Consumer-facing AI products covering intelligent assistants, video creation, speech synthesis, and more",
    textModels: "Text Models",
    textModelsDesc: "MiniMax full-series text models",
    coreCaps: "Core Capabilities",
    techSpecs: "Technical Specifications",
    login: "Sign In",
  },
};

export function getStrings(locale: string): LocaleStrings {
  return strings[resolve(locale)];
}
