import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import hotelLogo from '../assets/images/hotel_logo_1781791193233.jpg';
import heroBg from '../assets/images/hotel_exterior_1781791246185.jpg';
import { motion, AnimatePresence } from 'motion/react';

export const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen w-full relative font-sans selection:bg-white/30 selection:text-white text-slate-200 overflow-x-hidden">
      {/* Fixed Fullscreen Background Image */}
      <div className="fixed inset-0 z-0 bg-[#020617]">
        <img src={heroBg} className="w-full h-full object-cover brightness-[0.6] scale-105" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/80 mix-blend-overlay"></div>
      </div>

      {/* Main Glass Panel Wrapping the App */}
      <div className="relative z-10 w-full min-h-screen p-0 md:p-4 lg:p-6 flex flex-col">
        <div className="flex-grow flex flex-col bg-white/[0.02] md:bg-white/[0.04] backdrop-blur-2xl md:rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500">
          <Navbar logoPath={hotelLogo} />
          <AnimatePresence mode="wait">
            <motion.main 
              key={location.pathname}
              className="flex-grow flex flex-col"
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </div>
  );
};

