import { Link } from 'react-router-dom';
import { HOTEL_NAME, ADDRESS, DISPLAY_PHONE } from '../utils/constants';

export const Footer = () => {
  return (
    <footer className="w-full text-slate-400 pt-16 pb-8 border-t border-white/10 shrink-0">
      <div className="container mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-white text-xl font-bold mb-4 font-sans tracking-tight">{HOTEL_NAME}</h3>
          <p className="text-sm leading-relaxed mb-6 text-slate-400 font-light">
            Experience premium comfort, elegant dining, and exceptional service in the heart of Basti. 
            Perfect for family stays, business travel, and dining out.
          </p>
          <div className="flex gap-4">
             {/* Social Icons Placeholder */}
             <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/20 transition cursor-pointer">
                f
             </div>
             <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/20 transition cursor-pointer">
                in
             </div>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm font-light">
            <li><Link to="/" className="hover:text-white transition-colors">Homepage</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/rooms" className="hover:text-white transition-colors">Our Rooms</Link></li>
            <li><Link to="/restaurant" className="hover:text-white transition-colors">V2 Restaurant</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-sm text-slate-400 font-light">
            <li className="flex items-start gap-3">
              <span className="text-white opacity-70 mt-1">📍</span>
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white opacity-70">📞</span>
              <span>{DISPLAY_PHONE}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white opacity-70">⏳</span>
              <span>Check-in: 12:30 PM <br/>Check-out: 12:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-4">Bookings</h3>
          <p className="text-sm text-slate-400 font-light mb-6">
            For fast and easy bookings, reach out to us directly or request availability online.
          </p>
          <Link to="/rooms" className="inline-block bg-white text-black font-bold uppercase tracking-wider text-[11px] px-6 py-3 rounded-full shadow-lg hover:bg-slate-200 transition-colors">
            View Rooms
          </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-500">
        <p>&copy; {new Date().getFullYear()} {HOTEL_NAME}. All rights reserved.</p>
        <p className="font-medium text-slate-500"> Demo website created by <span className="text-white font-bold opacity-80">Webrion</span></p>
      </div>
    </footer>
  );
};
