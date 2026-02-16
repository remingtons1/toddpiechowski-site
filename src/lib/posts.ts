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
    slug: "agent-readiness-audit",
    title: "The Agent-Readiness Audit: Score Your Brand in 15 Minutes",
    date: "2026-04-17",
    tags: ["agentic commerce", "audit", "strategy"],
    excerpt: "A diagnostic framework to assess where you stand across five dimensions—and where to focus first.",
    content: `
Before you can improve, you need to know where you stand. This is the agent-readiness audit I use with brands.

Score yourself honestly on each dimension (1-5). Most companies think their product data is better than it actually is. The gaps become apparent only when you examine what an agent would actually see.

## Dimension 1: Data Completeness

How thoroughly are your products described in structured, machine-readable formats?

**Score 1**: Basic product info only. No schema markup. Inconsistent across channels.
**Score 3**: Partial schema markup. Key products documented. Some gaps in specs.
**Score 5**: Comprehensive structured data. All products fully attributed. Consistent everywhere.

Ask yourself: Do we have schema markup for every product? Are specifications in structured form? Is data consistent across all platforms?

## Dimension 2: Technical Accessibility

Can agents interact with your commerce systems programmatically?

**Score 1**: No APIs. Website-only presence. No programmatic access.
**Score 3**: Basic inventory API. Limited real-time data. Checkout not agent-accessible.
**Score 5**: Full API suite. Real-time inventory/pricing. Agent-compatible checkout.

A beautiful website means nothing if agents can't access your data.

## Dimension 3: Reputation Signals

What do the sources agents consult say about you?

**Score 1**: Few reviews. No expert coverage. Unknown return rates.
**Score 3**: Moderate review volume. Some expert mentions. Basic satisfaction tracking.
**Score 5**: Strong review profile. Expert endorsements. Low return rates.

These signals get weighted heavily. If they're weak, agents deprioritize you regardless of marketing spend.

## Dimension 4: Product Differentiation

Do your products have clear advantages for specific use cases?

**Score 1**: Generic positioning. "Good for everyone." No documented use cases.
**Score 3**: Some segment focus. Partial attribute documentation.
**Score 5**: Clear segment targeting. Documented advantages in structured data.

Agents recommend based on fit. Generic products that try to serve everyone often serve no one from an agent's perspective.

## Dimension 5: Organizational Readiness

Does your organization understand and prioritize agent commerce?

**Score 1**: No ownership. No budget. No awareness.
**Score 3**: Awareness exists. Some exploration. No dedicated resources.
**Score 5**: Executive sponsor. Dedicated team. Metrics aligned.

## Scoring Interpretation

**5-10**: Critical gaps. Prioritize foundational work immediately.
**11-17**: Developing. Clear roadmap needed. Competitive disadvantage growing.
**18-21**: Progressing. Continue investment. Focus on weakest dimensions.
**22-25**: Agent-ready. Maintain position. Optimize for emerging opportunities.

## What To Do With Your Score

Start with your lowest dimension. That's your constraint.

Most brands score 8-14. The good news: your competitors are probably in the same boat. The bad news: the brands that move first will compound their advantage.

The sequence matters. Companies that jump to organizational changes before fixing data will have capable teams with nothing to work with.

**Priority order:**
1. Data foundation (without this, nothing else works)
2. Technical infrastructure (enables transactions)
3. Reputation cultivation (influences agent evaluation)
4. Product optimization (improves matchability)
5. Organizational capability (sustains everything)

Run this audit today. Share the results with your team. The window for establishing advantage is finite.
    `.trim(),
  },
  {
    slug: "decision-stack",
    title: "The Decision Stack: How Agents Actually Buy",
    date: "2026-04-14",
    tags: ["agentic commerce", "decision stack", "implementation"],
    excerpt: "Every agent purchase moves through five stages. Here's how to win at each one.",
    content: `
When an agent makes a purchase, it doesn't just search and buy. It moves through a sophisticated sequence I call the Decision Stack. Understanding this is essential for anyone who wants their products to get purchased.

## The Five Stages

**Stage 1: Intent Interpretation**

The agent must understand what the user actually needs. "I need running shoes" communicates almost nothing specific. What kind of running? Road or trail? What's the budget? Any brand preferences?

Modern agents infer this from your data: purchase history (you've bought Brooks three times), fitness apps (you run 15-20 miles weekly on pavement), calendar context (half-marathon in 8 weeks), stated preferences ("I hate narrow shoes").

**Your action:** Make sure your product attributes match how users describe their needs. If people search for "overpronation" your structured data needs that term—not just "great support."

**Stage 2: Research**

The agent identifies options that might fulfill the interpreted need. This happens across multiple data sources simultaneously: product databases, merchant inventory, review aggregations, expert assessments, price history.

**Your action:** Exist in the databases agents query. Schema.org markup is the minimum. APIs for real-time inventory are increasingly essential.

**Stage 3: Evaluation**

The agent ranks options against competing priorities. One shoe might be the best performer but exceeds budget. Another might be best value but has durability concerns.

A sophisticated agent weighs risk tolerance (has user bought this brand before?), familiarity value (is there certainty with a known option?), and timing (does delivery work for their schedule?).

**Your action:** Reduce uncertainty. Complete data, consistent information across sources, strong reviews. Every gap in your product data is friction in the agent's evaluation.

**Stage 4: Transaction**

The agent secures the item and processes payment. This requires authorization (agentic tokens), payment processing (within pre-approved limits), deal optimization (coupon codes, cash-back), and confirmation handling.

**Your action:** Support agent-compatible checkout. APIs, authentication, real-time inventory confirmation.

**Stage 5: Fulfillment**

The purchase isn't complete when the transaction processes. The agent monitors delivery, can initiate returns if needed, and follows up on satisfaction.

**Your action:** Deliver what you promised. An agent that recommends products users return is a bad agent—creating pressure for accuracy that benefits honest brands.

## How Products Win

To be selected, a product must pass through each stage:

- **Intent**: Category must match the need
- **Research**: Product must be discoverable in agent-queried databases
- **Evaluation**: Must score well on criteria for this specific user
- **Transaction**: Merchant must support seamless agent purchasing
- **Fulfillment**: Product must actually satisfy, or gets down-weighted next time

Traditional e-commerce rewarded visibility. Agent commerce rewards fitness—being the right product for the specific user's interpreted needs.

A product with massive advertising but mediocre reviews will struggle. A product with no advertising but excellent quality might thrive—because the agent's research surfaces it regardless of marketing spend.

The products that master the Decision Stack will win. Which stage is your weakest?
    `.trim(),
  },
  {
    slug: "data-stack",
    title: "The Data Stack: Three Layers Every Brand Needs",
    date: "2026-04-09",
    tags: ["data", "implementation", "infrastructure"],
    excerpt: "For most companies, the biggest gap is data infrastructure. Here's what to build and in what order.",
    content: `
OpenAI's Instant Checkout—announced with Walmart, Target, and over a million Shopify merchants—has seen slower rollout than anticipated. The culprit isn't technology. It's data.

Consider what "inconsistent data" actually looks like:
- Your "Navy Blue" exists as "Dark Blue" in one system, "Midnight" in another
- Your "Medium" is "Size M" in one feed, "Med" in another
- Your inventory updates hourly but your product feed updates daily—creating phantom stock

These aren't edge cases. They're endemic. And they determine whether agents can transact with your products.

## Layer 1: Product Information (The Foundation)

Every product needs comprehensive, accurate, structured data covering:

**Basic attributes:**
\`\`\`json
{
  "id": "SKU-12345",
  "name": "Ultraboost Running Shoe",
  "brand": "Adidas",
  "price": { "amount": 180.00, "currency": "USD" },
  "availability": "in_stock",
  "inventory_count": 47
}
\`\`\`

**Specifications** (dimensions, materials, technical details, compatibility):
\`\`\`json
{
  "weight_oz": 11.5,
  "drop_mm": 10,
  "arch_support": "neutral",
  "waterproof": false
}
\`\`\`

**Use cases** (what problems it solves, who it's for):
\`\`\`json
{
  "ideal_for": ["road_running", "daily_training"],
  "gait_type": ["neutral", "mild_overpronation"],
  "experience_level": ["intermediate", "advanced"]
}
\`\`\`

The standard for completeness is higher than most companies realize. You need data detailed enough that an agent can match your product to specific user needs without additional context.

## Layer 2: Distribution (Getting Data to Agents)

Comprehensive data is useless if it doesn't reach agents.

**Where your data needs to be:**
- Major commerce platforms (Amazon, Shopify ecosystem)
- Product data aggregators
- Industry-specific databases
- The emerging commerce protocols: UCP (Google), ACP (OpenAI), Copilot Checkout (Microsoft)

If you're on Shopify, you're likely already enrolled or eligible for all three protocols. If not, implementation should be on your roadmap.

**Critical rule: Consistency.**

If your product data differs between sources—different specs, different pricing, conflicting information—agents get confused or lose trust. Data governance across channels becomes essential.

## Layer 3: Real-Time Capabilities

Static data isn't enough. Agents expect current information.

**What you need:**
- APIs that expose live inventory
- Dynamic pricing feeds
- Real-time fulfillment options
- Integration with operational systems

"In stock" at query time may not mean "in stock" at purchase time. Without real-time feeds, agents work from stale data—and failed transactions destroy trust.

## The Build Sequence

**Months 1-2:** Audit current product data. Identify gaps in attributes, specifications, use cases.

**Months 2-3:** Implement Schema.org markup. Get structured data on every product page.

**Months 3-4:** Build inventory/pricing APIs. Start with top 20% of products.

**Months 4-6:** Enroll in commerce protocols (UCP, ACP). Expand API coverage.

**Ongoing:** Monitor for data drift. Update attributes as products change.

## The Payoff

Guess is using Microsoft's catalog enrichment agent to extract product attributes from images and structure them for AI. Their Head of Innovation says they can now "turn product details into meaningful insights that help shoppers discover styles in real time."

That's what catalog-for-agents looks like: not just describing products, but structuring data so AI can match products to specific customer needs.

Building this stack isn't glamorous. It's data engineering. But it's the foundation everything else rests on. Companies that neglect it will be invisible regardless of other investments.

Which layer is your weakest?
    `.trim(),
  },
  {
    slug: "share-of-model",
    title: "Share of Model: The Metric That Replaces Page Rank",
    date: "2026-03-19",
    tags: ["metrics", "AI visibility", "strategy"],
    excerpt: "How to measure and improve how prominently your brand appears in LLM responses.",
    content: `
Harvard Business Review introduced a concept that captures the new competitive landscape: Share of Model.

It measures how prominently your brand appears in LLM responses across three dimensions:
1. **Mention frequency** - how often you're referenced
2. **Position prominence** - where you appear in responses
3. **Sentiment** - how you're described in AI-accessible sources

This is the new page rank. And most brands don't even know their score.

## How To Measure It

Run these queries across ChatGPT, Claude, and Perplexity. Document the results.

**Query 1: Category leadership**
"What are the best [product category] for [common use case]?"

Are you mentioned? In what position? With what language?

**Query 2: Direct brand knowledge**
"Tell me about [Your Brand] [Product Name]."

Does the AI have accurate information? Where do gaps exist?

**Query 3: Comparison framing**
"Compare [Your Brand] vs [Competitor]."

What attributes does the AI use? Are they accurate? Do they favor you or the competitor?

**Query 4: Purchase intent**
"I need to buy [product]. What should I get?"

This is the money query. If you don't surface here, you're losing sales.

## What Drives Share of Model

Research suggests a weighted model:

- **Citation frequency** (~25%): How often you're referenced in sources agents consult
- **Position prominence** (~20%): Where you appear in responses (first vs. mentioned later)
- **Domain authority** (~20%): Are you cited by high-trust sources?
- **Content freshness** (~15%): LLMs favor recent sources
- **Structured data quality** (~20%): Can agents parse your product information?

There's a ~0.65 correlation between top-10 Google rankings and LLM mentions—the two disciplines aren't entirely separate. But correlation varies by platform. It's high for Google's AI Overviews but low for ChatGPT, which often generates responses without fetching online content at all.

## The Visibility Gap

A brand with 10% market share can have 50% AI visibility if they've optimized. A brand with 50% market share can have 0% AI visibility if they haven't.

The data is stark. SimilarWeb found ChatGPT accounted for 16% of Zara's inbound traffic between June-August 2025. 8% of traffic to H&M and Aritzia. AI assistants became a primary discovery channel in under a year.

## The Compounding Problem

AI visibility compounds. Agents learn from past recommendations. Brands visible today get more data about what converts, which improves future visibility.

If your competitor figured this out six months ago, they have a six-month head start on that flywheel.

## What To Do This Week

1. **Run the four queries** above. Document where you stand.
2. **Check your competitors** with the same queries. Who's winning?
3. **Audit your structured data.** Is it complete? Consistent?
4. **Look for content gaps.** What questions does AI struggle to answer about you?
5. **Set up monthly tracking.** Share of Model should be a recurring metric.

Most brands haven't measured this. The window to become a first mover in your category is still open.

But check. Today.
    `.trim(),
  },
  {
    slug: "walled-garden-problem",
    title: "The Walled Garden Problem: Why Your Amazon Reviews Don't Help",
    date: "2026-03-21",
    tags: ["strategy", "reviews", "platforms"],
    excerpt: "Amazon actively blocks AI agents from reading reviews. Here's what that means for your social proof strategy.",
    content: `
Here's a tension in agentic commerce: agents need data to make recommendations, but the platforms holding the most valuable data don't want to share it.

Amazon blocks AI agents from scraping reviews. In October 2025, Amazon sent a cease-and-desist to Perplexity AI. A lawsuit followed in November. Their argument: AI platforms "may not provide the best prices, delivery options, and recommendations that Amazon itself would offer."

**The implication:** Your 12,000 Amazon reviews might as well not exist to a ChatGPT or Perplexity agent.

## The Review Paradox

You're told to optimize for social proof because agents weight reviews heavily. But if the platform hosting your reviews blocks agent access, how does that proof reach the agent?

Mass-market brands built moats on Amazon review volume. But as platform reviews become walled off, community-based proof becomes more accessible than marketplace proof.

## Where Agents Actually Pull Social Proof

When Amazon blocks access, agents look elsewhere:

1. **Reddit threads and enthusiast forums** - These exist outside walled gardens. A niche product discussed by real users becomes more visible than a mass-market product locked behind Amazon's walls.

2. **YouTube reviews** - Transcripts and descriptions are accessible. Video reviews with detailed product analysis surface well.

3. **First-party review collection** - Reviews on your own website, with proper schema markup. Less volume, but fully accessible and indexable.

4. **Expert publications** - Industry reviews, comparison sites, professional assessments.

5. **Structured data partnerships** - UCP, OpenAI's merchant program, Shopify integrations. Sanctioned data channels.

## The Strategic Inversion

Consider this scenario:

**Brand A:** 12,000 reviews on Amazon. Minimal presence elsewhere.
**Brand B:** 500 reviews on their website, active Reddit community, YouTube reviews, expert coverage.

In traditional commerce, Brand A wins on social proof.

In agent commerce, Brand B might dominate—because all their proof is accessible while Brand A's is locked away.

## What To Do

**Diversify your review presence:**
- Build first-party review collection with proper Schema.org markup
- Encourage customers to review on open platforms (Reddit, YouTube)
- Get coverage on expert sites agents can access
- Don't rely solely on any single platform's ecosystem

**Cultivate genuine communities:**
- Reddit presence matters more than it used to
- Enthusiast forums become valuable proof sources
- Brand communities create accessible, authentic signals

**Participate in commerce protocols:**
- UCP, ACP, Copilot Checkout create sanctioned data channels
- These ensure your data reaches agents through approved routes

## The Irony

The platforms that helped brands build social proof over the past decade are now blocking agents from accessing it. The brands that hedged—building communities and first-party data alongside marketplace presence—will weather this transition better than those who went all-in on Amazon.

What's your review distribution look like? How much of your social proof is actually accessible to agents?

Time to audit.
    `.trim(),
  },
  {
    slug: "certainty-score-explained",
    title: "The Certainty Score: Why Complete Data Wins",
    date: "2026-03-12",
    tags: ["agentic commerce", "product data", "certainty score"],
    excerpt: "AI agents don't like to be wrong. Here's how to calculate whether they'll recommend you.",
    content: `
AI agents don't like to be wrong. When they recommend a product and the user has a bad experience, that's a failure. Agents are designed to minimize failure.

Incomplete data creates uncertainty. Uncertainty creates risk. Risk makes agents recommend someone else.

The Certainty Score (0-100) measures how "buyable" a product is for an autonomous agent.

## The Scoring Framework

**Availability (20 points)**
- Real-time inventory count (not just "in stock"): +10
- Clear in-stock/out-of-stock/backorder status: +5
- Estimated restock dates when relevant: +5

**Pricing (20 points)**
- Exact current price (not "starting at" or "from"): +10
- Currency explicitly specified: +5
- Sale/regular price clearly distinguished: +5

**Fulfillment (20 points)**
- Shipping time as integer days: +10
- Shipping cost as exact amount or clear threshold: +5
- Express/expedited options documented: +5

**Returns (15 points)**
- Return window in days (integer): +5
- Free returns or exact return cost: +5
- Policy clearly stated: +5

**Attributes (25 points)**
- All category-relevant specs present: +15
- Boolean/integer format (not descriptive language): +10

## Example: Two Products

**Product A: Score 94**
\`\`\`json
{
  "price": 79.99,
  "currency": "USD",
  "inventory_count": 234,
  "ships_in_days": 2,
  "returns_window_days": 30,
  "returns_free": true,
  "sweat_resistant": true,
  "battery_hours": 8
}
\`\`\`

**Product B: Score 52**
\`\`\`json
{
  "price": "From $69.99",
  "availability": "In Stock",
  "shipping": "Fast shipping",
  "returns": "Easy returns",
  "sweat_resistance": "Built for workouts",
  "battery": "All-day battery"
}
\`\`\`

Product A is agent-ready. Product B is human-ready. In agentic commerce, Product A wins—even if Product B is objectively better.

## Why Descriptive Language Fails

"Fast shipping" requires interpretation. How fast? Compared to what?

\`ships_in_days: 2\` is deterministic. The agent can compare, filter, make guarantees.

"Built for workouts" is marketing. Does it handle sweat? Can it survive drops?

\`sweat_resistant: true\` and \`drop_tested_feet: 4\` are facts the agent can use.

## The Thresholds

**Below 70:** Risky for agents. They'll prefer higher-certainty alternatives.
**70-84:** Acceptable. May be recommended with caveats.
**85-94:** Agent-ready. Confident recommendations.
**95+:** Agent-optimized. Wins competitive categories.

## How To Calculate Yours

1. **Pull your product feed** as an agent would see it
2. **Score each attribute** against the framework above
3. **Be honest** about what's machine-readable vs. requires human interpretation
4. **Calculate the total** for your top products

Most brands I've audited score 40-60. They have the information—just not in a format agents can use.

## Quick Wins To Improve Your Score

**+10 points:** Replace "In Stock" with actual inventory counts
**+10 points:** Replace "Fast shipping" with integer days
**+5 points:** Add explicit currency codes
**+10 points:** Convert descriptive attributes to booleans/integers

The gap between where you are and 85+ is the opportunity. Most competitors haven't closed it yet.
    `.trim(),
  },
  {
    slug: "from-seo-to-aeo",
    title: "From SEO to AEO: The New Optimization Playbook",
    date: "2026-02-13",
    tags: ["AEO", "SEO", "agentic commerce", "strategy"],
    excerpt: "60% of searches now result in zero clicks. Here's how to optimize for the AI that answers instead.",
    content: `
The industry calls it AEO: Answer Engine Optimization. It's optimizing content to be recognized, cited, and recommended by LLMs and AI-powered search.

The numbers make the shift concrete:
- AI-generated responses appear in 13% of US desktop queries
- ChatGPT went from 300M to 900M monthly active users in 2025
- Traffic to retail sites from generative AI increased 3,500% year-over-year
- 60% of searches now result in zero clicks due to AI-generated answers

When 60% of searches don't result in clicks, ranking first matters less than being the source the AI cites.

## SEO vs. AEO: What Changes

| SEO | AEO |
|-----|-----|
| Optimize for crawlers | Optimize for agents |
| Keywords in copy | Structured data agents parse |
| Ranking position | Recommendation rate |
| Backlinks and domain authority | Data completeness and consistency |
| Page one of results | The single recommendation |

## What Actually Drives AI Visibility

Research suggests a weighted model:

- **Citation frequency** (~25%): How often are you referenced?
- **Position prominence** (~20%): Where do you appear in responses?
- **Domain authority** (~20%): Are you cited by high-trust sources?
- **Content freshness** (~15%): LLMs favor recent sources
- **Structured data quality** (~20%): Can agents parse your information?

There's a ~0.65 correlation between top-10 Google rankings and LLM mentions—the disciplines aren't entirely separate. But the correlation varies: high for Google's AI Overviews, low for ChatGPT (which often generates without fetching content at all).

## Practical Optimization

**Semantic URLs:** 4-7 descriptive words show measurable uplift in citations.

**Fresh content:** LLMs heavily favor recent sources. Dated content gets deprioritized.

**High-authority presence:** Getting listed on review sites, industry publications, comparison guides increases mention probability.

**Direct protocol participation:** Submitting product feeds to ChatGPT's merchant program and implementing UCP/ACP puts your catalog in the agent's consideration set.

**Structured Q&A content:** FAQs formatted as questions agents get asked, with direct answers they can cite.

## Early Results

**1840 & Company** (staffing firm): Started with zero AI visibility. After implementing AEO practices—structured FAQs, comparison content, "Why Choose Us" sections in formats LLMs favor—achieved 11% AI visibility and top-five recommendation status.

**Broworks** (B2B marketing): Restructured for LLM discoverability. Now gets 10% of organic traffic from generative AI, with 27% converting to qualified leads.

**Insurance site** (tracked by Amsive): 3.76% conversion rate from LLM traffic vs. 1.19% from organic search.

Pattern: AI-referred traffic converts better. Agents pre-qualify intent.

## The Transition Timeline

Both games are running simultaneously. Google has traditional results AND AI Mode. You need to play both.

But the balance is shifting. Zero-click searches keep rising. Agent recommendations gain trust.

Brands that invest in AEO now will have head starts. The ones that wait until traditional SEO stops working will be too late.

## This Week's Actions

1. **Audit your current AEO presence** - run category queries across ChatGPT, Claude, Perplexity
2. **Check your Schema.org markup** - is it complete and accurate?
3. **Review your URL structure** - semantic, descriptive, 4-7 words
4. **Identify content gaps** - what questions do agents struggle to answer about you?
5. **Explore protocol enrollment** - UCP, ACP, Copilot Checkout

The platforms that control discovery control commerce. AI agents are the next platform.
    `.trim(),
  },
  {
    slug: "18-month-action-plan",
    title: "The 18-Month Action Plan for Agent Commerce",
    date: "2026-02-16",
    tags: ["strategy", "implementation", "roadmap"],
    excerpt: "A concrete timeline for getting your brand agent-ready. What to do in what order.",
    content: `
The strategic window is open now. The companies that move in the next 18-36 months will establish positions that are difficult to replicate. Understanding isn't enough—execution is what matters.

Here's the timeline I use with brands.

## Months 1-3: Assessment and Foundation

**Run the agent-readiness audit.**
Score yourself on data completeness, technical accessibility, reputation signals, product differentiation, and organizational readiness. Identify critical gaps.

**Begin data remediation.**
Start with your top 20% of products. Get structured information in place: schema markup, deterministic attributes, real inventory counts.

**Assign executive ownership.**
Someone needs to own this. Agent commerce sits at the intersection of marketing, technology, product, and operations. Without executive sponsorship, it dies in committee.

**Deliverables:**
- Completed audit with dimension scores
- Gap analysis document
- Top products with improved structured data
- Named executive sponsor

## Months 4-6: Infrastructure Build

**Develop API capabilities.**
Real-time inventory and pricing feeds. Product availability endpoints. Agent-compatible authentication.

**Implement comprehensive schema markup.**
Every product page. Full Product schema including offers, reviews, specifications.

**Establish presence in key distribution channels.**
Protocol enrollment: UCP (Google), ACP (OpenAI), Copilot Checkout (Microsoft). If you're on Shopify, much of this is automatic.

**Start measuring.**
Set up baseline tracking for AI visibility across ChatGPT, Claude, Perplexity.

**Deliverables:**
- Live inventory/pricing APIs
- Schema markup on all products
- Protocol enrollment confirmed
- Baseline visibility metrics

## Months 7-9: Optimization Begins

**Launch systematic review generation.**
First-party reviews with Schema markup. Encourage customers to review on accessible platforms (Reddit, YouTube, your site).

**Refine product positioning for agent matchability.**
Sharpen differentiation. Document specific use cases. Convert subjective attributes to structured data.

**Begin cross-platform agent testing.**
Ask agents about your products systematically. Document how you surface. Compare to competitors.

**Iterate based on observed behavior.**
What queries find you? What queries miss you? Fill the gaps.

**Deliverables:**
- Active review generation program
- Updated product positioning
- Testing documentation
- Iteration log

## Months 10-12: Organizational Evolution

**Hire or train for agent relations.**
Someone needs to own visibility measurement, data quality, protocol compliance.

**Implement new metrics.**
Track: agent visibility, share of model, agent-initiated conversion rate, recommendation quality.

**Realign incentives.**
If marketing is measured on traffic and awareness, they'll optimize for that—even as it becomes less relevant. Realign KPIs.

**Establish cross-functional coordination.**
Agent commerce isn't a silo. Connect marketing, engineering, product, operations.

**Deliverables:**
- Agent relations capability (hired or trained)
- New metrics dashboard
- Updated KPIs and incentives
- Cross-functional working group

## Months 13-18: Scaling and Refinement

**Expand optimization to full catalog.**
Apply learnings from top products to everything else.

**Deepen platform integrations.**
As protocols evolve, stay current. Participate in beta programs.

**Build competitive intelligence.**
Systematically track how competitors surface in agent recommendations. Identify gaps to exploit.

**Refine strategies based on accumulated data.**
What's working? Double down. What isn't? Adjust.

**Deliverables:**
- Full catalog optimized
- Current protocol implementations
- Competitive tracking system
- Strategy refinement documentation

## Common Mistakes

**Waiting for certainty.** The shift won't announce itself. If you wait until it's obvious, you're years behind.

**Treating this as a marketing problem.** It's not a new channel. It's a fundamental shift affecting product strategy, technology, and organization.

**Focusing on one platform.** Amazon, Google, OpenAI, Apple—all will have agent presences. Build platform-agnostic capabilities.

**Over-engineering.** Perfect is the enemy of good. Get structured data out there. Learn. Iterate.

This timeline is aggressive but achievable. It assumes meaningful resource commitment. Adjust based on your starting position—but don't stretch it indefinitely.

The window for establishing advantage is finite.
    `.trim(),
  },
  {
    slug: "invisibility-principle",
    title: "The Invisibility Principle: Why You Won't Notice The Shift",
    date: "2026-02-11",
    tags: ["agentic commerce", "strategy", "fundamentals"],
    excerpt: "The most profound technological shifts don't announce themselves. They seep into behavior so gradually that by the time you notice, you can't remember the before.",
    content: `
Nobody talks about "using a smartphone" anymore. You just text your friend, check the weather, order dinner, pay for parking. The device disappeared into the verbs.

The same thing happened with electricity, with indoor plumbing, with the internet itself. Revolutionary infrastructure becomes invisible infrastructure.

This is the pattern of truly transformative technology: it disappears.

## The Arc of Invisibility

Every transformative technology follows the same sequence:

**Stage 1: Novelty.** The technology is new and fascinating. Early adopters experiment. Press coverage is extensive. People debate whether it will succeed.

**Stage 2: Utility.** The technology proves useful. Adoption grows beyond enthusiasts. Businesses form around it.

**Stage 3: Integration.** The technology integrates with other systems. It becomes a component of workflows. Users stop thinking about the technology itself.

**Stage 4: Invisibility.** The technology becomes infrastructure. New users never experience life without it. Older users forget the before-time. It only surfaces when it fails.

Electricity took decades to become invisible. Smartphones took fifteen years. The internet disappeared faster still.

## Where Agentic Commerce Is Now

We're transitioning from Stage 1 to Stage 2. Past novelty—AI shopping assistants exist and work. Entering utility—pragmatic adoption is growing.

By 2035, most people won't think about agentic commerce any more than they currently think about refrigeration. Products will just arrive. The right things, at the right time, at the right price. No one will call it "agentic commerce." They won't call it anything.

## What This Means For Brands

**Don't expect a signal.**

There will be no "Year of the AI Shopping Agent." No Netscape moment. No iPhone keynote where the world gasps. The transition will be gradual, distributed, largely unnoticed.

Waiting for a clear signal—a moment when it's obvious agentic commerce has arrived—means waiting too long. The signal won't come. Instead, it comes as gradually declining website traffic, slowly eroding conversion rates, steadily growing market share for agent-optimized competitors.

**The visibility bias is dangerous here.**

We notice dramatic events. We miss gradual shifts. The companies that win will be those who recognize the invisible transition happening now—not those waiting for a signal that won't arrive.

## The Uber Lesson

Before ride-hailing, getting a taxi meant standing on corners, arm raised, hoping. Cash fumbling. Tip debates. Friction at every stage.

Within a decade, all of that disappeared. You tap a screen. A car appears. It takes you where you need to go.

More striking: the old behavior vanished so completely that young adults have no idea how taxis used to work. The before-state became nearly unimaginable.

This is invisibility. Uber didn't position itself as a revolutionary technology platform. It positioned itself as a way to get somewhere. The technology dissolved into the verb.

The same dissolution will happen with agentic commerce. No one will say "I'm instructing my AI shopping agent to procure household supplies." They'll say "we're good on groceries" or simply not think about it—because the supplies appeared before they needed to think.

## What To Do

1. **Accept that the shift won't announce itself.** Plan accordingly.

2. **Watch for gradual metrics shifts.** Traffic patterns. Conversion sources. How people find you.

3. **Build for a future where you're invisible to the shopper.** The agent is your customer. What does the agent need?

4. **Start now.** By the time the shift is obvious, the window will have closed.

The question isn't whether this future arrives. It's whether you'll be positioned for it when it does.
    `.trim(),
  },
  {
    slug: "funnel-collapse",
    title: "The Funnel Collapse: Why Your Marketing Strategy Is Obsolete",
    date: "2026-02-10",
    tags: ["agentic commerce", "marketing", "strategy"],
    excerpt: "The marketing funnel survived every transition—catalogs, retail, e-commerce, mobile. Agentic commerce doesn't optimize it. It collapses it.",
    content: `
The marketing funnel has survived every transition: awareness → consideration → decision → purchase → loyalty.

Catalogs had funnels. Department stores had funnels. E-commerce had funnels. Mobile had funnels. Marketers spent entire careers optimizing them.

Agentic commerce doesn't optimize the funnel. It collapses it.

## What the Funnel Collapse Looks Like

| Classic Funnel | What Agents Change |
|----------------|-------------------|
| **Awareness**: Consumer learns brand exists | Agent already knows all relevant options |
| **Consideration**: Consumer researches options | Agent evaluates based on data |
| **Decision**: Consumer chooses | Agent recommends or autonomously selects |
| **Purchase**: Consumer transacts | Agent executes seamlessly |
| **Loyalty**: Consumer returns based on memory | Agent recommends based on satisfaction data |

The entire upper funnel—awareness and consideration—gets compressed or bypassed. Agents don't need to become aware of your brand through advertising. They have access to comprehensive product data. They don't need to consider you because of a memorable campaign. They evaluate you based on whether you actually perform.

## The Numbers

In the 2025 holiday season, AI-driven traffic to e-commerce sites increased 693% year-over-year.

Salesforce reported AI and agents influenced 20% of Cyber Week orders globally, driving $67 billion in sales. "We went from nothing to 20 percent in a year," one analyst observed. "That's very unusual in my world of e-commerce."

Traffic from AI agent channels converted at 8x the rate of social media traffic.

Early data suggests agent-mediated shopping converts at 4.4x the rate of traditional human browsing. No abandoned carts. No distraction. No decision fatigue.

## Why This Is Different

Each previous commerce wave reduced friction but preserved the same fundamental loop: discover, evaluate, decide, transact.

**Catalogs** brought the store home. Still required browsing, comparing, deciding.

**Department stores** aggregated selection. Still required physical browsing and evaluation.

**E-commerce** digitized everything. Still required search, browse, compare, cart, checkout.

**Mobile** made it portable. Same cognitive work, smaller screen.

Each wave reduced friction. None eliminated it. The consumer remained responsible for discovery, evaluation, decision-making.

Agentic commerce is different. The agent handles discovery. The agent handles evaluation. The consumer expresses a need and receives a recommendation. The browse-compare-decide loop doesn't shrink. It disappears.

## What This Means For Your Strategy

**Upper-funnel spend faces pressure.**

Awareness campaigns have diminishing returns when agents don't need to "become aware" of brands. They query databases.

**Mid-funnel content transforms.**

Comparison content matters—but for agents, not humans. Structured data that agents can parse beats persuasive copy.

**Lower-funnel infrastructure becomes critical.**

Can agents actually transact with you? Real-time inventory, agent-compatible checkout, clear pricing. The technical capabilities that enable purchase.

**Brand loyalty shifts upstream.**

You need the agent to trust you, not just the consumer. That trust comes from data quality, transaction reliability, and post-purchase satisfaction.

## The Infrastructure Is Being Built Now

Visa and Mastercard are building "agentic tokens" for AI agent authentication. OpenAI partnered with Walmart for purchases inside ChatGPT. Google unveiled Universal Commerce Protocol with Shopify, Target, Walmart, and Wayfair. Bain estimates the US agentic commerce market reaches $300-500 billion by 2030.

The foundation is being poured in 2025 and 2026. The decisions made in this window will determine who captures value in the decade ahead.

## What To Do This Week

1. **Audit your funnel spend.** How much goes to awareness vs. agent-readiness?
2. **Test your agent visibility.** Ask ChatGPT about your category. Who surfaces?
3. **Check your structured data.** Can an agent parse your inventory, pricing, attributes?
4. **Identify infrastructure gaps.** What technical work is needed for agent transactions?

The funnel isn't dying. It's being compressed into seconds. The question is whether you'll be in the agent's consideration set when it happens.
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
