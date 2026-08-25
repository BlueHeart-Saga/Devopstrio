
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
    title: "Virtual classrooms &",
    highlightedWord: "Learning Hubs",
    subtitle: "Developing secure learning management systems (LMS), digital collaboration workspaces, and scalable interactive class portals.",
    bgImage: "/webp/assets/Industries-page/herocard/Education.webp"
  },
  overview: {
    heading: "Secure educational databases and real-time class interfaces",
    desc1: <>We build modern <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">school administration platforms</Link>, learning trackers, and live study dashboards. Our codebases manage homework uploads, class scheduler changes, and student record <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">databases</Link> safely.</>,
    desc2: <>Our services connect student portals with teacher dashboards, facilitating grade entry <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline">pipelines</Link>, secure virtual classrooms, and interactive test scoring engines.</>
  },
  challenges: [
    {
      title: "Simultaneous Classroom Load Peaks",
      desc: <>Managing severe <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">traffic spikes</Link> at the start of school hours when thousands of students join online classes concurrently.</>
    },
    {
      title: "FERPA Student Record Privacy",
      desc: <>Securing grades, physical files, and personal communication data against <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">unauthorized lookups</Link>.</>
    },
    {
      title: "Large File Homework Upload Paths",
      desc: <>Providing fast, secure file <Link href="/services/devops-automation/platform-engineering" className="text-[#E11D48] hover:underline">upload pipelines</Link> for student media assignments and research papers.</>
    }
  ],
  solutions: [
    {
      title: "Auto-Scaling Video Channels",
      desc: <>Setting up WebRTC <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">media servers</Link> that scale dynamically depending on current class attendance metrics.</>
    },
    {
      title: "Isolated Grade Registries",
      desc: <>Storing student grades in <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">encrypted databases</Link> with strict audit logs tracking all administrative edits.</>
    },
    {
      title: "Serverless File Ingress Pipelines",
      desc: <>Routing homework files directly to secure <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">Amazon S3</Link> buckets via time-limited pre-signed URL tokens.</>
    }
  ],
  capabilities: [
    {
      title: "Learning Platforms",
      desc: <>Constructing responsive <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">student hubs</Link> hosting quizzes, grades, and calendar agendas.</>
    },
    {
      title: "Live Virtual Classes",
      desc: <>Integrating <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">low-latency video</Link> feeds and real-time whiteboard drawing states.</>
    },
    {
      title: "Grade Record Safety",
      desc: <>Isolating grade databases inside <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">secure subnets</Link>, logging every administrative database edit.</>
    }
  ],
  useCases: [
    {
      title: "District-Wide LMS Deployment",
      result: <>Supported 120,000 active students concurrently with zero <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">server downtime</Link>.</>
    },
    {
      title: "Interactive Class Drawing",
      result: <>Synchronized <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">digital whiteboard</Link> state across devices under 150ms.</>
    }
  ],
  techs: [
    {
      name: "WebRTC Video",
      desc: <>Low-latency browser <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">video connection</Link> libraries for live virtual lectures.</>
    },
    {
      name: "Node.js / Express",
      desc: <>Fast, modular <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">API endpoints</Link> handling quiz submissions and user log checks.</>
    },
    {
      name: "Amazon S3 Encrypted",
      desc: <>Secure <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">cloud storage</Link> bucket arrays hosting homework PDF and video files.</>
    }
  ],
  outcomes: [
    {
      value: "99.9%",
      label: "Class Hours Uptime",
      desc: <>Sustained availability during morning <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">load spikes</Link>.</>
    },
    {
      value: "<150ms",
      label: "Whiteboard Sync",
      desc: <>Dynamic draw delays across devices utilizing <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">frontend state sync</Link>.</>
    },
    {
      value: "10M+",
      label: "Quizzes Graded",
      desc: <>Automated <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">test submissions</Link> scored annually.</>
    }
  ],
  caseStudy: {
    title: "Autoscaling virtual classroom setup for state school district.",
    desc: <>We engineered a secure <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">virtual classroom system</Link> that connects 120k students. The platform coordinates live video streams, quiz entries, and file sharing under FERPA guidelines with zero lag.</>,
    metrics: [
      { value: "99.9%", label: "Peak Uptime" },
      { value: "<150ms", label: "Sync Delay" },
      { value: "10M+", label: "Quizzes Scored" }
    ],
    highlights: [
      "Built serverless file upload pathways for raw homework files",
      "Sustained 4x morning traffic spikes without server drops",
      "Implemented encrypted database tables logging teacher grades"
    ]
  },
  compliance: [
    {
      title: "FERPA Compliance Audits",
      desc: <>Enforcing strict access controls on student record databases and masking <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">PII data fields</Link>.</>
    },
    {
      title: "COPPA Privacy Rules",
      desc: <>Ensuring parental consent checks and <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">data safety filters</Link> for minor users.</>
    }
  ],
  whyChoose: [
    {
      title: "Proven Load Scaling",
      desc: <>Our platforms survive real-world school <Link href="/services/devops-automation/site-reliability-engineering" className="text-[#E11D48] hover:underline">morning rushes</Link> without drops.</>
    },
    {
      title: "HIPAA/FERPA Alignment",
      desc: <>We prioritize <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">user privacy</Link> and encrypt PII data fields out-of-the-box.</>
    },
    {
      title: "Interactive Features",
      desc: <>Low latency audio/video channels with synchronized <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline">whiteboard components</Link>.</>
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
      title: "Scaling WebRTC Infrastructure",
      desc: "How we configured server clusters to host thousands of live video classroom feeds.",
      link: "/insights"
    },
    {
      title: "Enforcing FERPA database restrictions",
      desc: "Practical steps to secure educational databases and manage student metadata safely.",
      link: "/insights"
    }
  ],
  cta: {
    ctaTitle: "Build your secure",
    ctaHighlight: "Learning platform",
    ctaDesc: <>Consult with our principal <Link href="/contact#contact-form" className="text-[#E11D48] hover:underline">education tech architect</Link> to design virtual classroom tools and student grade databases.</>,
    ctaBtnText: "Consult EdTech Architect"
  },
  faqs: [
    {
      q: "How do you secure children's data under COPPA?",
      a: <>We build our apps to never store unauthorized personal info of kids, implementing age-gates and <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline">encrypted cookies</Link> that clear automatically.</>
    },
    {
      q: "What video library do you use for virtual classrooms?",
      a: <>We integrate custom <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline">WebRTC channels</Link> via Twilio or open-source MediaSoup servers depending on budget and participant volume.</>
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${data.hero.title} ${data.hero.highlightedWord}`,
    description: data.hero.subtitle,
    alternates: {
      canonical: `/industries/education`
    }
  };
}

export default function EducationPage() {
  const mappedOverviewChallenges = data.challenges.map(c => c.title);
  const mappedCompliance = data.compliance.map(c => `${c.title}: ${c.desc}`);

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      
      {/* 1. Hero */}
      <IndustryHero
        industryName="Education"
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
