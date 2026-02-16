import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostsIncludingFuture } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Pre-build all posts including future ones so they're ready when their date arrives
  const posts = getAllPostsIncludingFuture();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `https://toddpiechowski.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Todd Piechowski`,
    description: post.excerpt,
    keywords: post.tags?.join(", "),
    authors: [{ name: "Todd Piechowski" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.date,
      authors: ["Todd Piechowski"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@toddpiechowski",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let inCodeBlock = false;
    let codeContent: string[] = [];

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ");
        if (text.trim()) {
          elements.push(
            <p key={elements.length} className="mb-5">
              {renderInlineFormatting(text)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const renderInlineFormatting = (text: string) => {
      // Handle inline code
      const parts = text.split(/(`[^`]+`)/g);
      return parts.map((part, i) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="bg-[#f0f0f0] px-1.5 py-0.5 rounded text-sm font-mono">
              {part.slice(1, -1)}
            </code>
          );
        }
        // Handle bold
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((bp, j) => {
          if (bp.startsWith("**") && bp.endsWith("**")) {
            return <strong key={`${i}-${j}`}>{bp.slice(2, -2)}</strong>;
          }
          return bp;
        });
      });
    };

    for (const line of lines) {
      // Code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={elements.length} className="bg-[#111] text-[#e8e8e8] p-4 rounded-lg overflow-x-auto mb-5 text-sm font-mono">
              <code>{codeContent.join("\n")}</code>
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          flushParagraph();
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      // Headers
      if (line.startsWith("## ")) {
        flushParagraph();
        elements.push(
          <h2 key={elements.length} className="text-2xl font-medium mt-10 mb-4">
            {line.slice(3)}
          </h2>
        );
        continue;
      }

      if (line.startsWith("### ")) {
        flushParagraph();
        elements.push(
          <h3 key={elements.length} className="text-xl font-medium mt-8 mb-3">
            {line.slice(4)}
          </h3>
        );
        continue;
      }

      // Empty line = paragraph break
      if (line.trim() === "") {
        flushParagraph();
        continue;
      }

      // Regular text
      currentParagraph.push(line);
    }

    flushParagraph();
    return elements;
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-serif">
      {/* Header */}
      <header className="border-b border-[#e5e5e5] px-6 py-6">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <Link href="/" className="font-sans text-sm font-medium tracking-wide hover:text-[#666] transition">
            TODD PIECHOWSKI
          </Link>
          <div className="flex gap-5 text-sm text-[#666]">
            <Link href="/blog" className="hover:text-[#111] transition">Blog</Link>
            <a href="https://twitter.com/toddpiechowski" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">Twitter</a>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="font-sans text-sm text-[#999] hover:text-[#111] transition">
            ← Back to blog
          </Link>

          <header className="mt-8 mb-10">
            <time className="font-sans text-sm text-[#999]">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl md:text-4xl font-medium mt-2 leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="text-lg text-[#333] leading-relaxed">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5] px-6 py-8">
        <div className="mx-auto max-w-2xl flex items-center justify-between text-sm text-[#999]">
          <Link href="/blog" className="hover:text-[#111] transition">← All posts</Link>
          <div className="flex gap-5">
            <a href="https://twitter.com/toddpiechowski" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">Twitter</a>
            <a href="https://linkedin.com/in/toddpie" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
