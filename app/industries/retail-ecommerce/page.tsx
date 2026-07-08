
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import Link from "next/link";

// Component imports
import { IndustryHero } from "@/sections/industries/detail/IndustryHero";
import { IndustryOverview } from "@/sections/industries/detail/IndustryOverview";
import { IndustryChallenges } from "@/sections/industries/detail/IndustryChallenges";
import { IndustrySolutions } from "@/sections/industries/detail/IndustrySolutions";
import { IndustryFocusAreas } from "@/sections/industries/detail/IndustryFocusAreas";
import { IndustryUseCases } from "@/sections/industries/detail/IndustryUseCases";
import { IndustryTechStack } from "@/sections/industries/detail/IndustryTechStack";
import { IndustryOutcomes } from "@/sections/industries/detail/IndustryOutcomes";
import { IndustryCaseStudy } from "@/sections/industries/detail/IndustryCaseStudy";
import { IndustryCompliance } from "@/sections/industries/detail/IndustryCompliance";
import { IndustryWhyChoose } from "@/sections/industries/detail/IndustryWhyChoose";
import { IndustryRelatedServices } from "@/sections/industries/detail/IndustryRelatedServices";
import { IndustryInsights } from "@/sections/industries/detail/IndustryInsights";
import { IndustryFAQ } from "@/sections/industries/detail/IndustryFAQ";
import { IndustryCTA } from "@/sections/industries/detail/IndustryCTA";

const subSections = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "capabilities", label: "Capabilities" },
  { id: "use-cases", label: "Use Cases" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "outcomes", label: "Outcomes" },
  { id: "case-study", label: "Case Study" },
  { id: "compliance", label: "Compliance" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "faq", label: "FAQ" }
];

const data = {
  hero: {
    title: "Omni-channel &",
    highlightedWord: "E-Commerce Engines",
    subtitle: "Implementing high-speed checkout engines, real-time personalization pipelines, and intelligent inventory analytics.",
    bgImage: "/assets/Industries-page/herocard/retails.png"
  },
  overview: {
    heading: "Scalable e-commerce platforms designed for peak traffic and conversion",
    desc1: <>We build custom headless storefronts, scalable cart runtimes, and real-time recommendation engines under our <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">product engineering projects</Link>. Our setups process hundreds of catalog operations per second with Redis cache buffers.</>,
    desc2: <>Our services connect online shopping portals with ERP databases, facilitating real-time stock counts, multi-currency pricing layers, and robust <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">payment routing hooks</Link>.</>
  },
  challenges: [
    {
      title: "Cart Concurrency Lockouts",
      desc: <>Avoiding transaction database locks when thousands of users attempt to purchase limited-stock items simultaneously using <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">SRE queue configs</Link>.</>
    },
    {
      title: "Peak Sales Volume Scalability",
      desc: <>Preventing website crashes and slow checkouts during major promotional events like Black Friday using <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">autoscaling clusters</Link>.</>
    },
    {
      title: "Omni-Channel Stock Sync Latency",
      desc: <>Synchronizing physical store stock levels with online catalog counts immediately to prevent double-selling using <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">sync pipelines</Link>.</>
    }
  ],
  solutions: [
    {
      title: "Redis-Buffered Checkouts",
      desc: <>Writing reservations to in-memory <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">Redis buffers</Link>, letting the database receive clean, throttled writes.</>
    },
    {
      title: "Autoscaling Headless Nodes",
      desc: <>Deploying frontend storefronts via serverless Vercel edges and autoscaling <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">microservice containers</Link>.</>
    },
    {
      title: "GraphQL Catalog Gateways",
      desc: <>Consolidating inventory counts, details, and pricing into a unified, lightweight <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">GraphQL endpoint</Link>.</>
    }
  ],
  capabilities: [
    {
      title: "Headless Storefronts",
      desc: <>Constructing fast, SEO-optimized frontends utilizing Next.js linked with GraphQL catalog endpoints under our <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">headless engineering setups</Link>.</>
    },
    {
      title: "High-Volume Carts",
      desc: <>Creating in-memory Redis checkout states preventing double-reservations of limited stock during flash sales using <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">caching hooks</Link>.</>
    },
    {
      title: "Recommendation Loops",
      desc: <>Deploying vector search databases suggesting relevant products based on user viewing histories under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">intelligent analytics</Link>.</>
    }
  ],
  useCases: [
    {
      title: "Flash Sale Handling",
      result: <>Sustained a 3.5x holiday rush volume spike with 100% checkout completion rates under <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">robust SRE monitors</Link>.</>
    },
    {
      title: "Catalog Speed Up",
      result: <>Reduced average cart addition latency down to under 80ms globally using <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">Vercel Edge stores</Link>.</>
    }
  ],
  techs: [
    {
      name: "Next.js / React",
      desc: <>Fast server-rendered interfaces designed for maximum user conversion under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">Next.js portals</Link>.</>
    },
    {
      name: "Redis Enterprise",
      desc: <>In-memory stock checking systems ensuring real-time reservation speeds on <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">Redis clusters</Link>.</>
    },
    {
      name: "GraphQL / Apollo",
      desc: <>Flexible data fetching queries optimizing backend load for mobile shoppers using <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">GraphQL routers</Link>.</>
    }
  ],
  outcomes: [
    {
      value: "<80ms",
      label: "Cart Latency",
      desc: <>Fast item addition speed optimized by <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">Edge CDN routes</Link>.</>
    },
    {
      value: "99.99%",
      label: "Promo Event Uptime",
      desc: <>Target reliability during holiday flash sales monitored under <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">SRE dashboards</Link>.</>
    },
    {
      value: "4.2x",
      label: "Conversion Boost",
      desc: <>Purchaser ratios compared to legacy setups with <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">modern UX templates</Link>.</>
    }
  ],
  caseStudy: {
    title: "Rebuilding the storefront architecture for global apparel brand.",
    desc: <>We re-engineered a legacy e-commerce platform into a headless React application powered by Next.js and Redis. The setup easily sustained a 3x traffic spike during holiday sales, with cart load times dropping to under 80ms under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">modern storefronts</Link>.</>,
    metrics: [
      { value: "<80ms", label: "Cart Add Time" },
      { value: "99.99%", label: "Peak Uptime" },
      { value: "4.2x", label: "Conversion Lift" }
    ],
    highlights: [
      "Decoupled web catalog from database queries using Redis caches",
      "Setup serverless GraphQL gateways",
      "Increased overall conversion metrics by 28%"
    ]
  },
  compliance: [
    {
      title: "PCI-DSS Level 1 Alignments",
      desc: <>Enforcing encrypted card data transport routes, checkout tokens, and secure webhook verifications under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">PCI rules</Link>.</>
    },
    {
      title: "GDPR & CCPA Safeguards",
      desc: <>Integrating customer consent registries and supporting automated account deletion triggers under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">privacy safeguards</Link>.</>
    }
  ],
  whyChoose: [
    {
      title: "Flash Sale Proofing",
      desc: <>Our architectures handle intense seasonal volume peaks without database locks using <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">Redis buffer queues</Link>.</>
    },
    {
      title: "Conversion-Focused UI",
      desc: <>We build headless, lightning-fast pages optimized to keep visitors moving toward checkout with <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">custom Next.js engines</Link>.</>
    },
    {
      title: "Flexible Integrations",
      desc: <>Easily link modern frontends with Contentful, Shopify Plus, or private ERP platforms under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">clean API wrappers</Link>.</>
    }
  ],
  relatedServices: [
    { title: "Cloud Platform Engineering", href: "/services/cloud-platform-engineering" },
    { title: "DevOps & Release Automation", href: "/services/devops-automation" },
    { title: "Product Engineering", href: "/services/product-engineering" },
    { title: "Site Reliability Engineering", href: "/services/sre-operations" }
  ],
  insights: [
    {
      title: "Preventing Database Locks in flash sales",
      desc: "How to use Redis transaction queues to protect relational databases from flash sales surges.",
      link: "/insights"
    },
    {
      title: "Building Headless Storefronts with Next.js",
      desc: "A technical guide to configuring static-site generation and GraphQL APIs for retail.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Launch your scalable",
    ctaHighlight: "E-Commerce engine",
    ctaDesc: <>Consult with our principal <Link href="/contact" className="text-[#E11D48] hover:underline">e-commerce solution architect</Link> to design a high-conversion checkout pipeline.</>,
    ctaBtnText: "Consult E-Commerce Architect"
  },
  faqs: [
    {
      q: "How do you protect databases during flash sales?",
      a: <>We write active reservation queues to in-memory Redis caches, allowing the main database to receive structured, throttled writes, preventing server lockups under <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">Redis reservation tools</Link>.</>
    },
    {
      q: "Which headless CMS platforms do you support?",
      a: <>We integrate with Contentful, Sanity, Shopify Plus, and Strapi depending on your product editing workflows under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">headless setups</Link>.</>
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${data.hero.title} ${data.hero.highlightedWord}`,
    description: data.hero.subtitle,
    alternates: {
      canonical: `/industries/retail-ecommerce`
    }
  };
}

export default function RetailEcommercePage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Retail & E-Commerce"
        title={data.hero.title}
        highlightedWord={data.hero.highlightedWord}
        subtitle={data.hero.subtitle}
        bgImage={data.hero.bgImage}
      />

      {/* Sticky Secondary Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview */}
      <IndustryOverview
        overviewHeading={data.overview.heading}
        overviewDesc1={data.overview.desc1}
        overviewDesc2={data.overview.desc2}
        challenges={mappedOverviewChallenges}
        image={data.hero.bgImage}
      />

      {/* 3. Challenges We Solve */}
      <IndustryChallenges challenges={data.challenges} />

      {/* 4. Solutions We Deliver */}
      <IndustrySolutions solutions={data.solutions} />

      {/* 5. Core Capabilities */}
      <IndustryFocusAreas focusAreas={data.capabilities} />

      {/* 6. Use Cases */}
      <IndustryUseCases useCases={data.useCases} />

      {/* 7. Technology Stack */}
      <IndustryTechStack techs={data.techs} />

      {/* 8. Business Outcomes */}
      <IndustryOutcomes outcomes={[
        { value: data.outcomes[0].value, label: data.outcomes[0].label, desc: data.outcomes[0].desc },
        { value: data.outcomes[1].value, label: data.outcomes[1].label, desc: data.outcomes[1].desc },
        { value: data.outcomes[2].value, label: data.outcomes[2].label, desc: data.outcomes[2].desc }
      ]} />

      {/* 9. Success Stories */}
      <IndustryCaseStudy
        caseStudyTitle={data.caseStudy.title}
        caseStudyDesc={data.caseStudy.desc}
        metrics={data.caseStudy.metrics}
        caseStudyHighlights={data.caseStudy.highlights}
      />

      {/* 10. Compliance & Security */}
      <IndustryCompliance compliances={mappedCompliance} />

      {/* 11. Why Devopstrio */}
      <IndustryWhyChoose whyChoose={data.whyChoose} />

      {/* 12. Insights */}
      <IndustryInsights insights={data.insights} />

      {/* 13. Related Services */}
      <IndustryRelatedServices relatedServices={data.relatedServices} />

      {/* 14. FAQ */}
      <IndustryFAQ faqs={data.faqs} />

      {/* 15. CTA */}
      <IndustryCTA
        ctaTitle={data.cta.ctaTitle}
        ctaHighlight={data.cta.ctaHighlight}
        ctaDesc={data.cta.ctaDesc}
        ctaBtnText={data.cta.ctaBtnText}
      />

    </main>
  );
}
