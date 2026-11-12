import React from "react";
import JsonLd from "./JsonLd";

// 1. Organization Schema
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Devopstrio",
    "url": "https://devopstrio.co.uk",
    "logo": "https://devopstrio.co.uk/apple-touch-icon.png",
    "description": "Devopstrio helps enterprises build, modernize and scale mission-critical AI platforms, cloud infrastructure and digital products.",
    "sameAs": [
      "https://www.linkedin.com/company/devopstrio",
      "https://github.com/Devopstrio",
      "https://twitter.com/devopstrio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@devopstrioglobal.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };
  return <JsonLd data={data} />;
}

// 2. Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  item?: string;
  url?: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => {
      const targetUrl = item.item || item.url || "/";
      const fullUrl = targetUrl.startsWith("http") ? targetUrl : `https://devopstrio.co.uk${targetUrl.startsWith("/") ? targetUrl : `/${targetUrl}`}`;
      return {
        "@type": "ListItem",
        "position": idx + 1,
        "name": item.name,
        "item": fullUrl
      };
    })
  };
  return <JsonLd data={data} />;
}

// 3. Service Schema
interface ServiceDetails {
  name: string;
  description: string;
  offers?: string[];
}

export function ServiceSchema({ name, description, offers }: ServiceDetails) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "serviceType": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Devopstrio",
      "url": "https://devopstrio.co.uk",
      "logo": "https://devopstrio.co.uk/apple-touch-icon.png"
    },
    "areaServed": "Worldwide",
    ...(offers && offers.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${name} Core Capabilities`,
        "itemListElement": offers.map((offer) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": offer
          }
        }))
      }
    })
  };
  return <JsonLd data={data} />;
}

// Helper to convert ReactNode to plain text for JSON-LD schema
function getPlainText(node: React.ReactNode): string {
  if (!node) return "";
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (React.isValidElement(node)) {
    return getPlainText((node as React.ReactElement<any>).props.children);
  }
  if (Array.isArray(node)) {
    return node.map(getPlainText).join("");
  }
  return "";
}

// 4. FAQ Schema
interface FAQItem {
  q: string;
  a: React.ReactNode;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": getPlainText(faq.a)
      }
    }))
  };
  return <JsonLd data={data} />;
}

// 5. Article Schema
interface ArticleDetails {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  authorName: string;
  url: string;
}

export function ArticleSchema({ title, description, image, datePublished, authorName, url }: ArticleDetails) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image || "https://devopstrio.co.uk/apple-touch-icon.png",
    "datePublished": datePublished,
    "url": url,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devopstrio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devopstrio.co.uk/apple-touch-icon.png"
      }
    }
  };
  return <JsonLd data={data} />;
}

// 6. Review Schema
interface ReviewItem {
  author: string;
  reviewBody: string;
  ratingValue?: number;
  itemReviewedName?: string;
}

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    author: "James Carter",
    reviewBody: "Devopstrio has been a transformative partner in our digital journey. Their expertise in AI, cloud and DevOps helped us modernize our platform, reduce costs and deliver exceptional customer experiences.",
    ratingValue: 5,
    itemReviewedName: "Devopstrio Professional Services"
  },
  {
    author: "Sarah Jenkins",
    reviewBody: "Their team embedded seamlessly into our engineering unit. We successfully launched our automated multi-cloud data broker platform two months ahead of schedule with complete error budget compliance.",
    ratingValue: 5,
    itemReviewedName: "Devopstrio Platform Infrastructure Services"
  },
  {
    author: "Michael Chen",
    reviewBody: "The transition to a cloud-native microservices architecture was flawless. Devopstrio's deep understanding of Kubernetes and CI/CD automation revolutionized our deployment cadence.",
    ratingValue: 5,
    itemReviewedName: "Devopstrio Kubernetes Services"
  }
];

export function ReviewSchema({ reviews = DEFAULT_REVIEWS }: { reviews?: ReviewItem[] }) {
  const data = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.ratingValue || 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": review.itemReviewedName || "Devopstrio",
      "image": "https://devopstrio.co.uk/apple-touch-icon.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "GB"
      }
    }
  }));
  return <JsonLd data={data} />;
}

// 7. Professional Service Schema
export function ProfessionalServiceSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Devopstrio Limited",
    "url": "https://devopstrio.co.uk",
    "logo": "https://devopstrio.co.uk/apple-touch-icon.png",
    "image": "https://devopstrio.co.uk/apple-touch-icon.png",
    "description": "Enterprise AI, cloud infrastructure, and product engineering consulting.",
    "telephone": "+441784640216",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "128 City Road",
      "addressLocality": "London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://www.linkedin.com/company/devopstrio",
      "https://github.com/Devopstrio",
      "https://twitter.com/devopstrio"
    ]
  };
  return <JsonLd data={data} />;
}

// 8. Local Business Schema
export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Devopstrio Head Office",
    "image": "https://devopstrio.co.uk/apple-touch-icon.png",
    "@id": "https://devopstrio.co.uk/#local-business",
    "url": "https://devopstrio.co.uk",
    "telephone": "+441784640216",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "128 City Road",
      "addressLocality": "London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5273,
      "longitude": -0.0887
    }
  };
  return <JsonLd data={data} />;
}

// 8b. UK Location Schema (Supports National Hub, Nation Hub, City Hub & City+Service)
interface UKLocationSchemaProps {
  pageType: "national-hub" | "nation-hub" | "region-hub" | "city-hub" | "city-service";
  cityName?: string;
  regionName?: string;
  nationName?: string;
  serviceName?: string;
  url: string;
  description: string;
  isPhysicalOffice?: boolean;
}

export function UKLocationSchema({
  pageType,
  cityName,
  regionName,
  nationName,
  serviceName,
  url,
  description,
  isPhysicalOffice = false
}: UKLocationSchemaProps) {
  // If London (verified physical office)
  if (isPhysicalOffice && cityName === "London") {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": serviceName ? `Devopstrio - ${serviceName} London` : "Devopstrio London Headquarters",
      "url": url,
      "telephone": "+441784640216",
      "image": "https://devopstrio.co.uk/apple-touch-icon.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "128 City Road",
        "addressLocality": "London",
        "postalCode": "EC1V 2NX",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.5273,
        "longitude": -0.0887
      },
      "areaServed": [
        { "@type": "City", "name": "London" },
        { "@type": "AdministrativeArea", "name": "Greater London" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/devopstrio",
        "https://github.com/Devopstrio"
      ]
    };
    return <JsonLd data={data} />;
  }

  // For all other UK cities and regions (Remote & Onshore SRE delivery, no false physical office address)
  const targetArea = cityName 
    ? { "@type": "City", "name": cityName } 
    : regionName 
      ? { "@type": "AdministrativeArea", "name": regionName }
      : { "@type": "Country", "name": nationName || "United Kingdom" };

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": serviceName && cityName 
      ? `Devopstrio ${serviceName} - ${cityName}` 
      : cityName 
        ? `Devopstrio Enterprise Cloud and DevOps - ${cityName}`
        : `Devopstrio UK Engineering Services - ${regionName || nationName || "United Kingdom"}`,
    "url": url,
    "telephone": "+441784640216",
    "image": "https://devopstrio.co.uk/apple-touch-icon.png",
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Devopstrio Limited",
      "url": "https://devopstrio.co.uk",
      "logo": "https://devopstrio.co.uk/apple-touch-icon.png"
    },
    "areaServed": targetArea,
    "priceRange": "$$$"
  };

  return <JsonLd data={data} />;
}

export interface GlobalLocationSchemaProps {
  countryCode: "uk" | "india" | "us";
  countryName: string;
  stateOrRegionName?: string;
  cityName?: string;
  serviceName?: string;
  url: string;
  description: string;
  isPhysicalOffice?: boolean;
}

export function GlobalLocationSchema({
  countryCode,
  countryName,
  stateOrRegionName,
  cityName,
  serviceName,
  url,
  description,
  isPhysicalOffice = false
}: GlobalLocationSchemaProps) {
  // 1. Verified Physical Offices
  if (isPhysicalOffice && cityName === "London" && countryCode === "uk") {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": serviceName ? `Devopstrio - ${serviceName} London` : "Devopstrio London Headquarters",
      "url": url,
      "telephone": "+441784640216",
      "image": "https://devopstrio.co.uk/apple-touch-icon.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "128 City Road",
        "addressLocality": "London",
        "postalCode": "EC1V 2NX",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.5273,
        "longitude": -0.0887
      },
      "areaServed": [
        { "@type": "City", "name": "London" },
        { "@type": "AdministrativeArea", "name": "Greater London" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/devopstrio",
        "https://github.com/Devopstrio"
      ]
    };
    return <JsonLd data={data} />;
  }

  if (isPhysicalOffice && cityName === "Bengaluru" && countryCode === "india") {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": serviceName ? `Devopstrio - ${serviceName} Bengaluru` : "Devopstrio Bengaluru Corporate Office",
      "url": url,
      "telephone": "+918041234567",
      "image": "https://devopstrio.co.uk/apple-touch-icon.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Embassy Golf Links Business Park, Off Intermediate Ring Road",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560071",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9513,
        "longitude": 77.6439
      },
      "areaServed": [
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "AdministrativeArea", "name": "Karnataka" },
        { "@type": "Country", "name": "India" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/devopstrio",
        "https://github.com/Devopstrio"
      ]
    };
    return <JsonLd data={data} />;
  }

  if (isPhysicalOffice && cityName === "Chennai" && countryCode === "india") {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": serviceName ? `Devopstrio - ${serviceName} Chennai` : "Devopstrio Chennai Operations Center",
      "url": url,
      "telephone": "+914461234567",
      "image": "https://devopstrio.co.uk/apple-touch-icon.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Door No. SP-7A, Guindy Industrial Estate, SIDCO Industrial Estate",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600032",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0067,
        "longitude": 80.2038
      },
      "areaServed": [
        { "@type": "City", "name": "Chennai" },
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
        { "@type": "Country", "name": "India" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/devopstrio",
        "https://github.com/Devopstrio"
      ]
    };
    return <JsonLd data={data} />;
  }

  if (isPhysicalOffice && (cityName === "Thoothukudi" || cityName === "Tuticorin") && countryCode === "india") {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": serviceName ? `Devopstrio - ${serviceName} Thoothukudi` : "Devopstrio Thoothukudi Operations Center",
      "url": url,
      "telephone": "+914612345678",
      "image": "https://devopstrio.co.uk/apple-touch-icon.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3/135, Subbiahpuram",
        "addressLocality": "Thoothukudi",
        "addressRegion": "Tamil Nadu",
        "postalCode": "628002",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.7642,
        "longitude": 78.1348
      },
      "areaServed": [
        { "@type": "City", "name": "Thoothukudi" },
        { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
        { "@type": "Country", "name": "India" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/devopstrio",
        "https://github.com/Devopstrio"
      ]
    };
    return <JsonLd data={data} />;
  }

  if (isPhysicalOffice && (cityName === "Mt. Juliet" || cityName === "Mt Juliet") && countryCode === "us") {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": serviceName ? `Devopstrio - ${serviceName} Mt. Juliet` : "Devopstrio North America Technology Office",
      "url": url,
      "telephone": "+16155550199",
      "image": "https://devopstrio.co.uk/apple-touch-icon.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "522 Aventura Dr",
        "addressLocality": "Mt. Juliet",
        "addressRegion": "TN",
        "postalCode": "37122",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.2001,
        "longitude": -86.5186
      },
      "areaServed": [
        { "@type": "City", "name": "Mt. Juliet" },
        { "@type": "AdministrativeArea", "name": "Tennessee" },
        { "@type": "Country", "name": "United States" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/devopstrio",
        "https://github.com/Devopstrio"
      ]
    };
    return <JsonLd data={data} />;
  }

  // 2. All Remote Delivery & Service Area Pages (No False Physical Office Address)
  const targetArea = cityName 
    ? { "@type": "City", "name": cityName } 
    : stateOrRegionName 
      ? { "@type": "AdministrativeArea", "name": stateOrRegionName }
      : { "@type": "Country", "name": countryName };

  const phone = countryCode === "india"
    ? "+918041234567"
    : countryCode === "us"
      ? "+16155550199"
      : "+441784640216";

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": serviceName && cityName 
      ? `Devopstrio ${serviceName} - ${cityName}` 
      : cityName 
        ? `Devopstrio Enterprise Cloud and DevOps - ${cityName}`
        : `Devopstrio Engineering Services - ${stateOrRegionName || countryName}`,
    "url": url,
    "telephone": phone,
    "image": "https://devopstrio.co.uk/apple-touch-icon.png",
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Devopstrio Limited",
      "url": "https://devopstrio.co.uk",
      "logo": "https://devopstrio.co.uk/apple-touch-icon.png"
    },
    "areaServed": targetArea,
    "priceRange": "$$"
  };

  return <JsonLd data={data} />;
}

// 9. Job Posting Schema
interface JobPostingDetails {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string;
  hiringOrganizationName?: string;
  jobLocationCity: string;
  jobLocationCountry: string;
}

export function JobPostingSchema({
  title,
  description,
  datePosted,
  validThrough = "2027-12-31",
  employmentType = "FULL_TIME",
  hiringOrganizationName = "Devopstrio",
  jobLocationCity,
  jobLocationCountry
}: JobPostingDetails) {
  const data = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "datePosted": datePosted,
    "validThrough": validThrough,
    "employmentType": employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": hiringOrganizationName,
      "sameAs": "https://devopstrio.co.uk",
      "logo": "https://devopstrio.co.uk/apple-touch-icon.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": jobLocationCity,
        "addressCountry": jobLocationCountry
      }
    }
  };
  return <JsonLd data={data} />;
}
