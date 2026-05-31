import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX, HiDocument } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const sections = ["home", "skills", "work", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollY = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#home" className="navbar__logo" id="navbar-logo">
        <span className="navbar__logo-text">MZ</span>
      </a>

      <div className="navbar__links-wrapper">
        <ul className="navbar__links">
          {sections.map((item) => (
            <li key={`nav-${item}`}>
              <a
                href={`#${item}`}
                className={`navbar__link ${active === item ? "navbar__link--active" : ""}`}
                id={`nav-link-${item}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="/Muhammad Zamin resume.pdf"
        className="navbar__resume"
        id="navbar-resume"
      >
        <HiDocument />
        <span>Resume</span>
      </a>

      {/* Mobile toggle button */}
      <button
        className="navbar__mobile-toggle"
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle mobile menu"
        id="navbar-mobile-toggle"
      >
        {toggle ? <HiX /> : <HiMenuAlt4 />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {toggle && (
          <>
            <motion.div
              className="navbar__mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setToggle(false)}
            />
            <motion.div
              key="mobile-menu"
              className="navbar__mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="navbar__mobile-links">
                {sections.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                  >
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                      className={active === item ? "active" : ""}
                      id={`mobile-nav-${item}`}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + sections.length * 0.08, duration: 0.4 }}
                >
                  <a
                    href="/Muhammad Zamin resume.pdf"
                    className="navbar__mobile-resume-link"
                    id="mobile-nav-resume"
                  >
                    <HiDocument />
                    <span>Resume</span>
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
