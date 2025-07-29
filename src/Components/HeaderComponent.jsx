import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const NeomorphismHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Inicio", path: "#" },
    { name: "Servicios", path: "#" },
    { name: "Nosotros", path: "#" },
    { name: "Contacto", path: "#" },
  ];

  const handleNavLinkClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 60) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#97c499]/60 shadow-[0_2px_10px_rgba(0,0,0,0.1),0_-2px_10px_rgba(255,255,255,0.8)]"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-5 flex justify-between items-center h-[75px]">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 text-[#2c3e50]">
              <h1
                className="text-[1.8rem] font-semibold tracking-[-0.3px] relative whitespace-nowrap"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(255,255,255,0.8), -2px -2px 4px rgba(0,0,0,0.1)",
                }}
              >
                CV Web
              </h1>
            </a>

            {/* Botón hamburguesa */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-[45px] h-[45px] p-2 rounded-[15px] bg-[#97c499] transition-all shadow-[6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)]"
            >
              <span
                className={`block h-[3px] w-[22px] rounded bg-gradient-to-r from-indigo-400 to-purple-500 my-[3px] transition-all ${
                  menuOpen
                    ? "rotate-[-45deg] -translate-x-[5px] translate-y-[6px]"
                    : ""
                }`}
              />
              <span
                className={`block h-[3px] w-[22px] rounded bg-gradient-to-r from-indigo-400 to-purple-500 my-[3px] transition-all ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[3px] w-[22px] rounded bg-gradient-to-r from-indigo-400 to-purple-500 my-[3px] transition-all ${
                  menuOpen
                    ? "rotate-[45deg] -translate-x-[5px] -translate-y-[6px]"
                    : ""
                }`}
              />
            </button>

            {/* Navegación + Redes */}
            <nav
              className={`absolute md:static top-full left-0 right-0 transition-all duration-300 ease-in-out ${
                menuOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-5"
              } md:opacity-100 md:visible md:translate-y-0  backdrop-blur-md shadow-md md:shadow-none`}
            >
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 md:p-0 " >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <a
                      href={link.path}
                      onClick={handleNavLinkClick}
                      className="block text-[#665b28] font-medium text-[0.95rem] px-6 py-3 rounded-[20px] transition-all bg-[#dff5df] shadow-[6px_6px_12px_rgba(0,0,0,0.1),_-6px_-6px_12px_rgba(255,255,255,0.8)] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] hover:text-indigo-500"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}

                {/* Redes sociales */}
                <motion.li
                  className="flex gap-4 mt-4 md:mt-0 md:ml-6 "
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-indigo-500 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-indigo-500 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-indigo-500 transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                </motion.li>
              </ul>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default NeomorphismHeader;

