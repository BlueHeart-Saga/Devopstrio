"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I contact support?",
    a: "You can reach our support team via email at career@devopstrioglobal.com or call us directly at +91 461 294 0062. Enterprise customers also have access to dedicated Slack channels and priority escalation lines."
  },
  {
    q: "What are your support hours?",
    a: "We operate a follow-the-sun support model providing global coverage 24×7. Our delivery centres in the UK, USA, and India coordinate to ensure there is always an engineer available regardless of your timezone."
  },
  {
    q: "Do you provide managed cloud support?",
    a: "Yes. We provide comprehensive managed support for Azure, AWS, and Google Cloud. This includes infrastructure monitoring, incident response, cost optimisation, and architecture guidance across all major cloud platforms."
  },
  {
    q: "Can I request a dedicated support engineer?",
    a: "Enterprise customers can engage dedicated support engineers and customer success managers through our managed services programme. Contact our sales team to discuss dedicated resource arrangements and custom SLAs."
  },
  {
    q: "What products does Devopstrio support?",
    a: "We provide full lifecycle support for our entire product portfolio including Humanex, Brio, SafeSign, Prestivo, Campix, Homela, CareSuite, and Justivon, as well as our cloud and DevOps managed services."
  },
  {
    q: "How are incidents escalated and tracked?",
    a: "All incidents are tracked via our enterprise ticketing system. Critical incidents (P1) trigger an immediate war-room activation with dedicated engineers. You'll receive real-time updates throughout the resolution process."
  },
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`border rounded-xl overflow-hidden transition-colors duration-300 ${open ? "border-rose-500/30 bg-rose-500/5" : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-7 py-5 text-left"
      >
        <span className={`font-semibold text-base transition-colors ${open ? "text-white" : "text-zinc-200"}`}>
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-180 text-rose-500" : "text-zinc-500"}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-7 pb-6 text-zinc-400 leading-relaxed text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const SupportFAQ = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 block mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight text-white mb-4"
          >
            Frequently Asked <span className="text-rose-500">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} q={faq.q} a={faq.a} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
