"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const featuredTestimonial = {
  quote: "The quality of engineers and the speed of delivery was exceptional. They built our scalable cloud platform from the ground up and delivered on time and on budget — an outstanding partnership.",
  author: "Samantha Lee",
  role: "Chief Technology Officer",
  initials: "SL",
  image: "/assets/About-page/overview/image.png"
};

const testimonials = [
  {
    quote: "Devopstrio provided a structured cloud transformation roadmap that helped us migrate critical workloads with minimal disruption. Their expertise and support model were outstanding.",
    author: "Ali Raza",
    role: "VP of Infrastructure",
    initials: "AR",
  },
  {
    quote: "The holistic approach to platform engineering made a real difference in our deployment frequency. I feel calmer and much more in control of our release cycles now.",
    author: "Hina Malik",
    role: "Head of Engineering",
    initials: "HM",
  },
  {
    quote: "I struggled with multi-cloud cost visibility for years, but within a few weeks of their FinOps implementation, our cloud spend was optimized noticeably.",
    author: "John Snow",
    role: "Cloud Operations Lead",
    initials: "JS",
  },
  {
    quote: "Within weeks, I noticed a significant improvement in our security posture. The personalized DevSecOps approach made all the difference for our compliance goals.",
    author: "Kathie Corl",
    role: "Security Director",
    initials: "KC",
  },
];

// 25+ Reviews for the Marquee
const autoScrollReviews = [
  { id: 1, text: "The cloud migration process was seamless. Their team handled everything professionally, minimizing our downtime to zero. I never experienced such good performance.", name: "Sarah Jenkins", time: "1 week ago", initials: "SJ" },
  { id: 2, text: "Excellent DevOps consultation. We went from chaotic monthly releases to smooth daily deployments. Highly recommended. They respond in a timely manner.", name: "Michael Chen", time: "2 weeks ago", initials: "MC" },
  { id: 3, text: "They helped us implement a robust FinOps culture. We've saved over 30% on our AWS bill in just two months. Customer service is excellent.", name: "David O.", time: "1 month ago", initials: "DO" },
  { id: 4, text: "Fantastic team to work with. The platform engineering solutions provided were top-tier and highly scalable. Very polite and prompt.", name: "Elena Rodriguez", time: "3 weeks ago", initials: "ER" },
  { id: 5, text: "Our security posture has never been better. The DevSecOps integration was flawless. We are incredibly satisfied with the customization.", name: "James T.", time: "2 months ago", initials: "JT" },
  { id: 6, text: "Responsive, knowledgeable, and reliable. They truly understand enterprise cloud architecture.", name: "Anita S.", time: "1 week ago", initials: "AS" },
  { id: 7, text: "We partnered with them for our AI data pipeline. The performance improvements have been game-changing. I feel much more in control.", name: "Robert K.", time: "4 days ago", initials: "RK" },
  { id: 8, text: "My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance.", name: "Karan P.", time: "1 week ago", initials: "KP" },
  { id: 9, text: "I love the customer service. They respond in a timely manner with loads of information about best practices and maintenance.", name: "Catherine", time: "10 days ago", initials: "C" },
  { id: 10, text: "Product quality is incredible. They looked over all the options with us, and we are incredibly satisfied. We went over all the details.", name: "Peter W.", time: "2 weeks ago", initials: "PW" },
  { id: 11, text: "The kubernetes transition was smooth. Their engineers are top-notch and always available.", name: "Lisa M.", time: "1 month ago", initials: "LM" },
  { id: 12, text: "Helped us pass our SOC2 compliance with their rigorous infrastructure audits and automation.", name: "Tom H.", time: "3 weeks ago", initials: "TH" },
  { id: 13, text: "Outstanding support during our migration to Azure. The follow-the-sun model really works.", name: "Nina V.", time: "2 months ago", initials: "NV" },
  { id: 14, text: "A truly transformative partnership. Our engineering velocity increased by 3x. The personalized approach made all the difference.", name: "Greg F.", time: "1 week ago", initials: "GF" },
  { id: 15, text: "Best tech consultants we've ever hired. Transparent pricing and clear deliverables.", name: "Alicia W.", time: "5 days ago", initials: "AW" }
];
const marqueeReviews = [...autoScrollReviews, ...autoScrollReviews];

export const ClientTestimonials = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(30,30,30,0.5),transparent)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Large container simulating the white card in the image */}
        <div className="bg-zinc-950 border border-zinc-800/60 rounded-[32px] p-6 md:p-12 lg:p-16 shadow-2xl">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
              Testimonials
            </span>
            <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
              What Our <span className="text-rose-500">Clients Say</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              Read how our strategic partnerships have driven measurable outcomes for our enterprise clients.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Featured Card (Spans 1 column, height matches the 2 stacked cards on the right) */}
            <div className="lg:col-span-1 relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full flex flex-col justify-end group">
              <Image 
                src={featuredTestimonial.image} 
                alt="Featured Client" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 p-8">
                <p className="text-white text-[15px] leading-relaxed mb-8">
                  {featuredTestimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center border border-zinc-600 shrink-0">
                    <span className="text-xs font-bold text-white">{featuredTestimonial.initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{featuredTestimonial.author}</p>
                    <p className="text-zinc-400 text-xs">{featuredTestimonial.role}</p>
                  </div>
                </div>
                
                {/* Large decorative quote mark */}
                <div className="absolute bottom-4 right-4 text-9xl text-white/10 font-serif leading-none select-none">
                  ”
                </div>
              </div>
            </div>

            {/* Right Side: 2x2 Grid of smaller cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-between hover:bg-zinc-900 transition-colors duration-300"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-zinc-100 fill-zinc-100" />
                      ))}
                    </div>
                    <p className="text-zinc-300 text-[15px] leading-relaxed mb-8">
                      {t.quote}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300 shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{t.author}</p>
                      <p className="text-zinc-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Auto Scroll Trustpilot-style Reviews Section */}
      <div className="max-w-[1400px] mx-auto px-6 mt-32 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-rose-500 mb-4 block">
            VERIFIED REVIEWS
          </span>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight leading-tight mb-5 text-white">
            Read reviews, partner with confidence.
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-white mt-6">
            <span className="font-bold text-lg">4.9/5</span>
            <div className="flex items-center gap-1.5 text-emerald-500 bg-white px-3 py-1 rounded-sm border border-emerald-500/20">
               <Star className="w-5 h-5 fill-emerald-500" />
               <span className="font-bold tracking-wide text-black text-sm">Trustpilot</span>
            </div>
            <span className="text-zinc-400 font-medium">Based on 5210 reviews</span>
          </div>
        </div>

        {/* Marquee Row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left Fixed Column */}
          <div className="lg:w-1/5 shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
             <Quote className="w-20 h-20 text-zinc-400 fill-zinc-400 mb-6 transform scale-x-[-1]" />
             
             <h4 className="text-2xl md:text-[28px] font-medium text-white leading-tight mb-8">What our<br/>customers are<br/>saying</h4>
             
             <div className="flex items-center gap-4 text-zinc-500">
               <ChevronLeft className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
               <div className="w-20 h-0.5 bg-zinc-800 relative">
                 <div className="absolute left-0 top-0 h-full w-1/3 bg-zinc-400"></div>
               </div>
               <ChevronRight className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
             </div>
          </div>
          
          {/* Right Scrolling Column */}
          <div className="lg:w-4/5 overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {marqueeReviews.map((review, idx) => (
                <div key={idx} className="min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px] shrink-0 pt-2">
                  <div className="bg-white p-6 rounded-2xl relative mb-6 shadow-xl">
                    <p className="text-zinc-800 text-sm md:text-[15px] leading-relaxed mb-6 h-20 overflow-hidden line-clamp-4">
                      {review.text}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />)}
                    </div>
                    
                    {/* Speech bubble tail matching the white card */}
                    <svg className="absolute -bottom-3 left-6 w-6 h-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]" viewBox="0 0 24 16" fill="currentColor">
                      <path d="M0,0 L24,0 L0,16 Z" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{review.name}</p>
                      <p className="text-zinc-500 text-xs">{review.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};
