import { NavLink } from 'react-router-dom';
import { Menu, X, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HOTEL_NAME, trackEvent, DISPLAY_PHONE, getWhatsAppLink } from '../utils/constants';

export const Navbar = ({ logoPath }: { logoPath?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Homepage', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/restaurant' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="w-full flex justify-between items-center px-4 md:px-10 py-5 z-40 shrink-0 bg-transparent">
        <NavLink to="/" className="flex items-center gap-3">
          {logoPath ? (
             <motion.img 
               whileHover={{ scale: 1.05, rotateZ: 5 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               src={logoPath} alt={`${HOTEL_NAME} Logo`} className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
             />
          ) : (
            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl backdrop-blur-md">
              SP
            </div>
          )}
          <span className="font-medium text-lg md:text-xl tracking-tight text-white hidden sm:block drop-shadow-md">Shivoy Palace</span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-slate-200 transition-colors hover:text-white font-medium group px-2 py-1 ${
                  isActive ? 'text-white' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {/* Glassmorphic little pill indicator instead of underline */}
                  <span className={`absolute -bottom-2 left-1/2 w-4 h-0.5 rounded-full -translate-x-1/2 transition-all ${isActive ? 'bg-white opacity-100' : 'bg-white/50 opacity-0 group-hover:opacity-100'}`}></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2 mt-1 text-xs font-medium text-white shadow-inner"
          >
            <MapPin className="w-3.5 h-3.5 opacity-70" />
            Basti, UP
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/booking"
              onClick={() => trackEvent('Book_Now_Header_Click')}
              className="bg-white/20 backdrop-blur-xl text-white px-5 md:px-6 py-2.5 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] outline-none ring-0"
            >
              Book Now
            </NavLink>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-white bg-black/20 backdrop-blur-md p-2.5 rounded-full outline-none" 
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </header>

      {/* Sidebar Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%', borderTopLeftRadius: '100%' }}
              animate={{ x: 0, borderTopLeftRadius: '0%' }}
              exit={{ x: '100%', borderTopLeftRadius: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[360px] max-w-[85vw] z-50 bg-black/40 backdrop-blur-3xl flex flex-col p-6 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] outline-none"
            >
              <div className="flex justify-between items-center mb-10 pt-2">
                 <span className="font-medium text-xl text-white tracking-widest uppercase">Menu</span>
                 <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2.5 bg-white/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              <div className="flex flex-col gap-2 mt-4 text-2xl">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block py-4 px-4 rounded-2xl transition-all duration-300 font-light ${
                          isActive ? 'bg-white/10 text-white font-medium translate-x-2' : 'text-slate-300 hover:text-white hover:bg-white/5 hover:translate-x-2'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-auto pt-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex gap-4 mb-2">
                  <a href={getWhatsAppLink("Hello Hotel Shivoy Palace Team, I would like to inquire about room availability.")} target="_blank" rel="noreferrer" onClick={() => { setIsOpen(false); trackEvent('WhatsApp_MobileMenu_Click'); }} className="flex-1 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-[#25D366]/30 transition-colors">
                    <MessageCircle className="w-5 h-5" /> <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                  <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} onClick={() => { setIsOpen(false); trackEvent('Call_MobileMenu_Click'); }} className="flex-1 bg-white/10 text-white border border-white/20 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" /> <span className="text-sm font-medium">Call Us</span>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-400 mb-2 bg-white/5 rounded-2xl py-3">
                  <MapPin className="w-4 h-4 opacity-70" />
                  <span className="text-sm font-light">Basti, Uttar Pradesh</span>
                </div>
                <NavLink
                  to="/booking"
                  onClick={() => { setIsOpen(false); trackEvent('Book_Now_Header_Mobile_Click'); }}
                  className="w-full bg-white text-center hover:bg-slate-200 text-black font-medium px-6 py-4 rounded-2xl transition-all shadow-lg text-lg"
                >
                  Book Your Stay
                </NavLink>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
