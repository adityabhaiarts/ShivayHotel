import { SEO } from '../components/SEO';
import heroImg from '../assets/images/hotel_hero_1781789881659.jpg';
import boutiqueRoomImg from '../assets/images/boutique_room_1781793126177.jpg';
import deluxeWorkspaceImg from '../assets/images/deluxe_workspace_1781793143463.jpg';
import familySuiteImg from '../assets/images/family_suite_1781793156148.jpg';
import restaurantImg from '../assets/images/hotel_restaurant_1781789911329.jpg';
import breakfastImg from '../assets/images/hotel_breakfast_1781790974073.jpg';
import lobbyImg from '../assets/images/hotel_lobby_1781790992485.jpg';
import exteriorImg from '../assets/images/hotel_exterior_1781791246185.jpg';
import fineDiningImg from '../assets/images/fine_dining_1781793187162.jpg';
import thaliImg from '../assets/images/thali_dinner_1781793204289.jpg';
import { motion } from 'motion/react';

export const Gallery = () => {
  const images = [
    { src: exteriorImg, alt: 'Hotel Exterior', category: 'Exterior', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: lobbyImg, alt: 'Premium Lobby', category: 'Interior', span: 'col-span-1 row-span-1' },
    { src: boutiqueRoomImg, alt: 'Boutique Room', category: 'Rooms', span: 'col-span-1 row-span-1' },
    { src: fineDiningImg, alt: 'V2 Restaurant Interior', category: 'Dining', span: 'col-span-1 row-span-2' },
    { src: breakfastImg, alt: 'Breakfast Spread', category: 'Dining', span: 'col-span-1 md:col-span-2 row-span-1' },
    { src: heroImg, alt: 'Warm Heritage Ambiance', category: 'Exterior', span: 'col-span-1 md:col-span-3 row-span-2' },
    { src: thaliImg, alt: 'Authentic Indian Thali', category: 'Dining', span: 'col-span-1 md:col-span-2 row-span-1' },
    { src: deluxeWorkspaceImg, alt: 'Deluxe Workspace', category: 'Rooms', span: 'col-span-1 border-span-1' },
  ];

  return (
    <>
      <SEO title="Gallery | Hotel Shivoy Palace" />
      
      <div className="w-full px-6 md:px-16 pt-16 pb-20 flex flex-col items-center">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4 block">Visual Tour</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Gallery
          </h1>
          <p className="text-slate-300 font-light leading-relaxed">
            Take a visual tour of our hotel and restaurant. A glimpse into the comfort, aesthetics, and premium experience waiting for you.
          </p>
        </motion.div>

        {/* Bento Grid Gallery */}
        <div className="w-full max-w-[1200px]" style={{ perspective: 1800 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
            {images.map((img, idx) => (
              <motion.div 
                key={idx} 
                className={`relative rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer ${img.span}`}
                initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2, zIndex: 10, boxShadow: "0 30px 60px rgba(0,0,0,0.8)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 200, damping: 25, delay: idx * 0.1 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                   src={img.src} 
                   alt={img.alt} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                   loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                   <div 
                     className="bg-white/10 px-8 py-4 rounded-[24px] shadow-2xl backdrop-blur-md"
                     style={{ transform: "translateZ(30px)" }}
                   >
                     <h4 className="text-white font-medium text-sm tracking-widest uppercase">{img.alt}</h4>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
