# Portal Resmi Abah Saiful Milah - Fraksi Golkar DPRD Kota Tangerang

Selamat datang di repositori kode **Portal Aspirasi Resmi H. Saiful Milah, S.Sos., M.M. (Abah Saiful Milah)**, Ketua Fraksi Golkar DPRD Kota Tangerang untuk Daerah Pemilihan (Dapil) 1 yang mencakup Kecamatan Ciledug, Larangan, dan Karang Tengah.

Portal ini dirancang secara khusus untuk menggabungkan **transparansi kinerja parlemen, pengawalan aspirasi warga secara real-time, dan teknologi kecerdasan buatan (AI)** guna memperkuat hubungan serta akuntabilitas antara wakil rakyat dan konstituennya.

---

## 🌟 Nilai Utama & Desain Visual Premium
Website ini dibangun dengan pedoman estetika mewah, modern, dan hidup (*alive*), yang mencerminkan identitas resmi **Partai Golkar**:
*   **Gradasi Emas Sutra (Golkar Gold)**: Menggunakan kombinasi warna `from-yellow-400 via-amber-300 to-yellow-500` yang memberikan kesan metalik mewah dan berwibawa pada seluruh elemen header banner dan lencana aktif.
*   **Latar Belakang Gold-Cream Hangat**: Menghindari latar belakang putih datar yang membosankan dengan menggunakan gradasi krim-sutra hangat `#FFFDF2` hingga `#FFF9D0` untuk kenyamanan membaca maksimal.
*   **Tipografi Brand Unik**: Header memuat logo nama personal kustom yang presisi (Nama panggilan **Abah** miring miring di atas nama utama **SAIFUL MILAH** kapital miring tebal berwarna gelap) dilengkapi foto profil melingkar Abah Saiful Milah.
*   **Navigasi Berbasis Ikon & Pulse**: Seluruh menu navigasi memiliki ikon representatif. Tombol khusus **Aspirasi** didesain sebagai tombol Panggilan Aksi (CTA) berwarna kontras dengan efek berdenyut (*pulse animation*) dan indikator bulatan merah berkedip (*blinking notification dot*) sebagai simbol sistem penerimaan aspirasi aktif secara langsung.

---

## 🚀 Fitur Unggulan Portal Publik

### 1. AI Executive Dashboard (Terintegrasi di Beranda)
Sistem kecerdasan buatan terpadu yang menyajikan analisis data dua aspek utama lewat tab interaktif:
*   **Tab Analisis Media (AI News Analytics)**:
    *   *Sentiment Analyzer*: Diagram lingkaran (*circular gauge*) berbasis SVG murni dengan gradasi emas metalik yang memetakan sentimen berita media lokal (**94.2% Positif**, **5.8% Netral**, **0% Negatif**).
    *   *Sebaran Topik Hangat*: Melacak volume liputan kata kunci utama di dapil (Infrastruktur, Beasiswa, Bansos, Sidang Paripurna).
    *   *Ikhtisar AI*: Rangkuman cerdas AI yang menyimpulkan fokus kinerja publisitas mingguan secara naratif.
*   **Tab Kepuasan & Kinerja Dapil (AI Dapil Satisfaction)**:
    *   *Indeks Kepuasan Konstituen (DSI)*: Mengukur tingkat kepuasan warga sebesar **92.5% (Sangat Memuaskan)** dihitung berdasarkan analisis sentimen laporan aspirasi yang masuk.
    *   *Sebaran Kepuasan Wilayah*: Grafik kepuasan per kecamatan (Larangan: 93.2%, Karang Tengah: 92.5%, Ciledug: 91.8%) serta **Indeks Responsivitas Aksi Tim (96.8%)** untuk kecepatan tindak lanjut laporan (24-48 jam).
    *   *Diagnosis Kinerja AI*: Ulasan diagnostik AI mengenai efektivitas realisasi program pokok pikiran (pokir) dewan.

### 2. Peta Wilayah Interaktif (Leaflet GIS)
*   Menggunakan peta geografis nyata berbasis **Leaflet** yang diintegrasikan secara dinamis (*lazy loaded*) untuk menghindari masalah Server-Side Rendering (SSR).
*   Menampilkan ubin peta terang (*light-tile OpenStreetMap*) untuk visualisasi yang profesional, bersih, dan mewah.
*   Menandai koordinat daerah pemilihan (Ciledug, Larangan, Karang Tengah) menggunakan pin kustom berbentuk bulatan emas berpendar/berdenyut (*glowing pulse animation*).
*   Panel info melayang (*floating card*) yang dinamis menampilkan rincian jumlah TPS, DPT, koordinator wilayah, dan status sebaran aspirasi saat pin diklik.

### 3. Dinding Transparansi Aspirasi Rakyat
*   Menyajikan umpan (*feed*) laporan pembangunan, infrastruktur, kesehatan, dan pendidikan yang diajukan langsung oleh warga.
*   Setiap laporan dilengkapi kategori, tanggal masuk, dan lencana status transparan (**Baru**, **Proses**, **Selesai**) untuk keterbukaan pengawalan.

### 4. Galeri Kilas Aksi Lapangan (Dokumentasi Kerja Nyata)
*   Menampilkan **6 foto kegiatan lapangan beresolusi tinggi** dengan kemiripan wajah asli (*high-likeness*) yang mencerminkan kiprah nyata Abah Saiful Milah di tengah masyarakat:
    1.  *Dialog Aspirasi Bersama Konstituen Ciledug* (kegiatan reses pemukiman).
    2.  *Peninjauan Pembangunan Infrastruktur Jalan* (mengenakan helm keselamatan putih dan polo Golkar).
    3.  *Rapat Paripurna DPRD Kota Tangerang* (berbicara di podium dengan jas formal, dasi kuning, dan peci).
    4.  *Penyaluran Paket Bantuan Sosial Warga* (pembagian sembako lansia).
    5.  *Kunjungan Kemitraan dan Dialog UMKM* (interaksi hangat mengenakan batik kuning).
    6.  *Silaturahmi Tokoh Agama dan Masyarakat* (mengenakan baju koko putih dan songkok menyapa sesepuh).

---

## 🛠️ Teknologi & Arsitektur Kode

Aplikasi ini dibangun menggunakan arsitektur web modern yang aman dan berkinerja tinggi:
*   **Kerangka Kerja**: [Next.js](https://nextjs.org/) (App Router) dengan optimalisasi Turbopack.
*   **Bahasa Pemrograman**: TypeScript (strict-type safety).
*   **Sistem Styling**: Tailwind CSS (estetika kustom, warna adaptif HSL).
*   **Pemetaan**: React-Leaflet & Leaflet GIS.
*   **Pustaka Ikon**: Lucide React.
*   **Basis Data & ORM**: Prisma ORM untuk manajemen data internal.

---

## 💻 Panduan Instalasi & Pengembangan Lokal

### Prasyarat
Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas) dan **npm** di komputer Anda.

### Langkah-Langkah

1.  **Kloning Repositori**:
    ```bash
    git clone <repository-url>
    cd saifulmillah
    ```

2.  **Instal Dependensi**:
    ```bash
    npm install
    ```

3.  **Konfigurasi Lingkungan (`.env`)**:
    Buat file `.env` di direktori root dan sesuaikan variabel lingkungan yang diperlukan (seperti URL basis data jika menggunakan fitur database).

4.  **Jalankan Server Pengembangan**:
    ```bash
    npm run dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat portal berjalan secara lokal.

5.  **Kompilasi Produksi (Build Test)**:
    Sebelum melakukan deploy, jalankan build untuk memastikan seluruh tipe data TypeScript dan kode Next.js teroptimasi dengan sempurna:
    ```bash
    npm run build
    ```

6.  **Jalankan Bundle Produksi**:
    ```bash
    npm run start
    ```

---

## 📂 Struktur Direktori Utama

```text
saifulmillah/
├── public/                 # Aset statis (Foto Tokoh, Peta, Ikon, Gambar Kegiatan)
│   └── images/             # Galeri Foto Kilas Aksi Lapangan Nyata
├── src/
│   ├── app/                # Next.js App Router (Rute & Tata Letak Halaman)
│   │   ├── aspirasi/       # Halaman Pengaduan & Grafik Aspirasi Warga
│   │   ├── berita/         # Halaman Publikasi & Kliping Pemberitaan
│   │   ├── kontak/         # Halaman Kontak & Media Sosial Resmi
│   │   ├── peta-wilayah/   # Halaman Peta Geografis Leaflet
│   │   ├── profil/         # Halaman Riwayat & Profil Tokoh
│   │   ├── program-kerja/  # Halaman Program Unggulan & Progress Bar
│   │   └── layout.tsx      # Root Layout & Metadata SEO Global
│   ├── components/         # Komponen Reusable
│   │   ├── layout/         # Komponen Struktur (Navbar, Footer)
│   │   └── ui/             # Komponen UI Dasar (Badge, ProgressBar)
│   └── lib/                # Fungsi Utilitas Kustom (cn, utils)
├── package.json            # Konfigurasi Dependensi
└── tsconfig.json           # Konfigurasi TypeScript compiler
```

---

## 📄 Lisensi
Hak Cipta © 2026 Portal Resmi H. Saiful Milah. Hak Cipta Dilindungi Undang-Undang.
Dipersembahkan untuk pelayanan masyarakat Kota Tangerang yang lebih maju, sejahtera, dan transparan.
