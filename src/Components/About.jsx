import { motion } from "framer-motion";
import { FaLeaf, FaUtensils, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-amber-50 text-gray-800 py-20 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-emerald-700">The Pahadi Adda</span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Authentic Himachali flavors from the mountains 🏔️
        </p>
      </motion.div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <img
            src="/Photo.jpg"
            alt="Himachali restaurant"
            className="rounded-2xl shadow-xl border border-emerald-100 h-[340px] md:h-auto object-cover group-hover:scale-105 transition duration-700"
          />

          {/* Badge */}
          <div className="absolute -bottom-3 -right-3 bg-white/90 backdrop-blur-xl border border-emerald-100 rounded-xl px-4 py-2 shadow-md">
            <p className="text-emerald-700 font-bold text-sm">Since 2010</p>
            <p className="text-xs text-gray-500">Himachali Kitchen</p>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Taste of the Hills. Tradition in Every Bite.
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            At <span className="text-emerald-700 font-semibold">The Pahadi Adda</span>,
            we bring the soulful essence of Himachal Pradesh to your plate.
            Every dish is slow-cooked with local spices, love, and tradition.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-4 text-sm md:text-base">

            <div className="flex items-center gap-3">
              <FaLeaf className="text-emerald-600" />
              <span className="text-gray-600">Locally sourced fresh ingredients</span>
            </div>

            <div className="flex items-center gap-3">
              <FaUtensils className="text-amber-600" />
              <span className="text-gray-600">Traditional Himachali recipes</span>
            </div>

            <div className="flex items-center gap-3">
              <FaStar className="text-yellow-500" />
              <span className="text-gray-600">Loved by 20K+ customers</span>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-md">
              Explore Menu
            </button>

            <button className="border border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-full transition">
              Contact Us
            </button>
          </div>

        </motion.div>
      </div>

      {/* STATS */}
      <div className="max-w-5xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

        {[
          { num: "10+", label: "Years Experience" },
          { num: "50+", label: "Himachali Dishes" },
          { num: "20K+", label: "Happy Customers" },
          { num: "4.8★", label: "Rating" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-emerald-100 shadow-sm rounded-xl py-5 hover:shadow-md transition"
          >
            <h3 className="text-lg md:text-xl font-bold text-emerald-700">
              {item.num}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}