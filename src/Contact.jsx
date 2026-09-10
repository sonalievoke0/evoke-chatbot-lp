"use client";

import React, { useState } from 'react';
import { Send, Phone, Mail, Building2, MapPin, User, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phoneNumber: '',
    location: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://damnart-ai-guladab.n8n-wsk.com/webhook/5f22b29b-2da3-4477-aeae-59199c618377', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      setSubmitted(true);
      
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_submission',
          form_name: 'ai_assistants_contact_form'
        });
      }
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phoneNumber: '',
        location: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('Unable to send your message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-10 sm:py-16 lg:py-24 bg-neutral-950 flex items-center justify-center px-4 sm:px-6 lg:px-10 font-sans selection:bg-cyan-500/30 overflow-hidden border-t border-neutral-900">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00d2ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#34d399]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1280px] w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Header & Contact Info (5 cols) */}
          <div className="lg:col-span-5 text-white space-y-3 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-xs font-bold text-[#00d2ff] tracking-[0.2em] uppercase backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              Direct Neural Access
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399]">
                Collaborate
              </span>
            </h2>
            
            <p className="text-neutral-400 text-xs sm:text-base leading-relaxed font-normal max-w-md mx-auto lg:mx-0">
              Have a visionary project in mind? We have the neural engine to bring it to life. Reach out and let&apos;s start building.
            </p>
            
            {/* Desktop Contact Cards */}
            <div className="hidden lg:block space-y-4 pt-2">
              <a href="mailto:help@evokeaisolutions.com" className="flex items-center space-x-4 text-neutral-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00d2ff]/50 transition-all flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#00d2ff]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Email</span>
                  <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-[#00d2ff] transition-colors">help@evokeaisolutions.com</span>
                </div>
              </a>
              <a href="tel:7986175240" className="flex items-center space-x-4 text-neutral-300 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#34d399]/50 transition-all flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#34d399]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Call Us</span>
                  <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-[#34d399] transition-colors">7986175240</span>
                </div>
              </a>
            </div>

            {/* Mobile Contact Quick Pills */}
            <div className="flex lg:hidden items-center justify-center gap-2 pt-1 flex-wrap">
              <a 
                href="mailto:help@evokeaisolutions.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00d2ff]/50 text-neutral-300 hover:text-white text-[11px] font-medium transition-all"
              >
                <Mail className="w-3 h-3 text-[#00d2ff]" />
                <span>help@evokeaisolutions.com</span>
              </a>
              <a 
                href="tel:7986175240"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#34d399]/50 text-neutral-300 hover:text-white text-[11px] font-medium transition-all"
              >
                <Phone className="w-3 h-3 text-[#34d399]" />
                <span>7986175240</span>
              </a>
            </div>
          </div>

          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 p-4 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="py-8 sm:py-12 text-center animate-in zoom-in duration-500 space-y-3 sm:space-y-4">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tr from-[#00d2ff] to-[#34d399] rounded-2xl flex items-center justify-center mx-auto rotate-12 shadow-[0_15px_35px_rgba(0,210,255,0.3)]">
                    <Send className="text-black w-5 sm:w-7 h-5 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Thank You!</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm">We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                    {/* Full Name */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="fullName" className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Full Name *</label>
                      <div className="relative group">
                        <User className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-500 group-focus-within:text-[#00d2ff] transition-colors" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-2 sm:py-2.5 pl-8 sm:pl-10 pr-2 sm:pr-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff]/50 transition-all text-xs sm:text-sm font-medium"
                          placeholder="Alex Rivera"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="company" className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Company</label>
                      <div className="relative group">
                        <Building2 className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-500 group-focus-within:text-[#34d399] transition-colors" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-2 sm:py-2.5 pl-8 sm:pl-10 pr-2 sm:pr-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#34d399]/50 focus:border-[#34d399]/50 transition-all text-xs sm:text-sm font-medium"
                          placeholder="Future Inc."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                    {/* Email */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="email" className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Email</label>
                      <div className="relative group">
                        <Mail className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-500 group-focus-within:text-[#00d2ff] transition-colors" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-2 sm:py-2.5 pl-8 sm:pl-10 pr-2 sm:pr-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff]/50 transition-all text-xs sm:text-sm font-medium"
                          placeholder="alex@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="phoneNumber" className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Phone</label>
                      <div className="relative group">
                        <Phone className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-500 group-focus-within:text-[#34d399] transition-colors" />
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-2 sm:py-2.5 pl-8 sm:pl-10 pr-2 sm:pr-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#34d399]/50 focus:border-[#34d399]/50 transition-all text-xs sm:text-sm font-medium"
                          placeholder="+1 000 000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location & Message in compact responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-2.5 sm:gap-4">
                    {/* Location */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="location" className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Location</label>
                      <div className="relative group">
                        <MapPin className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-500 group-focus-within:text-[#34d399] transition-colors" />
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-2 sm:py-2.5 pl-8 sm:pl-10 pr-2 sm:pr-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#34d399]/50 focus:border-[#34d399]/50 transition-all text-xs sm:text-sm font-medium"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label htmlFor="message" className="text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Message</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-2.5 sm:left-3.5 top-2.5 sm:top-3 w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-500 group-focus-within:text-[#00d2ff] transition-colors" />
                        <textarea
                          id="message"
                          name="message"
                          rows="2"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-xl py-2 sm:py-2.5 pl-8 sm:pl-10 pr-2 sm:pr-4 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff]/50 transition-all resize-none text-xs sm:text-sm font-medium"
                          placeholder="Tell us about your vision..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center py-3 sm:py-3.5 px-5 rounded-xl font-extrabold text-black overflow-hidden transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-cyan-500/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d2ff] via-[#00b4d8] to-[#34d399] transition-transform group-hover:scale-105"></div>
                    <span className="relative flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-extrabold">
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Get Free Consultation
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
