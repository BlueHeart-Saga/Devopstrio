"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AboutCTA } from "@/sections/about/AboutCTA";
import { 
  Globe, Leaf, Cpu, Award, Trees, TrendingDown, 
  CheckCircle2, ChevronDown, ChevronUp, Check, 
  ArrowRight, Calculator, Zap, Shield, Sparkles 
} from "lucide-react";

export default function SustainabilityCsrPage() {
  // Cloud Carbon Estimator State
  const [cloudSpend, setCloudSpend] = useState<number>(25000);
  
  // Interactive FAQ State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form Submission State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });

  // Estimator Calculations
  const calculatedTrees = Math.round(cloudSpend * 0.1214);
  const calculatedCarbon = (cloudSpend * 0.0027).toFixed(1);
  const calculatedWaste = Math.round(cloudSpend * 2.972).toLocaleString();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", website: "" });
    }, 3000);
  };

  const faqData = [
    {
      q: "How does cloud optimization reduce our corporate carbon footprint?",
      a: "Optimizing cloud resources consolidation means turning off idle servers, utilizing right-sized virtual machines, and implementing auto-scaling policies. By reducing the physical hardware needed at hyperscaler data centers (AWS, GCP, Azure), you directly lower the energy draw, cooling demands, and overall carbon emissions required to support your services."
    },
    {
      q: "What does the free green cloud audit include?",
      a: "Our green cloud audit includes a detailed examination of your cloud infrastructure configuration, CPU utilization averages, and deployment patterns. We deliver a custom impact report highlighting resource inefficiencies, carbon offset opportunities, and an estimated projection of metric tons of carbon (and costs) you could save annually."
    },
    {
      q: "How do you calculate our projected tree plantation offsets?",
      a: "Our calculations utilize industry standards established by the Greenhouse Gas Protocol and the EPA's Greenhouse Gas Equivalencies Calculator. We map server electricity draw against local grid mix factors to calculate metric tons of CO2. Vetted reforestation data indicates that one mature tree absorbs approximately 48 lbs (22 kg) of CO2 per year, which we translate into equivalent tree offsets."
    },
    {
      q: "Are there any performance trade-offs when migrating to green cloud infrastructures?",
      a: "No. Green cloud engineering focuses on removing resource waste, improving caching layers, and choosing carbon-conscious regions. In most cases, optimizing your system runtime improves server load response times and increases application performance, all while reducing billing expenses and carbon emissions."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16 font-sans select-text">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        {/* Misty Forest Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ 
            backgroundImage: "url('/assets/sustainability/misty_pine_forest.png')",
            filter: "brightness(0.24) contrast(1.1)"
          }}
        />
        {/* Ambient Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10 text-center flex flex-col items-center">
          <Reveal>
            <span className="text-[10px] font-mono tracking-[0.25em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-4 py-1.5 rounded-full uppercase font-bold mb-6 inline-block">
              // Corporate Social Responsibility
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6 max-w-4xl text-white">
              We can save our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                Environment.
              </span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Devopstrio combines high-performance cloud co-engineering with carbon-aware runtimes. We help enterprises optimize workloads to reduce billing, lower server loads, and prevent ecological degradation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button 
                onClick={() => {
                  const estimatorEl = document.getElementById("carbon-estimator");
                  estimatorEl?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02] cursor-pointer"
              >
                <Calculator size={14} /> Try Our Tools
              </button>
              <button 
                onClick={() => {
                  const infoEl = document.getElementById("green-services");
                  infoEl?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                Our History
              </button>
            </div>

            {/* Checkmark sub-bullet indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Collaborative Reforestation
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Green Cloud Runtimes
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Key Statistics Grid */}
      <section className="py-12 bg-black relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <Reveal delay={0.05} className="bg-zinc-950/40 border border-zinc-900/60 rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300">
              <span className="block text-4xl md:text-5xl font-black text-white font-mono mb-2">98%</span>
              <h4 className="text-xs font-bold text-emerald-400 mb-1">Cloud Optimization Efficiency</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Resource consolidation methodologies reducing redundant cloud instances.</p>
            </Reveal>

            <Reveal delay={0.1} className="bg-emerald-950/20 border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.02] blur-xl rounded-full" />
              <span className="block text-4xl md:text-5xl font-black text-emerald-400 font-mono mb-2">565t+</span>
              <h4 className="text-xs font-bold text-white mb-1">Annual CO2 Saved</h4>
              <p className="text-[11px] text-zinc-450 leading-relaxed">Estimated greenhouse gases prevented across our client architecture instances.</p>
            </Reveal>

            <Reveal delay={0.15} className="bg-zinc-950/40 border border-zinc-900/60 rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300">
              <span className="block text-4xl md:text-5xl font-black text-white font-mono mb-2">36k+</span>
              <h4 className="text-xs font-bold text-emerald-400 mb-1">Trees Planted</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Through partnerships and vetted reforestation initiatives worldwide.</p>
            </Reveal>

            <Reveal delay={0.2} className="bg-zinc-950/40 border border-zinc-900/60 rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300">
              <span className="block text-4xl md:text-5xl font-black text-white font-mono mb-2">100%</span>
              <h4 className="text-xs font-bold text-emerald-400 mb-1">Carbon Neutral Operations</h4>
              <p className="text-[11px] text-zinc-500 leading-relaxed">Office space, staging nodes, and technical labs fully offset.</p>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 3. Comprehensive Green Cloud Services Section */}
      <section id="green-services" className="py-24 bg-[#030303] border-t border-zinc-900 relative">
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/[0.01] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase block mb-3 font-bold">
                // Green Operations
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
                Comprehensive Green Cloud Services
              </h2>
              <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Image Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden relative group min-h-[300px] lg:min-h-auto border border-zinc-900">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/sustainability/green_team_planting.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-bold block mb-1">Reforestation</span>
                <h4 className="text-base font-bold text-white leading-tight">Client-Partner Tree Campaigns</h4>
              </div>
            </div>

            {/* Middle Content Column */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-zinc-950/40 border border-zinc-900/60 rounded-3xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <span className="text-emerald-500"><Leaf size={32} /></span>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  Devopstrio is primary in carbon-aware engineering. We believe modern development platforms must scale without harming the environment. We help establish server architectures configured to decrease absolute draw.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-zinc-900/60 border border-zinc-850 rounded-2xl p-4">
                  <span className="block text-2xl font-black text-white font-mono mb-1">8+ Years</span>
                  <span className="block text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">Of Green Engineering</span>
                </div>
                <div className="bg-zinc-900/60 border border-zinc-850 rounded-2xl p-4">
                  <span className="block text-2xl font-black text-emerald-400 font-mono mb-1">100%</span>
                  <span className="block text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">Sustainable Ready</span>
                </div>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden relative group min-h-[300px] lg:min-h-auto border border-zinc-900">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/sustainability/greenhouse_smart_farming.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-bold block mb-1">AgriTech & Innovation</span>
                <h4 className="text-base font-bold text-white leading-tight">Advanced Hydroponics R&D</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Explore Our Green Frameworks */}
      <section className="py-24 bg-black relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase block font-bold">// Frame Infrastructure</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
                  Explore Our Green Frameworks
                </h2>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mt-4 max-w-md">
                  We deploy specialized software architectural models that eliminate idle computing states and optimize dynamic auto-scaling schedules.
                </p>
                <div className="pt-6">
                  <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500 hover:text-black transition-all duration-300 cursor-pointer">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Framework Timeline */}
            <div className="lg:col-span-7 space-y-4">
              
              <Reveal delay={0.05} className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 flex gap-6 hover:border-emerald-500/20 transition-all">
                <span className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold flex-shrink-0 text-sm">
                  01
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Zero-Waste & Microservices</h4>
                  <p className="text-xs text-zinc-450 leading-relaxed">
                    Container resource allocation, consolidation of test runtimes, and auto-scaling to prevent over-provisioned active nodes.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 flex gap-6 hover:border-emerald-500/20 transition-all">
                <span className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold flex-shrink-0 text-sm">
                  02
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Scheduling & Resource Allocation</h4>
                  <p className="text-xs text-zinc-450 leading-relaxed">
                    Intelligent workload queuing models scheduling large calculations and AI batch testing at times of local grid surpluses.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 flex gap-6 hover:border-emerald-500/20 transition-all">
                <span className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold flex-shrink-0 text-sm">
                  03
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">Carbon-Conscious Workloads</h4>
                  <p className="text-xs text-zinc-450 leading-relaxed">
                    Selecting low-intensity cloud regions dynamically, deploying execution pipelines where energy grids are powered by hydro/solar.
                  </p>
                </div>
              </Reveal>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Cloud Carbon Estimator Tool */}
      <section id="carbon-estimator" className="py-24 bg-[#030303] border-t border-zinc-900 relative">
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-500/[0.015] blur-[160px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Slider Configurator - Left */}
            <div className="lg:col-span-7 bg-zinc-950/50 border border-zinc-900 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase font-bold block mb-3">// Interactive Tool</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Cloud Carbon Estimator</h3>
                <p className="text-xs text-zinc-400 font-light mb-10 leading-relaxed">
                  Select your estimated monthly cloud infrastructure spending. Our algorithms will project potential carbon reduction equivalents achieved through Devopstrio consolidation frameworks.
                </p>

                {/* Interactive Slider */}
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-zinc-400 font-mono">Monthly Spend</span>
                    <span className="text-xl font-mono font-black text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 px-4 py-1.5 rounded-xl">
                      ${cloudSpend.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="250000"
                    step="5000"
                    value={cloudSpend}
                    onChange={(e) => setCloudSpend(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-650 font-mono">
                    <span>$5,000</span>
                    <span>$125,000</span>
                    <span>$250,000</span>
                  </div>
                </div>
              </div>

              {/* Bullet Features */}
              <div className="space-y-3 pt-6 border-t border-zinc-900">
                <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Reduce cloud billing costs by up to 30%</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Generate boardroom-ready ESG carbon reports</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Align infrastructure footprint with net-zero regulations</span>
                </div>
              </div>
            </div>

            {/* Results Panel - Right */}
            <div className="lg:col-span-5 bg-gradient-to-br from-zinc-950 to-emerald-950/20 border border-zinc-900 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.02] blur-2xl rounded-full" />
              
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold block mb-4">Projected Annual Savings</span>
                
                {/* Main Trees Graphic */}
                <div className="bg-zinc-900/60 border border-zinc-850 rounded-2xl p-6 flex items-start gap-4 mb-6">
                  <span className="text-3xl text-emerald-500 pt-1"><Trees /></span>
                  <div>
                    <div className="text-2xl font-black text-white font-mono">
                      ~ {calculatedTrees.toLocaleString()} Trees
                    </div>
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light mt-1">
                      Equivalent to the carbon absorption capacity of a full forest sanctuary saved per year.
                    </p>
                  </div>
                </div>

                {/* Substats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-5">
                    <span className="block text-2xl font-black text-emerald-400 font-mono mb-1">
                      {calculatedCarbon} Tons
                    </span>
                    <span className="block text-[9px] font-mono tracking-widest text-zinc-500 uppercase">CO2 Emissions prevented</span>
                  </div>
                  <div className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-5">
                    <span className="block text-2xl font-black text-white font-mono mb-1">
                      {calculatedWaste} Lbs
                    </span>
                    <span className="block text-[9px] font-mono tracking-widest text-zinc-500 uppercase">Solid Waste avoided</span>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-zinc-600 leading-relaxed font-light mt-8 border-t border-zinc-900/80 pt-4">
                * Estimations based on EPA greenhouse gas models mapped to aggregate cloud region grid factors. Actual client savings may vary depending on code compilation and load factors.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Leaders in Zero-Waste Digital Solutions */}
      <section className="py-24 bg-black relative border-t border-zinc-900">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase block font-bold">// Global Impact</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
                  We're Leaders in Zero-Waste Digital Solutions
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Our developers construct application layers prioritizing low-power processor loops and lightweight memory management. We collaborate with reforestation programs to actively absorb existing greenhouse emissions.
                </p>
                <button 
                  onClick={() => {
                    const auditEl = document.getElementById("request-audit");
                    auditEl?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl text-xs uppercase tracking-wider transition-all mt-6 cursor-pointer"
                >
                  Request Green Audit
                </button>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Image card on Left */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden min-h-[300px] lg:min-h-auto relative border border-zinc-900 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: "url('/assets/sustainability/reforestation_misty_woods.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-bold block mb-1">Carbon Offsets</span>
                <h4 className="text-base font-bold text-white leading-tight">Vetted Forestry Preservation</h4>
              </div>
            </div>

            {/* Checklist items on Right */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-emerald-500/20 transition-all flex flex-col justify-between">
                <span className="text-emerald-500 text-2xl mb-4"><Zap /></span>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Green Computer Certification</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">All staging servers run on data centers certified by international green standards.</p>
                </div>
              </div>

              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-emerald-500/20 transition-all flex flex-col justify-between">
                <span className="text-emerald-500 text-2xl mb-4"><Shield /></span>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">ESG Certified Planning</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">Custom digital strategies developed in strict alignment with corporate ESG boards.</p>
                </div>
              </div>

              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-emerald-500/20 transition-all flex flex-col justify-between">
                <span className="text-emerald-500 text-2xl mb-4"><Sparkles /></span>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Eco-Power Accelerators</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">Pre-built software packages designed to compress database reads and CPU draw.</p>
                </div>
              </div>

              <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 hover:border-emerald-500/20 transition-all flex flex-col justify-between">
                <span className="text-emerald-500 text-2xl mb-4"><Globe /></span>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Renewable Grid Alignment</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">Workloads routing selectively to server farms operating on 100% solar or hydro grids.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. Frequently Answered Questions */}
      <section className="py-24 bg-[#030303] relative border-t border-zinc-900">
        <div className="max-w-4xl mx-auto w-full px-6 md:px-12 lg:px-16">
          
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase block font-bold">// FAQ</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3">
                Frequently Answered Questions
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between text-white font-bold text-sm"
                  >
                    <span>{faq.q}</span>
                    <span className="text-zinc-500">
                      {activeFaq === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-6 text-xs text-zinc-450 leading-relaxed font-light border-t border-zinc-900/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Request a Free Green Cloud Audit Form */}
      <section id="request-audit" className="py-24 bg-black relative border-t border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/[0.01] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10">
          
          <div className="bg-zinc-950/40 border border-zinc-900 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Form Info - Left */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase font-bold block mb-1">// Contact Us</span>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">Request a Free Green Cloud Audit</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Discover how much your company can save. Our specialists analyze your active staging configurations and outline clear sustainability optimizations.
                </p>
                
                <div className="space-y-3 pt-4 border-t border-zinc-900">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Analysis ready in 3 business days</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Detailed projected carbon savings report</span>
                  </div>
                </div>
              </div>

              {/* Form Input Fields - Right */}
              <div className="lg:col-span-7">
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-900/30 border border-zinc-850 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Corporate Email</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-900/30 border border-zinc-850 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Company Website</label>
                      <input
                        type="url"
                        required
                        placeholder="https://enterprise.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full bg-zinc-900/30 border border-zinc-850 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                    >
                      Submit Request <ArrowRight size={13} />
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 flex flex-col items-center justify-center gap-4 bg-zinc-900/20 border border-zinc-900 rounded-2xl p-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                      <Check size={28} className="stroke-[3]" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Audit Request Received!</h4>
                    <p className="text-zinc-450 text-xs font-light max-w-sm">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our sustainability engineers will inspect your website framework and connect with you via <span className="font-semibold text-white">{formData.email}</span> within 72 hours.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* About CTA standard section */}
      <AboutCTA />
    </main>
  );
}
