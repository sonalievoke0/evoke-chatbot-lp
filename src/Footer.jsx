import React from 'react';
import logo from './assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 pt-24 pb-12 px-6 border-t border-neutral-900">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left items-start">

          {/* Logo & Vision Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={logo} alt="EVOKE Logo" className="h-6 w-auto opacity-80" />
              <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">
                EVOKE AI
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Leading the Conversational Revolution with emotionally intelligent neural engines.
            </p>
          </div>

          {/* Products Section */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Products</h4>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-neutral-400 text-sm font-medium">
              <a href="#" className="hover:text-[#00d2ff] transition-colors">Chatbots</a>
              <span className="text-neutral-800 hidden sm:inline">|</span>
              <a href="#" className="hover:text-[#00d2ff] transition-colors">API</a>
              <span className="text-neutral-800 hidden sm:inline">|</span>
              <a href="#" className="hover:text-[#00d2ff] transition-colors">Documentation</a>

            </div>
          </div>

          {/* Company Section */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Company</h4>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-neutral-400 text-sm font-medium">
              <a href="#" className="hover:text-[#34d399] transition-colors">Our Vision</a>
              <span className="text-neutral-800 hidden sm:inline">|</span>
              <a href="#" className="hover:text-[#34d399] transition-colors">GitHub</a>
              <span className="text-neutral-800 hidden sm:inline">|</span>
              <a href="#contact" className="hover:text-[#34d399] transition-colors">Contact</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs font-medium tracking-wide">
            © 2026 Evoke AI. Leading the Conversational Revolution.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-neutral-700 uppercase tracking-widest">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
