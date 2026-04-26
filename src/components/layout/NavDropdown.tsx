import Link from "next/link";
import type { NavDropdownItem } from "@/data/types";
import type { Locale } from "@/lib/i18n";

interface NavDropdownProps {
  item: NavDropdownItem;
  locale: Locale;
}

export function NavDropdown({ item, locale }: NavDropdownProps) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 min-w-[220px] animate-slideDown">
        {item.description && (
          <p className="text-xs text-[var(--color-text-muted)] mb-3 pb-2 border-b border-gray-100">
            {item.description}
          </p>
        )}
        <ul className="space-y-1">
          {item.links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-purple)] transition-colors py-1.5"
                >
                  {link.label}
                  <ExternalIcon />
                </a>
              ) : (
                <Link
                  href={`/${locale}${link.href}`}
                  className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-purple)] transition-colors py-1.5"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-40">
      <path d="M4.5 2H10V7.5M10 2L4 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
