"use client";

import { useState, useRef, useEffect } from "react";
import type { NavLink } from "@/data/types";

interface LoginDropdownProps {
  options: NavLink[];
  label?: string;
}

export function LoginDropdown({ options, label = "登录" }: LoginDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-5 py-2 text-sm font-medium bg-[var(--color-cta-dark)] text-white rounded-[var(--radius-pill)] hover:opacity-90 transition-opacity"
      >
        {label}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 min-w-[200px] animate-fadeIn">
          <ul className="space-y-1">
            {options.map((opt) => (
              <li key={opt.label}>
                <a
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-purple)] transition-colors py-1.5 px-2 rounded-lg hover:bg-gray-50"
                >
                  {opt.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-40">
                    <path d="M4.5 2H10V7.5M10 2L4 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
