"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-14 sm:py-20 md:py-28 overflow-hidden bg-neutral-50 flex items-center justify-center px-4 sm:px-6 border-t border-neutral-200/80">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-[#00d2ff]/10 blur-[130px] rounded-full"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-6 sm:space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 border border-neutral-200 bg-white rounded-full text-[10px] sm:text-xs font-bold text-neutral-600 tracking-[0.25em] uppercase shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" />
          Instant Deployment
        </div>

        {/* Main Content */}
        <div className="space-y-3 sm:space-y-5 px-2">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-950 leading-[1.12]">
            Stop Responding. <br />
            <span className="bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] bg-clip-text text-transparent">
              Start Connecting.
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-2xl text-neutral-600 font-normal leading-relaxed">
            Deploy your first Evoke AI assistant in <span className="font-bold text-neutral-900">minutes</span>, not months.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 sm:pt-4 px-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#00d2ff] to-[#34d399] rounded-xl sm:rounded-2xl text-black font-extrabold text-sm sm:text-base md:text-lg transition-all shadow-[0_12px_35px_rgba(0,210,255,0.3)] hover:scale-105 hover:shadow-[0_16px_45px_rgba(0,210,255,0.45)] active:scale-95 flex items-center justify-center gap-2.5 group"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Support Text */}
        <p className="text-neutral-500 text-xs sm:text-sm font-medium tracking-wide">
          No credit card required. Cancel anytime.
        </p>

      </div>

      {/* Side Decorative Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

    </section>
  );
};

export default CTA;
