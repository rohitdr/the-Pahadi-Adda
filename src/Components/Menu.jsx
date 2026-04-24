import { motion } from "framer-motion";

const menu = [
  {
    category: "Starters",
    items: [
      {
        name: "Veg Spring Rolls",
        price: "₹180",
        desc: "Crispy rolls with fresh veggies",
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600",
      },
      {
        name: "Paneer Tikka",
        price: "₹220",
        desc: "Smoky grilled paneer cubes",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600",
      },
      {
        name: "Corn Cheese Balls",
        price: "₹200",
        desc: "Golden crispy cheesy bites",
        img: "https://images.unsplash.com/photo-1714256635057-2a831a5c7e8d?q=80&w=600",
      },
    ],
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Paneer Butter Masala",
        price: "₹260",
        desc: "Creamy tomato gravy with paneer",
        img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600",
      },
      {
        name: "Veg Biryani",
        price: "₹240",
        desc: "Aromatic rice with spices & veggies",
        img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600",
      },
      {
        name: "Dal Makhani",
        price: "₹220",
        desc: "Slow cooked black lentils",
        img: "https://images.unsplash.com/photo-1697155406121-85aac6236000?q=80&w=600",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section className="min-h-screen w-full bg-black text-white py-20 px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Our <span className="text-yellow-400">Menu</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Crafted with passion. Served with elegance.
        </p>
      </motion.div>

      {/* Menu Sections */}
      <div className="max-w-6xl mx-auto space-y-20">

        {menu.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Category */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-yellow-400 pl-4">
              {section.category}
            </h2>

            {/* Items Grid */}
            <div className="grid md:grid-cols-3 gap-8">

              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg"
                >

                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-yellow-400 font-bold">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mt-2">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}