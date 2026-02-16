import Link from "next/link";

export default function Home() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Todd Piechowski",
    url: "https://toddpiechowski.com",
    jobTitle: "Agentic Commerce Expert",
    worksFor: {
      "@type": "Organization",
      name: "Envision Horizons",
      url: "https://envisionhorizons.com",
    },
    description:
      "Author of Instant Checkout. Building Horizon Shelf, the AI commerce gateway. Writing about agentic commerce.",
    sameAs: [
      "https://linkedin.com/in/toddpie",
      "https://instantcheckout.ai",
    ],
    knowsAbout: [
      "Agentic Commerce",
      "AI Shopping Agents",
      "E-commerce",
      "Product Data Optimization",
      "GXO",
      "AEO",
    ],
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-serif">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <header className="border-b border-[#e5e5e5] px-6 py-6">
        <div className="mx-auto max-w-2xl flex items-center justify-between">
          <span className="font-sans text-sm font-medium tracking-wide">TODD PIECHOWSKI</span>
          <div className="flex gap-5 text-sm text-[#666]">
            <Link href="/blog" className="hover:text-[#111] transition">Blog</Link>
            <a href="https://instantcheckout.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">Read My Book</a>
            <a href="https://linkedin.com/in/toddpie" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
            I write about agentic commerce.<br />
            I build the infrastructure for it.
          </h1>
          <p className="text-xl text-[#555] leading-relaxed mb-8">
            AI agents are starting to shop for people. I'm obsessed with what that means
            for brands, for retail, for the way we buy things. I wrote a book about it.
            Now I'm building the tools.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="#work" className="font-sans px-4 py-2 bg-[#111] text-white rounded hover:bg-[#333] transition">
              See my work
            </Link>
            <Link href="#hire" className="font-sans px-4 py-2 border border-[#ddd] rounded hover:border-[#999] transition">
              Work with me
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-[#e5e5e5] px-6 py-16 bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-sans text-xs font-medium tracking-widest text-[#999] mb-6">ABOUT</h2>
          <div className="space-y-5 text-lg text-[#333] leading-relaxed">
            <p>
              I run growth at <a href="https://envisionhorizons.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#111]">Envision Horizons</a>,
              an Amazon agency working with 8-figure brands. By day, I'm deep in e-commerce operations.
              By night, I'm building.
            </p>
            <p>
              I wrote <strong>Instant Checkout</strong> — the book on agentic commerce. It's about
              the shift happening right now: AI agents that research, recommend, and purchase on behalf
              of consumers. Most brands aren't ready. The ones I work with are.
            </p>
            <p>
              I'm also building <strong>Horizon Shelf</strong>, an AI commerce gateway that connects
              brands to every AI shopping channel — Google AI Mode, ChatGPT, and any agent that
              speaks MCP. The infrastructure layer for agentic retail.
            </p>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="border-t border-[#e5e5e5] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-sans text-xs font-medium tracking-widest text-[#999] mb-6">THE SHIFT</h2>
          <div className="space-y-5 text-lg text-[#333] leading-relaxed">
            <p>
              We're moving from SEO to what I call <strong>GXO</strong> — Generative Experience
              Optimization. The old game was optimizing for search crawlers. The new game is
              optimizing for AI agents that need to <em>act</em>, not just read.
            </p>
            <p>
              An AI agent doesn't care about your marketing copy. It needs machine-readable
              certainty: Is this waterproof? What's the return window? Can I buy it right now?
              Products need to become <em>agent-legible</em>.
            </p>
            <p>
              Brands that figure this out first build moats. Everyone else plays catch-up.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-[#e5e5e5] px-6 py-16 bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-sans text-xs font-medium tracking-widest text-[#999] mb-8">WORK</h2>

          <div className="space-y-10">
            <a href="https://instantcheckout.ai" target="_blank" rel="noopener noreferrer" className="block group">
              <h3 className="text-xl font-medium mb-2 group-hover:underline">Instant Checkout ↗</h3>
              <p className="text-[#555] mb-2">
                The agentic commerce playbook. How AI agents shop, what brands need to do,
                and where this is all heading.
              </p>
              <span className="font-sans text-xs text-[#999]">Book</span>
            </a>

            <div>
              <h3 className="text-xl font-medium mb-2">Horizon Shelf</h3>
              <p className="text-[#555] mb-2">
                AI commerce gateway. Connects brands to Google AI Mode (UCP), ChatGPT (ACP),
                and custom agents (MCP). Enriches product data, generates Certainty Scores,
                makes products buyable by AI.
              </p>
              <span className="font-sans text-xs text-[#999]">Infrastructure · In Production</span>
            </div>

            <a href="https://trackbuy.ai" target="_blank" rel="noopener noreferrer" className="block group">
              <h3 className="text-xl font-medium mb-2 group-hover:underline">TrackBuy ↗</h3>
              <p className="text-[#555] mb-2">
                AI shopping agent analytics. Track how AI agents discover, evaluate,
                and recommend your products across ChatGPT, Perplexity, and Google AI Mode.
              </p>
              <span className="font-sans text-xs text-[#999]">SaaS · Coming Soon</span>
            </a>

            <a href="https://dealdraft.online" target="_blank" rel="noopener noreferrer" className="block group">
              <h3 className="text-xl font-medium mb-2 group-hover:underline">DealDraft ↗</h3>
              <p className="text-[#555] mb-2">
                Auto-generates offering memorandums for commercial real estate.
                Property data in, professional investor PDFs out.
              </p>
              <span className="font-sans text-xs text-[#999]">SaaS · Built in a weekend</span>
            </a>

            <a href="https://blankpop.online" target="_blank" rel="noopener noreferrer" className="block group">
              <h3 className="text-xl font-medium mb-2 group-hover:underline">BlankPop ↗</h3>
              <p className="text-[#555] mb-2">
                Commerce-driven ChatGPT app for print-on-demand. Users design custom products
                through conversation, then purchase directly. AI-native shopping in action.
              </p>
              <span className="font-sans text-xs text-[#999]">Custom GPT · 2 days</span>
            </a>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="hire" className="border-t border-[#e5e5e5] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-sans text-xs font-medium tracking-widest text-[#999] mb-6">WORK WITH ME</h2>
          <div className="space-y-5 text-lg text-[#333] leading-relaxed mb-8">
            <p>
              I take on a limited number of projects. Two kinds of work:
            </p>
            <p>
              <strong>Agentic commerce consulting.</strong> AI visibility audits, structured data
              strategy, protocol implementation. I help brands become findable and buyable by AI agents.
            </p>
            <p>
              <strong>Fast builds.</strong> MVPs, internal tools, AI automations, dashboards.
              I use AI-powered development to ship in days what used to take weeks. Fixed price,
              you own the code.
            </p>
          </div>

          <div className="bg-white border border-[#e5e5e5] rounded-lg p-6 mb-6">
            <div className="flex flex-wrap justify-between items-baseline mb-4">
              <span className="font-sans text-sm font-medium">Most projects</span>
              <span className="font-sans text-2xl font-medium">$2,500 – $5,000</span>
            </div>
            <p className="text-[#555] text-sm mb-4">
              30-min call to scope it. Fixed quote within 24 hours. Shipped in 5-7 days.
              Source code is yours.
            </p>
            <a
              href="https://calendar.app.google/8iLoMGuvMwUGdCFx7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans inline-block px-5 py-2.5 bg-[#111] text-white text-sm rounded hover:bg-[#333] transition"
            >
              Book a call
            </a>
          </div>

          <p className="text-sm text-[#999]">
            Or email me: todd.piechowski@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e5e5] px-6 py-8">
        <div className="mx-auto max-w-2xl flex items-center justify-between text-sm text-[#999]">
          <span>© {new Date().getFullYear()}</span>
          <div className="flex gap-5">
            <a href="https://instantcheckout.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">Book</a>
            <a href="https://linkedin.com/in/toddpie" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
