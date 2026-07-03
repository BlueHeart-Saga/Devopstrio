
import React from "react";
import { notFound } from "next/navigation";
import { getEcosystemSubpage } from "@/data/ecosystem";
import { Hero } from "@/components/ecosystem/Hero";
import { FAQ } from "@/components/ecosystem/FAQ";
import { CTA } from "@/components/ecosystem/CTA";


import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";

export async function generateMetadata({ params }: SubpageProps): Promise<Metadata> {
  const { subpage } = await params;
  const domain = "partnerships";
  const data = getEcosystemSubpage(domain, subpage);
  if (!data) return {};

  return generatePageMetadata({
    title: `${data.title} | Devopstrio`,
    description: data.heroSubtitle,
    path: `/ecosystem/${domain}/${subpage}`
  });
}

interface SubpageProps {
  params: Promise<{ subpage: string }>;
}

export default async function EcosystemSubpage({ params }: SubpageProps) {
  const { subpage } = await params;
  const domain = "partnerships";
  const data = getEcosystemSubpage(domain, subpage);

  if (!data) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: domain.replace(/-/g, " "), href: `/ecosystem/${domain}` },
    { label: data.title }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <Hero
        badge="Ecosystem Detail"
        title={data.title}
        subtitle={data.heroSubtitle}
        breadcrumbs={breadcrumbs}
      />

      {/* Challenge & Solution Section */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.03),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              THE CHALLENGE
            </span>
            <p className="text-zinc-200 text-base md:text-lg font-medium leading-relaxed">
              {data.challenge}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              OUR SOLUTION
            </span>
            <p className="text-zinc-200 text-base md:text-lg font-medium leading-relaxed">
              {data.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="w-full py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              CORE CAPABILITIES
            </span>
            <ul className="flex flex-col gap-4">
              {data.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-350 text-base font-semibold">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              ENTERPRISE BENEFITS
            </span>
            <ul className="flex flex-col gap-4">
              {data.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-350 text-base font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
            Powered by Modern Tools
          </h2>
        </div>
        <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.techStack.map((tech, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-900/80 rounded-xl p-6">
              <h4 className="text-base font-bold text-white mb-2">{tech.name}</h4>
              <p className="text-sm text-zinc-350 font-medium leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ faqs={data.faqs} />
      <CTA
        ctaTitle="Ready to Accelerate?"
        ctaHighlight="Let's build together."
        ctaDesc="Connect with our global engineering teams to start your integration journey."
        ctaBtnText="Contact Us"
      />
    </main>
  );
}


import { ecosystemSubpages } from "@/data/ecosystem";

export async function generateStaticParams() {
  const domain = "partnerships";
  const subpages = ecosystemSubpages[domain] || {};
  return Object.keys(subpages).map((slug) => ({
    subpage: slug
  }));
}

