import { useState, useEffect, lazy, Suspense } from 'react'
import { ArrowUp, Phone, Mail, Menu, X } from 'lucide-react'
import CallDemo from './CallDemo'
const Services = lazy(() => import('./Services'))
const TechStack = lazy(() => import('./TechStack'))
const ImageSection = lazy(() => import('./ImageSection'))
const TheGap = lazy(() => import('./TheGap'))
const FAQ = lazy(() => import('./FAQ'))
// heroVideo loaded from public folder for performance
const HERO_VIDEO_SRC = '/hero-bg.mp4'
import logo from './assets/logo.png'
const Testimonials = lazy(() => import('./Testimonials'))
const CTA = lazy(() => import('./CTA'))
const Contact = lazy(() => import('./Contact'))
const Footer = lazy(() => import('./Footer'))
import './index.css'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTopBtn(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="ai-assistants-page flex flex-col min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30">
      {/* Floating Navbar - Blends with Hero */}
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled
        ? 'bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
        : 'bg-transparent'
        }`}>
        <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-500 max-w-[1400px] ${scrolled
          ? 'py-3'
          : 'py-8'
          }`}>
          <div className="flex items-center gap-3">
            <a href="https://evokeaisolutions.com/" className="flex items-center gap-3 group cursor-pointer">
              <div className="flex items-center group cursor-pointer">
                <img
                  src={logo}
                  alt="Evoke AI Logo"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform group-hover:scale-110 translate-y-1"
                />
                <div className="flex flex-col">
                  <span className={`font-black text-base sm:text-lg tracking-tighter uppercase text-white`}>Evoke AI</span>
                  <span className={`text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide text-white/70`}>
                    Enterprise AI Platform
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-10">
            <a href="#call-demo" className="text-[13px] lg:text-sm font-bold text-white/70 hover:text-white transition-all tracking-wide">Live Demo</a>
            <a href="#services" className="text-[13px] lg:text-sm font-bold text-white/70 hover:text-white transition-all tracking-wide">Services</a>
            <a href="#techstack" className="text-[13px] lg:text-sm font-bold text-white/70 hover:text-white transition-all tracking-wide">Features</a>
            <a href="#the-gap" className="text-[13px] lg:text-sm font-bold text-white/70 hover:text-white transition-all tracking-wide">Why Us</a>
            <a href="#testimonials" className="text-[13px] lg:text-sm font-bold text-white/70 hover:text-white transition-all tracking-wide">Testimonials</a>
            <a href="#faq" className="text-[13px] lg:text-sm font-bold text-white/70 hover:text-white transition-all tracking-wide">FAQ</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#contact" className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] px-4 sm:px-8 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest text-black transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-105 active:scale-95">
              Get Started
            </a>
            
            {/* Hamburger Button (Mobile) */}
            <button 
              className="md:hidden text-white p-1 hover:text-[#00d2ff] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col px-6 py-6 gap-6 shadow-2xl">
            <a href="#call-demo" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white/80 hover:text-white transition-all tracking-wide">Live Demo</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white/80 hover:text-white transition-all tracking-wide">Services</a>
            <a href="#techstack" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white/80 hover:text-white transition-all tracking-wide">Features</a>
            <a href="#the-gap" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white/80 hover:text-white transition-all tracking-wide">Why Us</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white/80 hover:text-white transition-all tracking-wide">Testimonials</a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-white/80 hover:text-white transition-all tracking-wide">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90dvh] sm:min-h-screen flex items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover opacity-100"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-transparent to-neutral-950/60"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-6 sm:mb-8 border border-cyan-500/20 bg-black/60 rounded-full text-[9px] font-bold text-[#00d2ff] tracking-[0.2em] uppercase backdrop-blur-md">
                <span className="w-1 h-1 bg-[#00d2ff] rounded-full animate-pulse"></span>
                Neural Engine v2.0
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 sm:mb-8 text-white leading-[1.08] drop-shadow-2xl">
                Conversational <br />
                AI <br />
                <span className="bg-gradient-to-r from-[#00d2ff] to-[#34d399] bg-clip-text text-transparent">
                  That Feels <br />
                  Human.
                </span>
              </h1>

              <p className="max-w-2xl text-sm sm:text-lg md:text-xl text-neutral-100 leading-relaxed mb-8 sm:mb-12 font-medium drop-shadow-md">
                Evoke AI delivers intelligent chatbot and voice bot solutions that enhance customer engagement, streamline conversations, and automate business interactions at scale.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a href="#contact" className="btn-primary w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,210,255,0.4)] flex items-center justify-center">
                  Explore AI solutions
                </a>
                <a href="#contact" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all backdrop-blur-md flex items-center justify-center">
                  Build your bot
                </a>
              </div>
            </div>

            {/* Right Stats Content & Image */}
            <div className="md:col-span-5 lg:col-span-4 hidden md:flex flex-col items-end justify-center relative">

              <div className="space-y-4 w-full max-w-[220px] relative z-20">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl">
                  <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#00d2ff] transition-colors">99.9%</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Accuracy</div>
                  <div className="mt-3 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[99.9%] h-full bg-gradient-to-r from-[#00d2ff] to-[#34d399]"></div>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform hover:scale-105 transition-transform duration-500 group shadow-xl flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-0.5 group-hover:text-[#34d399] transition-colors">50M+</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Chats</div>
                  </div>
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

      {/* Live Audio Call Demo Showcase */}
      <CallDemo />

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-neutral-100"><div className="w-8 h-8 border-4 border-[#00d2ff] border-t-transparent rounded-full animate-spin"></div></div>}>
        {/* Services Section */}
        <Services />

        {/* Image Section */}
        <ImageSection />

        {/* Tech Stack Section */}
        <TechStack />

        {/* The Gap Section (Visual Transformation) */}
        <TheGap />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Spacer for visual separation */}
        <div className="hidden md:block h-24 md:h-48 bg-neutral-950"></div>

        {/* Contact & Collaboration Section */}
        <Contact />

        {/* Final Call to Action */}
        <CTA />

        {/* Footer Section */}
        <Footer />
      </Suspense>

      {/* Floating Action Buttons (FABs) */}
      <div className="fixed bottom-8 right-8 z-[110] flex flex-col gap-3 sm:gap-4 items-center">
        {/* Back to Top Button */}
        <button
          onClick={goToTop}
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#00d2ff] to-[#34d399] flex items-center justify-center text-white shadow-lg transition-all duration-500 hover:scale-110 active:scale-95 ${showTopBtn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
            }`}
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Phone Button */}
        <a
          href="tel:7986175240"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-blue-500/50"
          aria-label="Call Us"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        {/* Email Button */}
        <a
          href="mailto:info@evokeaisolutions.com"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-red-400 flex items-center justify-center text-red-500 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-red-500/30"
          aria-label="Email Us"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/7986175240"
          rel="noopener noreferrer"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[#25D366]/50"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default App;
