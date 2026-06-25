"use client";

import { cn } from "@/lib/utils";

const tpsData = [
  { nama: "TPS 1 Desa Tanjung", suara: 250, caleg: 180, pct: 72, warna: "hijau" },
  { nama: "TPS 2 Desa Tanjung", suara: 280, caleg: 140, pct: 50, warna: "hijau" },
  { nama: "TPS 3 Desa Mulya", suara: 220, caleg: 88, pct: 40, warna: "kuning" },
  { nama: "TPS 4 Desa Mulya", suara: 240, caleg: 60, pct: 25, warna: "merah" },
  { nama: "TPS 1 Desa Tani", suara: 300, caleg: 120, pct: 40, warna: "kuning" },
  { nama: "TPS 2 Desa Tani", suara: 190, caleg: 95, pct: 50, warna: "hijau" },
  { nama: "TPS 1 Kota", suara: 310, caleg: 62, pct: 20, warna: "merah" },
  { nama: "TPS 2 Kota", suara: 270, caleg: 108, pct: 40, warna: "kuning" },
  { nama: "TPS 1 Desa Sehat", suara: 230, caleg: 161, pct: 70, warna: "hijau" },
  { nama: "TPS 2 Desa Sehat", suara: 260, caleg: 78, pct: 30, warna: "merah" },
  { nama: "TPS 1 Desa Terang", suara: 290, caleg: 145, pct: 50, warna: "hijau" },
  { nama: "TPS 2 Desa Terang", suara: 210, caleg: 63, pct: 30, warna: "merah" },
];

const stats = [
  { label: "Total TPS", value: "12" },
  { label: "TPS Hijau", value: "5" },
  { label: "TPS Kuning", value: "3" },
  { label: "TPS Merah", value: "4" },
  { label: "Rata-rata Suara", value: "42%" },
];

export default function DashboardHome() {
  return (
    <>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div className="text-2xl font-bold text-green-800">{s.value}</div>
            <div className="mt-1 text-xs text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="font-semibold text-gray-900">
            Heat Map Basis Massa per TPS
          </h2>
        </div>
        <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tpsData.map((tps) => (
            <div
              key={tps.nama}
              className={cn(
                "rounded-lg border p-4",
                tps.warna === "hijau"
                  ? "border-green-200 bg-green-50"
                  : tps.warna === "kuning"
                    ? "border-yellow-200 bg-yellow-50"
                    : "border-red-200 bg-red-50"
              )}
            >
              <h3 className="text-sm font-medium text-gray-900">{tps.nama}</h3>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <div className="font-semibold text-gray-700">{tps.suara}</div>
                  <div className="text-gray-500">Total</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-700">{tps.caleg}</div>
                  <div className="text-gray-500">Caleg</div>
                </div>
                <div>
                  <div
                    className={cn(
                      "font-semibold",
                      tps.warna === "hijau"
                        ? "text-green-700"
                        : tps.warna === "kuning"
                          ? "text-green-700"
                          : "text-red-700"
                    )}
                  >
                    {tps.pct}%
                  </div>
                  <div className="text-gray-500">%</div>
                </div>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className={cn(
                    "h-full rounded-full",
                    tps.warna === "hijau"
                      ? "bg-green-500"
                      : tps.warna === "kuning"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  )}
                  style={{ width: `${tps.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
