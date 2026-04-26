import Link from "next/link";
import type { NavModelColumn } from "@/data/types";
import type { Locale } from "@/lib/i18n";

interface NavMegaMenuProps {
  columns: NavModelColumn[];
  locale: Locale;
}

const iconMap: Record<string, string> = {
  text: "📝",
  speech: "🎙️",
  video: "🎬",
  music: "🎵",
};

export function NavMegaMenu({ columns, locale }: NavMegaMenuProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 grid grid-cols-4 gap-8 min-w-[600px] animate-slideDown">
        {columns.map((col) => (
          <div key={col.title}>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
              <span className="text-base">{iconMap[col.icon] ?? "📄"}</span>
              <span className="text-sm font-medium text-[var(--color-text-heading)]">
                {col.title}
              </span>
            </div>
            <ul className="space-y-1.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-purple)] transition-colors py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
