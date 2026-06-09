"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  MapPin, 
  Briefcase, 
  Clock, 
  BookOpen, 
  Award, 
  Activity, 
  Code, 
  Shield, 
  Globe, 
  Check,
  Send,
  X,
  Sparkles,
  Users,
  Compass
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Open positions database
interface Job {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience: string;
  desc: string;
}

const openPositionsData: Job[] = [
  {
    id: "sre-azure-arch",
    title: "Senior Azure Cloud Architect",
    category: "Cloud Engineering",
    location: "London, UK / Hybrid",
    type: "Full-Time",
    experience: "8+ Years",
    desc: "Lead the design and migration of enterprise banking mainframes to secure, compliant Azure Landing Zones."
  },
  {
    id: "devops-lead-k8s",
    title: "Lead DevOps Engineer (Kubernetes & ArgoCD)",
    category: "DevOps",
    location: "Bangalore, India / Remote",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Configure automated GitOps continuous deployment workflows across multi-tenant Kubernetes clusters."
  },
  {
    id: "ai-rag-developer",
    title: "Senior AI Research & RAG Developer",
    category: "AI & Data",
    location: "New York, US / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Develop advanced retrieval-augmented generation search frameworks and semantic routers using Qdrant."
  },
  {
    id: "sec-engineer",
    title: "Zero-Trust Cybersecurity Specialist",
    category: "Cybersecurity",
    location: "Chennai, India / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    desc: "Deploy Cilium eBPF network microsegmentation and manage HashiCorp Vault secrets registries."
  },
  {
    id: "golang-microservices",
    title: "Senior Go / Microservices Developer",
    category: "Software Engineering",
    location: "Thoothukudi, India / Remote",
    type: "Full-Time",
    experience: "4+ Years",
    desc: "Construct high-performance, stateless APIs and serverless ledger modules for digital retail platforms."
  },
  {
    id: "product-manager-cloud",
    title: "Enterprise Product Manager - Cloud Management",
    category: "Product Development",
    location: "London, UK / Hybrid",
    type: "Full-Time",
    experience: "7+ Years",
    desc: "Own the product roadmap for our cost optimization and FinOps dashboard platform products."
  },
  {
    id: "digital-consultant",
    title: "Principal Digital Strategy Consultant",
    category: "Consulting",
    location: "New York, US / Hybrid",
    type: "Full-Time",
    experience: "10+ Years",
    desc: "Advise Fortune 500 boards on digital transformation roadmaps, cloud migrations, and security postures."
  },
  {
    id: "sales-director",
    title: "Director of Enterprise Sales - Cloud & AI",
    category: "Sales & Marketing",
    location: "London, UK / Remote",
    type: "Full-Time",
    experience: "8+ Years",
    desc: "Drive new client partnerships and solution consulting sales across European logistics sectors."
  },
  {
    id: "ops-lead",
    title: "Global IT Operations Lead",
    category: "Operations",
    location: "Bangalore, India / Hybrid",
    type: "Full-Time",
    experience: "6+ Years",
    desc: "Supervise our follow-the-sun SRE support schedules and manage enterprise SLA monitoring systems."
  }
];

const categories = [
  "All",
  "Cloud Engineering",
  "AI & Data",
  "DevOps",
  "Cybersecurity",
  "Software Engineering",
  "Product Development",
  "Consulting",
  "Sales & Marketing",
  "Operations"
];

const cultureValues = [
  {
    title: "Innovation",
    desc: "Always exploring new ideas, frameworks, and next-gen technologies to solve complex problems.",
    icon: "💡"
  },
  {
    title: "Ownership",
    desc: "Empowered decision-making. We trust our engineers to take the lead and deliver their best.",
    icon: "🎯"
  },
  {
    title: "Collaboration",
    desc: "One global team. We break down silos to co-engineer unified architectures across oceans.",
    icon: "🤝"
  },
  {
    title: "Excellence",
    desc: "Setting high engineering standards in code quality, security audits, and deployment stability.",
    icon: "⭐"
  },
  {
    title: "Learning",
    desc: "Continuous growth mindset. We sponsor certificates, run study groups, and celebrate learning.",
    icon: "📚"
  },
  {
    title: "Integrity",
    desc: "Total trust and transparency with our team members and clients in every engagement.",
    icon: "🛡️"
  }
];

const lifeImages = [
  { title: "Team Collaboration", desc: "Co-designing secure landing zones." },
  { title: "AI Research Lab", desc: "Tuning semantic graph routers." },
  { title: "Global Alliances Hub", desc: "Collaborating with Microsoft partners." },
  { title: "Engineering Summit", desc: "SREs sharing uptime logs." },
  { title: "University Hackathon", desc: "Mentoring next-gen cloud talent." },
  { title: "GitOps Launchpad", desc: "Celebrating zero secrets leaks." },
  { title: "SRE Operations Center", desc: "Monitoring latency budgets 24/7." }
];

const benefits = [
  { icon: "🏥", name: "Health & Wellness", desc: "Comprehensive medical cover and mental health care." },
  { icon: "📚", name: "Learning Budget", desc: "Sponsored cloud certifications and study guides." },
  { icon: "🏠", name: "Hybrid Working", desc: "Flexible schedules combining home office and modern spaces." },
  { icon: "🌎", name: "Global Mobility", desc: "Opportunities to work from our UK, US, and India locations." },
  { icon: "🏖", name: "Flexible Leave", desc: "Generous time off to rest, recharge, and enjoy life." },
  { icon: "🏆", name: "Recognition Programs", desc: "Performance rewards and team achievement milestones." },
  { icon: "💰", name: "Competitive Salary", desc: "Premium payouts, annual bonuses, and equity options." },
  { icon: "🚀", name: "Career Advancement", desc: "Structured progression tracks and architecture mentoring." }
];

const hiringSteps = [
  { num: "01", name: "Application", desc: "Submit your details or join our talent network." },
  { num: "02", name: "Screening", desc: "A brief conversation with our recruiters about your goals." },
  { num: "03", name: "Technical Review", desc: "A system design dialogue and coding review with architects." },
  { num: "04", name: "Structured Interview", desc: "Discussing team alignment, operational goals, and values." },
  { num: "05", name: "Strategic Offer", desc: "Competitive compensation proposal and onboarding details." },
  { num: "06", name: "Welcome to Devopstrio", desc: "Join our global team and launch your co-engineering career." }
];

const employeeStories = [
  {
    name: "Sarah Jenkins",
    role: "Senior Cloud Infrastructure Architect",
    photoBg: "bg-gradient-to-tr from-rose-500 to-indigo-600",
    story: "Joining Devopstrio allowed me to transition from legacy maintenance to building zero-trust landing zones for national infrastructure. The learning support here is unmatched—I earned three AWS certificates in my first year."
  },
  {
    name: "Anand Sharma",
    role: "Lead DevOps Specialist",
    photoBg: "bg-gradient-to-tr from-emerald-500 to-teal-600",
    story: "At Devopstrio, we operate as one team. I design Kubernetes architectures in Bangalore, collaborate with our UK strategy lead, and launch container pipelines for clients in New York. Ownership is real here."
  },
  {
    name: "Eleanor Vance",
    role: "AI & Data Engineer",
    photoBg: "bg-gradient-to-tr from-pink-500 to-orange-500",
    story: "We don't build standard chatbots. We prototype custom semantic routers and state graphs in our Innovation Labs. It's exciting to work in a company where engineering is the primary strategic focus."
  }
];

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "", note: "" });

  const filteredJobs = selectedCategory === "All"
    ? openPositionsData
    : openPositionsData.filter(job => job.category === selectedCategory);

  const handleApplyClick = (job: Job) => {
    setActiveJob(job);
    setFormSubmitted(false);
    setFormData({ name: "", email: "", resume: "", note: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setActiveJob(null);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-24 pb-16 overflow-hidden">
      {/* Dynamic application modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-900 rounded-[32px] p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(225,29,72,0.15)] animate-fadeIn">
            
            <button 
              onClick={() => setActiveJob(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/60 p-2 rounded-full border border-zinc-800 transition-colors"
            >
              <X size={16} />
            </button>

            {!formSubmitted ? (
              <>
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-2 font-bold">Apply Position</span>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{activeJob.title}</h3>
                <p className="text-zinc-500 text-xs mb-6 flex items-center gap-1.5 font-medium">
                  <MapPin size={12} className="text-rose-500" /> {activeJob.location} | <Briefcase size={12} className="text-zinc-500" /> {activeJob.type}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john.doe@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Resume / Portfolio Link</label>
                    <input 
                      type="url" 
                      required
                      placeholder="https://github.com/johndoe or Google Drive link"
                      value={formData.resume}
                      onChange={(e) => setFormData({...formData, resume: e.target.value})}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Cover Note (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us why you are interested in joining Devopstrio..."
                      value={formData.note}
                      onChange={(e) => setFormData({...formData, note: e.target.value})}
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300"
                  >
                    Submit Application <Send size={13} />
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-500 animate-bounce">
                  <Check size={28} className="stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-white">Application Received!</h4>
                <p className="text-zinc-450 text-xs font-light max-w-sm">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our recruitment specialists will review your credentials and follow up within 48 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 px-6 border-b border-zinc-900/60">
        {/* Neon rose background ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.07),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.03),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)] pointer-events-none" />

        <div className="max-w-site mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-zinc-550 mb-8">
            <Link href="/" className="hover:text-rose-500 transition-colors">HOME</Link>
            <ChevronRight size={10} className="text-zinc-700" />
            <span className="text-rose-500 font-bold uppercase">CAREERS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[2px] w-6 bg-rose-600 animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                    Careers at Devopstrio
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-light tracking-tight leading-tight mb-6 text-white">
                  Build the <span className="font-semibold text-rose-500">future</span> with us
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-2xl mb-10">
                  Join a global team of engineers, architects, consultants, and innovators transforming businesses through Cloud, AI, Data, and Digital Engineering. We design, deploy, and manage the backbone systems powering modern enterprises.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#open-positions"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
                  >
                    Explore Opportunities <ArrowUpRight size={14} className="stroke-[2.5]" />
                  </a>
                  <a
                    href="#talent-network"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-300 border border-zinc-800 hover:text-white hover:border-zinc-700 hover:bg-zinc-950/40 transition-all duration-300"
                  >
                    Join Our Talent Network
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Visual Collage */}
            <Reveal delay={0.2} className="relative w-full aspect-[1.2/1] rounded-[32px] overflow-hidden border border-zinc-900 bg-zinc-950/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              {/* Dynamic ambient highlight glow */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-rose-600/10 blur-[80px] pointer-events-none z-10" />
              
              <Image 
                src="/assets/careers/careers_collage.png"
                alt="Devopstrio engineering collaboration"
                fill
                priority
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end bg-black/40 backdrop-blur-md border border-zinc-900/80 p-4 rounded-2xl">
                <div>
                  <span className="block text-xs font-bold text-white">Innovation Hub</span>
                  <span className="block text-[10px] text-zinc-400">Co-engineering scalable enterprise platforms.</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-rose-500 border border-zinc-900" />
                  <div className="w-6 h-6 rounded-full bg-indigo-500 border border-zinc-900" />
                  <div className="w-6 h-6 rounded-full bg-emerald-500 border border-zinc-900" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY JOIN DEVOPSTRIO */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-left mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Why Us</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Accelerate your path in <span className="font-semibold text-rose-500">digital engineering</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accelerate Growth",
                desc: "Work on enterprise-scale cloud, artificial intelligence, and digital transformation architectures.",
                icon: <Briefcase size={22} className="text-rose-500" />
              },
              {
                title: "Global Corridors",
                desc: "Collaborate on secure software frameworks across office sites in the UK, US, and India.",
                icon: <Globe size={22} className="text-rose-500" />
              },
              {
                title: "Continuous Learning",
                desc: "Access cloud exam sponsorships, structured study cohorts, and advanced R&D labs.",
                icon: <BookOpen size={22} className="text-rose-500" />
              },
              {
                title: "Meaningful Impact",
                desc: "Build platforms that secure data, optimize operations, and solve complex technology issues.",
                icon: <Award size={22} className="text-rose-500" />
              }
            ].map((card, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-rose-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.012),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-rose-950/20 border border-rose-500/10 flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-150 mb-3 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LIFE AT DEVOPSTRIO */}
      <section className="py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
            {/* Storytelling Content */}
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[2px] w-6 bg-rose-600"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Life at Devopstrio</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                  People first. <span className="block font-semibold text-rose-500">Innovation always.</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                  At Devopstrio, we believe technology is built by people. We foster an inclusive, collaborative culture where curiosity, creativity, and continuous learning drive engineering excellence.
                </p>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Whether contributing to open-source cloud plugins, sharing custom Python libraries in study circles, or resolving peak load alerts, we operate as one team with a shared focus.
                </p>
              </Reveal>
            </div>

            {/* Visual Grid: 7 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lifeImages.map((img, idx) => (
                <Reveal key={idx} delay={idx * 0.05} className={`h-full ${idx === 0 ? "sm:col-span-2" : ""}`}>
                  <div className="group relative rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-end aspect-[1.8/1] hover:border-zinc-800 transition-all duration-300">
                    {/* Glowing corner indicator */}
                    <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-rose-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 text-left">
                      <span className="block text-xs font-semibold text-white mb-1">{img.title}</span>
                      <span className="block text-[10px] text-zinc-400 leading-relaxed font-light">{img.desc}</span>
                    </div>
                    {/* Background glass shine overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent opacity-90 group-hover:opacity-75 transition-opacity pointer-events-none" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR CULTURE */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-left mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Core Values</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                The values that guide our <span className="font-semibold text-rose-500">co-engineering decisions</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((val, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-rose-500/25 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div>
                    <span className="text-2xl block mb-6">{val.icon}</span>
                    <h3 className="text-sm font-semibold text-zinc-150 mb-3 group-hover:text-white transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-[11px] text-zinc-450 leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LEARNING & GROWTH */}
      <section className="py-24 bg-black border-b border-zinc-900/60">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            {/* Left Box: Certifications & Pathways */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[2px] w-6 bg-rose-600"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Growth Pathway</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                  Grow faster than your <span className="font-semibold text-rose-500">career path</span>
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-8">
                  We fund, sponsor, and celebrate cloud certifications and structured learning tracks across AWS, Microsoft Azure, and Google Cloud.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  { name: "Azure Solutions Architect Expert", progress: "94%", count: "18 Engineers certified" },
                  { name: "AWS Certified DevOps Engineer", progress: "88%", count: "24 Engineers certified" },
                  { name: "Google Cloud Professional Architect", progress: "82%", count: "12 Engineers certified" }
                ].map((cert, idx) => (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-5 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-zinc-200">{cert.name}</span>
                        <span className="text-xs font-bold text-rose-500 font-mono">{cert.progress}</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden mb-2">
                        <div className="bg-rose-600 h-full rounded-full" style={{ width: cert.progress }} />
                      </div>
                      <span className="text-[10px] text-zinc-500 font-medium block">{cert.count}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Box: Programs and Labs */}
            <div className="bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.02),transparent_75%)] pointer-events-none" />
              
              <div>
                <Reveal>
                  <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block mb-3 font-bold">Academic Tracks</span>
                  <h3 className="text-xl font-bold text-white mb-6">Continuous Development Programs</h3>
                </Reveal>

                <div className="space-y-6">
                  {[
                    { title: "AI Training & Graph Models Workshops", desc: "Structured sessions exploring LangGraph, vector indexes, and semantic caching." },
                    { title: "Leadership Acceleration Pathway", desc: "Career mentoring connecting senior architects with graduate engineers." },
                    { title: "Technical Mentorship Cycles", desc: "Weekly peer reviews auditing Kubernetes configurations and database query tuning." },
                    { title: "R&D Innovation Lab Sandboxes", desc: "Isolated sandboxes created on AWS to prototype security plug-ins." }
                  ].map((prog, idx) => (
                    <Reveal key={idx} delay={idx * 0.05} className="flex gap-4">
                      <div className="w-5 h-5 rounded-full bg-rose-950/30 border border-rose-500/20 flex items-center justify-center text-[10px] font-bold text-rose-500 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-200 mb-1">{prog.title}</span>
                        <span className="block text-[10px] text-zinc-450 leading-relaxed font-light">{prog.desc}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BENEFITS & REWARDS */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-left mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Perks & Rewards</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Benefits designed to support your <span className="font-semibold text-rose-500">wellbeing & growth</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((ben, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 hover:border-rose-500/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div>
                    <span className="text-xl block mb-4">{ben.icon}</span>
                    <h4 className="text-xs font-semibold text-zinc-150 mb-2 group-hover:text-white transition-colors">{ben.name}</h4>
                    <p className="text-[10px] text-zinc-450 leading-relaxed font-light">{ben.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: GLOBAL PRESENCE (MAP VISUALIZATION) */}
      <section className="py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-center">
            {/* Left Info */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[2px] w-6 bg-rose-600"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Global Presence</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug mb-6">
                  One team. <span className="block font-semibold text-rose-500">Multiple locations.</span> Unlimited opportunities.
                </h2>
                <p className="text-zinc-450 text-xs md:text-sm font-light leading-relaxed mb-8">
                  We design and maintain systems across offices in the UK, US, and India, coordinating delivery models that ensure continuous operations.
                </p>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { city: "London", country: "United Kingdom", role: "UK Consulting Hub" },
                  { city: "New York", country: "United States", role: "US Client Services" },
                  { city: "Bangalore", country: "India", role: "SRE Operations Center" },
                  { city: "Chennai", country: "India", role: "Cloud Delivery Center" },
                  { city: "Thoothukudi", country: "India", role: "IP & Frameworks Lab" }
                ].map((office, idx) => (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-4">
                      <span className="text-xs font-bold text-white block mb-0.5">{office.city}</span>
                      <span className="text-[9px] text-zinc-500 font-semibold block mb-2">{office.country}</span>
                      <span className="text-[9px] text-rose-500 font-bold uppercase tracking-wider block">{office.role}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Map Canvas (Interactive SVG Vector Map) */}
            <Reveal delay={0.15} className="relative w-full aspect-[1.6/1] bg-zinc-950/10 border border-zinc-900 rounded-[32px] overflow-hidden p-6 flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.03),transparent_75%)] pointer-events-none" />
              
              {/* World Grid Vector Map */}
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 text-zinc-700 stroke-zinc-800 fill-none stroke-[0.5]">
                {/* Simulated Grid Latitudes / Longitudes */}
                <line x1="0" y1="100" x2="1000" y2="100" strokeDasharray="3,3" />
                <line x1="0" y1="200" x2="1000" y2="200" strokeDasharray="3,3" />
                <line x1="0" y1="300" x2="1000" y2="300" strokeDasharray="3,3" />
                <line x1="0" y1="400" x2="1000" y2="400" strokeDasharray="3,3" />
                <line x1="200" y1="0" x2="200" y2="500" strokeDasharray="3,3" />
                <line x1="400" y1="0" x2="400" y2="500" strokeDasharray="3,3" />
                <line x1="600" y1="0" x2="600" y2="500" strokeDasharray="3,3" />
                <line x1="800" y1="0" x2="800" y2="500" strokeDasharray="3,3" />
                
                {/* World outline placeholder path to simulate world geography */}
                <path d="M150,150 Q180,120 220,180 T300,160 T350,220 T200,280 Z" />
                <path d="M480,100 Q550,80 620,120 T700,200 T600,350 T500,200 Z" />
                <path d="M720,250 Q780,220 840,280 T880,350 T750,420 Z" />
              </svg>

              {/* Glowing Office Locations overlay */}
              <div className="absolute inset-0">
                {/* London */}
                <div className="absolute top-[32%] left-[45%] group/pin">
                  <span className="absolute -top-6 -left-8 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">London Hub</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
                </div>

                {/* New York */}
                <div className="absolute top-[38%] left-[28%] group/pin">
                  <span className="absolute -top-6 -left-10 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">New York Hub</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
                </div>

                {/* Bangalore */}
                <div className="absolute top-[62%] left-[71%] group/pin">
                  <span className="absolute -top-6 -left-12 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">Bangalore SRE</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
                </div>

                {/* Chennai */}
                <div className="absolute top-[64%] left-[72%] group/pin">
                  <span className="absolute -top-6 -left-12 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">Chennai Delivery</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
                </div>

                {/* Thoothukudi */}
                <div className="absolute top-[68%] left-[71.5%] group/pin">
                  <span className="absolute -top-6 -left-12 bg-zinc-950 border border-zinc-800 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded text-white opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">Thoothukudi IP Lab</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center animate-ping absolute -inset-0.5" />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-rose-500 border border-black z-10 cursor-pointer" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 8: OPEN POSITIONS */}
      <section id="open-positions" className="py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-left mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Active Roles</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Explore our current <span className="font-semibold text-rose-500">open positions</span>
              </h2>
              <p className="text-zinc-500 text-xs md:text-sm font-light mt-2 max-w-xl">
                Filter roles by engineering domain and find the right place to build your technology career.
              </p>
            </Reveal>
          </div>

          {/* Category Filter Chips */}
          <Reveal className="mb-10 flex flex-wrap gap-2 justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-rose-600 border-rose-600 text-white"
                    : "bg-zinc-950/20 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Jobs Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                <Reveal key={job.id} delay={idx * 0.05} className="h-full">
                  <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-rose-500/35 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.015),transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-rose-950/30 border border-rose-500/20 text-[9px] font-bold tracking-wide uppercase text-rose-500 px-2 py-0.5 rounded">
                          {job.category}
                        </span>
                        <span className="bg-zinc-900/60 border border-zinc-850 text-[9px] font-bold text-zinc-400 px-2 py-0.5 rounded">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-white mb-2 leading-tight group-hover:text-rose-500 transition-colors">
                        {job.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-550 mb-4 font-mono">
                        <MapPin size={11} className="text-zinc-650" /> {job.location} | <Clock size={11} className="text-zinc-650" /> {job.experience}
                      </div>

                      <p className="text-[11px] text-zinc-450 leading-relaxed font-light mb-6">
                        {job.desc}
                      </p>
                    </div>

                    <button 
                      onClick={() => handleApplyClick(job)}
                      className="w-full inline-flex items-center justify-between border border-zinc-900 group-hover:border-rose-500/20 bg-zinc-950/40 rounded-xl px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-350 group-hover:text-white transition-colors"
                    >
                      <span>View Position &rarr;</span>
                      <span className="w-5 h-5 rounded-full bg-zinc-900 group-hover:bg-rose-950/20 flex items-center justify-center text-zinc-500 group-hover:text-rose-500 transition-colors">
                        <ArrowUpRight size={11} className="stroke-[2.5]" />
                      </span>
                    </button>
                  </div>
                </Reveal>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-zinc-500 text-xs font-light">
                No active openings in this category. Join our talent network below to get notified of new roles!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 9: HIRING PROCESS */}
      <section className="py-24 bg-black border-b border-zinc-900/60 relative">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-left mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Recruitment Pathway</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Our collaborative <span className="font-semibold text-rose-500">hiring process</span>
              </h2>
            </Reveal>
          </div>

          {/* Timeline Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            <div className="absolute top-[40px] left-[30px] right-[30px] h-[1px] bg-zinc-900 hidden lg:block z-0 pointer-events-none" />
            
            {hiringSteps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full relative z-10">
                <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-6 hover:border-zinc-800 transition-all duration-300 text-left">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 group-hover:bg-rose-950/20 border border-zinc-850 group-hover:border-rose-500/20 flex items-center justify-center mb-6 text-xs font-bold text-zinc-400 group-hover:text-rose-500 transition-colors">
                    {step.num}
                  </div>
                  <h4 className="text-xs font-bold text-zinc-200 mb-2 leading-tight group-hover:text-white transition-colors">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-zinc-450 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: EMPLOYEE STORIES */}
      <section className="py-24 bg-[#030303] border-b border-zinc-900/60">
        <div className="max-w-site mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl text-left mb-16">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-rose-600"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">Testimonials</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
                Meet the people behind <span className="font-semibold text-rose-500">the innovation</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {employeeStories.map((story, idx) => (
              <Reveal key={idx} delay={idx * 0.05} className="h-full">
                <div className="group h-full bg-zinc-950/20 border border-zinc-900 rounded-3xl p-8 hover:border-zinc-850 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.01)),transparent_70%)] pointer-events-none" />
                  
                  <div>
                    {/* Quotation mark */}
                    <span className="text-4xl text-rose-500/20 font-serif leading-none block mb-6 select-none">“</span>
                    
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-light mb-8 italic">
                      {story.story}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-zinc-900/80 pt-6">
                    <div className={`w-10 h-10 rounded-full ${story.photoBg} flex items-center justify-center text-xs font-bold text-white shadow-md`}>
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-zinc-200 block">{story.name}</span>
                      <span className="text-[9px] text-zinc-550 font-semibold block">{story.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA & TALENT NETWORK */}
      <section id="talent-network" className="w-full py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(225,29,72,0.04),transparent_65%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-[2px] w-6 bg-rose-600"></span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-rose-500">
                Join Us
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
              Ready to build <span className="font-semibold text-rose-500">what's next?</span>
            </h2>

            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-10">
              Join a team passionate about innovation, engineering excellence, and creating meaningful impact for organizations worldwide. Submit your resume below to join our talent network database.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-zinc-950/30 border border-zinc-900 rounded-[32px] p-8 max-w-lg mx-auto text-left relative">
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-6">Talent Network Portal</span>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! You have joined our Talent Network.");
                }} 
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">First Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="John" 
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Last Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Doe" 
                      className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john.doe@enterprise.com" 
                    className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-650 focus:border-rose-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[9px] font-mono tracking-wider text-zinc-450 uppercase mb-2">Preferred Domain</label>
                  <select 
                    className="w-full bg-zinc-900/40 border border-zinc-850 rounded-xl px-4 py-3 text-xs text-white focus:border-rose-500 focus:outline-none transition-colors"
                  >
                    <option value="cloud">Cloud Engineering</option>
                    <option value="ai">AI & Data</option>
                    <option value="devops">DevOps & SRE</option>
                    <option value="sec">Cybersecurity</option>
                    <option value="dev">Software Engineering</option>
                    <option value="consulting">Technology Consulting</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300"
                >
                  Join Talent Network <ArrowUpRight size={13} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
