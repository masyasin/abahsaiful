import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  className?: string;
}

const variants: Record<string, string> = {
  default: "bg-slate-500/10 text-slate-700 border border-slate-200/40",
  success: "bg-yellow-400/20 text-amber-950 border border-yellow-400/40 font-bold",
  warning: "bg-amber-500/10 text-amber-800 border border-amber-500/20",
  danger: "bg-rose-500/10 text-rose-800 border border-rose-500/20",
  info: "bg-amber-500/15 text-amber-900 border border-amber-500/30",
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
