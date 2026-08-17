"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Star } from "lucide-react";

import Link from "next/link";

export const SuccessStories = () => {
  const stories = [
    {
      name: "Anita R.",
      before: "Intern",
      after: "Full Stack Dev",
      quote: <>The global mentorship program accelerated my growth. I worked directly on the Brio telemetry dashboard, handling API gateways and databases. Now, as a <Link href="/services/software-development/product-engineering" className="text-[#E11D48] hover:underline font-bold">product engineer</Link>, I lead features from scratch.</>,
      tags: ["React.js", "Node.js", "Next.js"],
      imgGlow: "rgba(236,72,153,0.1)"
    },
    {
      name: "Mark T.",
      before: "Intern",
      after: "DevOps Engineer",
      quote: <>Deploying multi-tenant Kubernetes and building CI/CD templates at Devopstrio was an intense learning experience. The trust the team put in me allowed me to master Terraform and secure enterprise pipelines via <Link href="/services/devops-automation" className="text-[#E11D48] hover:underline font-bold">DevOps automation</Link>.</>,
      tags: ["Kubernetes", "CI/CD", "Terraform"],
      imgGlow: "rgba(59,130,246,0.1)"
    },
    {
      name: "Sarah Johnson",
      before: "Intern",
      after: "Cloud Associate",
      quote: <>Transitioning from university to <Link href="/services/cloud-services" className="text-[#E11D48] hover:underline font-bold">cloud operations</Link> was made seamless by my mentor. Working on AWS landing zones and FinOps cost optimizations helped me clear my AWS practitioner certification within 3 months.</>,
      tags: ["AWS", "FinOps", "Docker"],
      imgGlow: "rgba(16,185,129,0.1)"
    }
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight leading-tight text-white mb-4 font-sans">
            Success <span className="text-rose-500">Stories</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold max-w-2xl mx-auto">
            Many of our interns transition directly into full-time engineering and consulting careers. Hear from some of our recent graduates.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-950/60 border border-zinc-900 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group"
            >
              
              {/* Profile Glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none transition-colors"
                style={{ backgroundColor: story.imgGlow }}
              />

              {/* Quote Mark */}
              <div className="text-rose-500/20 mb-6 group-hover:text-rose-500/40 transition-colors">
                <Quote size={40} className="fill-current" />
              </div>

              <div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 italic font-medium">
                  {story.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-900 flex items-center justify-between mt-auto">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{story.name}</h3>
                  
                  {/* Career change transition badge */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <span className="text-zinc-500 font-mono">{story.before}</span>
                    <ArrowRight size={10} className="text-rose-500" />
                    <span className="text-rose-500 font-bold">{story.after}</span>
                  </div>
                </div>

                {/* Rating / Stars representation */}
                <div className="flex gap-0.5 text-rose-500">
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                  <Star size={12} className="fill-current" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
