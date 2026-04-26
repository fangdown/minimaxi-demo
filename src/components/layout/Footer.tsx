"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";
import { getFooter } from "@/data";

export function Footer() {
  const locale = useLocale();
  const ft = getFooter(locale);

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <Link href={`/${locale}`} className="text-xl font-bold tracking-tight">
            MiniMax
          </Link>
          <div className="flex items-center gap-4">
            {ft.social.map((item) => (
              <SocialIcon key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {ft.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-medium text-white/80 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-4 flex-wrap">
            <span>{ft.copyright}</span>
            {ft.icp && <span>{ft.icp}</span>}
          </div>
          <div className="flex items-center gap-4">
            {ft.legal.map((link) => (
              <Link
                key={link.label}
                href={`/${locale}${link.href}`}
                className="hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type SocialItem = ReturnType<typeof getFooter>["social"][number];

function SocialIcon({ item }: { item: SocialItem }) {
  const [showQr, setShowQr] = useState(false);

  const iconLabels: Record<string, string> = {
    mail: "✉",
    wechat: "💬",
    wechat2: "💬",
    group: "👥",
    feishu: "🪶",
    github: "⌨",
    huggingface: "🤗",
    discord: "🎮",
  };

  if (item.qrcode) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setShowQr(true)}
        onMouseLeave={() => setShowQr(false)}
      >
        <button
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-white/20 transition-colors"
          aria-label={item.label}
        >
          {iconLabels[item.icon] ?? "•"}
        </button>
        {showQr && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-xl p-3 shadow-lg">
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">
              {item.label}
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">{item.label}</p>
          </div>
        )}
      </div>
    );
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-white/20 transition-colors"
        aria-label={item.label}
      >
        {iconLabels[item.icon] ?? "•"}
      </a>
    );
  }

  return null;
}
