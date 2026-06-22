
import React from "react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { Testimonials } from "@/sections/home/Testimonials";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { Reveal } from "@/components/ui/Reveal";



export const metadata: Metadata = {
  title: "Client Testimonials & Success",
  description: "Read authentic feedback and success stories from our enterprise engineering clients.",
  alternates: {
    canonical: "/about/testimonials"
  }
};
export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Us", item: "/about/company-overview" },
        { name: "Client Testimonials & Success", item: "/about/testimonials" }
      ]} />
      {/* Page Header */}
      <section className="pt-20 pb-4 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Client Success Reviews</span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white leading-tight">
              Testimonials & <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Success</span>
            </h1>
            <p className="text-zinc-400 font-medium max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Read feedback from CTOs, CISOs, and VPs of Engineering at leading enterprises who scale with Devopstrio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <div className="bg-black">
        <Testimonials />
        
        <AboutCTA />
      </div>
    </main>
  );
}
