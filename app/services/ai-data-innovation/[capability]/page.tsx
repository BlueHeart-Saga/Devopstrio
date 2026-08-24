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
const TechnologyStack = dynamic(() => import("@/components/services/TechnologyStack").then((mod) => mod.TechnologyStack));
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
    "ai-data-innovation": "/assets/services/bg-ai.png",
    "cloud-services": "/assets/services/bg-cloud.png",
    "devops-automation": "/assets/services/bg-devops.png",
    "cybersecurity": "/assets/services/bg-cybersecurity.png",
    "software-development": "/assets/services/bg-software.png",
    "digital-transformation": "/assets/services/bg-transformation.png",
    "data-engineering": "/assets/services/bg-data.png",
    "managed-services": "/assets/services/bg-managed.png",
    "qa-testing": "/assets/services/bg-testing.png",
    "it-consulting": "/assets/services/bg-consulting.png",
  };
  return serviceImgMap[serviceSlug] || "/assets/services/bg-ai.png";
}

export async function generateMetadata({ params }: PageProps) {
  const { capability } = await params;
  const service = "ai-data-innovation";
  const data = getCapability(service, capability);
  if (!data) return {};

  if (capability === "generative-ai-solutions") {
    return {
      title: "Generative AI Services UK | Enterprise AI Solutions",
      description: "Build, deploy, and optimize enterprise Generative AI Services in the UK with secure, scalable solutions tailored to your business goals.",
      openGraph: {
        title: "Generative AI Services UK | Enterprise AI Solutions",
        description: "Build, deploy, and optimize enterprise Generative AI Services in the UK with secure, scalable solutions tailored to your business goals."
      },
      alternates: {
        canonical: `/services/${service}/${capability}`
      }
    };
  }

  if (capability === "machine-learning-engineering") {
    return {
      title: "Machine Learning Development Services in UK | Expert ML Company",
      description: "Expert Machine Learning Development Services in UK for startups and enterprises. Build custom AI models, predictive analytics, automation, and scalable ML solutions.",
      openGraph: {
        title: "Machine Learning Development Services in UK | Expert ML Company",
        description: "Expert Machine Learning Development Services in UK for startups and enterprises. Build custom AI models, predictive analytics, automation, and scalable ML solutions."
      },
      alternates: {
        canonical: `/services/${service}/${capability}`
      }
    };
  }

  return {
    title: `${data.title} | Devopstrio`,
    description: data.heroSubtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.heroSubtitle
    },
    alternates: {
      canonical: `/services/${service}/${capability}`
    }
  };
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
  const isML = capability === "machine-learning-engineering";

  const overrides = isGenAI ? {
    overviewHeading: "ACCELERATING BUSINESS GROWTH WITH GENERATIVE AI SERVICES IN UK",
    overviewParagraph1: "UK enterprises are redefining how they operate and we're the team making it happen. From intelligent document processing to conversational AI platforms, we build generative AI systems that don't just automate tasks but genuinely transform how your business thinks and acts.",
    overviewParagraph2: (
      <span>
        We engineer production-ready LLM pipelines, private fine-tuning environments, and multi-modal AI interfaces all built to meet UK data residency and compliance standards. Learn more about our{" "}
        <Link href="/services/data-engineering" className="text-rose-500 hover:underline font-bold">
          data engineering pipelines
        </Link>{" "}
        that clean training datasets.
      </span>
    ),
    
    deepDiveHeading: "WHAT IS GENERATIVE AI SERVICES IN UK?",
    deepDiveParagraph1: (
      <span>
        Generative AI is no longer a future concept it's the competitive edge UK businesses are adopting right now. Unlike rule-based automation that breaks the moment conditions change, generative AI systems understand intent, adapt to context, and produce meaningful outputs across text, code, images, and structured data. Read our{" "}
        <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
          company overview
        </Link>{" "}
        to learn about our secure infrastructure models.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        For UK enterprises, this means something very specific: the ability to unlock value from internal knowledge, customer interactions, and operational data without sending sensitive information outside your control. Deploy these secure pipelines using our{" "}
        <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">
          high-performance cloud consulting
        </Link>{" "}
        architectures.
      </span>
    ),
    
    problemTitle: "the Generative AI Services Production Gap",
    problemSubtitle: "Why 85% of enterprise Generative AI Services initiatives fail to scale beyond pilot projects and deliver measurable business impact.",
    problemPoints: [
      "Fragmented AI deployments that operate in isolation, preventing seamless integration with core business applications and workflows.",
      "High inference latency and infrastructure inefficiencies that impact user experience, reduce productivity, and increase operational costs.",
      "Lack of continuous monitoring, evaluation, and optimization, resulting in declining model accuracy, governance challenges, and reduced ROI over time."
    ],
    
    outcomesTitle: "Enterprise-Ready Generative AI Services",
    outcomesDesc: "We design, develop, deploy, and optimize scalable Generative AI Services that streamline business operations, enhance productivity, automate complex workflows, and deliver measurable business outcomes across the enterprise.",
    
    useCasesTitle: "How Organizations Use Generative AI Services",
    useCasesSubtitle: "Discover how leading enterprises leverage Generative AI Services to automate workflows, enhance decision-making, improve customer experiences, and unlock new opportunities for growth across critical business functions.",
    
    architectureTitle: "Scalable, Secure & High-Performance Generative AI Services",
    architectureSubtitle: "Our Generative AI Services architecture combines advanced AI models, cloud-native infrastructure, enterprise-grade security controls, and intelligent automation frameworks to deliver scalable, reliable, and high-performing AI solutions.",
    architectureTopologyTitle: undefined,

    techStackTitle: undefined,
    techStackSubtitle: undefined,
    
    benefitsTitle: "Key Outcomes & Benefits of Generative AI Services",
    benefitsSubtitle: "Our Generative AI Services are designed to deliver measurable business outcomes through scalable infrastructure, enterprise-grade security, continuous optimization, and operational efficiency. Every deployment is focused on maximizing performance, reliability, and long-term ROI.",
    benefitsItems: undefined
  } : isML ? {
    overviewHeading: "TRUSTED RESULTS THROUGH MACHINE LEARNING DEVELOPMENT SERVICES IN UK",
    overviewParagraph1: "Helping UK businesses build, refine, and scale intelligent models that solve real problems.",
    overviewParagraph2: (
      <span>
        We provide structured environments, precise performance monitoring, and secure cloud infrastructure to deliver machine learning development services in UK that meet both technical demands and regulatory standards. Work with our{" "}
        <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">
          DevOps integration teams
        </Link>{" "}
        for GitOps deployment workflows.
      </span>
    ),
    
    deepDiveHeading: "WHAT ARE MACHINE LEARNING DEVELOPMENT SERVICES IN UK?",
    deepDiveParagraph1: (
      <span>
        Machine learning development services in UK refer to the complete process of building data-driven systems that allow software to learn, adapt, and improve over time without being manually reprogrammed. For UK businesses, this means moving beyond rulebased tools. See our{" "}
        <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">
          company overview
        </Link>{" "}
        to review our approach.
      </span>
    ),
    deepDiveParagraph2: (
      <span>
        Using clean training data, custom model architectures, and low-latency deployment pipelines, our machine learning development services in UK allow your business to anticipate customer needs. Coordinate with our{" "}
        <Link href="/services/software-development" className="text-rose-500 hover:underline font-bold">
          custom software development squads
        </Link>{" "}
        to design advanced frontends and interfaces.
      </span>
    ),
    
    problemTitle: "Closing The Machine Learning Delivery Gap",
    problemSubtitle: "Why 85% of UK enterprise machine learning development services never move past controlled pilot stages into live business systems.",
    problemPoints: [
      "Siloed, disconnected models that cannot communicate with core business operations or live transactional workflows.",
      "Slow inference response times that degrade user experience, increase abandonment, and quietly erode revenue.",
      "No ongoing performance monitoring in place, leaving models to deteriorate silently as real-world data shifts over time"
    ],
    
    outcomesTitle: "Scalable Machine Learning Development Services In UK",
    outcomesDesc: "We plan, engineer, launch, and refine tailored machine learning development services in UK that modernise business processes, elevate workforce efficiency, and generate consistent, measurable commercial outcomes.",
    
    useCasesTitle: "Where Machine Learning Development Services In UK Deliver Results",
    useCasesSubtitle: "See how UK industry leaders are applying and integrating this capability across key sectors to streamline workflows, secure business-critical systems, and unlock sustainable long-term value.",
    
    architectureTitle: "Engineered for Reliability, Intelligent Performance",
    architectureSubtitle: "Our architecture integrates leading cloud infrastructure, machine learning development services in UK, robust governance controls, and intelligent automation layers to produce consistent, production-ready enterprise outcomes.",
    architectureTopologyTitle: "Engineered for Reliability, Compliance & Speed",

    techStackTitle: "Supported Technologies & Frameworks",
    techStackSubtitle: "Our machine learning development services in UK connect seamlessly with enterprisegrade platforms, specialist libraries, and distributed service architectures built to sustain high data throughput and real-time processing demands.",
    
    benefitsTitle: "Core Metrics & Measurable Technical Gains",
    benefitsSubtitle: "We define success through performance reliability, data security, and operational cost reduction. Through intelligent workflows, sustained model refinement, and full ISO27001 adherence, our machine learning development services in UK convert directly into proven, quantifiable business results.",
    benefitsItems: [
      "Up to 45% reduction in delivery timelines and overall solution deployment efficiency",
      "End-to-end system visibility with live performance monitoring and automated threshold alerts",
      "Thoroughly verified infrastructure governance aligned to recognised SOC-2 compliance standards"
    ]
  } : undefined;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: serviceData.title, href: `/services/${service}` },
    { label: isGenAI ? "Generative AI Services" : isML ? "Machine Learning Development Services" : data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "business-problem", label: "Challenge" },
    { id: "solutions-outcomes", label: "Solutions & Outcomes" },
    { id: "use-cases", label: "Use Cases" },
    { id: "architecture", label: "Architecture" },
    { id: "tech-stack", label: "Technology" },
    { id: "benefits", label: "Benefits" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" },
    { id: "related-services", label: "Related Services" }
  ];

  const pageTitle = isGenAI ? "Generative AI Services" : isML ? "Machine Learning Development Services" : data.title;
  const pageSchemaName = isGenAI ? "Generative AI Services UK" : isML ? "Machine Learning Development Services in UK" : data.title;
  const pageSchemaDesc = isGenAI 
    ? "Build, deploy, and optimize enterprise Generative AI Services in the UK with secure, scalable solutions tailored to your business goals." 
    : isML 
      ? "Expert Machine Learning Development Services in UK for startups and enterprises. Build custom AI models, predictive analytics, automation, and scalable ML solutions." 
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
      <div id="tech-stack">
        <TechnologyStack 
          techs={data.techStack} 
          overrideTitle={overrides?.techStackTitle}
          overrideSubtitle={overrides?.techStackSubtitle}
        />
      </div>

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
      <FAQ faqs={data.faqs} />

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

