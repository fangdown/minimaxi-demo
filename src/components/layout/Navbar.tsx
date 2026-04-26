"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLocale } from "@/hooks/useLocale";
import { getNavigation, getStrings } from "@/data";
import { NavMegaMenu } from "./NavMegaMenu";
import { NavDropdown } from "./NavDropdown";
import { LoginDropdown } from "./LoginDropdown";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const locale = useLocale();
  const nav = getNavigation(locale);
  const t = getStrings(locale);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
      style={{ height: "var(--nav-height)" }}
    >
      <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link href={`/${locale}`} className="flex-shrink-0">
          <div className="text-xl font-bold tracking-tight text-[var(--color-text-heading)]">
            MiniMax
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {nav.menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.href ? (
                <Link
                  href={`/${locale}${item.href}`}
                  className="px-4 py-2 text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-purple)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="px-4 py-2 text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-purple)] transition-colors flex items-center gap-1">
                  {item.label}
                  <ChevronDown />
                </button>
              )}

              {activeMenu === item.label && item.megaMenu && (
                <NavMegaMenu columns={item.megaMenu} locale={locale} />
              )}

              {activeMenu === item.label && item.dropdown && (
                <NavDropdown item={item.dropdown} locale={locale} />
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={locale === "zh" ? "/en" : "/zh"}
            className="px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            {locale === "zh" ? "EN" : "中文"}
          </Link>
          <LoginDropdown options={nav.loginOptions} label={t.login} />
        </div>

        <MobileNav locale={locale} />
      </nav>
    </header>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
