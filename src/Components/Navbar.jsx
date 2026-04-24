import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Glass Navbar */}
      <div className="bg-black/60 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white font-bold text-xl"
          >
            <FaUtensils className="text-yellow-400" />
            <span>
              Zaika <span className="text-yellow-400">Kitchen</span>
            </span>
          </motion.div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-semibold transition"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-gray-300">

              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-400 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold"
                onClick={() => setOpen(false)}
              >
                Reserve Table
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}