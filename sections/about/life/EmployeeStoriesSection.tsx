"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Sarah Jenkins",
    role: "Software Engineer",
    path: "Intern → Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Starting as an intern, I was immediately given real-world problems to solve. The mentorship here didn't just teach me how to code better; it taught me how to engineer solutions that scale. Within two years, I was leading my own microservices architecture."
  },
  {
    name: "David Chen",
    role: "Platform Engineer",
    path: "Developer → Platform Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Devopstrio recognized my passion for infrastructure early on. They sponsored my Kubernetes certifications and gave me the autonomy to help build our internal developer platform. The growth trajectory here is limited only by your own ambition."
  },
  {
    name: "Priya Sharma",
    role: "Engineering Team Lead",
    path: "Associate → Team Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "What stands out to me is the culture of ownership. When I proposed a new way to handle our CI/CD pipelines, leadership didn't just listen; they empowered me to build a team and execute the vision. Now I get to help others grow in the same way."
  }
];

export const EmployeeStoriesSection = () => {
  return (
    <section className="py-24 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Meet the People Behind <span className="text-[#FF1744]">Devopstrio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Real stories of career acceleration and engineering excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors relative group"
            >
              <Quote className="absolute top-8 right-8 text-zinc-800 w-12 h-12 group-hover:text-red-500/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-zinc-800" />
                <div>
                  <h4 className="text-white font-bold text-lg">{story.name}</h4>
                  <div className="text-red-400 text-sm font-medium mb-1">{story.role}</div>
                  <div className="text-zinc-500 text-xs font-mono">{story.path}</div>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed relative z-10 italic">
                "{story.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
