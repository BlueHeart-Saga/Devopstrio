// Base API configuration for Devopstrio Insights
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net";
const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID || "DP-901265";

const API_PREFIX = "/api";

if (!COMPANY_ID) {
  throw new Error("NEXT_PUBLIC_COMPANY_ID environment variable is missing!");
}

export interface PostBlock {
  type: string;
  data: {
    value?: string;
    items?: string[];
    alt?: string;
    file_id?: string;
    url?: string;
    title?: string;
  };
}

export interface TransformedPost {
  id: string;
  slug: string;
  title: string;
  section: {
    name: string;
    slug: string;
  };
  category: {
    name: string;
    slug: string;
  };
  excerpt: string;
  image: string | null;
  content: string;
  date: string;
  author: string;
  readTime: number;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
  rawBlocks?: PostBlock[];
}

export function slugify(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const SECTION_SLUG_MAP: Record<string, string> = {
  "Insights & Knowledge": "insights-knowledge",
  "News & Events": "news-events",
  "Life at Devopstrio": "life-at",
  "Success Stories": "success-stories"
};

const CATEGORY_SLUG_MAP: Record<string, string> = {
  "Blogs": "blogs",
  "Case Studies": "case-studies",
  "Our Offerings": "our-offerings",
  "White Paper": "white-paper",
  "Awards & Milestones": "awards-milestones",
  "Industry Events": "industry-events",
  "Celebrations": "celebrations",
  "Team Culture": "team-culture",
  "Client Transformations": "client-transformations",
  "Impact Metrics": "impact-metrics"
};

function getSectionSlug(name: string): string {
  if (!name) return "";
  return SECTION_SLUG_MAP[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getCategorySlug(name: string): string {
  if (!name) return "";
  return CATEGORY_SLUG_MAP[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const globalServerCache = new Map<string, { data: any; timestamp: number }>();
const globalPendingRequests = new Map<string, Promise<any>>();
const SERVER_CACHE_TTL = 60 * 1000; // 1 minute in-memory cache for fast publishing updates

export function isPublishedPost(item: any): boolean {
  if (!item) return false;
  const status = (item.status || "published").toLowerCase();
  if (status !== "published") return false;
  if (item.is_deleted === true || status === "deleted" || status === "archived" || status === "draft") {
    return false;
  }
  return true;
}

class InsightsApiService {
  private baseUrl: string;
  private companyId: string;
  private cache: Map<string, { data: any; timestamp: number }>;
  private pendingRequests: Map<string, Promise<any>>;

  constructor() {
    const isClient = typeof window !== "undefined";
    this.baseUrl = isClient ? "/api/insights-proxy" : API_BASE_URL.replace(/\/$/, "");
    this.companyId = COMPANY_ID;
    this.cache = new Map();
    this.pendingRequests = new Map();
  }

  getImageUrl(fileId?: string): string {
    if (!fileId) return "";
    return `${this.baseUrl}${API_PREFIX}/images/${fileId}`;
  }

  getDocumentUrl(fileId?: string, fallbackUrl?: string): string {
    if (fileId) return `${this.baseUrl}${API_PREFIX}/documents/${fileId}`;
    return fallbackUrl || "";
  }

  async fetchApi(endpoint: string, options: any = {}) {
    const url = `${this.baseUrl}${API_PREFIX}${endpoint}`;
    const cacheKey = `${url}:${options.method || "GET"}:${JSON.stringify(options.body || "")}`;

    // 1. Check in-memory global server cache (1 min TTL)
    const cachedItem = globalServerCache.get(cacheKey);
    if (cachedItem && Date.now() - cachedItem.timestamp < SERVER_CACHE_TTL) {
      return cachedItem.data;
    }

    // 2. Check instance cache (1 min TTL)
    const instCache = this.cache.get(cacheKey);
    if (instCache && Date.now() - instCache.timestamp < SERVER_CACHE_TTL) {
      return instCache.data;
    }

    // 3. Dedupe in-flight requests
    if (globalPendingRequests.has(cacheKey)) {
      return globalPendingRequests.get(cacheKey);
    }
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey);
    }

    const requestPromise = fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      next: { revalidate: 60 } // Next.js cache-revalidation (60 seconds)
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.detail || `API error: ${response.status}`);
        }

        const data = await response.json();
        const cacheEntry = { data, timestamp: Date.now() };
        globalServerCache.set(cacheKey, cacheEntry);
        this.cache.set(cacheKey, cacheEntry);
        globalPendingRequests.delete(cacheKey);
        this.pendingRequests.delete(cacheKey);
        return data;
      })
      .catch((err) => {
        globalPendingRequests.delete(cacheKey);
        this.pendingRequests.delete(cacheKey);
        if (options.throwError) throw err;
        return null;
      });

    globalPendingRequests.set(cacheKey, requestPromise);
    this.pendingRequests.set(cacheKey, requestPromise);
    return requestPromise;
  }

  async getSections() {
    return this.fetchApi(`/public/${this.companyId}/sections`);
  }

  async getCategories(sectionSlug: string) {
    return this.fetchApi(
      `/public/${this.companyId}/categories?section_slug=${sectionSlug}`,
    );
  }

  async getContent(params: any = {}) {
    const queryParams = new URLSearchParams({
      skip: (params.skip || 0).toString(),
      limit: (params.limit || 20).toString(),
      ...(params.section_slug && { section_slug: params.section_slug }),
      ...(params.category_slug && { category_slug: params.category_slug }),
    }).toString();

    return this.fetchApi(`/public/${this.companyId}/content?${queryParams}`);
  }

  async getContentById(contentId: string) {
    return this.fetchApi(`/public/content/${contentId}`);
  }

  async registerLike(postId: string): Promise<{ success: boolean; liked?: boolean; likes?: number }> {
    const url = `${this.baseUrl}${API_PREFIX}/public/content/${postId}/like`;
    try {
      const res = await fetch(url, {
        method: "POST"
      });
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        return {
          success: true,
          liked: data.liked,
          likes: typeof data.likes === "number" ? data.likes : undefined
        };
      }
      return { success: false };
    } catch {
      return { success: false };
    }
  }

  async subscribe(email: string, sections: string[] = [], categories: string[] = []) {
    return this.fetchApi(`/public/subscribe`, {
      method: "POST",
      body: JSON.stringify({
        email,
        company_id: this.companyId,
        sections,
        categories,
      }),
      throwError: true,
    });
  }

  async getSubscriberPreferences(email: string) {
    return this.fetchApi(
      `/public/subscriber-preferences?email=${encodeURIComponent(email)}&company_id=${this.companyId}`,
    );
  }

  async getFullSiteStructure() {
    try {
      const sectionsRes = await this.getSections();
      if (!sectionsRes || !sectionsRes.sections) {
        return [];
      }
      const sections = sectionsRes.sections || [];

      const result = await Promise.all(
        sections.map(async (section: any) => {
          try {
            const categoriesRes = await this.getCategories(section.slug);
            if (!categoriesRes) {
              return { ...section, categories: [] };
            }
            const categories = categoriesRes.categories || [];

            const categoryData = await Promise.all(
              categories.map(async (category: any) => {
                try {
                  const contentRes = await this.getContent({
                    section_slug: section.slug,
                    category_slug: category.slug,
                    limit: 50,
                  });

                  if (!contentRes) {
                    return { ...category, section_slug: section.slug, posts: [] };
                  }

                  const validItems = (contentRes.items || []).filter(isPublishedPost);
                  const posts = validItems.map((item: any) =>
                    this.transformContent(item, section, category),
                  );

                  return { ...category, section_slug: section.slug, posts };
                } catch {
                  return { ...category, section_slug: section.slug, posts: [] };
                }
              }),
            );

            return { ...section, categories: categoryData };
          } catch {
            return { ...section, categories: [] };
          }
        }),
      );

      return result;
    } catch (err) {
      console.error("Error fetching site structure:", err);
      throw err;
    }
  }

  async getAllPosts(limit = 1000): Promise<TransformedPost[]> {
    try {
      let allPosts: TransformedPost[] = [];
      let skip = 0;
      const pageSize = 50; // max allowed by API
      let hasMore = true;

      while (hasMore && allPosts.length < limit) {
        const queryLimit = Math.min(pageSize, limit - allPosts.length);
        const contentRes = await this.getContent({
          skip,
          limit: queryLimit
        });

        if (!contentRes || !contentRes.items || contentRes.items.length === 0) {
          hasMore = false;
          break;
        }

        const validItems = contentRes.items.filter(isPublishedPost);
        const posts = validItems.map((item: any) => this.transformContent(item));
        allPosts = allPosts.concat(posts);

        if (contentRes.items.length < queryLimit) {
          hasMore = false;
        } else {
          skip += pageSize;
        }
      }

      return allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    } catch (err) {
      console.error("Error fetching all posts:", err);
      return [];
    }
  }

  transformContent(backendContent: any, section: any = null, category: any = null): TransformedPost {
    const renderedContent = this.renderBlocks(backendContent.blocks);
    const words = (renderedContent || "").trim().split(/\s+/).filter(Boolean).length;
    
    // Accurate read time computation: prioritize backend stats, then parsed word count, then fallback
    let computedReadTime = 4;
    if (backendContent.stats?.read_time && typeof backendContent.stats.read_time === "number" && backendContent.stats.read_time > 0) {
      computedReadTime = backendContent.stats.read_time;
    } else if (words > 0) {
      computedReadTime = Math.max(1, Math.ceil(words / 200));
    } else if (backendContent.subtitle) {
      const subWords = backendContent.subtitle.trim().split(/\s+/).filter(Boolean).length;
      computedReadTime = Math.max(2, Math.ceil(subWords / 25));
    }

    let formattedDate = "";
    try {
      const dateVal = backendContent.published_at || backendContent.created_at;
      const d = new Date(dateVal);
      if (dateVal && !isNaN(d.getTime())) {
        formattedDate = d.toISOString().split("T")[0];
      } else {
        formattedDate = new Date().toISOString().split("T")[0];
      }
    } catch (e) {
      formattedDate = new Date().toISOString().split("T")[0];
    }

    const sectionName = section?.name || backendContent.section?.name || backendContent.section_name || "";
    const sectionSlug = section?.slug || backendContent.section?.slug || backendContent.section_slug || getSectionSlug(sectionName);

    const categoryName = category?.name || backendContent.category?.name || backendContent.category_name || "";
    const categorySlug = category?.slug || backendContent.category?.slug || backendContent.category_slug || getCategorySlug(categoryName);

    const titleSlugRaw = slugify(backendContent.title || "");
    const maxTitleLen = Math.max(15, 45 - (categorySlug ? categorySlug.length : 15));
    let titleSlug = titleSlugRaw;
    if (titleSlugRaw.length > maxTitleLen) {
      titleSlug = titleSlugRaw.substring(0, maxTitleLen);
      const lastHyphen = titleSlug.lastIndexOf("-");
      if (lastHyphen > 8) {
        titleSlug = titleSlug.substring(0, lastHyphen);
      }
    }
    const combinedSlug = titleSlug ? `${titleSlug}-${backendContent.id}` : backendContent.id;

    return {
      id: backendContent.id,
      slug: combinedSlug,
      title: backendContent.title,
      section: {
        name: sectionName,
        slug: sectionSlug,
      },
      category: {
        name: categoryName,
        slug: categorySlug,
      },
      excerpt: backendContent.subtitle || this.extractExcerpt(backendContent.blocks),
      image: backendContent.cover_image_id
        ? this.getImageUrl(backendContent.cover_image_id)
        : null,
      content: renderedContent,
      date: formattedDate,
      author: backendContent.author?.name || "Devopstrio Team",
      readTime: computedReadTime,
      tags: backendContent.tags || [],
      views: backendContent.stats?.views || 0,
      likes: backendContent.like_count ?? backendContent.stats?.likes ?? 0,
      comments: backendContent.stats?.comments || 0,
      featured: backendContent.settings?.is_featured || false,
      rawBlocks: backendContent.blocks
    };
  }

  extractExcerpt(blocks: any[]) {
    if (!blocks || blocks.length === 0) return "";
    const textBlock = blocks.find((b: any) =>
      ["text", "heading", "subheading"].includes(b.type),
    );

    if (textBlock?.data?.value) {
      const text = textBlock.data.value.replace(/[#*`]/g, "").trim();
      return text.length > 150 ? text.substring(0, 150) + "..." : text;
    }

    return "Read more about this topic...";
  }

  renderBlocks(blocks: any[]) {
    if (!blocks || blocks.length === 0) return "";

    return blocks
      .map((block: any) => {
        switch (block.type) {
          case "heading":
            return `# ${block.data.value}`;
          case "subheading":
            return `## ${block.data.value}`;
          case "text":
            return block.data.value;
          case "quote":
            return `> ${block.data.value}`;
          case "list":
          case "bullet-list":
            return block.data.items?.map((item: string) => `- ${item}`).join("\n");
          case "numbered-list":
            return block.data.items
              ?.map((item: string, i: number) => `${i + 1}. ${item}`)
              .join("\n");
          case "image":
            return `![${block.data.alt || "image"}](${this.baseUrl}${API_PREFIX}/images/${block.data.file_id})`;
          case "video":
          case "embed":
            return block.data.url;
          case "document": {
            const docUrl = block.data.file_id
              ? `${this.baseUrl}${API_PREFIX}/documents/${block.data.file_id}`
              : block.data.url;
            return `[📁 Download ${block.data.title || "Document"}](${docUrl})`;
          }
          default:
            return "";
        }
      })
      .join("\n\n");
  }
}

export const insightsApi = new InsightsApiService();
