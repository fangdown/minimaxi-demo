import type { Locale } from "@/lib/i18n";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavDropdownItem {
  label: string;
  description?: string;
  links: NavLink[];
}

export interface NavModelColumn {
  icon: string;
  title: string;
  links: NavLink[];
}

export interface NavigationData {
  logo: string;
  menuItems: {
    label: string;
    href?: string;
    megaMenu?: NavModelColumn[];
    dropdown?: NavDropdownItem;
  }[];
  loginOptions: NavLink[];
}

export interface HeroSlide {
  id: string;
  tag?: string;
  title: string;
  subtitle?: string;
  description?: string;
  ctas: {
    label: string;
    href: string;
    variant: "primary" | "secondary" | "outline";
  }[];
  features?: {
    title: string;
    subtitle: string;
  }[];
  visual: "music-scroller" | "image" | "feature-pills" | "audio-cards";
  bgGradient?: string;
  titleIcon?: string;
}

export interface ModelCard {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
  isNew?: boolean;
}

export interface ProductCard {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface CompanyStat {
  value: string;
  suffix: string;
  label: string;
}

export interface CompanyData {
  title: string;
  descriptions: string[];
  stats: CompanyStat[];
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  excerpt?: string;
  content?: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface FooterData {
  columns: FooterColumn[];
  social: {
    label: string;
    icon: string;
    href?: string;
    qrcode?: string;
  }[];
  legal: NavLink[];
  copyright: string;
  icp: string;
}

export interface AudioSample {
  title: string;
  description: string;
  image: string;
}

export interface AboutValue {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  paragraphs: string[];
  values: AboutValue[];
}

export interface LocaleParams {
  params: Promise<{ locale: Locale }>;
}
