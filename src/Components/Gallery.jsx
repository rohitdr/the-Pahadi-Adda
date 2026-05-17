import { motion } from "framer-motion";

const fallbackImg =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200";

const images = [
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200",
    title: "Mountain View Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200",
    title: "Traditional Himachali Dishes",
  },
  {
    src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200",
    title: "Fresh Café Meals",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200",
    title: "Chef Special Recipes",
  },
  {
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200",
    title: "Authentic Local Flavors",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1200",
    title: "Cozy Dining Experience",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="min-h-screen w-full bg-[#f8f3e9] py-20 px-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-green-700 tracking-widest uppercase mb-3">
          Our Moments
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#2d2d2d]">
          Taste The Mountain Experience
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A glimpse of authentic Himachali food, cozy ambience,
          and unforgettable dining moments.
        </p>
      </motion.div>

      {/* Masonry Style Grid */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

        {images.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                onError={(e) => (e.target.src = fallbackImg)}
                className="w-full object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#2d2d2d]">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Experience warmth, nature and authentic flavors.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}