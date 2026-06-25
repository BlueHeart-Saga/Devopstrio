import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { capabilityRegistry } from "@/data/services/dynamic-capabilities";
import { insightsApi } from "@/lib/insightsApi";
import { ecosystemSubpages } from "@/data/ecosystem";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://devopstrio.co.uk";

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/industries",
    "/ecosystem",
    "/insights",
    "/contact",
    "/careers",
    "/careers/jobs",
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

  // 4. Ecosystem Category Hubs & Subpages (Dynamically Generated)
  const ecosystemPages: MetadataRoute.Sitemap = [];
  
  Object.keys(ecosystemSubpages).forEach((domainSlug) => {
    // Add the main domain page
    ecosystemPages.push({
      url: `${baseUrl}/ecosystem/${domainSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    });

    const subpages = ecosystemSubpages[domainSlug] || {};
    Object.keys(subpages).forEach((subpageSlug) => {
      if (domainSlug === "platforms-solutions" && subpageSlug === "saas-platforms") {
        // Add the SaaS Platforms base page
        ecosystemPages.push({
          url: `${baseUrl}/ecosystem/platforms-solutions/saas-platforms`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7
        });
        
        // Add all subpages of saas-platforms
        const saasSubpages = ["brio", "campix", "homela", "humanex", "prestivo", "safesign"];
        saasSubpages.forEach((slug) => {
          ecosystemPages.push({
            url: `${baseUrl}/ecosystem/platforms-solutions/saas-platforms/${slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7
          });
        });
      } else {
        ecosystemPages.push({
          url: `${baseUrl}/ecosystem/${domainSlug}/${subpageSlug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.7
        });
      }
    });
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
