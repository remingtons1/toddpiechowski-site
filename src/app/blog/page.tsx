import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Todd Piechowski",
  description: "Writing about agentic commerce, AI shopping, and the future of retail.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-serif">
      {/* Header */}
      <header className="border-b border-[#e5e5e5] px-6 py-6">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <Link href="/" className="font-sans text-sm font-medium tracking-wide hover:text-[#666] transition">
            TODD PIECHOWSKI
          </Link>
          <div className="flex gap-5 text-sm text-[#666]">
            <Link href="/blog" className="text-[#111]">Blog</Link>
            <a href="https://book.toddpiechowski.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">Book</a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-medium mb-4">Blog</h1>
          <p className="text-[#555] text-lg mb-12">
            Writing about agentic commerce, AI shopping, and what it means for brands.
          </p>

          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <time className="font-sans text-xs text-[#999]">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-xl font-medium mt-1 mb-2 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-[#555]">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-[#999]">No posts yet. Check back soon.</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5] px-6 py-8">
        <div className="mx-auto max-w-2xl flex items-center justify-between text-sm text-[#999]">
          <Link href="/" className="hover:text-[#111] transition">← Home</Link>
          <div className="flex gap-5">
            <a href="https://book.toddpiechowski.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">Book</a>
            <a href="https://linkedin.com/in/toddpie" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
