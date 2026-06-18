import { SEO } from '../components/SEO';
import restaurantImg from '../assets/images/hotel_restaurant_1781789911329.jpg';
import { motion } from 'motion/react';
import { Coffee, Utensils, GlassWater } from 'lucide-react';

export const Restaurant = () => {
  return (
    <>
      <SEO 
        title="V2 Restaurant | Fine Dining at Hotel Shivoy Palace" 
        description="Experience exquisite local and multi-cuisine dishes at V2 Restaurant inside Hotel Shivoy Palace, Basti. Perfect for families and business dining."
      />
      
      <div className="w-full px-6 md:px-16 pt-16 pb-20 flex flex-col items-center">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4 block">Fine Dining</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6">
            V2 Restaurant
          </h1>
          <p className="text-slate-300 font-light leading-relaxed">
            At V2 Restaurant, we believe that food is not just a meal, but an experience. Our chefs craft every dish with passion, using the finest local ingredients to bring you a menu that celebrates vibrant flavors and culinary tradition.
          </p>
        </motion.div>

        {/* Feature Image - Glass Edge */}
        <motion.div 
          className="w-full max-w-[1200px] aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden relative border border-white/10 shadow-2xl mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={restaurantImg} className="w-full h-full object-cover" alt="V2 Restaurant Interior" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
             <div className="p-8 md:p-12 w-full flex justify-between items-end">
                <div>
                   <div className="text-white text-2xl md:text-3xl font-medium">A Taste of Elegance</div>
                   <div className="text-slate-300 font-light text-sm mt-2">Open Daily: 7:30 AM - 10:30 PM</div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Menu Highlight Cards Grid */}
        <div className="w-full max-w-[1200px]" style={{ perspective: 1500 }}>
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-6 border-b border-white/5">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">Dining Experiences</h2>
               <p className="text-white/60 font-light mt-3 max-w-lg">Curated moments for every time of day. Our master chefs prepare each meal with extreme precision and authentic traditional flavors, giving you a dining experience unlike any other.</p>
             </motion.div>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Morning Buffet", 
                  time: "7:30 AM - 10:30 AM", 
                  icon: Coffee,
                  desc: "Start your day right with a lavish spread of fresh fruits, Indian breakfast staples, and continental choices. Enjoy a selection of international teas, artisanal coffees, and made-to-order omelets." 
                },
                { 
                  title: "Lunch Menu", 
                  time: "12:30 PM - 3:30 PM", 
                  icon: Utensils,
                  desc: "Perfect for business meetings or family outings. Enjoy our curated thalis and a la carte specialties. Fresh, farm-to-table ingredients to keep you energized for the afternoon ahead." 
                },
                { 
                  title: "Fine Dining Dinner", 
                  time: "7:00 PM - 10:30 PM", 
                  icon: GlassWater,
                  desc: "Unwind in our elegant atmosphere with gourmet dishes, perfect for celebrations and relaxing evenings. Our dinner service features ambient lighting, soft music, and exquisite desserts." 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white/5 backdrop-blur-3xl p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative group overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 40, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: -5, boxShadow: "0 30px 60px rgba(0,0,0,0.6)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                   {/* Gradient glow effect on hover */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none"></div>

                   <motion.div 
                     className="w-14 h-14 rounded-[20px] bg-white/10 flex items-center justify-center mb-8 text-white shadow-inner"
                     whileHover={{ scale: 1.1, rotate: 10 }}
                   >
                      <item.icon className="w-6 h-6" />
                   </motion.div>
                   
                   <h4 className="text-2xl font-medium text-white mb-2" style={{ transform: "translateZ(20px)" }}>{item.title}</h4>
                   <h5 className="text-[11px] font-medium text-white/50 tracking-widest uppercase mb-5" style={{ transform: "translateZ(15px)" }}>{item.time}</h5>
                   <p className="text-slate-300 text-sm font-light leading-relaxed" style={{ transform: "translateZ(10px)" }}>{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </>
  );
};
