import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

const CATEGORIES = [
  "Infrastruktur",
  "Pendidikan",
  "Ekonomi",
  "Kesehatan",
  "Lainnya",
];

export async function clusterAspiration(text: string) {
  const prompt = `Klasifikasikan aspirasi warga berikut ke dalam 1 dari 5 kategori: ${CATEGORIES.join(", ")}. Respond only with JSON: {"category": "nama_kategori", "confidence": 0.0-1.0, "reason": "alasan singkat"}

Aspirasi: "${text}"`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    response_format: { type: "json_object" },
  });

  const result = JSON.parse(response.choices[0]?.message?.content || "{}");
  return {
    category: result.category || "Lainnya",
    confidence: result.confidence || 0,
    reason: result.reason || "",
  };
}

export async function generateRecommendation(
  aspirations: { judul: string; konten: string; kategori: string; lokasi: string }[]
) {
  const data = aspirations.map((a) => `- ${a.judul} (${a.kategori}, ${a.lokasi}): ${a.konten}`).join("\n");

  const prompt = `Berdasarkan aspirasi warga berikut, buat rekomendasi resmi untuk OPD terkait dalam format JSON:

${data}

Respond with JSON array:
[{
  "title": "judul rekomendasi",
  "opdTujuan": "nama OPD",
  "kategori": "kategori",
  "ringkasan": "ringkasan singkat",
  "estimasiAnggaran": 0,
  "sumberDana": "DAK/DAU/Pokir DPRD/Bangub Provinsi",
  "justifikasi": "justifikasi berbasis data warga",
  "prioritas": 1-5
}]`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    response_format: { type: "json_object" },
  });

  const result = JSON.parse(response.choices[0]?.message?.content || "[]");
  return Array.isArray(result) ? result : [];
}
