"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

// High-quality, robust inline SVG Brand Icons
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const WhatsAppIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 .94 11.48 1.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.45 3.22 1.302 4.634L1.9 22.117l6.002-1.564zM18.06 14.93c-.33-.165-1.937-.957-2.231-1.063-.294-.106-.508-.16-.721.165-.213.325-.826 1.04-.993 1.23-.167.19-.334.21-.664.045-1.822-.912-3.003-1.623-4.195-3.663-.314-.54.314-.5.9-.997.525-.497.585-.563.585-.827 0-.265-.133-.53-.266-.827-.134-.297-.722-1.742-.988-2.385-.26-.626-.525-.541-.722-.551l-.613-.012c-.213 0-.56.08-.853.4-.293.32-1.12 1.09-1.12 2.656 0 1.567 1.146 3.085 1.305 3.297.16.213 2.257 3.447 5.467 4.834.763.33 1.36.527 1.824.674.766.244 1.464.21 2.016.127.614-.093 1.938-.792 2.214-1.558.275-.765.275-1.422.193-1.558-.083-.135-.294-.218-.624-.383z"/>
  </svg>
);

const InstagramIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const kontakList = [
  { label: "Alamat Kantor", value: "Kantor DPRD Kota Tangerang, Jl. Satria Sudirman No. 1, Tangerang 15111", icon: "map" },
  { label: "Telepon", value: "(021) 5577-1234", icon: "phone" },
  { label: "Email", value: "saiful.milah@dprd.tangerangkota.go.id", icon: "mail" },
  { label: "Jam Kerja", value: "Senin - Jumat, 08:00 - 16:00 WIB", icon: "clock" },
];

const sosmed = [
  { name: "WhatsApp", url: "https://wa.me/628121376666", color: "bg-green-500", label: "0812-1376-666", icon: WhatsAppIcon },
  { name: "Instagram", url: "https://instagram.com/saifulmilah", color: "bg-pink-500", label: "@saifulmilah", icon: InstagramIcon },
  { name: "Facebook", url: "https://facebook.com/saifulmilah", color: "bg-blue-600", label: "Abah Saiful Milah", icon: FacebookIcon },
  { name: "YouTube", url: "https://youtube.com/@saifulmilah", color: "bg-red-500", label: "Saiful Milah TV", icon: YoutubeIcon },
];

export default function Kontak() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    keperluan: "Aspirasi",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const iconMap: Record<string, React.ReactNode> = {
    map: <MapPin size={18} />,
    phone: <Phone size={18} />,
    mail: <Mail size={18} />,
    clock: <Clock size={18} />,
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 py-20 text-slate-950 border-b border-amber-500/20">
        {/* Creative Textured Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Glowing Ambient Blobs */}
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/30 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 h-96 w-96 rounded-full bg-amber-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-yellow-300/30 blur-[100px] pointer-events-none" />
        
        {/* Glassmorphic decorative floating cards */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block opacity-30 pointer-events-none">
          <div className="h-28 w-48 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(217,119,6,0.1)] -rotate-6 transform transition-all duration-700 hover:rotate-0 hover:scale-105" />
          <div className="absolute -right-4 -bottom-4 h-20 w-32 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(217,119,6,0.1)] rotate-12 transform transition-all duration-700 hover:rotate-0 hover:scale-105" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-950/10 bg-slate-950/10 text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
            Abah Saiful Milah
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Hubungi Kami</h1>
          <p className="mt-3 text-base font-semibold text-slate-800 max-w-2xl leading-relaxed">
            Hubungi Abah Saiful Milah melalui saluran komunikasi resmi atau media sosial.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/60 py-16">
        {/* Ambient Premium Mesh and Glow Blobs */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute top-12 left-10 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-24 right-10 -z-10 h-96 w-96 rounded-full bg-amber-400/15 blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -z-10 h-80 w-80 rounded-full bg-orange-300/5 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="overflow-hidden rounded-2xl border border-amber-500/15 bg-white shadow-sm group/profile">
                <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 p-6 text-center text-slate-955">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />
                  <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-white/20 blur-[30px] pointer-events-none" />
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-slate-950/20 p-0.5 shadow-[0_0_15px_rgba(217,119,6,0.15)] ring-4 ring-white/20 transition-transform duration-500 group-hover/profile:scale-105">
                    <img
                      src="/H_saiful_milah.jpeg"
                      alt="Abah Saiful Milah"
                      className="h-full w-full rounded-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-amber-600', 'to-amber-950');
                        (e.target as HTMLImageElement).parentElement!.innerText = 'SM';
                      }}
                    />
                  </div>
                  <h3 className="mt-3 font-black text-slate-955 transition-colors duration-300">Abah Saiful Milah</h3>
                  <Badge className="mt-2 bg-slate-900 text-yellow-300 font-black border border-slate-950/20 px-3.5 py-0.5 text-[10px] uppercase tracking-wider">
                    Ketua Fraksi Golkar DPRD
                  </Badge>
                </div>
                <div className="space-y-0 divide-y divide-amber-100/30">
                  {kontakList.map((k) => (
                    <div
                      key={k.label}
                      className="flex items-start gap-3.5 p-4.5 hover:bg-amber-50/40 transition-colors"
                    >
                      <div className="mt-0.5 text-amber-650">
                        {iconMap[k.icon]}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {k.label}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 mt-0.5">{k.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200/60 bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-bold text-slate-800">
                  Media Sosial Resmi
                </h3>
                <div className="space-y-3">
                  {sosmed.map((s) => {
                    const IconComponent = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item flex items-center gap-3.5 rounded-xl border border-amber-200/50 bg-white p-3.5 transition-all duration-300 hover:bg-amber-50/20 hover:border-amber-500/40 hover:shadow-[0_4px_15px_rgba(217,119,6,0.06)]"
                      >
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-955 text-yellow-400 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-[0_0_10px_rgba(245,209,48,0.25)]"
                        >
                          <IconComponent size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 group-hover/item:text-amber-700 transition-colors duration-200">
                            {s.name}
                          </p>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-amber-500/15 bg-white p-6 sm:p-8 shadow-[0_12px_40px_-10px_rgba(217,119,6,0.06)] backdrop-blur-sm relative">
                <h2 className="mb-6 text-xl font-black text-slate-800 border-b border-slate-100 pb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-555 animate-pulse" />
                  Kirim Pesan Langsung
                </h2>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-850 border border-amber-200/30">
                      <Send size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-850">
                      Pesan Terkirim!
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 font-medium">
                      Terima kasih. Pesan Anda telah kami terima dan akan segera kami respon secepatnya.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ nama: "", email: "", keperluan: "Aspirasi", pesan: "" });
                      }}
                      className="mt-6 text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors"
                    >
                      Kirim Pesan Lain &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          value={form.nama}
                          onChange={(e) =>
                            setForm({ ...form, nama: e.target.value })
                          }
                          className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                          placeholder="email@anda.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Keperluan
                      </label>
                      <select
                        value={form.keperluan}
                        onChange={(e) =>
                          setForm({ ...form, keperluan: e.target.value })
                        }
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      >
                        <option>Aspirasi</option>
                        <option>Kritik & Saran</option>
                        <option>Undangan</option>
                        <option>Media & Pers</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                        Pesan Anda
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.pesan}
                        onChange={(e) =>
                          setForm({ ...form, pesan: e.target.value })
                        }
                        className="mt-1.5 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm shadow-sm transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        placeholder="Tulis pesan Anda..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 px-6 py-3.5 text-sm font-bold text-amber-950 shadow-[0_4px_20px_rgba(245,209,48,0.2)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_4px_25px_rgba(245,209,48,0.3)] cursor-pointer"
                    >
                      <Send size={16} />
                      Kirim Pesan Resmi
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
