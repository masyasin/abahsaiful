import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peta Pembangunan & Sebaran Suara",
  description: "Peta wilayah interaktif sebaran basis massa, TPS, pemetaan aspirasi konstituen, dan pembangunan daerah pemilihan H. Saiful Milah.",
};

export default function PetaWilayahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
