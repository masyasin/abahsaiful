import Link from "next/link";
import { BarChart3, MessageSquare, Map as MapIcon, FileText, Home, LogOut } from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { label: "Aspirasi", href: "/dashboard/aspirations", icon: MessageSquare },
  { label: "Peta & Heatmap", href: "/dashboard#heatmap", icon: MapIcon },
  { label: "Rekomendasi OPD", href: "/dashboard/rekomendasi", icon: FileText },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
        <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400 text-xs font-bold text-green-900">
            SM
          </div>
          <span className="font-bold text-green-700">Tim Sukses</span>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-yellow-50 hover:text-green-700"
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-gray-200 px-3 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50"
          >
            <Home size={18} />
            Ke Website Publik
          </Link>
        </div>
      </aside>
      <div className="ml-64 flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">
          <h1 className="text-lg font-semibold text-gray-900">Dashboard Tim Sukses</h1>
          <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
            <LogOut size={16} />
            Logout
          </button>
        </header>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
