"use client";

import { Reveal } from "@/components/ui/Reveal";

const certifications = [
  { year: "2026", title: "Networking Computing", logo: "/assets/Awards/Netwoking_Computing_Awards_2026 Finalist.png" },
  { year: "2025", title: "Computing Security", logo: "/assets/Awards/2025_Computing_Security_Awards-1.png" },
  { year: "2023", title: "HSJ Partnerships", logo: "/assets/Awards/HSJ_Partnership_Awards_2023.png" },
  { year: "2022", title: "Dell Gold Partner", logo: "/assets/Awards/Dell_Technologies_Gold_Partner_2022-2023.png" },
  { year: "2021", title: "Cyber Essentials", logo: "/assets/Awards/2021-2022_Cyber_Essentials_Certification.png" },
  { year: "2020", title: "ISO 9001", logo: "/assets/Awards/ISO.png" },
  { year: "2023", title: "Cloudtango MSP Select", logo: "/assets/Awards/Cloudtango_MSP_Select_2023.png" },
  { year: "2023", title: "IT Europa Awards", logo: "/assets/Awards/IT_Europa_Channel_Awards2023.png" },
  { year: "2023", title: "UK Cyber Security", logo: "/assets/Awards/UK_Cyber_Security_Consulting_Firms.png" },
  { year: "2023", title: "Arctic Wolf Partner", logo: "/assets/Awards/Arctic_Wolf_Partner_Awards.png" },
  { year: "2023", title: "FSQS Registered", logo: "/assets/Awards/FSQS_Registered_Supplier.png" },
  { year: "2022", title: "IT Europa Finalist", logo: "/assets/Awards/Finalist_IT_Europa_Channel_Awards_2022.png" },
  { year: "2022", title: "Cloud Solution Provider", logo: "/assets/Awards/Cloud_Solution_Provider_of_the_Year.png" },
  { year: "2022", title: "Data Management", logo: "/assets/Awards/Data_Management_Solution_of_the_Year.png" },
  { year: "2022", title: "KnowBe4 Partner", logo: "/assets/Awards/Knowbe4_Partner.png" },
  { year: "2021", title: "European IT Excellence", logo: "/assets/Awards/European_IT_and_Software_Excellence_Awards_2021.png" },
  { year: "2021", title: "Data Modernisation", logo: "/assets/Awards/Data_Estate_Modernisation_Award.png" },
  { year: "2021", title: "Risk Management", logo: "/assets/Awards/Risk_Management_Award.png" },
  { year: "2021", title: "Living Wage Employer", logo: "/assets/Awards/Living_Wage_Employer.png" },
  { year: "2020", title: "European IT Excellence", logo: "/assets/Awards/European_IT&Software_Excellence_Awards_2020.png" },
  { year: "2020", title: "Microsoft Gold Status", logo: "/assets/Awards/MS_Gold_Status.png" },
  { year: "2020", title: "IBM Gold Partner", logo: "/assets/Awards/IBM_Gold_Partner.png" },
  { year: "2019", title: "IT Europa Finalist", logo: "/assets/Awards/2019_IT_Europa_Finalist.png" },
  { year: "2019", title: "G-Cloud 11", logo: "/assets/Awards/G-Cloud_11_Framework_Award.png" },
  { year: "2018", title: "Lenovo Platinum Partner", logo: "/assets/Awards/2018_Lenovo_Platinum_Partner_Data_Center_Partner.png" },
  { year: "2018", title: "4-Category Finalist", logo: "/assets/Awards/2018_Finalists_in_four_categories.png" },
  { year: "2017", title: "Crown Commercial Service", logo: "/assets/Awards/June_2017- Crown_Commercial_Service_Supplier_(CCS).png" },
  { year: "2015", title: "IBM Business Partner", logo: "/assets/Awards/IBM_Business_Partner_Award_2015.png" },
  { year: "2015", title: "European IT Excellence", logo: "/assets/Awards/2015_European_IT&Software_Excellence_Award.png" },
  { year: "2014", title: "IBM Business Partner", logo: "/assets/Awards/IBM_Business_Partner_Award_2014.png" },
  { year: "2014", title: "Microsoft Partner Finalist", logo: "/assets/Awards/2014_Microsoft_Partner_of_the_Year_Award_Finalist.png" },
  { year: "2013", title: "IBM Platinum Partner", logo: "/assets/Awards/IBM_Platinum_Award_2013.png" },
];

import Link from "next/link";

export function AllCertifications() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <Reveal>
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E11D48] mb-3 block">
              Recognitions
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4">
              Our <span className="text-[#E11D48]">Certifications </span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm max-w-2xl leading-relaxed">
              Our certifications validate our deep capability in cloud architectures and platform security. Read more about our <Link href="/about/awards-recognition" className="text-[#E11D48] hover:underline font-bold">awards & recognition</Link> or discover how we support <Link href="/services/cybersecurity" className="text-[#E11D48] hover:underline font-bold">cybersecurity framework</Link> implementations.
            </p>
          </div>
        </Reveal>

      {/* Static Grid Container */}
      <div className="w-full pb-12 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <div 
              key={i} 
              className="w-full p-4 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col gap-5 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-full h-40 bg-white rounded-2xl flex items-center justify-center p-6">
                <img 
                  src={cert.logo} 
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="flex items-center gap-4 px-2 pb-2">
                <div className="px-4 py-2 bg-[#E11D48] rounded-lg text-white font-bold text-sm shrink-0">
                  {cert.year}
                </div>
                <div className="text-[#E11D48] font-bold text-[10px] tracking-[0.1em] uppercase leading-snug">
                  {cert.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
