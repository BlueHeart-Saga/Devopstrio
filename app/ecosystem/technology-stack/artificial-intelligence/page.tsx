"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map,
  BrainCircuit, Bot, Lightbulb, TrendingUp, CheckCircle, Target, Compass
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 2. AI OVERVIEW
// ==========================================
const AIOverview = () => {
  const cards = [
    { title: "Intelligent Automation", desc: "Automate complex workflows and processes.", icon: Workflow },
    { title: "AI-Powered Applications", desc: "Build smart software infused with AI.", icon: Bot },
    { title: "Enterprise AI", desc: "Scalable models for corporate data securely.", icon: Server },
    { title: "Predictive Analytics", desc: "Forecast trends and optimize decisions.", icon: TrendingUp },
    { title: "AI Assistants", desc: "Conversational agents for support and tasks.", icon: MessageSquare },
    { title: "Decision Intelligence", desc: "Data-driven insights for strategic growth.", icon: BrainCircuit }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">ENTERPRISE INTELLIGENCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Enterprise AI for Modern Businesses
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Artificial Intelligence has become the foundation of modern digital transformation. Devopstrio helps organizations integrate AI into business operations, customer experiences, analytics, automation, and enterprise software through secure and scalable architectures.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group bg-zinc-950/45 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between h-full hover:border-zinc-800 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 min-h-[220px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-rose-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. WHY AI MATTERS
// ==========================================
const WhyAI = () => {
  const challenges = [
    "Manual processes", "Slow decision making", "Data overload",
    "Limited customer insights", "High operational costs", "Repetitive work"
  ];
  const benefits = [
    "Automation", "Better decisions", "Faster insights",
    "Personalization", "Innovation", "Growth"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">THE PARADIGM SHIFT</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Transforming Business Through Intelligence
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Challenges */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Minus className="w-4 h-4 text-zinc-500" /> Before AI
              </h3>
              <ul className="space-y-4">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-semibold">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Benefits */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-rose-950/20 to-zinc-950 border border-rose-900/30 rounded-3xl h-full shadow-[0_8px_32px_0_rgba(225,29,72,0.1)]">
              <h3 className="text-sm font-bold text-rose-500 uppercase tracking-widest mb-6 flex items-center gap-3">
                <Plus className="w-4 h-4 text-rose-500" /> With AI
              </h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white font-bold">
                    <CheckCircle className="w-4 h-4 text-rose-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. AI TECHNOLOGY STACK
// ==========================================
const AITechnologyStack = () => {
  const layers = [
    { name: "Business Applications", desc: "ERP, CRM, Custom Software", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
    { name: "AI Agents", desc: "Autonomous Logic & Tool Use", color: "border-indigo-500/50 bg-indigo-500/10 text-indigo-400" },
    { name: "Foundation Models", desc: "LLMs, Vision, Audio Models", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
    { name: "Machine Learning", desc: "Training, MLOps, Pipelines", color: "border-rose-500/50 bg-rose-500/10 text-rose-400" },
    { name: "Data Platform", desc: "Vector DBs, Data Lakes", color: "border-amber-500/50 bg-amber-500/10 text-amber-400" },
    { name: "Cloud Infrastructure", desc: "GPUs, Inference, Compute", color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-4xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">TECHNOLOGY STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Technologies That Power Our AI Solutions</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {layers.map((layer, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`p-6 border rounded-2xl flex flex-col md:flex-row justify-between items-center text-center md:text-left transition-all duration-300 hover:brightness-125 hover:-translate-y-1 shadow-lg ${layer.color}`}>
                <span className="text-sm font-black uppercase tracking-widest">{layer.name}</span>
                <span className="text-xs font-bold opacity-80 mt-2 md:mt-0 uppercase tracking-wide">{layer.desc}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 5. AI ARCHITECTURE
// ==========================================
const AIArchitecture = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-6xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
              REFERENCE ARCHITECTURE
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-16">
              Enterprise AI Reference Architecture
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto p-4 sm:p-8 rounded-[3rem] bg-zinc-950/40 border border-zinc-900 shadow-[0_0_50px_rgba(225,29,72,0.05)]">
          
          {/* Top Layer */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 relative z-10 mb-8">
            <Reveal delay={0.1}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Users className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Users</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center min-w-[160px] shadow-lg hover:border-rose-500/50 transition-all group">
                <Smartphone className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-rose-400 transition-colors" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Applications</span>
              </div>
            </Reveal>
          </div>

          {/* Connectors Down */}
          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-rose-500/50" />
          </div>

          {/* Middle Layer 1 */}
          <Reveal delay={0.3}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-md bg-zinc-950 border border-rose-900/30 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-[0_4px_20px_rgba(225,29,72,0.1)]">
                <Network className="w-6 h-6 text-rose-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-white">API Layer & Gateway</span>
              </div>
            </div>
          </Reveal>

          {/* Connectors Down */}
          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-12 bg-rose-500/50" />
          </div>

          {/* Middle Layer 2 */}
          <Reveal delay={0.4}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-2xl bg-zinc-900/80 border border-rose-500/20 rounded-2xl p-6 flex items-center justify-center gap-4 shadow-[0_4px_30px_rgba(225,29,72,0.15)] backdrop-blur-sm">
                <Command className="w-6 h-6 text-rose-400" />
                <span className="text-sm font-bold uppercase tracking-widest text-white">AI Orchestration Engine</span>
              </div>
            </div>
          </Reveal>

          {/* Split Connectors */}
          <div className="hidden sm:block">
            <div className="flex justify-center relative z-0 -my-4">
               <div className="w-px h-6 bg-rose-500/50" />
            </div>
            <div className="flex justify-center relative z-0">
               <div className="w-[300px] h-px bg-rose-500/50" />
            </div>
            <div className="flex justify-center gap-[300px] relative z-0 -my-4 mb-4">
               <div className="w-px h-10 bg-rose-500/50" />
               <div className="w-px h-10 bg-rose-500/50" />
            </div>
          </div>

          {/* AI Core Layer */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 relative z-10 mb-8 mt-4 sm:mt-0">
            <Reveal delay={0.5}>
              <div className="w-full bg-zinc-950 border border-rose-500/30 rounded-2xl p-8 flex flex-col items-center sm:min-w-[220px] shadow-[0_0_30px_rgba(225,29,72,0.1)] hover:border-rose-500 transition-all group">
                <BrainCircuit className="w-10 h-10 text-rose-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest text-white text-center">LLMs & ML Models</span>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="w-full bg-zinc-950 border border-emerald-500/30 rounded-2xl p-8 flex flex-col items-center sm:min-w-[220px] shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:border-emerald-500 transition-all group">
                <Database className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest text-white text-center">Vector Database</span>
              </div>
            </Reveal>
          </div>

          {/* Connectors Down */}
          <div className="hidden sm:block">
            <div className="flex justify-center gap-[300px] relative z-0 -my-4">
               <div className="w-px h-8 bg-rose-500/30" />
               <div className="w-px h-8 bg-emerald-500/30" />
            </div>
            <div className="flex justify-center relative z-0">
               <div className="w-[300px] h-px bg-gradient-to-r from-rose-500/30 to-emerald-500/30" />
            </div>
            <div className="flex justify-center relative z-0 -my-4 mb-4">
               <div className="w-px h-10 bg-zinc-600/50" />
            </div>
          </div>

          {/* Foundation Layer */}
          <Reveal delay={0.7}>
            <div className="flex justify-center relative z-10 mb-8 mt-4 sm:mt-0">
              <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-zinc-400" />
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Enterprise Data</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Connectors Down */}
          <div className="hidden sm:flex justify-center -my-4 relative z-0">
             <div className="w-px h-8 bg-zinc-700" />
          </div>

          {/* Cloud Layer */}
          <Reveal delay={0.8}>
            <div className="flex justify-center relative z-10 mt-4 sm:mt-0">
              <div className="w-full max-w-3xl bg-zinc-950 border-2 border-zinc-800/50 rounded-2xl p-6 flex items-center justify-center gap-4">
                <Cloud className="w-6 h-6 text-blue-500" />
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Cloud Infrastructure Platform</span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. AI CAPABILITIES
// ==========================================
const AICapabilities = () => {
  const capabilities = [
    { title: "Generative AI", tag: "Create", desc: "Build chat interfaces, copilots, and AI assistants.", image: "/assets/common/1b065043b6959827c05a0073c93a4a53 1.png" },
    { title: "Machine Learning", tag: "Predict", desc: "Train prediction models and linear regressions.", image: "/assets/common/260b761ad40c3ad2acba2c6666894539 1.png" },
    { title: "NLP", tag: "Understand", desc: "Extract insights and sentiment from language.", image: "/assets/common/315e4fdc6263bfd240f36297e376576e 1.png" },
    { title: "Computer Vision", tag: "See", desc: "Automate image analysis and object detection.", image: "/assets/common/37b9b888cc479ea7b74d2d9a05c37597 1.png" },
    { title: "AI Search", tag: "Discover", desc: "Implement semantic and cognitive data search.", image: "/assets/common/464d8932bca4d6bb552ff2dcf2f3c5ca 1.png" },
    { title: "AI Agents", tag: "Automate", desc: "Deploy task automation and autonomous logic engines.", image: "/assets/common/782e79a0bc5e9f58cb9af6a27727ca7b 1.png" },
    { title: "Recommendation Engines", tag: "Personalize", desc: "Deliver personalized and dynamic content.", image: "/assets/common/82090d7be4ef5694954ce77f9cc2e627 1.png" },
    { title: "Intelligent Automation", tag: "Execute", desc: "Streamline workflows and business process automation.", image: "/assets/common/90361fed0bb781d7c86e451995b4dbce 1.png" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">INTELLIGENCE SUITE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">AI Capabilities</h2>
          </div>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-48 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6 flex-grow">{item.desc}</p>
                  
                  <div className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Explore {item.title}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. AI MODELS & FRAMEWORKS
// ==========================================
const AIModels = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Foundation Models", items: ["GPT-4", "Claude 3", "Gemini", "Llama 3", "Mistral"] },
    { name: "Frameworks", items: ["LangChain", "LlamaIndex", "Haystack", "Semantic Kernel"] },
    { name: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"] },
    { name: "AI APIs", items: ["Azure AI", "Vertex AI", "OpenAI", "Hugging Face"] }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-5xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Models & Frameworks We Work With</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs sidebar */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === idx ? "bg-rose-500 text-white shadow-lg" : "bg-zinc-950 text-zinc-400 hover:bg-zinc-900 hover:text-white"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full md:w-2/3 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] p-8 min-h-[250px] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {tabs[activeTab].items.map((item, i) => (
                  <div key={i} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-center flex items-center justify-center hover:border-rose-500/30 transition-colors">
                    <span className="text-sm font-bold text-zinc-300 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// 8. AI DEVELOPMENT LIFECYCLE
// ==========================================
const AIDevelopmentLifecycle = () => {
  const steps = [
    { name: "Discover", icon: Compass },
    { name: "Prepare Data", icon: Database },
    { name: "Train", icon: BrainCircuit },
    { name: "Evaluate", icon: Activity },
    { name: "Deploy", icon: Zap },
    { name: "Monitor", icon: Monitor },
    { name: "Optimize", icon: RefreshCw }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">AI Development Lifecycle</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 mt-12 w-full overflow-x-auto pb-8">
          <div className="hidden lg:block absolute top-[40px] left-[40px] right-[40px] h-px bg-zinc-800 z-0" />
          
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-full lg:w-auto relative z-10 flex flex-col items-center group flex-shrink-0 min-w-[120px]">
              <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <step.icon className="w-7 h-7" />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                {step.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. AI INFRASTRUCTURE
// ==========================================
const AIInfrastructure = () => {
  const features = [
    "GPU Computing", "Vector Databases", "Model Serving", "Inference APIs",
    "MLOps", "Monitoring", "Security", "Cloud Infrastructure"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SCALE & PERFORMANCE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Built for Enterprise Scale</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[100px]">
                <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 10. ENTERPRISE AI USE CASES
// ==========================================
const AIUseCases = () => {
  const useCases = [
    { title: "Customer Support AI", tag: "Support", desc: "Automate responses and resolve issues faster with AI agents.", image: "/assets/common/945ab601f043c558e0a8162da2a1eb4c 1.png" },
    { title: "Document Intelligence", tag: "Process", desc: "Extract structured data from unstructured enterprise documents.", image: "/assets/common/9d91b93f83e6d4cd494ec13611b3e50e 1.png" },
    { title: "Predictive Maintenance", tag: "Optimize", desc: "Forecast equipment failures and schedule proactive maintenance.", image: "/assets/common/b384eb0438c55e43c61e7595acc29638 1.png" },
    { title: "Fraud Detection", tag: "Secure", desc: "Identify anomalous patterns and prevent financial fraud in real-time.", image: "/assets/common/e76e125035885aab9c9070ce85df239e 1.png" },
    { title: "Healthcare Diagnostics", tag: "Analyze", desc: "Assist clinicians with AI-driven medical image analysis.", image: "/assets/common/f03cc521fb070dfae9d87768b791ff70 1.png" },
    { title: "Demand Forecasting", tag: "Forecast", desc: "Optimize inventory and supply chain with ML-based predictions.", image: "/assets/common/f317dd71184f5c47d601eeb9508bf92c 1.png" },
    { title: "Knowledge Management", tag: "Organize", desc: "Unify company knowledge into an intelligent, searchable hub.", image: "/assets/common/45ea830d170d382ade235db479060da7 1.png" },
    { title: "Enterprise Search", tag: "Discover", desc: "Find precise answers across your internal document repositories.", image: "/assets/common/2fe7f9184c515b0c515ce38bc8a25efa 1.png" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SOLUTIONS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4">
              Enterprise AI Use Cases
            </h2>
          </div>
        </Reveal>

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="min-w-[300px] md:min-w-[360px] flex-shrink-0 snap-start">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-rose-500/50 hover:shadow-[0_12px_40px_rgba(225,29,72,0.15)] transition-all duration-300 flex flex-col h-full min-h-[420px] group">
                <div className="w-full h-40 relative bg-zinc-900 overflow-hidden border-b border-zinc-800">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-rose-500 uppercase mb-2 block">{item.tag}</span>
                  <h3 className="text-base font-bold text-white mb-3 leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-semibold mb-6 flex-grow">{item.desc}</p>
                  
                  <div className="mt-auto flex items-center gap-2 text-rose-500 text-xs font-bold hover:text-white transition-colors cursor-pointer w-fit">
                    <div className="w-6 h-6 rounded-full bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <ChevronRight size={14} />
                    </div>
                    Learn More
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 11. RESPONSIBLE AI
// ==========================================
const ResponsibleAI = () => {
  const items = [
    "AI Governance", "Responsible AI", "Bias Monitoring", "Data Privacy",
    "Human Oversight", "Model Security", "Compliance", "Ethical AI"
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">TRUST & SAFETY</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Responsible & Secure AI</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <div className="px-6 py-4 bg-zinc-950/40 border border-zinc-900 rounded-full hover:border-rose-500/30 transition-all duration-300 text-center">
                <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 12. BUSINESS OUTCOMES
// ==========================================
const BusinessOutcomes = () => {
  const outcomes = [
    { value: "80%", title: "Process Automation" },
    { value: "60%", title: "Faster Decision Making" },
    { value: "24×7", title: "AI Assistance" },
    { value: "40%", title: "Operational Efficiency" },
    { value: "Personalized", title: "Customer Experiences" },
    { value: "Enterprise", title: "AI Ready" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Business Outcomes</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-8 bg-zinc-950/40 border border-zinc-900 rounded-[2rem] hover:border-rose-500/20 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[190px]">
                <div className="text-3xl md:text-4xl font-black text-rose-500 mb-3 tracking-tight">
                  {item.value}
                </div>
                <h4 className="text-xs font-bold text-white tracking-widest uppercase">{item.title}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 13. RELATED TECHNOLOGIES
// ==========================================
const RelatedTechnologies = () => {
  const solutions = [
    { title: "Data Engineering", path: "/ecosystem/technology-stack/data-analytics" },
    { title: "Cloud Platforms", path: "/ecosystem/technology-stack/cloud-platforms" },
    { title: "Automation", path: "/ecosystem/technology-stack/devops-automation" },
    { title: "Cybersecurity", path: "/ecosystem/technology-stack/cybersecurity" },
    { title: "Software Engineering", path: "/ecosystem/technology-stack/software-engineering" },
    { title: "Microsoft AI", path: "/ecosystem/partnerships/microsoft" },
    { title: "Google Vertex AI", path: "/ecosystem/partnerships/google-cloud" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM LINKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6">Related Technologies</h2>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {solutions.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <Link href={item.path} className="px-6 py-4 bg-zinc-950 border border-zinc-900 hover:border-rose-500/30 rounded-2xl flex items-center gap-3 transition-all duration-300">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">{item.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 14. FAQ
// ==========================================
const TechnologyFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What AI services do you provide?", a: "We provide end-to-end AI services including Generative AI implementation, Machine Learning model training, MLOps, AI agents, and enterprise search solutions." },
    { q: "Which LLMs do you support?", a: "We work with leading foundation models including OpenAI's GPT-4, Anthropic's Claude 3, Google's Gemini, and open-source options like Llama 3 and Mistral." },
    { q: "Do you build AI agents?", a: "Yes, we design autonomous AI agents that can use tools, access APIs, and automate complex workflows based on natural language instructions." },
    { q: "Can AI integrate with existing systems?", a: "Absolutely. We build robust API layers and data pipelines that connect AI capabilities directly to your ERP, CRM, and custom applications." },
    { q: "Is AI secure?", a: "Security is built into our AI architectures. We ensure data privacy, role-based access control, compliance adherence, and secure inference endpoints." },
    { q: "Do you support private AI deployments?", a: "Yes, for strict compliance and privacy requirements, we deploy open-source models (like Llama) on private cloud infrastructure or on-premise servers." },
    { q: "Which cloud platforms are supported?", a: "We architect AI solutions natively on Microsoft Azure (Azure OpenAI), Google Cloud (Vertex AI), and AWS." },
    { q: "Do you offer AI consulting?", a: "Yes, our AI advisory services help you discover use cases, build proofs of concept, and formulate an enterprise AI adoption strategy." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">FAQ</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-4">
            Questions we get <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">asked every day</span>
          </h2>
        </Reveal>

        <div className="flex flex-col border-t border-zinc-900">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="border-b border-zinc-900 py-6">
                <button onClick={() => toggleFaq(idx)} className="flex justify-between items-center w-full text-left focus:outline-none group">
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="text-zinc-500 group-hover:text-rose-500 transition-colors ml-4 flex-shrink-0">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-4 text-xs text-zinc-400 font-bold max-w-3xl leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 15. CTA
// ==========================================
const TechnologyCTA = () => {
  return (
    <section className="w-full py-32 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-black mb-6 tracking-tight text-white">
            Build Intelligent Applications with AI
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Transform your business through enterprise AI, automation, predictive analytics, and intelligent digital experiences with Devopstrio.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Talk to an AI Expert
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/contact" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
              Start Your AI Journey
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function AITechnologyStackPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <Hero
        badge="Technology Stack"
        title={
          <>
            Artificial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Intelligence
            </span>
          </>
        }
        subtitle="Build intelligent applications with enterprise AI, Generative AI, machine learning, computer vision, natural language processing, and autonomous automation."
        shapeGrid={true}
        shapeGridSpeed={0.5}
        shapeGridSquareSize={50}
        shapeGridDirection="diagonal"
        shapeGridBorderColor="rgba(255, 255, 255, 0.08)"
        shapeGridHoverFillColor="rgba(225, 29, 72, 0.2)"
        shapeGridShape="square"
        shapeGridHoverTrailAmount={3}
        dotField={true}
        dotFieldProps={{
          dotRadius: 2,
          dotSpacing: 24,
          bulgeStrength: 67,
          glowRadius: 200,
          sparkle: true,
          waveAmplitude: 10,
          gradientFrom: "rgba(225, 29, 72, 0.8)",
          gradientTo: "rgba(239, 68, 68, 0.5)",
          glowColor: "rgba(225, 29, 72, 0.15)",
        }}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "TECHNOLOGY STACK", href: "/ecosystem/technology-stack" },
          { label: "ARTIFICIAL INTELLIGENCE" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Explore AI Solutions
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/contact" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Talk to AI Experts
          </Link>
        </div>
      </Hero>

      <AIOverview />
      <WhyAI />
      <AITechnologyStack />
      <AIArchitecture />
      <AICapabilities />
      <AIModels />
      <AIDevelopmentLifecycle />
      <AIInfrastructure />
      <AIUseCases />
      <ResponsibleAI />
      <BusinessOutcomes />
      <RelatedTechnologies />
      <TechnologyFAQ />
      <TechnologyCTA />
    </main>
  );
}
