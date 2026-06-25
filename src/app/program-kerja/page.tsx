"use client";

import { useState } from "react";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const programs = [
  {
    judul: "Peningkatan Infrastruktur Desa",
    deskripsi: "Membangun dan merehabilitasi jalan desa, jembatan, dan saluran irigasi di daerah pemilihan untuk meningkatkan konektivitas dan produktivitas pertanian.",
    kategori: "Infrastruktur",
    progress: 100,
    status: "selesai",
    icon: "🏗️",
  },
  {
    judul: "Beasiswa Pendidikan Anak Negeri",
    deskripsi: "Program beasiswa bagi siswa berprestasi dari keluarga kurang mampu, mencakup biaya sekolah, seragam, dan perlengkapan belajar.",
    kategori: "Pendidikan",
    progress: 65,
    status: "berjalan",
    icon: "📚",
  },
  {
    judul: "Program UMKM Naik Kelas",
    deskripsi: "Pelatihan digital marketing, akses permodalan, dan pendampingan legalitas usaha bagi pelaku UMKM di wilayah dapil.",
    kategori: "Ekonomi",
    progress: 40,
    status: "berjalan",
    icon: "💼",
  },
  {
    judul: "Layanan Kesehatan Keliling",
    deskripsi: "Menyediakan layanan kesehatan gratis berupa pemeriksaan umum, pengobatan, dan penyuluhan kesehatan di desa-desa terpencil.",
    kategori: "Kesehatan",
    progress: 0,
    status: "direncanakan",
    icon: "🏥",
  },
];

const categories = ["Semua", "Infrastruktur", "Pendidikan", "Ekonomi", "Kesehatan"];

export default function ProgramKerja() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? programs
    : programs.filter((p) => p.kategori === activeCategory);

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
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Program Kerja</h1>
          <p className="mt-3 text-base font-semibold text-slate-800 max-w-2xl leading-relaxed">
            Pemaparan program kerja yang telah, sedang, dan akan dilaksanakan untuk kemajuan daerah.
          </p>
        </div>
      </section>

      <div className="relative overflow-hidden bg-slate-50/60">
        {/* Ambient Premium Mesh and Glow Blobs */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-12 left-10 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-24 right-10 -z-10 h-96 w-96 rounded-full bg-amber-400/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -z-10 h-80 w-80 rounded-full bg-orange-300/5 blur-[120px] pointer-events-none" />
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                    activeCategory === cat
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 shadow-[0_4px_12px_rgba(245,209,48,0.25)] border border-amber-500/30"
                      : "bg-white border border-amber-200/50 text-slate-600 hover:bg-amber-50/30 hover:text-amber-700"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {filtered.map((p) => (
                <div
                  key={p.judul}
                  className="group rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 text-2xl">
                    {p.icon}
                  </div>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-850 leading-snug group-hover:text-amber-700 transition-colors duration-200">
                      {p.judul}
                    </h3>
                    <Badge
                      variant={
                        p.status === "selesai"
                          ? "success"
                          : p.status === "berjalan"
                            ? "warning"
                            : "default"
                      }
                    >
                      {p.status}
                    </Badge>
                  </div>
                  <p className="mb-6 text-sm text-slate-500 leading-relaxed font-medium">{p.deskripsi}</p>
                  <ProgressBar value={p.progress} status={p.status} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-amber-200/30 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-white p-6 sm:p-8 shadow-[0_10px_30px_-10px_rgba(245,209,48,0.15)]">
              <div className="absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-amber-500 to-yellow-400" />
              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-800">
                Rekomendasi Prioritas Pokir 2026
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 font-medium">
                Berdasarkan analisis terpadu terhadap <strong>128 aspirasi warga</strong> yang masuk,
                prioritas utama untuk Pokok Pikiran (Pokir) DPRD 2026 adalah
                sektor <strong className="text-amber-850 font-bold">Infrastruktur (34%)</strong> and{" "}
                <strong className="text-amber-850 font-bold">Pendidikan (28%)</strong>. Rekomendasi lengkap telah
                disusun secara terukur untuk diteruskan ke OPD terkait Pemerintah Kota Tangerang.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
