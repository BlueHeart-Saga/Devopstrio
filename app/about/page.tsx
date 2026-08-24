import dynamic from "next/dynamic";
import { AboutHero } from "@/sections/about/AboutHero";
import { CompanyIntro } from "@/sections/about/CompanyIntro";
import { SectionNavbar } from "@/components/ui/SectionNavbar";

// Dynamic Imports for Heavy Below-The-Fold Sections to Reduce Initial JS Payload
const MissionVision = dynamic(() => import("@/sections/about/MissionVision").then((mod) => mod.MissionVision));
const OurStory = dynamic(() => import("@/sections/about/OurStory").then((mod) => mod.OurStory));
const Leadership = dynamic(() => import("@/sections/about/Leadership").then((mod) => mod.Leadership));
const AboutServices = dynamic(() => import("@/sections/about/AboutServices").then((mod) => mod.AboutServices));
const WhyChoose = dynamic(() => import("@/sections/about/WhyChoose").then((mod) => mod.WhyChoose));
const OurPartnership = dynamic(() => import("@/sections/about/OurPartnership").then((mod) => mod.OurPartnership));
const WorkflowModel = dynamic(() => import("@/sections/about/WorkflowModel").then((mod) => mod.WorkflowModel));
const MetricsStats = dynamic(() => import("@/sections/about/MetricsStats").then((mod) => mod.MetricsStats));
const Achievements = dynamic(() => import("@/sections/about/Achievements").then((mod) => mod.Achievements));
const AboutCTA = dynamic(() => import("@/sections/about/AboutCTA").then((mod) => mod.AboutCTA));
const GlobalLocations = dynamic(() => import("@/sections/home/GlobalLocations").then((mod) => mod.GlobalLocations));

const aboutSections = [
  { id: "identity", label: "Who We Are" },
  { id: "vision", label: "Vision" },
  { id: "journey", label: "Our Journey" },
  { id: "capabilities", label: "What We Do" },
  { id: "advantage", label: "Why Devopstrio" },
  { id: "leadership", label: "Leadership & Culture" },
  { id: "impact", label: "Impact Metrics" },
  { id: "ecosystem", label: "Partnerships" },
  { id: "future", label: "The Future" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-0 font-sans">

      {/* New Cinematic Hero Intro */}
      {/* <section className="pt-16 pb-4 md:pb-8 text-center relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.06),transparent_50%)] pointer-events-none" />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            About <span className="text-rose-500">Devopstrio</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-xl mx-auto">
            Discover the principles, mission, and engineering culture that drives our global technology solutions.
          </p>
        </Reveal>
      </section> */}

      {/* Existing About Components with High-Level Coded SVG Wave Lines */}
      <div id="about-components-start" className="flex flex-col bg-black">
        {/* <AboutHero /> */}

        <div id="identity">
          <CompanyIntro />
        </div>
        {/* <SvgWaveLine variant="dashed" /> */}



        {/* <div id="vision">
          <MissionVision />
        </div>
        <SvgWaveLine variant="grid" /> */}

        <div id="journey">
          <OurStory />
        </div>
        {/* <SvgWaveLine variant="liquid" /> */}

        {/* <div id="capabilities">
          <AboutServices />
        </div>
        <SvgWaveLine variant="smooth" /> */}

        {/* <div id="advantage">
          <WhyChoose />
         
            <WorkflowModel />
          
        </div> */}
        {/* <SvgWaveLine variant="dashed" /> */}

        {/* <div id="leadership">
          <Leadership />
        </div> */}
        {/* <SvgWaveLine variant="particles" /> */}

        <div id="impact">
          <MetricsStats />
        </div>
        {/* <SvgWaveLine variant="liquid" /> */}

        {/* <div id="ecosystem">
          <OurPartnership />
        </div>
        <SvgWaveLine variant="grid" /> */}

        {/* <div id="future">
          <Achievements />
        </div>
        <SvgWaveLine variant="smooth" /> */}

        <div className="max-w-site mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-20 pb-20">
          <GlobalLocations />
        </div>
        {/* <SvgWaveLine variant="liquid" /> */}

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
