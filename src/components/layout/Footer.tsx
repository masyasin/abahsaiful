"use client";

import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-500/20 bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 text-slate-900">
      {/* Decorative background glow */}
      <div className="absolute -top-40 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-slate-950/20 shadow-md">
                <img
                  src="/H_saiful_milah.jpeg"
                  alt="Abah Saiful Milah"
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-amber-600', 'to-amber-950');
                    (e.target as HTMLImageElement).parentElement!.innerText = 'ASM';
                  }}
                />
              </div>
              <div className="flex flex-col items-start leading-none gap-0.5">
                <div className="bg-slate-950 text-[10px] font-black text-yellow-400 px-2 py-0.5 rounded-sm shadow-sm -rotate-2 -skew-x-6 origin-left tracking-wider uppercase scale-90">
                  Abah
                </div>
                <span className="text-sm md:text-base font-black tracking-tight italic uppercase text-slate-950">
                  SAIFUL MILAH
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-850 font-medium">
              Ketua Fraksi Partai Golongan Karya DPRD Kota Tangerang
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-slate-950">Navigasi</h4>
            <ul className="space-y-2.5 text-sm text-slate-800 font-semibold">
              {[
                { label: "Profil", href: "/profil" },
                { label: "Program Kerja", href: "/program-kerja" },
                { label: "Aspirasi", href: "/aspirasi" },
                { label: "Berita", href: "/berita" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-slate-950 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-slate-950">Kontak</h4>
            <ul className="space-y-2.5 text-sm text-slate-850 font-semibold leading-relaxed">
              <li>Kantor DPRD Kota Tangerang</li>
              <li>Jl. Satria Sudirman No. 1, Tangerang</li>
              <li>(021) 5577-1234</li>
              <li className="break-all text-xs">saiful.milah@dprd.tangerangkota.go.id</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-slate-950">Media Sosial</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "WhatsApp", url: "https://wa.me/628121376666", icon: WhatsAppIcon },
                { name: "Instagram", url: "https://instagram.com/saifulmilah", icon: InstagramIcon },
                { name: "Facebook", url: "https://facebook.com/saifulmilah", icon: FacebookIcon },
                { name: "YouTube", url: "https://youtube.com/@saifulmilah", icon: YoutubeIcon },
              ].map((s) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    title={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-yellow-400 shadow-[0_4px_12px_rgba(15,23,42,0.15)] transition-all duration-300 hover:bg-slate-900 hover:scale-110 hover:shadow-lg hover:text-white"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-950/10 pt-8 text-center text-xs text-slate-850 font-semibold">
          &copy; {new Date().getFullYear()} Abah Saiful Milah. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
