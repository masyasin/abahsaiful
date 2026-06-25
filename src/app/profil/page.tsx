"use client";

import Badge from "@/components/ui/Badge";

const profileData = {
  nama: "Abah Saiful Milah",
  jabatan: "Ketua Fraksi Golkar DPRD Kota Tangerang",
  lembaga: "DPRD Kota Tangerang",
  dapil: "Kota Tangerang 1 (Ciledug, Larangan, Karang Tengah)",
  komisi: "Komisi II (Pembangunan & Infrastruktur)",
  fraksi: "Fraksi Partai Golongan Karya",
  tempatLahir: "Tangerang",
  tanggalLahir: "17 Agustus 1978",
  fotoUrl: "/H_saiful_milah.jpeg",
  tentang: `Abah Saiful Milah adalah politisi Partai Golongan Karya yang saat ini menjabat sebagai Ketua Fraksi Golkar DPRD Kota Tangerang. Beliau berkomitmen untuk memperjuangkan kepentingan masyarakat Kota Tangerang, khususnya di daerah pemilihannya yang meliputi Kecamatan Ciledug, Larangan, dan Karang Tengah.

Sebagai Ketua Fraksi, beliau memimpin anggota fraksi Golkar di DPRD Kota Tangerang dan aktif dalam berbagai pembahasan kebijakan strategis daerah, terutama di bidang pembangunan infrastruktur, pendidikan, dan kesejahteraan sosial.`,
};

const riwayatJabatan = [
  { jabatan: "Ketua Fraksi Golkar DPRD Kota Tangerang", tahunMulai: 2024, tahunSelesai: null, keterangan: "Periode 2024-2029" },
  { jabatan: "Anggota DPRD Kota Tangerang", tahunMulai: 2019, tahunSelesai: 2024, keterangan: "Komisi II" },
  { jabatan: "Ketua DPD Golkar Kota Tangerang", tahunMulai: 2020, tahunSelesai: 2025, keterangan: "" },
  { jabatan: "Anggota DPRD Kota Tangerang", tahunMulai: 2014, tahunSelesai: 2019, keterangan: "Fraksi Golkar" },
  { jabatan: "Ketua Komite Sekolah SMAN 1 Tangerang", tahunMulai: 2010, tahunSelesai: 2014, keterangan: "" },
];

export default function Profil() {
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
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Profil</h1>
          <p className="mt-3 text-base font-semibold text-slate-800 max-w-2xl leading-relaxed">
            Informasi lengkap dan riwayat perjuangan Abah Saiful Milah
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/60 py-16">
        {/* Ambient Premium Mesh and Glow Blobs */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-12 left-10 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-24 right-10 -z-10 h-96 w-96 rounded-full bg-amber-400/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -z-10 h-80 w-80 rounded-full bg-orange-300/5 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 p-8 text-slate-900 sm:p-10">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-[40px]" />
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-slate-950/20 p-0.5 shadow-[0_0_20px_rgba(15,23,42,0.1)] ring-4 ring-slate-950/10">
                  <img
                    src="/H_saiful_milah.jpeg"
                    alt="Abah Saiful Milah"
                    className="h-full w-full rounded-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-amber-600', 'to-amber-950');
                      (e.target as HTMLImageElement).parentElement!.innerText = 'SM';
                    }}
                  />
                </div>
                <div className="text-center sm:text-left">
                  <Badge className="mb-3 bg-slate-900 text-yellow-300 font-bold border border-slate-950/20 px-3 py-1">
                    {profileData.jabatan}
                  </Badge>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">{profileData.nama}</h2>
                  <p className="mt-1 text-sm font-semibold text-amber-950/80">{profileData.lembaga}</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <table className="w-full">
                <tbody className="divide-y divide-amber-100/40">
                  {[
                    ["Nama Lengkap", profileData.nama],
                    ["Jabatan", profileData.jabatan],
                    ["Lembaga", profileData.lembaga],
                    ["Daerah Pemilihan", profileData.dapil],
                    ["Komisi", profileData.komisi],
                    ["Fraksi", profileData.fraksi],
                    ["Tempat Lahir", profileData.tempatLahir],
                    ["Tanggal Lahir", profileData.tanggalLahir],
                  ].map(([label, value]) => (
                    <tr key={label as string} className="hover:bg-amber-50/30 transition-colors">
                      <td className="w-1/3 py-3.5 pr-4 text-sm font-semibold text-slate-400">
                        {label}
                      </td>
                      <td className="py-3.5 text-sm font-bold text-slate-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-sm">
            <div className="border-b border-amber-100 bg-amber-50/40 px-6 py-4.5">
              <h3 className="font-bold text-slate-800">Riwayat Jabatan</h3>
            </div>
            <div className="divide-y divide-amber-50/50">
              {riwayatJabatan.map((r) => (
                <div key={`${r.jabatan}-${r.tahunMulai}`} className="group flex items-start gap-4 px-6 py-5 hover:bg-amber-50/20 transition-colors">
                  <div className="mt-1.5 flex h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 shadow-[0_0_8px_rgba(245,209,48,0.5)] transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-bold text-slate-800 transition-colors group-hover:text-amber-700">{r.jabatan}</h4>
                    <p className="text-xs font-semibold text-amber-600 mt-0.5">
                      {r.tahunMulai} {r.tahunSelesai ? `- ${r.tahunSelesai}` : "- Sekarang"}
                    </p>
                    {r.keterangan && (
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500 font-medium">{r.keterangan}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-sm">
            <div className="border-b border-amber-100 bg-amber-50/40 px-6 py-4.5">
              <h3 className="font-bold text-slate-800">
                Peran Sebagai Ketua Fraksi
              </h3>
            </div>
            <div className="p-6 text-sm leading-relaxed text-slate-600 font-medium sm:p-8">
              <p>
                Sebagai Ketua Fraksi Golkar DPRD Kota Tangerang, Abah Saiful Milah
                bertanggung jawab memimpin anggota fraksi dalam menjalankan
                fungsi legislasi, penganggaran, dan pengawasan. Beliau menjadi
                juru bicara fraksi dalam rapat-rapat paripurna, memimpin
                konsolidasi sikap politik fraksi, serta menjembatani komunikasi
                antara fraksi dengan pimpinan DPRD dan pemerintah daerah.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
