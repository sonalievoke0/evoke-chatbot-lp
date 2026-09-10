"use client";

import React from 'react';
import { Quote, MessageSquare, Zap, GraduationCap, Sparkles } from 'lucide-react';

const TESTIMONIAL_DATA = [
  {
    category: "Core AI",
    icon: <MessageSquare className="w-3 h-3 text-[#00d2ff]" />,
    text: "Evoke AI made our chatbot deployment seamless. The Neural Intent Recognition and UI polish really stand out. It doesn't just reply; it understands.",
    author: "Vikas Malhotra",
    handle: "@vikas_ai"
  },
  {
    category: "Core AI",
    icon: <MessageSquare className="w-3 h-3 text-[#00d2ff]" />,
    text: "The balance between design and intelligence is perfect. Our customer support automation feels premium, localized, and truly human.",
    author: "Ananya Sharma",
    handle: "@supportlabs_in"
  },
  {
    category: "Core AI",
    icon: <MessageSquare className="w-3 h-3 text-[#00d2ff]" />,
    text: "Building intelligent experiences feels intuitive and fast. Evoke is the go-to for teams that value both speed and high-end engineering.",
    author: "Ritika Kapoor",
    handle: "@uxlabs_in"
  },
  {
    category: "NOVA Ecosystem",
    icon: <Zap className="w-3 h-3 text-[#34d399]" />,
    text: "The automation workflows saved us countless hours. Campaign management is now frictionless and driven by real-time AI insights.",
    author: "Amit Singhal",
    handle: "@growthops_india"
  },
  {
    category: "NOVA Ecosystem",
    icon: <Zap className="w-3 h-3 text-[#34d399]" />,
    text: "Evoke brings a level of clarity to our data that we haven't seen before. Their smart targeting and analytics moved the needle for us in week one.",
    author: "Nidhi Bansal",
    handle: "@crmstack"
  },
  {
    category: "NOVA Ecosystem",
    icon: <Zap className="w-3 h-3 text-[#34d399]" />,
    text: "Personalization used to be a bottleneck. With Evoke’s AI ecosystem, it’s now our biggest competitive advantage. Scalable and incredibly smart.",
    author: "Sneha Iyer",
    handle: "@brandpulse_ai"
  },
  {
    category: "ORION Knowledge",
    icon: <GraduationCap className="w-3 h-3 text-purple-400" />,
    text: "Evoke helped us convert complex technical material into structured, interactive knowledge bases effortlessly. A game-changer for our internal logic.",
    author: "Sandeep Joshi",
    handle: "@corporate_lnd"
  },
  {
    category: "ORION Knowledge",
    icon: <GraduationCap className="w-3 h-3 text-purple-400" />,
    text: "Structuring and scaling AI-driven content is now effortless. It reduced our team onboarding time by 60%.",
    author: "Swati Choudhary",
    handle: "@hrtech_india"
  }
];

// Duplicate for infinite loop
const ALL_TESTIMONIALS = [...TESTIMONIAL_DATA, ...TESTIMONIAL_DATA];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-20 md:py-28 bg-neutral-950 relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1100px] h-[450px] md:h-[600px] bg-[#00d2ff]/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-8 sm:mb-14 text-center">
        <div className="max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-white/10 bg-white/5 rounded-full text-[10px] sm:text-xs font-bold text-neutral-400 tracking-[0.25em] uppercase shadow-xs">
            <Sparkles className="w-3 h-3 text-[#00d2ff]" />
            Transmission Feed
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] bg-clip-text text-transparent">
              High-Growth Teams.
            </span>
          </h2>
          <p className="text-xs sm:text-base text-neutral-400 font-normal max-w-xl mx-auto leading-relaxed">
            Real feedback from fast-moving enterprises leveraging next-gen conversational intelligence.
          </p>
        </div>
      </div>

      {/* Auto-Scroller Container */}
      <div className="relative group/scroller overflow-hidden py-2">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-64 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-64 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex animate-marquee group-hover/scroller:pause-marquee gap-4 sm:gap-6 px-4">
          {ALL_TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[290px] sm:w-[350px] md:w-[420px] shrink-0 p-5 sm:p-6 md:p-7 bg-neutral-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group/card shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
                      {item.icon}
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{item.category}</span>
                   </div>
                   <Quote className="w-5 h-5 text-neutral-700 group-hover/card:text-[#00d2ff]/40 transition-colors" />
                </div>
                <p className="text-xs sm:text-sm md:text-[15px] text-neutral-300 leading-relaxed font-normal italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-left">
                  <div className="flex flex-col text-left">
                    <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{item.author}</span>
                    <span className="text-neutral-500 text-[11px] sm:text-xs font-mono">{item.handle}</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_8px_#34d399]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-290px * 8 - 16px * 8)); }
        }
        @media (min-width: 640px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-350px * 8 - 24px * 8)); }
          }
        }
        @media (min-width: 768px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-420px * 8 - 24px * 8)); }
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .pause-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
