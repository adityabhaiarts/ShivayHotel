import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Users, ChevronDown, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink, trackEvent } from '../utils/constants';

export const BookingWidget = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>();
  const [guests, setGuests] = useState(1);
  const [showGuests, setShowGuests] = useState(false);

  const handleBooking = () => {
    trackEvent("Quick_Booking_Request");
    const checkIn = range?.from ? format(range.from, 'dd MMM yyyy') : 'Any Date';
    const checkOut = range?.to ? format(range.to, 'dd MMM yyyy') : 'Any Date';
    
    const message = `Hello Shivoy Palace,\nI would like to request room availability.\n\n📅 Check-in: *${checkIn}*\n📅 Check-out: *${checkOut}*\n👥 Guests: *${guests}*\n\nPlease let me know the available AC/Deluxe rooms and pricing. Thank you!`;
    
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <div className="bg-[#0a192f]/40 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 md:p-6 w-full max-w-4xl mx-auto relative z-20 border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-center">
        
        {/* Dates */}
        <div className="relative">
          <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Check-in / Check-out</label>
          <button 
            onClick={() => { setShowCalendar(!showCalendar); setShowGuests(false); }}
            className="w-full flex items-center justify-between bg-white/5 border border-white/10 p-3 md:p-4 rounded-lg text-left hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
          >
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-[#c5a059]" />
              <span className="text-slate-200 font-medium whitespace-nowrap overflow-hidden text-ellipsis text-xs md:text-sm">
                {range?.from ? format(range.from, 'dd MMM') : 'Select Dates'} 
                {range?.to ? ` - ${format(range.to, 'dd MMM')}` : ''}
              </span>
            </div>
          </button>

          {/* Calendar Dropdown */}
          <AnimatePresence>
            {showCalendar && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 md:left-auto md:right-0 mt-2 bg-[#020617] text-slate-200 rounded-xl shadow-2xl border border-white/10 z-50 p-4"
              >
                <DayPicker
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  disabled={{ before: new Date() }}
                  classNames={{
                    selected: "bg-[#c5a059] text-[#020617] hover:opacity-90",
                    range_middle: "bg-[#c5a059]/20 text-[#c5a059]"
                  }}
                />
                <div className="mt-4 flex justify-end gap-2">
                  <button onClick={() => setRange(undefined)} className="px-4 py-2 text-[10px] uppercase tracking-wider font-bold text-slate-500 hover:text-slate-300">Clear</button>
                  <button onClick={() => setShowCalendar(false)} className="px-4 py-2 text-[10px] uppercase tracking-wider font-extrabold bg-white/10 text-white rounded hover:bg-white/20">Done</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Guests */}
        <div className="relative">
          <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Guests</label>
          <button 
            onClick={() => { setShowGuests(!showGuests); setShowCalendar(false); }}
            className="w-full flex items-center justify-between bg-white/5 border border-white/10 p-3 md:p-4 rounded-lg text-left hover:bg-white/10 transition focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#c5a059]" />
              <span className="text-slate-200 font-medium text-xs md:text-sm">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </button>

          {/* Guests Dropdown */}
          <AnimatePresence>
            {showGuests && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-full mt-2 bg-[#020617] text-slate-200 rounded-xl shadow-2xl border border-white/10 z-50 p-4 flex items-center justify-between"
              >
                <span className="font-medium text-xs uppercase tracking-widest text-[#c5a059]">Total Guests</span>
                <div className="flex items-center gap-4 text-white">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-8 h-8 flex items-center justify-center rounded bg-white/5 border border-white/10 hover:bg-white/10">-</button>
                  <span className="w-4 text-center font-bold text-lg">{guests}</span>
                  <button onClick={() => setGuests(Math.min(10, guests + 1))} className="w-8 h-8 flex items-center justify-center rounded bg-white/5 border border-white/10 hover:bg-white/10">+</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Actions */}
        <div className="pt-6">
           <button 
             onClick={handleBooking}
             className="w-full bg-[#c5a059] hover:opacity-90 text-[#0a192f] font-extrabold uppercase tracking-wider text-[11px] py-3 md:py-4 px-6 rounded-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
           >
             <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
             Check Availability
           </button>
        </div>

      </div>
    </div>
  );
};
