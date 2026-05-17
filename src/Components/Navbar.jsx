import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMountain } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#1f2d1f]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
              <FaMountain className="text-yellow-300 text-xl" />
            </div>

            <div className="leading-tight">
              <h2 className="text-white font-bold text-lg md:text-xl">
                The Pahadi Adda
              </h2>
              <p className="text-xs text-green-200 tracking-widest uppercase">
                Taste of Himachal
              </p>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <span className="group-hover:text-yellow-300 transition">
                  {link.name}
                </span>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300"
          >
            Book Table
          </motion.a>

          {/* Mobile Toggle */}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#1b2a1b]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-gray-200">

              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-300 transition"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold"
              >
                Book Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}