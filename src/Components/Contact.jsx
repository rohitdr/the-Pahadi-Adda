import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen w-full bg-black text-white py-16 md:py-24 px-4 md:px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <h1 className="text-3xl md:text-6xl font-bold">
          Reserve a <span className="text-yellow-400">Table</span>
        </h1>

        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Book your dining experience in just a few seconds.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5 md:p-8"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-5 md:mb-6">
            Book Your Table
          </h2>

          <form className="space-y-3 md:space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2.5 md:p-3 text-sm md:text-base rounded-xl bg-black/40 border border-white/10 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2.5 md:p-3 text-sm md:text-base rounded-xl bg-black/40 border border-white/10 outline-none focus:border-yellow-400"
            />

            <input
              type="number"
              placeholder="Number of Guests"
              className="w-full p-2.5 md:p-3 text-sm md:text-base rounded-xl bg-black/40 border border-white/10 outline-none focus:border-yellow-400"
            />

            <input
              type="date"
              className="w-full p-2.5 md:p-3 text-sm md:text-base rounded-xl bg-black/40 border border-white/10 outline-none focus:border-yellow-400"
            />

            <textarea
              placeholder="Special Requests (optional)"
              rows="3"
              className="w-full p-2.5 md:p-3 text-sm md:text-base rounded-xl bg-black/40 border border-white/10 outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2.5 md:py-3 rounded-xl transition text-sm md:text-base"
            >
              Confirm Reservation
            </button>

          </form>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >

          {/* Info Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4">
            <FaPhoneAlt className="text-yellow-400 text-lg md:text-xl" />
            <div>
              <p className="font-semibold text-sm md:text-base">Call Us</p>
              <p className="text-gray-400 text-xs md:text-sm">+91 98765 43210</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-lg md:text-xl" />
            <div>
              <p className="font-semibold text-sm md:text-base">Location</p>
              <p className="text-gray-400 text-xs md:text-sm">
                Main Market, Punjab, India
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4">
            <FaClock className="text-yellow-400 text-lg md:text-xl" />
            <div>
              <p className="font-semibold text-sm md:text-base">Opening Hours</p>
              <p className="text-gray-400 text-xs md:text-sm">
                10:00 AM - 11:00 PM
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black font-semibold py-2.5 md:py-3 rounded-xl transition text-sm md:text-base"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-48 md:h-64"
              loading="lazy"
            ></iframe>
          </div>

        </motion.div>
      </div>
    </section>
  );
}