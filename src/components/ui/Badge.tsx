import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "new" | "tag";
  className?: string;
}

export function Badge({ children, variant = "new", className }: BadgeProps) {
  const variants = {
    new: "bg-[var(--color-accent-red)] text-white text-xs px-2 py-0.5 rounded",
    tag: "bg-gray-100 text-[var(--color-text-secondary)] text-xs px-2 py-0.5 rounded",
  };

  return <span className={cn(variants[variant], className)}>{children}</span>;
}
