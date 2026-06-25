import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita & Kegiatan Fraksi",
  description: "Kumpulan siaran pers resmi, berita terbaru, agenda kunjungan kerja, dan warta kegiatan Fraksi Golkar DPRD Kota Tangerang.",
};

export default function BeritaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
