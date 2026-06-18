import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppLink, trackEvent } from '../utils/constants';

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        href={getWhatsAppLink("Hello Hotel Shivoy Palace Team, I would like to inquire about room availability.")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("WhatsApp_Float_Click")}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:opacity-90 transition-opacity flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out pl-0 group-hover:pl-2 font-bold text-[11px] uppercase tracking-wider">
          WhatsApp Us
        </span>
      </motion.a>
      
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
        href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
        onClick={() => trackEvent("Call_Float_Click")}
        className="bg-[#0a192f] text-[#c5a059] p-4 rounded-full shadow-xl hover:bg-white/5 transition-colors flex items-center justify-center group relative border border-[#c5a059]/50"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
};
