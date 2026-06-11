import React from "react";
import { notFound } from "next/navigation";
import { getServiceByCategory } from "@/data/services";
import { Hero } from "@/components/services/Hero";
import { getHeroBgImage } from "@/lib/services-utils";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { CapabilityGrid } from "@/components/services/CapabilityGrid";
import { BenefitCards } from "@/components/services/BenefitCards";
import { IndustryCards } from "@/components/services/IndustryCards";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { TimelineProcess } from "@/components/services/TimelineProcess";
import { CaseStudies } from "@/components/services/CaseStudies";
import { FAQ } from "@/components/services/FAQ";
import { CTA } from "@/components/services/CTA";
import { Reveal } from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { service } = await params;
  const data = getServiceByCategory(service);
  if (!data) return {};

  return {
    title: `${data.title} | Devopstrio`,
    description: data.subtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.subtitle
    }
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { service } = await params;
  const data = getServiceByCategory(service);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: data.title }
  ];

  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "outcomes", label: "Outcomes" },
    { id: "industries", label: "Industries" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "process", label: "Process" },
    { id: "case-studies", label: "Case Studies" },
    { id: "faq", label: "FAQ" },
    { id: "engage", label: "Engage" }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 1. Hero Block */}
      <Hero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        stats={data.stats}
        breadcrumbs={breadcrumbs}
        bgImage={getHeroBgImage(service)}
      />

      {/* 2. Sticky Subsections Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 3. Overview Paragraphs */}
      <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-300">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Overview
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                {data.overviewHeading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6 text-zinc-400 text-sm font-light leading-relaxed">
                <p className="border-l-2 border-zinc-800 pl-4">{data.overviewDesc1}</p>
                <p className="border-l-2 border-zinc-800 pl-4">{data.overviewDesc2}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Capabilities Grid */}
      <CapabilityGrid serviceSlug={data.slug} capabilities={data.capabilities} />

      {/* 5. Business Outcomes */}
      <BenefitCards benefits={data.outcomes} />

      {/* 6. Industries Served */}
      <IndustryCards industries={data.industries} />

      {/* 7. Technology Stack */}
      <TechnologyStack techs={data.techStack} />

      {/* 8. Delivery Framework */}
      <TimelineProcess steps={data.deliveryFramework} />

      {/* 9. Case Studies */}
      <CaseStudies caseStudies={data.caseStudies} />

      {/* 10. FAQ Accordions */}
      <FAQ faqs={data.faqs} />

      {/* 11. CTA Engage */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
