
"use client";

import React, { useState, useMemo } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, Mail, Building, User, Send, CheckCircle, Award, Check } from "lucide-react";
import { AwardsList } from "@/sections/about/AwardsList";

// Premium business partners with detailed professional descriptions
const businessPartners = [
  {
    name: "Microsoft",
    logo: "/assets/Home-page/partners/Microsoft.svg",
    location: "Global Alliance",
    desc: "Collaborating on global Azure cloud modernization deployments, SaaS migrations, and zero-trust identity architectures for enterprise customers.",
  },
  {
    name: "ServiceNow",
    logo: "/assets/Home-page/partners/servicenow.png",
    location: "Enterprise Workflow Systems",
    desc: "Building digital workflow integrations and IT Service Management (ITSM) automation systems to optimize operational agility and developer velocity.",
  },
  {
    name: "NHS (National Health Service)",
    logo: "/assets/Home-page/partners/NHS.svg",
    location: "United Kingdom",
    desc: "Delivering secure, compliant patient data registry integrations, cloud database structures, and platform performance tuning under strict healthcare standards.",
  },
  {
    name: "BT Group",
    logo: "/assets/Home-page/partners/BT.svg",
    location: "United Kingdom",
    desc: "Partnering on high-performance network orchestration, telecommunications middleware, and automated billing service portals.",
  },
  {
    name: "Lenovo Group",
    logo: "/assets/Home-page/partners/lenovo.svg",
    location: "Global Hardware & Systems",
    desc: "Co-engineering robust data center structures, bare-metal server provisioning APIs, and hybrid compute orchestration models.",
  },
  {
    name: "Airbnb",
    logo: "/assets/Home-page/partners/Airbnb.svg",
    location: "Global Platform",
    desc: "Optimizing cloud compute efficiency, scaling serverless backend APIs, and deploying automated deployment pipelines.",
  },
  {
    name: "ASDA",
    logo: "/assets/Home-page/partners/ASDA.svg",
    location: "United Kingdom",
    desc: "Accelerating retail database modernization, secure transaction logging grids, and low-latency stock tracking microservices.",
  },
  {
    name: "Boviet Solar",
    logo: "/assets/Home-page/partners/Boviet_Solar.png",
    location: "Global Energy Systems",
    desc: "Deploying cloud-native data collection models, real-time IoT device metrics, and solar telemetry dashboard systems.",
  },
  {
    name: "Costco Wholesale",
    logo: "/assets/Home-page/partners/Costco.svg",
    location: "Global Retail",
    desc: "Developing secure customer portal systems, scaling backend microservices, and implementing automated testing frameworks.",
  },
  {
    name: "Metrobank",
    logo: "/assets/Home-page/partners/Metrobank.svg",
    location: "United Kingdom",
    desc: "Supporting FSQS-compliant core banking upgrades, secure credit processing APIs, and continuous threat monitoring solutions.",
  },
  {
    name: "Virgin Money",
    logo: "/assets/Home-page/partners/Virgin.svg",
    location: "United Kingdom",
    desc: "Co-developing next-gen mobile banking features, secure API integrations, and low-latency ledger replication databases.",
  },
  {
    name: "Appian",
    logo: "/assets/Home-page/partners/appian.svg",
    location: "Global Low-Code System",
    desc: "Integrating Appian's low-code suite with automated CI/CD pipelines, accelerating enterprise-wide application delivery.",
  },
  {
    name: "BP PLC",
    logo: "/assets/Home-page/partners/bp-logo.svg",
    location: "Global Energy",
    desc: "Supporting high-throughput telemetry data processing pipelines, predictive asset analysis models, and cloud governance frameworks.",
  },
  {
    name: "GoDaddy",
    logo: "/assets/Home-page/partners/godaddy.svg",
    location: "Global Infrastructure",
    desc: "Partnering on small-to-medium enterprise cloud tools, automated DNS configuration scripts, and scalable hosting systems.",
  },
  {
    name: "GXO Logistics",
    logo: "/assets/Home-page/partners/gxo.svg",
    location: "Global Logistics",
    desc: "Building warehouse automation dashboards, real-time cargo shipment routes, and multi-tenant supply chain portals.",
  },
  {
    name: "Paymentology",
    logo: "/assets/Home-page/partners/paymentology.svg",
    location: "Fintech Payments",
    desc: "Orchestrating credit and debit transaction routes, FSQS registered card authentication systems, and multi-currency ledgers.",
  },
  {
    name: "Topland Group",
    logo: "/assets/Home-page/partners/topland.svg",
    location: "United Kingdom",
    desc: "Deploying secure portfolio assets dashboard trackers, real-time investment analytics, and cloud access governance."
  }
];

// Tech partners and technical tool ecosystem list
const techTools = [
  // Cloud & Containers
  {
    name: "AWS",
    logo: "/assets/Tech-icons/amazon-aws-logo_svgstack_com_7491780931192.svg",
    category: "Cloud & DevOps",
    desc: "High-scale serverless deployments, multi-region database replication, and enterprise IAM boundaries."
  },
  {
    name: "Microsoft Azure",
    logo: "/assets/Tech-icons/microsoft-azure-logo_svgstack_com_7501780931055.svg",
    category: "Cloud & DevOps",
    desc: "Enterprise landing zones, AKS Kubernetes container groups, and Azure Active Directory integrations."
  },
  {
    name: "Google Cloud",
    logo: "/assets/Tech-icons/google-cloud-logo_svgstack_com_28371780931185.svg",
    category: "Cloud & DevOps",
    desc: "BigQuery high-speed data analytics, Google Kubernetes Engine (GKE), and Vertex AI models."
  },
  {
    name: "Docker",
    logo: "/assets/Tech-icons/docker-logo_svgstack_com_28191780931128.svg",
    category: "Cloud & DevOps",
    desc: "Application containerization for consistent execution, lightweight sandboxes, and registry uploads."
  },
  {
    name: "GitHub",
    logo: "/assets/Tech-icons/github-logo-svg_svgstack_com_28391780931442.svg",
    category: "Cloud & DevOps",
    desc: "Enterprise repository hosting, automated GitHub Actions pipelines, and code review management."
  },
  {
    name: "GitLab",
    logo: "/assets/Tech-icons/gitlab-logo_svgstack_com_28401780931548.svg",
    category: "Cloud & DevOps",
    desc: "Full DevOps lifecycle management, automated container scans, and self-hosted build agents."
  },

  // Languages & Runtimes
  {
    name: "Node.js",
    logo: "/assets/Tech-icons/nodejs-logo_svgstack_com_28911780931118.svg",
    category: "Languages & Frameworks",
    desc: "High-concurrency backend execution, real-time websockets, and event-driven API endpoints."
  },
  {
    name: "Python",
    logo: "/assets/Tech-icons/python-logo_svgstack_com_29121780931061.svg",
    category: "Languages & Frameworks",
    desc: "Generative AI orchestration, data science libraries, and automated system scripts."
  },
  {
    name: "Go (Golang)",
    logo: "/assets/Tech-icons/go-lang-logo_svgstack_com_28411780931472.svg",
    category: "Languages & Frameworks",
    desc: "Ultra-fast compiled backends, high-concurrency microservices, and Kubernetes operator tools."
  },
  {
    name: "TypeScript",
    logo: "/assets/Tech-icons/typescript-logo_svgstack_com_31481780931142.svg",
    category: "Languages & Frameworks",
    desc: "Type-safe JavaScript app architecture, preventing runtime failures in high-volume systems."
  },
  {
    name: "Java",
    logo: "/assets/Tech-icons/java-logo_svgstack_com_28601780931218.svg",
    category: "Languages & Frameworks",
    desc: "Spring Boot banking architectures, secure microservices, and legacy application migration."
  },
  {
    name: "React",
    logo: "/assets/Tech-icons/react-icon_svgstack_com_29171780931136.svg",
    category: "Languages & Frameworks",
    desc: "Component-driven web rendering, virtual DOM state optimization, and interactive pages."
  },
  {
    name: "Next.js",
    logo: "/assets/Tech-icons/nextjs-logo_svgstack_com_28891780931519.svg",
    category: "Languages & Frameworks",
    desc: "Server-side rendering, SEO-optimized static sites, and modern API routing integration."
  },
  {
    name: "Tailwind CSS",
    logo: "/assets/Tech-icons/tailwindcss-logo_svgstack_com_31451780931467.svg",
    category: "Languages & Frameworks",
    desc: "Utility-first design tokens, responsive UI structures, and lightweight stylesheets."
  },

  // Fintech Core Banking
  {
    name: "Mambu",
    logo: "/assets/Home-page/Techtools/mambu.svg",
    category: "Fintech Core Banking",
    desc: "Cloud-native core banking SaaS orchestration, flexible loans engines, and open financial APIs."
  },
  {
    name: "Temenos",
    logo: "/assets/Home-page/Techtools/temenos.svg",
    category: "Fintech Core Banking",
    desc: "Core bank ledgers, retail and corporate transactional databases, and wealth management."
  },
  {
    name: "Thought Machine",
    logo: "/assets/Home-page/Techtools/thought-machine.svg",
    category: "Fintech Core Banking",
    desc: "Smart-contract core banking ledgers, offering extreme customization and database scaling."
  },
  {
    name: "Backbase",
    logo: "/assets/Home-page/Techtools/Backbase.svg",
    category: "Fintech Core Banking",
    desc: "Engagement banking UI platforms, customer onboarding, and omni-channel portals."
  },
  {
    name: "nCino",
    logo: "/assets/Home-page/Techtools/ncino.svg",
    category: "Fintech Core Banking",
    desc: "Commercial loan processing and portfolio management built natively on Salesforce."
  },
  {
    name: "Modulr",
    logo: "/assets/Home-page/Techtools/Modulr_1.svg",
    category: "Fintech Core Banking",
    desc: "Automated payment processing APIs, instant virtual accounts creation, and settlement grids."
  },
  {
    name: "Bankable",
    logo: "/assets/Home-page/Techtools/bankable.svg",
    category: "Fintech Core Banking",
    desc: "White-label card programs, e-wallets APIs, and digital ledger solutions."
  },
  {
    name: "Railsr",
    logo: "/assets/Home-page/Techtools/railsr.svg",
    category: "Fintech Core Banking",
    desc: "Embedded finance API systems, card issuance services, and virtual account tools."
  },

  // Databases & Middleware
  {
    name: "PostgreSQL",
    logo: "/assets/Tech-icons/postgre-sql-logo_svgstack_com_29021780931526.svg",
    category: "Databases & Middleware",
    desc: "ACID-compliant transactional database management, JSON indexing, and read replicas."
  },
  {
    name: "MongoDB",
    logo: "/assets/Tech-icons/mongo-db-logo_svgstack_com_28831780931486.svg",
    category: "Databases & Middleware",
    desc: "NoSQL document storage, horizontal scale clustering, and dynamic schema designs."
  },
  {
    name: "Redis",
    logo: "/assets/Tech-icons/redis-logo_svgstack_com_29201780931292.svg",
    category: "Databases & Middleware",
    desc: "Ultra-fast in-memory caching systems, distributed key-value maps, and pub-sub channels."
  },
  {
    name: "MuleSoft",
    logo: "/assets/Home-page/Techtools/mulesoft.svg",
    category: "Databases & Middleware",
    desc: "Enterprise API integration, ESB data buses, real-time middleware routing, and connectors."
  },
  {
    name: "GraphQL",
    logo: "/assets/Tech-icons/graphql_svgstack_com_28421780931889.svg",
    category: "Databases & Middleware",
    desc: "Declarative API query parsing, microservices aggregation, and typed schemas."
  }
];



export default function PartnershipsCertificationsPage() {
  const [activeTab, setActiveTab] = useState<"business" | "tech" | "certifications" | "join">("business");

  // Search & filter states for Business Partners
  const [bizSearch, setBizSearch] = useState("");
  const filteredBusiness = useMemo(() => {
    return businessPartners.filter(
      (p) =>
        p.name.toLowerCase().includes(bizSearch.toLowerCase()) ||
        p.location.toLowerCase().includes(bizSearch.toLowerCase())
    );
  }, [bizSearch]);

  // Search & Category states for Tech Tools
  const [techSearch, setTechSearch] = useState("");
  const [selectedTechCategory, setSelectedTechCategory] = useState("All");

  const techCategories = useMemo(() => {
    return ["All", ...new Set(techTools.map((t) => t.category))];
  }, []);

  const filteredTechTools = useMemo(() => {
    return techTools.filter((t) => {
      const matchesSearch = t.name.toLowerCase().includes(techSearch.toLowerCase());
      const matchesCategory = selectedTechCategory === "All" || t.category === selectedTechCategory;
      return matchesSearch && matchesCategory;
    });
  }, [techSearch, selectedTechCategory]);

  // Partner with us form submission states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    type: "Business Partner",
    message: ""
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        company: "",
        email: "",
        type: "Business Partner",
        message: ""
      });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-16 font-sans relative">
      <title>Partnerships & Certifications | Devopstrio</title>
      <meta name="description" content="Our industry certifications and co-engineering alliances with AWS, Microsoft Azure, Google Cloud, and Oracle." />
      <link rel="canonical" href="https://devopstrio.co.uk/about/partnerships-certifications" />
      {/* Decorative top lighting glow */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08),transparent_60%)] pointer-events-none z-0" />

      {/* Page Header */}
      <section className="pt-20 pb-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <span className="text-[10px] font-black tracking-widest text-rose-500 uppercase block mb-3">
              ALLIANCES & COMPLIANCE
            </span>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-white leading-tight">
              Partnerships & <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Accreditations</span>
            </h1>
            <p className="text-zinc-300 font-extrabold max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              We collaborate with global enterprise leaders and technology developers to engineer compliant, high-throughput software and secure cloud infrastructure systems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="relative z-10 max-w-site mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-950/80 border border-white/5 rounded-2xl max-w-3xl mx-auto backdrop-blur-xl">
          <button
            onClick={() => setActiveTab("business")}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "business"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-950/40"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            Business Partners
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "tech"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-950/40"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            Tech Partners
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "certifications"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-950/40"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            Certifications
          </button>
          <button
            onClick={() => setActiveTab("join")}
            className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${activeTab === "join"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-950/40"
                : "text-zinc-400 hover:text-white"
              }`}
          >
            Partner With Us
          </button>
        </div>
      </section>

      {/* Main Dynamic View Panels */}
      <section className="relative z-10 max-w-site mx-auto px-6 md:px-12 lg:px-20 pb-24">
        <AnimatePresence mode="wait">

          {/* BUSINESS PARTNERS VIEW */}
          {activeTab === "business" && (
            <motion.div
              key="business-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Search Bar */}
              <div className="max-w-lg">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-4 h-4 text-rose-500" />
                  <input
                    type="text"
                    placeholder="Search business partners by name or region..."
                    value={bizSearch}
                    onChange={(e) => setBizSearch(e.target.value)}
                    className="w-full bg-zinc-950/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3.5 pl-11 pr-4 text-xs font-bold text-white placeholder-zinc-500 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBusiness.map((partner, idx) => (
                  <div
                    key={partner.name + idx}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/30 backdrop-blur-xl p-5 hover:border-rose-500/35 hover:shadow-[0_12px_40px_rgba(244,63,94,0.15)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative z-10 flex flex-col">
                      {/* White logo container for crisp brand rendering */}
                      <div className="relative w-full aspect-[16/10] bg-white rounded-xl flex items-center justify-center p-5 mb-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain select-none pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none" />
                      </div>

                      {/* Location Badge */}
                      <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-2 block">
                        {partner.location}
                      </span>

                      {/* Partner Title */}
                      <h4 className="text-sm font-extrabold text-white leading-snug tracking-tight mb-2 group-hover:text-rose-400 transition-colors duration-300">
                        {partner.name}
                      </h4>
                    </div>

                    {/* Detailed Description */}
                    <p className="relative z-10 text-[11px] font-extrabold text-zinc-100 leading-relaxed border-t border-white/5 pt-3 mt-3">
                      {partner.desc}
                    </p>

                    <div className="mt-4 pt-2 flex items-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 group-hover:underline cursor-pointer">
                        View Integration details &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {filteredBusiness.length === 0 && (
                <div className="text-center py-24 border border-dashed border-zinc-800 rounded-3xl">
                  <Building className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
                  <p className="text-white text-sm font-extrabold">
                    No business partners found matching your search.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* TECH PARTNERS / ECOSYSTEM VIEW */}
          {activeTab === "tech" && (
            <motion.div
              key="tech-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Filtering Controls */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                {/* Search */}
                <div className="w-full md:w-80">
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-4 h-4 text-rose-500" />
                    <input
                      type="text"
                      placeholder="Search tech stack & tools..."
                      value={techSearch}
                      onChange={(e) => setTechSearch(e.target.value)}
                      className="w-full bg-zinc-950/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3 pl-11 pr-4 text-xs font-bold text-white placeholder-zinc-500 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-1.5 bg-zinc-950/80 border border-zinc-900 p-1 rounded-xl w-full md:w-auto">
                  {techCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedTechCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all duration-200 ${selectedTechCategory === cat
                          ? "bg-rose-600 text-white font-extrabold"
                          : "text-zinc-400 hover:text-white"
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredTechTools.map((tool, idx) => (
                  <div
                    key={tool.name + idx}
                    className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/30 backdrop-blur-xl p-5 hover:border-rose-500/35 hover:shadow-[0_12px_40px_rgba(244,63,94,0.15)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative z-10 flex flex-col">
                      {/* White logo container for crisp brand rendering */}
                      <div className="relative w-full aspect-[16/10] bg-white rounded-xl flex items-center justify-center p-5 mb-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="max-w-[70%] max-h-[70%] object-contain select-none pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none" />
                      </div>

                      {/* Category Badge */}
                      <span className="w-fit mb-3 inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                        {tool.category}
                      </span>

                      {/* Partner Title */}
                      <h4 className="text-sm font-extrabold text-white leading-snug tracking-tight mb-2 group-hover:text-rose-400 transition-colors duration-300">
                        {tool.name}
                      </h4>
                    </div>

                    {/* Detailed Description */}
                    <p className="relative z-10 text-[11px] font-extrabold text-zinc-100 leading-relaxed border-t border-white/5 pt-3 mt-3">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>

              {filteredTechTools.length === 0 && (
                <div className="text-center py-24 border border-dashed border-zinc-800 rounded-3xl">
                  <ShieldCheck className="w-10 h-10 text-zinc-700 mx-auto mb-3" />
                  <p className="text-white text-sm font-extrabold">
                    No tech tools found matching your criteria.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* CERTIFICATIONS / COMPLIANCE VIEW */}
          {activeTab === "certifications" && (
            <motion.div
              key="certifications-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Directly pull in our recently optimized, high-fidelity AwardsList */}
              <AwardsList />
            </motion.div>
          )}

          {/* PARTNER WITH US REGISTRATION FORM */}
          {activeTab === "join" && (
            <motion.div
              key="join-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center bg-zinc-950/20 border border-white/5 rounded-3xl p-8 lg:p-12 backdrop-blur-xl"
            >
              {/* Left Column: Why Partner */}
              <div className="space-y-6">
                <span className="text-[10px] font-black tracking-widest text-rose-500 uppercase block">
                  COLLABORATE & GROW
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Join the Devopstrio <span className="text-rose-500">Partner Network</span>
                </h3>
                <p className="text-zinc-200 text-sm font-extrabold leading-relaxed">
                  We invite business leaders, independent software vendors (ISVs), fintech providers, and enterprise security consultancies to expand their capabilities by joining forces with our certified DevSecOps and SRE specialists.
                </p>

                {/* Key partnership perks */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wider mb-1">Joint Solutions Development</h5>
                      <p className="text-[11px] font-extrabold text-zinc-300">Co-engineer scalable architectures, cloud migration patterns, and banking core integrations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wider mb-1">Accelerated Procurement</h5>
                      <p className="text-[11px] font-extrabold text-zinc-300">Leverage our pre-approved frameworks (G-Cloud, Bramble Hub, FSQS) for public and banking sectors.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wider mb-1">Certified Professional SLA</h5>
                      <p className="text-[11px] font-extrabold text-zinc-300">Ensure high delivery standards using 100% certified AWS, Azure, and Google Cloud developers.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Form */}
              <div className="bg-zinc-950/60 border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="partner-form"
                      onSubmit={handleFormSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-rose-500 mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-4 h-4 text-rose-500" />
                          <input
                            type="text"
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Full Name"
                            className="w-full bg-black/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3 pl-11 pr-4 text-xs font-bold text-white placeholder-zinc-500 transition-all outline-none"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-rose-500 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-3.5 w-4 h-4 text-rose-500" />
                          <input
                            type="text"
                            required
                            name="company"
                            value={formData.company}
                            onChange={handleFormChange}
                            placeholder="Your Organization"
                            className="w-full bg-black/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3 pl-11 pr-4 text-xs font-bold text-white placeholder-zinc-500 transition-all outline-none"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-rose-500 mb-2">
                          Business Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 w-4 h-4 text-rose-500" />
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="name@company.com"
                            className="w-full bg-black/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3 pl-11 pr-4 text-xs font-bold text-white placeholder-zinc-500 transition-all outline-none"
                          />
                        </div>
                      </div>

                      {/* Partnership Type */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-rose-500 mb-2">
                          Partnership Track
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleFormChange}
                          className="w-full bg-black/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3.5 px-4 text-xs font-bold text-white transition-all outline-none appearance-none"
                        >
                          <option value="Business Partner">Business Partner</option>
                          <option value="Tech Partner">Technology Partner</option>
                          <option value="ISV Partner">ISV / Core Banking Software Vendor</option>
                          <option value="Gov Partner">Government Framework Alliance</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-rose-500 mb-2">
                          How can we collaborate?
                        </label>
                        <textarea
                          rows={3}
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          placeholder="Tell us about your collaboration goals..."
                          className="w-full bg-black/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3.5 px-4 text-xs font-bold text-white placeholder-zinc-500 transition-all outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]"
                      >
                        <Send className="w-4.5 h-4.5" />
                        Submit Request
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="form-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-rose-500" />
                      </div>
                      <h4 className="text-lg font-extrabold text-white mb-2">Request Submitted!</h4>
                      <p className="text-xs font-bold text-zinc-300 max-w-xs mx-auto leading-relaxed">
                        Thank you for reaching out. Our partnerships committee will review your submission and contact you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

    </main>
  );
}
