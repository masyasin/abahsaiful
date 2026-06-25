"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  Hammer, 
  GraduationCap, 
  HeartPulse, 
  ClipboardCheck, 
  Camera, 
  ChevronRight,
  Brain,
  TrendingUp,
  Sparkles,
  Newspaper,
  LineChart
} from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Ketua Fraksi Golkar DPRD Kota Tangerang",
    title: "Abah Saiful Milah",
    description: "Berjuang untuk masyarakat Kota Tangerang melalui program kerja yang terukur, aspirasi yang didengar, dan pembangunan yang merata.",
    primaryBtnText: "Sampaikan Aspirasi Resmi",
    primaryBtnHref: "/aspirasi",
    secondaryBtnText: "Lihat Program Kerja",
    secondaryBtnHref: "/program-kerja",
    image: "/H_saiful_milah.jpeg",
    type: "profile"
  },
  {
    id: 2,
    badge: "Aksi Nyata & Kerja Terukur",
    title: "Pembangunan & Kesejahteraan Rakyat",
    description: "Mengawal pembangunan infrastruktur jalan, jembatan, irigasi desa, serta memperjuangkan dana beasiswa pendidikan bagi siswa berprestasi di Kota Tangerang.",
    primaryBtnText: "Lihat Semua Program",
    primaryBtnHref: "/program-kerja",
    secondaryBtnText: "Hubungi Kami",
    secondaryBtnHref: "/kontak",
    type: "program",
    image: "/slider_program.png"
  },
  {
    id: 3,
    badge: "Suara Rakyat Adalah Amanah",
    title: "Dengar, Kawal, dan Perjuangkan Aspirasi",
    description: "Laporkan keluhan pembangunan, layanan kesehatan, atau usulan bantuan sosial di wilayah Anda. Kami kawal langsung ke tingkat dinas terkait.",
    primaryBtnText: "Kirim Aspirasi Sekarang",
    primaryBtnHref: "/aspirasi",
    secondaryBtnText: "Peta Pembangunan",
    secondaryBtnHref: "/peta-wilayah",
    type: "aspirasi",
    image: "/slider_aspirasi.png"
  }
];

const stats = [
  { label: "Program Kerja", value: "4" },
  { label: "Aspirasi Masuk", value: "128" },
  { label: "Aspirasi Selesai", value: "67" },
  { label: "Fraksi Anggota", value: "12" },
];

const programs = [
  { judul: "Peningkatan Infrastruktur Desa", kategori: "Infrastruktur", progress: 100, status: "selesai" },
  { judul: "Beasiswa Pendidikan Anak Negeri", kategori: "Pendidikan", progress: 65, status: "berjalan" },
  { judul: "Program UMKM Naik Kelas", kategori: "Ekonomi", progress: 40, status: "berjalan" },
  { judul: "Layanan Kesehatan Keliling", kategori: "Kesehatan", progress: 0, status: "direncanakan" },
];

const activities = [
  { judul: "Rapat Komisi IV Bahas Anggaran Pendidikan", tanggal: "2026-06-20", kategori: "Komisi IV" },
  { judul: "Sosialisasi Program Beasiswa di Sidoarjo", tanggal: "2026-06-15", kategori: "Fraksi" },
  { judul: "Kunjungan Kerja ke Dapil Ciledug", tanggal: "2026-06-10", kategori: "Dapil" },
];

export default function Beranda() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAiTab, setActiveAiTab] = useState("media");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Dynamic Hero Slider with premium Gold-Yellow Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF2] via-[#FFF9CC] to-[#FFF49E] py-20 lg:py-28 border-b border-amber-400/30 text-slate-900 min-h-[500px] flex items-center">
        {/* Decorative background glows */}
        <div className="absolute right-1/4 top-10 -z-10 h-80 w-80 rounded-full bg-white/50 blur-[120px]" />
        <div className="absolute bottom-10 left-1/4 -z-10 h-80 w-80 rounded-full bg-amber-200/40 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          {slides.map((slide, idx) => {
            if (idx !== currentSlide) return null;
            return (
              <div
                key={slide.id}
                className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16 transition-all duration-700 ease-in-out animate-in fade-in zoom-in-95"
              >
                {/* Image / Icon Panel */}
                <div className="shrink-0 order-1 lg:order-2 w-full lg:w-auto">
                  {slide.type === "profile" ? (
                    <div className="relative mx-auto h-52 w-52 overflow-hidden rounded-full border-4 border-amber-500 p-1.5 shadow-[0_10px_35px_rgba(217,119,6,0.2)] ring-4 ring-white/60 lg:h-64 lg:w-64 transition-transform duration-500 hover:scale-[1.03]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full rounded-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-amber-400', 'to-amber-600');
                          (e.target as HTMLImageElement).parentElement!.innerText = 'SM';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="relative mx-auto h-52 w-72 overflow-hidden rounded-2xl border-4 border-amber-500/30 p-1 bg-white shadow-[0_10px_35px_rgba(217,119,6,0.15)] lg:h-60 lg:w-80 transition-transform duration-500 hover:scale-[1.03]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full rounded-xl object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-amber-400', 'to-amber-600');
                          (e.target as HTMLImageElement).parentElement!.innerText = 'Image';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Text Content Panel */}
                <div className="text-center lg:text-left flex-1 order-2 lg:order-1">
                  <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-950 font-black uppercase tracking-widest border border-amber-600/20 px-4 py-1.5 text-xs">
                    {slide.badge}
                  </Badge>
                  <h1 className="text-3.5xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 font-semibold md:text-lg">
                    {slide.description}
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                    <Link
                      href={slide.primaryBtnHref}
                      className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-7.5 py-4 text-sm font-black text-white shadow-[0_4px_20px_rgba(217,119,6,0.35)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(217,119,6,0.45)] cursor-pointer"
                    >
                      {slide.primaryBtnText}
                    </Link>
                    <Link
                      href={slide.secondaryBtnHref}
                      className="inline-flex items-center gap-2.5 rounded-xl border border-amber-300 bg-white/90 px-7.5 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:bg-white hover:border-amber-500/50"
                    >
                      {slide.secondaryBtnText}
                      <ArrowRight size={16} className="text-amber-600" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Slider controls */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300 bg-white/90 text-slate-700 hover:bg-white shadow-sm transition-colors cursor-pointer"
            >
              &larr;
            </button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-350 cursor-pointer",
                    currentSlide === idx ? "w-6 bg-amber-650" : "w-2.5 bg-amber-400/40"
                  )}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300 bg-white/90 text-slate-700 hover:bg-white shadow-sm transition-colors cursor-pointer"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* AI Executive Dashboard (Analisis Media & Kepuasan Dapil) */}
      <section className="border-b border-amber-500/10 bg-gradient-to-b from-[#FFF9CC] via-[#FFFDF2] to-[#FFF9CC] py-20 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 right-0 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl -z-10" />
        <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-400/10 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
              <Sparkles size={12} className="text-amber-600 animate-pulse" />
              Pusat Analisis Data AI Terpadu
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              AI Executive <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Dashboard</span>
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-500 max-w-2xl mx-auto">
              Sistem kecerdasan buatan terintegrasi untuk melacak reputasi media, efisiensi kerja, serta tingkat kepuasan warga di seluruh wilayah dapil secara transparan.
            </p>

            {/* Premium Dynamic Tab Switcher */}
            <div className="mt-8 inline-flex rounded-xl bg-slate-900 p-1.5 shadow-md border border-slate-800">
              <button
                onClick={() => setActiveAiTab("media")}
                className={cn(
                  "rounded-lg px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",
                  activeAiTab === "media"
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-955 shadow-sm"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Analisis Media
              </button>
              <button
                onClick={() => setActiveAiTab("dapil")}
                className={cn(
                  "rounded-lg px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",
                  activeAiTab === "dapil"
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-955 shadow-sm"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Kepuasan & Kinerja Dapil
              </button>
            </div>
          </div>

          {activeAiTab === "media" ? (
            /* Tab 1: Analisis Sentimen & Topik Media */
            <div className="grid gap-8 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Kartu 1: Analisis Sentimen */}
              <div className="group rounded-2xl border border-amber-500/15 bg-white/95 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/25 text-amber-655">
                      <LineChart size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight">Sentimen Liputan Media</h3>
                      <p className="text-[11px] text-slate-400 font-semibold">Berdasarkan 48 Artikel Berita (30 Hari Terakhir)</p>
                    </div>
                  </div>

                  {/* Circular Sentiment Bar */}
                  <div className="relative my-8 flex items-center justify-center">
                    <svg className="w-36 h-36 transform -rotate-90">
                      <circle
                        cx="72"
                        cy="72"
                        r="60"
                        stroke="#f5f5f5"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="60"
                        stroke="url(#goldGradient)"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="377"
                        strokeDashoffset="22"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-3xl font-black tracking-tight text-slate-900">94.2%</span>
                      <span className="block text-[10px] font-black uppercase text-amber-655 tracking-wider mt-0.5">Positif</span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-2">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-amber-500" /> Positif (Apresiasi Kerja)
                      </span>
                      <span className="text-slate-800 font-bold">94.2%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-300" /> Netral (Rilis Kegiatan)
                      </span>
                      <span className="text-slate-800 font-bold">5.8%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-400" /> Negatif (Kritik/Keluhan)
                      </span>
                      <span className="text-slate-800 font-bold">0.0%</span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-normal mt-6 pt-4 border-t border-slate-100">
                  Pemberitaan didominasi nada positif terkait advokasi aspirasi infrastruktur dan respon tanggap bantuan sosial.
                </p>
              </div>

              {/* Kartu 2: Topik Utama */}
              <div className="group rounded-2xl border border-amber-500/15 bg-white/95 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/25 text-amber-655">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight">Sebaran Topik Hangat</h3>
                      <p className="text-[11px] text-slate-400 font-semibold">Peta Kata Kunci Liputan Utama</p>
                    </div>
                  </div>

                  <div className="space-y-4 my-6">
                    {[
                      { label: "Pembangunan Jalan & Irigasi", count: 18, pct: 100 },
                      { label: "Advokasi Beasiswa Siswa", count: 12, pct: 66 },
                      { label: "Bantuan Sosial & Sembako Dapil", count: 9, pct: 50 },
                      { label: "Sidang Paripurna & Anggaran", count: 6, pct: 33 },
                      { label: "Kemitraan UMKM Tradisional", count: 3, pct: 16 },
                    ].map((topic, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-700">{topic.label}</span>
                          <span className="font-black text-amber-600">{topic.count} Berita</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-1000 ease-out" 
                            style={{ width: `${topic.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-normal pt-4 border-t border-slate-100">
                  Data dikompilasi secara real-time berdasarkan frekuensi kata kunci yang muncul di rilis media lokal resmi.
                </p>
              </div>

              {/* Kartu 3: Rangkuman Cerdas AI */}
              <div className="group rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,191,36,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,191,36,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20 text-yellow-400">
                        <Brain size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white leading-tight">Ikhtisar Kecerdasan AI</h3>
                        <p className="text-[10px] text-yellow-400/80 font-black tracking-widest uppercase">Live Engine Active</p>
                      </div>
                    </div>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_#fbbf24] animate-pulse" />
                  </div>

                  <div className="rounded-xl border border-amber-500/15 bg-white/[0.03] p-5 backdrop-blur-sm my-4">
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      &ldquo;Analisis kecerdasan media terhadap 48 pemberitaan bulan ini mengonfirmasi komitmen kuat <strong className="text-yellow-400 font-bold">H. Saiful Milah</strong> dalam percepatan pembangunan fisik di Larangan, rehabilitasi jalan di Ciledug, serta advokasi dana pendidikan daerah. Narasi publik sangat positif, menyoroti efisiensi realisasi program pokok pikiran (pokir) dewan serta aksi respon tanggap bantuan sosial yang cepat.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between mt-6">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Terakhir Diperbarui: Hari Ini</span>
                  <Link
                    href="/berita"
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    Lihat Kliping Berita <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Tab 2: Indeks Kinerja & Kepuasan Dapil */
            <div className="grid gap-8 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Kartu 1: Indeks Kepuasan Dapil */}
              <div className="group rounded-2xl border border-amber-500/15 bg-white/95 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/25 text-amber-655">
                      <ClipboardCheck size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight">Indeks Kepuasan Konstituen</h3>
                      <p className="text-[11px] text-slate-400 font-semibold">Berdasarkan 350+ Responden Dapil 1</p>
                    </div>
                  </div>

                  {/* Circular Satisfaction Bar */}
                  <div className="relative my-8 flex items-center justify-center">
                    <svg className="w-36 h-36 transform -rotate-90">
                      <circle
                        cx="72"
                        cy="72"
                        r="60"
                        stroke="#f5f5f5"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      <circle
                        cx="72"
                        cy="72"
                        r="60"
                        stroke="url(#satisfactionGradient)"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray="377"
                        strokeDashoffset="28"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="satisfactionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-3xl font-black tracking-tight text-slate-900">92.5%</span>
                      <span className="block text-[8px] font-black uppercase text-emerald-655 tracking-wider mt-0.5">Sangat Puas</span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-2">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" /> Sangat Puas / Puas
                      </span>
                      <span className="text-slate-800 font-bold">92.5%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-slate-300" /> Cukup Puas
                      </span>
                      <span className="text-slate-800 font-bold">6.1%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-400" /> Kurang Puas
                      </span>
                      <span className="text-slate-800 font-bold">1.4%</span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-normal mt-6 pt-4 border-t border-slate-100">
                  Indeks kepuasan dihitung dari penyelesaian laporan pembangunan serta aksi tanggap bencana dan bantuan sosial di lapangan.
                </p>
              </div>

              {/* Kartu 2: Kepuasan Per Wilayah */}
              <div className="group rounded-2xl border border-amber-500/15 bg-white/95 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/25 text-amber-655">
                      <HeartPulse size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight">Kepuasan Wilayah Dapil</h3>
                      <p className="text-[11px] text-slate-400 font-semibold">Rincian Per Kecamatan Terlayani</p>
                    </div>
                  </div>

                  <div className="space-y-4 my-6">
                    {[
                      { label: "Kecamatan Larangan", score: "93.2%", pct: 93 },
                      { label: "Kecamatan Karang Tengah", score: "92.5%", pct: 92 },
                      { label: "Kecamatan Ciledug", score: "91.8%", pct: 91 },
                      { label: "Aksi Responsivitas Tim", score: "96.8%", pct: 96 },
                    ].map((area, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-700">{area.label}</span>
                          <span className="font-black text-emerald-600">{area.score}</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-1000 ease-out" 
                            style={{ width: `${area.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-normal pt-4 border-t border-slate-100">
                  Responsivitas Tim mengukur rata-rata kecepatan waktu verifikasi hingga eksekusi aspirasi warga (24-48 jam).
                </p>
              </div>

              {/* Kartu 3: Diagnosis Kinerja AI */}
              <div className="group rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(52,211,153,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,211,153,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
                        <Brain size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white leading-tight">Diagnosis Kinerja AI</h3>
                        <p className="text-[10px] text-emerald-400 font-black tracking-widest uppercase">Analysis Complete</p>
                      </div>
                    </div>
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
                  </div>

                  <div className="rounded-xl border border-emerald-500/15 bg-white/[0.03] p-5 backdrop-blur-sm my-4">
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      &ldquo;Berdasarkan analisis diagnostik terhadap 350+ aspirasi warga yang masuk dan diselesaikan lewat portal, AI mengukur indeks kepuasan konstituen di Dapil 1 Kota Tangerang berada pada tingkat <strong className="text-emerald-400 font-bold">Sangat Memuaskan (92.5%)</strong>. Sektor rehabilitasi infrastruktur jalan lingkungan dan responsivitas program beasiswa mencatat tingkat apresiasi tertinggi.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between mt-6">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Terakhir Diperbarui: Hari Ini</span>
                  <Link
                    href="/aspirasi"
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                  >
                    Kawal Aspirasi Warga <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Dasbor Aksi Nyata (Performance & Pokir Tracker) */}
      <section className="border-b border-amber-500/10 bg-gradient-to-b from-[#FFF9CC] to-[#FFFDF2] py-20 relative overflow-hidden">
        {/* Ambient Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
              Laporan Kinerja Parlemen
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Dasbor Aksi Nyata & Pokir
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              Bukti kerja nyata dan pengawalan pembangunan untuk kesejahteraan rakyat Kota Tangerang.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Infrastruktur Jalan", value: "14.2 Km", desc: "Jalan desa & irigasi direhabilitasi", icon: Hammer, color: "from-blue-500/10 to-indigo-500/10 text-indigo-600 border-indigo-500/20" },
              { label: "Beasiswa Pendidikan", value: "350+", desc: "Siswa kurang mampu terbantu", icon: GraduationCap, color: "from-amber-500/10 to-yellow-500/10 text-amber-600 border-amber-500/20" },
              { label: "Layanan Kesehatan", value: "24 Unit", desc: "Posyandu baru & alkes disalurkan", icon: HeartPulse, color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-500/20" },
              { label: "Aspirasi Direalisasikan", value: "94%", desc: "Dari 128 laporan warga terlayani", icon: ClipboardCheck, color: "from-rose-500/10 to-orange-500/10 text-rose-600 border-rose-500/20" },
            ].map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
                >
                  <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-3xl bg-gradient-to-tr opacity-5 group-hover:scale-110 transition-transform duration-300" />
                  <div className={cn("mb-5 flex h-12 w-12 items-center justify-center rounded-xl border bg-gradient-to-br shadow-inner", stat.color)}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight text-slate-900">{stat.value}</h3>
                  <p className="mt-1.5 text-sm font-bold text-slate-800">{stat.label}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-400 leading-relaxed">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Kerja section with warm luxury cream-gold gradient */}
      <section className="bg-gradient-to-b from-[#FFFDF2] via-[#FFFBE0] to-[#FFF9D0] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <div className="h-1.5 w-16 bg-gradient-to-r from-amber-500 to-yellow-400 mb-3 rounded-full shadow-sm" />
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Program Kerja <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Unggulan</span>
              </h2>
            </div>
            <Link
              href="/program-kerja"
              className="text-sm font-extrabold text-amber-700 hover:text-amber-655 transition-colors duration-200 flex items-center gap-1"
            >
              Lihat Semua Program &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <div
                key={p.judul}
                className="group rounded-2xl border border-amber-500/15 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_15px_30px_-5px_rgba(217,119,6,0.15)] backdrop-blur-sm"
              >
                <div className="mb-4">
                  <Badge variant={p.status === "selesai" ? "success" : p.status === "berjalan" ? "warning" : "default"}>
                    {p.status}
                  </Badge>
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2 h-12 leading-snug">{p.judul}</h3>
                <p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider">{p.kategori}</p>
                <ProgressBar value={p.progress} status={p.status} className="mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dinding Transparansi Aspirasi */}
      <section className="bg-gradient-to-b from-[#FFF9D0] to-[#FFFDF5] py-24 border-t border-amber-500/10 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="h-1.5 w-16 bg-gradient-to-r from-amber-500 to-yellow-400 mb-3 rounded-full shadow-sm" />
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Dinding Aspirasi <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Rakyat</span>
              </h2>
              <p className="mt-1.5 text-sm font-semibold text-slate-500">
                Memantau pengawalan dan realisasi aspirasi yang masuk langsung dari warga secara transparan.
              </p>
            </div>
            <Link
              href="/aspirasi"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-yellow-400 shadow-sm transition-all duration-200 hover:bg-slate-900 hover:scale-[1.02] cursor-pointer self-start md:self-auto animate-pulse"
            >
              Suarakan Aspirasi Anda <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { judul: "Perbaikan Jalan Berlubang di Kelurahan Sudimara", status: "proses", kategori: "Infrastruktur", tanggal: "2 jam yang lalu" },
              { judul: "Permohonan Beasiswa Pendidikan Siswa SMA Kurang Mampu", status: "selesai", kategori: "Pendidikan", tanggal: "1 hari yang lalu" },
              { judul: "Pengadaan Layanan Ambulans Gratis Wilayah Larangan", status: "baru", kategori: "Kesehatan", tanggal: "5 jam yang lalu" },
              { judul: "Pelatihan Digital Marketing bagi Pelaku UMKM Ciledug", status: "proses", kategori: "Ekonomi", tanggal: "2 hari yang lalu" },
              { judul: "Normalisasi Saluran Irigasi Sawah di Karang Tengah", status: "selesai", kategori: "Infrastruktur", tanggal: "3 hari yang lalu" },
              { judul: "Penerangan Jalan Umum di Jalur Protokol Kecamatan Larangan", status: "baru", kategori: "Infrastruktur", tanggal: "12 jam yang lalu" },
            ].map((asp) => (
              <div
                key={asp.judul}
                className="group relative overflow-hidden rounded-2xl border border-amber-200/60 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-md hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-amber-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Badge variant={asp.status === "selesai" ? "success" : asp.status === "proses" ? "warning" : "info"}>
                    {asp.status}
                  </Badge>
                  <span className="text-xs font-bold text-slate-400">{asp.tanggal}</span>
                </div>
                <h3 className="font-bold text-slate-800 leading-snug group-hover:text-amber-700 transition-colors duration-200 line-clamp-2 h-12">
                  {asp.judul}
                </h3>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider">{asp.kategori}</span>
                  <span className="text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-0.5">
                    Detail Pengawalan &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kegiatan Terbaru section with gold-to-white transition */}
      <section className="py-24 bg-gradient-to-b from-[#FFF9D0] via-[#FFFDF5] to-white border-t border-amber-500/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="h-1.5 w-16 bg-gradient-to-r from-amber-500 to-yellow-400 mb-3 rounded-full shadow-sm" />
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Agenda & Kegiatan <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Terbaru</span>
            </h2>
          </div>
          <div className="space-y-5">
            {activities.map((a) => (
              <div
                key={a.judul}
                className="group flex items-start gap-5 rounded-2xl border border-amber-500/10 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_12px_25px_-5px_rgba(217,119,6,0.12)] hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 text-amber-600 transition-transform duration-300 group-hover:scale-105 shadow-inner shadow-amber-500/5">
                  <Calendar size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-850 group-hover:text-amber-600 transition-colors duration-200 leading-snug">{a.judul}</h3>
                  <div className="mt-2.5 flex flex-wrap items-center gap-3.5 text-xs text-slate-400 font-semibold">
                    <span className="font-medium">{a.tanggal}</span>
                    <span className="text-slate-200">&bull;</span>
                    <Badge variant="info">{a.kategori}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI News Analytics Section has been moved below Hero Slider */}

      {/* Galeri Kilas Aksi Lapangan */}
      <section className="bg-gradient-to-b from-[#FFFDF5] to-white py-24 border-t border-amber-500/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
              Dokumentasi Kerja Nyata
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Kilas Aksi Lapangan
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              Dokumentasi langsung kegiatan penyerapan aspirasi, kunjungan kerja, dan aksi sosial di lapangan.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Dialog Aspirasi Bersama Konstituen Ciledug", desc: "Mendengar langsung usulan warga terkait penataan lingkungan.", image: "/images/kegiatan_reses.png" },
              { title: "Peninjauan Pembangunan Infrastruktur Jalan", desc: "Memastikan kualitas proyek jalan desa berjalan sesuai standar pokir.", image: "/images/kegiatan_infrastruktur.png" },
              { title: "Rapat Paripurna DPRD Kota Tangerang", desc: "Menyuarakan kepentingan anggaran fraksi Golkar untuk rakyat.", image: "/images/kegiatan_paripurna.png" },
              { title: "Penyaluran Paket Bantuan Sosial Warga", desc: "Membagikan bantuan bahan pokok secara langsung kepada warga yang membutuhkan di dapil.", image: "/images/kegiatan_sosial.png" },
              { title: "Kunjungan Kemitraan dan Dialog UMKM", desc: "Mendukung pengembangan usaha mikro lokal dan mendiskusikan tantangan usahanya.", image: "/images/kegiatan_umkm.png" },
              { title: "Silaturahmi Tokoh Agama dan Masyarakat", desc: "Mempererat persaudaraan umat dan menyerap nasihat pembangunan dari sesepuh daerah.", image: "/images/kegiatan_keagamaan.png" },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-amber-200/50 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 aspect-[4/3] w-full"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                {/* Premium Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-yellow-400 uppercase tracking-wider mb-2 bg-yellow-400/10 px-2 py-0.5 rounded-sm border border-yellow-400/20">
                    <Camera size={10} />
                    Aksi Nyata
                  </span>
                  <h3 className="font-bold text-base leading-snug text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
