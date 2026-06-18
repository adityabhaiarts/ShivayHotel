import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import lobbyImg from '../assets/images/hotel_lobby_1781790992485.jpg';

export const About = () => {
  return (
    <>
      <SEO title="About Hotel Shivoy Palace | Our Story" />
      
      <div className="w-full px-6 md:px-16 pt-16 pb-20 flex flex-col items-center">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            Redefining Hospitality in Basti.
          </h1>
          <p className="text-slate-300 font-light leading-relaxed">
            Welcome to Hotel Shivoy Palace. Discover the commitment to elevated living and genuine hospitality that makes us the region's preferred choice for comfort and luxury.
          </p>
        </motion.div>

        <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Image */}
          <motion.div 
            className="w-full aspect-[4/5] md:aspect-square relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={lobbyImg} alt="Hotel Lobby" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 text-white/90 font-light leading-relaxed prose prose-invert max-w-none">
              <p className="mb-4">
                Located strategically at the Roadways Tiraha in Basti, Hotel Shivoy Palace stands as a beacon of comfort and modern hospitality. Our establishment was built with a singular vision: to provide travelers and locals alike with a premium, seamless, and memorable experience without compromising on value. Since our inception, we have dedicated ourselves to redefining the standard of hospitality throughout Eastern Uttar Pradesh.
              </p>
              <p className="mb-4">
                We understand that whether you are traveling for business, embarking on a family vacation, or just passing through, comfort is paramount. That is why every aspect of our hotel—from our pristine, fully air-conditioned rooms to our dedicated staff—is designed around your exact needs. Our architecture seamlessly blends contemporary design with subtle nods to traditional Indian aesthetics, creating an ambiance that is both welcoming and sophisticated.
              </p>
              <p className="mb-4">
                Our flagship culinary venture, V2 Restaurant, mirrors our dedication to excellence. Here, dining transcends mere sustenance to become a curated journey of authentic flavors, masterfully prepared by chefs who bring decades of culinary heritage to your table. From early morning buffet spreads featuring locally sourced produce to intimate, fine-dining evening experiences, we cater to every palate.
              </p>
              <p>
                Beyond physical amenities, our core philosophy revolves around personalized service. We believe that a true luxury experience relies on the unseen details: the promptness of room service, the gentle meticulousness of our housekeeping team, and the genuine smiles of our concierges who are always ready to guide you through Basti's historical tapestry. We invite you to stay with us and let Hotel Shivoy Palace be the canvas for your cherished memories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ perspective: 1000 }}>
              <motion.div 
                className="bg-white/5 backdrop-blur-3xl rounded-[24px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02, rotateX: 5, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <h3 className="text-xl text-white font-medium mb-3 flex items-center gap-3" style={{ transform: "translateZ(20px)" }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-white/80 shrink-0"></span> Our Mission
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                  To deliver exceptional hospitality by combining modern amenities with personalized, warm service, ensuring every guest feels valued and completely at home space.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white/5 backdrop-blur-3xl rounded-[24px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02, rotateX: 5, rotateY: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <h3 className="text-xl text-white font-medium mb-3 flex items-center gap-3" style={{ transform: "translateZ(20px)" }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-white/80 shrink-0"></span> Our Vision
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed" style={{ transform: "translateZ(10px)" }}>
                  To be recognized as the premier destination for refined hospitality and sophisticated dining in the region, setting unparalleled standards in comfort.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};
