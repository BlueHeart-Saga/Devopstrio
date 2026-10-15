import RSS from "rss";
import { insightsApi, TransformedPost } from "@/lib/insightsApi";

export const dynamic = "force-dynamic";
export const revalidate = 1800; // Revalidate every 30 minutes

const SITE_URL = "https://devopstrio.co.uk";

function ensureAbsoluteUrl(url?: string | null): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export async function GET() {
  const feed = new RSS({
    title: "Devopstrio Blog Updates",
    description: "Enterprise AI, Cloud Architecture, DevOps engineering, and digital transformation insights from Devopstrio.",
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: `${SITE_URL}/insights/blogs`,
    image_url: `${SITE_URL}/apple-touch-icon.png`,
    managingEditor: "info@devopstrio.co.uk (Devopstrio Team)",
    webMaster: "info@devopstrio.co.uk (Devopstrio Team)",
    copyright: `${new Date().getFullYear()} Devopstrio Limited. All rights reserved.`,
    language: "en-GB",
    pubDate: new Date().toUTCString(),
    ttl: 30,
    custom_namespaces: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom",
      content: "http://purl.org/rss/1.0/modules/content/"
    }
  });

  try {
    const allPosts: TransformedPost[] = await insightsApi.getAllPosts(100);

    // Filter specifically for Company Blogs, with safe fallback to all published posts
    const blogPosts = allPosts.filter((post) => {
      const slug = post.category?.slug?.toLowerCase() || "";
      const name = post.category?.name?.toLowerCase() || "";
      return slug === "blogs" || slug === "blog" || name.includes("blog");
    });

    const targetPosts = blogPosts.length > 0 ? blogPosts : allPosts;

    targetPosts.forEach((post) => {
      const categorySlug = post.category?.slug || "blogs";
      const postSlug = post.slug || post.id;
      const articleUrl = `${SITE_URL}/insights/${categorySlug}/${postSlug}`;

      const rawImageUrl = post.image;
      const imageUrl = ensureAbsoluteUrl(rawImageUrl);

      let pubDate: Date;
      try {
        pubDate = post.date ? new Date(post.date) : new Date();
        if (isNaN(pubDate.getTime())) {
          pubDate = new Date();
        }
      } catch {
        pubDate = new Date();
      }

      const customElements: any[] = [];
      if (imageUrl) {
        customElements.push({
          "media:content": {
            _attr: {
              url: imageUrl,
              medium: "image",
              type: "image/jpeg"
            }
          }
        });
      }

      feed.item({
        title: post.title,
        description: post.excerpt || post.title,
        url: articleUrl,
        guid: articleUrl,
        categories: [
          post.category?.name || "Company Blog",
          ...(post.tags || [])
        ],
        author: post.author || "Devopstrio Team",
        date: pubDate,
        enclosure: imageUrl
          ? {
              url: imageUrl,
              type: "image/jpeg"
            }
          : undefined,
        custom_elements: customElements
      });
    });
  } catch (error) {
    console.error("Error generating blog RSS feed for LinkedIn:", error);
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
