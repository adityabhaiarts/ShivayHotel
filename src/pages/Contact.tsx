import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ADDRESS, DISPLAY_PHONE, EMAIL, trackEvent } from '../utils/constants';
import { motion } from 'motion/react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("Contact_Form_Submit", formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Hotel Shivoy Palace" 
        description="Get in touch with Hotel Shivoy Palace for bookings, inquiries, and corporate tie-ups."
      />

      <div className="w-full px-6 md:px-16 pt-16 pb-20 flex flex-col items-center">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-slate-300 font-light leading-relaxed">
            We are here to help you with your booking, event planning, and any inquiries you may have. Give us a call or send a message.
          </p>
        </motion.div>

        <div className="w-full max-w-[1200px]" style={{ perspective: 1200 }}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Contact Info */}
            <motion.div 
              className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-default"
              initial={{ opacity: 0, x: -30, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ rotateY: 2, rotateX: 2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div style={{ transform: "translateZ(10px)" }}>
                <h2 className="text-2xl font-medium mb-10 text-white">Direct Information</h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-[20px] bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all shadow-inner shrink-0 group-hover:scale-110">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm tracking-widest mb-2">Location</h4>
                      <p className="text-slate-300 font-light text-sm leading-relaxed max-w-xs">{ADDRESS}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-[20px] bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all shadow-inner shrink-0 group-hover:scale-110">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm tracking-widest mb-2">Phone</h4>
                      <p className="text-slate-300 font-light text-sm"><a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} className="hover:text-white transition">{DISPLAY_PHONE}</a></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-[20px] bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all shadow-inner shrink-0 group-hover:scale-110">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm tracking-widest mb-2">Email</h4>
                      <p className="text-slate-300 font-light text-sm">{EMAIL}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-[20px] bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all shadow-inner shrink-0 group-hover:scale-110">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm tracking-widest mb-2">Timings</h4>
                      <p className="text-slate-300 font-light text-sm">Check-in: 12:30 PM <br/>Check-out: 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="p-8 md:p-12 bg-white/5 backdrop-blur-3xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ rotateY: -2, rotateX: 2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div style={{ transform: "translateZ(10px)" }}>
              <h2 className="text-2xl font-medium text-white mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-black">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-white">Message Sent!</h3>
                  <p className="text-slate-400 font-light">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-medium text-white/60 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-white/5 text-white border border-white/10 rounded-2xl focus:ring-1 focus:ring-white focus:border-white outline-none transition text-sm backdrop-blur-md" 
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-white/60 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-5 py-4 bg-white/5 text-white border border-white/10 rounded-2xl focus:ring-1 focus:ring-white focus:border-white outline-none transition text-sm backdrop-blur-md" 
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-medium text-white/60 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-5 py-4 bg-white/5 text-white border border-white/10 rounded-2xl focus:ring-1 focus:ring-white focus:border-white outline-none transition text-sm backdrop-blur-md" 
                        placeholder="+91..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-medium text-white/60 mb-2">Message *</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-5 py-4 bg-white/5 text-white border border-white/10 rounded-2xl focus:ring-1 focus:ring-white focus:border-white outline-none transition resize-none text-sm backdrop-blur-md" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white hover:bg-slate-200 hover:scale-[1.02] text-black font-bold uppercase tracking-widest text-[11px] py-5 rounded-2xl transition-all shadow-lg active:scale-95 mt-4">
                    Send Message
                  </button>
                </form>
              )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
