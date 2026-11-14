import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { capabilityRegistry } from "@/data/services/dynamic-capabilities";
import { insightsApi } from "@/lib/insightsApi";
import { ecosystemSubpages } from "@/data/ecosystem";
import { ukNations, ukRegions, ukLocations } from "@/data/locations/uk-locations";
import { getPublishedCities, getPublishedCityServices } from "@/lib/location-content";
import {
  getPublishedIndiaStates,
  getPublishedIndiaCities,
  getPublishedUSStates,
  getPublishedUSCities
} from "@/lib/location-content-global";
import { indiaStates, indiaLocations } from "@/data/locations/india-locations";
import { usStates, usLocations } from "@/data/locations/us-locations";
import { getPublishedIndiaCityServices } from "@/data/locations/india-service-matrix";
import { getPublishedUSCityServices } from "@/data/locations/us-service-matrix";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devopstrio.co.uk";

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
    "/about/our-culture-people",
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
    "/gdpr",
    "/services/explore",
    "/ecosystem/landing-zone",
    "/ecosystem/accelerators-frameworks/landing-zone",
    "/ecosystem/engineering-excellence/engineering-operations",
    "/ecosystem/engineering-excellence/solution-architecture",
    "/ecosystem/global-delivery/global-delivery-model",
    "/ecosystem/global-delivery/united-states-operations",
    "/ecosystem/technology-stack/artificial-intelligence/generative-ai-pipelines",
    "/marketing",
    "/marketing/products",
    "/marketing/services",
    "/marketing/services/ai-data-innovation",
    "/marketing/services/cloud-services",
    "/marketing/services/devops-automation",
    "/marketing/industries",
    "/marketing/industries/banking-finance",
    "/marketing/industries/healthcare",
    "/marketing/case-studies",
    "/marketing/whitepapers",
    "/marketing/presentations",
    "/marketing/videos",
    "/marketing/company",
    "/marketing/company/company-profile",
    "/marketing/company/corporate-presentation",
    "/marketing/company/brand-guidelines",
    "/marketing/platforms",
    "/marketing/technology",
    "/marketing/downloads",
    "/marketing/latest"
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
        const saasSubpages = ["brio", "campix", "caresuite", "homela", "humanex", "justivon", "prestivo", "esigniva"];
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
    const fetchPostsWithTimeout = Promise.race([
      insightsApi.getAllPosts(500),
      new Promise<any[]>((resolve) => setTimeout(() => resolve([]), 15000))
    ]);
    const posts = await fetchPostsWithTimeout;
    posts.forEach((post) => {
      if (post.id && post.category?.slug) {
        const postDate = post.date ? new Date(post.date) : new Date();
        const validDate = isNaN(postDate.getTime()) ? new Date() : postDate;
        dynamicPostPages.push({
          url: `${baseUrl}/insights/${post.category.slug}/${post.slug || post.id}`,
          lastModified: validDate,
          changeFrequency: "weekly",
          priority: 0.6
        });
      }
    });
  } catch (e) {
    console.error("Failed to generate dynamic post URLs for sitemap:", e);
  }

  // 7. Approved & Published Global Location Pages
  const locationPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/locations/uk`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  // UK Nations
  Object.keys(ukNations).forEach((nSlug) => {
    locationPages.push({
      url: `${baseUrl}/locations/uk/${nSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // UK Regions (English regions only; Scotland, Wales, and Northern Ireland are consolidated under UK Nations)
  Object.values(ukRegions)
    .filter((reg) => reg.nation !== reg.slug)
    .forEach((reg) => {
      locationPages.push({
        url: `${baseUrl}/locations/uk/${reg.nation}/${reg.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7
      });
    });

  // UK Published Cities (Clean Hierarchy: Country -> Nation -> City)
  const publishedCities = getPublishedCities();
  publishedCities.forEach((city) => {
    const nat = ukNations[city.nation];
    if (nat) {
      locationPages.push({
        url: `${baseUrl}/locations/uk/${nat.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7
      });
    }
  });

  // UK Published City + Service Combinations: Preferred Pattern /locations/uk/[location]-[service]
  const publishedServices = getPublishedCityServices();
  publishedServices.forEach((mapping) => {
    locationPages.push({
      url: `${baseUrl}/locations/uk/${mapping.citySlug}-${mapping.serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // INDIA LOCATIONS
  locationPages.push({
    url: `${baseUrl}/locations/india`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8
  });

  // India Published States
  const publishedIndiaStates = getPublishedIndiaStates();
  publishedIndiaStates.forEach((st) => {
    locationPages.push({
      url: `${baseUrl}/locations/india/${st.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // India Published Cities
  const publishedIndiaCities = getPublishedIndiaCities();
  publishedIndiaCities.forEach((city) => {
    const st = indiaStates[city.stateOrRegionId];
    if (st) {
      locationPages.push({
        url: `${baseUrl}/locations/india/${st.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7
      });
    }
  });

  // India Published City + Service Combinations: Preferred Pattern /locations/india/[location]-[service]
  const publishedIndiaServices = getPublishedIndiaCityServices();
  publishedIndiaServices.forEach((mapping) => {
    locationPages.push({
      url: `${baseUrl}/locations/india/${mapping.citySlug}-${mapping.serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // USA LOCATIONS
  locationPages.push({
    url: `${baseUrl}/locations/us`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8
  });

  // US Published States
  const publishedUSStates = getPublishedUSStates();
  publishedUSStates.forEach((st) => {
    locationPages.push({
      url: `${baseUrl}/locations/us/${st.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // US Published Cities
  const publishedUSCities = getPublishedUSCities();
  publishedUSCities.forEach((city) => {
    const st = usStates[city.stateOrRegionId];
    if (st) {
      locationPages.push({
        url: `${baseUrl}/locations/us/${st.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7
      });
    }
  });

  // US Published City + Service Combinations: Preferred Pattern /locations/us/[location]-[service]
  const publishedUSServices = getPublishedUSCityServices();
  publishedUSServices.forEach((mapping) => {
    locationPages.push({
      url: `${baseUrl}/locations/us/${mapping.citySlug}-${mapping.serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...ecosystemPages,
    ...insightsPages,
    ...dynamicPostPages,
    ...locationPages
  ];
}
