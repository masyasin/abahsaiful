import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const connectionString = process.env.DATABASE_URL || "";
const adapter = new PrismaMariaDb(connectionString);
const prisma = new PrismaClient({ adapter });

async function main() {
  const categories = [
    { name: "Infrastruktur", label: "Infrastruktur", color: "#3B82F6", icon: "🏗️" },
    { name: "Pendidikan", label: "Pendidikan", color: "#8B5CF6", icon: "📚" },
    { name: "Ekonomi", label: "Ekonomi", color: "#10B981", icon: "💼" },
    { name: "Kesehatan", label: "Kesehatan", color: "#F59E0B", icon: "🏥" },
    { name: "Lainnya", label: "Lainnya", color: "#6B7280", icon: "📋" },
  ];

  for (const cat of categories) {
    await prisma.aspirationCategory.upsert({
      where: { name: cat.name },
      update: cat,
      create: cat,
    });
  }

  const kontakList = [
    { label: "Alamat Kantor", value: "Kantor DPRD Kota Tangerang, Jl. Satria Sudirman No. 1, Tangerang 15111", icon: "MapPin", tipe: "kontak" },
    { label: "Telepon", value: "(031) 352-1234", icon: "Phone", tipe: "kontak" },
    { label: "Email", value: "saiful.millah@dprd.jatimprov.go.id", icon: "Mail", tipe: "kontak" },
    { label: "Jam Kerja", value: "Senin - Jumat, 08:00 - 16:00 WIB", icon: "Clock", tipe: "kontak" },
  ];

  for (const k of kontakList) {
    await prisma.kontakInfo.create({ data: k });
  }

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
