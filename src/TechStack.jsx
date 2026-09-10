"use client";

import React, { useState, useRef } from 'react';
import { Cpu, Globe, BarChart3, Zap, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

const TECH_ITEMS = [
  {
    num: "01",
    title: 'Advanced AI Integration',
    tag: 'Custom LLM Core',
    description: 'AI tools designed for your business to provide accurate and helpful responses with high context awareness.',
    icon: Cpu,
    accentGlow: 'rgba(0, 210, 255, 0.18)',
    badgeColor: 'text-[#00d2ff] bg-cyan-50 border-cyan-200/60',
    features: ['Context-aware responses', 'Multi-turn dialogue']
  },
  {
    num: "02",
    title: 'Seamless Integration',
    tag: 'Enterprise Connectors',
    description: 'Connect AI to the tools and systems you already use to make your work faster, automated, and easier.',
    icon: Globe,
    accentGlow: 'rgba(52, 211, 153, 0.18)',
    badgeColor: 'text-[#34d399] bg-emerald-50 border-emerald-200/60',
    features: ['Two-way CRM sync', 'Automated webhooks']
  },
  {
    num: "03",
    title: 'Actionable Insights',
    tag: 'Real-time Telemetry',
    description: 'Use real-time data to understand customer interactions, improve conversation flow, and make better decisions.',
    icon: BarChart3,
    accentGlow: 'rgba(0, 210, 255, 0.18)',
    badgeColor: 'text-[#00d2ff] bg-cyan-50 border-cyan-200/60',
    features: ['Sentiment analytics', 'Conversion tracking']
  }
];

const TechStack = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const itemWidth = e.currentTarget.offsetWidth * 0.82;
    const newIdx = Math.round(scrollLeft / (itemWidth || 1));
    setActiveMobileIdx(Math.min(TECH_ITEMS.length - 1, Math.max(0, newIdx)));
  };

  const scrollToSlide = (idx) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.offsetWidth * 0.82;
    scrollRef.current.scrollTo({
      left: idx * itemWidth,
      behavior: 'smooth'
    });
    setActiveMobileIdx(idx);
  };

  return (
    <section id="techstack" className="py-14 sm:py-20 md:py-28 bg-neutral-100/90 text-neutral-900 overflow-hidden relative border-y border-neutral-200/80">
      {/* Ambient Radial Mesh Lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] xl:w-[1200px] h-[400px] xl:h-[600px] bg-gradient-to-tr from-[#00d2ff]/12 via-[#34d399]/8 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] xl:w-[700px] h-[400px] xl:h-[600px] bg-gradient-to-bl from-[#00d2ff]/8 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: High-Tech Video Showcase (Hidden on mobile, 6 cols on md) */}
          <div className="hidden md:block md:col-span-6 xl:col-span-6 relative order-2 md:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl bg-neutral-950 p-2 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-neutral-200/80 group">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-semibold text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse" />
                  Live Neural Processing
                </div>
              </div>

              {/* Video Player */}
              <div className="aspect-video w-full bg-neutral-900 rounded-xl sm:rounded-2xl overflow-hidden relative border border-white/10">
                <video 
                  className="w-full h-full object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-700 ease-out"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/vd1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Ambient Lighting Glows */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#00d2ff]/20 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#34d399]/20 blur-[80px] -z-10 rounded-full pointer-events-none"></div>
          </div>

          {/* Right Column: Content & Infrastructure Capabilities (6 cols on md) */}
          <div className="md:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8 order-1 md:order-2">
            {/* Header Area */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-cyan-500/15 bg-white/90 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-cyan-800 tracking-[0.25em] uppercase shadow-xs">
                <Zap className="w-3.5 h-3.5 text-[#00d2ff]" />
                The Infrastructure
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.12]">
                Built for Intelligence. <br />
                <span className="bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] bg-clip-text text-transparent">
                  Engineered for Scale.
                </span>
              </h2>
              <p className="text-xs sm:text-base md:text-lg text-neutral-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Simple, powerful AI solutions that improve communication, connect with your existing tools, and grow with your business.
              </p>
            </div>

            {/* Vertical Stack (Mobile & Desktop) */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex flex-col gap-3 sm:gap-4 pb-2 lg:pb-0">
                {TECH_ITEMS.map((item, index) => {
                  const IconComp = item.icon;

                  return (
                    <div 
                      key={index} 
                      className="w-full shrink-0 group relative p-4 sm:p-6 bg-white/95 hover:bg-white backdrop-blur-xl border border-neutral-200/80 hover:border-cyan-400/40 rounded-xl sm:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(0,210,255,0.14)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Radial Hover Glow */}
                      <div
                        className="absolute -right-10 -top-10 w-[200px] h-[200px] rounded-full opacity-0 group-hover:opacity-100 blur-[50px] transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, ${item.accentGlow} 0%, transparent 70%)`
                        }}
                      />

                      <div className="relative z-10 flex items-start gap-3 sm:gap-5">
                        {/* Icon Squircle */}
                        <div className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#00d2ff]/12 to-[#34d399]/12 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                          <IconComp className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-700" />
                        </div>

                        {/* Text Stack */}
                        <div className="flex-1 min-w-0 space-y-1 sm:space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-sm sm:text-lg font-extrabold text-neutral-950 tracking-tight group-hover:text-cyan-950 transition-colors truncate">
                              {item.title}
                            </h3>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-cyan-50 text-cyan-800 border border-cyan-200/60 hidden sm:inline-block">
                              {item.num}
                            </span>
                          </div>

                          <span className="inline-block text-[9px] sm:text-[11px] font-semibold text-cyan-800 uppercase tracking-wider">
                            {item.tag}
                          </span>

                          <p className="text-neutral-600 text-[11px] sm:text-sm leading-[1.4] sm:leading-relaxed font-normal">
                            {item.description}
                          </p>

                          {/* Feature Micro-Pills */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                            {item.features.map((feat, fIdx) => (
                              <div key={fIdx} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-700 bg-neutral-100/80 px-2.5 py-0.5 rounded-md">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
