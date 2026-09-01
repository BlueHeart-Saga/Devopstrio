import RSS from "rss";
import { insightsApi } from "@/lib/insightsApi";

export async function GET() {
  const feed = new RSS({
    title: "Devopstrio Insights & Technical Publications",
    description: "Read technical articles, blogs, case studies, and engineering updates from Devopstrio's principal systems architects.",
    feed_url: "https://devopstrio.co.uk/feed.xml",
    site_url: "https://devopstrio.co.uk",
    image_url: "https://devopstrio.co.uk/apple-touch-icon.png",
    managingEditor: "info@devopstrio.co.uk (Devopstrio Team)",
    webMaster: "info@devopstrio.co.uk (Devopstrio Team)",
    copyright: "2026 Devopstrio Limited. All rights reserved.",
    language: "en-GB",
    pubDate: new Date().toUTCString(),
    ttl: 60
  });

  // 1. Prepend High-Level Static Pages to make the feed premium/high-level
  const staticPages = [
    {
      title: "Devopstrio | Enterprise AI, Cloud and Product Engineering",
      description: "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
      url: "https://devopstrio.co.uk",
      categories: ["Home", "Enterprise Solutions"],
      date: new Date("2026-06-22")
    },
    {
      title: "Enterprise Engineering & Consulting Services | Devopstrio",
      description: "Explore Devopstrio's practice areas: Cognitive AI pipelines, multi-region container grids, platform engineering, and compliance hardening.",
      url: "https://devopstrio.co.uk/services",
      categories: ["Services", "Cloud", "AI", "DevOps"],
      date: new Date("2026-06-22")
    },
    {
      title: "Industry Verticals & Technology Platforms | Devopstrio",
      description: "Tailored software systems, compliant infrastructure, and modern engineering platforms built for banking, healthcare, and retail sectors.",
      url: "https://devopstrio.co.uk/industries",
      categories: ["Industries", "Finance", "Healthcare"],
      date: new Date("2026-06-22")
    },
    {
      title: "Careers at Devopstrio | Join our Engineering Team",
      description: "Join Devopstrio's elite network of system architects, DevOps experts, and AI engineers. Explore active open positions.",
      url: "https://devopstrio.co.uk/careers",
      categories: ["Careers", "Hiring", "Jobs"],
      date: new Date("2026-06-22")
    },
    {
      title: "Ecosystem: Partnerships, Labs, & Solutions | Devopstrio",
      description: "Our technology partners, global delivery network, accelerators, frameworks, and engineering community programs.",
      url: "https://devopstrio.co.uk/ecosystem",
      categories: ["Ecosystem", "Partnerships", "Labs"],
      date: new Date("2026-06-22")
    },
    {
      title: "Insights, Tech Blogs, & Publications | Devopstrio",
      description: "Read technical articles, blogs, case studies, and engineering updates from Devopstrio's principal systems architects.",
      url: "https://devopstrio.co.uk/insights",
      categories: ["Insights", "Blogs", "Tech News"],
      date: new Date("2026-06-22")
    },
    {
      title: "Contact Our Engineering Teams | Devopstrio",
      description: "Get in touch with Devopstrio's systems architects and AI researchers to scope your project or modernization roadmap.",
      url: "https://devopstrio.co.uk/contact",
      categories: ["Contact", "Support"],
      date: new Date("2026-06-22")
    },
    {
      title: "About Devopstrio | Company Overview",
      description: "Learn about Devopstrio's mission, leadership, advisory board, global presence, partnerships, and engineering standards.",
      url: "https://devopstrio.co.uk/about/company-overview",
      categories: ["About Us", "Company Profile"],
      date: new Date("2026-06-22")
    }
  ];

  staticPages.forEach((page) => {
    feed.item({
      title: page.title,
      description: page.description,
      url: page.url,
      categories: page.categories,
      author: "Devopstrio Team",
      date: page.date
    });
  });

  // 2. Load and Append Dynamic Insights Publications
  try {
    const posts = await insightsApi.getAllPosts(100);
    posts.forEach((post) => {
      feed.item({
        title: post.title,
        description: post.excerpt || post.title,
        url: `https://devopstrio.co.uk/insights/${post.category?.slug || "general"}/${post.slug || post.id}`,
        categories: [post.category?.name || "General", ...(post.tags || [])],
        author: post.author || "Devopstrio Team",
        date: post.date
      });
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=18000"
    }
  });
}
