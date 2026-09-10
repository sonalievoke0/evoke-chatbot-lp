"use client";

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Clock,
  Target,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const TheGap = () => {
  const [activeTab, setActiveTab] = useState('standard');

  // Background Neural Animation Effect
  const [dots, setDots] = useState([]);
  useEffect(() => {
    const newDots = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setDots(newDots);
  }, []);

  return (
    <section id="the-gap" className="py-10 sm:py-20 md:py-28 bg-neutral-200 text-neutral-900 font-sans selection:bg-cyan-100 overflow-hidden relative">
      {/* Background Neural Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute bg-[#00d2ff] rounded-full blur-[1px]"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `float ${dot.duration}s infinite linear ${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translate(100px, -100px); opacity: 0; }
          }
          .glass-card-gap-light {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          .neural-glow-gap-light {
            box-shadow: 0 25px 60px -15px rgba(0, 0, 255, 0.1);
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <header className="mb-6 sm:mb-12 text-center space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#00d2ff]/20 bg-white text-[#00d2ff] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase shadow-xs">
            <Sparkles className="w-3 h-3 text-[#00d2ff]" />
            AI-Powered Conversations
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-black to-neutral-700 bg-clip-text text-transparent leading-[1.15]">
            From Customer Queries to <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] bg-clip-text text-transparent">
              Meaningful Conversations.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-base md:text-lg text-neutral-700 font-medium leading-relaxed">
            Evoke AI transforms customer interactions with intelligent chatbots and voice bots that understand, respond, and act—24/7.
          </p>
        </header>

        {/* Interaction Toggle */}
        <div className="flex justify-center mb-5 sm:mb-10">
          <div className="bg-neutral-900 p-1 rounded-xl sm:rounded-2xl border border-neutral-800 flex gap-1.5 sm:gap-2 backdrop-blur-xl shadow-xl w-full max-w-sm">
            <button
              onClick={() => setActiveTab('limitation')}
              className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider text-center ${
                activeTab === 'limitation'
                  ? 'bg-neutral-800 text-red-400 border border-red-500/20 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              The Challenge
            </button>
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all uppercase tracking-wider text-center ${
                activeTab === 'standard'
                  ? 'bg-gradient-to-r from-[#00d2ff] to-[#34d399] text-black shadow-lg shadow-[#00d2ff]/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              The Evoke Solution
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">

          {/* Visual Narrative Side */}
          <div className="md:col-span-5 relative flex flex-col items-center">
            {/* Visual Image */}
            <div className="w-full max-w-[240px] sm:max-w-[320px] mb-8 relative hidden sm:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00d2ff]/20 to-[#34d399]/20 blur-[60px] rounded-full"></div>
              <img src="/hero.png" alt="AI Solution" loading="lazy" className="w-full h-auto object-contain relative z-10 floating-image drop-shadow-xl" />
            </div>
            
            <div className="w-full">
            {activeTab === 'limitation' ? (
              <div className="animate-in fade-in duration-500">
                <div className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glass-card-gap-light border-red-500/10 relative overflow-hidden group shadow-lg">
                  <h3 className="text-lg sm:text-2xl font-bold text-red-500 mb-3 sm:mb-4 tracking-tight">The Challenge</h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    {[
                      'Repetitive Customer Queries',
                      'Slow Response Times',
                      'Missed Customer Opportunities'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-neutral-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                        <span className="text-xs sm:text-base font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 sm:mt-6 text-neutral-500 text-xs sm:text-sm italic leading-relaxed font-medium">
                    Routine questions and delayed responses create friction, drain support resources, and lead to lost opportunities.
                  </p>
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in duration-500">
                <div className="p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl glass-card-gap-light border-[#00d2ff]/20 neural-glow-gap-light relative overflow-hidden shadow-lg">
                  <h3 className="text-lg sm:text-2xl font-bold text-[#00d2ff] mb-3 sm:mb-4 tracking-tight">The Evoke AI Solution</h3>
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center gap-2.5 text-black">
                      <Brain size={16} className="text-[#00d2ff] shrink-0 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-base font-bold tracking-tight">AI-Powered Responses</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-black">
                      <Clock size={16} className="text-[#34d399] shrink-0 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-base font-bold tracking-tight">24/7 Chat &amp; Voice Support</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-black">
                      <Target size={16} className="text-[#00d2ff] shrink-0 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-base font-bold tracking-tight">Automated Follow-Ups</span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-200">
                    <p className="text-[#34d399] font-black uppercase tracking-widest text-[9px] sm:text-xs mb-1">The Evoke Advantage:</p>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-medium">
                      Intelligent bots deliver instant, contextual answers across chat and voice, converting inquiries into opportunities.
                    </p>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>

          {/* Detailed Content Side */}
          <div className="md:col-span-7">
            <div className="transition-all duration-500 space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-black">
                Make Every Conversation Count
              </h3>

              <p className="text-xs sm:text-base leading-relaxed text-neutral-700 font-medium">
                Our AI chatbots and voice bots handle routine conversations, answer customer questions, qualify leads, schedule appointments, and connect users with the right information—without the limitations of traditional automation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5 pt-2">
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-[#00d2ff]/30 transition-all group shadow-sm">
                  <Brain className="text-[#00d2ff] mb-2 group-hover:scale-110 transition-transform w-6 h-6 sm:w-8 sm:h-8" />
                  <h4 className="font-bold text-black text-sm sm:text-base mb-1 tracking-tight">Intelligent &amp; Context-Aware</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                    Understand customer intent and provide relevant, natural responses across chat and voice.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-[#34d399]/30 transition-all group shadow-sm">
                  <Clock className="text-[#34d399] mb-2 group-hover:scale-110 transition-transform w-6 h-6 sm:w-8 sm:h-8" />
                  <h4 className="font-bold text-black text-sm sm:text-base mb-1 tracking-tight">Always Available</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                    Give your customers instant support and engagement, anytime, without adding to your team’s workload.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-black uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 transition-all w-full sm:w-fit justify-center bg-black text-white hover:bg-[#00d2ff] hover:text-black shadow-md"
                >
                  <span>Build Smarter Conversations</span>
                  <ChevronRight size={15} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheGap;
