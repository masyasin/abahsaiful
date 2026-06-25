import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Kerja Unggulan",
  description: "Daftar program kerja unggulan, aksi nyata Pokir, dan kemajuan pembangunan oleh H. Saiful Milah untuk warga Kota Tangerang.",
};

export default function ProgramKerjaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
