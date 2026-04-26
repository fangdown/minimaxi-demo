import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MiniMax - 与所有人共创智能",
    template: "%s | MiniMax",
  },
  description: "MiniMax 是一家全球领先的通用人工智能科技公司，致力于与用户共创智能。",
  metadataBase: new URL("https://www.minimaxi.com"),
  openGraph: {
    type: "website",
    siteName: "MiniMax",
    title: "MiniMax - 与所有人共创智能",
    description: "MiniMax 是一家全球领先的通用人工智能科技公司",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniMax",
    description: "MiniMax 是一家全球领先的通用人工智能科技公司",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
