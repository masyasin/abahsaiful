import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  status: string;
  className?: string;
}

const statusColors: Record<string, string> = {
  selesai: "bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 shadow-[0_0_8px_rgba(245,209,48,0.4)]",
  berjalan: "bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 shadow-[0_0_8px_rgba(217,119,6,0.3)]",
  direncanakan: "bg-gradient-to-r from-yellow-200 to-yellow-300 shadow-sm",
};

export default function ProgressBar({
  value,
  status,
  className,
}: ProgressBarProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200/40">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            statusColors[status] || "bg-gradient-to-r from-amber-400 to-amber-500"
          )}
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between text-xs text-gray-500">
        <span className="capitalize">{status}</span>
        <span>{value}%</span>
      </div>
    </div>
  );
}
