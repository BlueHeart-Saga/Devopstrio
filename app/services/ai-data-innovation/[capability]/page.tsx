import React, { use } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getServiceByCategory, getCapability } from "@/data/services";
import { getHeroBgImage } from "@/lib/services-utils";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { CapabilityOverview } from "@/sections/services/capability/CapabilityOverview";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/seo/Schemas";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const CapabilityProblem = dynamic(() => import("@/sections/services/capability/CapabilityProblem").then((mod) => mod.CapabilityProblem));
const CapabilityUseCases = dynamic(() => import("@/sections/services/capability/CapabilityUseCases").then((mod) => mod.CapabilityUseCases));
const CapabilityOutcomes = dynamic(() => import("@/sections/services/capability/CapabilityOutcomes").then((mod) => mod.CapabilityOutcomes));
const CapabilityArchitecture = dynamic(() => import("@/sections/services/capability/CapabilityArchitecture").then((mod) => mod.CapabilityArchitecture));
// const TechnologyStack = dynamic(() => import("@/components/services/TechnologyStack").then((mod) => mod.TechnologyStack));
const CapabilityBenefits = dynamic(() => import("@/sections/services/capability/CapabilityBenefits").then((mod) => mod.CapabilityBenefits));
const CapabilityIndustries = dynamic(() => import("@/sections/services/capability/CapabilityIndustries").then((mod) => mod.CapabilityIndustries));
const FAQ = dynamic(() => import("@/components/services/FAQ").then((mod) => mod.FAQ));
const CTA = dynamic(() => import("@/components/services/CTA").then((mod) => mod.CTA));
const RelatedServices = dynamic(() => import("@/components/services/RelatedServices").then((mod) => mod.RelatedServices));

interface PageProps {
  params: Promise<{ capability: string }>;
}

function getOverviewImage(serviceSlug: string): string {
  const serviceImgMap: Record<string, string> = {
    "ai-data-innovation": "/webp/assets/services/bg-ai.webp",
    "cloud-services": "/webp/assets/services/bg-cloud.webp",
    "devops-automation": "/webp/assets/services/bg-devops.webp",
    "cybersecurity": "/webp/assets/services/bg-cybersecurity.webp",
    "software-development": "/webp/assets/services/bg-software.webp",
    "digital-transformation": "/webp/assets/services/bg-transformation.webp",
    "data-engineering": "/webp/assets/services/bg-data.webp",
    "managed-services": "/webp/assets/services/bg-managed.webp",
    "qa-testing": "/webp/assets/services/bg-testing.webp",
    "it-consulting": "/webp/assets/services/bg-consulting.webp",
  };
  return serviceImgMap[serviceSlug] || "/webp/assets/services/bg-ai.webp";
}

import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";

export async function generateMetadata({ params }: PageProps) {
  const { capability } = await params;
  const service = "ai-data-innovation";
  const data = getCapability(service, capability);
  if (!data) return {};

  const seo = getMetadataFromPath(`/services/${service}/${capability}`);
  const title = seo.title !== data.title ? seo.title : `${data.title} | Devopstrio AI Services`;
  return generatePageMetadata({
    title,
    description: seo.description || data.heroSubtitle,
    path: `/services/${service}/${capability}`,
    keywords: seo.keywords
  });
}

export default function CapabilityPage({ params }: PageProps) {
  const { capability } = use(params);
  const service = "ai-data-innovation";
  const serviceData = getServiceByCategory(service);
  const data = getCapability(service, capability);

  if (!data || !serviceData) {
    notFound();
  }

  const isGenAI = capability === "generative-ai-solutions";
  const isAgents = capability === "ai-agents-automation";
  const isML = capability === "machine-learning-engineering";
  const isMLOps = capability === "mlops-ai-operations" || capability === "mlops-pipeline-engineering";

  const overrides = isGenAI ? {
    overviewHeading: (
      <span>
        Turning Ideas into Intelligent Solutions with <span className="text-rose-500 font-semibold">Gen AI Services UK</span>
      </span>
    ),
    overviewParagraph1: undefined,
    overviewParagraph2: undefined,
    
    deepDiveHeading: (
      <span>
        What is <span className="text-rose-500 font-semibold">Gen AI Services UK</span>?
      </span>
    ),
    deepDiveParagraph1: "Gen AI Service UK helps businesses get more done by putting generative AI to practical use writing, answering questions, working with data, and taking repetitive tasks off your plate. Rather than following a fixed set of rules like older software, it picks up on context and produces new content itself, whether that's text, code, or images.",
    deepDiveParagraph2: undefined,
    
    problemTitle: undefined,
    problemFullTitle: (
      <span>
        Solving the <span className="text-rose-500 font-semibold">Key Challenges of Gen AI Services UK</span>
      </span>
    ),
    problemSubtitle: undefined,
    problemPoints: [
      "You don’t have to replace the software your team uses every day. This makes the move to Gen AI simpler, smoother, and easier for your team to adopt.",
      "Users expect quick answers, even when demand is high. A well-planned setup helps keep performance steady without unnecessary expense.",
      "Launching an AI system is only the beginning. Ongoing monitoring and improvements help keep results useful, reliable, and consistent over time."
    ],
    
    outcomesTitle: (
      <span>
        Enterprise-Grade <span className="text-rose-500 font-semibold">Gen AI Services for UK Organisations</span>
      </span>
    ),
    outcomesDesc: undefined,
    
    useCasesTitle: "How Gen AI Is Transforming the Way Organisations Work",
    useCasesSubtitle: undefined,
    
    architectureTitle: "Scalable, Secure & High-Performance Generative AI Services",
    architectureSubtitle: "Our Generative AI Services architecture combines advanced AI models, cloud-native infrastructure, enterprise-grade security controls, and intelligent automation frameworks to deliver scalable, reliable, and high-performing AI solutions.",
    architectureTopologyTitle: undefined,

    techStackTitle: undefined,
    techStackSubtitle: undefined,
    
    benefitsTitle: (
      <span>
        Key Outcomes &amp; Benefits of <span className="text-rose-500 font-semibold">Gen AI Services UK</span>
      </span>
    ),
    benefitsSubtitle: undefined,
    benefitsItems: [
      "This can save time and help people get the information they need without a long search.",
      "Your information should always be handled with care.",
      "Fast answers can make a big difference to the user experience."
    ],
    faqTitle: "Technical",
    faqHighlight: "Insights"
  } : isAgents ? {
    overviewHeading: (
      <span>
        Smarter operations, powered by <span className="text-rose-500 font-semibold">AI Agents &amp; Automation</span>
      </span>
    ),
    overviewParagraph1: undefined,
    overviewParagraph2: undefined,
    
    deepDiveHeading: (
      <span>
        What is <span className="text-rose-500 font-semibold">AI Agents &amp; Automation</span>?
      </span>
    ),
    deepDiveParagraph1: "Our AI agents UK don't just follow fixed scripts, they read your data, learn your patterns and get on with the work. It's business process automation with AI UK businesses can rely on: systems that study past activity, spot what matters, and carry out day-to-day tasks with barely any hand-holding. As an AI agent development company UK, we build this straight into your existing setup. See what our intelligent automation services UK can do for you.",
    deepDiveParagraph2: undefined,
    
    problemTitle: undefined,
    problemFullTitle: (
      <span>
        Closing The Gap Between <span className="text-rose-500 font-semibold">AI and Real Results</span>
      </span>
    ),
    problemSubtitle: undefined,
    problemPoints: [
      "Disconnected, one-off models that never quite fit into your live business systems.",
      "Slow response times when models run, leading to lag and frustrated customers.",
      "No ongoing checks in place, so accuracy slips and results drift over time."
    ],
    
    outcomesTitle: (
      <span>
        Built for Business <span className="text-rose-500 font-semibold">AI Agents &amp; Automation</span>
      </span>
    ),
    outcomesDesc: undefined,
    
    useCasesTitle: undefined,
    useCasesSubtitle: undefined,
    
    architectureTitle: undefined,
    architectureSubtitle: undefined,
    architectureTopologyTitle: undefined,

    techStackTitle: undefined,
    techStackSubtitle: undefined,
    
    benefitsTitle: (
      <span>
        Real Results &amp; <span className="text-rose-500 font-semibold">What You Actually Get</span>
      </span>
    ),
    benefitsSubtitle: undefined,
    benefitsItems: [
      "92% fewer breakdowns in your day-to-day automated workflows",
      "Fits neatly alongside your existing ERP systems, no rip-and-replace needed",
      "A person checks in before any high-risk data change goes through"
    ],
    faqTitle: "Technical",
    faqHighlight: "clarifications"
  } : isML ? {
    overviewHeading: (
      <span>
        REAL RESULTS FROM <span className="text-rose-500 font-semibold">MACHINE LEARNING ENGINEERING SERVICES UK</span>
      </span>
    ),
    overviewParagraph1: undefined,
    overviewParagraph2: undefined,
    
    deepDiveHeading: (
      <span>
        WHAT ARE <span className="text-rose-500 font-semibold">MACHINE LEARNING ENGINEERING SERVICES UK</span>?
      </span>
    ),
    deepDiveParagraph1: "Machine learning engineering services UK cover the full journey of building systems that learn from data, spot patterns, and get better over time without someone rewriting the code. For UK businesses, this means moving on from rigid, rule-based tools to custom machine learning solutions UK teams can trust. See our company overview to see how we approach it.",
    deepDiveParagraph2: undefined,
    
    problemTitle: undefined,
    problemFullTitle: (
      <span>
        Solving The Gaps in <span className="text-rose-500 font-semibold">Machine Learning Delivery</span>
      </span>
    ),
    problemSubtitle: undefined,
    problemPoints: [
      "Standalone models that don't talk to your core business systems or day-to-day operations.",
      "Slow response times that frustrate users, drive people away, and quietly cost you revenue.",
      "No one keeps an eye on performance, so models quietly lose accuracy as your data changes."
    ],
    
    outcomesTitle: (
      <span>
        Machine Learning Engineering Services <span className="text-rose-500 font-semibold">That Scale With You</span>
      </span>
    ),
    outcomesDesc: undefined,
    
    useCasesTitle: undefined,
    useCasesSubtitle: undefined,
    
    architectureTitle: undefined,
    architectureSubtitle: undefined,
    architectureTopologyTitle: undefined,

    techStackTitle: undefined,
    techStackSubtitle: undefined,
    
    benefitsTitle: (
      <span>
        Real Results From Our <span className="text-rose-500 font-semibold">Machine Learning Engineering Services UK</span>
      </span>
    ),
    benefitsSubtitle: undefined,
    benefitsItems: [
      "Delivery timelines cut by as much as 45%, with faster rollout every step of the way",
      "Full visibility across your systems, with live monitoring and alerts before small issues become big ones",
      "Thoroughly checked infrastructure, built to meet recognised SOC-2 compliance standards"
    ],
    faqTitle: "Technical",
    faqHighlight: "clarifications"
  } : isMLOps ? {
    overviewHeading: (
      <span>
        Smarter operations, powered by <span className="text-rose-500 font-semibold">MLOps &amp; AI Operations</span>
      </span>
    ),
    overviewParagraph1: undefined,
    overviewParagraph2: undefined,
    
    deepDiveHeading: (
      <span>
        What is <span className="text-rose-500 font-semibold">MLOps Services UK</span>?
      </span>
    ),
    deepDiveParagraph1: "Our MLOps services UK take your models out of the lab and put them to work inside your live business systems. It's AI operations management UK that goes beyond one-off automation: systems that learn from past activity, spot the patterns that matter, and keep running smoothly with minimal hands-on input. As a team offering machine learning deployment services UK, we build this straight into your existing setup, backed by ongoing AI model monitoring services UK. See what our AI & data innovation work can do for you.",
    deepDiveParagraph2: undefined,
    
    problemTitle: undefined,
    problemFullTitle: (
      <span>
        Closing: The Gap Between <span className="text-rose-500 font-semibold">Models and Results</span>
      </span>
    ),
    problemSubtitle: undefined,
    problemPoints: [
      "Disconnected, one-off models that never quite fit into your live business systems.",
      "Slow response times when models run, leading to lag and frustrated customers.",
      "No ongoing checks in place, so accuracy slips and results drift over time."
    ],
    
    outcomesTitle: (
      <span>
        Enterprise-Ready <span className="text-rose-500 font-semibold">MLOps Services UK</span>
      </span>
    ),
    outcomesDesc: undefined,
    
    useCasesTitle: undefined,
    useCasesSubtitle: undefined,
    
    architectureTitle: undefined,
    architectureSubtitle: undefined,
    architectureTopologyTitle: undefined,

    techStackTitle: undefined,
    techStackSubtitle: undefined,
    
    benefitsTitle: (
      <span>
        Real Results &amp; <span className="text-rose-500 font-semibold">What You Actually Get</span>
      </span>
    ),
    benefitsSubtitle: undefined,
    benefitsItems: [
      "Faster releases, with cycle times cut by as much as 45%",
      "Full visibility across your systems, with alerts the moment something goes wrong",
      "Infrastructure that's fully audited and aligned with SOC-2 and other key standards"
    ],
    faqTitle: "Technical",
    faqHighlight: "clarifications"
  } : undefined;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: serviceData.title, href: `/services/${service}` },
    { label: isGenAI ? "Gen AI Services UK" : isAgents ? "AI Agents UK" : isML ? "Machine Learning Engineering Services UK" : isMLOps ? "MLOps Services UK" : data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "business-problem", label: "Challenge" },
    { id: "solutions-outcomes", label: "Solutions & Outcomes" },
    { id: "use-cases", label: "Use Cases" },
    { id: "architecture", label: "Architecture" },
    // { id: "tech-stack", label: "Technology" },
    { id: "benefits", label: "Benefits" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" },
    { id: "related-services", label: "Related Services" }
  ];

  const pageTitle = isGenAI ? "Gen AI Services UK" : isAgents ? "AI Agents UK" : isML ? "Machine Learning Engineering Services UK" : isMLOps ? "MLOps Services UK" : data.title;
  const pageSchemaName = isGenAI ? "Gen AI Services UK" : isAgents ? "AI Agents UK" : isML ? "Machine Learning Engineering Services UK" : isMLOps ? "MLOps Services UK" : data.title;
  const pageSchemaDesc = isGenAI 
    ? "Transform business processes with Gen AI services UK. Get generative AI services, consulting and custom AI solutions for business growth." 
    : isAgents
      ? "Build smarter workflows with AI agents UK. Get AI automation services, intelligent automation and custom AI agent development for your business."
      : isML 
        ? "Build smarter systems with machine learning engineering services UK. Get ML consulting, model development and custom machine learning solutions." 
        : isMLOps
          ? "Streamline AI operations with MLOps services UK. Get MLOps consulting, machine learning deployment and AI model monitoring solutions."
          : data.heroSubtitle;

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "Services", item: "/services" },
        { name: serviceData.title, item: `/services/${service}` },
        { name: pageTitle, item: `/services/${service}/${capability}` }
      ]} />
      <ServiceSchema 
        name={pageSchemaName} 
        description={pageSchemaDesc} 
        offers={overrides?.benefitsItems || data.benefits} 
      />
      {data.faqs && <FAQSchema faqs={data.faqs} />}

      {/* 1. Hero Block */}
      <Hero
        badge={serviceData.title}
        title={pageTitle}
        subtitle={data.heroSubtitle}
        breadcrumbs={breadcrumbs}
        bgImage={getHeroBgImage(service, capability)}
      />

      {/* Sticky Navigation Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview Section */}
      <CapabilityOverview 
        title={data.title} 
        subtitle={data.heroSubtitle} 
        image={getOverviewImage(service)}
        overrideHeading={overrides?.overviewHeading}
        overrideParagraph1={overrides?.overviewParagraph1}
        overrideParagraph2={overrides?.overviewParagraph2}
        overrideDeepDiveHeading={overrides?.deepDiveHeading}
        overrideDeepDiveParagraph1={overrides?.deepDiveParagraph1}
        overrideDeepDiveParagraph2={overrides?.deepDiveParagraph2}
      />

      {/* Business Problem Section */}
      <CapabilityProblem 
        serviceSlug={service} 
        capabilityTitle={data.title}
        overrideTitle={overrides?.problemTitle}
        overrideFullTitle={overrides?.problemFullTitle}
        overrideSubtitle={overrides?.problemSubtitle}
        overridePoints={overrides?.problemPoints}
      />

      {/* 4. Solutions, Benefits & Outcomes Section */}
      <CapabilityOutcomes
        serviceSlug={service}
        capabilityTitle={data.title}
        overrideTitle={overrides?.outcomesTitle}
        overrideDesc={overrides?.outcomesDesc}
      />

      {/* 3. Use Cases (Key Deliverables) Section */}
      <CapabilityUseCases 
        serviceSlug={service}
        capabilityTitle={data.title}
        overrideTitle={overrides?.useCasesTitle}
        overrideSubtitle={overrides?.useCasesSubtitle}
      />

      {/* 5. Architecture Section */}
      <CapabilityArchitecture 
        serviceSlug={service}
        capabilityTitle={data.title}
        overrideTitle={overrides?.architectureTitle}
        overrideSubtitle={overrides?.architectureSubtitle}
        overrideTopologyTitle={overrides?.architectureTopologyTitle}
      />

      {/* 6. Technology Stack Section */}
      {/* <div id="tech-stack">
        <TechnologyStack 
          techs={data.techStack} 
          overrideTitle={overrides?.techStackTitle}
          overrideSubtitle={overrides?.techStackSubtitle}
        />
      </div> */}

      {/* 7. Benefits Section */}
      <CapabilityBenefits 
        benefits={overrides?.benefitsItems || data.benefits} 
        overrideTitle={overrides?.benefitsTitle}
        overrideSubtitle={overrides?.benefitsSubtitle}
      />

      {/* 8. Industries Section */}
      <CapabilityIndustries industries={serviceData.industries} />

      {/* 10. Related Services Section */}
      <RelatedServices currentServiceSlug={service} />
      
      {/* 9. FAQ Section */}
      <FAQ faqs={data.faqs} title={overrides?.faqTitle} highlight={overrides?.faqHighlight} />

      {/* 11. CTA Section */}
      <CTA
        ctaTitle="Co-create your capability"
        ctaHighlight="Deployment plan"
        ctaDesc={`Book a detailed technical session with our principal systems engineers to deploy ${data.title.toLowerCase()}.`}
        ctaBtnText="Consult Capability Lead"
        backLink={`/services/${service}`}
      />

    </main>
  );
}


export async function generateStaticParams() {
  const service = "ai-data-innovation";
  const serviceData = getServiceByCategory(service);
  if (!serviceData) return [];
  return serviceData.capabilities.map((cap) => ({
    capability: cap.slug
  }));
}

