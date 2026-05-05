import React, { useEffect, useRef, useState } from 'react';

const TheGap = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationFrameId;

    const PARTICLE_COUNT = 1200;

    class Particle {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 1.2 + 0.3;
        this.color = 'rgba(255, 255, 255, 0.5)';
        this.angle = Math.random() * Math.PI * 2;
        this.dist = Math.random() * 180 + 20;
        this.speed = Math.random() * 0.005 + 0.002;
        this.jitterX = 0;
        this.jitterY = 0;
      }

      update(state, time) {
        const centerX = width / 2;
        const centerY = height / 2;

        if (state === 0) { // Intro
          this.angle += this.speed;
          let tx = centerX + Math.cos(this.angle) * this.dist;
          let ty = centerY + Math.sin(this.angle) * this.dist;
          this.x += (tx - this.x) * 0.03;
          this.y += (ty - this.y) * 0.03;
          this.color = 'rgba(255, 255, 255, 0.25)';
        } 
        else if (state === 1) { // Problem
          this.angle += 0.02;
          this.jitterX = Math.sin(time * 0.001 + this.dist) * 2;
          this.jitterY = Math.cos(time * 0.0012 + this.dist) * 2;
          let tx = centerX + (this.x - centerX) + (Math.random() - 0.5) * 2;
          let ty = centerY + (this.y - centerY) + (Math.random() - 0.5) * 2;
          this.x += (tx - this.x) * 0.02 + this.jitterX * 0.1;
          this.y += (ty - this.y) * 0.02 + this.jitterY * 0.1;
          const pulse = (Math.sin(time * 0.003 + this.dist) + 1) / 2;
          this.color = `rgba(244, 63, 94, ${0.2 + pulse * 0.3})`;
        }
        else if (state === 2) { // Solution
          const cols = 40;
          const spacing = width / cols;
          const index = particles.indexOf(this);
          const gridX = (index % cols) * spacing;
          const gridY = Math.floor(index / cols) * (height / (PARTICLE_COUNT / cols));
          const wave = Math.sin(time * 0.0015 + (gridX * 0.005)) * 15;
          this.x += (gridX - this.x) * 0.06;
          this.y += (gridY + wave - this.y) * 0.06;
          this.color = 'rgba(16, 185, 129, 0.6)';
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (particles.length === 0) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          particles.push(new Particle());
        }
      }
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update(activeStep, time);
        p.draw();
        if (activeStep === 2 && Math.random() > 0.998) {
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.08)';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(width / 2, height / 2);
          ctx.stroke();
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate(0);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeStep]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !horizontalRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      
      // Update horizontal translation
      const translateX = scrollProgress * (horizontalRef.current.scrollWidth - window.innerWidth);
      horizontalRef.current.style.transform = `translateX(-${translateX}px)`;

      // Determine active step
      if (scrollProgress < 0.25) setActiveStep(0);
      else if (scrollProgress < 0.75) setActiveStep(1);
      else setActiveStep(2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="the-gap" 
      ref={containerRef}
      className="relative bg-[#02040a] h-[300vh]" // Triple height for vertical-to-horizontal mapping
    >
      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .text-gradient-neural {
          background: linear-gradient(to right, #fff, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text-gradient-legacy {
          background: linear-gradient(to right, #fff, #f43f5e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Canvas & Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        {/* Swipe/Scroll Hint */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] animate-pulse">
          Scroll vertically to traverse singularity
        </div>

        {/* Horizontal Navigation Dots (Bottom) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100] flex gap-5 items-center">
          {[0, 1, 2].map((step) => (
            <div 
              key={step} 
              className={`w-12 h-[2px] transition-all duration-500 ${activeStep === step ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-white/10'}`}
            ></div>
          ))}
        </div>

        {/* Horizontal Moving Content */}
        <div 
          ref={horizontalRef}
          className="flex h-full w-[300vw] will-change-transform transition-transform duration-100 ease-out"
        >
          {/* Panel 1: Intro */}
          <div className="w-screen h-full flex items-center justify-center px-[10%] shrink-0">
            <div className="max-w-4xl text-center">
              <div className="font-mono text-blue-500 text-xs tracking-widest mb-4 uppercase">Project Evoke // Phase 01</div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-white">
                  Evolution Beyond <br/> <span className="opacity-50">The Basic Bot.</span>
              </h2>
              <p className="text-slate-400 text-xl mx-auto max-w-lg font-light leading-relaxed">
                  The gap between automation and intelligence is expanding. We bridge it with clinical precision.
              </p>
            </div>
          </div>

          {/* Panel 2: The Problem */}
          <div className="w-screen h-full flex items-center justify-center px-[10%] shrink-0">
            <div 
              className="glass-panel p-12 rounded-[2rem] max-w-[500px] hover:border-red-500/30 group relative"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(5px)`;
              }}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_15px_#f43f5e] absolute left-6 top-1/2 -translate-y-1/2"></div>
              <h2 className="text-3xl font-bold text-gradient-legacy uppercase font-mono tracking-tighter mb-4 ml-6">The Problem</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 ml-6">
                  Traditional bots are <span className="text-white font-semibold">rigid constructs</span>. They rely on keywords, create friction, and fail when the human element takes control.
              </p>
              <div className="space-y-3 ml-6">
                  {['Scripted Dead-ends', 'Fragile Logic Loops', 'Lost Conversion'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-mono text-rose-400/60 uppercase tracking-widest">
                      <span className="w-1 h-1 bg-rose-500 rounded-full"></span> {item}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Panel 3: The Solution */}
          <div className="w-screen h-full flex items-center justify-center px-[10%] shrink-0">
            <div 
              className="glass-panel p-12 rounded-[2rem] max-w-[500px] hover:border-emerald-500/30 group relative"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(5px)`;
              }}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981] absolute left-6 top-1/2 -translate-y-1/2"></div>
              <h2 className="text-3xl font-bold text-gradient-neural uppercase font-mono tracking-tighter mb-4 ml-6">The Evoke Solution</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 ml-6">
                  Our agents utilize <span className="text-emerald-400 font-bold">Neural Intent Recognition</span>. They don't just "match"—they understand, solve, and represent with clinical brand precision.
              </p>
              <div className="grid grid-cols-2 gap-4 ml-6">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-[10px] font-mono text-emerald-400 uppercase tracking-widest text-center">CONTEXT_SYNC: 100%</div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-[10px] font-mono text-emerald-400 uppercase tracking-widest text-center">EMPATHY_ENGINE: ON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheGap;
