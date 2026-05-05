import React, { useState } from 'react';
import { MessageSquare, TrendingUp, Users, Layout, ArrowUpRight } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'enterprise-chatbots',
    title: 'Enterprise Chatbots',
    headline: 'Enterprise Chatbots',
    description: 'Scalable, secure, and ready to handle thousands of concurrent queries with zero latency.',
    icon: <MessageSquare className="w-14 h-14 text-[#00d2ff]" />,
    tags: ['Security', 'Scale', '24/7', 'Global']
  },
  {
    id: 'sales-automation',
    title: 'Sales Automation',
    headline: 'Sales Automation',
    description: 'Intelligent funnels that qualify leads and schedule meetings while you sleep, maximizing conversion.',
    icon: <TrendingUp className="w-14 h-14 text-[#34d399]" />,
    tags: ['Leads', 'Growth', 'Auto-Pilot', 'Smart']
  },
  {
    id: 'customer-success',
    title: 'Customer Success',
    headline: 'Customer Success',
    description: 'Support that understands nuance and resolves complex tickets instantly using advanced NLP.',
    icon: <Users className="w-14 h-14 text-emerald-500" />,
    tags: ['Support', 'Retention', 'NLP', 'Fast']
  },
  {
    id: 'interactive-ui-ux',
    title: 'Interactive UI/UX',
    headline: 'Interactive UI/UX',
    description: 'Stunning, responsive chat interfaces designed with Tailwind CSS for a premium, high-converting feel.',
    icon: <Layout className="w-14 h-14 text-purple-500" />,
    tags: ['Design', 'UX', 'Tailwind', 'Mobile']
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const activeIdx = SERVICES_DATA.findIndex(s => s.id === activeTab);
  const total = SERVICES_DATA.length;

  return (
    <section id="services" className="py-32 bg-neutral-50 flex items-center justify-center p-6 md:p-12 font-sans selection:bg-cyan-100 overflow-hidden">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* Left Content Column */}
        <div className="lg:col-span-5 space-y-12 z-50 py-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
            What sets our <br /> solutions apart?
          </h1>

          <nav className="flex flex-col space-y-6">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center text-left group transition-all duration-300 ${activeTab === service.id
                  ? 'text-[#00d2ff] font-bold'
                  : 'text-neutral-800 text-bold hover:text-black'
                  }`}
              >
                <span className={`w-3 h-3 rounded-full mr-6 transition-transform duration-300 ${activeTab === service.id ? 'bg-[#00d2ff] scale-150 shadow-[0_0_20px_rgba(0,210,255,0.6)]' : 'bg-neutral-200 group-hover:scale-110'
                  }`} />
                <span className="text-xl md:text-2xl lg:text-3xl tracking-tight">
                  {service.title}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right Preview Column - Refined Infinite Loop Stack */}
        <div className="lg:col-span-7 relative h-[750px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {SERVICES_DATA.map((service, index) => {
              // Calculate circular offset for infinite loop effect
              let displayOffset = (index - activeIdx + total) % total;

              const isFront = displayOffset === 0;

              const style = {
                transform: `perspective(1000px) translateX(${displayOffset * 100}px) translateZ(${-displayOffset * 50}px) scale(${1 - displayOffset * 0.08})`,
                zIndex: 40 - displayOffset,
                opacity: isFront ? 1 : 0.4 - (displayOffset * 0.1),
                cursor: isFront ? 'default' : 'pointer',
                filter: isFront ? 'none' : `blur(${displayOffset * 0.5}px)`,
              };

              return (
                <div
                  key={service.id}
                  style={style}
                  onClick={() => !isFront && setActiveTab(service.id)}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[540px] bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFront ? 'border-neutral-100' : 'border-transparent'
                    } hover:border-[#00d2ff]/40`}
                >
                  {/* High-Clarity Top Section */}
                  <div className="h-72 bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                    {/* Animated Glow Effect in background */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00d2ff]/10 blur-[80px] rounded-full"></div>

                    {/* Icon/Visual with enhanced glow */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="p-8 bg-neutral-900/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] mb-4 transition-all duration-500 group-hover:scale-105 group-hover:border-[#00d2ff]/40">
                        {service.icon}
                      </div>
                    </div>

                    {/* Premium Glass Labels */}
                    <div className="absolute top-8 left-8 px-4 py-2 border border-white/5 bg-white/5 backdrop-blur-xl rounded-xl text-[10px] text-neutral-300 uppercase tracking-[0.2em] font-black">
                      {service.tags[0]}
                    </div>
                    <div className="absolute top-8 right-8 px-4 py-2 border border-white/5 bg-white/5 backdrop-blur-xl rounded-xl text-[10px] text-neutral-300 uppercase tracking-[0.2em] font-black">
                      {service.tags[1]}
                    </div>
                    <div className="absolute bottom-8 left-8 px-4 py-2 border border-white/5 bg-white/5 backdrop-blur-xl rounded-xl text-[10px] text-neutral-300 uppercase tracking-[0.2em] font-black">
                      {service.tags[2]}
                    </div>
                    <div className="absolute bottom-8 right-8 px-4 py-2 border border-white/5 bg-white/5 backdrop-blur-xl rounded-xl text-[10px] text-neutral-300 uppercase tracking-[0.2em] font-black">
                      {service.tags[3]}
                    </div>

                    <div className="absolute inset-6 border border-white/5 rounded-[2rem] pointer-events-none"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10 space-y-6 bg-white">
                    <h3 className="text-3xl font-bold text-black leading-tight tracking-tight">
                      {service.headline}
                    </h3>
                    <p className="text-neutral-700 text-lg md:text-xl leading-relaxed font-medium">
                      {service.description}
                    </p>

                    <div className="pt-8 flex items-center justify-between border-t border-neutral-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#00d2ff] rounded-full"></span>
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Active Module.0{index + 1}</span>
                      </div>
                      <button className="group flex items-center gap-3 text-black font-black hover:text-[#00d2ff] transition-all text-lg">
                        <span className="relative overflow-hidden inline-block">
                          Explore
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00d2ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </span>
                        <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-[#00d2ff] group-hover:text-white transition-all">
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
