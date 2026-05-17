import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Food Blogger",
    text: "Yahan ka khana bahut hi zabardast hai 😍 taste, presentation aur service sab top class hai!",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Anjali Verma",
    role: "Customer",
    text: "Paneer butter masala bilkul ghar jaisa laga ❤️ fresh aur spicy perfect balance tha.",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Karan Mehta",
    role: "Chef & Reviewer",
    text: "Modern aur desi Chinese ka perfect combo hai. Highly recommended 👍",
    img: "https://i.pravatar.cc/100?img=45",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-amber-50 text-gray-800 py-24 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          What Our <span className="text-emerald-700">Customers Say</span>
        </h2>
        <p className="text-gray-500 mt-4">
          Real feedback from our food lovers ❤️
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {reviews.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition overflow-hidden"
          >

            {/* Soft hill glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-50 blur-2xl"></div>

            {/* Stars */}
            <div className="text-yellow-500 text-sm mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            {/* Review Text */}
            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
              “{item.text}”
            </p>

            {/* User */}
            <div className="flex items-center gap-4 mt-6 relative z-10">

              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-emerald-200"
              />

              <div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>

            </div>

            {/* Bottom subtle line */}
            <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}