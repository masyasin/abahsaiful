"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Send, CheckCircle, Clock, AlertCircle, Check } from "lucide-react";

const chartData = [
  { name: "Infrastruktur", value: 44, color: "#0f172a" },
  { name: "Pendidikan", value: 36, color: "#F5D130" },
  { name: "Ekonomi", value: 22, color: "#d97706" },
  { name: "Kesehatan", value: 18, color: "#ca8a04" },
  { name: "Lainnya", value: 8, color: "#64748b" },
];

const recentAspirations = [
  { id: 1, judul: "Jalan rusak di Desa Tanjung", status: "baru", kategori: "Infrastruktur", tanggal: "2026-06-22" },
  { id: 2, judul: "Beasiswa untuk siswa SMA", status: "proses", kategori: "Pendidikan", tanggal: "2026-06-20" },
  { id: 3, judul: "Bantuan modal UMKM", status: "selesai", kategori: "Ekonomi", tanggal: "2026-06-18" },
  { id: 4, judul: "Puskesmas keliling", status: "baru", kategori: "Kesehatan", tanggal: "2026-06-15" },
  { id: 5, judul: "Perbaikan irigasi sawah", status: "proses", kategori: "Infrastruktur", tanggal: "2026-06-12" },
];

const statusVariant: Record<string, "info" | "warning" | "success" | "danger"> = {
  baru: "info",
  proses: "warning",
  selesai: "success",
  terlambat: "danger",
};

export default function Aspirasi() {
  const [form, setForm] = useState({
    nama: "",
    kontak: "",
    judul: "",
    konten: "",
    lokasi: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [aspirations, setAspirations] = useState([
    { id: 1, judul: "Jalan rusak di Desa Tanjung", status: "baru", kategori: "Infrastruktur", tanggal: "2026-06-22", published: false, forwarded: false },
    { id: 2, judul: "Beasiswa untuk siswa SMA", status: "proses", kategori: "Pendidikan", tanggal: "2026-06-20", published: false, forwarded: false },
    { id: 3, judul: "Bantuan modal UMKM", status: "selesai", kategori: "Ekonomi", tanggal: "2026-06-18", published: false, forwarded: false },
    { id: 4, judul: "Puskesmas keliling", status: "baru", kategori: "Kesehatan", tanggal: "2026-06-15", published: false, forwarded: false },
    { id: 5, judul: "Perbaikan irigasi sawah", status: "proses", kategori: "Infrastruktur", tanggal: "2026-06-12", published: false, forwarded: false },
  ]);

  const handlePublish = (id: number) => {
    setAspirations(prev =>
      prev.map(a => (a.id === id ? { ...a, published: true } : a))
    );
  };

  const handleForward = (id: number) => {
    setAspirations(prev =>
      prev.map(a => (a.id === id ? { ...a, forwarded: true } : a))
    );
  };

  const getOpdName = (kategori: string) => {
    switch (kategori) {
      case "Infrastruktur":
        return "Dinas PUPR";
      case "Pendidikan":
        return "Dinas Pendidikan";
      case "Ekonomi":
        return "Dinas Koperasi & UMKM";
      case "Kesehatan":
        return "Dinas Kesehatan";
      default:
        return "Dinas Terkait";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Aspirasi Warga</h1>
          <p className="mt-3 text-base font-semibold text-slate-800 max-w-2xl leading-relaxed">
            Saluran resmi penyaluran aspirasi, keluhan, dan saran pembangunan Kota Tangerang.
          </p>
        </div>
      </section>

      <div className="relative overflow-hidden bg-slate-50/60">
        {/* Ambient Premium Mesh and Glow Blobs */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-12 left-10 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-24 right-10 -z-10 h-96 w-96 rounded-full bg-amber-400/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -z-10 h-80 w-80 rounded-full bg-orange-300/5 blur-[120px] pointer-events-none" />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-amber-200/60 bg-white p-6 sm:p-8 shadow-sm transition-all duration-350 hover:shadow-md">
                <h2 className="mb-6 text-lg font-bold text-slate-800">
                  Distribusi Aspirasi Masuk
                </h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {chartData.map((item) => (
                    <div key={item.name} className="text-center">
                      <div
                        className="mx-auto h-3 w-3 rounded-full shadow-sm"
                        style={{ backgroundColor: item.color }}
                      />
                      <p className="mt-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">{item.name}</p>
                      <p className="text-sm font-black text-slate-800 mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-amber-200/60 bg-white p-6 sm:p-8 shadow-sm transition-all duration-355 hover:shadow-md">
                <h2 className="mb-6 text-lg font-bold text-slate-800">
                  Sampaikan Aspirasi
                </h2>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={48} className="mb-4 text-amber-500" />
                    <h3 className="text-lg font-bold text-slate-800">
                      Aspirasi Terkirim!
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 font-medium">
                      Terima kasih. Aspirasi Anda telah terdaftar dan akan segera kami tindak lanjuti.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ nama: "", kontak: "", judul: "", konten: "", lokasi: "" });
                      }}
                      className="mt-6 text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors"
                    >
                      Kirim Aspirasi Lain &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          value={form.nama}
                          onChange={(e) => setForm({ ...form, nama: e.target.value })}
                          className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Kontak (WA/Email)
                        </label>
                        <input
                          type="text"
                          value={form.kontak}
                          onChange={(e) => setForm({ ...form, kontak: e.target.value })}
                          className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                          placeholder="Nomor WA atau Email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Judul Aspirasi
                      </label>
                      <input
                        type="text"
                        required
                        value={form.judul}
                        onChange={(e) => setForm({ ...form, judul: e.target.value })}
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        placeholder="Judul singkat aspirasi Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Isi Aspirasi
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.konten}
                        onChange={(e) => setForm({ ...form, konten: e.target.value })}
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        placeholder="Deskripsikan aspirasi Anda secara detail..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Lokasi Wilayah
                      </label>
                      <input
                        type="text"
                        value={form.lokasi}
                        onChange={(e) => setForm({ ...form, lokasi: e.target.value })}
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        placeholder="Kelurahan/Kecamatan"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 px-6 py-3.5 text-sm font-bold text-amber-950 shadow-[0_4px_20px_rgba(245,209,48,0.2)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_4px_25px_rgba(245,209,48,0.3)] cursor-pointer"
                    >
                      <Send size={16} />
                      Kirim Aspirasi Resmi
                    </button>
                  </form>
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
                Aspirasi Terbaru
              </h2>
            </div>
            <div className="space-y-4">
              {aspirations.map((a) => (
                <div
                  key={a.id}
                  className="group flex items-start gap-4 rounded-2xl border border-amber-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:border-amber-500/35 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/15 text-amber-600">
                    {a.status === "selesai" ? (
                      <CheckCircle size={20} className="text-amber-500" />
                    ) : a.status === "proses" ? (
                      <Clock size={20} className="text-amber-655" />
                    ) : (
                      <AlertCircle size={20} className="text-amber-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-bold text-slate-850 group-hover:text-amber-700 transition-colors duration-200">{a.judul}</h3>
                      <Badge variant={statusVariant[a.status] || "default"}>
                        {a.status}
                      </Badge>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-400 font-semibold">
                      <span>{a.kategori}</span>
                      <span>&bull;</span>
                      <span>{a.tanggal}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {a.published ? (
                        <div className="rounded-lg bg-emerald-500/15 px-3 py-1.5 text-xs font-black text-emerald-800 border border-emerald-500/25 flex items-center gap-1 select-none">
                          <Check size={13} /> Terpublikasi di Peta
                        </div>
                      ) : (
                        <button 
                          onClick={() => handlePublish(a.id)}
                          className="rounded-lg bg-amber-500/10 px-3.5 py-1.5 text-xs font-bold text-amber-800 hover:bg-amber-500/20 transition-all duration-200 cursor-pointer flex items-center gap-1"
                        >
                          Publish ke Peta
                        </button>
                      )}

                      {a.forwarded ? (
                        <div className="rounded-lg bg-blue-500/15 px-3 py-1.5 text-xs font-black text-blue-800 border border-blue-500/25 flex items-center gap-1 select-none">
                          <Check size={13} /> Diteruskan ke {getOpdName(a.kategori)}
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleForward(a.id)}
                          className="rounded-lg bg-slate-500/10 px-3.5 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-500/20 transition-all duration-200 cursor-pointer flex items-center gap-1"
                        >
                          Teruskan ke OPD
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
