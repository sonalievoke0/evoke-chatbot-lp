"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  TrendingUp,
  Users,
  Layout,
  Sparkles,
  CheckCircle2
} from "lucide-react";

// Service images loaded from public folder as WebP for performance
const service1Img = "/ai-assistants/service-1.webp";
const service2Img = "/ai-assistants/service-2.webp";
const service3Img = "/ai-assistants/service-3.webp";
const service4Img = "/ai-assistants/service-4.webp";

const SERVICES_DATA = [
  {
    id: "enterprise-chatbots",
    num: "01",
    title: "Enterprise Chatbots",
    subtitle: "Intelligent Conversations. Built to Scale.",
    description:
      "Handle thousands of conversations simultaneously with secure, enterprise-grade AI, ultra-fast response times, and reliable 24/7 availability.",
    image: service1Img,
    icon: MessageSquare,
    accentGlow: "rgba(0, 210, 255, 0.18)",
  },
  {
    id: "sales-automation",
    num: "02",
    title: "Sales Automation",
    subtitle: "Turn Conversations Into Revenue.",
    description:
      "Engage and qualify inbound leads 24/7, automatically schedule high-value meetings, and move prospects through your pipeline with intelligent AI-driven automation.",
    image: service2Img,
    icon: TrendingUp,
    accentGlow: "rgba(52, 211, 153, 0.18)",
  },
  {
    id: "customer-success",
    num: "03",
    title: "Customer Success",
    subtitle: "Support Customers. Wherever They Are.",
    description:
      "Deliver intelligent, context-aware support across every channel. Resolve common issues instantly while seamlessly carrying customer context across WhatsApp, Slack, and web chat.",
    image: service3Img,
    icon: Users,
    accentGlow: "rgba(0, 210, 255, 0.18)",
  },
  {
    id: "interactive-ui-ux",
    num: "04",
    title: "Interactive UI/UX",
    subtitle: "Interfaces Designed for Interaction.",
    description:
      "Create engaging AI experiences with custom chat interfaces, fluid animations, responsive layouts, and accessibility built into every interaction.",
    image: service4Img,
    icon: Layout,
    accentGlow: "rgba(168, 85, 247, 0.18)",
  }
];

export default function Services() {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const itemWidth = e.currentTarget.offsetWidth * 0.82;
    const newIdx = Math.round(scrollLeft / (itemWidth || 1));
    setActiveMobileIdx(Math.min(SERVICES_DATA.length - 1, Math.max(0, newIdx)));
  };

  const scrollToSlide = (idx) => {
    if (!scrollContainerRef.current) return;
    const itemWidth = scrollContainerRef.current.offsetWidth * 0.82;
    scrollContainerRef.current.scrollTo({
      left: idx * itemWidth,
      behavior: "smooth"
    });
    setActiveMobileIdx(idx);
  };

  return (
    <section
      id="services"
      className="relative bg-neutral-100/90 text-neutral-900 selection:bg-cyan-100 w-full h-[100dvh] sm:h-auto flex flex-col justify-center py-4 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 xl:px-14 overflow-hidden border-t border-neutral-200/70"
    >
      {/* Soft Ambient Mesh Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[1200px] xl:w-[1600px] h-[350px] sm:h-[450px] xl:h-[600px] bg-gradient-to-tr from-[#00d2ff]/10 via-[#34d399]/6 to-transparent blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[550px] xl:w-[750px] h-[300px] sm:h-[400px] xl:h-[550px] bg-gradient-to-bl from-[#00d2ff]/6 to-transparent blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1650px] mx-auto relative z-10 space-y-6 sm:space-y-12 lg:space-y-14">
        {/* Header Section */}
        <div className="text-center space-y-2 sm:space-y-3.5 max-w-3xl mx-auto px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-cyan-800 tracking-[0.2em] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-cyan-500/15">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00d2ff]" />
            Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-950 leading-[1.15] tracking-tight">
            What Sets Our{" "}
            <span className="bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] bg-clip-text text-transparent">
              Solutions Apart?
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Next-generation conversational AI infrastructure engineered for extreme speed, enterprise security, and measurable ROI.
          </p>
        </div>

        {/* Services Grid (Compact 2x2 on Mobile, 4-Col on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 xl:gap-7 pb-2 sm:pb-0">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="w-full group relative rounded-xl sm:rounded-3xl bg-white/95 hover:bg-white backdrop-blur-md text-neutral-900 p-2.5 sm:p-6 xl:p-7 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(0,210,255,0.16)] border border-white hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Radial Glow on Hover */}
                <div
                  className="absolute -right-12 -top-12 w-[240px] h-[240px] rounded-full opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${service.accentGlow} 0%, transparent 70%)`
                  }}
                />

                <div className="relative z-10 space-y-2 sm:space-y-4">
                  {/* Top Visual Stage */}
                  <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] xl:aspect-[16/9] rounded-lg sm:rounded-2xl overflow-hidden shadow-sm relative flex items-center justify-center border border-neutral-200/50 mb-2 sm:mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-lg sm:rounded-2xl" />
                  </div>

                  {/* Header: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] sm:text-xs font-mono font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-gradient-to-tr from-[#00d2ff]/12 to-[#34d399]/12 text-cyan-950 border border-[#00d2ff]/25">
                      {service.num}
                    </span>

                    <div className="w-6 h-6 sm:w-8 sm:h-8 xl:w-9 xl:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#00d2ff]/15 to-[#34d399]/15 text-cyan-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-700" />
                    </div>
                  </div>

                  {/* Title, Subtitle & Description */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <h3 className="text-[11px] sm:text-lg xl:text-[22px] font-extrabold text-neutral-950 tracking-tight group-hover:text-cyan-950 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[9px] sm:text-xs xl:text-[13px] font-semibold text-cyan-800 tracking-tight leading-snug">
                      {service.subtitle}
                    </p>
                    <p className="text-neutral-600 text-[9px] sm:text-sm font-normal leading-[1.3] sm:leading-relaxed pt-0.5 sm:pt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom: Feature List */}
                {service.features && service.features.length > 0 && (
                  <div className="relative z-10 pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-neutral-100 space-y-1 sm:space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-1.5 sm:gap-2.5 text-[9px] sm:text-[13px] font-medium text-neutral-700"
                      >
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
