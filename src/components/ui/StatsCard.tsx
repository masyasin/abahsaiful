import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string;
  icon?: string;
  className?: string;
}

export default function StatsCard({ label, value, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-slate-200/75 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_10px_25px_-5px_rgba(245,209,48,0.1)]",
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />
      <div className="text-3xl font-black bg-gradient-to-br from-slate-900 to-slate-950 bg-clip-text text-transparent">{value}</div>
      <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</div>
    </div>
  );
}
