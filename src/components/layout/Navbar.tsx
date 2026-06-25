"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Home, 
  User, 
  Briefcase, 
  MessageSquare, 
  Map, 
  Newspaper, 
  PhoneCall, 
  Menu, 
  X 
} from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Profil", href: "/profil", icon: User },
  { label: "Program Kerja", href: "/program-kerja", icon: Briefcase },
  { label: "Aspirasi", href: "/aspirasi", icon: MessageSquare, special: true },
  { label: "Peta Wilayah", href: "/peta-wilayah", icon: Map },
  { label: "Berita", href: "/berita", icon: Newspaper },
  { label: "Kontak", href: "/kontak", icon: PhoneCall },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-amber-500/10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-amber-500/30 shadow-[0_2px_10px_rgba(245,209,48,0.25)] transition-transform duration-300 group-hover:scale-105">
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
            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-[10px] font-black text-white px-2 py-0.5 rounded-sm shadow-sm -rotate-2 -skew-x-6 origin-left tracking-wider uppercase scale-90">
              Abah
            </div>
            <span className="text-sm md:text-base font-black tracking-tight italic uppercase bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 bg-clip-text text-transparent">
              SAIFUL MILAH
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1.5 lg:gap-2.5 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            if (link.special) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-1.5 text-xs lg:text-sm font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5",
                    pathname === link.href
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-955 shadow-[0_4px_12px_rgba(245,209,48,0.25)] border border-amber-500/30"
                      : "bg-slate-950 text-yellow-400 hover:bg-slate-900 border border-slate-900 shadow-[0_0_10px_rgba(245,209,48,0.15)] animate-pulse"
                  )}
                >
                  <Icon size={14} className={pathname === link.href ? "text-amber-955" : "text-yellow-400"} />
                  <span>{link.label}</span>
                  {/* Glowing Pulse Notification Dot */}
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
                  </span>
                </Link>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs lg:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 group",
                  pathname === link.href
                    ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-955 shadow-[0_4px_12px_rgba(245,209,48,0.12)] border border-amber-500/20"
                    : "text-slate-600 hover:bg-slate-50 hover:text-amber-600"
                )}
              >
                <Icon size={14} className={cn(pathname === link.href ? "text-amber-955" : "text-slate-400 group-hover:text-amber-600 transition-colors")} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-50 md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 px-4 py-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              if (link.special) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2.5 text-sm font-black uppercase tracking-wider transition-all duration-200 flex items-center gap-2",
                      pathname === link.href
                        ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-955 shadow-sm"
                        : "bg-slate-900 text-yellow-400 border border-slate-800"
                    )}
                  >
                    <Icon size={15} className={pathname === link.href ? "text-amber-955" : "text-yellow-400"} />
                    <span>{link.label}</span>
                    <span className="absolute right-4 top-4 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                    </span>
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 flex items-center gap-2",
                    pathname === link.href
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-955"
                      : "text-slate-600 hover:bg-slate-50 hover:text-amber-600"
                  )}
                >
                  <Icon size={15} className={pathname === link.href ? "text-amber-955" : "text-slate-400"} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
