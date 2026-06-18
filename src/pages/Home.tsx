import { SEO } from '../components/SEO';
import { Star, MapPin, Wifi, Coffee, Wind, BedDouble, CalendarIcon, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import boutiqueRoomImg from '../assets/images/boutique_room_1781793126177.jpg';
import deluxeWorkspaceImg from '../assets/images/deluxe_workspace_1781793143463.jpg';
import familySuiteImg from '../assets/images/family_suite_1781793156148.jpg';
import standardRoomImg from '../assets/images/standard_room_1781793171113.jpg';

export const Home = () => {
  return (
    <>
      <SEO />
      
      <div className="w-full px-6 md:px-16 pt-16 md:pt-24 pb-20 flex flex-col items-center">
        
        {/* Main Hero Header */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-[64px] font-medium text-white text-center leading-tight mb-6 max-w-4xl tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Start Your Journey to Your <br className="hidden md:block"/> Dream Destination Here.
        </motion.h1>
        
        <motion.p 
          className="text-slate-300 text-sm md:text-base text-center max-w-2xl mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Start your journey to the destination you've always dreamed of. Discover stunning locations, plan with ease, and create memories that last a lifetime. Whether it's a relaxing escape or an exciting adventure, your perfect getaway begins right here.
        </motion.p>

        {/* Floating Pill segmented control */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-1 md:gap-2 bg-black/20 backdrop-blur-xl p-1.5 md:p-2 rounded-[24px] md:rounded-full border border-white/10 mb-16 md:mb-20 shadow-2xl max-w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="flex items-center justify-center gap-1.5 md:gap-2 bg-white/20 text-white px-4 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium shadow-sm transition-all hover:bg-white/30 truncate">
            <BedDouble className="w-3.5 h-3.5 md:w-4 md:h-4" /> Hotels
          </button>
          <Link to="/restaurant" className="flex items-center justify-center gap-1.5 md:gap-2 text-slate-300 hover:text-white px-4 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium transition-colors truncate">
            <Coffee className="w-3.5 h-3.5 md:w-4 md:h-4" /> Dining
          </Link>
          <Link to="/gallery" className="flex items-center justify-center gap-1.5 md:gap-2 text-slate-300 hover:text-white px-4 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium transition-colors truncate">
            <CalendarIcon className="w-3.5 h-3.5 md:w-4 md:h-4" /> Events
          </Link>
        </motion.div>

        {/* Section Header */}
        <div className="w-full max-w-[1200px] text-left mb-8 flex flex-wrap items-center gap-3 md:gap-4">
          <h2 className="text-xl md:text-2xl font-medium text-white">Best hotels in</h2>
          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-xs md:text-sm text-white font-medium whitespace-nowrap shrink-0">
            <MapPin className="w-4 h-4 opacity-70 shrink-0" />
            Basti, UP
          </div>
        </div>

        {/* Hotel Cards Grid */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: 1200 }}>
          
          {[
            {
              name: "Shivoy Palace Premium",
              desc: "A boutique hotel offering vegetarian breakfast and a central location in Basti. It's praised for its excellent staff and thoughtful extras. Enjoy the panoramic city views from your private balcony.",
              price: "1,500",
              beds: "4 Beds",
              extras: ["Central", "Premium"],
              img: boutiqueRoomImg
            },
            {
              name: "Shivoy Palace Deluxe",
              desc: "Located in the heart of Basti, this hotel is known for its helpful staff, great location, and additional amenities like fine dining. Features a modern workstation setup.",
              price: "1,200",
              beds: "2 Beds",
              extras: ["Central", "Room"],
              img: deluxeWorkspaceImg
            },
            {
              name: "V2 Restaurant & Stay",
              desc: "Situated ideally, it features spacious rooms and is ideal for families and groups. Highly rated for comfort and service. Room service is available 24/7.",
              price: "2,000",
              beds: "3 Beds",
              extras: ["Restaurant", "Events"],
              img: standardRoomImg
            },
            {
              name: "Shivoy Family Suite",
              desc: "A contemporary hotel with public spaces, located near recommended transit routes for optimum value. Includes a connected living area.",
              price: "2,500",
              beds: "1 Bed",
              extras: ["Family", "Suite"],
              img: familySuiteImg
            }
          ].map((hotel, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 4, rotateY: -4, zIndex: 10 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-4 flex flex-col group shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
               {/* Shine Effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Image Area */}
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-5 shadow-inner">
                <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                
                {/* Overlay Graient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                {/* Ratings Pill */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-xl text-white rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium shadow-md">
                  <Star className="w-3.5 h-3.5 fill-white" /> 4.7/5
                </div>

                {/* Heart Pill */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl text-white rounded-full w-9 h-9 flex items-center justify-center p-0 hover:bg-white hover:text-black transition-colors shadow-md">
                  <Heart className="w-4 h-4" />
                </div>
              </div>

              {/* Text Area */}
              <div className="px-2 pb-2 h-full flex flex-col relative z-10" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-[17px] font-medium text-white mb-2">{hotel.name}</h3>
                <p className="text-[11px] text-slate-300 font-light mb-5 leading-relaxed line-clamp-3">{hotel.desc}</p>
                
                {/* Amenities */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  <span className="flex items-center gap-1 text-[10px] bg-black/20 rounded-full px-2.5 py-1 text-slate-300 font-light"><Wifi className="w-3 h-3" /> Wi-Fi</span>
                  <span className="flex items-center gap-1 text-[10px] bg-black/20 rounded-full px-2.5 py-1 text-slate-300 font-light"><Wind className="w-3 h-3" /> AC</span>
                  <span className="flex items-center gap-1 text-[10px] bg-black/20 rounded-full px-2.5 py-1 text-slate-300 font-light"><BedDouble className="w-3 h-3" /> {hotel.beds}</span>
                </div>

                {/* Price Area */}
                <div className="flex items-end gap-1 mt-auto group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-3xl font-medium tracking-tight text-white">₹{hotel.price}</span>
                  <span className="text-xs text-white/50 mb-1.5 font-light">/night</span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Rich SEO Content Section: Heritage, Attractions, Room Specs */}
        <motion.div 
          className="w-full max-w-[1200px] mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Heritage & Attractions */}
          <div className="flex flex-col gap-8">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10" style={{ transformStyle: "preserve-3d" }}>
               <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">The Heritage of Basti & Local Attractions</h3>
               <div className="prose prose-invert prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-300">
                  <p>
                    Nestled in the historical heartland of Uttar Pradesh, Basti is a city that beautifully intertwines ancient heritage with modern vibrancy. Known for its historical significance dating back to the times of the Ramayana, Basti offers a serene escape for travelers seeking cultural depth and spiritual resonance. Hotel Shivoy Palace is perfectly situated to serve as your premium basecamp for exploring these local treasures.
                  </p>
                  <p>
                    When you stay with us, you are just a short drive away from notable landmarks such as the <strong>Kateshwar Nath Temple</strong>, a revered site of worship that draws pilgrims year-round. Nature enthusiasts will appreciate the proximity to lush local parks and the tranquil banks of the Kuwana River, offering picturesque sunsets and peaceful morning walks.
                  </p>
                  <p>
                    For the modern traveler, Basti also offers vibrant local markets where you can experience the authentic flavors, textiles, and craftsmanship of Eastern Uttar Pradesh. Whether you're here for a spiritual journey, a heritage tour, or simply a restful stopover, the local attractions in Basti provide a rich, fulfilling experience that perfectly complements the luxury of your stay at Shivoy Palace.
                  </p>
               </div>
            </div>
          </div>

          {/* Room Specs & Luxury Amenities */}
          <div className="flex flex-col gap-8">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10" style={{ transformStyle: "preserve-3d" }}>
               <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">Comprehensive Room Specifications</h3>
               <div className="prose prose-invert prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-300">
                  <p>
                    At Hotel Shivoy Palace and V2 Restaurant, we believe that true luxury lies in the details. Every room and suite is meticulously designed to offer an oasis of calm, combining contemporary aesthetics with ultimate comfort. Our specifications are crafted to meet the highest standards of international hospitality.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-6 p-0 list-none text-slate-300 font-light text-sm">
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">Plush King/Queen size beds with orthopedic mattresses</li>
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">High-speed, complimentary Wi-Fi across all areas</li>
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">Individually controlled split air-conditioning</li>
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">43-inch smart LED TVs with satellite channels</li>
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">En-suite bathrooms with premium hot/cold rainfall showers</li>
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">In-room electronic safes for secure storage</li>
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">Ergonomic dedicated workstations for business travelers</li>
                    <li className="flex items-start gap-3 relative before:content-[''] before:w-1.5 before:h-1.5 before:mt-1.5 before:bg-white before:rounded-full before:shrink-0 leading-relaxed">Tea and coffee making facilities with daily replenishment</li>
                  </ul>
                  <p className="mt-6">
                    Beyond the physical amenities, our dedicated housekeeping and 24/7 room service teams ensure that your personal environment remains pristine. Experience sleep quality that rejuvenates and a living space that inspires, all complemented by our signature V2 Restaurant dining experiences available right at your doorstep.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Partner Logos */}
        <div className="w-full flex justify-center items-center gap-8 md:gap-16 mt-24 mb-4 opacity-70 grayscale flex-wrap">
          <span className="text-xl md:text-2xl font-bold font-serif text-white">Booking.com</span>
          <span className="text-xl md:text-2xl font-bold flex items-center gap-2 text-white"><span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-xs">a</span> airbnb</span>
          <span className="text-xl md:text-2xl font-bold text-white">Expedia</span>
          <span className="text-xl md:text-2xl font-bold flex items-center gap-2 text-white">Tripadvisor</span>
        </div>

      </div>
    </>
  );
};
