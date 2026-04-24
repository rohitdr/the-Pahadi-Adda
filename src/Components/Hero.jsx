import { motion } from "framer-motion";
import { FaUtensils, FaConciergeBell } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1920"
          alt="restaurant"
          className="h-full w-full object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Floating Decorative Blur */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-red-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">

        <div className="max-w-3xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
          >
            <FaUtensils className="text-yellow-400" />
            <span className="text-sm tracking-wide">Premium Dining Experience</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Taste the Art of{" "}
            <span className="text-yellow-400">Fine Dining</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-gray-300 text-lg md:text-xl"
          >
            Experience world-class cuisine crafted by expert chefs with passion,
            flavor, and perfection in every bite.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition">
              <FaConciergeBell />
              Reserve a Table
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              View Menu
            </button>
          </motion.div>

        </div>
      </div>

      {/* Floating Food Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800"
        alt="food"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute bottom-10 right-10 w-[320px] rounded-2xl shadow-2xl border border-white/10"
      />
    </section>
  );
}