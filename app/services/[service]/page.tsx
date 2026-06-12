import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServiceByCategory, servicesData } from "@/data/services";
import { getHeroBgImage } from "@/lib/services-utils";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { CapabilityGrid } from "@/components/services/CapabilityGrid";
import { Challenges } from "@/components/services/Challenges";
import { TimelineProcess } from "@/components/services/TimelineProcess";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { IndustryCards } from "@/components/services/IndustryCards";
import { WhyDevopstrio } from "@/sections/home/WhyDevOpsTrio";
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

  // Defined navbar anchors in matching display sequence
  const subSections = [
    { id: "overview", label: "Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "challenges", label: "Challenges" },
    { id: "process", label: "Process" },
    { id: "technology", label: "Technology" },
    { id: "industries", label: "Industries" },
    { id: "why-devopstrio", label: "Why Us" },
    { id: "metrics", label: "Metrics" },
    { id: "related-services", label: "Related Services" },
    { id: "faq", label: "FAQ" }
  ];

  // Query up to 3 related services (excluding active slug)
  const allServices = Object.values(servicesData);
  const relatedServices = allServices
    .filter((s) => s.slug !== data.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* 1. Hero Block (pass stats as undefined since they have their own section now) */}
      <Hero
        badge={data.badge}
        title={data.title}
        subtitle={data.subtitle}
        stats={undefined}
        breadcrumbs={breadcrumbs}
        bgImage={getHeroBgImage(service)}
      />

      {/* Sticky Navigation Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview Paragraphs */}
      <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-300">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">

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

      {/* 3. Capabilities Grid */}
      <CapabilityGrid serviceSlug={data.slug} capabilities={data.capabilities} />

      {/* 4. Challenges & Solutions Tabbed Panel */}
      <Challenges serviceSlug={data.slug} capabilities={data.capabilities} />

      {/* 5. Delivery Framework (Process) */}
      <TimelineProcess steps={data.deliveryFramework} />

      {/* 6. Technology Stack */}
      <div id="technology">
        <TechnologyStack techs={data.techStack} />
      </div>

      {/* 7. Industries Served */}
      <div id="industries">
        <IndustryCards industries={data.industries} />
      </div>

      {/* 8. Why Devopstrio Showcase */}
      <div id="why-devopstrio">
        <WhyDevopstrio />
      </div>

      {/* 9. Metrics Section */}
      {data.stats && data.stats.length > 0 && (
        <section id="metrics" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <Reveal className="mb-16 text-left">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Performance Metrics
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Quantifiable engineering <span className="font-semibold text-rose-500">efficiency</span>
              </h2>
              <p className="text-zinc-550 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
                Our deployments are measured against rigid operational SLAs and performance benchmarks.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((stat, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 relative overflow-hidden group text-left">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="block text-4xl font-extrabold font-mono text-rose-500 mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                      {stat.value}
                    </span>
                    <span className="block text-[10px] font-mono tracking-wider text-zinc-550 uppercase">
                      {stat.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Related Services Section */}
      {relatedServices.length > 0 && (
        <section id="related-services" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
          <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <Reveal className="mb-16 text-left">
              <div className="flex items-center gap-2 mb-4">

                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                  Related Practices
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Explore adjacent <span className="font-semibold text-rose-500">capabilities</span>
              </h2>
              <p className="text-zinc-550 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
                Complement your technological objectives by integrating partner capabilities across our domain index.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service, idx) => (
                <Reveal key={service.slug} delay={idx * 0.05} className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex flex-col justify-between h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden text-left"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div>
                      <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-3">
                        {service.badge}
                      </span>
                      <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-rose-500 transition-colors mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-8 group-hover:text-zinc-350 transition-colors">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-zinc-900/60 mt-auto flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                        Explore practice
                      </span>
                      <span className="w-6 h-6 rounded-full bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 group-hover:bg-rose-950/20 group-hover:border-rose-500/20 transition-all duration-300">
                        <ArrowUpRight size={11} className="stroke-[2.5]" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. FAQ Accordions */}
      <FAQ faqs={data.faqs} />

      {/* 12. CTA Engage */}
      <CTA
        ctaTitle={data.ctaTitle}
        ctaHighlight={data.ctaHighlight}
        ctaDesc={data.ctaDesc}
        ctaBtnText={data.ctaBtnText}
      />
    </main>
  );
}
