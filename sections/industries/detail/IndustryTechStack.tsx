"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface TechItem {
  name: string;
  desc: string;
}

interface IndustryTechStackProps {
  techs: TechItem[];
}

const extraTechItems: TechItem[] = [
  {
    name: "Docker / Kubernetes",
    desc: "Containerized application packages and orchestration clusters configured for auto-scaling."
  },
  {
    name: "Amazon Web Services (AWS)",
    desc: "Resilient cloud infrastructure solutions configured under strict security group profiles."
  }
];

const standardEcosystem = [
  { name: "AWS", path: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg", backName: "Azure", backPath: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg" },
  { name: "Azure", path: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg", backName: "Google Cloud", backPath: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg" },
  { name: "Google Cloud", path: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg", backName: "AWS", backPath: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg" },
  { name: "Cloudflare", path: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg", backName: "Netlify", backPath: "/assets/Tech-icons/netlify-logo-icon_svgstack_com_28881780931932.svg" },
  { name: "Docker", path: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg", backName: "Git", backPath: "/assets/Tech-icons/git-logo-svg_svgstack_com_28381780931315.svg" },
  { name: "GitLab", path: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg", backName: "GitHub", backPath: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
  { name: "GitHub", path: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg", backName: "GitLab", backPath: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" },
  { name: "TypeScript", path: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg", backName: "Go", backPath: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg" },
  { name: "React", path: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg", backName: "Vue.js", backPath: "/assets/Tech-icons/vue-js-logo_svgstack_com_31551780931568.svg" },
  { name: "Next.js", path: "/assets/Tech-icons/nextjs-logo_svgstack_com_28891780931519.svg", backName: "NestJS", backPath: "/assets/Tech-icons/nestjs-logo_svgstack_com_28861780931513.svg" },
  { name: "Angular", path: "/assets/Tech-icons/free-angular-js-logo_svgstack_com_7451780931851.svg", backName: "Svelte", backPath: "/assets/Tech-icons/svelte-logo_svgstack_com_31421780931630.svg" },
  { name: "Tailwind CSS", path: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg", backName: "Material UI", backPath: "/assets/Tech-icons/material-ui-logo_svgstack_com_28781780931646.svg" },
  { name: "Node.js", path: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg", backName: "Python", backPath: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg" },
  { name: "Python", path: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg", backName: "Node.js", backPath: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg" },
  { name: "Rust", path: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg", backName: "C++", backPath: "/assets/Tech-icons/cpp-icon-logo_svgstack_com_28021780931821.svg" },
  { name: "Go", path: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg", backName: "Rust", backPath: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg" },
  { name: "PostgreSQL", path: "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg", backName: "MySQL", backPath: "/assets/Tech-icons/mysql-logo_svgstack_com_28851780931423.svg" },
  { name: "MongoDB", path: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg", backName: "Redis", backPath: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
  { name: "GraphQL", path: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg", backName: "Prisma", backPath: "/assets/Tech-icons/prisma-logo_svgstack_com_29081780931562.svg" },
  { name: "OpenAI", path: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg", backName: "GitHub Copilot", backPath: "/assets/Tech-icons/github-copilot-logo_svgstack_com_28101780931046.svg" },
  { name: "Vite", path: "/assets/Tech-icons/vite-js-logo_svgstack_com_31531780931342.svg", backName: "Webpack", backPath: "/assets/Tech-icons/webpack-logo_svgstack_com_31561780931625.svg" },
  { name: "Postman", path: "/assets/Tech-icons/postman-logo_svgstack_com_29031780931748.svg", backName: "Cypress", backPath: "/assets/Tech-icons/cypress-logo_svgstack_com_28141780931497.svg" },
  { name: "Slack", path: "/assets/Tech-icons/slack-logo_svgstack_com_31371780931112.svg", backName: "Jira", backPath: "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg" },
  { name: "Java", path: "/assets/Tech-icons/java-logo_svgstack_com_28601780931218.svg", backName: "Android", backPath: "/assets/Tech-icons/green-android-logo_svgstack_com_7441780931950.svg" }
];

function getTechIconColored(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("aws") || n.includes("amazon")) return "/assets/Home-page/Techtools/aws-color.svg";
  if (n.includes("azure")) return "/assets/Home-page/Techtools/MSAzure.svg";
  if (n.includes("google cloud") || n.includes("gcp")) return "/assets/Home-page/Techtools/google-color.svg";
  if (n.includes("react")) return "/assets/Home-page/Techtools/React.svg";
  if (n.includes("next.js") || n.includes("nextjs")) return "/assets/Home-page/Techtools/next-js-color.svg";
  if (n.includes("angular")) return "/assets/Home-page/Techtools/Angular.svg";
  if (n.includes("vue")) return "/assets/Home-page/Techtools/Vue.svg";
  if (n.includes("node")) return "/assets/Home-page/Techtools/Node.svg";
  if (n.includes("python")) return "/assets/Home-page/Techtools/Python.svg";
  if (n.includes("postgres")) return "/assets/Home-page/Techtools/postgre.svg";
  if (n.includes("mysql")) return "/assets/Home-page/Techtools/MySQL.svg";
  if (n.includes("oracle")) return "/assets/Home-page/Techtools/Oracle.svg";
  if (n.includes("java")) return "/assets/Home-page/Techtools/java-colored.svg";
  if (n.includes("php")) return "/assets/Home-page/Techtools/PHP.svg";
  if (n.includes("ruby") || n.includes("rails")) return "/assets/Home-page/Techtools/Ruby.svg";
  if (n.includes("flutter")) return "/assets/Home-page/Techtools/flutter.svg";
  if (n.includes("android")) return "/assets/Home-page/Techtools/Android.svg";
  if (n.includes("ios") || n.includes("swift")) return "/assets/Home-page/Techtools/iOS.svg";
  if (n.includes("go") || n.includes("golang")) return "/assets/Home-page/Techtools/GO.svg";
  if (n.includes("c++") || n.includes("cpp")) return "/assets/Home-page/Techtools/Cplusplus.svg";
  if (n.includes("xamarin")) return "/assets/Home-page/Techtools/Xamarin.svg";
  if (n.includes("kubernetes") || n.includes("k8s") || n.includes("docker")) return "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg";
  return "/assets/Tech-icons/git-logo-svg_svgstack_com_28381780931315.svg";
}

export function IndustryTechStack({ techs }: IndustryTechStackProps) {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Pad/slice techs to exactly 4 items to ensure a balanced grid of 4 cards on the right
  const mergedTechs = [...techs];
  let defaultIdx = 0;
  while (mergedTechs.length < 4 && defaultIdx < extraTechItems.length) {
    mergedTechs.push(extraTechItems[defaultIdx]);
    defaultIdx++;
  }
  const finalTechs = mergedTechs.slice(0, 4);

  // Random card flipping automation matching TechnologyStack.tsx
  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 3) + 2; // Flip 2 to 4 random cards
      setFlippedCards(prev => {
        const next = { ...prev };
        for (let i = 0; i < count; i++) {
          const randomIdx = Math.floor(Math.random() * standardEcosystem.length);
          next[randomIdx] = !next[randomIdx];
        }
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech-stack" className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden text-white">
      {/* Background Graphic Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.015),transparent_70%)] pointer-events-none z-0" />

      {/* CSS 3D perspective flip card helper rules */}
      <style dangerouslySetInnerHTML={{__html: `
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner,
        .flip-card.is-flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}} />

      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-left">
        
        {/* Main Grid: Description & 4 Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">

          {/* Left Column: Description */}
          <div className="lg:col-span-5 text-left">
            <Reveal>
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4 block">
                STACK INTEGRATION
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                Target tech <span className="text-[#E11D48]">frameworks</span>
              </h2>
              
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                We design with high-performance programming tools, databases, and microservice hosts optimized to handle large transaction volume and zero-latency workloads.
              </p>
            </Reveal>
          </div>

          {/* Right Column: 4 Technical Frameworks Cards (Colored Icons, no shadow filters overlaying them) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {finalTechs.map((tech, idx) => {
              const iconPath = getTechIconColored(tech.name);
              return (
                <Reveal key={tech.name} delay={idx * 0.05}>
                  <div className="group h-full flex flex-col items-center justify-center bg-[#0b0b0c] border border-white/10 rounded-[24px] p-6 hover:border-rose-500/35 hover:shadow-[0_8px_32px_rgba(244,63,94,0.08)] transition-all duration-300 relative overflow-hidden text-center min-h-[160px] cursor-pointer">
                    
                    {/* Hover Glow Behind Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E11D48]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                    
                    {/* Icon (placed above background glow to avoid color overlays) */}
                    <img
                      src={iconPath}
                      alt={tech.name}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 mb-4 relative z-10"
                    />
                    
                    {/* Title */}
                    <strong className="text-sm font-bold text-white mb-1.5 group-hover:text-[#E11D48] transition-colors duration-300 relative z-10">
                      {tech.name}
                    </strong>
                    
                    {/* Description */}
                    <span className="text-xs text-zinc-400 leading-normal font-semibold max-w-[170px] transition-colors duration-300 relative z-10">
                      {tech.desc}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Extended Flip-Card Technology Ecosystem Sub-Section */}
        <div className="border-t border-white/5 pt-20 w-full text-center">
          <Reveal className="mb-12">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-4 block">
              GLOBAL SUPPORTED SYSTEM
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Supported Partner &amp; <span className="text-[#E11D48]">Integration Ecosystem</span>
            </h3>
          </Reveal>

          {/* Perspective grid of flipping cards */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
            {standardEcosystem.map((partner, index) => {
              // Resolve colored SVGs when available
              const frontIcon = getTechIconColored(partner.name).includes("git-logo") ? partner.path : getTechIconColored(partner.name);
              const backIcon = getTechIconColored(partner.backName).includes("git-logo") ? partner.backPath : getTechIconColored(partner.backName);

              return (
                <Reveal key={index} delay={index * 0.03} className="w-full">
                  <div className={`flip-card w-full h-16 cursor-pointer group ${flippedCards[index] ? "is-flipped" : ""}`}>
                    <div className="flip-card-inner">
                      
                      {/* Front Face */}
                      <div className="flip-card-front bg-[#0b0b0c] border border-white/10 p-4 transition-all duration-300 group-hover:border-rose-500/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <img 
                          src={frontIcon} 
                          alt={partner.name} 
                          className="max-h-7 max-w-[85px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        {/* Tooltip Front */}
                        <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-[#E11D48] text-white text-[8px] font-bold py-1 px-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                          {partner.name}
                        </span>
                      </div>
                      
                      {/* Back Face */}
                      <div className="flip-card-back bg-[#0d0d0f] border border-rose-500/35 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_0_20px_rgba(244,63,94,0.08)] backdrop-blur-md">
                        <img 
                          src={backIcon} 
                          alt={partner.backName} 
                          className="max-h-7 max-w-[85px] object-contain"
                        />
                        {/* Tooltip Back */}
                        <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-zinc-900 text-white text-[8px] font-bold py-1 px-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                          {partner.backName}
                        </span>
                      </div>

                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
