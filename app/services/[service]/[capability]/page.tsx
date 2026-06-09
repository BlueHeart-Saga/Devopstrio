import React from "react";
import { notFound } from "next/navigation";
import { getServiceByCategory, getCapability } from "@/data/services";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { BenefitCards } from "@/components/services/BenefitCards";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { TimelineProcess } from "@/components/services/TimelineProcess";
import { CaseStudies } from "@/components/services/CaseStudies";
import { FAQ } from "@/components/services/FAQ";
import { CTA } from "@/components/services/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ service: string; capability: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { service, capability } = await params;
  const data = getCapability(service, capability);
  if (!data) return {};

  return {
    title: `${data.title} | Devopstrio`,
    description: data.heroSubtitle,
    openGraph: {
      title: `${data.title} | Devopstrio`,
      description: data.heroSubtitle
    }
  };
}

export default async function CapabilityPage({ params }: PageProps) {
  const { service, capability } = await params;
  const serviceData = getServiceByCategory(service);
  const data = getCapability(service, capability);

  if (!data || !serviceData) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: serviceData.title, href: `/services/${service}` },
    { label: data.title }
  ];

  const subSections = [
    { id: "challenge", label: "Challenge & Solution" },
    { id: "features", label: "Key Features" },
    { id: "benefits", label: "Benefits" },
    { id: "process", label: "Approach" },
    { id: "tech-stack", label: "Technology" },
    { id: "case-studies", label: "Case Study" },
    { id: "faq", label: "FAQ" },
    { id: "engage", label: "Engage" }
  ];

  // Map individual case study info to array for CaseStudies component
  const caseStudiesArray = [
    {
      title: data.caseStudy.title,
      desc: data.caseStudy.desc,
      metrics: data.caseStudy.metrics,
      highlights: data.caseStudy.highlights
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* 1. Hero */}
      <Hero
        badge={serviceData.title}
        title={data.title}
        subtitle={data.heroSubtitle}
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Subsections Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 3. Business Challenge & Solution */}
      <section id="challenge" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-300">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          {/* Challenge Box */}
          <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.015),transparent_70%)] pointer-events-none" />
            <Reveal>
              <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3">
                The Business Challenge
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                {data.challenge}
              </p>
            </Reveal>
          </div>

          {/* Solution Box */}
          <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.015),transparent_70%)] pointer-events-none" />
            <Reveal>
              <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase block mb-3">
                Our Solution Approach
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-zinc-450 text-xs md:text-sm font-light leading-relaxed">
                {data.solution}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Key Features */}
      <section id="features" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Features
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Technical capability <span className="font-semibold text-rose-500">deliverables</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features.map((feat, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300">
                  <div>
                    <div className="flex items-center gap-2.5 mb-4 text-xs font-semibold text-zinc-200">
                      <CheckCircle2 size={15} className="text-rose-500 flex-shrink-0" />
                      <span>Deliverable {(idx + 1).toString().padStart(2, "0")}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                      {feat}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits & Outcomes */}
      <BenefitCards title="Capability outcomes" benefits={data.benefits} />

      {/* 6. Delivery Approach */}
      <TimelineProcess steps={data.deliveryApproach} />

      {/* 7. Technology Ecosystem */}
      <TechnologyStack techs={data.techStack} />

      {/* 8. Case Study */}
      <CaseStudies caseStudies={caseStudiesArray} />

      {/* 9. FAQ */}
      <FAQ faqs={data.faqs} />

      {/* 10. CTA */}
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
