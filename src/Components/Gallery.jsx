import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200",
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200",
  "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=600",
];

export default function Gallery() {
  return (
    <section className="min-h-screen w-full bg-black text-white py-20 px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Our <span className="text-yellow-400">Gallery</span>
        </h1>
        <p className="text-gray-400 mt-4">
          A glimpse of our flavors, ambience & experience.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            {/* Image */}
            <img
              src={img}
              alt="food gallery"
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

            {/* Hover Text */}
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition">
              <p className="text-sm text-yellow-400 font-semibold">
                Signature Dish
              </p>
              <p className="text-xs text-gray-300">
                Crafted with love & freshness
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}