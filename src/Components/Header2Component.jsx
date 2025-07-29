import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const GlassHeader = () => {
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
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="backdrop-blur-lg bg-white/60 shadow-lg border-b border-white/30 sticky top-0 z-50 w-full"
        >
          
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex justify-between items-center h-[75px]">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex-shrink-0 text-slate-800"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1
                className="text-[1.8rem] font-semibold tracking-[-0.3px] relative whitespace-nowrap"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(255,255,255,0.5), -2px -2px 4px rgba(0,0,0,0.05)",
                }}
              >
                GlassBrand
              </h1>
            </motion.a>

            {/* Botón hamburguesa */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-[45px] h-[45px] p-2 rounded-xl bg-white/60 shadow-md backdrop-blur border border-white/30 transition-all"
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
                  menuOpen ? "opacity-0" : "opacity-100"
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

            {/* Navegación + redes */}
            <AnimatePresence>
              {(menuOpen || window.innerWidth >= 768) && (
                <motion.nav
                  key="nav"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute md:static top-full left-0 right-0 md:flex md:items-center md:justify-end bg-white/70 backdrop-blur-lg shadow md:shadow-none border-t md:border-none border-white/30 ${
                    menuOpen ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 py-4 md:p-0">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <a
                          href={link.path}
                          onClick={handleNavLinkClick}
                          className="text-slate-700 font-medium text-sm px-5 py-2 rounded-full transition-all hover:text-indigo-500 hover:bg-white/40 backdrop-blur-sm shadow-inner"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}

                    {/* Íconos redes sociales */}
                    <li className="flex items-center gap-4 mt-4 md:mt-0 md:ml-6">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-indigo-500 transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-indigo-500 transition-colors"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-indigo-500 transition-colors"
                      >
                        <FaTwitter size={20} />
                      </a>
                    </li>
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default GlassHeader;
