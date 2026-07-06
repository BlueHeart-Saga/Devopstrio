"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

export interface TechItem {
  name: string;
  desc: string;
}

export interface TechnologyStackProps {
  techs: TechItem[];
  overrideTitle?: string;
  overrideSubtitle?: string;
}

function getTechIcon(name: string): string {
  const n = name.toLowerCase();
  if (n.includes("aws") || n.includes("amazon")) return "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg";
  if (n.includes("azure")) return "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg";
  if (n.includes("google cloud") || n.includes("gcp")) return "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg";
  if (n.includes("react native")) return "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg";
  if (n.includes("react")) return "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg";
  if (n.includes("next.js") || n.includes("nextjs")) return "/assets/Tech-icons/nextjs-logo_svgstack_com_28891780931519.svg";
  if (n.includes("angular")) return "/assets/Tech-icons/free-angular-js-logo_svgstack_com_7451780931851.svg";
  if (n.includes("vue")) return "/assets/Tech-icons/vue-js-logo_svgstack_com_31551780931568.svg";
  if (n.includes("tailwind")) return "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg";
  if (n.includes("node")) return "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg";
  if (n.includes("typescript") || n.includes("ts")) return "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg";
  if (n.includes("go") || n.includes("golang")) return "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg";
  if (n.includes("rust")) return "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg";
  if (n.includes("python")) return "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg";
  if (n.includes("postgres")) return "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg";
  if (n.includes("redis")) return "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg";
  if (n.includes("docker")) return "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg";
  if (n.includes("kubernetes") || n.includes("k8s")) return "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg";
  if (n.includes("github")) return "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg";
  if (n.includes("gitlab")) return "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg";
  if (n.includes("slack")) return "/assets/Tech-icons/slack-logo_svgstack_com_31371780931112.svg";
  if (n.includes("jira")) return "/assets/Tech-icons/jira-logo_svgstack_com_28621780931167.svg";
  if (n.includes("openai") || n.includes("gpt")) return "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg";
  if (n.includes("html")) return "/assets/Tech-icons/html5-logo_svgstack_com_28511780931179.svg";
  if (n.includes("css")) return "/assets/Tech-icons/css-logo_svgstack_com_28131780931331.svg";
  if (n.includes("django")) return "/assets/Tech-icons/django-logo_svgstack_com_28171780931436.svg";
  if (n.includes("flask")) return "/assets/Tech-icons/flask-programming-logo_svgstack_com_28321780931358.svg";
  if (n.includes("flutter")) return "/assets/Tech-icons/flutter-logo_svgstack_com_28331780931244.svg";
  if (n.includes("dart")) return "/assets/Tech-icons/dart-programming-logo_svgstack_com_28151780931574.svg";
  if (n.includes("java")) return "/assets/Tech-icons/java-logo_svgstack_com_28601780931218.svg";
  if (n.includes("kotlin") || n.includes("android")) return "/assets/Tech-icons/green-android-logo_svgstack_com_7441780931950.svg";
  if (n.includes("swift") || n.includes("ios")) return "/assets/Tech-icons/swift-logo_svgstack_com_31441780931792.svg";
  if (n.includes("php")) return "/assets/Tech-icons/php-logo_svgstack_com_29001780931147.svg";
  if (n.includes("ruby")) return "/assets/Tech-icons/ruby-logo_svgstack_com_31281780932046.svg";
  if (n.includes("mongodb") || n.includes("mongo")) return "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg";
  if (n.includes("mysql")) return "/assets/Tech-icons/mysql-logo_svgstack_com_28851780931423.svg";
  if (n.includes("oracle")) return "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg";
  if (n.includes("cypress")) return "/assets/Tech-icons/cypress-logo_svgstack_com_28141780931497.svg";
  if (n.includes("jest")) return "/assets/Tech-icons/jest-js-logo_svgstack_com_28611780931810.svg";
  if (n.includes("postman")) return "/assets/Tech-icons/postman-logo_svgstack_com_29031780931748.svg";
  return "/assets/Tech-icons/git-logo-svg_svgstack_com_28381780931315.svg";
}

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

export function TechnologyStack({ 
  techs,
  overrideTitle,
  overrideSubtitle
}: TechnologyStackProps) {
  const [flippedCards, setFlippedCards] = React.useState<Record<number, boolean>>({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Toggle 2 to 4 random card flips every 2.5 seconds
      const count = Math.floor(Math.random() * 3) + 2;
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

  // Pad/slice techs to exactly 4 items to ensure a balanced grid of 4 cards
  const displayTechs = [...techs];
  if (displayTechs.length === 3) {
    displayTechs.push({
      name: "Git / CI-CD Pipelines",
      desc: "Version-controlled deployment code and automated build pipelines."
    });
  } else if (displayTechs.length < 3) {
    const fallbacks = [
      { name: "Git / CI-CD Pipelines", desc: "Version-controlled deployment code and automated build pipelines." },
      { name: "Docker / Containers", desc: "Standard containerization for secure application hosting." },
      { name: "Kubernetes / K8s", desc: "Container orchestration for microservices autoscaling." }
    ];
    for (const fb of fallbacks) {
      if (displayTechs.length >= 4) break;
      if (!displayTechs.some(t => t.name.toLowerCase().includes(fb.name.split(" ")[0].toLowerCase()))) {
        displayTechs.push(fb);
      }
    }
  }
  const finalTechs = displayTechs.slice(0, 4);

  return (
    <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-[30%] right-[-10%] w-[35%] aspect-square bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">

          {/* Left Block */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-24">
            <Reveal className="text-left">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                INTEGRATION STACK
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
                {overrideTitle || <>Target tech <span className="text-rose-500">frameworks</span></>}
              </h2>
              <p className="text-zinc-100 text-xs md:text-sm font-semibold leading-relaxed mt-4 max-w-sm">
                {overrideSubtitle || "We integrate with high-performance tools, libraries, and microservice hosts optimized to handle large transaction volume and zero-latency workloads."}
              </p>
            </Reveal>
          </div>

          {/* Right Block: Technical Frameworks Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {finalTechs.map((tech, idx) => {
              const iconPath = getTechIcon(tech.name);
              return (
                <Reveal key={tech.name} delay={idx * 0.05}>
                  <div className="group flex flex-col items-center justify-center bg-white border border-white/20 rounded-2xl p-5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] hover:scale-[1.03] transition-all duration-350 relative overflow-hidden text-center min-h-[140px] cursor-pointer">
                    {/* Hover ambient mesh glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                    
                    {/* Icon */}
                    <img
                      src={iconPath}
                      alt={tech.name}
                      className="w-8 h-8 object-contain group-hover:scale-105 transition-all duration-300 mb-3 relative z-10"
                    />
                    
                    {/* Title */}
                    <strong className="text-xs font-bold text-zinc-900 group-hover:text-rose-600 transition-colors mb-1 relative z-10">
                      {tech.name}
                    </strong>
                    
                    {/* Description */}
                    <span className="text-[10px] text-zinc-600 group-hover:text-zinc-800 leading-normal font-semibold max-w-[150px] transition-colors relative z-10">
                      {tech.desc}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Extended Partner Ecosystem Sub-Section */}
        <div className="border-t border-zinc-900/80 pt-16 mt-16 w-full text-center">
          <Reveal className="mb-10 text-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              GLOBAL SUPPORTED SYSTEM
            </span>
            <h3 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white uppercase">
              Supported Partner &amp; <span className="text-rose-500">Integration Ecosystem</span>
            </h3>
          </Reveal>

          {/* CSS flip card helper rules */}
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
            .flip-card:hover .flip-card-inner {
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
              border-radius: 12px;
            }
            .flip-card-back {
              transform: rotateY(180deg);
            }
            .flip-card:hover .flip-card-inner,
            .flip-card.is-flipped .flip-card-inner {
              transform: rotateY(180deg);
            }
          `}} />

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
            {standardEcosystem.map((partner, index) => (
              <Reveal key={index} delay={index * 0.03} className="w-full">
                <div className={`flip-card w-full h-16 cursor-pointer group ${flippedCards[index] ? "is-flipped" : ""}`}>
                  <div className="flip-card-inner">
                    {/* Front Face */}
                    <div className="flip-card-front bg-white border border-white/20 p-4 transition-all duration-300 group-hover:border-rose-500/50 shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
                      <img 
                        src={partner.path} 
                        alt={partner.name} 
                        className="max-h-7 max-w-[85px] object-contain group-hover:scale-[1.03] transition-all duration-300 filter brightness-105"
                      />
                      {/* Tooltip Front */}
                      <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-zinc-900 text-white text-[8px] font-bold py-1 px-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                        {partner.name}
                      </span>
                    </div>
                    {/* Back Face */}
                    <div className="flip-card-back bg-rose-950/[0.12] border border-rose-500/30 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_0_20px_rgba(244,63,94,0.12)] backdrop-blur-md">
                      <img 
                        src={partner.backPath} 
                        alt={partner.backName} 
                        className="max-h-7 max-w-[85px] object-contain opacity-100 filter brightness-105"
                      />
                      {/* Tooltip Back */}
                      <span className="absolute bottom-full left-[50%] translate-x-[-50%] mb-2 bg-zinc-900 text-white text-[8px] font-bold py-1 px-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
                        {partner.backName}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

