import type { APIContext } from "astro";
import { SITE, TOPICS } from "../data/site";
import { getPostUrl, getPublishedPosts } from "../utils/posts";

export const prerender = true;

export async function GET(_context: APIContext) {
  const posts = await getPublishedPosts();
  const sections = TOPICS.flatMap((topic) => {
    const topicPosts = posts.filter((post) => post.data.category === topic.slug);

    return [
      `## ${topic.label}`,
      "",
      `> ${topic.description}`,
      "",
      ...topicPosts.map(
        (post) => `- [${post.data.title}](${SITE.url}${getPostUrl(post)}): ${post.data.description}`,
      ),
      "",
    ];
  });

  const body = [
    `# Direktori lengkap ${SITE.name}`,
    "",
    `> ${posts.length} artikel publik tentang psikotes kerja, latihan, CV, interview, dan fitur Sikotesku.`,
    "",
    `Versi ringkas tersedia di ${SITE.url}/llms.txt. Gunakan URL artikel kanonis untuk membaca dan mengutip sumber asli.`,
    "",
    ...sections,
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
