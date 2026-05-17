import { motion } from "framer-motion";
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-24 overflow-hidden text-white">

      {/* Mountain Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920"
          alt="Himachal mountains"
          className="h-full w-full object-cover"
        />

        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-green-950/60 to-black/80" />
      </div>

      {/* Floating fog effect */}
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-0 w-72 h-72 bg-green-200/10 blur-3xl rounded-full"
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <FaMapMarkerAlt className="text-green-300" />
            <span className="text-sm tracking-widest uppercase">
              Taste of Himachal Pradesh
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Welcome To <br />
            <span className="text-yellow-300">
              The Pahadi Adda
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Experience authentic Himachali flavors, warm hospitality, 
            and mountain freshness in every bite.
          </motion.p>

          {/* Special Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              🏔 Himachali Dham
            </span>

            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              🥟 Siddu Special
            </span>

            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">
              ☕ Mountain Cafe
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Menu
            </button>

            <button className="border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition">
              Book Table
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Food Card */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden lg:block absolute bottom-10 right-10"
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800"
          alt="Himachali food"
          className="w-[300px] rounded-3xl shadow-2xl border border-white/20"
        />
      </motion.div>
    </section>
  );
}