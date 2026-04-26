import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocaleHtmlLang } from "@/components/layout/LocaleHtmlLang";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en"
    ? {
        title: "MiniMax - Co-Creating Intelligence with Everyone",
        description: "MiniMax is a leading global AGI company",
      }
    : {
        title: "MiniMax - 与所有人共创智能",
        description: "MiniMax 是一家全球领先的通用人工智能科技公司",
      };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <Navbar />
      <main className="flex-1 pt-[var(--nav-height)]">{children}</main>
      <Footer />
    </>
  );
}
