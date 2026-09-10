"use client";

import React, { useState } from 'react';
import { Sparkles, Brain, Cpu, Share2 } from 'lucide-react';

const aeonImage = '/ai-assistants/aeon-image.webp';

const ImageSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 'knowledge',
      title: 'Knowledge',
      subtitle: 'Integration',
      icon: Brain,
      content: 'Use your own models and knowledge bases for accuracy and precision.',
      position: 'top-[5%] md:top-[12%] left-[2%] md:left-[10%]',
      align: 'right',
      color: 'cyan'
    },
    {
      id: 'intelligence',
      title: 'Conversational',
      subtitle: 'Intelligence',
      icon: Sparkles,
      content: 'Understands complex nuances, sarcasm, and multi-turn dialogues with human-level accuracy.',
      position: 'top-[35%] md:top-[42%] left-[2%] md:left-[25%]',
      align: 'right',
      color: 'emerald'
    },
    {
      id: 'tasks',
      title: 'Task Execution &',
      subtitle: 'Skills',
      icon: Cpu,
      content: 'Capable of booking appointments, updating CRM data, and handling logic-driven workflows.',
      position: 'bottom-[30%] md:bottom-[28%] left-[2%] md:left-[28%]',
      align: 'right',
      color: 'cyan'
    },
    {
      id: 'embed',
      title: 'Embeddable',
      subtitle: 'Everywhere',
      icon: Share2,
      content: 'Deploy across Web, WhatsApp, Discord, and Slack with a single unified neural core.',
      position: 'bottom-[10%] md:bottom-[18%] right-[2%] md:right-[28%]',
      align: 'left',
      color: 'white'
    }
  ];

  return (
    <section id="image-section" className="relative bg-neutral-950 overflow-hidden flex flex-col justify-center py-8 sm:py-16 md:py-24">
      <style>{`
        .minimal-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(-10px);
        }
        .active-content {
          max-height: 200px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 1rem;
        }
        .text-glow {
          text-shadow: 0 0 30px rgba(0,0,0,1);
        }
      `}</style>

      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-emerald-500/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0"></div>

      {/* 1. Headline Area */}
      <div className="relative z-30 w-full text-center px-4 pt-2 sm:pt-8 pb-3 sm:pb-6 bg-neutral-950">
        <h2 className="font-black tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] max-w-4xl mx-auto text-xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.15]">
          Built for real-time <br className="sm:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-emerald-400">
            humanlike interactions
          </span>
        </h2>
      </div>

      <div className="w-full relative z-10 flex-grow">
        <div className="relative group h-full">
          {/* Cinematic Blending */}
          <div className="absolute top-0 left-0 w-full h-12 sm:h-32 bg-gradient-to-b from-neutral-950 to-transparent z-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 sm:h-32 bg-gradient-to-t from-neutral-950 to-transparent z-20"></div>

          <div className="relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-screen overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            <img
              src={aeonImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full h-full object-cover object-top transform scale-[1.02] transition-transform duration-[5000ms] ease-out opacity-90"
            />
          </div>

          {/* Interactive Feature Elements (Mobile & Desktop) */}
          <div className="absolute inset-0 z-40 pointer-events-none">
            {features.map((f) => (
              <div
                key={f.id}
                className={`absolute ${f.position} flex ${
                  f.align === 'left' ? 'flex-row-reverse text-left' : 'flex-row text-right'
                } items-start gap-0 pointer-events-auto z-50`}
                onClick={(e) => {
                  e.preventDefault();
                  if (activeFeature === f.id) {
                    setActiveFeature(null);
                  } else {
                    setActiveFeature(f.id);
                  }
                }}
                onMouseEnter={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setActiveFeature(f.id);
                  }
                }}
                onMouseLeave={() => {
                  if (window.matchMedia('(hover: hover)').matches) {
                    setActiveFeature(null);
                  }
                }}
              >
                {/* 1. Neural Node Connector */}
                <div className={`flex items-center ${f.align === 'left' ? 'flex-row-reverse' : 'flex-row'} mt-1 md:mt-4`}>
                  <div
                    className={`w-3 h-3 md:w-5 md:h-5 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeFeature === f.id
                        ? 'scale-125 border-white bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                        : 'border-white/40 bg-black/40 backdrop-blur-md'
                    } border`}
                  >
                    <span className="text-[8px] md:text-[12px] text-white font-bold">+</span>
                  </div>
                  <div className="w-4 md:w-16 h-px border-t border-dotted border-white/40"></div>
                </div>

                {/* 2. Content Container */}
                <div
                  className={`max-w-[120px] md:max-w-[280px] transition-all duration-500 ${
                    activeFeature && activeFeature !== f.id ? 'opacity-20 scale-95' : 'opacity-100'
                  }`}
                >
                  <h3 className="text-white text-[10px] sm:text-xs md:text-3xl font-black tracking-tight leading-tight md:leading-none text-glow">
                    {f.title} <br className="hidden md:block" /> {f.subtitle}
                  </h3>

                  <div className={`minimal-content hidden md:block ${activeFeature === f.id ? 'active-content' : ''}`}>
                    <div className="p-6 bg-black border border-white/10 rounded-2xl shadow-2xl shadow-black/50">
                      <p className="text-white text-sm leading-relaxed font-medium">{f.content}</p>
                    </div>
                  </div>
                  {/* Mobile content box (optional, simple version) */}
                  <div className={`minimal-content md:hidden ${activeFeature === f.id ? 'active-content' : ''}`}>
                    <div className="p-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-xl mt-1">
                      <p className="text-white text-[9px] leading-tight font-medium">{f.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Removed separate mobile feature cards since interaction is unified */}
    </section>
  );
};

export default ImageSection;
