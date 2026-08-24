"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/services/Hero";
import { OrbitEcosystem } from "@/components/OrbitEcosystem";
import {
  ArrowUpRight, Plus, Minus, Database, Cpu, BarChart2,
  Activity, Layers, Sparkles, Server, Workflow, HardDrive, Shield,
  Zap, Lock, Globe, AlertTriangle, ChevronRight, ShieldCheck, EyeOff, Gauge,
  Settings, RefreshCw, ShoppingBag, Factory, BookOpen, Heart, FileText, Sliders,
  Terminal, Box, GitBranch, Key, Users, Command, Network, Monitor, Send, Bell, Cloud,
  Search, Smartphone, Phone, Mail, MessageCircle, MessageSquare, Twitter, Headset, Smile, User, Star, Map
} from "lucide-react";
import Link from "next/link";

// ==========================================
// 2. PLATFORM OVERVIEW (CustomerExperienceOverview)
// ==========================================
const CustomerExperienceOverview = () => {
  const cards = [
    { title: "Customer 360", desc: "Unified view of interactions and data.", icon: User },
    { title: "Omnichannel Engagement", desc: "Seamless cross-channel communication.", icon: Network },
    { title: "Customer Analytics", desc: "Real-time insights and journey mapping.", icon: BarChart2 },
    { title: "AI Personalization", desc: "Intelligent content and recommendations.", icon: Sparkles },
    { title: "Customer Support", desc: "Automated routing and service portals.", icon: Headset },
    { title: "Journey Automation", desc: "End-to-end automated workflows.", icon: Workflow }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">EXCEPTIONAL EXPERIENCES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4 uppercase">
              Deliver Exceptional Customer Experiences Everywhere
            </h2>
            <p className="text-zinc-450 text-sm leading-relaxed font-semibold mb-8 max-w-2xl">
              Customers expect fast, personalized, and consistent experiences across every channel. Our Customer Experience Platform connects customer data, communication channels, AI, and business workflows into a unified ecosystem that improves satisfaction, loyalty, and long-term business growth.
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
// 3. CUSTOMER CHALLENGES
// ==========================================
const CustomerChallenges = () => {
  const challenges = [
    { title: "Fragmented Customer Data", desc: "Siloed information across disjointed systems.", icon: Layers },
    { title: "Inconsistent Experiences", desc: "Varying service quality across different channels.", icon: AlertTriangle },
    { title: "Slow Response Times", desc: "Manual routing delaying customer support.", icon: RefreshCw },
    { title: "Limited Customer Insights", desc: "Lack of visibility into customer behaviors.", icon: EyeOff },
    { title: "Manual Customer Support", desc: "High reliance on human agents for basic queries.", icon: Settings },
    { title: "Low Customer Retention", desc: "High churn due to impersonal interactions.", icon: ShieldCheck },
    { title: "Siloed Communication", desc: "Teams disconnected from the customer journey.", icon: Box },
    { title: "Personalization Challenges", desc: "Inability to deliver targeted, relevant content.", icon: Gauge }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_70%)] blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">BOTTLENECKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 uppercase">
              Solving Modern Customer Experience Challenges
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="relative group rounded-3xl p-6 bg-zinc-950/45 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center mb-5 group-hover:text-rose-500 transition-colors">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-450 leading-relaxed font-bold">
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
// 4. PLATFORM CAPABILITIES
// ==========================================
const CustomerCapabilities = () => {
  const capabilities = [
    { title: "Customer 360", desc: "Create a unified customer profile across every interaction.", icon: User },
    { title: "Omnichannel Engagement", desc: "Deliver consistent experiences across web, mobile, email, chat, voice, and social media.", icon: Network },
    { title: "Customer Journey Management", desc: "Design, automate, and optimize every customer interaction.", icon: Map },
    { title: "AI Personalization", desc: "Deliver personalized recommendations, offers, and content.", icon: Sparkles },
    { title: "Customer Service Automation", desc: "AI chatbots, intelligent routing, and self-service experiences.", icon: Headset },
    { title: "Customer Insights & Analytics", desc: "Understand customer behavior through real-time dashboards.", icon: BarChart2 },
    { title: "Feedback & Experience Management", desc: "Capture customer feedback and continuously improve experiences.", icon: Smile },
    { title: "Loyalty & Engagement", desc: "Increase retention with personalized engagement strategies.", icon: Star }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM ENGINE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Customer Experience Capabilities</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/45 border border-zinc-900 rounded-3xl hover:border-rose-500/20 hover:bg-zinc-900/10 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-zinc-455 leading-relaxed font-bold">{item.desc}</p>
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
// 5. CUSTOMER ARCHITECTURE
// ==========================================
const CustomerArchitecture = () => {
  const steps = [
    { label: "Customer", icon: Users, color: "text-zinc-400" },
    { label: "Website / Mobile / Email / Social / Chat / Phone", icon: Smartphone, color: "text-zinc-300" },
    { label: "Experience Platform", icon: Cloud, color: "text-rose-400" },
    { label: "Customer 360", icon: User, color: "text-rose-500" },
    { label: "AI Personalization", icon: Sparkles, color: "text-rose-600" },
    { label: "Journey Automation", icon: Workflow, color: "text-indigo-400" },
    { label: "CRM", icon: Database, color: "text-teal-400" },
    { label: "Analytics Dashboard", icon: BarChart2, color: "text-blue-400" },
    { label: "Business Teams", icon: Users, color: "text-emerald-400" }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10 text-center">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
            REFERENCE ARCHITECTURE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase mb-16">
            Enterprise Customer Experience Architecture
          </h2>
        </Reveal>

        <div className="flex flex-col items-center justify-center relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-zinc-800 via-rose-500/50 to-emerald-500/50" />

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative z-10 flex flex-col items-center mb-8 group">
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl py-4 px-8 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-zinc-700 transition-colors">
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                  <span className="text-sm font-bold tracking-wide">{step.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="h-8 w-px" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. CORE PLATFORM MODULES
// ==========================================
const CustomerModules = () => {
  const modules = [
    { title: "Customer 360", desc: "Centralize profile data dynamically.", icon: User },
    { title: "Engagement Hub", desc: "Unified omnichannel inbox and outbound delivery.", icon: Network },
    { title: "Journey Builder", desc: "Visual canvas for designing interactions.", icon: Map },
    { title: "AI Assistant", desc: "Smart chatbots and agent-assist logic.", icon: Cpu },
    { title: "Customer Support", desc: "Ticketing and case management.", icon: Headset },
    { title: "Analytics", desc: "Behavioral tracking and conversion funnels.", icon: BarChart2 },
    { title: "Campaign Management", desc: "Targeted marketing execution.", icon: Send },
    { title: "Experience Insights", desc: "NPS and CSAT surveying loops.", icon: Smile }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM MODULES</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Core Platform Modules</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="p-6 bg-zinc-950/40 border border-zinc-900 rounded-3xl hover:border-rose-500/20 hover:shadow-[0_10px_30px_rgba(225,29,72,0.03)] transition-all duration-300 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-zinc-450 leading-relaxed font-bold mt-4">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 7. CUSTOMER JOURNEY LIFECYCLE
// ==========================================
const CustomerJourney = () => {
  const steps = [
    { name: "Discover", icon: Search, kpi: "Brand Awareness" },
    { name: "Engage", icon: MessageCircle, kpi: "Interaction Rate" },
    { name: "Convert", icon: ShoppingBag, kpi: "Sales Velocity" },
    { name: "Support", icon: Headset, kpi: "Resolution Time" },
    { name: "Retain", icon: ShieldCheck, kpi: "Churn Reduction" },
    { name: "Grow", icon: Activity, kpi: "Lifetime Value" },
    { name: "Advocate", icon: Star, kpi: "NPS Score" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">LIFECYCLE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Customer Journey Lifecycle</h2>
          </div>
        </Reveal>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 mt-12 w-full overflow-x-auto pb-8">
          <div className="hidden lg:block absolute top-[40px] left-[40px] right-[40px] h-px bg-zinc-800 z-0" />

          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="w-full lg:w-auto relative z-10 flex flex-col items-center group flex-shrink-0 min-w-[120px]">
              <div className="w-20 h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-rose-500 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <step.icon className="w-7 h-7" />
              </div>
              <span className="mt-4 text-sm font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                {step.name}
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded-full">
                {step.kpi}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 8. PLATFORM FEATURES
// ==========================================
const PlatformFeatures = () => {
  const features = [
    "Customer Profile Management", "Omnichannel Messaging", "Live Chat", "AI Chatbot",
    "Personalization", "Journey Mapping", "Marketing Automation", "Customer Feedback",
    "Customer Segmentation", "Analytics Dashboard", "Campaign Management", "Self-Service Portal"
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">PLATFORM FEATURE GRID</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Complete Platform Features</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div className="p-5 bg-zinc-950/40 border border-zinc-900 rounded-xl hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-300 text-center flex items-center justify-center h-full min-h-[100px]">
                <span className="text-xs md:text-sm font-bold text-zinc-300 tracking-tight">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 9. AI-POWERED CUSTOMER EXPERIENCE
// ==========================================
const AIPersonalization = () => {
  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left Side */}
        <div className="lg:col-span-5 text-left">
          <Reveal>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              COGNITIVE EXPERIENCES
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">
              Intelligent Customer Engagement
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-semibold">
              Artificial Intelligence continuously analyzes customer behavior, predicts intent, recommends personalized experiences, automates support, and improves engagement across every touchpoint.
            </p>
          </Reveal>
        </div>

        {/* Right Side: Flow */}
        <div className="lg:col-span-7 w-full relative">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 relative pl-8">
              <div className="absolute left-[20px] top-4 bottom-4 w-px bg-rose-500/30" />

              {["Customer Activity", "AI Engine", "Behavior Analysis", "Recommendations", "Personalized Experience", "Business Insights"].map((step, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-3 h-3 rounded-full bg-rose-500 flex-shrink-0 absolute left-[15px]" />
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-6 py-4 flex-grow shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 10. OMNICHANNEL ENGAGEMENT
// ==========================================
const OmnichannelEngagement = () => {
  const channels = [
    { name: "Website", logo: "/assets/Tech-icons/google-chrome-logo-icon_svgstack_com_28051780931337.svg" },
    { name: "Mobile App", logo: "/assets/Tech-icons/green-android-logo_svgstack_com_7441780931950.svg" },
    { name: "Email", logo: "/assets/Tech-icons/google-onedrive-logo_svgstack_com_28961780931782.svg" },
    { name: "Live Chat", logo: "/assets/Tech-icons/slack-logo_svgstack_com_31371780931112.svg" },
    { name: "WhatsApp", logo: "/assets/Tech-icons/facebook-meta-logo_svgstack_com_28791780931068.svg" },
    { name: "SMS", logo: "/assets/Tech_logos/Elastic.svg" },
    { name: "Voice", logo: "/assets/Tech_logos/cisco.svg" },
    { name: "Social Media", logo: "/assets/Tech-icons/google-analytics-logo_svgstack_com_7431780931840.svg" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">OMNICHANNEL</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 uppercase">Meet Customers Wherever They Are</h2>
            <p className="text-zinc-400 text-xs md:text-sm font-bold leading-relaxed">
              Connect seamlessly across every communication layer through our unified digital CX hub.
            </p>
          </div>
        </Reveal>

        <div>
          <OrbitEcosystem
            centerLogo="/assets/logo/logo.png"
            nodes={channels}
          />
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 11. SUPPORTED TECHNOLOGIES (TechnologyStack)
// ==========================================
const TechnologyStack = () => {
  const techs = [
    { name: "Salesforce", logo: "/assets/Tech_logos/Service_now.svg" },
    { name: "Dynamics 365", logo: "/assets/Tech-icons/microsoft-logo_svgstack_com_28801780931272.svg" },
    { name: "HubSpot", logo: "/assets/Tech_logos/Confluent.svg" },
    { name: "Zendesk", logo: "/assets/Tech_logos/Elastic.svg" },
    { name: "Freshworks", logo: "/assets/Tech_logos/Datadog.svg" },
    { name: "Adobe Cloud", logo: "/assets/Tech-icons/adobe-xd-logo_svgstack_com_31591780931868.svg" },
    { name: "SAP CX", logo: "/assets/Tech_logos/sap.svg" },
    { name: "Twilio", logo: "/assets/Tech_logos/PagerDuty.svg" },
    { name: "Azure OpenAI", logo: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg" },
    { name: "Power BI", logo: "/assets/Tech-icons/microsoft-logo_svgstack_com_28801780931272.svg" },
    { name: "Analytics", logo: "/assets/Tech-icons/google-analytics-logo_svgstack_com_7431780931840.svg" },
    { name: "Snowflake", logo: "/assets/Tech_logos/Snowflake.svg" },
    { name: "MongoDB", logo: "/assets/Tech_logos/MongoDB.svg" },
    { name: "Azure", logo: "/assets/Tech_logos/Microsoft-Azure.svg" },
    { name: "AWS", logo: "/assets/Tech_logos/AWS.svg" },
    { name: "Google Cloud", logo: "/assets/Tech_logos/Google_Cloud.svg" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">INTEGRATED STACK</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Supported Technologies</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {techs.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.02}>
              <div className="p-4 bg-zinc-950/65 border border-zinc-900 rounded-2xl flex flex-col items-center justify-center gap-3 text-center min-h-[100px] group transition-all duration-300 hover:border-rose-500/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                <div className="w-10 h-10 flex items-center justify-center bg-zinc-900/80 rounded-xl border border-zinc-800 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.logo}
                    alt={item.name}
                    onError={(e) => { e.currentTarget.style.display = 'none' }} // fallback if missing
                    className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-all duration-350 filter brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                  />
                </div>
                <span className="text-[9px] font-bold text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest leading-none">
                  {item.name}
                </span>
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
    { value: "40%", title: "Higher Customer Satisfaction" },
    { value: "60%", title: "Faster Support Resolution" },
    { value: "360°", title: "Customer Visibility" },
    { value: "70%", title: "Improved Customer Engagement" },
    { value: "24×7", title: "AI Customer Support" },
    { value: "Personalized", title: "Digital Experiences" }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">BUSINESS VALUE</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Business Outcomes</h2>
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
// 13. INDUSTRY USE CASES
// ==========================================
const IndustryUseCases = () => {
  const useCases = [
    { title: "Banking", desc: "Digital banking experiences.", icon: Database },
    { title: "Healthcare", desc: "Patient engagement platforms.", icon: Heart },
    { title: "Retail", desc: "Personalized shopping journeys.", icon: ShoppingBag },
    { title: "Manufacturing", desc: "Customer support portals.", icon: Factory },
    { title: "Telecommunications", desc: "Self-service customer platforms.", icon: Workflow },
    { title: "Education", desc: "Student engagement systems.", icon: BookOpen },
    { title: "Government", desc: "Citizen service portals.", icon: Globe },
    { title: "Logistics", desc: "Customer shipment tracking.", icon: Activity }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">SECTOR DEPLOYMENTS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-4 uppercase">
              Industry Use Cases
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05} className="h-full">
              <div className="relative group rounded-3xl p-6 bg-zinc-950/45 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/10 transition-all duration-500 flex flex-col h-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                <div className="w-10 h-10 rounded-2xl bg-rose-600/10 text-rose-500 flex items-center justify-center mb-5">
                  <item.icon size={18} />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-bold">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 14. WHY DEVOPSTRIO CUSTOMER PLATFORM
// ==========================================
const WhyChooseCustomerPlatform = () => {
  const pillars = [
    { title: "Customer-First Design", icon: Heart },
    { title: "AI-Powered Personalization", icon: Sparkles },
    { title: "Omnichannel Experience", icon: Network },
    { title: "Enterprise Scalability", icon: Layers },
    { title: "Secure by Design", icon: Shield },
    { title: "Real-Time Insights", icon: BarChart2 },
    { title: "Integrated Business Workflows", icon: Workflow },
    { title: "Continuous Innovation", icon: RefreshCw }
  ];

  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-6 xl:px-8 relative z-10 text-center">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-3 block">
            OUR ADVANTAGE
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white uppercase mb-16">
            Why Devopstrio Customer Experience Platform
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group relative rounded-[2rem] p-6 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-zinc-400 flex items-center justify-center mb-4 group-hover:text-rose-500 group-hover:scale-110 transition-all">
                  <p.icon size={20} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  {p.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 15. RELATED SOLUTIONS
// ==========================================
const RelatedSolutions = () => {
  const solutions = [
    { title: "Customer Experience Consulting", path: "/ecosystem/platforms-solutions/customer-experience-platform" },
    { title: "Software Development", path: "/services/software-development" },
    { title: "AI & Data Innovation", path: "/ecosystem/innovation-labs/ai-lab" },
    { title: "Digital Transformation", path: "/services/digital-transformation" },
    { title: "Automation Platform", path: "/ecosystem/platforms-solutions/automation-platform" },
    { title: "Data Platform", path: "/ecosystem/platforms-solutions/data-platform" },
    { title: "Managed Services", path: "/services/managed-services" },
    { title: "Microsoft Partnership", path: "/ecosystem/partnerships/microsoft" }
  ];

  return (
    <section className="w-full py-24 bg-black border-b border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">ECOSYSTEM LINKS</span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-white mb-6 uppercase">Related Solutions</h2>
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
// 16. FAQ
// ==========================================
const PlatformFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is a Customer Experience Platform?", a: "A centralized platform that unifies customer interactions, engagement, support, analytics, AI, and personalization across every touchpoint." },
    { q: "Can it integrate with CRM systems?", a: "Yes, it integrates seamlessly with Salesforce, Dynamics 365, HubSpot, and other major CRM providers." },
    { q: "Does it support omnichannel communication?", a: "Absolutely. It connects web, mobile, email, chat, voice, and social channels into a unified inbox." },
    { q: "Is AI personalization included?", a: "Yes, the AI engine analyzes behavior to recommend personalized content and offers in real-time." },
    { q: "Can customers use self-service portals?", a: "Yes, it allows you to build rich self-service knowledge bases and automated chatbot portals." },
    { q: "Does it provide customer analytics?", a: "Yes, it provides comprehensive real-time dashboards mapping customer journeys and conversion funnels." },
    { q: "Is it suitable for enterprise organizations?", a: "Yes, the architecture is highly scalable and built for massive transactional volumes and secure compliance." },
    { q: "Can it integrate with ERP systems?", a: "Yes, we connect with SAP, Oracle, and other ERPs to sync billing and operational data." }
  ];

  return (
    <section className="w-full py-24 bg-[#030303] text-white relative border-b border-zinc-900/60">
      <div className="max-w-7xl mx-auto w-full px-6 xl:px-8 relative z-10">
        <Reveal className="max-w-3xl mb-16">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">FAQ</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-4 uppercase">
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
                  <div className="mt-4 text-xs text-zinc-400 font-bold max-w-3xl">
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
// 17. CTA
// ==========================================
const PlatformCTA = () => {
  return (
    <section className="w-full py-32 bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.025),transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 xl:px-8 relative z-10">
        <Reveal>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">GET STARTED</span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-black mb-6 tracking-tight uppercase text-white">
            Transform Every Customer Interaction
          </h2>
          <p className="text-zinc-300 text-sm md:text-base font-semibold mb-10 max-w-xl mx-auto leading-relaxed">
            Create exceptional customer experiences that build loyalty, improve engagement, and accelerate business growth with Devopstrio's Customer Experience Platform.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-3 pl-6 pr-3 py-3.5 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              Request a Platform Demo
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
            <Link href="/contact" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
              Talk to a Customer Experience Expert
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
export default function CustomerExperiencePlatformPage() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-rose-500 selection:text-white">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <Hero
        badge="Customer Experience Platform"
        title={
          <>
            Customer Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
              Platform
            </span>
          </>
        }
        subtitle="Create personalized, connected, and seamless customer experiences across every interaction with AI-powered engagement, omnichannel communication, intelligent support, and real-time customer insights."
        particles={true}
        particleColors={["#ffffff", "#fda4af", "#f43f5e"]}
        particleBaseSize={150}
        magicRings={true}
        magicRingsColor="#f43f5e"
        magicRingsColorTwo="#9f1239"
        magicRingsRingCount={4}
        magicRingsSpeed={0.5}
        breadcrumbs={[
          { label: "ECOSYSTEM", href: "/ecosystem" },
          { label: "PLATFORMS & SOLUTIONS", href: "/ecosystem/platforms-solutions" },
          { label: "CUSTOMER EXPERIENCE PLATFORM" }
        ]}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-3 pl-6 pr-3 py-3 bg-white text-black font-semibold text-xs md:text-sm tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5">
            Request a Platform Demo
            <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link>
          <Link href="/contact" className="px-6 py-4 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900 text-white transition-all duration-300">
            Talk to a CX Expert
          </Link>
        </div>
      </Hero>

      <CustomerExperienceOverview />
      <CustomerChallenges />
      <CustomerCapabilities />
      <CustomerArchitecture />
      <CustomerModules />
      <CustomerJourney />
      <PlatformFeatures />
      <AIPersonalization />
      <OmnichannelEngagement />
      <TechnologyStack />
      <BusinessOutcomes />
      <IndustryUseCases />
      <WhyChooseCustomerPlatform />
      <RelatedSolutions />
      <PlatformFAQ />
      <PlatformCTA />
    </main>
  );
}
