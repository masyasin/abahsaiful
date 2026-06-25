import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspirasi & Keluhan Warga",
  description: "Saluran pengaduan resmi untuk menyampaikan aspirasi, keluhan pembangunan, dan saran pelayanan publik langsung kepada H. Saiful Milah.",
};

export default function AspirasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
