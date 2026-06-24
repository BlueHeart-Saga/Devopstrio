import React from "react";
import { Metadata } from "next";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactForm } from "@/sections/contact/ContactForm";
import { OurLocations } from "@/sections/contact/OurLocations";
import { GlobalPresence } from "@/sections/contact/GlobalPresence";
import { WhyContactUs } from "@/sections/contact/WhyContactUs";
import { TrustSignal } from "@/sections/contact/TrustSignal";
import { FAQ } from "@/sections/contact/FAQ";
import { ContactCTA } from "@/sections/contact/ContactCTA";
import { TalkToExpert } from "@/sections/contact/TalkToExpert";
import { Reveal } from "@/components/ui/Reveal";
import { BreadcrumbSchema } from "@/components/seo/Schemas";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

const contactSections = [
  { id: "form", label: "Start a Conversation" },
  { id: "compliance", label: "Security & Trust" },
  { id: "presence", label: "Global Presence" },
  { id: "experts", label: "Talk to Expert" },
  { id: "why-us", label: "Why Contact Us" },
  { id: "locations", label: "Locations" },
  { id: "faq", label: "FAQ" }
];

export const metadata: Metadata = {
  title: "Contact Our Engineering Teams",
  description: "Connect with Devopstrio's systems architects and project delivery managers. Speak to our specialists about cloud migrations, AI model setups, or compliance.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans">
      <BreadcrumbSchema items={breadcrumbs} />

      
      {/* Cinematic Hero Title Header */}
      {/* <section className="pt-16 pb-4 md:pb-8 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4 text-white">
            Contact <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Devopstrio</span>
          </h1>
          <p className="text-zinc-400 font-medium max-w-xl mx-auto">
            Connect directly with our senior engineering architects and global delivery leads.
          </p>
        </Reveal>
      </section> */}

      {/* Structured Contact Sections with High-Level Coded SVG Wave Lines */}
      <div className="bg-black relative">
        <div className="relative z-10 bg-black">
          <ContactHero />
          <SvgWaveLine variant="smooth" />
        </div>
        
        <SectionNavbar sections={contactSections} />
        <div id="form" className="relative z-10 bg-black">
          <ContactForm />
        </div>
        
        {/* Security & Compliance Section Header */}
        <div id="compliance" className="relative z-20 bg-black">
          <div className="text-center pt-12 pb-3 max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500 border border-rose-500/30 rounded-none bg-black/40 mb-3">
                Security & Trust
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Enterprise Compliance & Engineering Standards
              </h2>
            </Reveal>
          </div>
          <TrustSignal />
          <SvgWaveLine variant="liquid" />
        </div>

        {/* Layer 1: Global Presence Sticky Window */}
        <div id="presence" className="sticky top-0 z-0 w-full min-h-screen bg-black overflow-hidden flex items-center">
          <GlobalPresence />
        </div>
        
        {/* Layer 2: Talk To Expert Sticky Window (slides over Layer 1) */}
        <div id="experts" className="sticky top-0 z-10 w-full h-[95vh] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,1)]">
          <TalkToExpert />
        </div>

        {/* Final Cover Wrapper: Everything from here down slides over the sticky layers and has a solid black background */}
        <div className="relative z-20 bg-black pt-8 shadow-[0_-20px_50px_rgba(0,0,0,1)]">
          <div id="why-us">
            <WhyContactUs />
          </div>
          
          <div id="locations">
            <OurLocations />
          </div>
          
          <SvgWaveLine variant="liquid" />
          
          <div id="faq">
            <FAQ />
          </div>
          
          <SvgWaveLine variant="smooth" />
          
          <ContactCTA />
        </div>
      </div>
    </main>
  );
}

// Pure SVG Code Wave Divider components (High-Level Designs matching the About Page)
function SvgWaveLine({ variant }: { variant: "smooth" | "dashed" | "particles" | "grid" | "liquid" }) {
  const GradientDef = () => (
    <defs>
      <linearGradient id="wave-grad-contact" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.2" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.8" />
        <stop offset="0.8" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wave-glow-contact" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.1" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      {/* Grid specific fading gradient */}
      <linearGradient id="grid-fade-contact" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
         <stop stopColor="#e11d48" stopOpacity="0.2" />
         <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
    </defs>
  );

  return (
    <div className="w-full h-16 md:h-24 relative bg-transparent flex items-center justify-center overflow-hidden -my-8 md:-my-12 z-10 pointer-events-none">
      <svg 
        viewBox="0 0 1440 96" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <GradientDef />

        {/* 1. Smooth Wave */}
        {variant === "smooth" && (
          <>
            <path d="M0 48C360 80 1080 16 1440 48" stroke="url(#wave-grad-contact)" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 48C360 80 1080 16 1440 48" fill="url(#wave-glow-contact)" opacity="0.3" transform="translate(0, 4)" />
          </>
        )}

        {/* 2. Dashed Neon Wave */}
        {variant === "dashed" && (
          <path d="M0 64C480 -32 960 -32 1440 64" stroke="url(#wave-grad-contact)" strokeWidth="2.5" strokeDasharray="6 8" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
        )}

        {/* 3. Particle Wave (Sine wave with scattered dots) */}
        {variant === "particles" && (
          <>
            <path d="M0 48C240 96 480 0 720 48C960 96 1200 0 1440 48" stroke="url(#wave-grad-contact)" strokeWidth="0.8" strokeDasharray="1 10" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]" />
            <path d="M0 40C240 88 480 -8 720 40C960 88 1200 -8 1440 40" stroke="url(#wave-grad-contact)" strokeWidth="2" strokeDasharray="2 15" strokeLinecap="round" opacity="0.4" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
            <path d="M0 56C240 104 480 8 720 56C960 104 1200 8 1440 56" stroke="url(#wave-grad-contact)" strokeWidth="1" strokeDasharray="1 20" strokeLinecap="round" opacity="0.2" />
          </>
        )}

        {/* 4. Grid Wave */}
        {variant === "grid" && (
          <>
            {/* Vertical grid lines dropping down */}
            <g opacity="0.4">
              {[...Array(40)].map((_, i) => {
                const y1 = 48 + Math.sin((i / 40) * Math.PI) * 24;
                return (
                  <line key={i} x1={i * 36.9} y1={y1} x2={i * 36.9} y2="120" stroke="url(#grid-fade-contact)" strokeWidth="1" />
                );
              })}
            </g>
            {/* Base line */}
            <path d="M0 48C480 96 960 96 1440 48" stroke="url(#wave-grad-contact)" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.3)]" />
          </>
        )}

        {/* 5. Liquid Wave (Overlapping fluid strokes) */}
        {variant === "liquid" && (
          <>
            <path d="M0 48C360 8 1080 88 1440 48" stroke="url(#wave-grad-contact)" strokeWidth="3" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 52C400 12 1040 92 1440 52" stroke="url(#wave-grad-contact)" strokeWidth="2" opacity="0.4" />
            <path d="M0 44C320 4 1120 84 1440 44" stroke="url(#wave-grad-contact)" strokeWidth="1" opacity="0.2" />
            <path d="M0 60C450 20 990 100 1440 60" stroke="url(#wave-grad-contact)" strokeWidth="0.5" opacity="0.1" />
          </>
        )}
      </svg>
    </div>
  );
}
