import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Server, ShieldCheck, Database, BarChart3, AlertCircle } from "lucide-react";
import { getServiceByCategory, getCapability } from "@/data/services";
import { getHeroBgImage } from "@/lib/services-utils";
import { Hero } from "@/components/services/Hero";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { TechnologyStack } from "@/components/services/TechnologyStack";
import { FAQ } from "@/components/services/FAQ";
import { CTA } from "@/components/services/CTA";
import { Reveal } from "@/components/ui/Reveal";

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
    { id: "overview", label: "Overview" },
    { id: "use-cases", label: "Use Cases" },
    { id: "solutions-outcomes", label: "Solutions & Outcomes" },
    { id: "architecture", label: "Architecture" },
    { id: "tech-stack", label: "Technology" },
    { id: "benefits", label: "Benefits" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">

      {/* 1. Hero Block */}
      <Hero
        badge={serviceData.title}
        title={data.title}
        subtitle={data.heroSubtitle}
        breadcrumbs={breadcrumbs}
        bgImage={getHeroBgImage(service, capability)}
      />

      {/* Sticky Navigation Sub-Navbar */}
      <SectionNavbar sections={subSections} />

      {/* 2. Overview Section */}
      <section id="overview" className="w-full py-24 bg-black border-b border-zinc-900/60 text-zinc-350">
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
                Accelerating engineering outcomes for <span className="font-semibold text-rose-500">{data.title}</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6 text-zinc-400 text-sm font-light leading-relaxed">
                <p className="border-l-2 border-zinc-800 pl-4">
                  {data.heroSubtitle}
                </p>
                <p className="border-l-2 border-zinc-800 pl-4 text-xs text-zinc-450">
                  We deploy automated environments, rigorous telemetry monitoring, and secure VPC routing parameters to align with industry regulatory requirements.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Use Cases (Key Deliverables) Section */}
      <section id="use-cases" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Use Cases & Deliverables
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Target engineering <span className="font-semibold text-rose-500">deliverables</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.features.map((feat, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-3xl p-8 flex flex-col justify-between hover:border-rose-500/30 hover:bg-zinc-900/5 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div>
                    <div className="flex items-center gap-2.5 mb-6 text-[10px] font-mono tracking-wider text-zinc-550 uppercase">
                      <span className="w-2 h-2 rounded-full bg-rose-600" />
                      <span>Use Case {(idx + 1).toString().padStart(2, "0")}</span>
                    </div>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                      {feat}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions, Benefits & Outcomes Section */}
      <section id="solutions-outcomes" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Outcomes Map
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Solving complex <span className="font-semibold text-rose-500">infrastructure issues</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Solutions Approach Card */}
            <Reveal className="h-full">
              <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-zinc-850 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] pointer-events-none" />
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                    <Server size={18} />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                    OUR IMPLEMENTATION
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-4">
                  The Engineering Solution
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {data.solution}
                </p>
                <div className="border-t border-zinc-900/60 pt-6">
                  <h4 className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-3">
                    DELIVERY ROADMAP
                  </h4>
                  <ul className="space-y-2.5">
                    {data.deliveryApproach.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-450 font-light">
                        <span className="text-rose-500 font-semibold font-mono mt-0.5">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Benefits & Outcomes Card */}
            <Reveal delay={0.05} className="h-full">
              <div className="h-full bg-gradient-to-b from-zinc-950 to-black border border-rose-950/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-rose-900/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] pointer-events-none" />
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-rose-500/80 uppercase">
                    EXPECTED ADVANTAGES
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-4">
                  Strategic Capabilities
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {data.challenge}
                </p>
                <div className="border-t border-zinc-900/60 pt-6">
                  <h4 className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-3">
                    PROJECT OUTCOMES
                  </h4>
                  <ul className="space-y-2.5">
                    {data.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[11px] text-zinc-350 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70 mt-1.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 5. Architecture Section */}
      <section id="architecture" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Architecture Blueprint
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              System request <span className="font-semibold text-rose-500">dataflow architecture</span>
            </h2>
            <p className="text-zinc-450 text-xs md:text-sm font-light leading-relaxed mt-2 max-w-xl">
              A detailed trace flow mapping request pipelines from edge routing to secure database states.
            </p>
          </Reveal>

          {/* Interactive Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

            {/* Flow Line Connector */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-rose-500/5 via-rose-500/20 to-rose-500/5 hidden md:block z-0 -translate-y-6" />

            {/* Block 1 */}
            <Reveal className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  STEP 01
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Server size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Request Ingestion
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Web, mobile, or API calls hit secure AWS ALB or cloud-native routing gateways.
                </p>
              </div>
            </Reveal>

            {/* Block 2 */}
            <Reveal delay={0.05} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  STEP 02
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Cognitive Compute
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Zero-trust validation layers analyze credentials before routing to microservice host containers.
                </p>
              </div>
            </Reveal>

            {/* Block 3 */}
            <Reveal delay={0.1} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  STEP 03
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <Database size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Database & Caching
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Reads and writes flow to low-latency PostgreSQL indexes or Pinescone vector stores.
                </p>
              </div>
            </Reveal>

            {/* Block 4 */}
            <Reveal delay={0.15} className="h-full z-10">
              <div className="h-full bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/20 transition-all duration-300">
                <span className="block text-[10px] font-mono tracking-widest text-zinc-550 mb-4 uppercase">
                  STEP 04
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-105 transition-transform">
                  <BarChart3 size={14} />
                </div>
                <h4 className="text-xs font-semibold text-zinc-200 mb-2">
                  Active Telemetry
                </h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">
                  Distributed traces track transactions and log performance latency to Prometheus dashboards.
                </p>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 6. Technology Stack Section */}
      <div id="tech-stack">
        <TechnologyStack techs={data.techStack} />
      </div>

      {/* 7. Benefits Section */}
      <section id="benefits" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Advantage
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Key outcomes and <span className="font-semibold text-rose-500">technical benefits</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.benefits.map((benefit, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex items-start gap-4 p-4 border border-zinc-900 bg-zinc-950/20 rounded-2xl group hover:border-rose-500/20 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-rose-950/15 border border-rose-900/20 flex items-center justify-center text-rose-500 mt-1 flex-shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-200 mb-1 group-hover:text-white transition-colors">
                      Capability Milestone {(idx + 1).toString().padStart(2, "0")}
                    </h4>
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                      {benefit}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries Section */}
      <section id="industries" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">

          <Reveal className="mb-16">
            <div className="flex items-center gap-2 mb-4">

              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Sectors Served
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
              Target sector <span className="font-semibold text-rose-500">applications</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.industries.map((item, idx) => {
              const parts = item.split(":");
              const title = parts[0] || "Sector Specialization";
              const desc = parts.slice(1).join(":") || "";
              return (
                <Reveal key={idx} delay={idx * 0.05} className="h-full">
                  <div className="h-full bg-zinc-950/20 border border-zinc-900/80 rounded-3xl p-8 flex flex-col justify-between hover:border-rose-500/30 hover:bg-zinc-900/10 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-200 mb-3 group-hover:text-white transition-colors">
                        {title}
                      </h3>
                      {desc && (
                        <p className="text-[11px] text-zinc-450 leading-relaxed font-light group-hover:text-zinc-350 transition-colors">
                          {desc.trim()}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. FAQ Section */}
      <FAQ faqs={data.faqs} />

      {/* 10. CTA Section */}
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
