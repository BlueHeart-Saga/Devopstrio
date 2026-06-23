"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Headphones, Bug, Lightbulb } from "lucide-react";

const products = [
  { name: "Humanex", description: "AI-powered HR intelligence platform", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30" },
  { name: "Brio", description: "Business automation and workflow engine", color: "from-blue-500/15 to-transparent", border: "border-blue-500/30" },
  { name: "SafeSign", description: "Digital document signing & verification", color: "from-green-500/15 to-transparent", border: "border-green-500/30" },
  { name: "Prestivo", description: "Performance analytics and reporting", color: "from-yellow-500/15 to-transparent", border: "border-yellow-500/30" },
  { name: "Campix", description: "Campaign & marketing operations suite", color: "from-orange-500/15 to-transparent", border: "border-orange-500/30" },
  { name: "Homela", description: "Property tech and estate management", color: "from-pink-500/15 to-transparent", border: "border-pink-500/30" },
  { name: "CareSuite", description: "Healthcare operations management", color: "from-teal-500/15 to-transparent", border: "border-teal-500/30" },
  { name: "Justivon", description: "Legal workflow automation platform", color: "from-red-500/15 to-transparent", border: "border-red-500/30" },
];

const supportActions = [
  { icon: FileText, label: "Documentation" },
  { icon: Headphones, label: "Technical Support" },
  { icon: Bug, label: "Issue Reporting" },
  { icon: Lightbulb, label: "Feature Requests" },
];

export const ProductEcosystem = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono tracking-widest text-[#FF1744] uppercase font-bold block mb-3"
          >
            Product Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Products We <span className="text-[#FF1744]">Support</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            Full lifecycle support for the entire Devopstrio product portfolio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className={`group relative bg-zinc-900/40 border ${product.border} hover:border-opacity-70 rounded-2xl p-6 overflow-hidden transition-all duration-300`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Product name badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                    <span className="text-sm font-black text-white">{product.name.charAt(0)}</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" title="Active support" />
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-zinc-500 text-sm mb-6">{product.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {supportActions.map((action, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors"
                    >
                      <action.icon className="w-3.5 h-3.5 shrink-0 text-zinc-600" />
                      {action.label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
