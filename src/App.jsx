import { useState, useEffect } from 'react'
import Services from './Services'
import TechStack from './TechStack'
import TheGap from './TheGap'
import FAQ from './FAQ'
import heroVideo from './assets/hero-bg.mp4'
import logo from './assets/logo.png'
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30">
      {/* Floating Navbar */}
      <nav className="fixed top-2 inset-x-2 z-[100] transition-all duration-300 pointer-events-none">
        <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-500 pointer-events-auto rounded-xl max-w-[1400px] ${
          scrolled 
            ? 'bg-black/70 backdrop-blur-2xl border border-white/10 py-2.5 shadow-2xl' 
            : 'bg-black py-3.5 shadow-xl'
        }`}>
          <div className="flex items-center gap-3">
            <img src={logo} alt="EVOKE Logo" className="h-7 w-auto object-contain" />
            <span className="text-lg font-bold tracking-wider bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">
              EVOKE AI
            </span>
          </div>
          <div className="hidden md:flex gap-10">
            <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Features</a>
            <a href="#services" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Services</a>
            <a href="#techstack" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Tech</a>
            <a href="#the-gap" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Evolution</a>
            <a href="#faq" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">FAQ</a>
          </div>
          <button className="btn-primary px-6 py-2 rounded-full text-xs transition-all shadow-lg hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-100"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-neutral-950/60"></div>
        </div>

        {/* Hero Content - Two Column Layout */}
        <div className="container mx-auto px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (8/12) */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-8 border border-cyan-500/20 bg-black/60 rounded-full text-[9px] font-bold text-[#00d2ff] tracking-[0.2em] uppercase backdrop-blur-md">
                <span className="w-1 h-1 bg-[#00d2ff] rounded-full animate-pulse"></span>
                Neural Engine v2.0
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-[1.05] drop-shadow-2xl">
                Conversational <br />
                AI <br />
                <span className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">
                  That Feels <br />
                  Human.
                </span>
              </h1>
              
              <p className="max-w-xl text-base md:text-lg text-neutral-300 leading-relaxed mb-12 font-medium drop-shadow-md">
                Evoke AI builds high-performance, emotionally intelligent chatbots that transform how businesses interact with the world.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="btn-primary w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,210,255,0.4)]">
                  Create Your AI
                </button>
                <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-md">
                  Talk to Sales
                </button>
              </div>
            </div>

            {/* Right Stats Content */}
            <div className="lg:col-span-4 flex justify-end">
              <div className="space-y-4 w-full max-w-[220px]">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl">
                  <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#00d2ff] transition-colors">99.9%</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Accuracy</div>
                  <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[99.9%] h-full bg-gradient-to-r from-[#00d2ff] to-[#34d399]"></div>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl">
                  <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#34d399] transition-colors">50M+</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Chats</div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl">
                  <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#00d2ff] transition-colors">200+</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <Services />

      {/* Tech Stack Section */}
      <TechStack />

      {/* The Gap Section (Visual Transformation) */}
      <TheGap />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <div className="container mx-auto px-4 mt-auto">
        <footer className="py-12 border-t border-neutral-900 text-center text-neutral-600">
          <p>© 2026 EVOKE AI Research. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App;
