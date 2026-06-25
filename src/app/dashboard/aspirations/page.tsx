"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { Search, CheckCircle, Clock, AlertCircle, Filter } from "lucide-react";

const aspirations = [
  { id: 1, nama: "Ahmad", judul: "Jalan rusak di Desa Tanjung", kategori: "Infrastruktur", status: "baru", tanggal: "2026-06-22", published: false },
  { id: 2, nama: "Siti", judul: "Beasiswa untuk siswa SMA", kategori: "Pendidikan", status: "proses", tanggal: "2026-06-20", published: true },
  { id: 3, nama: "Budi", judul: "Bantuan modal UMKM", kategori: "Ekonomi", status: "selesai", tanggal: "2026-06-18", published: true },
  { id: 4, nama: "Rina", judul: "Puskesmas keliling", kategori: "Kesehatan", status: "baru", tanggal: "2026-06-15", published: false },
  { id: 5, nama: "Hasan", judul: "Perbaikan irigasi sawah", kategori: "Infrastruktur", status: "proses", tanggal: "2026-06-12", published: true },
  { id: 6, nama: "Dewi", judul: "Penerangan jalan umum", kategori: "Infrastruktur", status: "baru", tanggal: "2026-06-10", published: false },
];

const statusIcon: Record<string, React.ReactNode> = {
  baru: <AlertCircle size={16} className="text-yellow-500" />,
  proses: <Clock size={16} className="text-yellow-500" />,
  selesai: <CheckCircle size={16} className="text-green-500" />,
};

export default function AspirationsPage() {
  const [search, setSearch] = useState("");

  const filtered = aspirations.filter(
    (a) =>
      a.judul.toLowerCase().includes(search.toLowerCase()) ||
      a.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Kelola Aspirasi
        </h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari aspirasi..."
              className="w-64 rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-green-900 hover:bg-yellow-500">
            + AI Clustering
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Aspirasi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Pengirim
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Kategori AI
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-500">
                Peta
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase text-gray-500">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {a.judul}
                  </div>
                  <div className="text-xs text-gray-500">{a.tanggal}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{a.nama}</td>
                <td className="px-6 py-4">
                  <Badge variant="info">{a.kategori}</Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    {statusIcon[a.status]}
                    <span className="text-sm capitalize text-gray-700">
                      {a.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-sm ${a.published ? "text-green-600" : "text-gray-400"}`}
                  >
                    {a.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="rounded bg-yellow-50 px-3 py-1 text-xs font-medium text-green-700 hover:bg-yellow-100">
                      Publish
                    </button>
                    <button className="rounded bg-green-50 px-3 py-1 text-xs font-medium text-green-700 hover:bg-green-100">
                      OPD
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
