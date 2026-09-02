import dynamic from "next/dynamic";
import { AboutHero } from "@/sections/about/AboutHero";
import { CompanyIntro } from "@/sections/about/CompanyIntro";
import { SectionNavbar } from "@/components/ui/SectionNavbar";
import { generatePageMetadata, getMetadataFromPath } from "@/lib/seo-utils";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  const seo = getMetadataFromPath("/about");
  return generatePageMetadata({
    title: seo.title,
    description: seo.description,
    path: "/about",
    keywords: seo.keywords
  });
}

import { FAQ } from "@/components/services/FAQ";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/Schemas";

const MissionVision = dynamic(() => import("@/sections/about/MissionVision").then((mod) => mod.MissionVision));
const OurStory = dynamic(() => import("@/sections/about/OurStory").then((mod) => mod.OurStory));
const AboutServices = dynamic(() => import("@/sections/about/AboutServices").then((mod) => mod.AboutServices));
const WhyChoose = dynamic(() => import("@/sections/about/WhyChoose").then((mod) => mod.WhyChoose));
const MetricsStats = dynamic(() => import("@/sections/about/MetricsStats").then((mod) => mod.MetricsStats));
const OurPartnership = dynamic(() => import("@/sections/about/OurPartnership").then((mod) => mod.OurPartnership));
const Achievements = dynamic(() => import("@/sections/about/Achievements").then((mod) => mod.Achievements));
const GlobalLocations = dynamic(() => import("@/sections/home/GlobalLocations").then((mod) => mod.GlobalLocations));
const AboutCTA = dynamic(() => import("@/sections/about/AboutCTA").then((mod) => mod.AboutCTA));

const aboutFaqs = [
  {
    q: "Who is Devopstrio and what engineering services do you provide?",
    a: "Devopstrio Limited is a global enterprise technology partner specializing in cloud-native architecture, SRE automation, Zero-Trust cybersecurity, modern software engineering, and production-grade Generative AI pipelines.",
    proof: "✓ 250+ Modular Engineering Capabilities · 99.99% Uptime Commitment"
  },
  {
    q: "How does Devopstrio partner with enterprise engineering teams?",
    a: "We offer flexible engagement models including Dedicated Engineering Pods, Project-Based Technical Roadmaps, and 24/7 Managed SRE Operations under guaranteed SLA commitments.",
    tags: ["Dedicated Pods", "Outcome-Based Roadmaps", "Managed SRE"]
  },
  {
    q: "What hyperscale cloud alliances does Devopstrio maintain?",
    a: "We are accredited engineering partners across AWS, Microsoft Azure, Google Cloud Platform (GCP), Cisco, SAP, and ServiceNow, helping clients avoid vendor lock-in with resilient multi-cloud architectures.",
    tags: ["AWS Advanced", "Azure Partner", "GCP Premier"]
  },
  {
    q: "Where are Devopstrio's primary engineering hubs located?",
    a: "Our headquarters are in London, UK, supported by international delivery centers in Chennai and Bangalore, India, enabling a continuous follow-the-sun operational footprint.",
    proof: "✓ London HQ · Follow-the-Sun Delivery Network"
  },
  {
    q: "How do I get started with Devopstrio for a project assessment?",
    a: "You can schedule a direct scoping session with our principal architects by contacting us through our online portal or emailing info@devopstrioglobal.com.",
    proof: "✓ Direct Architect Scoping Call within 24 Hours"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-0 font-sans">
      <BreadcrumbSchema items={[
        { name: "Home", item: "/" },
        { name: "About Devopstrio", item: "/about" }
      ]} />
      <FAQSchema faqs={aboutFaqs} />

      <div id="about-components-start" className="flex flex-col bg-black">
        <div id="identity">
          <CompanyIntro />
        </div>

        <div id="vision">
          <MissionVision />
        </div>

        <div id="journey">
          <OurStory />
        </div>

        <div id="capabilities">
          <AboutServices />
        </div>

        <div id="advantage">
          <WhyChoose />
        </div>

        <div id="impact">
          <MetricsStats />
        </div>

        <div id="ecosystem">
          <OurPartnership />
        </div>

        <div id="future">
          <Achievements />
        </div>

        <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 pb-12">
          <GlobalLocations />
        </div>

        <FAQ faqs={aboutFaqs} title="About Devopstrio" highlight="FAQs" />

        <AboutCTA />
      </div>
    </main>
  );
}

// Pure SVG Code Wave Divider components (High-Level Designs)
function SvgWaveLine({ variant }: { variant: "smooth" | "dashed" | "particles" | "grid" | "liquid" }) {
  const GradientDef = () => (
    <defs>
      <linearGradient id="wave-grad" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.2" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.8" />
        <stop offset="0.8" stopColor="#be123c" stopOpacity="0.6" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wave-glow" x1="0" y1="24" x2="1440" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e11d48" stopOpacity="0" />
        <stop offset="0.5" stopColor="#f43f5e" stopOpacity="0.1" />
        <stop offset="1" stopColor="#e11d48" stopOpacity="0" />
      </linearGradient>
      {/* Grid specific fading gradient */}
      <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
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
            <path d="M0 48C360 80 1080 16 1440 48" stroke="url(#wave-grad)" strokeWidth="2" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 48C360 80 1080 16 1440 48" fill="url(#wave-glow)" opacity="0.3" transform="translate(0, 4)" />
          </>
        )}

        {/* 2. Dashed Neon Wave */}
        {variant === "dashed" && (
          <path d="M0 64C480 -32 960 -32 1440 64" stroke="url(#wave-grad)" strokeWidth="2.5" strokeDasharray="6 8" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
        )}

        {/* 3. Particle Wave (Sine wave with scattered dots) */}
        {variant === "particles" && (
          <>
            <path d="M0 48C240 96 480 0 720 48C960 96 1200 0 1440 48" stroke="url(#wave-grad)" strokeWidth="0.8" strokeDasharray="1 10" strokeLinecap="round" className="drop-shadow-[0_0_3px_rgba(244,63,94,0.3)]" />
            <path d="M0 40C240 88 480 -8 720 40C960 88 1200 -8 1440 40" stroke="url(#wave-grad)" strokeWidth="2" strokeDasharray="2 15" strokeLinecap="round" opacity="0.4" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
            <path d="M0 56C240 104 480 8 720 56C960 104 1200 8 1440 56" stroke="url(#wave-grad)" strokeWidth="1" strokeDasharray="1 20" strokeLinecap="round" opacity="0.2" />
          </>
        )}

        {/* 4. Grid Wave */}
        {variant === "grid" && (
          <>
            {/* Vertical grid lines dropping down */}
            <g opacity="0.4">
              {[...Array(40)].map((_, i) => {
                // Approximate the sine curve for y1
                const y1 = 48 + Math.sin((i / 40) * Math.PI) * 24;
                return (
                  <line key={i} x1={i * 36.9} y1={y1} x2={i * 36.9} y2="120" stroke="url(#grid-fade)" strokeWidth="1" />
                );
              })}
            </g>
            {/* Base line */}
            <path d="M0 48C480 96 960 96 1440 48" stroke="url(#wave-grad)" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(244,63,94,0.3)]" />
          </>
        )}

        {/* 5. Liquid Wave (Overlapping fluid strokes) */}
        {variant === "liquid" && (
          <>
            <path d="M0 48C360 8 1080 88 1440 48" stroke="url(#wave-grad)" strokeWidth="3" className="drop-shadow-[0_0_6px_rgba(244,63,94,0.3)]" />
            <path d="M0 52C400 12 1040 92 1440 52" stroke="url(#wave-grad)" strokeWidth="2" opacity="0.4" />
            <path d="M0 44C320 4 1120 84 1440 44" stroke="url(#wave-grad)" strokeWidth="1" opacity="0.2" />
            <path d="M0 60C450 20 990 100 1440 60" stroke="url(#wave-grad)" strokeWidth="0.5" opacity="0.1" />
          </>
        )}
      </svg>
    </div>
  );
}
