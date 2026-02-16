export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

// Blog posts - add new posts anywhere, they sort by date automatically
// Posts with future dates won't show until that date arrives
export const posts: Post[] = [
  // Week 1: The Shift Is Happening
  {
    slug: "agentic-commerce-manifesto",
    title: "The Agentic Commerce Manifesto",
    date: "2026-04-17",
    tags: ["agentic commerce", "future of retail", "AI shopping"],
    excerpt: "Everything I believe about where commerce is heading. The principles that will separate winners from losers.",
    content: `
This is what I believe.

AI agents will become the primary way people discover and purchase products. Not the only way—but the dominant way. The shift will happen faster than mobile did.

Most brands will be invisible to these agents. Not because the technology failed them, but because they optimized for the wrong things. They wrote marketing copy when they should have written machine-readable data. They optimized for Google's crawler when they should have optimized for Google's AI.

The brands that win will be the ones that understand a fundamental truth: **agents don't read, they compute.**

## The Principles

**1. Deterministic beats descriptive.**

"Fast shipping" is descriptive. \`transitTime: 2\` is deterministic. One is for humans. One is for agents. You need both, but most brands only have the first.

**2. Certainty enables action.**

An agent won't buy a product it's uncertain about. Uncertainty comes from missing data, ambiguous attributes, unclear policies. Every gap in your product data is friction in the AI funnel.

**3. Protocols are the new platforms.**

UCP, ACP, MCP—these aren't just technical standards. They're the new storefronts. Brands that implement them early get discovered. Brands that wait get invisible.

**4. First movers compound.**

AI agents learn. They remember which brands had good data, fast responses, successful transactions. Early trust becomes a moat.

**5. The middlemen change, not the fundamentals.**

Agents are intermediaries, like search engines were, like marketplaces were. The fundamentals still matter: good products, fair prices, reliable fulfillment. What changes is how customers find you.

## What This Means

If you're a brand, start now. Audit your product data. Test your visibility. Learn the protocols.

If you're building tools, build for this future. The infrastructure layer is wide open.

If you're an investor, look for companies that understand this shift. Most don't.

The window is open. It won't stay open forever.
    `.trim(),
  },
  {
    slug: "what-shopping-looks-like-2028",
    title: "What Shopping Looks Like in 2028",
    date: "2026-04-14",
    tags: ["future of retail", "AI shopping", "predictions"],
    excerpt: "A realistic look at how AI agents will change the way we buy things in the next two years.",
    content: `
It's 2028. Here's how you buy things now.

You tell your agent you need new running shoes. Not by opening an app—just by mentioning it while you're doing something else. "I should get new running shoes, these are shot."

Your agent already knows your size (from previous purchases), your preference for stability shoes (from your gait data), your budget range (from your financial patterns), and that you prefer brands that don't use overseas sweatshops (from your stated values).

Within seconds, it's narrowed 10,000 options to three. It shows you why: this one has the best reviews from runners with your gait pattern, this one is the best value, this one is from a brand you've bought before and rated highly.

You pick one. Or you say "just get the best one." Either way, it's purchased, and it'll arrive tomorrow.

## What Changed

**Discovery is invisible.** You didn't search. You didn't browse. You didn't compare prices across tabs. The agent did all of that, using protocols and data sources you never see.

**Brands compete on data, not ads.** The shoes that won didn't win because of a compelling Instagram ad. They won because their product data was complete, accurate, and machine-readable. The agent could verify claims, check inventory, confirm shipping times.

**Trust is computed, not felt.** You trust the recommendation because you trust your agent. The agent trusts the product because it can verify the data. The entire transaction happens without you reading a single review.

## What Stays The Same

Product quality still matters. Bad shoes are still bad shoes.

Price still matters. The agent is comparing prices across every retailer.

Fulfillment still matters. Late deliveries get remembered.

## What Dies

Browsing for fun becomes niche—like vinyl records.

Most advertising becomes irrelevant. You can't interrupt an agent.

SEO as we know it ends. Agents don't use search boxes.

## The Transition

We're in the messy middle right now. Agents can recommend but most can't buy. Brands are optimizing for the old world while the new one emerges.

The brands that start preparing now will own 2028. The ones that wait will spend 2028 trying to catch up.
    `.trim(),
  },
  {
    slug: "building-your-first-ai-product-feed",
    title: "Building Your First AI Product Feed",
    date: "2026-04-09",
    tags: ["implementation", "product data", "tutorial"],
    excerpt: "A practical guide to creating a product feed that AI agents can actually use.",
    content: `
You have products. AI agents need to find them and understand them. Here's how to bridge that gap.

## What AI Agents Need

An AI agent looking at your product needs to answer questions like:
- What exactly is this?
- How much does it cost (right now, not "starting at")?
- Can I buy it (is it in stock)?
- When will it arrive?
- What happens if I don't like it?

Your current product pages probably answer these questions—for humans. But agents need structured data they can parse programmatically.

## The Minimum Viable Feed

Start with JSON. Here's the bare minimum for each product:

\`\`\`json
{
  "id": "SKU-12345",
  "name": "Ultraboost Running Shoe",
  "brand": "Adidas",
  "price": {
    "amount": 180.00,
    "currency": "USD"
  },
  "availability": "in_stock",
  "inventory_count": 47,
  "shipping": {
    "standard_days": 5,
    "express_days": 2,
    "free_threshold": 50.00
  },
  "returns": {
    "window_days": 30,
    "free": true
  }
}
\`\`\`

Notice what's NOT in there: "Premium cushioning technology delivers an incredibly soft feel." Agents don't care. That's for your product page.

## Adding Deterministic Attributes

Now add the attributes that let agents filter and compare:

\`\`\`json
{
  "attributes": {
    "category": ["Footwear", "Running", "Road Running"],
    "size": "10",
    "color": "Core Black",
    "gender": "mens",
    "arch_support": "neutral",
    "weight_oz": 11.5,
    "drop_mm": 10,
    "waterproof": false,
    "reflective": true
  }
}
\`\`\`

These are facts, not marketing. An agent can now answer "show me neutral running shoes under 12 oz" without parsing your copywriting.

## Serving The Feed

Create an endpoint that returns your full catalog in this format. Keep it simple:

\`GET /api/products\` → returns all products
\`GET /api/products/{id}\` → returns one product

Add cache headers. Agents will poll this.

## The Certainty Score

Once your feed exists, you can calculate a "certainty score" for each product—how confident can an agent be about purchasing this?

- Has price? +20
- Has real-time inventory? +20
- Has shipping times as integers? +15
- Has return policy? +15
- Has all category-relevant attributes? +30

Products with scores below 70 are risky for agents to recommend. They'll prefer competitors with complete data.

## Next Steps

1. Export your current catalog to JSON
2. Identify what's missing (usually: real inventory counts, integer shipping times, return policies)
3. Fill the gaps
4. Create the endpoint
5. Test by asking ChatGPT/Claude about your products

You don't need UCP or ACP to start. You need clean, structured data. The protocols come later.
    `.trim(),
  },
  {
    slug: "why-your-competitors-might-already-be-ahead",
    title: "Why Your Competitors Might Already Be Ahead",
    date: "2026-03-19",
    tags: ["AI visibility", "competitive analysis", "strategy"],
    excerpt: "How to find out if other brands in your category have figured out agentic commerce before you.",
    content: `
Here's a uncomfortable exercise. Go to ChatGPT, Claude, or Perplexity and ask: "What's the best [your product category] for [common use case]?"

Does your brand come up? Do your competitors?

I ran this test across 50 product categories last month. In 34 of them, the AI recommended a brand that most humans wouldn't consider the market leader. Why? Because that brand had better structured data, more AI-readable content, or simply more presence in the training data.

## The Visibility Gap Is Real

A brand with 10% market share can have 50% AI visibility if they've optimized for it. A brand with 50% market share can have 0% AI visibility if they haven't.

This isn't theoretical. I've seen DTC brands with $5M in revenue show up in AI recommendations while their $500M competitors are invisible.

## How To Check

**Step 1: Direct product queries**
Ask AI about your specific products. "Tell me about [Product Name] from [Brand]." If the AI struggles to give accurate information, your product data isn't in its training set or accessible via search.

**Step 2: Category queries**
"What are the best [product category] for [use case]?" See if you're mentioned. See who is.

**Step 3: Comparison queries**
"Compare [Your Brand] vs [Competitor]." What attributes does the AI use for comparison? Are they accurate? Where does it get its information?

**Step 4: Purchase-intent queries**
"I need to buy [product]. What should I get?" This is the money query. If you don't show up here, you're losing sales.

## What Winners Are Doing Differently

The brands that show up consistently:

1. **Have extensive FAQ content** that mirrors how people ask AI questions
2. **Publish detailed spec sheets** with actual numbers, not marketing ranges
3. **Get mentioned in reviews and comparisons** on sites AI trusts
4. **Use structured data** (Schema.org) correctly and completely
5. **Have consistent information** across all channels (AI notices contradictions)

## The Catch-Up Problem

Here's the bad news: AI visibility compounds. Agents learn from past recommendations. Brands that are visible today get more data about what converts, which makes them more visible tomorrow.

If your competitor figured this out six months ago, they have a six-month head start on that flywheel.

The good news: most brands haven't figured it out. The window to become a first mover in your category might still be open.

But check. Today.
    `.trim(),
  },
  {
    slug: "faq-pages-are-your-secret-weapon",
    title: "FAQ Pages Are Your Secret Weapon",
    date: "2026-03-21",
    tags: ["content strategy", "AI visibility", "SEO"],
    excerpt: "The most underrated content type for AI visibility is the one most brands ignore.",
    content: `
Every brand has an FAQ page. Almost every brand's FAQ page is useless for AI visibility.

Here's why this matters: AI agents answer questions. When someone asks ChatGPT "is [product] good for [use case]?", the AI is looking for question-answer pairs it can draw from. Your FAQ page should be feeding it exactly that.

Instead, most FAQ pages have:
- "How do I track my order?"
- "What's your return policy?"
- "How do I contact customer service?"

These are logistics questions. They're necessary but they don't help AI agents understand your products.

## The AI-Optimized FAQ

Your FAQ should answer the questions AI agents are getting asked about your category:

**Product understanding:**
- "Is [product] good for [specific use case]?"
- "What's the difference between [product A] and [product B]?"
- "Does [product] work for [specific situation]?"

**Comparison questions:**
- "How does [product] compare to [competitor]?"
- "Is [product] worth the price?"
- "What's better, [your product] or [alternative]?"

**Technical questions:**
- "What are the specs of [product]?"
- "Is [product] compatible with [thing]?"
- "How long does [product] last?"

## How To Build It

**Step 1:** Search your category in ChatGPT, Claude, Perplexity. What questions do they answer? What questions do they struggle with?

**Step 2:** Look at your customer service logs. What do people actually ask before buying?

**Step 3:** Check "People Also Ask" boxes in Google for your product category.

**Step 4:** Write clear, direct answers. Not marketing speak. "Yes, [product] is good for [use case] because [specific reason]." or "No, [product] isn't ideal for [use case]. Consider [alternative] instead."

**Step 5:** Use the actual question as the header. Don't write "Product Suitability"—write "Is [Product] Good For Running?"

## The Schema Markup

Wrap your FAQ in proper Schema.org FAQ markup. This makes it explicitly machine-readable:

\`\`\`json
{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Is the UltraBoost good for marathon training?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. The UltraBoost is designed for long-distance running with energy-return cushioning rated for 500+ miles."
    }
  }]
}
\`\`\`

## Why This Works

AI agents are trained on the web. Content that's structured as questions and answers is exactly what they're looking for when they need to answer user queries.

Your FAQ is the one place on your site where you're explicitly providing Q&A pairs. Make it count.

Most of your competitors' FAQ pages are still "How do I reset my password?"

That's your opportunity.
    `.trim(),
  },
  {
    slug: "certainty-score-explained",
    title: "What Is a Certainty Score?",
    date: "2026-03-12",
    tags: ["agentic commerce", "product data", "certainty score"],
    excerpt: "The metric that determines whether an AI agent will recommend your product—or skip it.",
    content: `
An AI agent is about to recommend a product to a user who asked for "the best wireless earbuds for working out."

The agent has three options it's considering. All three have good reviews. All three are in the right price range. But only one has complete, machine-readable data about sweat resistance, battery life, and fit security.

The agent recommends the one with complete data. Not because it's objectively better—but because the agent is *certain* about what it's recommending.

This is the Certainty Score.

## Why Certainty Matters

AI agents don't like to be wrong. When they recommend a product and the user has a bad experience, that's a failure. Agents are designed to minimize failure.

Incomplete data creates uncertainty. Uncertainty creates risk. Risk makes agents recommend someone else.

## What Goes Into The Score

A Certainty Score (0-100) measures how "buyable" a product is for an autonomous agent:

**Availability (20 points)**
- Real-time inventory count? +10
- Clear in-stock/out-of-stock status? +5
- Backorder information? +5

**Pricing (20 points)**
- Exact current price (not "starting at")? +10
- Currency specified? +5
- Sale/regular price clarity? +5

**Fulfillment (20 points)**
- Shipping time as integer days? +10
- Shipping cost as exact amount? +5
- Express option available? +5

**Returns (15 points)**
- Return window in days? +5
- Free returns or return cost? +5
- Return policy clearly stated? +5

**Attributes (25 points)**
- All category-relevant specs present? +15
- Boolean/integer format (not descriptive)? +10

## Example Scores

**Product A: Score 94**
\`\`\`
price: $79.99 ✓
inventory: 234 units ✓
ships_in: 2 days ✓
returns: 30 days, free ✓
sweat_resistant: true ✓
battery_hours: 8 ✓
\`\`\`

**Product B: Score 52**
\`\`\`
price: "From $69.99" ✗
inventory: "In Stock" (no count) ~
ships_in: "Fast shipping" ✗
returns: "Easy returns" ✗
sweat_resistant: "Built for workouts" ✗
battery_hours: "All-day battery" ✗
\`\`\`

Product A is agent-ready. Product B is human-ready. In agentic commerce, Product A wins.

## The Threshold

Based on what I've seen, products below 70 are risky for agents. They'll prefer higher-certainty alternatives.

Products above 85 are agent-ready. They'll be recommended confidently.

Products at 95+ are agent-optimized. They'll win in competitive categories.

## How To Calculate Yours

Audit your product data against the criteria above. Be honest about what's actually machine-readable vs. what requires a human to interpret.

Most brands I've audited score between 40-60. They have the information—just not in a format agents can use.

That gap is the opportunity.
    `.trim(),
  },
  {
    slug: "from-seo-to-gxo",
    title: "From SEO to GXO: The Next Optimization Game",
    date: "2026-02-13",
    tags: ["GXO", "SEO", "agentic commerce", "strategy"],
    excerpt: "SEO optimized for crawlers. GXO optimizes for agents. Here's what changes.",
    content: `
For 25 years, we optimized for search crawlers. Keywords, backlinks, page speed, meta tags. We called it SEO.

That game isn't over—but a new game is starting. I call it GXO: Generative Experience Optimization.

## The Difference

**SEO asks:** How do I rank in search results?
**GXO asks:** How do I get recommended by AI?

**SEO optimizes for:** Google's crawler
**GXO optimizes for:** AI agents (including Google's)

**SEO success metric:** Search ranking position
**GXO success metric:** AI recommendation rate

**SEO content format:** Keywords in copy
**GXO content format:** Structured data agents can parse

## What Changes

### Discovery

In SEO, you're trying to appear on page one of search results. Users see a list and choose.

In GXO, there might be no list. The agent just recommends a product. Or it shows three options max. "Page one" doesn't exist. You're either the recommendation or you're invisible.

### Content

SEO content is written for humans but engineered for crawlers. "Best running shoes for flat feet" repeated strategically.

GXO content is written for agents to understand. Structured data. Deterministic attributes. Q&A pairs. The "writing" matters less than the data structure.

### Trust Signals

SEO trust: backlinks, domain authority, page age.

GXO trust: data completeness, consistency across sources, transaction history, certainty scores.

### Competition

In SEO, you compete on ranking factors. More backlinks, better content, faster site.

In GXO, you compete on data quality. More complete attributes, real-time accuracy, machine-readable policies.

## What Stays The Same

Good products still matter. AI agents aren't going to recommend garbage just because it has good structured data.

Content still matters. But it's FAQ content, spec sheets, comparison pages—not blog posts stuffed with keywords.

Authority still matters. But it's citations in AI training data, mentions in trusted sources, consistent brand presence.

## The Transition

Right now, both games are running simultaneously. Google still has traditional search results AND AI Mode. Brands need to play both.

But the balance is shifting. Zero-click searches are rising. AI recommendations are gaining trust. The percentage of commerce that goes through agents will only grow.

Brands that invest in GXO now will have a head start. The ones that wait until SEO is dead will be too late.

This isn't a prediction. It's pattern recognition. We've seen this before with mobile, with social, with Amazon. The platforms that control discovery, control commerce.

AI agents are the next platform. Optimize accordingly.
    `.trim(),
  },
  {
    slug: "how-chatgpt-recommends-products",
    title: "How ChatGPT Recommends Products (And How to Show Up)",
    date: "2026-02-16",
    tags: ["ChatGPT", "AI shopping", "visibility"],
    excerpt: "Inside the mechanics of how ChatGPT finds, evaluates, and recommends products to users.",
    content: `
When someone asks ChatGPT "what's the best [product] for [use case]?", what actually happens?

Understanding this is the first step to showing up in recommendations.

## The Mechanics

**Step 1: Training data**
ChatGPT's base knowledge comes from its training data—web content, reviews, articles, forums from before its training cutoff. If your brand was well-represented in that corpus, you have an advantage.

**Step 2: Web browsing (when enabled)**
For current information, ChatGPT can browse the web. It's looking for recent reviews, product pages, comparison articles. This is where current SEO still matters.

**Step 3: Synthesis**
ChatGPT combines training knowledge with browsed content to form recommendations. It's not just repeating what it found—it's synthesizing across sources.

**Step 4: Confidence thresholds**
If ChatGPT isn't confident about a recommendation, it hedges ("I don't have specific information about...") or asks for more details. High-confidence recommendations come from consistent data across multiple sources.

## What Gets You Recommended

**Presence in training data**
- Reviews on major publications
- Reddit discussions mentioning your brand
- Comparison articles that include you
- Forum recommendations

**Current web presence**
- Product pages with clear, structured information
- Recent reviews (within the last year)
- Active discussions on social platforms
- Consistent pricing/availability information

**Data consistency**
ChatGPT notices when your specs differ across sources. Inconsistency reduces confidence. Make sure your product information is the same everywhere.

**Category-relevant content**
If someone asks about "running shoes for overpronation," you need content that explicitly addresses overpronation. Not just "great support"—the specific term.

## What Gets You Skipped

**Thin content**
Product pages that are just marketing fluff without real specifications.

**Outdated information**
Products that were last reviewed in 2022 feel stale to an agent browsing in 2026.

**Inconsistent data**
Different prices on different sites. Conflicting specs. Unclear availability.

**Missing from conversations**
If you're not being discussed on Reddit, review sites, or forums, you're not in the training data either.

## The Action Plan

1. **Audit your training data presence**: Google your brand + Reddit, your brand + reviews, your brand + vs competitor. Are you part of the conversation?

2. **Fix your product pages**: Real specs, not marketing copy. FAQ sections that answer the questions AI gets asked.

3. **Get reviewed**: Recent reviews on sites AI browses. Not just your own site—third-party publications.

4. **Be consistent**: Same information everywhere. Agents check multiple sources.

5. **Test regularly**: Ask ChatGPT about your products monthly. See how recommendations change.

ChatGPT isn't a black box. It's pulling from sources you can influence. Start influencing them.
    `.trim(),
  },
  {
    slug: "what-is-agentic-commerce",
    title: "What Is Agentic Commerce? A Simple Explanation",
    date: "2026-02-11",
    tags: ["agentic commerce", "fundamentals", "AI shopping"],
    excerpt: "A clear definition of agentic commerce and why every brand needs to understand it.",
    content: `
Agentic commerce is when AI agents shop on behalf of humans.

That's it. That's the definition.

But the implications are massive.

## What "Agents Shop" Actually Means

Today, when you need to buy something, you search, browse, compare, and purchase. You do the work.

In agentic commerce, AI does that work. You tell the agent what you need. The agent finds options, evaluates them, makes recommendations, and can even complete the purchase.

Google AI Mode already does this. ChatGPT is building toward it. Every major AI company is working on shopping capabilities.

## Why This Changes Everything

**Discovery changes.** You don't need to rank #1 in search if the agent just tells the user what to buy. But you need the agent to know you exist.

**Comparison changes.** Agents compare products using structured data, not marketing copy. They can evaluate 1,000 products in seconds.

**Trust changes.** Users trust their agent. The agent trusts data. Brand trust becomes indirect—you need to be trusted by the AI to be trusted by the human.

**Conversion changes.** The path from need to purchase compresses. Fewer steps, less browsing, more direct transactions.

## Who This Affects

**Brands.** Your product data needs to be machine-readable. Your visibility to AI is now a competitive factor.

**Retailers.** The storefront becomes less important. The data feed becomes more important.

**Marketers.** Advertising to humans still matters, but advertising to agents doesn't exist (yet). Discovery happens through data.

**Consumers.** Shopping gets easier but also more opaque. You're trusting an AI to choose for you.

## The Timeline

This isn't future speculation. Google AI Mode is live. ChatGPT plugins enable purchasing. Amazon is building agent interfaces.

We're in the early stages—maybe where mobile commerce was in 2010. Clearly important, not yet dominant.

But every indicator points the same direction: agents will control an increasing share of commerce. The brands that prepare now will be ready. The ones that wait will scramble.

## What To Do

1. **Understand your AI visibility.** Ask AI agents about your products. Are you recommended?

2. **Audit your product data.** Is it structured? Machine-readable? Complete?

3. **Learn the protocols.** UCP, ACP, MCP. These are how agents will transact.

4. **Start optimizing.** Not for search crawlers. For AI agents.

Agentic commerce is the next era of retail. It's already starting.
    `.trim(),
  },
  {
    slug: "ai-agents-are-already-shopping",
    title: "AI Agents Are Already Shopping",
    date: "2026-02-10",
    tags: ["agentic commerce", "AI shopping", "Google AI Mode"],
    excerpt: "This isn't a prediction. It's happening right now. Here's what brands need to understand.",
    content: `
AI agents are shopping for people right now. Not in some hypothetical future. Today.

Google AI Mode recommends products and can complete purchases. ChatGPT browses the web, compares options, and makes buying suggestions. Perplexity answers "what's the best X for Y" with specific product recommendations.

The question isn't whether this will affect your brand. It's whether you're visible to these agents at all.

## The Visibility Problem

Most brands are invisible to AI. Not because the agents can't find them—but because there's nothing for an agent to act on.

Your product page says "Fast Shipping." An AI agent needs \`transitTime: 2\` (an integer it can compare).

Your listing says "water-resistant design." An AI needs \`waterproof: true\` (a boolean it can filter on).

Marketing copy is for humans. Agents need machine-readable certainty.

## What This Means

If you're a brand doing any meaningful revenue online, you need to start thinking about this now. Not because the traffic is massive yet—it isn't. But because the brands that figure this out first will build moats.

SEO took years for most companies to take seriously. By the time they did, the first movers had already locked in their positions.

This is the same moment. Earlier, actually.

## Where to Start

First, understand how AI agents currently see your brand. Ask ChatGPT, Claude, Perplexity about your product category. Are you mentioned? Are your competitors?

Second, look at your product data. Is it structured? Could a machine parse your shipping times, return policies, product attributes without reading marketing copy?

Third, learn the protocols. UCP (Google), ACP (OpenAI), MCP (open standard). These are how agents will interact with commerce. They're not widely adopted yet. That's the opportunity.

More on all of this in upcoming posts.
    `.trim(),
  },
];

export function getAllPosts(): Post[] {
  const today = new Date();
  today.setHours(23, 59, 59, 999); // Include all of today

  return posts
    .filter((post) => new Date(post.date) <= today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  const post = posts.find((post) => post.slug === slug);
  if (post && new Date(post.date) <= today) {
    return post;
  }
  return undefined;
}

export function getAllPostsIncludingFuture(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
