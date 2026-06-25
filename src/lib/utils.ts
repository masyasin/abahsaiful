import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    baru: "bg-blue-500",
    proses: "bg-yellow-500",
    terlambat: "bg-red-500",
    selesai: "bg-green-500",
    direncanakan: "bg-yellow-400",
    berjalan: "bg-amber-500",
  };
  return colors[status] || "bg-gray-500";
}

export function getStatusTextColor(status: string): string {
  const colors: Record<string, string> = {
    baru: "text-blue-700 bg-blue-50",
    proses: "text-yellow-700 bg-yellow-50",
    terlambat: "text-red-700 bg-red-50",
    selesai: "text-green-700 bg-green-50",
  };
  return colors[status] || "text-gray-700 bg-gray-50";
}

export function getPinColor(status: string): string {
  const colors: Record<string, string> = {
    baru: "#3B82F6",
    proses: "#EAB308",
    terlambat: "#EF4444",
    selesai: "#22C55E",
  };
  return colors[status] || "#6B7280";
}

export function getHeatColor(pct: number): string {
  if (pct >= 50) return "#22C55E";
  if (pct >= 30) return "#EAB308";
  return "#EF4444";
}
