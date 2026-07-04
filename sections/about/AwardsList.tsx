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
    issuer: "Dell",
    src: "/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.png"
  },
  {
    title: "Cyber Essentials Certification",
    year: "2021",
    issuer: "Cyber Essentials",
    src: "/assets/Awards/2021-2022_Cyber_Essentials_Certification.png"
  },
  {
    title: "European IT & Software Excellence Awards Finalist",
    year: "2021",
    issuer: "IT Europa",
    src: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png"
  },
  {
    title: "European IT & Software Excellence Awards",
    year: "2020",
    issuer: "IT Europa",
    src: "/assets/Awards/European_IT&Software_Excellence_Awards_2020.png"
  },
  {
    title: "Cyber Essentials Certification",
    year: "2020",
    issuer: "Cyber Essentials",
    src: "/assets/Awards/Cyber_Essentials_(CE)_Certification_2020.png"
  },
  {
    title: "Highly Commended Recognition",
    year: "2019",
    issuer: "IT Europa",
    src: "/assets/Awards/2019_Highly_Commended.png"
  },
  {
    title: "IT Europa Finalist",
    year: "2019",
    issuer: "IT Europa",
    src: "/assets/Awards/2019_IT_Europa_Finalist.png"
  },
  {
    title: "IT Europa Finalist (Four Categories)",
    year: "2018",
    issuer: "IT Europa",
    src: "/assets/Awards/2018_Finalists_in_four_categories.png"
  },
  {
    title: "Lenovo Platinum Data Center Partner",
    year: "2018",
    issuer: "Lenovo",
    src: "/assets/Awards/2018_Lenovo_Platinum_Partner_Data_Center_Partner.png"
  },
  {
    title: "Crown Commercial Service Supplier (CCS)",
    year: "2017",
    issuer: "UK Gov",
    src: "/assets/Awards/June_2017- Crown_Commercial_Service_Supplier_(CCS).png"
  },
  {
    title: "IBM Business Partner Award Winner",
    year: "2015",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Business_Partner_Award_2015.png"
  },
  {
    title: "European IT & Software Excellence Award Winner",
    year: "2015",
    issuer: "IT Europa",
    src: "/assets/Awards/2015_European_IT&Software_Excellence_Award.png"
  },
  {
    title: "Microsoft Partner of the Year Finalist",
    year: "2014",
    issuer: "Microsoft",
    src: "/assets/Awards/2014_Microsoft_Partner_of_the_Year_Award_Finalist.png"
  },
  {
    title: "IBM Business Partner Award Finalist",
    year: "2014",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Business_Partner_Award_2014.png"
  },
  {
    title: "IBM Platinum Award Winner",
    year: "2013",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Platinum_Award_2013.png"
  },
  {
    title: "Achilles Network Silver Certification",
    year: "Active",
    issuer: "Achilles",
    src: "/assets/Awards/Achilles_Network_Silver.png"
  },
  {
    title: "Arctic Wolf Partner Award",
    year: "Active",
    issuer: "Arctic Wolf",
    src: "/assets/Awards/Arctic_Wolf_Partner_Awards.png"
  },
  {
    title: "Bramble Hub listings",
    year: "Active",
    issuer: "Bramble Hub",
    src: "/assets/Awards/Bramble_Hub_listings.png"
  },
  {
    title: "Certificate of Compliance",
    year: "Active",
    issuer: "Compliance",
    src: "/assets/Awards/Certificate_of_Compliance.png"
  },
  {
    title: "Certificate of Compliance Renewal",
    year: "Active",
    issuer: "Compliance",
    src: "/assets/Awards/Certificate_of_Compliance_Renewal.png"
  },
  {
    title: "Cloud Solution Provider of the Year",
    year: "Active",
    issuer: "Cloud Awards",
    src: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png"
  },
  {
    title: "Data Estate Modernisation Award",
    year: "Active",
    issuer: "Data Awards",
    src: "/assets/Awards/Data_Estate_Modernisation_Award.png"
  },
  {
    title: "Data Management Solution of the Year",
    year: "Active",
    issuer: "Data Awards",
    src: "/assets/Awards/Data_Management_Solution_of_the_Year.png"
  },
  {
    title: "FSQS Registered Supplier Accreditation",
    year: "Active",
    issuer: "FSQS",
    src: "/assets/Awards/FSQS_Registered_Supplier.png"
  },
  {
    title: "FSQS Registered Renewal",
    year: "Active",
    issuer: "FSQS",
    src: "/assets/Awards/FSQS_Registered_Renewal.png"
  },
  {
    title: "G-Cloud 11 Framework Listing",
    year: "Active",
    issuer: "UK Gov",
    src: "/assets/Awards/G-Cloud_11_Framework_Award.png"
  },
  {
    title: "IBM Gold Partner Accreditation",
    year: "Active",
    issuer: "IBM",
    src: "/assets/Awards/IBM_Gold_Partner.png"
  },
  {
    title: "IBM PartnerWorld Member",
    year: "Active",
    issuer: "IBM",
    src: "/assets/Awards/IBM_PartnerWorld_Programme.png"
  },
  {
    title: "ISO Certification Framework",
    year: "Active",
    issuer: "ISO",
    src: "/assets/Awards/ISO.png"
  },
  {
    title: "KnowBe4 Partner Security Certification",
    year: "Active",
    issuer: "KnowBe4",
    src: "/assets/Awards/Knowbe4_Partner.png"
  },
  {
    title: "Accredited Living Wage Employer",
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
  if (t.includes("european it & software excellence") && t.includes("winner")) {
    return `Winner of the European IT & Software Excellence award for custom enterprise application development, microservices migration, and system decoupling workflows.`;
  }
  if (t.includes("highly commended")) {
    return `Highly commended distinction from IT Europa for superior software quality, developer velocity upgrades, and outstanding client delivery metrics.`;
  }
  if (t.includes("it europa finalist")) {
    return `Recognized as a leading technology provider for deploying secure cloud landing zones, automated Terraform pipelines, and active application monitoring stacks.`;
  }
  if (t.includes("lenovo platinum data center")) {
    return `Platinum-tier Lenovo partnership status representing expert capability in configuring high-density computing clusters, data center migration schedules, and storage networks.`;
  }
  if (t.includes("crown commercial service")) {
    return `Approved government framework supplier, enabling public sector organizations to procure secure, compliant cloud-native software and digital transformation consulting.`;
  }
  if (t.includes("ibm business partner") && t.includes("winner")) {
    return `Recipient of the IBM Partner Award for exceptional delivery of enterprise database administration, zero-downtime replication clusters, and hybrid cloud integration services.`;
  }
  if (t.includes("microsoft partner of the year")) {
    return `Named a global finalist for outstanding contribution to the Microsoft partner ecosystem, recognized for building custom Azure Cloud solutions and SaaS products.`;
  }
  if (t.includes("ibm business partner") && t.includes("finalist")) {
    return `Nominated for technical expertise in database administration, zero-downtime replication clusters, and IBM cloud virtualization workflows.`;
  }
  if (t.includes("ibm platinum")) {
    return `IBM Platinum accreditation representing the highest tier of service partnership, technical certification, and successful enterprise deployment volume.`;
  }
  if (t.includes("achilles network silver")) {
    return `Silver-tier certification from the Achilles Network, confirming our verified financial stability, rigorous corporate compliance, and supply chain security frameworks.`;
  }
  if (t.includes("arctic wolf partner")) {
    return `Certified security partner with Arctic Wolf, delivering 24/7 managed detection and response, SIEM telemetry monitoring, and vulnerability patching workflows.`;
  }
  if (t.includes("bramble hub")) {
    return `Registered partner listing enabling the streamlined deployment of custom software, DevOps engineering, and digital transformation consulting through public frameworks.`;
  }
  if (t.includes("certificate of compliance")) {
    return `Verified compliance accreditation confirming our adherence to global digital data privacy laws, secure development operations, and active system risk assessments.`;
  }
  if (t.includes("cloud solution provider of the year")) {
    return `Awarded for exceptional delivery of cloud migration strategies, cost-optimization FinOps consulting, and multi-cloud container orchestration frameworks.`;
  }
  if (t.includes("data estate modernisation")) {
    return `Honored for outstanding achievements in engineering unified data platforms, Snowflake/Databricks migrations, and high-throughput real-time streaming pipelines.`;
  }
  if (t.includes("data management solution")) {
    return `Recognized for excellence in data governance, automated data quality controls, and comprehensive metadata lineage auditing setups.`;
  }
  if (t.includes("fsqs")) {
    return `FSQS (Financial Services Qualification System) accreditation, validating our compliance with strict banking security, operational risk mitigation, and data governance policies.`;
  }
  if (t.includes("g-cloud 11")) {
    return `UK Government G-Cloud framework supplier status, allowing public organizations to directly deploy our secure, cloud-native services and DevOps pipelines.`;
  }
  if (t.includes("ibm gold")) {
    return `IBM Gold Partner certification, showing mastery in building enterprise-grade Java/Go web architectures, secure database indexing, and mainframe migrations.`;
  }
  if (t.includes("ibm partnerworld")) {
    return `Active membership in IBM PartnerWorld, supporting the joint development of containerized middleware and secure hybrid cloud solutions.`;
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
    // Sort years descending but put "Active" first or last
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

  // Load more pagination
  const [visibleCount, setVisibleCount] = useState(12);

  // Reset pagination when filters change
  React.useEffect(() => {
    setVisibleCount(12);
  }, [searchQuery, selectedYear]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <section className="w-full py-20 bg-[#030303] text-white relative">
      <div className="max-w-7xl mx-auto w-full px-12 xl:px-8">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zinc-900 pb-8">
          <Reveal>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500">
                Official Directory
              </span>
            </div>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white">
              Ecosystem <span className="text-rose-500">Accreditation & Awards</span>
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
        <div className="max-w-lg mb-12">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-rose-500" />
            <input
              type="text"
              placeholder="Search awards by title or authority..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="w-full bg-zinc-950/60 border border-zinc-900 focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/20 rounded-xl py-3.5 pl-11 pr-4 text-xs font-medium text-white placeholder-zinc-500 transition-all outline-none"
            />
          </div>
        </div>

        {/* Card Grid Container */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredAwards.slice(0, visibleCount).map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                key={item.title + "-" + item.year}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/30 backdrop-blur-xl p-5 hover:border-rose-500/35 hover:shadow-[0_12px_40px_rgba(244,63,94,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-12 -left-12 w-32 h-32 bg-rose-600/10 blur-2xl" />
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-rose-600/5 blur-2xl" />
                </div>

                <div className="relative z-10 flex flex-col">
                  {/* White Logo Container for perfect brand rendering */}
                  <div className="relative w-full aspect-[16/10] bg-white rounded-xl flex items-center justify-center p-5 mb-4 shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain select-none pointer-events-none filter brightness-100 contrast-100"
                    />
                    {/* Subtle overlay reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Year & Authority Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(225,29,72,0.35)] hover:-translate-y-0.5">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">
                      {item.issuer}
                    </span>
                  </div>

                  {/* Award Title */}
                  <h4 className="text-sm font-bold text-white leading-snug tracking-tight mb-2 group-hover:text-rose-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>

                {/* Description - bold, white, high contrast */}
                <p className="relative z-10 text-xs font-medium text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-3">
                  {getAwardDescription(item.title, item.issuer, item.year)}
                </p>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAwards.length === 0 && (
          <div className="text-center py-24">
            <Award className="w-10 h-10 text-zinc-850 mx-auto mb-3" />
            <p className="text-white text-sm font-medium">
              No certificates found matching your search.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredAwards.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              Load More
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
};
