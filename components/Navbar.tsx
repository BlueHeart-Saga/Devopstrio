"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    id: "ai-data",
    name: "AI & Data",
    href: "/services/ai-data",
    items: [
      { name: "Artificial Intelligence", desc: "Enterprise AI tools: Recruiter, Self-Assessment, AI Agents, Chatbots...", href: "/services/ai-data/artificial-intelligence" },
      { name: "AI Consulting Services", desc: "Strategy development, safe integration, audits and deployment roadmaps", href: "/services/ai-data/ai-consulting" },
      { name: "AI Tools for Business Transformation", desc: "Tailored generative AI solutions and pipeline setups", href: "/services/ai-data/ai-tools" },
      { name: "Data Science", desc: "Workflow analysis, metrics tracking, and semantic database automations", href: "/services/ai-data/data-science" },
      { name: "Database Creation and Management", desc: "Building scalable transactional storage with modern tech stack", href: "/services/ai-data/database-management" },
      { name: "Hire AI Engineers", desc: "Dedicated certified machine learning and data specialists", href: "/services/ai-data/hire-ai-engineers" },
      { name: "AI Powered Robotic Integration", desc: "Robotic systems orchestration across hardware and cloud runtimes", href: "/services/ai-data/robotic-integration" }
    ]
  },
  {
    id: "app-development",
    name: "Application Development",
    href: "/services/app-development",
    items: [
      { name: "Web Development", desc: "Modern, secure frontend and backend web applications", href: "/services/app-development#web" },
      { name: "Mobile App Development", desc: "Native iOS, Android, and cross-platform Flutter/React Native development", href: "/services/app-development#mobile" },
      { name: "CMS & E-commerce", desc: "Headless CMS, Shopify integrations, Custom checkout solutions", href: "/services/app-development#cms" },
      { name: "PWA & SPA Development", desc: "Highly interactive progressive web apps", href: "/services/app-development#pwa" }
    ]
  },
  {
    id: "cloud",
    name: "Cloud",
    href: "/services/cloud",
    items: [
      { name: "DevOps Consulting", desc: "CI/CD setups, pipeline audits, GitOps workflows", href: "/services/cloud#devops" },
      { name: "Cloud Migration", desc: "Zero-downtime database and app migration to AWS, Azure, GCP", href: "/services/cloud#migration" },
      { name: "Infrastructure as Code", desc: "Terraform, Pulumi, and CloudFormation infrastructure templates", href: "/services/cloud#iac" },
      { name: "Kubernetes & Containers", desc: "EKS, GKE, AKS architecture, cluster resizing and service meshes", href: "/services/cloud#k8s" }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    href: "/services/cybersecurity",
    items: [
      { name: "Penetration Testing", desc: "Ethical hacking, API validation, and system vulnerability audits", href: "/services/cybersecurity#pentest" },
      { name: "Security Management", desc: "SOC 2, ISO 27001, HIPAA compliance framework setups", href: "/services/cybersecurity#compliance" },
      { name: "Security Ops Center (SOC)", desc: "24/7 threat monitoring, intrusion detection, and incident response", href: "/services/cybersecurity#soc" }
    ]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    href: "/services/digital-transformation",
    items: [
      { name: "IT Strategy Consulting", desc: "Digital roadmap development, tech stack modernization plan", href: "/services/digital-transformation#it" },
      { name: "Legacy Modernization", desc: "Monolith-to-microservices refactoring and database architecture redesign", href: "/services/digital-transformation#legacy" }
    ]
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    href: "/services/software-engineering",
    items: [
      { name: "Enterprise Systems", desc: "Highly scalable, distributed backends in Go, Rust, Java, Node.js", href: "/services/software-engineering#backend" },
      { name: "API & Microservices", desc: "GraphQL/REST API gateways, event-driven architectures with Kafka", href: "/services/software-engineering#microservices" }
    ]
  },
  {
    id: "enterprise-applications",
    name: "Enterprise Applications",
    href: "/services/enterprise-applications",
    items: [
      { name: "ERP & CRM Integration", desc: "Custom Salesforce, SAP, and Dynamics integration and dashboards", href: "/services/enterprise-applications#erp" }
    ]
  },
  {
    id: "staff-augmentation",
    name: "Staff Augmentation",
    href: "/services/staff-augmentation",
    items: [
      { name: "Dedicated Developers", desc: "Hire senior cloud, backend, frontend, and AI engineers", href: "/services/staff-augmentation#dedicated" }
    ]
  },
  {
    id: "support-services",
    name: "Support Services",
    href: "/services/support-services",
    items: [
      { name: "24/7 Platform SRE Support", desc: "Continuous uptime management, database failovers, SRE monitoring", href: "/services/support-services#sre" }
    ]
  }
];

const servicesList = serviceCategories.map(cat => ({ name: cat.name, href: cat.href }));

const industriesList = [
  { name: "Financial Services", desc: "Secure fintech software, banking platforms, and compliant crypto solutions.", href: "/industries/financial-services" },
  { name: "Healthcare", desc: "HIPAA-compliant telehealth apps, EHR systems, and patient monitoring.", href: "/industries/healthcare" },
  { name: "Logistics", desc: "Supply chain automation, fleet tracking, and AI warehouse management.", href: "/industries/logistics" },
  { name: "Travel & Hospitality", desc: "Booking engine optimization and smart hospitality management systems.", href: "/industries/travel-hospitality" },
  { name: "Automotive", desc: "Connected vehicle ecosystems, ADAS integrations, and telemetry solutions.", href: "/industries/automotive" },
  { name: "Media & Entertainment", desc: "High-bandwidth VOD platforms, live broadcasting, and asset management.", href: "/industries/media-entertainment" },
  { name: "Telecom", desc: "Scalable OSS/BSS infrastructures, 5G cloud services, and telecom analytics.", href: "/industries/telecom" },
  { name: "Manufacturing & Retail", desc: "Industrial IoT integrations, smart POS software, and predictive maintenance.", href: "/industries/manufacturing-retail" }
];

const ecosystemList = [
  { name: "AWS Partnership", desc: "Certified AWS architects delivering secure, scalable, and highly available infrastructure.", href: "/ecosystem/aws" },
  { name: "Azure Solutions", desc: "Enterprise-grade Azure deployments, seamless migrations, and hybrid cloud setups.", href: "/ecosystem/azure" },
  { name: "Google Cloud Ecosystem", desc: "Data-driven GCP environments, Kubernetes optimization, and machine learning integrations.", href: "/ecosystem/google-cloud" },
  { name: "CNCF Cloud Native Stack", desc: "Modernizing applications with Kubernetes, Helm, and the CNCF open-source ecosystem.", href: "/ecosystem/cncf" },
  { name: "Snowflake & Databricks", desc: "Modern data architectures for real-time analytics, ETL, and AI data warehousing.", href: "/ecosystem/data-platforms" },
  { name: "HashiCorp Stack", desc: "Infrastructure automation using Terraform and Vault for secure, compliant deployments.", href: "/ecosystem/hashicorp" }
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("ai-data");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={navRef} className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
      <header
        className={`w-full max-w-7xl rounded-full border transition-all duration-350 ${isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-24 opacity-0 pointer-events-none"
          } ${scrolled
            ? "border-zinc-800 bg-[#030303]/95 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.6)] py-4 px-8"
            : "border-zinc-900/50 bg-[#030303]/60 backdrop-blur-sm py-4 px-8"
          } text-white flex items-center justify-between`}
      >
        {/* Brand Logo & Name (Improved Logo Size) */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/assets/logo/logo.png"
            alt="devopstrio logo"
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-105 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
            Devopstrio
          </span>
        </Link>

        {/* Center Links (Improved Link Text Sizes to text-sm) */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7 relative">

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("services")}
          >
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "services" && (
              <div className="fixed left-1/2 -translate-x-1/2 top-[90px] w-[1200px] max-w-[95vw] animate-fadeIn pointer-events-auto">
                <div className="bg-black border border-zinc-850 rounded-2xl p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[280px_240px_1fr] gap-8 text-left relative">

                  {/* Gloss reflection line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

                  {/* Visual Promo Column (HCLTech Style) */}
                  <div className="relative overflow-hidden rounded-xl border border-zinc-900 p-5 flex flex-col justify-between h-[340px] group bg-white">
                    <img src="/assets/wavebg/navbar/services.png" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-mono tracking-widest text-red-600 uppercase block mb-3 font-bold">Enterprise Acceleration</span>
                      <h4 className="text-sm font-bold leading-snug text-red-600 mb-2">Powering Next-Gen Solutions</h4>
                      <p className="text-[10px] text-black font-bold leading-relaxed">
                        We design custom roadmaps and build robust frameworks tailored to satisfy strict compliance and high scalability standards.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setActiveMenu(null)}
                      className="relative z-10 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-700 hover:text-black transition-colors mt-4"
                    >
                      Connect with us &rarr;
                    </Link>
                  </div>

                  {/* Middle sidebar with categories */}
                  <div className="flex flex-col border-r border-zinc-900 pr-4 gap-1">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-3 mb-2">Practice Areas</span>
                    {serviceCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        onClick={() => {
                          setActiveMenu(null);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 text-left ${activeCategory === cat.id
                          ? "bg-zinc-900 text-rose-500"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-900/30"
                          }`}
                      >
                        <span>{cat.name}</span>
                        {activeCategory === cat.id && <span className="text-[10px]">&rarr;</span>}
                      </button>
                    ))}
                  </div>

                  {/* Right panel with active sub-services */}
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block px-2 mb-2">Strategic Capabilities</span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {serviceCategories.find(c => c.id === activeCategory)?.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group/subitem block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                        >
                          <span className="block text-sm font-bold text-white group-hover/subitem:text-rose-500 transition-colors mb-1">
                            {item.name}
                          </span>
                          <span className="block text-xs text-zinc-400 font-medium leading-relaxed">
                            {item.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("industries")}
          >
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
              Industries <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "industries" && (
              <div className="fixed left-1/2 -translate-x-1/2 top-[90px] w-[1200px] max-w-[95vw] animate-fadeIn pointer-events-auto">
                <div className="bg-black border border-zinc-850 rounded-2xl p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[280px_1fr] gap-8 text-left relative">

                  {/* Gloss reflection line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-850 to-transparent pointer-events-none" />

                  {/* Left Callout Box */}
                  <div className="relative overflow-hidden rounded-xl border border-zinc-900 p-5 flex flex-col justify-between h-[340px] group bg-white">
                    <img src="/assets/wavebg/navbar/industries.png" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-mono tracking-widest text-red-600 uppercase block mb-3 font-bold">Sectors</span>
                      <h4 className="text-sm font-bold leading-snug text-red-600 mb-2">Compliance First</h4>
                      <p className="text-[10px] text-black font-bold leading-relaxed">
                        Deploying regulatory-safe software runtimes across international sectors.
                      </p>
                    </div>
                    <Link
                      href="/industries"
                      onClick={() => setActiveMenu(null)}
                      className="relative z-10 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-red-700 hover:text-black transition-colors mt-4"
                    >
                      All Domains &rarr;
                    </Link>
                  </div>

                  {/* Right industries list grid */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-4">Target Sectors</span>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {industriesList.map((ind) => (
                        <Link
                          key={ind.name}
                          href={ind.href}
                          onClick={() => setActiveMenu(null)}
                          className="group/ind block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                        >
                          <span className="block text-sm font-bold text-white group-hover/ind:text-rose-500 transition-colors mb-1">
                            {ind.name}
                          </span>
                          <span className="block text-xs text-zinc-400 font-medium leading-relaxed">
                            {ind.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Ecosystem Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("ecosystem")}
          >
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
              Ecosystem <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === "ecosystem" ? "rotate-180" : ""}`} />
            </button>
            {activeMenu === "ecosystem" && (
              <div className="fixed left-1/2 -translate-x-1/2 top-[90px] w-[1200px] max-w-[95vw] animate-fadeIn pointer-events-auto">
                <div className="bg-black border border-zinc-850 rounded-2xl p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] grid grid-cols-[280px_1fr] gap-8 text-left relative">

                  {/* Gloss reflection line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-850 to-transparent pointer-events-none" />

                  {/* Left Callout */}
                  <div className="relative overflow-hidden rounded-xl border border-zinc-900 p-5 flex flex-col justify-between h-[340px] group bg-white">
                    <img src="/assets/wavebg/navbar/ecosystem.png" alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-mono tracking-widest text-red-600 uppercase block mb-3 font-bold">Alliances</span>
                      <h4 className="text-sm font-bold leading-snug text-red-600 mb-2">Global Clouds</h4>
                      <p className="text-[10px] text-black font-bold leading-relaxed">
                        Certified architectures for major cloud providers.
                      </p>
                    </div>
                  </div>

                  {/* Right List */}
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block mb-4">Partner Networks</span>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {ecosystemList.map((eco) => (
                        <Link
                          key={eco.name}
                          href={eco.href}
                          onClick={() => setActiveMenu(null)}
                          className="group/eco block p-2 rounded-lg hover:bg-zinc-900/30 transition-colors"
                        >
                          <span className="block text-sm font-bold text-white group-hover/eco:text-rose-500 transition-colors mb-1">
                            {eco.name}
                          </span>
                          <span className="block text-xs text-zinc-400 font-medium leading-relaxed">
                            {eco.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Regular Links */}
          <Link href="/#insights" className="px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
            Insights
          </Link>
          <Link href="/#careers" className="px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
            Careers
          </Link>
          <Link href="/about" className="px-3 py-1.5 text-[15px] font-medium text-zinc-300 hover:text-white transition-colors">
            About
          </Link>
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold tracking-wide text-white border border-rose-600 bg-rose-600/5 hover:bg-rose-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(225,29,72,0.35)]"
          >
            Contact Us <ArrowUpRight size={13} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-[#000000]/98 backdrop-blur-lg flex flex-col p-6 border-t border-zinc-900 pointer-events-auto animate-fadeIn lg:hidden">
          <div className="flex flex-col gap-6 overflow-y-auto pb-8">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Services</span>
              <div className="flex flex-col gap-3 pl-2">
                {servicesList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Industries</span>
              <div className="flex flex-col gap-3 pl-2">
                {industriesList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 block mb-3 font-mono">Ecosystem</span>
              <div className="flex flex-col gap-3 pl-2">
                {ecosystemList.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs text-zinc-300 hover:text-rose-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-zinc-900 my-2" />

            <Link
              href="/#insights"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-zinc-200 hover:text-white"
            >
              Insights
            </Link>
            <Link
              href="/#careers"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-zinc-200 hover:text-white"
            >
              Careers
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-zinc-200 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600"
            >
              Contact Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
