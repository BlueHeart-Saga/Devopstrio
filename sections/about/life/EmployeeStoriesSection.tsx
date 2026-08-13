"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    name: "Sarah Jenkins",
    role: "Software Engineer",
    path: "Intern → Software Engineer",
    image: "/assets/Home-page/client-reviews/image 169.png",
    quote: <>"Starting as an intern in the <Link href="/about/internship" className="text-rose-500 hover:underline font-bold">internship program</Link>, I was immediately given real-world problems to solve. The mentorship here didn't just teach me how to code better; it taught me how to engineer solutions that scale. Within two years, I was leading my own microservices architecture."</>
  },
  {
    name: "David Chen",
    role: "Platform Engineer",
    path: "Developer → Platform Engineer",
    image: "/assets/Home-page/client-reviews/image 170.png",
    quote: <>"Devopstrio recognized my passion for infrastructure early on. They sponsored my Kubernetes certifications and gave me the autonomy to help build our internal developer platform in <Link href="/services/devops-automation" className="text-rose-500 hover:underline font-bold">DevOps automation</Link>. The growth trajectory here is limited only by your own ambition."</>
  },
  {
    name: "Priya Sharma",
    role: "Engineering Team Lead",
    path: "Associate → Team Lead",
    image: "/assets/Home-page/client-reviews/image 171.png",
    quote: <>"What stands out to me is the culture of ownership. When I proposed a new way to handle our CI/CD pipelines in <Link href="/services/cloud-services" className="text-rose-500 hover:underline font-bold">cloud services</Link>, leadership didn't just listen; they empowered me to build a team and execute the vision. Now I get to help others grow in the same way."</>
  }
];

export const EmployeeStoriesSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4"
          >
            Meet the People Behind <span className="text-rose-500">Devopstrio</span>
          </motion.h2>
          {/* <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-base sm:text-lg font-normal max-w-xl mx-auto"
          >
            Real stories of career acceleration, bold ownership, and engineering excellence.
          </motion.p> */}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 sm:p-9 hover:bg-zinc-900/90 hover:border-rose-500/40 transition-all duration-500 relative group flex flex-col justify-between shadow-xl"
            >
              <Quote className="absolute top-8 right-8 text-zinc-800/60 w-12 h-12 group-hover:text-rose-500/20 transition-colors" />
              
              <div>
                {/* Employee Bio Header */}
                <div className="flex items-center gap-4 mb-7">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-zinc-800 group-hover:border-rose-500/50 transition-colors shrink-0 shadow-md"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-xl tracking-tight leading-tight">{story.name}</h4>
                    <div className="text-rose-400 text-sm font-semibold mb-1">{story.role}</div>
                    <div className="text-zinc-400 text-xs font-mono px-2.5 py-0.5 bg-zinc-950/80 rounded-full border border-zinc-800 inline-block">{story.path}</div>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed relative z-10 font-semibold italic">
                  {story.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
