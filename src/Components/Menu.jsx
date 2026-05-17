import { motion } from "framer-motion";

const fallbackImg =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600";

const menu = [
  {
    category: "Beverages",
    items: [
      {
        name: "Milk Tea",
        price: "19",
        desc: "Fresh hot milk tea",
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600",
      },
      {
        name: "Black Tea",
        price: "19",
        desc: "Classic black tea",
        img: "https://plus.unsplash.com/premium_photo-1723559972702-2659e41dbb5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjB0ZWF8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Cold Coffee",
        price: "69",
        desc: "Chilled creamy coffee",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
      },
      {
        name: "Blue Lagoon",
        price: "99",
        desc: "Refreshing mocktail drink",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600",
      },
      {
        name: "Sweet Lassi",
        price: "49",
        desc: "Traditional sweet yogurt drink",
        img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600",
      },
    ],
  },

  {
    category: "Breakfast",
    items: [
      {
        name: "Aalu Parantha",
        price: "29",
        desc: "Stuffed potato parantha",
        img: "https://media.istockphoto.com/id/1213259784/photo/aallu-parantha.webp?a=1&b=1&s=612x612&w=0&k=20&c=YctR8y2pcaOcAQqtif3LHxOVfRSA9cJH204RDyxMGWc=",
      },
      {
        name: "Gobhi Parantha",
        price: "39",
        desc: "Cauliflower stuffed parantha",
        img: "https://images.unsplash.com/photo-1754394483922-4d3a10cc6187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvYmhpJTIwcGFyYXRoYXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Paneer Parantha",
        price: "59",
        desc: "Paneer stuffed flatbread",
        img: "https://plus.unsplash.com/premium_photo-1666663150789-be4318924491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuZWVyJTIwcGFyYXRoYXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Chhole Bhature",
        price: "99",
        desc: "Classic North Indian combo",
        img: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=8pmBVIcNb-GIFnsBT0sYqfy-YtzNq7pOqc6lQZgFOPo=",
      },
    ],
  },

  {
    category: "Sandwiches & Snacks",
    items: [
      {
        name: "Bombay Sandwich",
        price: "59",
        desc: "Classic street style sandwich",
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
      },
      {
        name: "Club Sandwich",
        price: "99",
        desc: "Loaded layered sandwich",
        img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2x1YiUyMHNhbmR3aWNofGVufDB8fDB8fHww",
      },
      {
        name: "Paneer Cheese Kebab",
        price: "99/149",
        desc: "Crispy paneer kebab",
        img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600",
      },
      {
        name: "Peri Peri Fries",
        price: "99",
        desc: "Spicy crispy fries",
        img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600",
      },
    ],
  },

  {
    category: "Chinese",
    items: [
      {
        name: "Veg Steamed Momos",
        price: "59/99",
        desc: "Soft steamed momos",
        img: "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3N8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Fried Momos",
        price: "69/119",
        desc: "Crispy fried momos",
        img: "https://images.unsplash.com/photo-1738608084602-f9543952188e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9tb3N8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Spring Roll",
        price: "99",
        desc: "Crunchy veg spring rolls",
        img: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Veg Noodles",
        price: "59/99",
        desc: "Stir fried noodles",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600",
      },
      {
        name: "Gobi Manchurian",
        price: "89/139",
        desc: "Spicy cauliflower manchurian",
        img: "https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeqSiSUYGqzSTTUVI3b4iLTgkuD2jDLeVwzm0PvkTt0=",
      },
    ],
  },

  {
    category: "Pizza & Pasta",
    items: [
      {
        name: "Margherita Pizza",
        price: "149",
        desc: "Classic cheese pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
      },
      {
        name: "Paneer Tikka Pizza",
        price: "179",
        desc: "Indian style paneer pizza",
        img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600",
      },
      {
        name: "Chef Special Pizza",
        price: "199",
        desc: "Loaded special pizza",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
      },
      {
        name: "White Sauce Pasta",
        price: "99/159",
        desc: "Creamy white pasta",
        img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
      },
      {
        name: "Red Sauce Pasta",
        price: "89/149",
        desc: "Tangy tomato pasta",
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
      },
    ],
  },

  {
    category: "Lunch / Dinner",
    items: [
      {
        name: "Veg Thali",
        price: "89",
        desc: "Dal, sabzi, rice, roti, salad & raita",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600",
      },
      {
        name: "Special Thali",
        price: "169",
        desc: "Paneer, rajmah/kadhi with rice & roti",
        img: "https://images.unsplash.com/photo-1742281257687-092746ad6021?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BlY2FpbCUyMHRoYWxpfGVufDB8fDB8fHww",
      },
      {
        name: "Himachali Dham",
        price: "199",
        desc: "Sunday special traditional meal",
        img: "https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGltYWNoYWxpJTIwZGhhbSUyMHRoYWxpfGVufDB8fDB8fHww",
      },
    ],
  },

  {
    category: "Rice",
    items: [
      {
        name: "Veg Fried Rice",
        price: "99",
        desc: "Classic fried rice",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
      },
      {
        name: "Schezwan Fried Rice",
        price: "129",
        desc: "Spicy schezwan rice",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
      },
      {
        name: "Veg Hyderabadi Dum Biryani",
        price: "199",
        desc: "Aromatic dum biryani",
        img: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=600",
      },
      {
        name: "Egg Biryani",
        price: "229",
        desc: "Flavorful egg biryani",
        img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
      },
    ],
  },

  {
    category: "Burgers",
    items: [
      {
        name: "Aalu Tikki Burger",
        price: "39",
        desc: "Crispy aloo patty burger",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
      },
      {
        name: "Veg Delight Burger",
        price: "59",
        desc: "Loaded veg burger",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
      },
      {
        name: "Adda Hill Delight Burger",
        price: "99",
        desc: "House special burger",
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600",
      },
    ],
  },
];

export default function Menu() {
  return (

    <section
      id="menu"
      className="min-h-screen w-full bg-[#f8f3e9] py-20 px-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-green-700 font-medium tracking-widest uppercase mb-3">
          Taste of Himachal
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#2d2d2d]">
          Our Signature Menu
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From authentic Himachali dishes to café favorites,
          every bite brings mountain warmth to your table.
        </p>
      </motion.div>

      {/* Featured Himachali Special */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="bg-[#2f4f2f] rounded-3xl p-8 md:p-12 text-white grid md:grid-cols-2 gap-10 items-center shadow-xl">
          <div>
            <p className="text-yellow-300 uppercase tracking-widest text-sm mb-3">
              Chef Recommendation
            </p>

            <h2 className="text-4xl font-bold mb-4">
              Himachali Dham Special
            </h2>

            <p className="text-gray-200 mb-6">
              Traditional Himachali feast prepared with authentic spices
              and recipes passed through generations.
            </p>

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
              Order Special
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?w=800"
            className="rounded-2xl h-[300px] w-full object-cover"
            alt=""
          />
        </div>
      </div>

      {/* Menu Categories */}
      <div className="max-w-6xl mx-auto space-y-20">
        {menu.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Category Heading */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-green-700"></div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d2d]">
                {section.category}
              </h2>
            </div>

            {/* Menu Items */}
            <div className="grid md:grid-cols-3 gap-8">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={(e) => (e.target.src = fallbackImg)}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-[#2d2d2d]">
                        {item.name}
                      </h3>

                      <span className="text-green-700 font-bold">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
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
