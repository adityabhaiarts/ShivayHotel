import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { CalendarIcon, Users, CheckCircle2, ChevronDown, BedDouble } from 'lucide-react';
import { SEO } from '../components/SEO';
import heroImg from '../assets/images/hotel_exterior_1781791246185.jpg';
import { trackEvent } from '../utils/constants';

const DISPLAY_PHONE = "07317264933";

export const BookingPage = () => {
  const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>();
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [showRooms, setShowRooms] = useState(false);
  
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('Deluxe Room');
  
  const roomTypes = ['AC Room', 'Deluxe Room', 'Family Stay'];

  const handleBooking = () => {
    trackEvent('Book_Now_Submit', { roomType, guests, checkIn: range?.from, checkOut: range?.to });
    const text = `Hi Hotel Shivoy Palace, I'd like to book a stay.\n\nRoom Type: ${roomType}\nCheck-in: ${range?.from ? format(range.from, 'dd MMM yyyy') : 'Not selected'}\nCheck-out: ${range?.to ? format(range.to, 'dd MMM yyyy') : 'Not selected'}\nGuests: ${guests}\n\nPlease let me know availability and pricing.`;
    const url = `https://wa.me/91${DISPLAY_PHONE.replace(/\s+/g, '')}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO title="Book a Stay | Hotel Shivoy Palace" />
      
      <div className="w-full px-6 md:px-16 pt-16 pb-20 flex flex-col items-center">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4 block">Reservations</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Book Your Stay
          </h1>
          <p className="text-slate-300 font-light leading-relaxed">
            Experience Luxury, Comfort, and Culinary Excellence. Plan your perfect getaway by reserving your room today.
          </p>
        </motion.div>

        <motion.div 
          className="w-full max-w-[800px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-black/40 backdrop-blur-3xl p-8 md:p-12 rounded-[32px] shadow-2xl border border-white/10 relative z-20">
            
            <div className="text-center mb-10">
              <h2 className="text-2xl font-medium text-white mb-2">Reserve Your Experience</h2>
              <p className="text-sm font-light text-slate-400">Select your dates and room preferences, and we will arrange the perfect stay for you.</p>
            </div>

            <div className="space-y-8">
              
              {/* Room Type */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-medium text-white/60 mb-3">Room Type</label>
                <button 
                  onClick={() => { setShowRooms(!showRooms); setShowCalendar(false); setShowGuests(false); }}
                  className="w-full flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl text-left hover:bg-white/10 transition focus:outline-none focus:border-white backdrop-blur-md"
                >
                  <div className="flex items-center gap-4">
                    <BedDouble className="w-5 h-5 text-white" />
                    <span className="text-white font-medium text-sm md:text-base">{roomType}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </button>

                <AnimatePresence>
                  {showRooms && (
                    <motion.div 
                      key="rooms"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-full mt-2 bg-black/80 backdrop-blur-2xl text-slate-200 rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden"
                    >
                      {roomTypes.map(type => (
                        <button
                          key={type}
                          onClick={() => { setRoomType(type); setShowRooms(false); }}
                          className={`w-full text-left p-5 hover:bg-white/10 transition border-b border-white/5 last:border-0 ${roomType === type ? 'text-white font-bold bg-white/10' : ''}`}
                        >
                          {type}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Check-in / Check-out */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-medium text-white/60 mb-3">Check-in / Check-out Dates</label>
                <button 
                  onClick={() => { setShowCalendar(!showCalendar); setShowGuests(false); setShowRooms(false); }}
                  className="w-full flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl text-left hover:bg-white/10 transition focus:outline-none focus:border-white backdrop-blur-md"
                >
                  <div className="flex items-center gap-4">
                    <CalendarIcon className="w-5 h-5 text-white" />
                    <span className="text-white font-medium text-sm md:text-base">
                      {range?.from ? format(range.from, 'dd MMM yyyy') : 'Select Dates'} 
                      {range?.to ? ` - ${format(range.to, 'dd MMM yyyy')}` : ''}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </button>

                <AnimatePresence>
                  {showCalendar && (
                    <motion.div 
                      key="calendar"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-full mt-2 bg-black/80 backdrop-blur-3xl text-slate-200 rounded-2xl shadow-2xl border border-white/10 z-50 p-4 md:p-6 flex flex-col items-center overflow-x-auto"
                    >
                      <DayPicker
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        disabled={{ before: new Date() }}
                        classNames={{
                          root: "text-white",
                          selected: "bg-white text-black hover:opacity-90 font-bold",
                          range_middle: "bg-white/20 text-white"
                        }}
                      />
                      <div className="mt-6 flex justify-end gap-4 w-full">
                        <button onClick={() => setRange(undefined)} className="px-6 py-3 text-xs uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors">Clear Dates</button>
                        <button onClick={() => setShowCalendar(false)} className="px-8 py-3 text-xs uppercase tracking-widest font-bold bg-white text-black rounded-xl hover:bg-slate-200 transition-all">Done</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-medium text-white/60 mb-3">Guests</label>
                <button 
                  onClick={() => { setShowGuests(!showGuests); setShowCalendar(false); setShowRooms(false); }}
                  className="w-full flex items-center justify-between bg-white/5 border border-white/10 p-5 rounded-2xl text-left hover:bg-white/10 transition focus:outline-none focus:border-white backdrop-blur-md"
                >
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-white" />
                    <span className="text-white font-medium text-sm md:text-base">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </button>

                <AnimatePresence>
                  {showGuests && (
                    <motion.div 
                      key="guests"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-full mt-2 bg-black/80 backdrop-blur-2xl text-slate-200 rounded-2xl shadow-2xl border border-white/10 z-50 p-6 flex flex-col items-center justify-between"
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="font-bold text-xs uppercase tracking-widest text-slate-400">Total Guests</span>
                        <div className="flex items-center gap-6 text-white">
                          <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors text-lg">-</button>
                          <span className="w-6 text-center font-bold text-xl">{guests}</span>
                          <button onClick={() => setGuests(Math.min(10, guests + 1))} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors text-lg">+</button>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end w-full">
                        <button onClick={() => setShowGuests(false)} className="px-8 py-3 w-full text-xs uppercase tracking-widest font-bold bg-white text-black rounded-xl hover:bg-slate-200 transition-all">Done</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <div className="pt-8 mt-8 border-t border-white/10">
                 <button 
                   onClick={handleBooking}
                   className="w-full bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-widest text-sm py-5 px-6 rounded-2xl flex items-center justify-center gap-3 group transition-all"
                 >
                   <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                   Book Now via WhatsApp
                 </button>
                 <p className="text-center text-white/50 text-xs mt-4 font-light">You will be redirected to WhatsApp to confirm your booking.</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </>
  );
};
