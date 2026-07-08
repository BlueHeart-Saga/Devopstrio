"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CategoryHeroProps {
  categoryName: string;
  categorySlug: string;
}

interface CategoryConfig {
  image: string;
  titlePrefix: string;
  description: React.ReactNode;
}

const CATEGORY_MAP: Record<string, CategoryConfig> = {
  "awards": {
    image: "/assets/Insights-page/herocard/1.png",
    titlePrefix: "Honors &",
    description: <>Celebrating our industry recognition, benchmark excellence, and the milestones achieved by the Devopstrio engineering teams. Learn more in our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  },
  "blogs": {
    image: "/assets/Insights-page/herocard/2.png",
    titlePrefix: "Technical",
    description: <>Deep dives, expert perspectives, and step-by-step guides on modern cloud architecture, security, and developer experience. Explore our specialized <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link> services.</>
  },
  "blog": {
    image: "/assets/Insights-page/herocard/2.png",
    titlePrefix: "Technical",
    description: <>Deep dives, expert perspectives, and step-by-step guides on modern cloud architecture, security, and developer experience. Explore our specialized <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link> services.</>
  },
  "case-studies": {
    image: "/assets/Insights-page/herocard/3.png",
    titlePrefix: "Enterprise",
    description: <>Detailed breakdowns of real-world challenges solved, systems migrated, and performance optimized for our clients. Discover our <Link href="/services" className="text-rose-500 hover:underline font-bold">digital services</Link> range.</>
  },
  "case-study": {
    image: "/assets/Insights-page/herocard/3.png",
    titlePrefix: "Enterprise",
    description: <>Detailed breakdowns of real-world challenges solved, systems migrated, and performance optimized for our clients. Discover our <Link href="/services" className="text-rose-500 hover:underline font-bold">digital services</Link> range.</>
  },
  "case_study": {
    image: "/assets/Insights-page/herocard/3.png",
    titlePrefix: "Enterprise",
    description: <>Detailed breakdowns of real-world challenges solved, systems migrated, and performance optimized for our clients. Discover our <Link href="/services" className="text-rose-500 hover:underline font-bold">digital services</Link> range.</>
  },
  "celebration": {
    image: "/assets/Insights-page/herocard/4.png",
    titlePrefix: "Milestones &",
    description: <>Commemorating our growth, team events, and the shared successes that shape the vibrant ecosystem of Devopstrio. Read our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">about overview</Link> details.</>
  },
  "celebrations": {
    image: "/assets/Insights-page/herocard/4.png",
    titlePrefix: "Milestones &",
    description: <>Commemorating our growth, team events, and the shared successes that shape the vibrant ecosystem of Devopstrio. Read our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">about overview</Link> details.</>
  },
  "client": {
    image: "/assets/Insights-page/herocard/5.png",
    titlePrefix: "Partner &",
    description: <>Stories of collaboration, digital transformation journeys, and how we empower our clients to achieve market-leading velocity. Read about our <Link href="/about/partnerships-certifications" className="text-rose-500 hover:underline font-bold">partnerships and certifications</Link>.</>
  },
  "clients": {
    image: "/assets/Insights-page/herocard/5.png",
    titlePrefix: "Partner &",
    description: <>Stories of collaboration, digital transformation journeys, and how we empower our clients to achieve market-leading velocity. Read about our <Link href="/about/partnerships-certifications" className="text-rose-500 hover:underline font-bold">partnerships and certifications</Link>.</>
  },
  "events": {
    image: "/assets/Insights-page/herocard/6.png",
    titlePrefix: "Industry",
    description: <>Stay updated with our upcoming webinars, hackathons, international conferences, and community-driven knowledge sharing. Learn about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  },
  "event": {
    image: "/assets/Insights-page/herocard/6.png",
    titlePrefix: "Industry",
    description: <>Stay updated with our upcoming webinars, hackathons, international conferences, and community-driven knowledge sharing. Learn about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  },
  "impact-metrics": {
    image: "/assets/Insights-page/herocard/7.png",
    titlePrefix: "Performance &",
    description: <>Quantitative analysis, scalability benchmarks, cost-optimization metrics, and measurable business value delivered. See our <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link> for scaling.</>
  },
  "impact_metrics": {
    image: "/assets/Insights-page/herocard/7.png",
    titlePrefix: "Performance &",
    description: <>Quantitative analysis, scalability benchmarks, cost-optimization metrics, and measurable business value delivered. See our <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link> for scaling.</>
  },
  "team-culture": {
    image: "/assets/Insights-page/herocard/8.png",
    titlePrefix: "People &",
    description: <>A look inside Devopstrio. Discover our remote-first philosophies, engineering principles, and continuous learning initiatives. Explore <Link href="/about/life" className="text-rose-500 hover:underline font-bold">culture and life</Link> at Devopstrio.</>
  },
  "team_culture": {
    image: "/assets/Insights-page/herocard/8.png",
    titlePrefix: "People &",
    description: <>A look inside Devopstrio. Discover our remote-first philosophies, engineering principles, and continuous learning initiatives. Explore <Link href="/about/life" className="text-rose-500 hover:underline font-bold">culture and life</Link> at Devopstrio.</>
  },
  "white-paper": {
    image: "/assets/Insights-page/herocard/9.png",
    titlePrefix: "Research &",
    description: <>In-depth research papers, architectural blueprints, and compliance frameworks authored by senior platform engineers. Read about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  },
  "white-papers": {
    image: "/assets/Insights-page/herocard/9.png",
    titlePrefix: "Research &",
    description: <>In-depth research papers, architectural blueprints, and compliance frameworks authored by senior platform engineers. Read about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  },
  "white_paper": {
    image: "/assets/Insights-page/herocard/9.png",
    titlePrefix: "Research &",
    description: <>In-depth research papers, architectural blueprints, and compliance frameworks authored by senior platform engineers. Read about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  },
  "whitepapers": {
    image: "/assets/Insights-page/herocard/9.png",
    titlePrefix: "Research &",
    description: <>In-depth research papers, architectural blueprints, and compliance frameworks authored by senior platform engineers. Read about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  },
  "whitepaper": {
    image: "/assets/Insights-page/herocard/9.png",
    titlePrefix: "Research &",
    description: <>In-depth research papers, architectural blueprints, and compliance frameworks authored by senior platform engineers. Read about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  }
};

const getCategoryConfig = (slug: string): CategoryConfig => {
  const cleanSlug = slug.toLowerCase().trim();
  
  if (CATEGORY_MAP[cleanSlug]) {
    return CATEGORY_MAP[cleanSlug];
  }
  
  for (const key of Object.keys(CATEGORY_MAP)) {
    if (cleanSlug.includes(key) || key.includes(cleanSlug)) {
      return CATEGORY_MAP[key];
    }
  }
  
  return {
    image: "/assets/Insights-page/herocard/Blogs.png",
    titlePrefix: "Insights &",
    description: <>Exploring all resources, guides, and engineering documentation published under the '{slug}' category. Learn about our <Link href="/about/overview" className="text-rose-500 hover:underline font-bold">company overview</Link>.</>
  };
};

export function CategoryHero({ categoryName, categorySlug }: CategoryHeroProps) {
  const config = getCategoryConfig(categorySlug);

  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col justify-between pt-36 pb-20 border-b border-zinc-900/60">
      {/* Background Image */}
      {config.image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={config.image}
            alt={categoryName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85 select-none pointer-events-none transition-transform duration-1000 scale-[1.02]"
          />
          {/* Centered dark radial overlay for typography contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_50%,rgba(0,0,0,0.4)_80%)] pointer-events-none" />
          {/* Bottom shadow fade to blend with the page body */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 w-full px-12 xl:px-8 flex-grow flex flex-col justify-between">
        {/* Breadcrumb Navigation - Pinned to the top of the content container */}
        <nav className="flex items-center justify-start gap-2.5 text-[9px] md:text-[10px] font-medium tracking-[0.12em] text-zinc-400 mb-6 overflow-x-auto whitespace-nowrap py-1">
          <Link href="/insights" className="hover:text-white transition-colors text-zinc-400">
            INSIGHTS HUB
          </Link>
          <ChevronRight size={10} className="text-zinc-600 flex-shrink-0" />
          <span className="text-rose-500 font-semibold">{categoryName.toUpperCase()}</span>
        </nav>

        {/* Headline block - Centered my-auto */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-8">
          <Reveal>
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-rose-600"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-500">
                Category Archive
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-rose-600"></span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white text-center">
              {config.titlePrefix} <span className="text-[#E11D48]">{categoryName}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-300 text-xs md:text-sm lg:text-base leading-relaxed font-normal max-w-3xl text-center mx-auto opacity-95">
              {config.description}
            </p>
          </Reveal>
        </div>
        
        {/* Empty bottom element to align layout flow like Hero.tsx */}
        <div className="h-4" />
      </div>
    </section>
  );
}
