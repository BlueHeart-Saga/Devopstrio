
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
    title: "Secure Gov-Tech &",
    highlightedWord: "Public Operations",
    subtitle: "Migrating public services to secure cloud infrastructures, building citizen access portals, and aligning with federal safety parameters.",
    bgImage: "/assets/Industries-page/herocard/public.png"
  },
  overview: {
    heading: "Compliant public systems and secure database migration paths",
    desc1: <>We build public-facing <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">information portals</Link>, secure citizen record directories, and automated form processing systems. Our architectures utilize strict access rules, isolate data files, and log every system change.</>,
    desc2: <>Our development teams migrate outdated government servers to secure <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud spaces</Link>, reducing operational costs while improving portal access times and data backup safety.</>
  },
  challenges: [
    {
      title: "Federal Compliance Locks",
      desc: <>Meeting complex Gov-Cloud mandates, <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">NIST standards</Link>, and ensuring all host assets stay inside state borders.</>
    },
    {
      title: "Legacy Server Data Migration",
      desc: <>Safely shifting decades of citizen records from legacy on-premise hardware to <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud databases</Link> without data loss.</>
    },
    {
      title: "High Citizen Volume Traffic Peaks",
      desc: <>Configuring public forms to absorb immense traffic surges during tax seasons or <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">benefit applications</Link>.</>
    }
  ],
  solutions: [
    {
      title: "Isolated Gov-Cloud Hosting",
      desc: <>Deploying applications inside <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS GovCloud</Link> or Azure Government zones with restricted admin controls.</>
    },
    {
      title: "Schema Mapping & Validation",
      desc: <>Using script-driven <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline">migration pipelines</Link> to format, clean, and verify relational records as they migrate.</>
    },
    {
      title: "Dynamic Load Balancers",
      desc: <>Integrating autoscaling pod groups that dynamically scale out based on current <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">API requests</Link>.</>
    }
  ],
  capabilities: [
    {
      title: "Citizen Web Portals",
      desc: <>Building clean, accessible user interfaces where citizens apply for services and renew documents under our <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">civic engineering projects</Link>.</>
    },
    {
      title: "Secure Cloud Migration",
      desc: <>Moving legacy on-premise mainframe databases to encrypted government <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud subnets</Link>.</>
    },
    {
      title: "System Audit Trails",
      desc: <>Deploying secure read-only logs that track every employee edit and data query under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">strict compliance rules</Link>.</>
    }
  ],
  useCases: [
    {
      title: "County Record Modernization",
      result: <>Migrated 4.5 million legal documents to <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">Gov-Cloud</Link> with zero loss.</>
    },
    {
      title: "Citizen Application Ingress",
      result: <>Reduced form processing cycles from 14 business days down to 8 minutes via <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">automated workflow processing</Link>.</>
    }
  ],
  techs: [
    {
      name: "AWS GovCloud",
      desc: <>Isolated government cloud zones ensuring local physical host controls under <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS GovCloud</Link>.</>
    },
    {
      name: "Next.js / React",
      desc: <>Highly accessible, lightweight frontends optimized for screen readers and slow connections under <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">WCAG guidelines</Link>.</>
    },
    {
      name: "PostgreSQL / Row Security",
      desc: <>Relational databases with row-level security ensuring strict data partition separations under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">row security models</Link>.</>
    }
  ],
  outcomes: [
    {
      value: "100%",
      label: "Audit Pass Rate",
      desc: <>NIST and <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">FedRAMP compliance</Link> standard verification status.</>
    },
    {
      value: "65%",
      label: "Load Time Reduction",
      desc: <>Portal load time enhancements utilizing <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">Edge CDN routes</Link>.</>
    },
    {
      value: "0",
      label: "Security Violations",
      desc: <>Protected citizen records against <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">data disclosures</Link>.</>
    }
  ],
  caseStudy: {
    title: "Secure mainframe database migration for county records office.",
    desc: <>We migrated 4.5M citizen property documents from outdated office servers to <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS GovCloud</Link>. The setup includes automated daily backup scripts and strict access roles, cutting query response times by 80%.</>,
    metrics: [
      { value: "100%", label: "Audit Success" },
      { value: "65%", label: "Speed Boost" },
      { value: "0", label: "Breach Incident" }
    ],
    highlights: [
      "Transferred legacy mainframe files without data losses",
      "Configured strict multi-factor access protocols for employees",
      "Aligned entire system with federal NIST security guidelines"
    ]
  },
  compliance: [
    {
      title: "NIST SP 800-53 Standard Compliance",
      desc: <>Enforcing federal information security controls and routine <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">vulnerability checks</Link>.</>
    },
    {
      title: "FedRAMP Cloud Alignments",
      desc: <>Setting up cloud architectures inside government-approved <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS GovCloud subnets</Link>.</>
    }
  ],
  whyChoose: [
    {
      title: "Accessibility Standards First",
      desc: <>Our web platforms strictly follow <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">WCAG guidelines</Link> to support all citizens.</>
    },
    {
      title: "FedRAMP-Aligned Architectures",
      desc: <>We deploy secure partitions matching state and federal cloud <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">security regulations</Link>.</>
    },
    {
      title: "Detailed Audit Logs",
      desc: <>Immutable ledger tracking ensures every transaction and database edit is accounted for under <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">tamper-proof protocols</Link>.</>
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
      title: "Adhering to WCAG AA Guidelines",
      desc: "Best practices to design and test accessible government web platforms for all citizens.",
      link: "/insights"
    },
    {
      title: "Hosting databases in AWS GovCloud",
      desc: "A technical breakdown of host security controls and IAM requirements insideGovCloud partitions.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Modernize your civic",
    ctaHighlight: "Cloud systems",
    ctaDesc: <>Consult with our principal <Link href="/contact" className="text-[#E11D48] hover:underline">gov-tech solutions architect</Link> to evaluate your legacy databases and cloud security.</>,
    ctaBtnText: "Consult Gov-Tech Architect"
  },
  faqs: [
    {
      q: "Do you host databases inside federal GovCloud spaces?",
      a: <>Yes. We deploy applications and data inside <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">AWS GovCloud</Link> or Microsoft Azure Government environments depending on agency needs.</>
    },
    {
      q: "How do you ensure web accessibility for disabled citizens?",
      a: <>We develop frontends that strictly adhere to <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">WCAG 2.1 AA standards</Link>, utilizing semantic HTML, proper contrast, and keyboard navigation testing.</>
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${data.hero.title} ${data.hero.highlightedWord}`,
    description: data.hero.subtitle,
    alternates: {
      canonical: `/industries/government-public-sector`
    }
  };
}

export default function GovernmentPublicSectorPage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Government & Public Sector"
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
