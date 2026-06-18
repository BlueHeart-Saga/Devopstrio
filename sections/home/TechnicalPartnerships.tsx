"use client";

import React, { useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

const techStack = [
  // Cloud & Containers
  { name: "AWS", icon: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg", category: "Cloud Infrastructure", desc: "Architecting scalable, fault-tolerant cloud infrastructures, serverless computing with Lambda, and global network systems." },
  { name: "Azure", icon: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg", category: "Enterprise Cloud Platforms", desc: "Designing robust enterprise cloud solutions, AKS container management, Active Directory security, and hybrid landing zones." },
  { name: "Google Cloud", icon: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg", category: "Data & AI Cloud Infrastructure", desc: "Powering real-time data analytics with BigQuery, Kubernetes orchestration with GKE, and AI modeling with Vertex AI." },
  { name: "Docker", icon: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg", category: "Containerization", desc: "Packaging applications into lightweight, standardized containers for predictable cross-environment execution." },

  // Programming Languages & Runtimes
  { name: "Node.js", icon: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg", category: "Backend Runtime Environment", desc: "Developing event-driven, high-concurrency microservices, high-speed REST/GraphQL APIs, and server-side runtimes." },
  { name: "Python", icon: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg", category: "AI & Machine Learning", desc: "Building advanced machine learning architectures, automated data engineering pipelines, AI agent scripts, and statistical engines." },
  { name: "Go", icon: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg", category: "Systems & Microservices", desc: "Compiling ultra-low-latency backend APIs, concurrent networking services, Kubernetes operators, and high-performance microservices." },
  { name: "Rust", icon: "/assets/Tech-icons/rust-logo_svgstack_com_31291780931285.svg", category: "Systems Programming", desc: "Empowering developers to build highly reliable, memory-safe systems software with bare-metal performance." },
  { name: "TypeScript", icon: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg", category: "Typed Programming", desc: "Adding static types and advanced tooling to JavaScript for safer, highly maintainable enterprise codebases." },
  { name: "Java", icon: "/assets/Tech-icons/java-logo_svgstack_com_28601780931218.svg", category: "Enterprise Application Stacks", desc: "Constructing robust, secure, and distributed enterprise platforms, backend microservices using Spring Boot, and legacy migrations." },
  { name: ".NET", icon: "/assets/Home-page/Techtools/net.svg", category: "Enterprise Software & Cloud", desc: "Creating scalable cross-platform desktop, mobile, and cloud software, secure API integrations, and robust database backends." },
  { name: "C++", icon: "/assets/Tech-icons/cpp-icon-logo_svgstack_com_28021780931821.svg", category: "High-Performance Systems", desc: "Writing memory-efficient high-frequency trading engines, gaming systems, low-latency device drivers, and heavy computational scripts." },
  { name: "Ruby", icon: "/assets/Tech-icons/ruby-logo_svgstack_com_31281780932046.svg", category: "Rapid Backend Development", desc: "Developing clean, human-readable web backends, quick-turn MVPs, automated testing scripts, and Rails web configurations." },
  { name: "PHP", icon: "/assets/Tech-icons/php-logo_svgstack_com_29001780931147.svg", category: "Server-Side Scripting", desc: "Supporting high-scale public CMS backends, modern server-side MVC architectures, API endpoints, and legacy migrations." },

  // Web & Mobile Frameworks
  { name: "React", icon: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg", category: "Frontend Web Library", desc: "Crafting highly interactive, responsive user interfaces, modular components, optimized state flows, and smooth client experiences." },
  { name: "Next.js", icon: "/assets/Tech-icons/nextjs-logo_svgstack_com_28891780931519.svg", category: "Modern Fullstack Framework", desc: "Deploying production-ready web platforms with server-side rendering, static site generation, optimized SEO, and fast load speeds." },
  { name: "Angular", icon: "/assets/Tech-icons/free-angular-js-logo_svgstack_com_7451780931851.svg", category: "Enterprise Web Applications", desc: "Developing structured, maintainable single-page applications with strict modularity, TypeScript type-safety, and RxJS state management." },
  { name: "Vue", icon: "/assets/Tech-icons/vue-js-logo_svgstack_com_31551780931568.svg", category: "Progressive Web Frontend", desc: "Developing intuitive, highly responsive, and modular single-page web applications with lightweight and rapid-render virtual DOM." },
  { name: "TailwindCSS", icon: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg", category: "CSS Styling Framework", desc: "Rapidly designing custom, responsive UI layouts with utility-first classes and optimized asset bundles." },
  { name: "Flutter", icon: "/assets/Tech-icons/flutter-logo_svgstack_com_28331780931244.svg", category: "Cross-Platform Mobile", desc: "Building high-performance native iOS and Android applications from a single codebase using Dart and canvas-accelerated rendering." },
  { name: "iOS", icon: "/assets/Home-page/Techtools/iOS.svg", category: "Native Apple Platform", desc: "Engineering native Apple applications with Swift and SwiftUI, utilizing device hardware, offline caches, and App Store guidelines." },
  { name: "Android", icon: "/assets/Home-page/Techtools/Android.svg", category: "Native Mobile Platform", desc: "Developing native Android applications with Kotlin, responsive layouts with Jetpack Compose, and background task optimizations." },

  // Databases & Caches
  { name: "PostgreSQL", icon: "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg", category: "Relational Database Engine", desc: "Deploying ACID-compliant transactional databases, geographic queries with PostGIS, and high-throughput write replication." },
  { name: "MySQL", icon: "/assets/Tech-icons/mysql-logo_svgstack_com_28851780931423.svg", category: "Relational Database Engine", desc: "Configuring high-speed database replication clusters, read-heavy web storage architectures, and highly available structures." },
  { name: "MSSQL", icon: "/assets/Home-page/Techtools/MSSQL.svg", category: "Enterprise Database Systems", desc: "Managing transactional databases, high-availability AlwaysOn clusters, complex integration tasks, and reporting engines." },
  { name: "Oracle", icon: "/assets/Tech-icons/oracle-logo_svgstack_com_28991780931429.svg", category: "Enterprise Core Database", desc: "Operating mission-critical financial and core business databases, high-performance PL/SQL scripts, and active failover pools." },
  { name: "MongoDB", icon: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg", category: "Document Database System", desc: "Deploying high-volume, JSON-like document storage architectures, flexible schemas, and distributed query processing." },
  { name: "Redis", icon: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg", category: "In-Memory Data Store", desc: "Powering sub-millisecond data caching, pub-sub messaging queues, and session persistence systems." },

  // Integrations, AI & Platforms
  { name: "OpenAI", icon: "/assets/Tech-icons/openai-logo_svgstack_com_28971780931370.svg", category: "Artificial Intelligence & LLM", desc: "Integrating advanced LLMs, semantic search embeddings, and intelligent agents into product workflows." },
  { name: "GraphQL", icon: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg", category: "API Query Language", desc: "Enabling clients to request exactly the data they need, simplifying API orchestration and data fetching." },
  { name: "MuleSoft", icon: "/assets/Home-page/Techtools/mulesoft.svg", category: "Enterprise Middleware & ESB", desc: "Orchestrating complex enterprise API integrations, ESB data buses, real-time message translation, and legacy connectors." },
  { name: "Strapi", icon: "/assets/Home-page/Techtools/strapi-color.svg", category: "Headless Content Infrastructure", desc: "Deploying headless backend APIs, secure content modeling systems, and multi-tenant administrative portals." },
  
  // Fintech Core Banking
  { name: "Mambu", icon: "/assets/Home-page/Techtools/mambu.svg", category: "Cloud Banking Platform", desc: "Orchestrating SaaS cloud-native banking cores, flexible deposit/lending engines, and open financial APIs." },
  { name: "Temenos", icon: "/assets/Home-page/Techtools/temenos.svg", category: "Core Banking Systems", desc: "Running globally dominant enterprise core banking systems, digital wealth management, and transactional layers." },
  { name: "Thought Machine", icon: "/assets/Home-page/Techtools/thought-machine.svg", category: "Next-Gen Core Banking", desc: "Deploying cloud-native, smart contract-based core banking ledgers, offering extreme configurability and resilience." },
  { name: "Backbase", icon: "/assets/Home-page/Techtools/Backbase.svg", category: "Engagement Banking Platform", desc: "Crafting unified digital banking interfaces, orchestrating seamless customer journeys across web, mobile, and branch networks." },
  { name: "nCino", icon: "/assets/Home-page/Techtools/ncino.svg", category: "Cloud Banking Solutions", desc: "Streamlining commercial lending workflows, customer onboarding, and portfolio analytics built natively on Salesforce." },

  // New Additions
  { name: "Apache Cassandra", icon: "/assets/Tech-icons/apache-cassandra-logo-icon_svgstack_com_28041780931884.svg", category: "NoSQL Database System", desc: "Operating highly scalable distributed NoSQL databases with masterless architecture and zero single point of failure." },
  { name: "Bitbucket", icon: "/assets/Tech-icons/bitbucket-logo_svgstack_com_7511780931620.svg", category: "DevOps & VCS", desc: "Collaborating on Git code repositories, built-in CI/CD pipelines, and deep Jira project management integration." },
  { name: "Cypress", icon: "/assets/Tech-icons/cypress-logo_svgstack_com_28141780931497.svg", category: "Automated E2E Testing", desc: "Executing fast, reliable end-to-end frontend testing scripts in real browser sandboxes." },
  { name: "Django", icon: "/assets/Tech-icons/django-logo_svgstack_com_28171780931436.svg", category: "Python Web Framework", desc: "Rapidly building robust backend web apps with Python, using a built-in admin dashboard and object-relational mapping." },
  { name: "Laravel", icon: "/assets/Tech-icons/laravel-logo_svgstack_com_28681780931212.svg", category: "PHP Web Framework", desc: "Developing elegant MVC web systems, database migrations, and job queues with PHP." },
  { name: "Spring Boot", icon: "/assets/Tech-icons/spring-logo_svgstack_com_31401780931299.svg", category: "Java Application Framework", desc: "Deploying production-ready, stand-alone Java enterprise server applications and microservices." },
  { name: "GitLab", icon: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg", category: "DevOps Lifecycle Platform", desc: "Single application for the entire DevOps lifecycle, from planning and repository management to CI/CD and monitoring." },
  { name: "GitHub Copilot", icon: "/assets/Tech-icons/github-copilot-logo_svgstack_com_28101780931046.svg", category: "AI-Assisted Coding", desc: "Leveraging generative AI autocomplete models to accelerate software development and code quality." },
  { name: "NestJS", icon: "/assets/Tech-icons/nestjs-logo_svgstack_com_28861780931513.svg", category: "Backend Server Framework", desc: "Building scalable, testable, and loosely coupled enterprise-grade Node.js server architectures with TypeScript." },
  { name: "Vite", icon: "/assets/Tech-icons/vite-js-logo_svgstack_com_31531780931342.svg", category: "Frontend Build Tooling", desc: "Powering ultra-fast module replacement (HMR) and optimized frontend asset compilation." },
  { name: "Elasticsearch", icon: "/assets/Tech-icons/elastic-logo_svgstack_com_28211780931417.svg", category: "Search & Analytics Engine", desc: "Executing near real-time full-text search, log analytics, and distributed document indexing." }
];

export function TechnicalPartnerships() {
  const [page, setPage] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-cycle active highlight within current page
  useEffect(() => {
    if (hoveredIndex !== null || isFading) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 24);
    }, 3000);
    return () => clearInterval(interval);
  }, [hoveredIndex, isFading]);

  // Auto-change/swipe the page every 12 seconds
  useEffect(() => {
    if (hoveredIndex !== null) return;
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setPage((prev) => (prev + 1) % 2);
        setActiveIndex(0);
        setIsFading(false);
      }, 400); // match fade transition
    }, 12000);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const displayedTechs = techStack.slice(page * 24, (page + 1) * 24);
  const currentTechIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const hoveredData = displayedTechs[currentTechIndex] || displayedTechs[0];
  const isHoveredState = hoveredIndex !== null;

  return (
    <section className="w-full py-24 md:py-32 bg-[#030303] text-white relative overflow-hidden">
      {/* Background ambient lighting - Custom Wave Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="/assets/wavebg/image.png"
          alt="Background Wave"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <Reveal>
            <div className="flex flex-col justify-center w-full lg:max-w-[90%] xl:max-w-[85%]">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-rose-500 block mb-4">
                TECHNOLOGY ECOSYSTEM
              </span>
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-[1.12] text-white mb-6">
                Strategic <span className="text-[#E11D48]">Technology</span> <span className="text-[#E11D48]">Partnerships</span> <br className="hidden md:block" />
                The Foundation Behind Digital Success
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-12">
                Hover over the nodes to explore the integrated tools in our delivery pipeline.
              </p>

              <div className="flex flex-col gap-6 relative min-h-[200px] justify-between">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-rose-500 via-rose-900 to-transparent"></div>

                <div key={`${currentTechIndex}-${page}`} className="animate-fadeIn">
                  <div className="pl-6 mb-4">
                    <span className="text-rose-500 text-xs font-bold tracking-widest block mb-1 uppercase">
                      {hoveredData.category}
                    </span>
                    <h4 className="text-white font-bold text-2xl mb-2">
                      {hoveredData.name}
                    </h4>
                  </div>

                  <div className="pl-6">
                    <h5 className="text-zinc-500 font-bold text-[10px] uppercase tracking-wider mb-1">Production Capability</h5>
                    <p className="text-sm text-zinc-400 font-bold leading-relaxed">{hoveredData.desc}</p>
                  </div>
                </div>

                <div className="pl-6 pt-4">
                  <div className="h-[2px] w-12 bg-rose-500 mb-3"></div>
                  <div className="text-rose-500 text-[10px] font-black tracking-widest uppercase animate-pulse">
                    {isHoveredState ? `Inspecting: ${hoveredData.name}` : `Auto-cycling stack (Page ${page + 1}/2)`}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Content - Tech Grid */}
          <Reveal delay={0.2}>
            <div>
              <div className={`transition-all duration-500 transform ${isFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3 relative">
                  {/* Dynamic glow effect behind the grid */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/10 to-transparent blur-3xl -z-10 rounded-full" />

                  {displayedTechs.map((tech, i) => {
                    const isActive = currentTechIndex === i;
                    return (
                      <div
                        key={`${tech.name}-${i}-${page}`}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => {
                          setHoveredIndex(null);
                          setActiveIndex(i);
                        }}
                        className={`
                          bg-white rounded-lg flex items-center justify-center p-2 md:p-3 
                          aspect-square shadow-md cursor-pointer transition-all duration-300
                          hover:-translate-y-1 hover:shadow-rose-500/30 hover:shadow-lg
                          ${isActive 
                            ? 'opacity-100 scale-105 border border-rose-500/50 shadow-rose-500/20 shadow-md' 
                            : (isHoveredState ? 'opacity-40 scale-95 grayscale' : 'opacity-70 scale-95')
                          }
                        `}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          title={tech.name}
                          className="w-[85%] h-[85%] object-contain transition-transform duration-300"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Page indicator dots */}
              <div className="flex justify-center gap-2 mt-6">
                <button 
                  onClick={() => {
                    if (page === 0) return;
                    setIsFading(true);
                    setTimeout(() => {
                      setPage(0);
                      setActiveIndex(0);
                      setIsFading(false);
                    }, 400);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${page === 0 ? 'bg-rose-500 w-4' : 'bg-zinc-700 w-2'}`}
                  aria-label="Tech Stack Page 1"
                />
                <button 
                  onClick={() => {
                    if (page === 1) return;
                    setIsFading(true);
                    setTimeout(() => {
                      setPage(1);
                      setActiveIndex(0);
                      setIsFading(false);
                    }, 400);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${page === 1 ? 'bg-rose-500 w-4' : 'bg-zinc-700 w-2'}`}
                  aria-label="Tech Stack Page 2"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Embedded styles for fadeIn animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
