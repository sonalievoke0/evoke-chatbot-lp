import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    <div className={`border-b border-neutral-800 transition-all duration-300 ${isOpen ? 'pb-6' : 'pb-0'}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-semibold transition-colors ${isOpen ? 'text-[#00d2ff]' : 'text-white group-hover:text-neutral-300'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center transition-all ${isOpen ? 'bg-[#00d2ff] border-[#00d2ff]' : 'bg-transparent group-hover:border-neutral-600'}`}>
          {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-neutral-500 group-hover:text-white" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-neutral-500 text-lg">Everything you need to know about Evoke AI</p>
        </div>
        
        <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-[2.5rem] p-8 md:p-12">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
