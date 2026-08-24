"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
    image: "/assets/Home-page/client-reviews/image-164.png",
  },
  {
    quote: "The holistic approach to platform engineering made a real difference in our deployment frequency. I feel calmer and much more in control of our release cycles now.",
    author: "Hina Malik",
    role: "Head of Engineering",
    initials: "HM",
    image: "/assets/Home-page/client-reviews/image-165.png",
  },
  {
    quote: "I struggled with multi-cloud cost visibility for years, but within a few weeks of their FinOps implementation, our cloud spend was optimized noticeably.",
    author: "John Snow",
    role: "Cloud Operations Lead",
    initials: "JS",
    image: "/assets/Home-page/client-reviews/image-166.png",
  },
  {
    quote: "Within weeks, I noticed a significant improvement in our security posture. The personalized DevSecOps approach made all the difference for our compliance goals.",
    author: "Kathie Corl",
    role: "Security Director",
    initials: "KC",
    image: "/assets/Home-page/client-reviews/image-167.png",
  },
];

const autoScrollReviews = [
  { id: 1, text: "The cloud migration process was seamless. Their team handled everything professionally, minimizing our downtime to zero.", name: "Sarah Jenkins", time: "1 week ago", initials: "SJ", image: "/assets/Home-page/client-reviews/image-164.png" },
  { id: 2, text: "Excellent DevOps consultation. We went from chaotic monthly releases to smooth daily deployments. Highly recommended.", name: "Michael Chen", time: "2 weeks ago", initials: "MC", image: "/assets/Home-page/client-reviews/image-165.png" },
  { id: 3, text: "They helped us implement a robust FinOps culture. We've saved over 30% on our AWS bill in just two months.", name: "David O.", time: "1 month ago", initials: "DO", image: "/assets/Home-page/client-reviews/image-166.png" },
  { id: 4, text: "Fantastic team to work with. The platform engineering solutions provided were top-tier and highly scalable.", name: "Elena Rodriguez", time: "3 weeks ago", initials: "ER", image: "/assets/Home-page/client-reviews/image-167.png" },
  { id: 5, text: "Our security posture has never been better. The DevSecOps integration was flawless.", name: "James T.", time: "2 months ago", initials: "JT", image: "/assets/Home-page/client-reviews/image-168.png" },
  { id: 6, text: "Responsive, knowledgeable, and reliable. They truly understand enterprise cloud architecture.", name: "Anita S.", time: "1 week ago", initials: "AS", image: "/assets/Home-page/client-reviews/image-169.png" },
  { id: 7, text: "We partnered with them for our AI data pipeline. The performance improvements have been game-changing.", name: "Robert K.", time: "4 days ago", initials: "RK", image: "/assets/Home-page/client-reviews/image-170.png" },
  { id: 8, text: "My buying experience is so nice, and received me very politely. Very good performance.", name: "Karan P.", time: "1 week ago", initials: "KP", image: "/assets/Home-page/client-reviews/image-171.png" },
  { id: 9, text: "I love the customer service. They respond in a timely manner with loads of information about best practices.", name: "Catherine", time: "10 days ago", initials: "C", image: "/assets/Home-page/client-reviews/image-172.png" },
  { id: 10, text: "Product quality is incredible. They looked over all the options with us, and we are incredibly satisfied.", name: "Peter W.", time: "2 weeks ago", initials: "PW", image: "/assets/Home-page/client-reviews/image-173.png" },
  { id: 11, text: "The kubernetes transition was smooth. Their engineers are top-notch and always available.", name: "Lisa M.", time: "1 month ago", initials: "LM", image: "/assets/Home-page/client-reviews/image-174.png" },
  { id: 12, text: "Helped us pass our SOC2 compliance with their rigorous infrastructure audits and automation.", name: "Tom H.", time: "3 weeks ago", initials: "TH", image: "/assets/Home-page/client-reviews/image-175.png" },
];
const marqueeReviews = [...autoScrollReviews, ...autoScrollReviews];

export const ClientTestimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-black relative overflow-hidden font-sans border-t border-zinc-900">
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="bg-zinc-950 border border-zinc-800/80 rounded-[32px] p-6 sm:p-12 lg:p-14 shadow-2xl">
          
          {/* Semibold Header, Subtitle Removed */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans">
              What Our <span className="text-rose-600 font-semibold">Clients Say</span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Featured Card */}
            <div className="lg:col-span-1 relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full flex flex-col justify-end group border border-zinc-800">
              <Image 
                src={featuredTestimonial.image} 
                alt="Featured Client" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              <div className="relative z-10 p-8">
                <p className="text-white text-base sm:text-lg leading-relaxed mb-6 font-medium italic font-sans">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center border border-zinc-700 shrink-0 font-mono font-bold text-white text-sm">
                    {featuredTestimonial.initials}
                  </div>
                  <div>
                    <p className="text-white text-base font-bold font-sans">{featuredTestimonial.author}</p>
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans">{featuredTestimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: 2x2 Grid of smaller cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-rose-500/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-rose-500 fill-rose-500" />
                      ))}
                    </div>
                    <p className="text-zinc-200 text-base leading-relaxed mb-6 font-normal font-sans">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 border-t border-zinc-800/80 pt-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-300 shrink-0">
                      {t.image ? (
                        <img src={t.image} alt={t.author} className="w-full h-full object-cover object-top" />
                      ) : (
                        t.initials
                      )}
                    </div>
                    <div>
                      <p className="text-white text-base font-bold font-sans">{t.author}</p>
                      <p className="text-zinc-400 text-xs sm:text-sm font-sans">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Auto Scroll Trustpilot-style Reviews Section */}
      <div className="max-w-[1400px] mx-auto px-6 mt-24 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-sans mb-4">
            Read Reviews, <span className="text-rose-600 font-semibold">Partner with Confidence</span>
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-white mt-4">
            <span className="font-bold text-xl font-mono">4.9/5</span>
            <div className="flex items-center gap-1.5 text-emerald-500 bg-white px-3.5 py-1.5 rounded-md">
               <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
               <span className="font-bold tracking-wide text-black text-base">Trustpilot</span>
            </div>
            <span className="text-zinc-300 font-semibold text-base">Based on 5,210+ verified enterprise reviews</span>
          </div>
        </div>

        {/* Marquee Row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          <div className="lg:w-1/5 shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
             <Quote className="w-16 h-16 text-rose-500 fill-rose-500 mb-4 transform scale-x-[-1]" />
             <h4 className="text-2xl sm:text-3xl font-semibold text-white leading-tight font-sans">What Our <br /> Clients Say</h4>
          </div>
          
          <div className="lg:w-4/5 overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div 
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {marqueeReviews.map((review, idx) => (
                <div key={idx} className="min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px] shrink-0 pt-2">
                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl relative mb-6 shadow-xl">
                    <p className="text-zinc-200 text-base leading-relaxed mb-4 line-clamp-4 font-sans">
                      {review.text}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-lg border border-zinc-700">
                      {review.image ? (
                        <img src={review.image} alt={review.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        review.initials
                      )}
                    </div>
                    <div>
                      <p className="text-white text-base font-bold font-sans">{review.name}</p>
                      <p className="text-zinc-400 text-xs font-sans">{review.time}</p>
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
