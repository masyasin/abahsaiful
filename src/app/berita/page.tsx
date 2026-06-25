"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { Calendar, ArrowRight } from "lucide-react";

const featuredNews = {
  title:
    "Fraksi Golkar Dorong Peningkatan Anggaran Pendidikan di Kota Tangerang",
  excerpt:
    "Ketua Fraksi Golkar DPRD Kota Tangerang, Abah Saiful Milah, mendorong peningkatan alokasi anggaran pendidikan dalam APBD 2026 untuk meningkatkan kualitas sekolah dan kesejahteraan guru.",
  category: "Fraksi",
  date: "2026-06-22",
  image: "/images/kegiatan_paripurna.png",
};

const allNews = [
  { title: "Rapat Komisi II Bahas Program Infrastruktur Jalan", category: "Komisi II", date: "2026-06-20", excerpt: "Komisi II DPRD Kota Tangerang menggelar rapat dengar pendapat dengan Dinas PU terkait program perbaikan jalan.", image: "/images/kegiatan_infrastruktur.png" },
  { title: "Saiful Milah Resmikan Posyandu di Ciledug", category: "Fraksi", date: "2026-06-15", excerpt: "Peresmian Posyandu baru di Kelurahan Sudimara, Ciledug sebagai bagian dari program kesehatan masyarakat.", image: "/images/kegiatan_reses.png" },
  { title: "DPRD Setujui Raperda Pendidikan Inklusif", category: "Komisi II", date: "2026-06-10", excerpt: "DPRD Kota Tangerang menyetujui Raperda tentang Pendidikan Inklusif untuk anak berkebutuhan khusus.", image: "/images/kegiatan_paripurna.png" },
  { title: "Kunjungan Kerja Fraksi Golkar ke Larangan", category: "Fraksi", date: "2026-06-05", excerpt: "Fraksi Golkar DPRD Kota Tangerang melakukan kunjungan kerja ke Kecamatan Larangan untuk menyerap aspirasi.", image: "/images/kegiatan_keagamaan.png" },
  { title: "Program Beasiswa 2026 Resmi Dibuka", category: "Fraksi", date: "2026-05-28", excerpt: "Pendaftaran program Beasiswa Pendidikan resmi dibuka untuk siswa SMA/SMK di Kota Tangerang.", image: "/images/kegiatan_sosial.png" },
  { title: "Fraksi Golkar Kaji Raperda Perlindungan Buruh", category: "Fraksi", date: "2026-05-20", excerpt: "Fraksi Golkar sedang mengkaji Raperda tentang Perlindungan Buruh di Kota Tangerang.", image: "/images/kegiatan_umkm.png" },
];

const categories = ["Semua", "Fraksi", "Komisi II"];

export default function Berita() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? allNews
      : allNews.filter((n) => n.category === activeCategory);

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
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Berita & Kegiatan</h1>
          <p className="mt-3 text-base font-semibold text-slate-800 max-w-2xl leading-relaxed">
            Warta berita resmi, siaran press, dan agenda kegiatan fraksi Partai Golkar.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/60 py-16">
        {/* Ambient Premium Mesh and Glow Blobs */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-12 left-10 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-24 right-10 -z-10 h-96 w-96 rounded-full bg-amber-400/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -z-10 h-80 w-80 rounded-full bg-orange-300/5 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 overflow-hidden rounded-2xl border border-amber-500/15 bg-slate-955 shadow-lg transition-all duration-300 hover:shadow-xl group">
            <div className="grid md:grid-cols-2">
              {/* Image side */}
              <div className="relative h-72 md:h-auto min-h-[320px] overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/60" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-black text-yellow-400 uppercase tracking-wider bg-slate-950/85 px-3 py-1.5 rounded-md border border-yellow-400/20 backdrop-blur-sm shadow-sm z-10 animate-pulse">
                  Berita Utama
                </span>
              </div>
              {/* Text side */}
              <div className="relative flex flex-col justify-center bg-gradient-to-br from-slate-900 via-slate-955 to-slate-900 p-8 text-white sm:p-10 border-t md:border-t-0 md:border-l border-amber-500/15">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.01)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none" />
                <div className="relative z-10">
                  <Badge className="mb-4 bg-yellow-400 text-slate-955 font-black border border-yellow-500/20 px-3 py-1 uppercase tracking-wider text-[10px]">
                    {featuredNews.category}
                  </Badge>
                  <h2 className="text-xl font-black leading-tight tracking-tight sm:text-2xl lg:text-3xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {featuredNews.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300 font-medium">
                    {featuredNews.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                      <Calendar size={14} className="text-yellow-400" />
                      {featuredNews.date}
                    </span>
                    <button className="inline-flex items-center gap-1.5 text-xs font-black text-yellow-400 hover:text-yellow-300 transition-colors duration-200 cursor-pointer">
                      Baca Selengkapnya <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                    activeCategory === cat
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 shadow-[0_4px_12px_rgba(245,209,48,0.15)] border border-amber-500/20"
                      : "bg-white border border-amber-200/50 text-slate-600 hover:bg-amber-50 hover:text-amber-700"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((news, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/35 hover:shadow-md flex flex-col"
              >
                {/* Image Header with Badge Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 animate-in fade-in duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant={news.category === "Fraksi" ? "warning" : "info"}
                      className="shadow-sm backdrop-blur-sm"
                    >
                      {news.category}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800 leading-snug group-hover:text-amber-700 transition-colors duration-200 line-clamp-2 h-12">
                      {news.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                      {news.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Calendar size={13} className="text-amber-500" />
                      {news.date}
                    </span>
                    <button className="font-extrabold text-amber-700 hover:text-amber-600 transition-colors duration-200 cursor-pointer">
                      Baca Berita &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
