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
      "email": "info@devopstrio.co.uk",
      "contactType": "customer service",
      "availableLanguage": "English"
    }
  };
  return <JsonLd data={data} />;
}

// 2. Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.item.startsWith("http") ? item.item : `https://devopstrio.co.uk${item.item}`
    }))
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

// 4. FAQ Schema
interface FAQItem {
  q: string;
  a: string;
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
        "text": faq.a
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
    "name": "Devopstrio",
    "url": "https://devopstrio.co.uk",
    "logo": "https://devopstrio.co.uk/apple-touch-icon.png",
    "image": "https://devopstrio.co.uk/apple-touch-icon.png",
    "description": "Enterprise AI, cloud infrastructure, and product engineering consulting.",
    "telephone": "+442079460192",
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
    "telephone": "+442079460192",
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
      "latitude": 51.5256,
      "longitude": -0.0875
    }
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
