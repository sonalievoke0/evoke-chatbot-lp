import React, { useState } from 'react';
import { Send, Phone, Mail, Building2, User, MessageSquare, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-32 bg-neutral-950 flex items-center justify-center p-6 md:p-12 font-sans selection:bg-cyan-500/30 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00d2ff]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#34d399]/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-[1200px] w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          {/* Header Content */}
          <div className="lg:col-span-2 text-white space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#00d2ff] tracking-[0.2em] uppercase backdrop-blur-md">
              <Sparkles className="w-3 h-3 mr-2" />
              Direct Neural Access
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Let's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#34d399]">Collaborate</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed font-medium">
              Have a visionary project in mind? We have the neural engine to bring it to life. Reach out and let's start building.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-5 text-neutral-300 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00d2ff]/50 transition-all">
                  <Mail className="w-5 h-5 text-[#00d2ff]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Email</span>
                  <span className="text-lg font-medium">hello@evoke.ai</span>
                </div>
              </div>
              <div className="flex items-center space-x-5 text-neutral-300 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#34d399]/50 transition-all">
                  <Phone className="w-5 h-5 text-[#34d399]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Call Us</span>
                  <span className="text-lg font-medium">+1 (234) 567-890</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="py-20 text-center animate-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-gradient-to-tr from-[#00d2ff] to-[#34d399] rounded-[2rem] flex items-center justify-center mx-auto mb-8 rotate-12 shadow-[0_20px_50px_rgba(0,210,255,0.3)]">
                    <Send className="text-black w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">Transmission Received</h2>
                  <p className="text-neutral-400 text-lg">Our team will reach out to you faster than a blink.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Full Name */}
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-neutral-400 ml-1 uppercase tracking-widest">Full Name *</label>
                      <div className="relative group">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-[#00d2ff] transition-colors" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff]/50 transition-all text-lg font-medium"
                          placeholder="Alex Rivera"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-neutral-400 ml-1 uppercase tracking-widest">Company *</label>
                      <div className="relative group">
                        <Building2 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-[#34d399] transition-colors" />
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#34d399]/50 focus:border-[#34d399]/50 transition-all text-lg font-medium"
                          placeholder="Future Inc."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Email */}
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-neutral-400 ml-1 uppercase tracking-widest">Email</label>
                      <div className="relative group">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-[#00d2ff] transition-colors" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff]/50 transition-all text-lg font-medium"
                          placeholder="alex@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-neutral-400 ml-1 uppercase tracking-widest">Phone</label>
                      <div className="relative group">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-[#34d399] transition-colors" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#34d399]/50 focus:border-[#34d399]/50 transition-all text-lg font-medium"
                          placeholder="+1 (000) 000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-neutral-400 ml-1 uppercase tracking-widest">Message</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-5 top-5 w-5 h-5 text-neutral-500 group-focus-within:text-[#00d2ff] transition-colors" />
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff]/50 transition-all resize-none text-lg font-medium"
                        placeholder="Tell us about your vision..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center py-5 px-8 rounded-2xl font-black text-black overflow-hidden transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d2ff] to-[#34d399] transition-transform group-hover:scale-105"></div>
                    <span className="relative flex items-center gap-3 text-lg uppercase tracking-widest">
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-black/30 border-t-black rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Launch Inquiry
                          <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
