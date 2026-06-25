"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { Clock, CheckCircle, AlertCircle, Filter } from "lucide-react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-slate-50 text-amber-700 font-bold text-sm">
      Memuat Peta Interaktif...
    </div>
  ),
});

const pins = [
  { id: 1, lat: -6.225, lng: 106.715, judul: "Jalan rusak di Desa Tanjung", status: "baru", warna: "biru", lokasi: "Desa Tanjung" },
  { id: 2, lat: -6.215, lng: 106.730, judul: "Beasiswa untuk siswa SMA", status: "proses", warna: "kuning", lokasi: "Kec. Kota" },
  { id: 3, lat: -6.235, lng: 106.725, judul: "Bantuan modal UMKM", status: "selesai", warna: "hijau", lokasi: "Desa Mulya" },
  { id: 4, lat: -6.240, lng: 106.710, judul: "Puskesmas keliling", status: "terlambat", warna: "merah", lokasi: "Desa Sehat" },
  { id: 5, lat: -6.220, lng: 106.740, judul: "Perbaikan irigasi sawah", status: "proses", warna: "kuning", lokasi: "Desa Tani" },
  { id: 6, lat: -6.230, lng: 106.735, judul: "Penerangan jalan umum", status: "baru", warna: "biru", lokasi: "Desa Terang" },
];

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

const pinColors: Record<string, string> = {
  biru: "bg-yellow-400",
  kuning: "bg-yellow-500",
  merah: "bg-red-500",
  hijau: "bg-amber-500",
};

const statusOptions = ["Semua", "baru", "proses", "terlambat", "selesai"];

export default function PetaWilayah() {
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [selectedPin, setSelectedPin] = useState<number | null>(null);

  const filteredPins =
    statusFilter === "Semua"
      ? pins
      : pins.filter((p) => p.status === statusFilter);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 py-20 text-slate-950 border-b border-amber-500/20">
        {/* Creative Textured Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Glowing Ambient Blobs */}
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/30 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 h-96 w-96 rounded-full bg-amber-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-yellow-300/30 blur-[100px] pointer-events-none" />
        
        {/* Glassmorphic decorative floating cards */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block opacity-30 pointer-events-none">
          <div className="h-28 w-48 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(217,119,6,0.1)] -rotate-6 transform transition-all duration-700 hover:rotate-0 hover:scale-105" />
          <div className="absolute -right-4 -bottom-4 h-20 w-32 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(217,119,6,0.1)] rotate-12 transform transition-all duration-700 hover:rotate-0 hover:scale-105" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-950/10 bg-slate-950/10 text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
            Abah Saiful Milah
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Peta Wilayah</h1>
          <p className="mt-3 text-base font-semibold text-slate-800 max-w-2xl leading-relaxed">
            Pemetaan aspirasi konstituen dan sebaran TPS secara digital dan akurat.
          </p>
        </div>
      </section>

      <div className="relative overflow-hidden bg-slate-50/60">
        {/* Ambient Premium Mesh and Glow Blobs */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-12 left-10 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-24 right-10 -z-10 h-96 w-96 rounded-full bg-amber-400/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -z-10 h-80 w-80 rounded-full bg-orange-300/5 blur-[120px] pointer-events-none" />
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <Filter size={16} className="text-slate-500 mr-1" />
              {statusOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setStatusFilter(opt)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                    statusFilter === opt
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-955 shadow-[0_4px_12px_rgba(245,209,48,0.15)] border border-amber-500/20"
                      : "bg-white border border-amber-200/50 text-slate-650 hover:bg-amber-50 hover:text-amber-750"
                  )}
                >
                  {opt === "Semua" ? "Semua" : opt}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-amber-200/80 bg-white p-2 shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-50 min-h-[400px]">
                <MapComponent 
                  pins={filteredPins} 
                  selectedPin={selectedPin} 
                  setSelectedPin={setSelectedPin} 
                />

                {selectedPin && (
                  <div className="absolute bottom-6 right-6 rounded-2xl border border-amber-500/35 bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 p-5 shadow-2xl sm:w-80 z-20 text-slate-950 transition-all duration-300">
                    {(() => {
                      const pin = pins.find((p) => p.id === selectedPin)!;
                      const pinHex = pin.warna === "biru" ? "#fbbf24" : pin.warna === "kuning" ? "#f59e0b" : pin.warna === "merah" ? "#ef4444" : "#d97706";
                      return (
                        <>
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-extrabold text-slate-950 leading-snug">
                              {pin.judul}
                            </h3>
                            <span
                              className="h-3 w-3 shrink-0 rounded-full border border-white/45"
                              style={{ backgroundColor: pinHex, boxShadow: `0 0 10px ${pinHex}` }}
                            />
                          </div>
                          <p className="mt-1 text-xs font-bold text-amber-955 uppercase tracking-wider">
                            {pin.lokasi}
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <Badge
                              className="capitalize bg-slate-950 text-yellow-400 font-bold border border-slate-950/20"
                            >
                              {pin.status}
                            </Badge>
                            <button 
                              onClick={() => setSelectedPin(null)} 
                              className="text-xs font-black text-amber-900 hover:text-slate-950 transition-colors"
                            >
                              Tutup
                            </button>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-amber-200/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="h-1 w-12 bg-slate-950 mb-2 rounded-full" />
              <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                Isu Aktif & SLA Tracking
              </h2>
            </div>
            <div className="space-y-4">
              {filteredPins.map((pin) => {
                const pinHex = pin.warna === "biru" ? "#fbbf24" : pin.warna === "kuning" ? "#f59e0b" : pin.warna === "merah" ? "#ef4444" : "#d97706";
                return (
                  <div
                    key={pin.id}
                    className="group flex flex-wrap items-center gap-4 rounded-2xl border border-amber-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-500/35 hover:shadow-md"
                  >
                    <span
                      className="h-3.5 w-3.5 shrink-0 rounded-full border border-slate-100 shadow-sm"
                      style={{ backgroundColor: pinHex, boxShadow: `0 0 8px ${pinHex}40` }}
                    />
                    <div className="flex-1 min-w-[200px]">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold text-slate-850 group-hover:text-amber-700 transition-colors duration-200">{pin.judul}</h3>
                        <Badge
                          variant={
                            pin.status === "baru"
                              ? "info"
                              : pin.status === "proses"
                                ? "warning"
                                : pin.status === "terlambat"
                                  ? "danger"
                                  : "success"
                          }
                          className="capitalize"
                        >
                          {pin.status}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">{pin.lokasi}</p>
                    </div>
                    <div className="text-right text-xs font-semibold text-slate-555">
                      <div className="text-slate-400">Target SLA: <span className="text-slate-700 font-bold">14 Hari</span></div>
                      <div className="mt-0.5 text-amber-600">Sisa waktu: 10 Hari</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-amber-200/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="h-1 w-12 bg-slate-950 mb-2 rounded-full" />
              <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                Sebaran Suara & Basis Massa
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tpsData.map((tps) => {
                const bgStyle = tps.warna === "hijau"
                  ? "border-amber-500/10 bg-amber-50/10 text-amber-950"
                  : tps.warna === "kuning"
                    ? "border-amber-500/20 bg-amber-50/20 text-amber-950"
                    : "border-rose-500/20 bg-rose-50/20 text-rose-950";
                const barColor = tps.warna === "hijau"
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_8px_rgba(245,209,48,0.3)]"
                  : tps.warna === "kuning"
                    ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
                    : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.3)]";
                return (
                  <div
                    key={tps.nama}
                    className={cn(
                      "rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]",
                      bgStyle
                    )}
                  >
                    <h3 className="text-sm font-black tracking-tight text-slate-800">
                      {tps.nama}
                    </h3>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-sm font-black text-slate-800">{tps.suara}</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Total</div>
                      </div>
                      <div>
                        <div className="text-sm font-black text-slate-800">{tps.caleg}</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Suara SM</div>
                      </div>
                      <div>
                        <div className="text-sm font-black text-amber-800">{tps.pct}%</div>
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Rasio</div>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/50">
                      <div
                        className={cn("h-full rounded-full transition-all duration-500", barColor)}
                        style={{ width: `${tps.pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
