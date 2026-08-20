"use client";

import React, { useState, useMemo } from "react";
import { Search, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";

interface AwardItem {
  title: string;
  year: string;
  issuer: string;
  src: string;
}

const awardsData: AwardItem[] = [
  {
    title: "Networking Computing Awards Finalist",
    year: "2026",
    issuer: "Networking Computing",
    src: "/assets/Awards/Netwoking_Computing_Awards_2026 Finalist.png"
  },
  {
    title: "Computing Security Awards Winner",
    year: "2025",
    issuer: "Computing Security",
    src: "/assets/Awards/2025_Computing_Security_Awards-1.png"
  },
  {
    title: "Computing Security Awards Finalist",
    year: "2025",
    issuer: "Computing Security",
    src: "/assets/Awards/2025_Computing_Security_Awards.png"
  },
  {
    title: "HSJ Partnership Awards Finalist",
    year: "2023",
    issuer: "HSJ Partnerships",
    src: "/assets/Awards/HSJ_Partnership_Awards_2023.png"
  },
  {
    title: "IT Europa Channel Awards Winner",
    year: "2023",
    issuer: "IT Europa",
    src: "/assets/Awards/IT_Europa_Channel_Awards_2023.png"
  },
  {
    title: "IT Europa Channel Awards Finalist",
    year: "2023",
    issuer: "IT Europa",
    src: "/assets/Awards/IT_Europa_Channel_Awards2023.png"
  },
  {
    title: "Cloudtango MSP Select 2023",
    year: "2023",
    issuer: "Cloudtango",
    src: "/assets/Awards/Cloudtango_MSP_Select_2023.png"
  },
  {
    title: "IT Europa Channel Awards Finalist",
    year: "2022",
    issuer: "IT Europa",
    src: "/assets/Awards/Finalist_IT_Europa_Channel_Awards_2022.png"
  },
  {
    title: "Dell Technologies Gold Partner",
    year: "2022",
    issuer: "Dell Technologies",
    src: "/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.png"
  },
  {
    title: "European IT & Software Excellence Finalist",
    year: "2021",
    issuer: "European IT",
    src: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png"
  },
  {
    title: "Cyber Essentials Certification",
    year: "2021",
    issuer: "Cyber Essentials",
    src: "/assets/Awards/2021-2022_Cyber_Essentials_Certification.png"
  },
  {
    title: "Cyber Essentials Certification",
    year: "2020",
    issuer: "Cyber Essentials",
    src: "/assets/Awards/Cyber_Essentials_(CE)_Certification_2020.png"
  },
  {
    title: "European IT & Software Excellence Awards",
    year: "2020",
    issuer: "European IT",
    src: "/assets/Awards/European_IT&Software_Excellence_Awards_2020.png"
  },
  {
    title: "IT Europa Finalist",
    year: "2019",
    issuer: "IT Europa",
    src: "/assets/Awards/2019_IT_Europa_Finalist.png"
  },
  {
    title: "Highly Commended Partner",
    year: "2019",
    issuer: "Industry Awards",
    src: "/assets/Awards/2019_Highly_Commended.png"
  },
  {
    title: "Lenovo Platinum Partner Data Center",
    year: "2018",
    issuer: "Lenovo",
    src: "/assets/Awards/2018_Lenovo_Platinum_Partner_Data_Center_Partner.png"
  },
  {
    title: "Finalists in Four Categories",
    year: "2018",
    issuer: "Industry Awards",
    src: "/assets/Awards/2018_Finalists_in_four_categories.png"
  },
  {
    title: "European IT & Software Excellence Award",
    year: "2015",
    issuer: "European IT",
    src: "/assets/Awards/2015_European_IT&Software_Excellence_Award.png"
  },
  {
    title: "IBM Business Partner Award",
    year: "2015",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Business_Partner_Award_2015.png"
  },
  {
    title: "Microsoft Partner of the Year Finalist",
    year: "2014",
    issuer: "Microsoft",
    src: "/assets/Awards/2014_Microsoft_Partner_of_the_Year_Award_Finalist.png"
  },
  {
    title: "IBM Business Partner Award",
    year: "2014",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Business_Partner_Award_2014.png"
  },
  {
    title: "IBM Platinum Award",
    year: "2013",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Platinum_Award_2013.png"
  },

  // Active / Ongoing Compliance & Partner Certifications
  {
    title: "Achilles Network Silver Member",
    year: "Active",
    issuer: "Achilles Network",
    src: "/assets/Awards/Achilles_Network_Silver.png"
  },
  {
    title: "Arctic Wolf Partner Awards",
    year: "Active",
    issuer: "Arctic Wolf",
    src: "/assets/Awards/Arctic_Wolf_Partner_Awards.png"
  },
  {
    title: "Bramble Hub Listings Accreditation",
    year: "Active",
    issuer: "Bramble Hub",
    src: "/assets/Awards/Bramble_Hub_listings.png"
  },
  {
    title: "Certificate of Compliance Renewal",
    year: "Active",
    issuer: "Compliance Board",
    src: "/assets/Awards/Certificate_of_Compliance_Renewal.png"
  },
  {
    title: "Certificate of Compliance",
    year: "Active",
    issuer: "Compliance Board",
    src: "/assets/Awards/Certificate_of_Compliance.png"
  },
  {
    title: "Cloud Solution Provider of the Year",
    year: "Active",
    issuer: "Cloud Awards",
    src: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png"
  },
  {
    title: "Crown Commercial Service Supplier (CCS)",
    year: "Active",
    issuer: "UK Government",
    src: "/assets/Awards/June_2017- Crown_Commercial_Service_Supplier_(CCS).png"
  },
  {
    title: "Data Estate Modernisation Award",
    year: "Active",
    issuer: "Data Excellence",
    src: "/assets/Awards/Data_Estate_Modernisation_Award.png"
  },
  {
    title: "Data Management Solution of the Year",
    year: "Active",
    issuer: "Data Excellence",
    src: "/assets/Awards/Data_Management_Solution_of_the_Year.png"
  },
  {
    title: "FSQS Registered Supplier Renewal",
    year: "Active",
    issuer: "FSQS",
    src: "/assets/Awards/FSQS_Registered_Renewal.png"
  },
  {
    title: "FSQS Registered Supplier",
    year: "Active",
    issuer: "FSQS",
    src: "/assets/Awards/FSQS_Registered_Supplier.png"
  },
  {
    title: "G-Cloud 11 Framework Award",
    year: "Active",
    issuer: "G-Cloud",
    src: "/assets/Awards/G-Cloud_11_Framework_Award.png"
  },
  {
    title: "IBM Gold Partner Certification",
    year: "Active",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Gold_Partner.png"
  },
  {
    title: "IBM PartnerWorld Programme Member",
    year: "Active",
    issuer: "IBM",
    src: "/assets/Awards/IBM_PartnerWorld_Programme.png"
  },
  {
    title: "ISO Information Security Standard",
    year: "Active",
    issuer: "ISO",
    src: "/assets/Awards/ISO.png"
  },
  {
    title: "KnowBe4 Premier Partner",
    year: "Active",
    issuer: "KnowBe4",
    src: "/assets/Awards/Knowbe4_Partner.png"
  },
  {
    title: "Living Wage Employer Accreditation",
    year: "Active",
    issuer: "Living Wage",
    src: "/assets/Awards/Living_Wage_Employer.png"
  },
  {
    title: "Living Wage Accreditation Movement",
    year: "Active",
    issuer: "Living Wage",
    src: "/assets/Awards/Living_Wage_Employer_Accreditation_Living_Wage_Movement.png"
  },
  {
    title: "Microsoft Gold Status Certification",
    year: "Active",
    issuer: "Microsoft",
    src: "/assets/Awards/MS_Gold_Status.png"
  },
  {
    title: "Risk Management Solution Award",
    year: "Active",
    issuer: "Risk Awards",
    src: "/assets/Awards/Risk_Management_Award.png"
  },
  {
    title: "Solution Provider Tier Accredited Partner",
    year: "Active",
    issuer: "Solution Provider",
    src: "/assets/Awards/Solution_Provider_Tier-Accredited_Business_Partner.png"
  },
  {
    title: "Top 1% of Microsoft Partner Marketers Worldwide",
    year: "Active",
    issuer: "Microsoft",
    src: "/assets/Awards/Top_1%_of_Microsoft_Partner_Marketers_Across_The_World!.png"
  },
  {
    title: "Top UK Cyber Security Consulting Firms",
    year: "Active",
    issuer: "Cyber Security",
    src: "/assets/Awards/UK_Cyber_Security_Consulting_Firms.png"
  }
];

function getAwardDescription(title: string, issuer: string, year: string) {
  const t = title.toLowerCase();
  
  if (t.includes("networking computing")) {
    return `Finalist in the Network Computing Awards, recognizing Devopstrio's excellence in high-availability enterprise network design, virtual routing, and telemetry monitoring setups.`;
  }
  if (t.includes("computing security") && t.includes("winner")) {
    return `Winner of the Computing Security Award for outstanding achievements in automated vulnerability containment, endpoint threat detection, and private cloud sandbox security controls.`;
  }
  if (t.includes("computing security") && t.includes("finalist")) {
    return `Finalist selection for pioneering secure DevSecOps software delivery pipelines, real-time threat logging integration, and okta identity access architectures.`;
  }
  if (t.includes("hsj partnership")) {
    return `Recognized for excellence in healthcare cloud-native modernization, ensuring strict NHS patient data privacy compliance, HIPAA security standards, and seamless EHR pipeline migrations.`;
  }
  if (t.includes("it europa channel") && t.includes("winner")) {
    return `Winner of the IT Europa Channel Award for exceptional performance in delivering automated environments, cloud strategy consulting, and software release velocity upgrades.`;
  }
  if (t.includes("it europa channel") && t.includes("finalist")) {
    return `Shortlisted finalist for leading achievements in multi-tenant Kubernetes orchestrations, platform engineering portals, and enterprise-level database systems integration.`;
  }
  if (t.includes("cloudtango msp select")) {
    return `Selected as a premier managed service provider by Cloudtango, validating our 24/7 technical helpdesk operations, proactive software patching, and SLA-bound uptime guarantees.`;
  }
  if (t.includes("dell technologies gold")) {
    return `Dell Technologies Gold Partner status representing deep technical competency in scaling enterprise-grade bare metal, storage arrays, and virtual machine setups.`;
  }
  if (t.includes("cyber essentials")) {
    return `Official compliance certification validating our adherence to cybersecurity baselines, including secure VPC boundaries, key rotations, and least-privilege access rules.`;
  }
  if (t.includes("european it & software excellence") && t.includes("finalist")) {
    return `Finalist nomination for software engineering excellence, recognizing our custom API gateway designs, SaaS multi-tenancy configurations, and Next.js frontend performance.`;
  }
  if (t.includes("european it & software excellence")) {
    return `Honored for outstanding digital transformation solutions, seamless cloud infrastructure scaling, and mission-critical enterprise software reliability.`;
  }
  if (t.includes("it europa finalist")) {
    return `Recognized as a leading technology integration partner, delivering high-speed automated deployment pipelines and robust multi-cloud strategy frameworks.`;
  }
  if (t.includes("highly commended")) {
    return `Commended for exemplary client service delivery, 99.99% uptime guarantees, and proactive site reliability engineering (SRE) management.`;
  }
  if (t.includes("lenovo platinum partner")) {
    return `Platinum partner accreditation showcasing enterprise data center architecture, high-performance computing clusters, and hybrid cloud server grids.`;
  }
  if (t.includes("finalists in four categories")) {
    return `Nominated across 4 core categories: Cloud Migration, DevOps Innovation, Security Architecture, and Managed Engineering Services.`;
  }
  if (t.includes("microsoft partner of the year")) {
    return `Finalist recognition from Microsoft for architecting enterprise Azure cloud solutions, AI data platforms, and zero-trust identity architectures.`;
  }
  if (t.includes("ibm business partner")) {
    return `Validated IBM Business Partner status for executing high-grade database migrations, enterprise middleware integration, and mainframe modernization.`;
  }
  if (t.includes("ibm platinum award")) {
    return `Prestigious IBM Platinum Award for top-tier technical delivery, hybrid cloud innovation, and enterprise software implementation.`;
  }
  if (t.includes("achilles network")) {
    return `Silver member accreditation in the Achilles Network, demonstrating transparent ESG practices, supply chain integrity, and corporate governance.`;
  }
  if (t.includes("arctic wolf")) {
    return `Certified Arctic Wolf Security Partner, delivering 24/7 managed detection and response (MDR), threat hunting, and SOC operation support.`;
  }
  if (t.includes("bramble hub")) {
    return `Approved Bramble Hub framework supplier for public sector digital transformation, G-Cloud deployments, and NHS technology contracts.`;
  }
  if (t.includes("certificate of compliance")) {
    return `Audited compliance certification ensuring full alignment with international data privacy, cloud security, and software safety protocols.`;
  }
  if (t.includes("cloud solution provider of the year")) {
    return `Awarded Cloud Solution Provider of the Year for outstanding multi-cloud governance, serverless architecture deployment, and FinOps optimization.`;
  }
  if (t.includes("crown commercial service")) {
    return `Accredited UK Crown Commercial Service (CCS) supplier, enabling direct public sector procurement of cloud, DevOps, and AI engineering services.`;
  }
  if (t.includes("data estate modernisation")) {
    return `Awarded for building modern lakehouse architectures, real-time ETL data pipelines, and Snowflake analytical infrastructure.`;
  }
  if (t.includes("data management solution")) {
    return `Recognized for high-throughput big data orchestration, automated data quality assertions, and master data management systems.`;
  }
  if (t.includes("fsqs registered")) {
    return `FSQS (Financial Services Qualification System) registered supplier, qualified to deliver compliant software to top global financial institutions.`;
  }
  if (t.includes("g-cloud 11 framework")) {
    return `Awarded supplier under the UK G-Cloud framework for cloud support, software development, and infrastructure transformation services.`;
  }
  if (t.includes("ibm gold partner")) {
    return `IBM Gold Partner status representing specialized expertise in hybrid cloud integrations, AI modeling backends, and enterprise security.`;
  }
  if (t.includes("ibm partnerworld")) {
    return `Certified member of the IBM PartnerWorld program, committed to continuous technical training, solution validation, and architecture standards.`;
  }
  if (t.includes("iso certification")) {
    return `Audited ISO accreditation validating our global information security management systems (ISMS) and software development lifecycle controls.`;
  }
  if (t.includes("knowbe4 partner")) {
    return `Accredited implementation partner for KnowBe4 security, enabling organizations to deploy adaptive phishing simulations and user threat training.`;
  }
  if (t.includes("living wage")) {
    return `Accredited Living Wage Employer, reflecting our commitment to fair compensation, ethical employment practices, and human-first engineering environments.`;
  }
  if (t.includes("ms_gold_status") || t.includes("microsoft gold status")) {
    return `Premier Microsoft Gold Partner certification, demonstrating specialized capability in designing Azure landing zones, AKS container grids, and secure SaaS products.`;
  }
  if (t.includes("risk management solution")) {
    return `Awarded for engineering automated threat analysis algorithms, self-healing routing failovers, and incident alert integrations.`;
  }
  if (t.includes("solution provider tier")) {
    return `Accredited partner status validating our full-cycle platform engineering, continuous test automation, and SRE incident response setups.`;
  }
  if (t.includes("top 1% of microsoft partner marketers")) {
    return `Recognized as a top-performing global partner, driving adoption of Microsoft Azure Cloud services and digital-first client enablement programs.`;
  }
  if (t.includes("top uk cyber security")) {
    return `Ranked among the leading security advisory firms, providing penetration testing, zero-trust network setups, and policy compliance reviews.`;
  }

  return `Devopstrio's credentials are fully audited and verified by ${issuer}, confirming our adherence to enterprise-grade compliance, security, and delivery excellence standards.`;
}

export const AwardsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const years = useMemo(() => {
    const list = ["All", ...new Set(awardsData.map((item) => item.year))];
    return list.sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      if (a === "Active") return 1;
      if (b === "Active") return -1;
      return b.localeCompare(a);
    });
  }, []);

  const filteredAwards = useMemo(() => {
    return awardsData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = selectedYear === "All" || item.year === selectedYear;
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  const [visibleCount, setVisibleCount] = useState(12);

  React.useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, selectedYear]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <section className="w-full py-10 sm:py-14 bg-[#030303] text-white relative font-sans">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        
        {/* Section Intro: Semibold Header Only */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-zinc-900 pb-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans leading-tight">
              Ecosystem <span className="text-rose-600 font-semibold">Accreditation & Awards</span>
            </h2>
          </Reveal>

          {/* Year filtering tabs */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-950/80 border border-zinc-900 p-1.5 rounded-xl">
            {years.slice(0, 7).map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                }}
                className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedYear === year
                    ? "bg-rose-600 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-lg mb-10">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-rose-500" />
            <input
              type="text"
              placeholder="Search awards by title or authority..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-semibold text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-xs font-bold text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Grid List */}
        {filteredAwards.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-zinc-800 rounded-2xl bg-zinc-950/40">
            <Award className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 font-semibold text-sm">No awards found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("All");
              }}
              className="mt-3 text-xs text-rose-500 font-bold hover:underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredAwards.slice(0, visibleCount).map((item, idx) => (
                <Reveal key={`${item.title}-${idx}`} delay={idx * 0.05}>
                  <div className="group relative bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1">
                    
                    <div>
                      {/* Image Logo Box */}
                      <div className="w-full h-36 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 flex items-center justify-center mb-4 group-hover:border-zinc-700 transition-colors">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.src}
                          alt={item.title}
                          className="max-w-[85%] max-h-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>

                      {/* Year Badge & Title */}
                      <div className="flex items-center justify-end mb-3">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-rose-500 font-mono">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-rose-400 transition-colors font-sans text-center">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredAwards.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-rose-500/50 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-zinc-800 font-sans"
                >
                  Load More Awards ({filteredAwards.length - visibleCount} Remaining)
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
};
