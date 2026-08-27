import type { APIContext } from "astro";
import { SITE, TOPICS } from "../data/site";
import { getPostUrl, getPublishedPosts } from "../utils/posts";

export const prerender = true;

export async function GET(_context: APIContext) {
  const posts = await getPublishedPosts();
  const topicLines = TOPICS.map(
    (topic) => `- [${topic.label}](${SITE.url}/topik/${topic.slug}/): ${topic.description}`,
  );
  const articleLines = posts.map(
    (post) => `- [${post.data.title}](${SITE.url}${getPostUrl(post)}): ${post.data.description}`,
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
    `- [Produk utama Sikotesku](${SITE.mainUrl}/): Latihan psikotes dan persiapan karier.`,
    "",
    "## Topik",
    "",
    ...topicLines,
    "",
    "## Artikel",
    "",
    ...articleLines,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
