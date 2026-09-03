import type { APIContext } from "astro";
import { SITE, TOPICS } from "../data/site";
import { getPublishedPosts } from "../utils/posts";

export const prerender = true;

export async function GET(_context: APIContext) {
  const posts = await getPublishedPosts();
  const topicLines = TOPICS.map(
    (topic) => `- [${topic.label}](${SITE.url}/topik/${topic.slug}/): ${topic.description}`,
  );
  const body = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "Panduan Sikotesku adalah situs edukasi publik milik Sikotesku. Konten membantu persiapan psikotes kerja, CV, dan interview. Konten bukan diagnosis psikologis, bocoran tes, atau jaminan lolos seleksi.",
    "",
    "## Halaman utama",
    "",
    `- [Beranda](${SITE.url}/): Panduan terbaru dan jalur belajar utama.`,
    `- [Tentang](${SITE.url}/tentang/): Tujuan, founder, dan komitmen Sikotesku.`,
    `- [Kebijakan editorial](${SITE.url}/kebijakan-editorial/): Standar penulisan, privasi, penggunaan AI, dan koreksi.`,
    `- [Semua artikel](${SITE.url}/artikel/): Indeks ${posts.length} panduan yang sudah diterbitkan.`,
    `- [Daftar lengkap untuk agent](${SITE.url}/llms-full.txt): Direktori seluruh artikel beserta ringkasannya.`,
    `- [Sitemap](${SITE.url}/sitemap-index.xml): Daftar URL kanonis untuk crawler.`,
    `- [RSS](${SITE.url}/rss.xml): Pembaruan artikel terbaru.`,
    `- [Produk utama Sikotesku](${SITE.mainUrl}/): Latihan psikotes dan persiapan karier.`,
    "",
    "## CPNS Sikotesku",
    "",
    `- [Latihan CPNS Sikotesku](${SITE.mainUrl}/cpns): Jalur CPNS aktif dari diagnostic, latihan per bagian, Tes Cepat, Tes Intensif, Full SKD, hingga Room.`,
    `- [Dashboard CPNS](${SITE.mainUrl}/cpns/dashboard): Pilihan latihan, akses, sesi, dan riwayat pengguna setelah login.`,
    `- [Panduan CPNS](${SITE.url}/topik/cpns/): Artikel yang menjelaskan cara mulai, TWK/TIU/TKP, jenis latihan, akses, hasil, ranking, dan Room.`,
    "- Harga, benefit, ketersediaan tes, dan aturan Room harus diperiksa pada halaman live. Blog tidak menjadi sumber harga atau aturan seleksi resmi.",
    "",
    "## RekanKu dan SICA",
    "",
    `- [Preview RekanKu](${SITE.mainUrl}/rekanku): Career Action Coach dalam public beta dengan akses agent yang dibuka bertahap.`,
    `- [Studi kasus AI Hackfest 2026](${SITE.url}/artikel/rekanku-sica-ai-hackfest-2026/): Penjelasan mission loop, verifikasi backend, fallback, privacy, dan batas rollout production.`,
    "- RekanKu bukan chatbot umum, tidak menjamin pekerjaan, dan tidak tersedia untuk seluruh akun. Halaman artikel membedakan implementasi source, preview beta, dan rollout production penuh.",
    "",
    "## Topik",
    "",
    ...topicLines,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
