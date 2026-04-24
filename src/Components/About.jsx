import { motion } from "framer-motion";
import { FaLeaf, FaUtensils, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-20 px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-14"
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          About <span className="text-yellow-400">Us</span>
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Crafting unforgettable vegetarian dining experiences.
        </p>
      </motion.div>

      {/* Main */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200"
            alt="chef"
            className="rounded-2xl shadow-2xl border border-white/10 h-[320px] md:h-auto object-cover"
          />

          <div className="absolute -bottom-3 -right-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-2">
            <p className="text-yellow-400 font-bold text-sm">Since 2010</p>
            <p className="text-xs text-gray-300">Veg Cuisine</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Taste. Tradition. Innovation.
          </h2>

          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
            We blend authentic Indian flavors with modern culinary techniques
            to create a premium vegetarian dining experience.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3 text-sm md:text-base">

            <div className="flex items-center gap-3">
              <FaLeaf className="text-green-400" />
              <span className="text-gray-300">Fresh & Natural Ingredients</span>
            </div>

            <div className="flex items-center gap-3">
              <FaUtensils className="text-yellow-400" />
              <span className="text-gray-300">Expert Chefs (10+ Years)</span>
            </div>

            <div className="flex items-center gap-3">
              <FaStar className="text-yellow-400" />
              <span className="text-gray-300">4.9★ Customer Rating</span>
            </div>

          </div>

        </motion.div>
      </div>

      {/* Stats (compact row style) */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">

        {[
          { num: "10+", label: "Years" },
          { num: "50+", label: "Dishes" },
          { num: "20k+", label: "Customers" },
          { num: "4.9★", label: "Rating" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl py-4"
          >
            <h3 className="text-lg md:text-xl font-bold text-yellow-400">
              {item.num}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}