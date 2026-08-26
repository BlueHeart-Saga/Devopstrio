"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface TechTool {
  name: string;
  logo: string;
}

const landscapes = [
  {
    category: "AI & Cognitive Intelligence",
    serviceUrl: "/services/ai-consulting",
    description: "Deep learning models, neural pipelines, semantic systems, and autonomous agentic workflows.",
    leftTools: [
      { name: "OpenAI", logo: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg" },
      { name: "PyTorch", logo: "/assets/Tech-icons/pytorch-logo_svgstack_com_29131780931154.svg" },
      { name: "Python", logo: "/assets/Home-page/Techtools/python.svg" },
      { name: "LangChain", logo: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg" },
    ],
    rightTools: [
      { name: "Go Lang", logo: "/assets/Home-page/Techtools/GO.svg" },
      { name: "Redis AI", logo: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
      { name: "TensorFlow", logo: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg" },
      { name: "FastAPI", logo: "/assets/Tech-icons/flask-programming-logo_svgstack_com_28321780931358.svg" },
    ],
  },
  {
    category: "Cloud Infrastructure",
    serviceUrl: "/services/cloud-services",
    description: "Multi-cloud landing zones, serverless runtimes, edge networks, and hybrid hypervisors.",
    leftTools: [
      { name: "AWS", logo: "/assets/Home-page/Techtools/aws-color.svg" },
      { name: "Microsoft Azure", logo: "/assets/Home-page/Techtools/MSAzure.svg" },
      { name: "Google Cloud", logo: "/assets/Home-page/Techtools/google-color.svg" },
      { name: "Cloudflare", logo: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
    ],
    rightTools: [
      { name: "RedHat OpenShift", logo: "/assets/Tech-icons/redhat-logo_svgstack_com_29191780931481.svg" },
      { name: "Oracle OCI", logo: "/assets/Home-page/Techtools/Oracle.svg" },
      { name: "Heroku", logo: "/assets/Tech-icons/heroku-logo-svg_svgstack_com_28481780931945.svg" },
      { name: "Ubuntu Server", logo: "/assets/Tech-icons/ubuntu-logo_svgstack_com_31491780931235.svg" },
    ],
  },
  {
    category: "DevOps & Automation",
    serviceUrl: "/services/devops-automation",
    description: "Declarative infrastructure-as-code, GitOps pipelines, and container orchestrators.",
    leftTools: [
      { name: "Docker", logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
      { name: "Kubernetes", logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
      { name: "GitHub Actions", logo: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg" },
      { name: "GitLab CI", logo: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg" },
    ],
    rightTools: [
      { name: "Git", logo: "/assets/Tech-icons/git-logo-svg_svgstack_com_28381780931315.svg" },
      { name: "Bitbucket", logo: "/assets/Tech-icons/bitbucket-logo_svgstack_com_7511780931620.svg" },
      { name: "Terraform", logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg" },
      { name: "Linux", logo: "/assets/Tech-icons/ubuntu-logo_svgstack_com_31491780931235.svg" },
    ],
  },
  {
    category: "Cybersecurity & IAM",
    serviceUrl: "/services/cybersecurity",
    description: "Zero-trust networks, automated secret managers, SAST scanners, and identity providers.",
    leftTools: [
      { name: "HashiCorp Vault", logo: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
      { name: "SonarQube SAST", logo: "/assets/Tech-icons/elastic-logo_svgstack_com_28211780931417.svg" },
      { name: "Snyk Security", logo: "/assets/Tech-icons/elastic-logo_svgstack_com_28211780931417.svg" },
      { name: "Okta IAM", logo: "/assets/Tech-icons/microsoft-logo_svgstack_com_28801780931272.svg" },
    ],
    rightTools: [
      { name: "OWASP Defender", logo: "/assets/Tech-icons/google-chrome-logo-icon_svgstack_com_28051780931337.svg" },
      { name: "Elastic Sec", logo: "/assets/Tech-icons/elastic-logo_svgstack_com_28211780931417.svg" },
      { name: "Cloudflare Access", logo: "/assets/Tech-icons/cloudflare-logo-icon_svgstack_com_28071780931769.svg" },
      { name: "RedHat Linux Sec", logo: "/assets/Tech-icons/redhat-logo_svgstack_com_29191780931481.svg" },
    ],
  },
  {
    category: "Data Platforms",
    serviceUrl: "/services/data-engineering",
    description: "High-throughput relational databases, in-memory caches, document stores, and real-time event buses.",
    leftTools: [
      { name: "PostgreSQL", logo: "/assets/Home-page/Techtools/postgre.svg" },
      { name: "MySQL", logo: "/assets/Home-page/Techtools/MySQL.svg" },
      { name: "MongoDB", logo: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg" },
      { name: "Redis Cache", logo: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg" },
    ],
    rightTools: [
      { name: "Oracle DB", logo: "/assets/Home-page/Techtools/Oracle.svg" },
      { name: "Cassandra", logo: "/assets/Tech-icons/apache-cassandra-logo-icon_svgstack_com_28041780931884.svg" },
      { name: "Prisma ORM", logo: "/assets/Tech-icons/prisma-logo_svgstack_com_29081780931562.svg" },
      { name: "GraphQL API", logo: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg" },
    ],
  },
  {
    category: "Frontend Architectures",
    serviceUrl: "/services/software-development",
    description: "Ultra-fast Next.js SSR apps, reactive UI systems, dynamic styling engines, and type-safe frontends.",
    leftTools: [
      { name: "Next.js", logo: "/assets/Home-page/Techtools/next-js-color.svg" },
      { name: "React", logo: "/assets/Home-page/Techtools/React.svg" },
      { name: "TypeScript", logo: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg" },
      { name: "Tailwind CSS", logo: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg" },
    ],
    rightTools: [
      { name: "Vue.js", logo: "/assets/Home-page/Techtools/Vue.svg" },
      { name: "Angular", logo: "/assets/Home-page/Techtools/Angular.svg" },
      { name: "Svelte", logo: "/assets/Tech-icons/svelte-logo_svgstack_com_31421780931630.svg" },
      { name: "Vite Bundler", logo: "/assets/Tech-icons/vite-js-logo_svgstack_com_31531780931342.svg" },
    ],
  },
  {
    category: "Backend Services",
    serviceUrl: "/services/software-development",
    description: "High-performance microservices, event-driven API gateways, and distributed runtime engines.",
    leftTools: [
      { name: "Node.js", logo: "/assets/Home-page/Techtools/Node.svg" },
      { name: "Go Lang", logo: "/assets/Home-page/Techtools/GO.svg" },
      { name: "Python", logo: "/assets/Home-page/Techtools/python.svg" },
      { name: "Rust", logo: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg" },
    ],
    rightTools: [
      { name: "Java", logo: "/assets/Tech-icons/java-logo_svgstack_com_28601780931218.svg" },
      { name: "NestJS", logo: "/assets/Tech-icons/nestjs-logo_svgstack_com_28861780931513.svg" },
      { name: "PHP", logo: "/assets/Home-page/Techtools/PHP.svg" },
      { name: "Laravel", logo: "/assets/Tech-icons/laravel-logo_svgstack_com_28681780931212.svg" },
    ],
  },
  {
    category: "Mobile Systems",
    serviceUrl: "/services/software-development",
    description: "Native iOS and Android platforms, cross-platform Flutter engines, and mobile backends.",
    leftTools: [
      { name: "React Native", logo: "/assets/Home-page/Techtools/React.svg" },
      { name: "Flutter", logo: "/assets/Home-page/Techtools/flutter.svg" },
      { name: "Android Native", logo: "/assets/Home-page/Techtools/Android.svg" },
      { name: "iOS Native", logo: "/assets/Home-page/Techtools/iOS.svg" },
    ],
    rightTools: [
      { name: "Dart", logo: "/assets/Tech-icons/dart-programming-logo_svgstack_com_28151780931574.svg" },
      { name: "Swift", logo: "/assets/Tech-icons/swift-logo_svgstack_com_31441780931792.svg" },
      { name: "Firebase", logo: "/assets/Tech-icons/google-firebase-logo_svgstack_com_28301780931456.svg" },
      { name: "Xamarin", logo: "/assets/Tech-icons/xamarin-logo_svgstack_com_31581780931804.svg" },
    ],
  },
];

export function TechnologyLandscape() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeLandscape = landscapes[activeIndex];

  // Auto-change category tabs one by one every 4.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % landscapes.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="landscape"
      className="w-full py-24 bg-[#030303] text-white border-b border-zinc-900/60 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 xl:px-12 relative z-10 text-center">
        
        {/* Header */}
        <Reveal className="mb-14 max-w-4xl mx-auto">
          {/* <span className="text-sm sm:text-base font-bold tracking-[0.25em] uppercase text-rose-500 mb-4 block">
            COMPLETE TECHNOLOGY LANDSCAPE
          </span> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Powering Complete Digital Transformation Across <span className="text-rose-500">Every Technology Layer</span>
          </h2>
        </Reveal>

        {/* Category Pill Selector Bar with Auto Change */}
        <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-16 py-3 px-2">
          {landscapes.map((item, idx) => (
            <button
              key={item.category}
              onClick={() => {
                setActiveIndex(idx);
                setIsPaused(true);
              }}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-rose-600 text-white shadow-[0_0_25px_rgba(225,29,72,0.5)] scale-105"
                  : "bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Central Circuit Branching Visual Container (Matching uploaded design reference) */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[460px] flex items-center justify-center py-6">

          {/* SVG Connecting Circuit Curves */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block text-rose-500/25"
            viewBox="0 0 1000 460"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="branchGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#E11D48" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Left Branch Circuit Paths (Connecting Left Logo Nodes to Center Card) */}
            <path d="M 220 60 C 270 60, 290 230, 350 230" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />
            <path d="M 220 170 C 270 170, 290 230, 350 230" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />
            <path d="M 220 290 C 270 290, 290 230, 350 230" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />
            <path d="M 220 400 C 270 400, 290 230, 350 230" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />

            {/* Right Branch Circuit Paths (Connecting Center Card to Right Logo Nodes) */}
            <path d="M 650 230 C 710 230, 730 60, 780 60" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />
            <path d="M 650 230 C 710 230, 730 170, 780 170" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />
            <path d="M 650 230 C 710 230, 730 290, 780 290" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />
            <path d="M 650 230 C 710 230, 730 400, 780 400" stroke="url(#branchGlow)" strokeWidth="1.8" strokeDasharray="5 5" />
          </svg>

          {/* Main Grid: Left Icons - Center Hub Card - Right Icons */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center w-full relative z-10">

            {/* LEFT COLUMN: 4 Floating Tech Circle Nodes (Logo aligned at SVG Endpoint, Label outside to left) */}
            <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-around gap-6 md:gap-8">
              {activeLandscape.leftTools.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="group relative flex items-center gap-3 cursor-pointer"
                >
                  {/* Technology Label Tag (Left Side) */}
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-400 bg-zinc-900/95 px-4 py-2 rounded-full border border-zinc-800 shadow-md whitespace-nowrap transition-colors block">
                    {tool.name}
                  </span>

                  {/* Logo Icon (Right Side - meeting SVG Endpoint) */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-white flex items-center justify-center p-3 shadow-[0_8px_25px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(244,63,94,0.5)] group-hover:scale-115 transition-all duration-300 border-0 shrink-0">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER COLUMN: Clean Borderless Hub Card */}
            <div className="md:col-span-6 flex justify-center">
              <div className="w-full max-w-lg bg-zinc-950/60 border-0 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl text-center relative overflow-hidden">
                {/* Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-white tracking-tight leading-tight mb-4 pt-2">
                  {activeLandscape.category}
                </h3>

                {/* Description */}
                <p className="text-zinc-200 text-base sm:text-lg font-semibold leading-relaxed mb-8">
                  {activeLandscape.description}
                </p>

                {/* Action CTA Button directly linking to corresponding service page */}
                <Link
                  href={activeLandscape.serviceUrl}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase bg-rose-600 hover:bg-rose-500 text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(225,29,72,0.4)] cursor-pointer"
                >
                  Explore Service Solutions
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: 4 Floating Tech Circle Nodes (Logo meeting SVG Endpoint on Left, Label outside to right) */}
            <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-around gap-6 md:gap-8">
              {activeLandscape.rightTools.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="group relative flex items-center gap-3 cursor-pointer"
                >
                  {/* Logo Icon (Left Side - meeting SVG Endpoint) */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full bg-white flex items-center justify-center p-3 shadow-[0_8px_25px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(244,63,94,0.5)] group-hover:scale-115 transition-all duration-300 border-0 shrink-0">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  {/* Technology Label Tag (Right Side) */}
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-rose-400 bg-zinc-900/95 px-4 py-2 rounded-full border border-zinc-800 shadow-md whitespace-nowrap transition-colors block">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnologyLandscape;
