import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://toddpiechowski.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://toddpiechowski.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://toddpiechowski.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
