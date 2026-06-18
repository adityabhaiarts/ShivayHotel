import { SEO } from '../components/SEO';
import boutiqueRoomImg from '../assets/images/boutique_room_1781793126177.jpg';
import deluxeWorkspaceImg from '../assets/images/deluxe_workspace_1781793143463.jpg';
import familySuiteImg from '../assets/images/family_suite_1781793156148.jpg';
import standardRoomImg from '../assets/images/standard_room_1781793171113.jpg';
import { Wind, Wifi, Tv, Coffee, Search } from 'lucide-react';
import { getWhatsAppLink } from '../utils/constants';
import { motion } from 'motion/react';

export const Rooms = () => {
  const handleRoomInquiry = (roomName: string) => {
    const msg = `Hello Shivoy Palace,\nI am interested in booking the *${roomName}*.\nCould you please share the availability and exact pricing?`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const rooms = [
    {
      id: "deluxe-ac",
      name: "Deluxe AC Room",
      description: "Experience premium comfort in our spacious Deluxe AC rooms. Featuring elegant decor, a plush king-size bed, and a dedicated sitting area. Perfect for weary travelers and business executives looking for an elevated experience. The Deluxe Room is designed to provide optimal rest with soundproofing, blackout curtains, and luxury linens that guarantee an uninterrupted night's sleep.",
      price: "1,200",
      amenities: ["Air Conditioning", "Free High-Speed Wi-Fi", "Flat-screen TV", "Room Service", "Attached Premium Bath", "Wardrobe", "Mini-fridge", "Workstation"],
      image: deluxeWorkspaceImg
    },
    {
      id: "standard-ac",
      name: "Standard AC Room",
      description: "Perfect for business travelers and couples. Our standard rooms offer all the essential modern comforts in a cozy, pristine environment. Designed efficiently without compromising on quality, each room features climate control, a comfortable queen-size bed, and a modern en-suite bathroom with 24-hour hot water availability.",
      price: "900",
      amenities: ["Air Conditioning", "Free Wi-Fi", "Flat-screen TV", "Room Service", "Attached Bath", "Daily Housekeeping"],
      image: standardRoomImg
    },
    {
      id: "family-suite",
      name: "Family Suite",
      description: "Traveling with family? Our Family Suite provides extra space and additional bedding to accommodate everyone comfortably without feeling cramped. It includes a semi-divided living area allowing parents and children to have their own space. Featuring dual flat-screen TVs, expansive wardrobe space, and a large bath area, it is the perfect home away from home.",
      price: "2,000",
      amenities: ["Air Conditioning", "Free Wi-Fi", "Multiple Beds", "Flat-screen TV", "Room Service", "Large Bath", "Living Area"],
      image: familySuiteImg
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the check-in and check-out times at Hotel Shivoy Palace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check-in at Hotel Shivoy Palace is from 12:30 PM, and check-out is until 12:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Are the rooms air-conditioned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer fully air-conditioned Deluxe and Standard rooms for your comfort."
        }
      },
      {
        "@type": "Question",
        "name": "Is parking available at the hotel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, secure parking is available for guests staying at the hotel or visiting the V2 Restaurant."
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Rooms & Suites | Hotel Shivoy Palace in Basti" 
        description="Explore our range of comfortable, fully AC rooms and Family Suites. Enjoy premium amenities, free Wi-Fi, and room service."
        schema={faqSchema}
      />
      
      <div className="w-full px-6 md:px-16 pt-16 pb-20 flex flex-col items-center">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4 block">Accommodation</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Our Rooms & Suites
          </h1>
          <p className="text-slate-300 font-light leading-relaxed">
            Unwind in modern comfort. Choose the perfect space for your stay in Basti, featuring elegant design and premium amenities.
          </p>
        </motion.div>

        {/* Booking Widget Wrapper - Glassmorphic */}
        <motion.div 
          className="w-full max-w-[1000px] mb-20 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-30">
             {/* Simple Glass Search Instead of full widget for aesthetics, or keep widget */}
             <div className="flex flex-col md:flex-row items-center gap-4">
                <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="flex-1 w-full bg-white/5 backdrop-blur-md rounded-[24px] px-6 py-4 cursor-pointer"
                >
                   <div className="text-xs text-white/50 mb-1">Check-in / Check-out</div>
                   <div className="text-white font-medium text-lg">Select Dates</div>
                </motion.div>
                <motion.div 
                   whileHover={{ scale: 1.02 }}
                   className="flex-1 w-full bg-white/5 backdrop-blur-md rounded-[24px] px-6 py-4 cursor-pointer"
                >
                   <div className="text-xs text-white/50 mb-1">Guests & Rooms</div>
                   <div className="text-white font-medium text-lg">2 Adults, 1 Room</div>
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(getWhatsAppLink("Hello, I want to book a room."), '_blank')}
                  className="w-full md:w-auto bg-white/10 backdrop-blur-xl text-white px-10 py-6 md:py-7 rounded-[24px] font-medium text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                >
                  <Search className="w-5 h-5" /> Explore
                </motion.button>
             </div>
          </div>
        </motion.div>

        {/* Room Listings */}
        <div className="w-full max-w-[1200px] flex flex-col gap-12" style={{ perspective: 1000 }}>
          {rooms.map((room, idx) => (
            <motion.div 
              key={room.id} 
              className="bg-white/5 backdrop-blur-3xl rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group cursor-pointer"
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -8, scale: 1.02, rotateX: 3, rotateY: -3, zIndex: 10, boxShadow: "0 40px 80px rgba(0,0,0,0.8)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: idx * 0.1 }}
              style={{ transformStyle: "preserve-3d" }}
            >
               {/* Ambient Shine on Hover */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

               <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto overflow-hidden shadow-inner">
                 <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
               </div>
               
               <div className="p-8 md:w-7/12 flex flex-col justify-center relative z-10" style={{ transform: "translateZ(25px)" }}>
                 <div className="flex justify-between items-start mb-4">
                   <h2 className="text-2xl md:text-3xl font-medium text-white">{room.name}</h2>
                   <div className="text-right">
                     <div className="text-sm text-white/60 line-through">₹{(parseInt(room.price.replace(',', '')) * 1.5).toLocaleString()}</div>
                     <div className="text-2xl font-bold text-white">₹{room.price}</div>
                     <div className="text-[10px] uppercase tracking-widest text-white/60">Per Night</div>
                   </div>
                 </div>
                 
                 <p className="text-slate-400 mb-8 font-light leading-relaxed max-w-lg">{room.description}</p>
                 
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 mb-10">
                   {room.amenities.map((amenity, i) => (
                     <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                       <span className="w-1.5 h-1.5 rounded-full bg-white/40 block shrink-0"></span>
                       <span>{amenity}</span>
                     </div>
                   ))}
                 </div>

                 <div className="mt-auto">
                   <button 
                     onClick={() => handleRoomInquiry(room.name)}
                     className="bg-white/10 hover:bg-white text-white hover:text-black font-medium text-sm py-4 px-10 rounded-full transition-colors border border-white/20 hover:border-white shadow-lg"
                   >
                     Request Booking
                   </button>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Rich SEO Content Section for Rooms */}
        <motion.div 
          className="w-full max-w-[1200px] mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10" style={{ transformStyle: "preserve-3d" }}>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6">Uncompromising Comfort Meets Premium Facilities</h3>
            <div className="prose prose-invert prose-slate max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-slate-300">
               <p className="mb-4">
                 When planning your stay in Basti, choosing the right accommodation is pivotal to a successful trip. Hotel Shivoy Palace stands out by offering fully air-conditioned rooms that cater to various budgets and group sizes without ever compromising on fundamental comforts. Our rooms are designed not just for sleeping, but as private sanctuaries where you can decompress, work, or simply enjoy moments of quiet reflection.
               </p>
               <p className="mb-4">
                 Our commitment to cleanliness is unwavering. We employ intensive daily housekeeping protocols, ensuring that your room is clinically clean upon arrival and maintained perfectly throughout your stay. We utilize high-quality linens, hypoallergenic pillows, and ergonomic mattresses to support your physical well-being.
               </p>
               <p>
                 Furthermore, our seamless integration with the V2 Restaurant means that superior culinary delights are always just a phone call away. Whether you are craving an authentic Indian thali late into the evening or require an early morning breakfast before catching your onward transit, our comprehensive room service operates round the clock. High-speed, secure Wi-Fi is uniformly available, allowing business travelers to conduct video conferences seamlessly, and families to stream their favorite entertainment uninterrupted. Let us elevate your Basti visitation from a simple trip to an experience worth repeating.
               </p>
            </div>
          </div>
        </motion.div>

        {/* SEO FAQ Section inside Glass */}
        <motion.div 
          className="w-full max-w-[800px] mt-24 bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/10 p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
             <h3 className="text-2xl md:text-3xl font-medium text-white">Frequently Asked Questions</h3>
          </div>
          <div className="flex flex-col gap-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                 <h4 className="text-base font-medium text-white mb-3">{faq.name}</h4>
                 <p className="text-slate-400 text-sm font-light leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </>
  );
};
