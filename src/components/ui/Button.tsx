import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-[var(--duration-normal)] rounded-[var(--radius-pill)] whitespace-nowrap";

  const variants = {
    primary: "bg-[var(--color-cta-dark)] text-white hover:opacity-90 active:scale-[0.97]",
    secondary:
      "bg-white text-[var(--color-text-primary)] border border-gray-200 hover:bg-gray-50 active:scale-[0.97]",
    outline:
      "bg-transparent text-[var(--color-text-primary)] border border-gray-300 hover:bg-gray-50 active:scale-[0.97]",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
