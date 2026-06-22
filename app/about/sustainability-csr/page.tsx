
"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AboutCTA } from "@/sections/about/AboutCTA";
import {
  Leaf,
  Cpu,
  TrendingDown,
  Trees,
  Zap,
  Sparkles,
  ShieldCheck,
  Check,
  Globe,
  ArrowUpRight,
  Mail,
  User,
  Building,
  MapPin,
  ChevronDown
} from "lucide-react";



export default function CSRPage() {
  const [cloudBudget, setCloudBudget] = useState(25000);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [auditData, setAuditData] = useState({ name: "", email: "", company: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Realistic carbon and energy savings logic
  const co2Saved = ((cloudBudget * 12 * 0.0005) * 0.45).toFixed(1);
  const treesPlanted = Math.round(Number(co2Saved) * 45);
  const coalPrevented = Math.round(Number(co2Saved) * 1102); // ~1102 lbs of coal burned per ton of CO2

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auditData.name && auditData.email) {
      setAuditSubmitted(true);
      // Auto reset for demo purposes
      setTimeout(() => {
        setAuditSubmitted(false);
        setAuditData({ name: "", email: "", company: "" });
      }, 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How does cloud optimization reduce our corporate carbon footprint?",
      a: "Optimizing cloud assets reduces energy consumption at the underlying physical data centers, which directly prevents greenhouse gas emissions from non-renewable energy grids that power them."
    },
    {
      q: "What does the free green cloud audit include?",
      a: "Our certified systems engineers analyze your hosting telemetry, identify idle VM resource rates, estimate potential carbon cuts, and provide a clear optimization action plan to reduce both waste compute and monthly costs."
    },
    {
      q: "How do you calculate our projected tree plantation offsets?",
      a: "We use standard Greenhouse Gas (GHG) Protocols to convert saved CPU kilowatt-hours to equivalent metric tons of CO₂, then map that directly to verified ecological absorption capacity."
    },
    {
      q: "Is there any performance cost to running eco-conscious infrastructure?",
      a: "None at all. By utilizing modern serverless patterns, aggressive autoscaling, and efficient containerization, we actually improve application response times and scale seamlessly to meet demand spikes."
    }
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      <title>Sustainability & CSR | Devopstrio</title>
      <meta name="description" content="Our environmental pledge to green cloud hosting and community engineering initiatives." />
      <link rel="canonical" href="https://devopstrio.co.uk/about/sustainability-csr" />
      {/* Background Animated Elements */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 85%)"
        }}
      />
      <div className="absolute top-[-100px] left-[25%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] blur-[60px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(231,158,87,0.06)_0%,transparent_70%)] blur-[80px] pointer-events-none z-0" />

      {/* BRAND NEW HERO SECTION (SPLIT SCREEN FOREST THEME) */}
      <section className="relative pt-32 pb-20 lg:py-0 lg:min-h-[90vh] flex items-center border-b border-zinc-900/60 overflow-hidden">
        {/* Full-bleed background forest container on right */}
        <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[55vw] h-full z-[1] pointer-events-none overflow-hidden opacity-25 lg:opacity-100">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop"
            alt="Misty deep green pine forest wilderness"
            className="w-full h-full object-cover opacity-90 brightness-[0.65] contrast-[1.1] saturate-[0.9]"
          />
          {/* Smudge mask to blend left into black */}
          <div
            className="absolute inset-0 z-20 hidden lg:block"
            style={{
              background: "linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.95) 15%, rgba(0, 0, 0, 0.25) 60%, transparent 100%), linear-gradient(to top, #000000 0%, transparent 20%)"
            }}
          />
          {/* Mobile bottom fade mask */}
          <div className="absolute inset-0 z-20 lg:hidden" style={{ background: "linear-gradient(to top, #000000 0%, transparent 50%)" }} />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Column */}
            <div className="flex flex-col justify-center">
              <Reveal>
                <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] tracking-tight text-white mb-6">
                  We can save our <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">
                    Environment.
                  </span>
                </h1>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-10 font-medium">
                  Clean code and zero-emission digital infrastructure are paramount to a sustainable future.
                  Devopstrio is committed to helping global enterprises architect hyper-efficient, carbon-conscious
                  cloud ecosystems that optimize both hardware waste and environmental scale.
                </p>

                {/* Two buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <button
                    onClick={() => document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center justify-center bg-orange-400 hover:bg-white text-black font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(231,158,87,0.2)] hover:shadow-[0_12px_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                  >
                    Request Audit
                  </button>
                  <button
                    onClick={() => document.getElementById("csr-section")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300"
                  >
                    Our History
                  </button>
                </div>

                {/* Coordinates bottom row */}
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-2.5 text-[13px] text-zinc-400 font-medium">
                    <Mail className="w-4 h-4 text-emerald-500" />
                    <span>sustainability@devopstrio.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-zinc-400 font-medium">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>Silicon Valley, California</span>
                  </div>
                </div>
              </Reveal>
            </div>
            {/* Empty Right Column spacer */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TOP FOUR STATS CARDS */}
      <section className="py-16 relative z-10 border-b border-zinc-900/60 bg-black">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <Reveal delay={0.05} className="bg-zinc-950/60 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col gap-3">
              <h3 className="text-[42px] font-bold text-white leading-none">98%</h3>
              <h5 className="text-[15px] font-bold text-emerald-500 leading-tight">Cloud Optimization Efficiency</h5>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">Achieved across all cloud environments and enterprise workloads.</p>
            </Reveal>

            <Reveal delay={0.1} className="bg-gradient-to-br from-[#047857] to-[#064e3b] border border-emerald-500/30 shadow-[0_15px_30px_rgba(16,185,129,0.15)] rounded-2xl p-8 backdrop-blur-md hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_18px_40px_rgba(16,185,129,0.25)] transition-all duration-300 flex flex-col gap-3">
              <h3 className="text-[42px] font-bold text-white leading-none">565t+</h3>
              <h5 className="text-[15px] font-bold text-white leading-tight">Annual CO₂ Saved</h5>
              <p className="text-[13px] text-white/75 leading-relaxed font-medium">Prevented through serverless orchestration and green grid scheduling.</p>
            </Reveal>

            <Reveal delay={0.15} className="bg-zinc-950/60 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col gap-3">
              <h3 className="text-[42px] font-bold text-white leading-none">36k+</h3>
              <h5 className="text-[15px] font-bold text-emerald-500 leading-tight">Trees Planted</h5>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">Through our verified 'One Migration, One Tree' reforestation program.</p>
            </Reveal>

            <Reveal delay={0.2} className="bg-zinc-950/60 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col gap-3">
              <h3 className="text-[42px] font-bold text-white leading-none">100%</h3>
              <h5 className="text-[15px] font-bold text-emerald-500 leading-tight">Offset Operations</h5>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-medium">Remote-first workforce and fully balanced operational footprints.</p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SECTION 2: COMPREHENSIVE GREEN CLOUD SERVICES */}
      <section id="csr-section" className="py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

          <div className="flex flex-col items-center text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Leaf className="w-3.5 h-3.5 animate-[pulse_3s_infinite]" />
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Comprehensive Green Cloud Services</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.1fr_0.95fr] gap-10 items-center">
            {/* Left Image */}
            <Reveal delay={0.1} className="relative h-[380px] rounded-[120px_120px_24px_24px] border border-zinc-800 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] group order-2 lg:order-1 max-w-[480px] lg:max-w-none mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
                alt="Green cloud operations team"
                className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
              />
            </Reveal>

            {/* Middle Content */}
            <div className="flex flex-col gap-8 order-1 lg:order-2 text-center lg:text-left">
              <Reveal delay={0.15}>
                <p className="text-[15px] leading-relaxed text-zinc-400 font-medium m-0">
                  Discover a wide range of high-efficiency green infrastructure designs engineered to reduce digital waste. We take pride in delivering innovative cloud orchestration solutions that help you achieve optimal scaling in your production environments, whether you are a growing startup or a global enterprise.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[500px] lg:max-w-none mx-auto w-full">
                <Reveal delay={0.2} className="rounded-2xl p-5 flex flex-col justify-center items-center text-center h-[160px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] bg-[#047857] text-white border border-emerald-500/20">
                  <h4 className="text-2xl font-bold mb-2">5+ Years</h4>
                  <p className="text-[11.5px] font-bold leading-snug opacity-85">Of Experience In Green DevOps</p>
                </Reveal>
                <Reveal delay={0.25} className="rounded-2xl p-5 flex flex-col justify-center items-center text-center h-[160px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] bg-amber-500 text-black border border-amber-500/20">
                  <h4 className="text-2xl font-bold mb-2">100%</h4>
                  <p className="text-[11.5px] font-bold leading-snug opacity-85">Carbon Neutral Workloads</p>
                </Reveal>
              </div>
            </div>

            {/* Right Image */}
            <Reveal delay={0.3} className="relative h-[380px] rounded-[24px_24px_120px_120px] border border-zinc-800 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] group order-3 max-w-[480px] lg:max-w-none mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1000&auto=format&fit=crop"
                alt="Sustainable software optimization"
                className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
              />
            </Reveal>
          </div>

        </div>
      </section>

      {/* SECTION 3: EXPLORE OUR ECO-FRAMEWORKS */}
      <section className="py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-14 items-center">

            {/* Left Box */}
            <Reveal delay={0.1} className="relative bg-emerald-500/[0.03] border border-emerald-500/10 rounded-3xl p-10 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 group">
              <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] blur-[40px] pointer-events-none" />

              <div className="w-[60px] h-[60px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-8">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-3xl font-bold leading-snug mb-4">Explore Our Green Frameworks</h3>
              <p className="text-[14.5px] leading-relaxed text-zinc-400 font-medium mb-10">
                Discover high-performance green architectures designed to optimize computing waste.
              </p>

              <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110 group-hover:bg-white">
                <ArrowUpRight className="w-[18px] h-[18px] stroke-[2.5px]" />
              </div>
            </Reveal>

            {/* Right List Box */}
            <div className="flex flex-col gap-8">
              {[
                { num: "1", title: "Serverless & Microservices", desc: "Utilize event-driven models that automatically scale down to zero idle compute capacity." },
                { num: "2", title: "Autoscaling & Resource Allocation", desc: "Dynamically size VM instances in real-time, eliminating redundant server runtime." },
                { num: "3", title: "Carbon-Conscious Workloads", desc: "Intelligently schedule high-compute tasks to align with peak renewable energy availability." }
              ].map((item, idx) => (
                <Reveal delay={0.15 + (idx * 0.05)} key={idx} className="flex gap-6 items-start transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-base font-bold text-zinc-300 shrink-0 transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-500">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-zinc-400 font-medium">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR & SIMULATOR SECTION */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-stretch">

            {/* Calculator Left: Slider controls */}
            <Reveal delay={0.1} className="bg-zinc-950/60 border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[1.5px] text-orange-400 font-bold mb-3 block">Interactive Tool</span>
                <h2 className="text-3xl md:text-[32px] font-bold mb-4">Cloud Carbon Estimator</h2>
                <p className="text-sm leading-[1.6] text-zinc-400 font-medium mb-8">
                  Adjust the slider below to estimate your organization's monthly hosting expenditure and preview the structural environmental advantages of eco-optimized infrastructure.
                </p>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 mb-8">
                  <div className="flex justify-between items-center font-bold text-[15px] mb-5">
                    <span>Monthly Spend</span>
                    <span className="text-[22px] font-bold text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]">${cloudBudget.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="200000"
                    step="2000"
                    value={cloudBudget}
                    onChange={(e) => setCloudBudget(Number(e.target.value))}
                    className="w-full appearance-none h-1.5 rounded bg-white/10 outline-none cursor-pointer mb-3 accent-emerald-500"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-bold">
                    <span>$2k</span>
                    <span>$100k</span>
                    <span>$200k+</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                  {[
                    "Up to 50% decrease in waste compute idle times",
                    "Automatic scaling to zero during off-peak hours",
                    "Migrated workloads scheduled for green energy grids"
                  ].map((point, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3.5px]" />
                      </span>
                      <p className="text-[13.5px] text-zinc-300 font-medium m-0">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Calculator Right: Output Metrics */}
            <Reveal delay={0.2} className="relative bg-zinc-950/40 border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              {/* Internal glow border effect */}
              <div className="absolute inset-0 rounded-3xl border border-transparent [background:linear-gradient(135deg,rgba(16,185,129,0.15),transparent_70%)_border-box] [-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] mask-composite-exclude pointer-events-none" />

              <div className="absolute top-[-100px] right-[-100px] w-[280px] h-[280px] bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)] blur-[40px] pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">Projected Annual Savings</h3>

                <div className="bg-gradient-to-br from-[rgba(231,158,87,0.08)] to-[rgba(16,185,129,0.04)] border border-orange-400/15 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-6 text-center sm:text-left">
                  <div className="w-[54px] h-[54px] rounded-full bg-orange-400/10 text-orange-400 flex items-center justify-center text-2xl shrink-0">
                    <Trees className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-orange-400 mb-1 leading-tight">🌲 {treesPlanted.toLocaleString()} Trees</h4>
                    <p className="text-xs leading-[1.4] text-zinc-400 font-medium m-0">Equivalent ecological absorption capacity over a 10-year period.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <div className="w-[38px] h-[38px] rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3.5">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h5 className="text-xl font-bold mb-1">{co2Saved} Tons</h5>
                    <p className="text-[11px] text-zinc-500 font-bold m-0 uppercase tracking-wide">Annual CO₂ Saved</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-5">
                    <div className="w-[38px] h-[38px] rounded-lg bg-[#522c72]/20 text-[#c23681] flex items-center justify-center mb-3.5">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                    <h5 className="text-xl font-bold mb-1">{coalPrevented.toLocaleString()} lbs</h5>
                    <p className="text-[11px] text-zinc-500 font-bold m-0 uppercase tracking-wide">Coal Burn Prevented</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 border-t border-white/10 pt-5 relative z-10">
                <ShieldCheck className="text-zinc-600 w-4 h-4 shrink-0" />
                <p className="text-[11px] text-zinc-500 font-medium m-0">Calculations adhere to GHG Protocols and certified carbon offsets.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT DETAILS (OUR OPERATIONAL IMPACT) */}
      <section className="py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

          <Reveal>
            <div className="flex mb-3">
              <span className="bg-orange-400/10 border border-orange-400/20 text-orange-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Our Sustainable Impact</span>
            </div>
            <h2 className="text-3xl md:text-[38px] font-bold tracking-tight mb-12">We're Leaders in Zero-Waste Digital Solutions</h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-14 items-center">
            {/* Left Image Box */}
            <Reveal delay={0.1} className="relative h-[420px] lg:h-[480px] rounded-3xl border border-zinc-800 overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)] max-w-[600px] lg:max-w-none mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop"
                alt="Zero waste technology forest"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 w-[54px] h-[54px] rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-[0_10px_20px_rgba(16,185,129,0.3)]">
                <Leaf className="w-[22px] h-[22px] animate-[leafPulse_3s_infinite_ease-in-out]" />
              </div>
            </Reveal>

            {/* Right Info Box */}
            <div className="flex flex-col items-start lg:items-start items-center text-center lg:text-left">
              <Reveal delay={0.15}>
                <p className="text-[15.5px] leading-[1.65] text-zinc-400 font-medium m-0 mb-7">
                  We engineer hyper-efficient cloud ecosystems that merge peak system performance with minimal environmental impact. Our designs guarantee cost reduction alongside carbon compliance.
                </p>

                <button
                  onClick={() => document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center bg-orange-400 hover:bg-white text-black font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(231,158,87,0.2)] hover:shadow-[0_12px_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 mb-11"
                >
                  Request Green Audit
                </button>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full border-t border-zinc-800 pt-10 text-left">
                {[
                  { icon: <Cpu className="w-[18px] h-[18px]" />, color: "text-emerald-500", bg: "bg-emerald-500/10", title: "Green Compute Architecture", desc: "Deploy automated resource scaling that slashes monthly hosting expenses by up to 40%." },
                  { icon: <TrendingDown className="w-[18px] h-[18px]" />, color: "text-rose-500", bg: "bg-rose-500/10", title: "GHG Certified Reporting", desc: "Generate production-grade greenhouse gas carbon emission reports for compliance audits." },
                  { icon: <Trees className="w-[18px] h-[18px]" />, color: "text-emerald-500", bg: "bg-emerald-500/10", title: "Ecosystem Restoration", desc: "Every automated workload migration actively funds verified reforestation." },
                  { icon: <Globe className="w-[18px] h-[18px]" />, color: "text-orange-400", bg: "bg-orange-400/10", title: "Sustainable Goals Alignment", desc: "Ensure your technology stack directly aligns with international ESG and SDG frameworks." }
                ].map((item, idx) => (
                  <Reveal delay={0.2 + (idx * 0.05)} key={idx} className="flex gap-4 items-start">
                    <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-bold text-white mb-1.5">{item.title}</h4>
                      <p className="text-[12.5px] leading-[1.5] text-zinc-400 font-medium m-0">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ SECTION */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/60 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

          <div className="flex flex-col items-center text-center mb-14">
            <Reveal>
              <span className="inline-flex bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-3">FAQ</span>
              <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white">Frequently Answered Questions</h2>
            </Reveal>
          </div>

          <div className="max-w-[800px] mx-auto flex flex-col gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal delay={0.1 + (index * 0.05)} key={index}>
                  <div className={`bg-zinc-950/60 border ${isOpen ? 'border-emerald-500/30 shadow-[0_10px_25px_rgba(0,0,0,0.3)]' : 'border-zinc-800'} rounded-2xl overflow-hidden transition-all duration-300`}>
                    <button
                      className="w-full bg-transparent border-none px-8 py-6 flex justify-between items-center text-white text-base md:text-[16px] font-bold text-left cursor-pointer transition-all duration-300"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className={isOpen ? "text-emerald-500" : ""}>{faq.q}</span>
                      <ChevronDown className={`w-[18px] h-[18px] shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-500" : "text-zinc-500"}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="min-h-0">
                        <p className="px-8 pb-6 m-0 text-[14.5px] leading-[1.6] text-zinc-400 font-medium">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIT CALL TO ACTION FORM */}
      <section id="audit-form" className="py-20 lg:py-[120px] bg-black relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">

          <Reveal>
            <div className="relative bg-zinc-950/60 border border-zinc-800 rounded-[28px] p-10 md:p-[60px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center backdrop-blur-md overflow-hidden">
              {/* Inner glow border */}
              <div className="absolute inset-0 rounded-[28px] border border-transparent [background:linear-gradient(135deg,rgba(16,185,129,0.15),transparent_70%)_border-box] [-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] mask-composite-exclude pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-[28px] md:text-[36px] font-bold leading-tight mb-5 tracking-tight">Request a Free Green Cloud Audit</h2>
                <p className="text-[15px] leading-[1.6] text-zinc-400 font-medium mb-8">
                  Ready to cut down cloud waste and establish carbon transparency? Our certified systems engineers will run a comprehensive diagnostic on your hosting structure and provide a thorough optimization plan.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3.5px]" />
                    </span>
                    <span className="text-[14.5px] font-bold text-zinc-200">Analyze idle virtual machine rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3.5px]" />
                    </span>
                    <span className="text-[14.5px] font-bold text-zinc-200">Calculate projected carbon tonnage cuts</span>
                  </div>
                </div>
              </div>

              <div className="w-full relative z-10">
                {!auditSubmitted ? (
                  <form onSubmit={handleAuditSubmit} className="flex flex-col gap-5">
                    <div className="relative w-full group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={auditData.name}
                        onChange={(e) => setAuditData({ ...auditData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-[54px] pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      />
                    </div>

                    <div className="relative w-full group">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
                      <input
                        type="email"
                        placeholder="Corporate Email"
                        required
                        value={auditData.email}
                        onChange={(e) => setAuditData({ ...auditData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-[54px] pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      />
                    </div>

                    <div className="relative w-full group">
                      <Building className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={auditData.company}
                        onChange={(e) => setAuditData({ ...auditData, company: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-[54px] pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all focus:border-emerald-500/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#10b981] border-none text-[15px] font-bold text-black py-[18px] rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(16,185,129,0.35)] hover:bg-white group"
                    >
                      <span className="group-hover:text-black">Submit Request</span>
                      <ArrowUpRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 px-5 bg-white/[0.01] border border-dashed border-white/10 rounded-[20px] flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
                    <div className="w-[60px] h-[60px] rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center text-[26px] mb-6 animate-[bounce_2s_infinite]">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Audit Requested!</h3>
                    <p className="text-[14px] leading-[1.6] text-zinc-400 font-medium max-w-[380px] m-0">
                      Thank you, <span className="font-bold text-white">{auditData.name}</span>. Our eco-infrastructure experts will analyze your request and reach out within 24 business hours to schedule your green cloud evaluation.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Global CTA Section matching the rest of the site */}
      <AboutCTA />

    </main>
  );
}
