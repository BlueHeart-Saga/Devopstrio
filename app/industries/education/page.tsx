
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

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
    bgImage: "/assets/Industries-page/herocard/education.png"
  },
  overview: {
    heading: "Secure educational databases and real-time class interfaces",
    desc1: "We build modern school administration platforms, learning trackers, and live study dashboards. Our codebases manage homework uploads, class scheduler changes, and student record databases safely.",
    desc2: "Our services connect student portals with teacher dashboards, facilitating grade entry pipelines, secure virtual classrooms, and interactive test scoring engines."
  },
  challenges: [
    {
      title: "Simultaneous Classroom Load Peaks",
      desc: "Managing severe traffic spikes at the start of school hours when thousands of students join online classes concurrently."
    },
    {
      title: "FERPA Student Record Privacy",
      desc: "Securing grades, physical files, and personal communication data against unauthorized lookups."
    },
    {
      title: "Large File Homework Upload Paths",
      desc: "Providing fast, secure file upload pipelines for student media assignments and research papers."
    }
  ],
  solutions: [
    {
      title: "Auto-Scaling Video Channels",
      desc: "Setting up WebRTC media servers that scale dynamically depending on current class attendance metrics."
    },
    {
      title: "Isolated Grade Registries",
      desc: "Storing student grades in encrypted databases with strict audit logs tracking all administrative edits."
    },
    {
      title: "Serverless File Ingress Pipelines",
      desc: "Routing homework files directly to secure Amazon S3 buckets via time-limited pre-signed URL tokens."
    }
  ],
  capabilities: [
    {
      title: "Learning Platforms",
      desc: "Constructing responsive student hubs hosting quizzes, grades, and calendar agendas."
    },
    {
      title: "Live Virtual Classes",
      desc: "Integrating low-latency video feeds and real-time whiteboard drawing states."
    },
    {
      title: "Grade Record Safety",
      desc: "Isolating grade databases inside secure subnets, logging every administrative database edit."
    }
  ],
  useCases: [
    {
      title: "District-Wide LMS Deployment",
      result: "Supported 120,000 active students concurrently with zero server downtime."
    },
    {
      title: "Interactive Class Drawing",
      result: "Synchronized digital whiteboard state across devices under 150ms."
    }
  ],
  techs: [
    {
      name: "WebRTC Video",
      desc: "Low-latency browser video connection libraries for live virtual lectures."
    },
    {
      name: "Node.js / Express",
      desc: "Fast, modular API endpoints handling quiz submissions and user log checks."
    },
    {
      name: "Amazon S3 Encrypted",
      desc: "Secure cloud storage bucket arrays hosting homework PDF and video files."
    }
  ],
  outcomes: [
    {
      value: "99.9%",
      label: "Class Hours Uptime",
      desc: "Sustained availability during morning load spikes."
    },
    {
      value: "<150ms",
      label: "Whiteboard Sync",
      desc: "Dynamic draw delays across devices."
    },
    {
      value: "10M+",
      label: "Quizzes Graded",
      desc: "Automated test submissions scored annually."
    }
  ],
  caseStudy: {
    title: "Autoscaling virtual classroom setup for state school district.",
    desc: "We engineered a secure virtual classroom system that connects 120k students. The platform coordinates live video streams, quiz entries, and file sharing under FERPA guidelines with zero lag.",
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
      desc: "Enforcing strict access controls on student record databases and masking PII data fields."
    },
    {
      title: "COPPA Privacy Rules",
      desc: "Ensuring parental consent checks and data safety filters for minor users."
    }
  ],
  whyChoose: [
    {
      title: "Proven Load Scaling",
      desc: "Our platforms survive real-world school morning rushes without drops."
    },
    {
      title: "HIPAA/FERPA Alignment",
      desc: "We prioritize user privacy and encrypt PII data fields out-of-the-box."
    },
    {
      title: "Interactive Features",
      desc: "Low latency audio/video channels with synchronized whiteboard components."
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
    ctaDesc: "Consult with our principal education tech architect to design virtual classroom tools and student grade databases.",
    ctaBtnText: "Consult EdTech Architect"
  },
  faqs: [
    {
      q: "How do you secure children's data under COPPA?",
      a: "We build our apps to never store unauthorized personal info of kids, implementing age-gates and encrypted cookies that clear automatically."
    },
    {
      q: "What video library do you use for virtual classrooms?",
      a: "We integrate custom WebRTC channels via Twilio or open-source MediaSoup servers depending on budget and participant volume."
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
