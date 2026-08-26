"use client";

import React from "react";
import { ShieldAlert, CheckCircle2, Mail, Lock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function WorkingAtDevopstrio() {
  return (
    <section className="w-full bg-[#030303] text-white py-10 md:py-14 lg:py-16 font-sans relative overflow-clip">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.06),transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading (Sticky Position) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start">
            <Reveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.15]">
                Important Recruitment Scam alert
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Recruitment Security Panel (Clean & Borderless Box on Right Side) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-zinc-950 shadow-2xl space-y-8">
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  Protect yourself from recruitment scams
                </h3>

                <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
                  Thank you for your interest in Devopstrio. Please be aware of potential recruitment scams. While we encourage you to explore job opportunities at our company, we urge you to be cautious and wary of fraudulent offers.
                </p>

                <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
                  All official Devopstrio job postings are shared only on our official website (<span className="text-rose-400 font-semibold">devopstrio.com/careers</span>) and verified recruitment platforms.
                </p>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-rose-500">
                    Please keep in mind:
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                      <Lock size={20} className="text-rose-500 shrink-0 mt-1" />
                      <span>
                        <strong className="text-white font-semibold">We will never ask for payment</strong> at any stage of our hiring process, application review, or onboarding.
                      </span>
                    </li>

                    <li className="flex items-start gap-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                      <Mail size={20} className="text-rose-500 shrink-0 mt-1" />
                      <span>
                        <strong className="text-white font-semibold">Official communications come only from verified Devopstrio email addresses</strong>: HR (<a href="mailto:hr@devopstrioglobal.com" className="text-rose-400 font-mono font-medium hover:underline">hr@devopstrioglobal.com</a>) and Careers (<a href="mailto:career@devopstrioglobal.com" className="text-rose-400 font-mono font-medium hover:underline">career@devopstrioglobal.com</a>). Avoid sharing sensitive personal information with non-official domain handles.
                      </span>
                    </li>

                    <li className="flex items-start gap-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                      <CheckCircle2 size={20} className="text-rose-500 shrink-0 mt-1" />
                      <span>
                        <strong className="text-white font-semibold">If you have any concerns</strong>, please verify directly with our global recruiting team at <a href="mailto:info@devopstrioglobal.com" className="text-rose-400 font-mono font-medium hover:underline">info@devopstrioglobal.com</a> or via our official contact forms.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                  Please be cautious to the points above as you progress in your job search.
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WorkingAtDevopstrio;

