"use client";

import React, { useState } from 'react';
import { Plus, Minus, Sparkles } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "How is Evoke AI different from a basic chatbot?",
    answer: "Traditional bots use rigid scripts and keywords. Evoke AI uses Neural Intent Recognition to understand human context and nuance for natural conversations."
  },
  {
    question: "Can it actually sound like my brand?",
    answer: "Yes. Through Custom LLM Integration, we train the AI on your specific business data to ensure 100% accuracy and a tone that matches your identity."
  },
  {
    question: "What does 'Emotionally Intelligent' mean?",
    answer: "The AI is Emotionally Aware; it detects user sentiment (like frustration) and automatically adjusts its tone to be more empathetic or professional in real-time."
  },
  {
    question: "Will it slow down my website?",
    answer: "No. We use optimized server-side logic and high-performance API endpoints to ensure zero-latency responses without the typical 'typing...' delays."
  },
  {
    question: "How does it help with sales?",
    answer: "Our Sales Automation creates intelligent funnels that qualify leads and schedule meetings directly into your calendar 24/7, even while you sleep."
  },
  {
    question: "Is my company data secure?",
    answer: "Absolutely. We provide enterprise-grade encryption and ensure all builds are fully GDPR-compliant to keep your data and user privacy protected."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`bg-neutral-950 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 ${isOpen ? 'border-[#00d2ff]/50 shadow-[0_0_25px_rgba(0,210,255,0.08)]' : 'border-neutral-800/80 hover:border-neutral-700'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group gap-3"
      >
        <span className={`text-sm sm:text-base md:text-lg font-bold transition-colors leading-snug ${isOpen ? 'text-[#00d2ff]' : 'text-white group-hover:text-neutral-200'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00d2ff] border-[#00d2ff]' : 'bg-white/5 border-neutral-800 group-hover:border-neutral-600'}`}>
          {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-white" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-3 pt-3 border-t border-neutral-800/60' : 'max-h-0 opacity-0'}`}>
        <p className="text-neutral-400 text-xs sm:text-sm md:text-[15px] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-neutral-50 relative overflow-hidden border-t border-neutral-200/80">
      {/* Subtle light background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.04)_0,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-2.5 sm:space-y-3.5 max-w-3xl mx-auto px-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 border border-neutral-200/90 bg-white rounded-full text-[10px] sm:text-xs font-bold text-neutral-600 tracking-[0.25em] uppercase shadow-xs">
            <Sparkles className="w-3 h-3 text-[#00d2ff]" />
            Intelligence Query
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the next generation of conversational intelligence.
          </p>
        </div>
        
        {/* 2-Column Responsive Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
          <div className="space-y-3.5 sm:space-y-4">
            {FAQ_DATA.slice(0, 3).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
          <div className="space-y-3.5 sm:space-y-4">
            {FAQ_DATA.slice(3, 6).map((item, index) => (
              <FAQItem
                key={index + 3}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index + 3}
                onClick={() => setOpenIndex(openIndex === index + 3 ? -1 : index + 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
