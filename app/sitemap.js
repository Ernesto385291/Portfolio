import { getPosts } from "../lib/content";
import { siteConfig } from "../lib/seo";

export default async function sitemap() {
  const posts = await getPosts();
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteConfig.url,
          es: `${siteConfig.url}/es`,
        },
      },
    },
    {
      url: `${siteConfig.url}/es`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: siteConfig.url,
          es: `${siteConfig.url}/es`,
        },
      },
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/article/${post.id}`,
      lastModified: post.updatedAt ?? post.publishedAt ?? now,
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
