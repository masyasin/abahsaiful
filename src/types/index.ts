export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export interface SosmedLink {
  name: string;
  url: string;
  icon: string;
}

export interface AspirasiForm {
  nama: string;
  kontak: string;
  judul: string;
  konten: string;
  kategoriId?: number;
  lokasi: string;
}

export interface MapPinData {
  id: number;
  x: number;
  y: number;
  warna: string;
  judul: string;
  status: string;
}

export interface TPSData {
  id: number;
  nama: string;
  totalSuara: number;
  suaraCaleg: number;
  warna: string;
  persentase: number;
}

export interface ChartData {
  name: string;
  value: number;
  color: string;
}
