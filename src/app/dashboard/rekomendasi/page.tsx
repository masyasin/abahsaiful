"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { Download, Sparkles, FileText } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Rehabilitasi Jalan Desa Tanjung - Mulya",
    opdTujuan: "Dinas PUPR Kota Tangerang",
    kategori: "Infrastruktur",
    ringkasan: "Aspirasi dari 34 warga Desa Tanjung dan Desa Mulya mengenai kerusakan jalan sepanjang 5 km yang menghambat akses ekonomi dan pendidikan.",
    estimasiAnggaran: 2500000000,
    sumberDana: "DAK",
    justifikasi: "Berdasarkan aspirasi terbanyak (34 suara), jalan rusak menyebabkan biaya transportasi tinggi dan anak-anak terlambat ke sekolah.",
    prioritas: 1,
    statusExport: false,
  },
  {
    id: 2,
    title: "Program Beasiswa untuk 500 Siswa Kurang Mampu",
    opdTujuan: "Dinas Pendidikan Kota Tangerang",
    kategori: "Pendidikan",
    ringkasan: "Aspirasi dari 28 warga mengenai perlunya beasiswa bagi siswa berprestasi dari keluarga kurang mampu di wilayah Kecamatan Larangan dan Ciledug.",
    estimasiAnggaran: 1500000000,
    sumberDana: "Pokir DPRD",
    justifikasi: "28 aspirasi masuk terkait pendidikan, mayoritas meminta beasiswa untuk mencegah putus sekolah.",
    prioritas: 2,
    statusExport: false,
  },
  {
    id: 3,
    title: "Bantuan Modal Usaha untuk 200 UMKM",
    opdTujuan: "Dinas Koperasi & UMKM Kota Tangerang",
    kategori: "Ekonomi",
    ringkasan: "Aspirasi dari 22 pelaku UMKM yang membutuhkan akses permodalan dan pendampingan digital marketing.",
    estimasiAnggaran: 800000000,
    sumberDana: "DAU",
    justifikasi: "UMKM di wilayah dapil kesulitan akses perbankan dan membutuhkan pelatihan digital.",
    prioritas: 3,
    statusExport: false,
  },
];

export default function RekomendasiPage() {
  const [exported, setExported] = useState<number[]>([]);

  const toggleExport = (id: number) => {
    setExported((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Rekomendasi OPD & Skala Prioritas
          </h2>
          <p className="text-sm text-gray-500">
                    Hasil analisis AI dari seluruh aspirasi warga
                  </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-green-900 hover:bg-yellow-500">
          <Sparkles size={16} />
          Generate Ulang dengan AI
        </button>
      </div>

      <div className="space-y-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="flex items-start justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-green-900">
                  {rec.prioritas}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                  <p className="text-sm text-gray-500">{rec.opdTujuan}</p>
                </div>
              </div>
              <Badge
                variant={
                  rec.kategori === "Infrastruktur"
                    ? "info"
                    : rec.kategori === "Pendidikan"
                      ? "warning"
                      : "success"
                }
              >
                {rec.kategori}
              </Badge>
            </div>

            <div className="px-6 py-4">
              <p className="text-sm text-gray-700">{rec.ringkasan}</p>

              <div className="mt-4 grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
                <div>
                  <p className="text-xs text-gray-500">Estimasi Anggaran</p>
                  <p className="font-semibold text-gray-900">
                    {formatCurrency(rec.estimasiAnggaran)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Sumber Dana</p>
                  <p className="font-semibold text-gray-900">{rec.sumberDana}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Prioritas</p>
                  <p className="font-semibold text-gray-900">
                    #{rec.prioritas}
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-yellow-100 bg-yellow-50 p-3">
                <p className="text-xs font-medium text-green-800">Justifikasi:</p>
                <p className="mt-1 text-sm text-green-700">{rec.justifikasi}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {exported.includes(rec.id)
                    ? "✓ Sudah diexport"
                    : "Belum diexport"}
                </span>
                <button
                  onClick={() => toggleExport(rec.id)}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <Download size={16} />
                  {exported.includes(rec.id)
                    ? "Export Ulang"
                    : "Export ke Dokumen Pokir"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
