import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saifulmilah.com"),
  title: {
    template: "%s | Abah Saiful Milah",
    default: "Abah Saiful Milah - Ketua Fraksi Golkar DPRD Kota Tangerang",
  },
  description:
    "Portal aspirasi resmi H. Saiful Milah, S.Sos., M.M., Ketua Fraksi Golkar DPRD Kota Tangerang Dapil 1 (Ciledug, Larangan, Karang Tengah). Saluran transparansi aksi nyata dan pengaduan pembangunan warga.",
  keywords: [
    "Saiful Milah",
    "Abah Saiful Milah",
    "Golkar Tangerang",
    "DPRD Kota Tangerang",
    "Fraksi Golkar",
    "Ciledug",
    "Larangan",
    "Karang Tengah",
    "Aspirasi Rakyat",
    "Pokir DPRD",
    "Politisi Golkar",
  ],
  authors: [{ name: "Abah Saiful Milah" }],
  creator: "Abah Saiful Milah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://saifulmilah.com",
    title: "Abah Saiful Milah - Ketua Fraksi Golkar DPRD Kota Tangerang",
    description:
      "Portal resmi penyaluran aspirasi, keluhan warga, dan pemantauan program kerja nyata DPRD Kota Tangerang.",
    siteName: "Abah Saiful Milah Portal",
    images: [
      {
        url: "/H_saiful_milah.jpeg",
        width: 800,
        height: 800,
        alt: "H. Saiful Milah, S.Sos., M.M.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abah Saiful Milah - DPRD Kota Tangerang",
    description:
      "Saluran aspirasi resmi H. Saiful Milah, S.Sos., M.M. Dengar, Kawal, Perjuangkan!",
    images: ["/H_saiful_milah.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
