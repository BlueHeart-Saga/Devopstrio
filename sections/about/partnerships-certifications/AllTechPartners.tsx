"use client";

import { Reveal } from "@/components/ui/Reveal";

import { ArrowUpRight } from "lucide-react";

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
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Technology Stack
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-6">
              Our Tech <span className="text-[#E11D48]">Partners</span>
            </h2>
          </div>
        </Reveal>

      {/* Auto-scrolling Marquee Container */}
      <div 
        className="w-full overflow-hidden pb-12 pt-4 relative"
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
                key={`a-${i}`} 
                className="w-[360px] shrink-0 p-6 rounded-3xl bg-[#0a0a0a] border border-zinc-800 flex flex-col group hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="h-8 flex items-center justify-start">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-full w-auto max-w-[120px] object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400 border border-zinc-800 rounded px-2 py-1 shrink-0 ml-2">
                    {partner.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{partner.title}</h3>
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                  {partner.description}
                </p>

                <div className="flex justify-end mt-auto">
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate for seamless scroll) */}
          <div className="flex gap-6 pr-6">
            {techPartners.map((partner, i) => (
              <div 
                key={`b-${i}`} 
                className="w-[360px] shrink-0 p-6 rounded-3xl bg-[#0a0a0a] border border-zinc-800 flex flex-col group hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="h-8 flex items-center justify-start">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-full w-auto max-w-[120px] object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-400 border border-zinc-800 rounded px-2 py-1 shrink-0 ml-2">
                    {partner.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{partner.title}</h3>
                
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                  {partner.description}
                </p>

                <div className="flex justify-end mt-auto">
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
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
