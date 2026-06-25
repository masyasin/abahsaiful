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
  LineChart,
  Coins,
  Calculator,
  School,
  MapPin,
  UserCheck,
  Send,
  ThumbsUp,
  CheckCircle2,
  FileText,
  Share2,
  Download,
  X
} from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Calon Anggota DPRD Provinsi Banten | Fraksi Golkar",
    title: "Abah Saiful Milah",
    description: "Mengabdi lebih luas, berjuang untuk kemajuan dan kesejahteraan seluruh masyarakat Provinsi Banten melalui pembangunan merata dan pendidikan berkeadilan.",
    primaryBtnText: "Sampaikan Aspirasi Banten",
    primaryBtnHref: "/aspirasi",
    secondaryBtnText: "Lihat Rencana Kerja",
    secondaryBtnHref: "/program-kerja",
    image: "/H_saiful_milah.jpeg",
    type: "profile"
  },
  {
    id: 2,
    badge: "Aksi Nyata Skala Provinsi Banten",
    title: "Pembangunan & Kesejahteraan Banten",
    description: "Memperjuangkan pembangunan jalan provinsi yang mulus, jembatan penghubung antar-wilayah, pengendalian banjir terpadu, serta akses SMA/SMK negeri gratis.",
    primaryBtnText: "Lihat Program Provinsi",
    primaryBtnHref: "/program-kerja",
    secondaryBtnText: "Hubungi Kami",
    secondaryBtnHref: "/kontak",
    type: "program",
    image: "/slider_program.png"
  },
  {
    id: 3,
    badge: "Suara Rakyat Banten Amanah Kita",
    title: "Saluran Aspirasi Warga Banten",
    description: "Sampaikan usulan jalan provinsi, keluhan PPDB zonasi SMA/SMK, atau program sosial di wilayah Anda. Kami kawal langsung ke OPD Provinsi Banten.",
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

const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function Beranda() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAiTab, setActiveAiTab] = useState("media");

  // State for APBD Calculator
  const [apbdWeights, setApbdWeights] = useState({
    pendidikan: 8,
    infrastruktur: 7,
    pekerjaan: 8,
    banjir: 6,
  });
  const [mandatNama, setMandatNama] = useState("");
  const [mandatKota, setMandatKota] = useState("Kota Tangerang");
  const [showMandatCard, setShowMandatCard] = useState(false);
  const [copiedMandat, setCopiedMandat] = useState(false);
  const [mandatRegId, setMandatRegId] = useState(100000);

  // State for PPDB & Scholarship Checker
  const [ppdbWilayah, setPpdbWilayah] = useState("Kota Tangerang");
  const [ppdbSekolah, setPpdbSekolah] = useState("");
  const [ppdbIsChecking, setPpdbIsChecking] = useState(false);
  const [ppdbResult, setPpdbResult] = useState<any>(null);
  const [showBeasiswaForm, setShowBeasiswaForm] = useState(false);
  const [beasiswaNama, setBeasiswaNama] = useState("");
  const [beasiswaKelas, setBeasiswaKelas] = useState("10");
  const [beasiswaHp, setBeasiswaHp] = useState("");
  const [beasiswaSuccess, setBeasiswaSuccess] = useState(false);
  const [beasiswaTicket, setBeasiswaTicket] = useState("");

  // State for Pledge/Petition Wall
  const [petitions, setPetitions] = useState([
    { nama: "Budi Santoso", wilayah: "Ciledug", prioritas: "Sekolah SMA/SMK Gratis", waktu: "5 menit yang lalu" },
    { nama: "Siti Aminah", wilayah: "Larangan", prioritas: "Jalan Provinsi Mulus", waktu: "12 menit yang lalu" },
    { nama: "Hendra Wijaya", wilayah: "Karang Tengah", prioritas: "Kerja Gampang & UMKM", waktu: "25 menit yang lalu" },
    { nama: "Ahmad Fauzi", wilayah: "Cipondoh", prioritas: "Banjir Lintas Batas", waktu: "1 jam yang lalu" },
  ]);
  const [petitionNama, setPetitionNama] = useState("");
  const [petitionWilayah, setPetitionWilayah] = useState("Ciledug");
  const [petitionPrioritas, setPetitionPrioritas] = useState("Sekolah SMA/SMK Gratis");
  const [totalSupport, setTotalSupport] = useState(1420);
  const [newPetitionId, setNewPetitionId] = useState<number | null>(null);

  // Calculations for APBD
  const totalWeights = apbdWeights.pendidikan + apbdWeights.infrastruktur + apbdWeights.pekerjaan + apbdWeights.banjir;
  const nominalPendidikan = (apbdWeights.pendidikan / totalWeights) * 12;
  const nominalInfrastruktur = (apbdWeights.infrastruktur / totalWeights) * 12;
  const nominalPekerjaan = (apbdWeights.pekerjaan / totalWeights) * 12;
  const nominalBanjir = (apbdWeights.banjir / totalWeights) * 12;

  const sectors = [
    { key: "Pendidikan", val: nominalPendidikan, label: "Pendidikan SMA/SMK Gratis & Beasiswa", icon: GraduationCap, weightKey: "pendidikan" as const, desc: "Pembangunan SMA/SMK baru, rehabilitasi kelas, SPP gratis, dan Beasiswa Banten Pintar." },
    { key: "Infrastruktur", val: nominalInfrastruktur, label: "Infrastruktur Jalan Provinsi Mulus", icon: Hammer, weightKey: "infrastruktur" as const, desc: "Peningkatan kualitas jalan provinsi bebas lubang, perbaikan jembatan, dan lampu penerangan jalan." },
    { key: "Lapangan Kerja", val: nominalPekerjaan, label: "Lapangan Kerja & Kemitraan SMK", icon: ClipboardCheck, weightKey: "pekerjaan" as const, desc: "Sinergi kurikulum SMK dengan industri, pelatihan kerja bersertifikat, dan modal usaha UMKM." },
    { key: "Mitigasi Banjir", val: nominalBanjir, label: "Penanganan Banjir & Irigasi Terpadu", icon: HeartPulse, weightKey: "banjir" as const, desc: "Normalisasi sungai lintas batas daerah, pembangunan tanggul penahan, dan perbaikan pintu air makro." },
  ];

  // Sort sectors to find the highest
  const highestSector = [...sectors].sort((a, b) => b.val - a.val)[0];

  // Abah's dynamic commitments
  const getAbahCommitment = (sectorKey: string) => {
    switch (sectorKey) {
      case "Pendidikan":
        return "Saya siap memperjuangkan porsi anggaran pendidikan menengah atas agar merata. Fokus utama saya adalah menjamin tidak ada anak Banten yang putus sekolah tingkat SMA/SMK dengan melipatgandakan penerima Beasiswa Banten Pintar serta mempermudah sistem zonasi PPDB agar lebih adil bagi warga.";
      case "Infrastruktur":
        return "Infrastruktur jalan adalah urat nadi ekonomi. Saya akan mengawal ketat anggaran pemeliharaan jalan provinsi di Banten, memastikan tidak ada lagi jalan provinsi berlubang yang membahayakan pengendara, serta mendorong pembangunan jembatan penghubung yang kokoh.";
      case "Lapangan Kerja":
        return "Banten memiliki kawasan industri besar namun angka pengangguran lulusan muda masih menjadi tantangan. Saya akan memperjuangkan alokasi APBD untuk program link-and-match sekolah vokasi (SMK) dengan industri lokal, pelatihan kerja bersertifikat BNSP gratis, dan insentif bagi UMKM pemula.";
      case "Mitigasi Banjir":
      default:
        return "Banjir adalah masalah lintas batas wilayah yang memerlukan solusi tingkat provinsi. Saya berkomitmen mengawal alokasi anggaran normalisasi Daerah Aliran Sungai (DAS) lintas wilayah, optimalisasi pintu air makro, serta pembangunan embung dan waduk retensi air di area rawan.";
    }
  };

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

      {/* SECTION 1: Kalkulator APBD Harapan Rakyat Banten */}
      <section className="bg-gradient-to-b from-[#FFFDF2] via-[#FFFBE0] to-[#FFF9D0] py-20 border-b border-amber-500/10 relative overflow-hidden">
        <div className="absolute top-1/3 right-[10%] h-96 w-96 rounded-full bg-yellow-300/20 blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-amber-300/15 blur-[80px] -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
              <Coins size={12} className="text-amber-600 animate-bounce" />
              Gagasan Anggaran Partisipatif
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Kalkulator APBD <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Harapan Rakyat Banten</span>
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-500 max-w-2xl mx-auto">
              Banten memiliki estimasi APBD sebesar <strong>Rp 12 Triliun</strong>. Geser tingkat prioritas di bawah ini untuk mengalokasikan anggaran versi Anda, dan lihat komitmen perjuangan Abah Saiful Milah!
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left: Sliders */}
            <div className="lg:col-span-7 space-y-6 rounded-2xl border border-amber-500/15 bg-white/95 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
              <h3 className="text-lg font-black text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Calculator size={18} className="text-amber-600" />
                Tentukan Bobot Prioritas Anda (Skala 1 - 10)
              </h3>
              
              <div className="space-y-6">
                {sectors.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-700 flex items-center gap-2 text-sm sm:text-base">
                          <span className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                            <Icon size={16} />
                          </span>
                          {sec.label}
                        </span>
                        <span className="text-xs font-black px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-800">
                          Skala Prioritas: {apbdWeights[sec.weightKey]}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium leading-normal">{sec.desc}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-slate-400">Rendah</span>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={apbdWeights[sec.weightKey]}
                          onChange={(e) => {
                            setApbdWeights({
                              ...apbdWeights,
                              [sec.weightKey]: parseInt(e.target.value)
                            });
                          }}
                          className="flex-1 h-2 rounded-full bg-slate-100 accent-amber-500 cursor-pointer"
                        />
                        <span className="text-xs font-bold text-amber-600">Sangat Tinggi</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Real-time APBD Allocation Results & Commitment */}
            <div className="lg:col-span-5 space-y-6">
              {/* Live Nominal Card */}
              <div className="rounded-2xl border-2 border-amber-400 bg-white p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 rounded-bl-3xl bg-amber-400/10" />
                
                <h3 className="text-sm font-black uppercase text-amber-850 tracking-wider mb-4 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-500 animate-pulse" />
                  Estimasi Porsi Anggaran Anda
                </h3>

                <div className="space-y-4">
                  {sectors.map((sec) => (
                    <div key={sec.key} className="flex items-center justify-between border-b border-slate-50 pb-2.5 last:border-0 last:pb-0">
                      <span className="text-xs font-bold text-slate-600">{sec.key}</span>
                      <div className="text-right">
                        <span className="block text-sm font-black text-slate-800">
                          Rp {sec.val.toFixed(2)} Triliun
                        </span>
                        <span className="block text-[10px] font-bold text-amber-600">
                          {((sec.val / 12) * 100).toFixed(1)}% porsi APBD
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black text-slate-700">TOTAL APBD PROVINSI</span>
                  <span className="text-base font-black text-amber-700 bg-amber-500/10 px-3 py-1 rounded-lg">
                    Rp 12.00 Triliun
                  </span>
                </div>
              </div>

              {/* Abah's Digital Pledge Card */}
              <div className="rounded-2xl border border-amber-500/15 bg-gradient-to-br from-amber-50 to-yellow-50/50 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-amber-500">
                    <img src="/H_saiful_milah.jpeg" alt="Abah Saiful" className="h-full w-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Komitmen Abah Saiful Milah</h4>
                    <p className="text-[10px] text-amber-700 font-bold">Terfokus pada Sektor: {highestSector.key}</p>
                  </div>
                </div>
                
                <p className="text-xs text-slate-700 font-medium leading-relaxed italic border-l-2 border-amber-400 pl-3">
                  &ldquo;{getAbahCommitment(highestSector.key)}&rdquo;
                </p>

                {/* Form to submit and get Mandate Card */}
                <div className="mt-5 pt-4 border-t border-amber-200/30 space-y-3">
                  <p className="text-[11px] text-slate-500 font-bold">Salurkan aspirasi anggaran ini langsung menjadi Mandat Rakyat:</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda..."
                      value={mandatNama}
                      onChange={(e) => setMandatNama(e.target.value)}
                      className="flex-1 rounded-lg border border-amber-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                    <button
                      onClick={() => {
                        if (!mandatNama.trim()) {
                          alert("Silakan masukkan nama Anda untuk membuat Kartu Mandat.");
                          return;
                        }
                        setMandatRegId(Math.floor(Math.random() * 900000 + 100000));
                        setShowMandatCard(true);
                      }}
                      className="rounded-lg bg-slate-955 text-yellow-400 hover:bg-slate-900 px-4 py-2 text-xs font-black transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                    >
                      Kirim Mandat Rakyat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandate Card Modal */}
        {showMandatCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
            <div className="relative max-w-md w-full rounded-2xl border-2 border-amber-400 bg-gradient-to-b from-[#FFFDF5] to-[#FFFBE0] p-6 shadow-2xl animate-in zoom-in-95 duration-200">
              <button
                onClick={() => {
                  setShowMandatCard(false);
                  setCopiedMandat(false);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="text-center space-y-4 pt-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-2">
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="text-lg font-black text-slate-900">Mandat Berhasil Disalurkan!</h3>
                <p className="text-xs text-slate-500 font-semibold">
                  Terima kasih, <strong>{mandatNama}</strong>. Aspirasi anggaran Anda telah terekam secara digital dan siap diperjuangkan di DPRD Provinsi Banten.
                </p>

                {/* Digital Mandate Card Graphic */}
                <div className="rounded-xl border border-amber-300 bg-white p-5 shadow-inner text-left space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-10 w-10 rounded-bl-2xl bg-amber-400/20 flex items-center justify-center text-amber-700">
                    <Sparkles size={16} />
                  </div>
                  <div className="border-b border-slate-100 pb-2">
                    <span className="block text-[9px] font-black uppercase text-amber-700 tracking-widest">KARTU MANDAT RAKYAT BANTEN</span>
                    <span className="block text-xs font-bold text-slate-400">No. Registrasi: BMT-2026-{mandatRegId}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase">Nama Pemberi Mandat</span>
                    <span className="block text-sm font-black text-slate-800">{mandatNama}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase">Prioritas Utama APBD</span>
                    <span className="block text-sm font-black text-amber-750 flex items-center gap-1.5">
                      <highestSector.icon size={14} />
                      {highestSector.label}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase">Pesan Komitmen Perjuangan</span>
                    <span className="block text-[11px] text-slate-600 font-semibold leading-normal bg-amber-500/5 p-2.5 rounded-lg border border-amber-500/10">
                      Abah Saiful Milah berkomitmen memperjuangkan porsi anggaran <strong>{highestSector.key}</strong> senilai sekitar <strong>Rp {highestSector.val.toFixed(2)} Triliun</strong> untuk kepentingan rakyat Banten.
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[9px] text-slate-400 font-bold">
                    <span>DPRD PROVINSI BANTEN 2026-2031</span>
                    <span className="text-amber-600 font-black uppercase">SAIFUL MILAH</span>
                  </div>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    onClick={() => {
                      setCopiedMandat(true);
                      setTimeout(() => setCopiedMandat(false), 2000);
                      navigator.clipboard.writeText(`Saya telah mengirimkan Mandat APBD Banten kepada Abah Saiful Milah! Prioritas saya: ${highestSector.label}. Buat mandat Anda di: abahsaiful.sintechabadi.com`);
                    }}
                    className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-lg border border-amber-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                  >
                    <Share2 size={13} />
                    {copiedMandat ? "Tersalin!" : "Bagikan"}
                  </button>
                  <button
                    onClick={() => {
                      alert("Simulasi unduh kartu berhasil. File JPG sedang di-generate di latar belakang.");
                    }}
                    className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-black text-white hover:from-amber-600 hover:to-amber-700 cursor-pointer shadow-sm shadow-amber-500/20"
                  >
                    <Download size={13} />
                    Unduh Kartu
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 2: Portal Banten Cerdas (Advokasi Pendidikan SMA/SMK) */}
      <section className="bg-gradient-to-b from-[#FFF9D0] to-[#FFFDF5] py-20 border-b border-amber-500/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Left: Program Info */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-bold text-amber-800 uppercase tracking-widest">
                <School size={12} className="text-amber-600" />
                Wewenang Utama Provinsi
              </div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                Advokasi Pendidikan <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Banten Cerdas</span>
              </h2>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                Pengelolaan sekolah tingkat <strong>SMA, SMK, dan SLB</strong> merupakan wewenang langsung Pemerintah Provinsi Banten. Abah Saiful Milah berkomitmen penuh menghadirkan pendidikan menengah berkualitas yang berkeadilan bagi seluruh siswa.
              </p>

              {/* Core Manifestos list */}
              <div className="space-y-4 pt-2">
                {[
                  { title: "Zonasi PPDB Adil & Kuota Tambahan", desc: "Mendorong penambahan rombongan belajar (rombel) di sekolah negeri yang sangat diminati agar menampung lebih banyak siswa lokal." },
                  { title: "Program 1.000 Beasiswa Banten Pintar", desc: "Subsidi beasiswa penuh bagi anak dari keluarga kurang mampu untuk SMA/SMK swasta jika tidak lolos seleksi sekolah negeri." },
                  { title: "Link-and-Match Vokasi Industri", desc: "Kemitraan strategis antara SMK se-Banten dengan kawasan industri manufaktur & teknologi di Tangerang dan Cilegon untuk penyerapan kerja cepat." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Checker Widget */}
            <div className="lg:col-span-7 rounded-2xl border border-amber-500/15 bg-white/95 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
              <h3 className="text-lg font-black text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                <GraduationCap size={20} className="text-amber-600" />
                Interaktif: Cek Kuota & Daftar Aspirasi Pendidikan
              </h3>

              <div className="space-y-4 mt-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600">Wilayah Kabupaten/Kota</label>
                    <select
                      value={ppdbWilayah}
                      onChange={(e) => setPpdbWilayah(e.target.value)}
                      className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Kota Tangerang">Kota Tangerang</option>
                      <option value="Kabupaten Tangerang">Kabupaten Tangerang</option>
                      <option value="Kota Tangerang Selatan">Kota Tangerang Selatan</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600">Ketik Nama Sekolah (SMA/SMK)</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Contoh: SMAN 1, SMKN 3..."
                        value={ppdbSekolah}
                        onChange={(e) => setPpdbSekolah(e.target.value)}
                        className="w-full rounded-lg border border-amber-200 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                      <MapPin size={14} className="absolute right-3.5 top-3 text-amber-500" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (!ppdbSekolah.trim()) {
                      alert("Silakan ketik nama sekolah terlebih dahulu.");
                      return;
                    }
                    setPpdbIsChecking(true);
                    setPpdbResult(null);
                    setTimeout(() => {
                      setPpdbIsChecking(false);
                      setPpdbResult({
                        nama: ppdbSekolah.toUpperCase(),
                        dayaTampung: Math.floor(Math.random() * 120 + 240),
                        peminat: Math.floor(Math.random() * 300 + 400),
                        zonasiPersen: Math.floor(Math.random() * 15 + 50)
                      });
                    }, 1000);
                  }}
                  className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-3 text-xs font-black transition-all shadow-md shadow-amber-500/15 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {ppdbIsChecking ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : "Simulasikan Daya Tampung & Peluang Beasiswa"}
                </button>

                {/* Checker Results */}
                {ppdbResult && (
                  <div className="rounded-xl border border-amber-200 bg-amber-500/5 p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between border-b border-amber-200/30 pb-2">
                      <span className="text-xs font-black text-slate-800">{ppdbResult.nama} ({ppdbWilayah})</span>
                      <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider bg-amber-200/40 px-2 py-0.5 rounded">Status Terverifikasi</span>
                    </div>
                    <div className="grid gap-3 grid-cols-3 text-center">
                      <div className="bg-white/80 p-2 rounded-lg border border-amber-200/50">
                        <span className="block text-[10px] font-semibold text-slate-400">Daya Tampung</span>
                        <span className="block text-sm font-black text-slate-800">{ppdbResult.dayaTampung} Siswa</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-amber-200/50">
                        <span className="block text-[10px] font-semibold text-slate-400">Estimasi Pendaftar</span>
                        <span className="block text-sm font-black text-rose-600">{ppdbResult.peminat} Siswa</span>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-amber-200/50">
                        <span className="block text-[10px] font-semibold text-slate-400">Peluang Zonasi</span>
                        <span className="block text-sm font-black text-emerald-600">{ppdbResult.zonasiPersen}% Aman</span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-amber-200/30 text-xs leading-relaxed font-semibold text-slate-700">
                      <span className="font-black text-amber-700 block mb-1">Advokasi Abah Saiful Milah di Sekolah ini:</span>
                      Mengusulkan penambahan {Math.floor(ppdbResult.dayaTampung * 0.1)} kuota kursi melalui program kelas paralel (rombel tambahan) serta mengupayakan <strong>Beasiswa Banten Pintar</strong> bagi siswa berprestasi yang kurang mampu di sekolah ini.
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => {
                          setShowBeasiswaForm(true);
                          setBeasiswaSuccess(false);
                        }}
                        className="rounded-lg bg-slate-955 hover:bg-slate-900 text-yellow-400 px-4 py-2 text-xs font-black transition-colors cursor-pointer"
                      >
                        Ajukan Bantuan Beasiswa di Sini &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* Inline Scholarship Request Form */}
                {showBeasiswaForm && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3 mt-4 animate-in fade-in duration-200 relative">
                    <button
                      onClick={() => setShowBeasiswaForm(false)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Form Pengajuan Aspirasi Beasiswa Banten Pintar</h4>
                    
                    {beasiswaSuccess ? (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3.5 text-center space-y-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <CheckCircle2 size={18} />
                        </span>
                        <h5 className="text-xs font-bold text-slate-800">Aspirasi Beasiswa Berhasil Terkirim!</h5>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          Permohonan atas nama <strong>{beasiswaNama}</strong> telah terdaftar dengan nomor tiket <strong>{beasiswaTicket}</strong>. Tim kerja Abah Saiful akan segera menghubungi Anda.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500">Nama Lengkap Siswa</label>
                            <input
                              type="text"
                              placeholder="Ketik nama siswa..."
                              value={beasiswaNama}
                              onChange={(e) => setBeasiswaNama(e.target.value)}
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500">Kelas Saat Ini</label>
                            <select
                              value={beasiswaKelas}
                              onChange={(e) => setBeasiswaKelas(e.target.value)}
                              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none"
                            >
                              <option value="10">Kelas 10 (SMA/SMK)</option>
                              <option value="11">Kelas 11 (SMA/SMK)</option>
                              <option value="12">Kelas 12 (SMA/SMK)</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-500">No. WhatsApp Orang Tua / Wali</label>
                          <div className="flex gap-2">
                            <input
                              type="tel"
                              placeholder="Contoh: 0812xxxxxxxx"
                              value={beasiswaHp}
                              onChange={(e) => setBeasiswaHp(e.target.value)}
                              className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            />
                            <button
                              onClick={() => {
                                if (!beasiswaNama.trim() || !beasiswaHp.trim()) {
                                  alert("Silakan lengkapi nama dan nomor WhatsApp.");
                                  return;
                                }
                                setBeasiswaTicket(`BBP-2026-${Math.floor(Math.random() * 90000 + 10000)}`);
                                setBeasiswaSuccess(true);
                              }}
                              className="rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-955 px-4 py-2 text-xs font-black transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
                            >
                              <Send size={12} />
                              Kirim Pengajuan
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Dinding Petisi Suara Banten */}
      <section className="bg-gradient-to-b from-[#FFFDF5] to-white py-20 border-b border-amber-500/10 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left: Input Form */}
            <div className="lg:col-span-4 space-y-5 rounded-2xl border border-amber-500/15 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-2 pb-3 border-b border-slate-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-amber-655">
                  <UserCheck size={18} />
                </div>
                <div>
                  <h3 className="font-black text-slate-850 text-base">Ikut Berkomitmen</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Petisi Dukungan Banten Maju</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Nama Lengkap Anda</label>
                  <input
                    type="text"
                    placeholder="Contoh: Ahmad Maulana"
                    value={petitionNama}
                    onChange={(e) => setPetitionNama(e.target.value)}
                    className="w-full rounded-lg border border-amber-200 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-850 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Wilayah Kecamatan (Tangerang)</label>
                  <select
                    value={petitionWilayah}
                    onChange={(e) => setPetitionWilayah(e.target.value)}
                    className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Ciledug">Ciledug</option>
                    <option value="Larangan">Larangan</option>
                    <option value="Karang Tengah">Karang Tengah</option>
                    <option value="Cipondoh">Cipondoh</option>
                    <option value="Pinang">Pinang</option>
                    <option value="Tangerang">Tangerang</option>
                    <option value="Batuceper">Batuceper</option>
                    <option value="Neglasari">Neglasari</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Fokus Program Utama yang Didukung</label>
                  <select
                    value={petitionPrioritas}
                    onChange={(e) => setPetitionPrioritas(e.target.value)}
                    className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Sekolah SMA/SMK Gratis">Sekolah SMA/SMK Gratis & Adil</option>
                    <option value="Jalan Provinsi Mulus">Jalan Provinsi Mulus Bebas Lubang</option>
                    <option value="Kerja Gampang & UMKM">Kerja Gampang & Kemitraan SMK</option>
                    <option value="Banjir Lintas Batas">Penanganan Banjir Lintas Wilayah</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    if (!petitionNama.trim()) {
                      alert("Silakan masukkan nama Anda terlebih dahulu.");
                      return;
                    }
                    const newPetition = {
                      nama: petitionNama,
                      wilayah: petitionWilayah,
                      prioritas: petitionPrioritas,
                      waktu: "Baru saja"
                    };
                    
                    setPetitions([newPetition, ...petitions]);
                    setPetitionNama("");
                    setTotalSupport(prev => prev + 1);
                    setNewPetitionId(0); // Trigger animation on the first card
                    setTimeout(() => setNewPetitionId(null), 3000);
                  }}
                  className="w-full rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white py-3 text-xs font-black shadow-md shadow-amber-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ThumbsUp size={13} className="text-white" />
                  Kirim Komitmen Dukungan
                </button>
              </div>
            </div>

            {/* Right: Wall of Support */}
            <div className="lg:col-span-8 space-y-6">
              {/* Animated Counter Banner */}
              <div className="rounded-2xl border border-amber-400 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 p-5 shadow-sm text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-base font-black uppercase tracking-wider text-slate-955">Mandat Suara Rakyat Banten</h3>
                  <p className="text-xs text-slate-800 font-semibold mt-0.5">Jumlah warga Tangerang yang telah menitipkan komitmen bersama Abah Saiful Milah</p>
                </div>
                <div className="shrink-0 bg-slate-950 text-yellow-400 px-6 py-2.5 rounded-xl border border-slate-800 text-center shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                  <span className="block text-2xl font-black tracking-tight animate-in zoom-in-50 duration-300">{formatNumber(totalSupport)}</span>
                  <span className="block text-[8px] font-black uppercase tracking-widest text-amber-500">Warga Terverifikasi</span>
                </div>
              </div>

              {/* Grid of Pledges */}
              <div className="grid gap-4 sm:grid-cols-2">
                {petitions.map((p, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "relative overflow-hidden rounded-xl border border-amber-200/60 bg-white/95 p-4.5 shadow-sm transition-all duration-500 backdrop-blur-sm flex flex-col justify-between",
                      idx === newPetitionId ? "border-amber-400 ring-2 ring-amber-400/50 bg-amber-500/5 scale-[1.03] shadow-md animate-bounce" : ""
                    )}
                  >
                    <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-amber-500 to-yellow-400" />
                    
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-slate-50 pb-2 mb-2">
                        <span className="text-xs font-black text-slate-800">{p.nama}</span>
                        <span className="text-[9px] font-semibold text-slate-400">{p.waktu}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                        &ldquo;Saya menitipkan komitmen untuk diperjuangkan di tingkat Provinsi Banten oleh Abah Saiful Milah.&rdquo;
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold">
                      <span className="text-slate-400 uppercase">Kec. {p.wilayah}</span>
                      <Badge variant="warning" className="text-[9px] px-2 py-0.5 border border-amber-500/10 font-black">
                        {p.prioritas}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
