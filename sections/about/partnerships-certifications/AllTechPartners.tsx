"use client";

import { Reveal } from "@/components/ui/Reveal";

const techPartners = [
  { 
    name: "AWS", 
    title: "AWS Platform",
    badge: "PREMIER PARTNER", 
    description: "Scalable hyperscale server instances, technical sandboxes, and accelerated multi-cloud capabilities.",
    logo: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg" 
  },
  { 
    name: "Google Cloud", 
    title: "Google Cloud",
    badge: "SPECIALIZED PARTNER", 
    description: "High-performance Big Data systems, serverless scaling layers, and custom MLOps capabilities.",
    logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" 
  },
  { 
    name: "Docker", 
    title: "Docker Engine",
    badge: "CORE INTEGRATION", 
    description: "Reliable application encapsulation patterns that deploy identically on any localized server node.",
    logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" 
  },
  { 
    name: "GitLab", 
    title: "GitLab Systems",
    badge: "DEVOPS CI/CD", 
    description: "Source code protection repositories with automated compliance testing and testing pipelines.",
    logo: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" 
  },
  {
    name: "PostgreSQL",
    title: "PostgreSQL",
    badge: "DATABASE PARTNER",
    description: "Ultra-reliable open-source relational database systems, high-integrity ledgers, and secure migrations.",
    logo: "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg"
  },
  {
    name: "Python",
    title: "Python ML Engine",
    badge: "LANGUAGES & ML",
    description: "Robust data processing backends and industry-leading machine learning modeling workflows.",
    logo: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg"
  },
  {
    name: "Node.js",
    title: "Node.js Runtimes",
    badge: "PERFORMANCE",
    description: "Event-driven microservices architecture for ultra-fast, non-blocking asynchronous enterprise APIs.",
    logo: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg"
  },
  {
    name: "TypeScript",
    title: "TypeScript Systems",
    badge: "CORE STANDARD",
    description: "Strictly typed enterprise codebases that prevent runtime errors and ensure massive scale maintainability.",
    logo: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg"
  }
];

export function AllTechPartners() {
  return (
    <section className="py-10 sm:py-14 bg-black text-white relative overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white font-sans">
              Our Tech <span className="text-rose-600">Partners</span>
            </h2>
          </div>
        </Reveal>

        {/* Auto-scrolling Marquee Container */}
        <div 
          className="w-full overflow-hidden pb-8 pt-2 relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent)'
          }}
        >
          <style>{`
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 45s linear infinite;
            }
            .animate-marquee-reverse:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex w-max animate-marquee-reverse">
            {/* First Set */}
            <div className="flex gap-6 pr-6">
              {techPartners.map((partner, i) => (
                <div 
                  key={`tech-a-${i}`} 
                  className="w-[280px] shrink-0 p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md flex flex-col gap-6 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="w-full h-36 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center p-6 group-hover:border-zinc-700/80 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5 px-2 pb-1">
                    <div className="text-rose-500 font-bold text-xs tracking-[0.2em] uppercase font-sans">
                      {partner.badge}
                    </div>
                    <div className="text-white font-bold text-xl sm:text-2xl tracking-tight font-sans group-hover:text-rose-400 transition-colors">
                      {partner.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Set (Duplicate for seamless scroll) */}
            <div className="flex gap-6 pr-6">
              {techPartners.map((partner, i) => (
                <div 
                  key={`tech-b-${i}`} 
                  className="w-[280px] shrink-0 p-6 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md flex flex-col gap-6 hover:border-rose-500/50 hover:bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="w-full h-36 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-center p-6 group-hover:border-zinc-700/80 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-[85%] max-h-[85%] object-contain transition-all duration-300 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <div className="flex flex-col items-center text-center gap-1.5 px-2 pb-1">
                    <div className="text-rose-500 font-bold text-xs tracking-[0.2em] uppercase font-sans">
                      {partner.badge}
                    </div>
                    <div className="text-white font-bold text-xl sm:text-2xl tracking-tight font-sans group-hover:text-rose-400 transition-colors">
                      {partner.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
