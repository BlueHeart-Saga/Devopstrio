"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { RepresentativeCTA } from "@/components/ui/RepresentativeCTA";
import {
  Leaf,
  Sun,
  ShieldCheck,
  Globe,
  Trees,
  TrendingDown,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Building2,
  Mail,
  User,
  Building,
  Check,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import Link from "next/link";

export default function CSRPage() {
  const [cloudBudget, setCloudBudget] = useState(25000);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [auditData, setAuditData] = useState({ name: "", email: "", company: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Carbon calculator logic
  const co2Saved = ((cloudBudget * 12 * 0.0005) * 0.45).toFixed(1);
  const treesPlanted = Math.round(Number(co2Saved) * 45);
  const coalPrevented = Math.round(Number(co2Saved) * 1102);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auditData.name && auditData.email) {
      setAuditSubmitted(true);
      setTimeout(() => {
        setAuditSubmitted(false);
        setAuditData({ name: "", email: "", company: "" });
      }, 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const focusAreas = [
    {
      icon: <Sun className="w-7 h-7 text-emerald-400" />,
      title: "Clean Energy",
      desc: "Promoting renewable energy solutions and zero-carbon grid computing for a cleaner tomorrow."
    },
    {
      icon: <Trees className="w-7 h-7 text-emerald-400" />,
      title: "Protect Nature",
      desc: "Conserving forests, wildlife habitats, and biodiversity through verified reforestation programs."
    },
    {
      icon: <TrendingDown className="w-7 h-7 text-emerald-400" />,
      title: "Reduce Emissions",
      desc: "Architecting serverless ecosystems that reduce corporate carbon footprints and idle compute waste."
    },
    {
      icon: <Users className="w-7 h-7 text-emerald-400" />,
      title: "Green Communities",
      desc: "Empowering tech communities worldwide to build sustainable, energy-efficient software estates."
    }
  ];

  const projects = [
    {
      title: "Reforestation Drive",
      desc: "Planting native trees to restore protected forests and absorb legacy industrial emissions.",
      image: "/webp/assets/About-page/csr/csr_proj_reforestation.webp",
      badge: "36,000+ Trees"
    },
    {
      title: "Solar Grid Access",
      desc: "Powering remote engineering nodes with clean, 100% renewable solar energy systems.",
      image: "/webp/assets/About-page/csr/csr_proj_solar_grid.webp",
      badge: "100% Renewable"
    },
    {
      title: "Ocean Cleanup Drive",
      desc: "Removing plastic waste and protecting marine habitats across global coastlines.",
      image: "/webp/assets/About-page/csr/csr_proj_ocean_cleanup.webp",
      badge: "Clean Oceans"
    },
    {
      title: "Sustainable Smart Cities",
      desc: "Building eco-conscious cloud architectures for resilient public sector infrastructure.",
      image: "/webp/assets/About-page/csr/csr_proj_sustainable_city.webp",
      badge: "707+ Communities"
    }
  ];

  const testimonials = [
    {
      quote: "Being part of this green tech movement has given our enterprise true purpose. Together, we can achieve real carbon neutral scale.",
      name: "Ayesha Rahman",
      role: "Sustainability Lead"
    },
    {
      quote: "We've seen the direct positive impact Devopstrio's green cloud audits have on our cloud budget and carbon reporting. It's life-changing.",
      name: "Daniel Smith",
      role: "VP of Engineering"
    },
    {
      quote: "Every small optimization counts. Proud to partner with an organization that genuinely cares for our planet's future.",
      name: "Priya Sharma",
      role: "ESG Director"
    }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-[-100px] left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(4,120,87,0.06)_0%,transparent_70%)] blur-[140px] pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#030303] text-white py-20 px-6 lg:px-12 z-10 font-sans border-b border-zinc-900">
        
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img src="/webp/assets/About-page/csr/hero-sustainability-bg.webp" 
            alt="Sustainability Background"
            className="w-full h-full object-cover object-center opacity-90 filter contrast-110 brightness-105"
          loading="lazy" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/80 z-10" />
          
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_70%)] blur-[140px] z-10" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 my-auto">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-semibold leading-[1.1] tracking-tight text-white mb-6 font-sans [text-shadow:_0_4px_30px_rgb(0_0_0_/_95%)] drop-shadow-[0_15px_30px_rgba(0,0,0,1)]">
                Act Today <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 font-semibold drop-shadow-[0_0_35px_rgba(16,185,129,0.8)]">
                  For a Better Tomorrow
                </span>
              </h1>

              <div className="mt-8">
                <button
                  onClick={() => document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                >
                  Explore Projects
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. FOCUS AREAS */}
      <section className="py-16 sm:py-24 bg-black border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 font-sans">
                Building a Sustainable <span className="text-emerald-400 font-semibold">Future for All.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, idx) => (
              <Reveal key={area.title} delay={idx * 0.1}>
                <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-emerald-950/40 group-hover:border-emerald-700/50 transition-all duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-emerald-400 transition-colors mb-3">
                      {area.title}
                    </h3>
                    <p className="text-base text-zinc-200 font-normal leading-relaxed font-sans">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 3. IMPACT STATS & GALLERY */}
      <section className="py-16 sm:py-24 bg-[#041d14] relative border-b border-emerald-900/40 overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Impact Left Stats List */}
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3 font-sans">
                  Together, <br />
                  <span className="text-emerald-400 font-semibold">We Create Impact</span>
                </h2>
                <p className="text-lg text-emerald-100 leading-relaxed mb-8 font-normal font-sans">
                  Every action, no matter how small, brings us closer to a sustainable future.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-3xl sm:text-4xl font-bold text-white font-mono block leading-none mb-1">8,705</span>
                      <span className="text-base font-semibold text-emerald-300 font-sans">Volunteers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                      <Trees className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-3xl sm:text-4xl font-bold text-white font-mono block leading-none mb-1">9,450</span>
                      <span className="text-base font-semibold text-emerald-300 font-sans">Trees Planted</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-3xl sm:text-4xl font-bold text-white font-mono block leading-none mb-1">380</span>
                      <span className="text-base font-semibold text-emerald-300 font-sans">Campaigns</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-3xl sm:text-4xl font-bold text-white font-mono block leading-none mb-1">707</span>
                      <span className="text-base font-semibold text-emerald-300 font-sans">Communities</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Impact Right 3 Stacked Generated Image Rows */}
            <div className="lg:col-span-7">
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl overflow-hidden border border-emerald-800/60 h-48 sm:h-52 w-full group">
                    <img src="/webp/assets/About-page/csr/csr_impact_plant_seedling1.webp"
                      alt="Volunteer holding seedling"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" />
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-emerald-800/60 h-48 sm:h-52 w-full group">
                    <img src="/webp/assets/About-page/csr/csr_impact_save_planet1.webp"
                      alt="Volunteers holding SAVE PLANET sign"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" />
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-emerald-800/60 h-48 sm:h-52 w-full group">
                    <img src="/webp/assets/About-page/csr/csr_impact_river_forest.webp"
                      alt="Rainforest river landscape"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" />
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FEATURED INITIATIVES */}
      <section id="projects-section" className="py-16 sm:py-24 bg-black border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 font-sans">
                Projects Driving <span className="text-emerald-400 font-semibold">Real Change.</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((proj, idx) => (
              <Reveal key={proj.title} delay={idx * 0.1}>
                <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <div className="h-44 w-full relative overflow-hidden">
                      <img src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy" />
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-md text-emerald-400 font-bold text-sm font-mono">
                        {proj.badge}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-emerald-400 transition-colors mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-base text-zinc-200 font-normal leading-relaxed font-sans">
                        {proj.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CLIMATE ACTION SUPPORT BANNER */}
    

      {/* 6. WHAT'S HAPPENING IN THE MOVEMENT */}
      <section className="py-16 sm:py-24 bg-black border-b border-zinc-900 relative font-sans">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-zinc-900 pb-6">
            <Reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
                  In the <span className="text-emerald-400 font-semibold">Movement</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/insights/news" className="text-base font-bold text-emerald-400 hover:text-emerald-300 font-mono tracking-wider uppercase mt-4 sm:mt-0 flex items-center gap-1">
                View All News &rarr;
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: 3 News List Items */}
            <div className="lg:col-span-7 space-y-6">
              {[
                {
                  date: "MAY 20, 2026",
                  title: "Global Climate Summit 2026",
                  desc: "World leaders and enterprise partners unite to accelerate zero-carbon computing action.",
                  image: "/webp/assets/About-page/csr/csr_news_climate_summit.webp"
                },
                {
                  date: "MAY 25, 2026",
                  title: "Youth for Climate Rally",
                  desc: "Thousands of young voices and engineers demand a greener digital tomorrow.",
                  image: "/webp/assets/About-page/csr/csr_news_youth_rally.webp"
                },
                {
                  date: "MAY 28, 2026",
                  title: "New Report: Climate Progress",
                  desc: "Key insights, telemetry, and verified data on global corporate carbon reduction.",
                  image: "/webp/assets/About-page/csr/csr_news_climate_report.webp"
                }
              ].map((news, idx) => (
                <Reveal key={news.title} delay={idx * 0.1}>
                  <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all duration-300 group cursor-pointer">
                    <div className="w-full sm:w-48 h-36 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                      <img src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-bold text-emerald-400 font-mono tracking-widest block mb-1.5">
                        {news.date}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-emerald-400 transition-colors mb-2">
                        {news.title}
                      </h3>
                      <p className="text-base text-zinc-200 font-normal leading-relaxed font-sans">
                        {news.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Column: Newsletter & Quote Card */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Newsletter Box */}
              <Reveal delay={0.2}>
                <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white font-sans mb-3">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-base text-zinc-200 font-normal leading-relaxed mb-6 font-sans">
                    Get the latest updates on our sustainability projects and CSR initiatives.
                  </p>
                  
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3.5 px-4 text-base text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3.5 px-4 text-base text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500"
                    />
                    <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-base py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(16,185,129,0.2)]">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </Reveal>

              {/* Quote Box */}
              <Reveal delay={0.3}>
                <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-2xl p-6 sm:p-8 relative">
                  <p className="text-lg text-zinc-100 italic leading-relaxed mb-4 font-sans">
                    &ldquo;The earth does not belong to us: we belong to the earth.&rdquo;
                  </p>
                  <span className="text-sm font-bold text-emerald-400 font-mono tracking-wider block uppercase">
                    &mdash; Chief Seattle
                  </span>
                </div>
              </Reveal>

            </div>

          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-black border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 font-sans">
                Our Amazing <span className="text-emerald-400 font-semibold">Community</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Reveal key={t.name} delay={idx * 0.1}>
                <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300 h-full flex flex-col justify-between">
                  <p className="text-lg text-zinc-200 italic leading-relaxed mb-6 font-sans">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 border-t border-zinc-900 pt-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-bold text-base font-mono">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-sans">{t.name}</h4>
                      <p className="text-sm text-zinc-400 font-sans">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 8. AUDIT FORM */}
      <section id="audit-form" className="py-16 sm:py-24 bg-[#030303] border-b border-zinc-900 relative">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">

          <Reveal>
            <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-sans">Request a Free Green Cloud Audit</h2>
                <p className="text-lg text-zinc-200 leading-relaxed mb-8 font-sans">
                  Ready to cut down cloud waste and establish carbon transparency? Our certified systems engineers will run a diagnostic on your hosting structure and provide a thorough optimization plan.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-base sm:text-lg text-zinc-200 font-medium font-sans">Analyze idle virtual machine rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-base sm:text-lg text-zinc-200 font-medium font-sans">Calculate projected carbon tonnage cuts</span>
                  </div>
                </div>
              </div>

              <div>
                {!auditSubmitted ? (
                  <form onSubmit={handleAuditSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={auditData.name}
                        onChange={(e) => setAuditData({ ...auditData, name: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-base text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="email"
                        placeholder="Corporate Email"
                        required
                        value={auditData.email}
                        onChange={(e) => setAuditData({ ...auditData, email: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-base text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={auditData.company}
                        onChange={(e) => setAuditData({ ...auditData, company: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-base text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(16,185,129,0.2)]"
                    >
                      Submit Request
                    </button>
                  </form>
                ) : (
                  <div className="text-center p-8 bg-zinc-900/60 border border-emerald-500/40 rounded-2xl">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Audit Requested!</h3>
                    <p className="text-lg text-zinc-200 font-sans">
                      Thank you, <span className="font-bold text-white">{auditData.name}</span>. Our eco-infrastructure experts will analyze your request and reach out within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 9. Representative CTA */}
      <RepresentativeCTA
        theme="emerald"
        title="Join Our Sustainability & CSR"
        highlightText="Impact Initiatives?"
        description="Partner with Devopstrio to drive sustainable computing, eco-responsible data infrastructure, and community empowerment initiatives worldwide."
        primaryBtnText="EXPLORE CSR PROJECTS"
        primaryBtnHref="#projects"
        secondaryBtnText="PARTNER WITH US"
        secondaryBtnHref="/contact#contact-form"
      />

    </main>
  );
}
