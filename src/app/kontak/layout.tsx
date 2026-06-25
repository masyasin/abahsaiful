import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami & Layanan Pengaduan",
  description: "Saluran komunikasi dan kontak resmi H. Saiful Milah, S.Sos., M.M. di Kantor DPRD Kota Tangerang dan media sosial resmi.",
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
