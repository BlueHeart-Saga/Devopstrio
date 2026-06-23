import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { capabilityRegistry } from "@/data/services/dynamic-capabilities";
import { insightsApi } from "@/lib/insightsApi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://devopstrio.co.uk";

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/services",
    "/industries",
    "/ecosystem",
    "/insights",
    "/contact",
    "/careers",
    "/sitemap",
    "/about/company-overview",
    "/about/leadership-team",
    "/about/life-at-devopstrio",
    "/about/global-internship",
    "/about/global-presence",
    "/about/partnerships-certifications",
    "/about/awards-recognition",
    "/about/sustainability-csr",
    "/about/testimonials",
    "/about/customer-support",
    "/disclaimer",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/gdpr"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8
  }));

  // 2. Service Category & Capability Pages
  const servicePages: MetadataRoute.Sitemap = [];
  Object.keys(servicesData).forEach((serviceSlug) => {
    servicePages.push({
      url: `${baseUrl}/services/${serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    });

    const capabilities = capabilityRegistry[serviceSlug] || {};
    Object.keys(capabilities).forEach((capabilitySlug) => {
      servicePages.push({
        url: `${baseUrl}/services/${serviceSlug}/${capabilitySlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7
      });
    });
  });

  // 3. Industry Pages
  const industrySlugs = [
    "banking-finance",
    "education",
    "government-public-sector",
    "healthcare-life-sciences",
    "manufacturing",
    "media-entertainment",
    "retail-ecommerce",
    "telecommunications"
  ];
  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8
  }));

  // 4. Ecosystem Category Hubs & Subpages
  const ecosystemPages: MetadataRoute.Sitemap = [];
  
  // Partnerships
  const partners = ["microsoft", "aws", "google-cloud", "oracle", "servicenow", "sap", "cisco"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/partnerships`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  partners.forEach((p) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/partnerships/${p}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // Innovation Labs
  const labs = ["ai-lab", "cloud-lab", "devops-lab", "cybersecurity-lab", "data-analytics-lab"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/innovation-labs`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  labs.forEach((l) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/innovation-labs/${l}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // Platforms & Solutions
  const platforms = ["ai-hiring-platform", "devops-platform", "cloud-management-platform", "security-platform", "data-platform", "automation-platform", "customer-experience-platform"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/platforms-solutions`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  platforms.forEach((pl) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/platforms-solutions/${pl}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // Technology Stack
  const stacks = ["artificial-intelligence", "cloud-native", "devops-toolchain", "data-engineering", "cybersecurity"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/technology-stack`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  stacks.forEach((s) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/technology-stack/${s}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // Global Delivery
  const hubs = ["united-kingdom", "india", "europe", "follow-the-sun-support", "managed-services-center"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/global-delivery`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  hubs.forEach((h) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/global-delivery/${h}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // Engineering Excellence
  const excellence = ["software-engineering", "platform-engineering", "site-reliability-engineering", "devsecops", "quality-engineering"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/engineering-excellence`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  excellence.forEach((e) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/engineering-excellence/${e}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // Accelerators & Frameworks
  const accels = ["cloud-accelerator", "devops-accelerator", "ai-framework", "security-framework", "data-framework"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/accelerators-frameworks`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  accels.forEach((a) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/accelerators-frameworks/${a}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // Community & Talent Network
  const communities = ["engineering-community", "university-programs", "open-source-contributions", "talent-network", "certification-programs"];
  ecosystemPages.push({ url: `${baseUrl}/ecosystem/community-talent-network`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  communities.forEach((c) => {
    ecosystemPages.push({ url: `${baseUrl}/ecosystem/community-talent-network/${c}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 });
  });

  // 5. Insights Hub
  const insightsCategories = ["blogs", "case-studies", "white-paper", "awards-milestones", "industry-events", "celebrations", "team-culture", "client-transformations", "impact-metrics"];
  const insightsPages: MetadataRoute.Sitemap = insightsCategories.map((c) => ({
    url: `${baseUrl}/insights/${c}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  // 6. Dynamic Insights Pages (Blogs, Case Studies, etc.)
  const dynamicPostPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await insightsApi.getAllPosts(300);
    posts.forEach((post) => {
      if (post.id && post.category?.slug) {
        dynamicPostPages.push({
          url: `${baseUrl}/insights/${post.category.slug}/${post.id}`,
          lastModified: new Date(post.date),
          changeFrequency: "weekly",
          priority: 0.6
        });
      }
    });
  } catch (e) {
    console.error("Failed to generate dynamic post URLs for sitemap:", e);
  }

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...ecosystemPages,
    ...insightsPages,
    ...dynamicPostPages
  ];
}
