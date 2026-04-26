"use client";

import { useState } from "react";
import Link from "next/link";
import { getNavigation, getStrings } from "@/data";
import type { Locale } from "@/lib/i18n";

interface MobileNavProps {
  locale: Locale;
}

export function MobileNav({ locale }: MobileNavProps) {
  const nav = getNavigation(locale);
  const t = getStrings(locale);
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[var(--color-text-primary)]"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 top-[var(--nav-height)] bg-white z-40 overflow-y-auto animate-fadeIn">
          <div className="p-6 space-y-2">
            {nav.menuItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                {item.href ? (
                  <Link
                    href={`/${locale}${item.href}`}
                    className="block py-3 text-base text-[var(--color-text-primary)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setExpandedItem(expandedItem === item.label ? null : item.label)
                      }
                      className="flex w-full items-center justify-between py-3 text-base text-[var(--color-text-primary)]"
                    >
                      {item.label}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`transition-transform ${expandedItem === item.label ? "rotate-180" : ""}`}
                      >
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expandedItem === item.label && (
                      <div className="pb-3 pl-4 space-y-2">
                        {item.megaMenu?.map((col) => (
                          <div key={col.title} className="mb-3">
                            <p className="text-xs font-medium text-[var(--color-text-muted)] mb-1">
                              {col.title}
                            </p>
                            {col.links.map((link) => (
                              <Link
                                key={link.label}
                                href={`/${locale}${link.href}`}
                                className="block py-1 text-sm text-[var(--color-text-secondary)]"
                                onClick={() => setOpen(false)}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {item.dropdown?.links.map((link) =>
                          link.external ? (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-1 text-sm text-[var(--color-text-secondary)]"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              key={link.label}
                              href={`/${locale}${link.href}`}
                              className="block py-1 text-sm text-[var(--color-text-secondary)]"
                              onClick={() => setOpen(false)}
                            >
                              {link.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className="pt-4 flex items-center gap-4">
              <Link
                href={locale === "zh" ? "/en" : "/zh"}
                className="text-sm text-[var(--color-text-secondary)]"
              >
                {locale === "zh" ? "EN" : "中文"}
              </Link>
              <a
                href="https://platform.minimaxi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-sm font-medium bg-[var(--color-cta-dark)] text-white rounded-[var(--radius-pill)]"
              >
                {t.login}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
