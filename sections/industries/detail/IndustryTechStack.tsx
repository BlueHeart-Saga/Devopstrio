"use client";

import React from "react";
import { Reveal } from "@/components/ui/Reveal";

interface TechItem {
  name: string;
  desc: string;
}

interface IndustryTechStackProps {
  techs: TechItem[];
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

export function IndustryTechStack({ techs }: IndustryTechStackProps) {
  return (
    <section id="tech-stack" className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Block */}
          <div className="lg:col-span-5 text-left">
            <Reveal className="text-left">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
                STACK INTEGRATION
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
                Target tech <span className="text-rose-500">frameworks</span>
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-4 max-w-sm">
                We design with high-performance programming tools, databases, and microservice hosts optimized to handle large transaction volume and zero-latency workloads.
              </p>
            </Reveal>
          </div>

          {/* Right Block: Technical Frameworks Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techs.map((tech, idx) => {
              const iconPath = getTechIcon(tech.name);
              return (
                <Reveal key={tech.name} delay={idx * 0.05}>
                  <div className="flex flex-col items-center justify-center bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 hover:border-rose-500/50 hover:bg-zinc-900/30 transition-all duration-350 hover:scale-[1.03] group relative overflow-hidden text-center min-h-[140px]">
                    {/* Hover ambient mesh glow */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-rose-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Icon */}
                    <img
                      src={iconPath}
                      alt={tech.name}
                      className="w-8 h-8 object-contain brightness-0 invert opacity-45 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 mb-3"
                    />
                    
                    {/* Title */}
                    <strong className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors mb-1">
                      {tech.name}
                    </strong>
                    
                    {/* Description */}
                    <span className="text-[10px] text-zinc-550 group-hover:text-zinc-400 leading-normal font-light max-w-[150px] transition-colors">
                      {tech.desc}
                    </span>
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
