import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Lengkap",
  description: "Profil lengkap, komisi, fraksi, dan riwayat perjuangan H. Saiful Milah, S.Sos., M.M. di DPRD Kota Tangerang.",
};

export default function ProfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
