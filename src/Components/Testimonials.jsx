import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Food Blogger",
    text: "One of the best dining experiences I’ve ever had. The flavors, presentation, and ambience are absolutely top-notch!",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Anjali Verma",
    role: "Customer",
    text: "The paneer butter masala was incredible. Super fresh ingredients and amazing service.",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Karan Mehta",
    role: "Chef & Reviewer",
    text: "A perfect blend of modern and traditional cuisine. Highly recommended for fine dining lovers.",
    img: "https://i.pravatar.cc/100?img=45",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold">
          What Our <span className="text-yellow-400">Customers Say</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Real experiences from real food lovers.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {reviews.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg"
          >

            {/* Quote */}
            <p className="text-gray-300 text-sm leading-relaxed">
              “{item.text}”
            </p>

            {/* User */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-yellow-400"
              />

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>

            {/* Glow Accent */}
            <div className="mt-4 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}