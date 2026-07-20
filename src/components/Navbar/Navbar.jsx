import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { usePageTransition } from "../PageTransition/PageTransitionContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const sections = ["home", "about", "skills", "work", "contact"];
const sectionLabels = {
  home: "Home",
  about: "About",
  skills: "Skills",
  work: "Projects",
  contact: "Contact",
};

const Navbar = () => {
  const [toggle, setToggle]   = useState(false);
  const [active, setActive]   = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { triggerTransition }   = usePageTransition();

  useEffect(() => {
    const scrollContainer = document.querySelector(".app__scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      setScrolled(currentScrollY > 50);
      const scrollY = currentScrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(sections[i]);
          break;
        }
      }
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [toggle]);

  const scrollTo = (id) => {
    triggerTransition(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto" });
    });
    setToggle(false);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    triggerTransition(() => window.open("/Muhammad Zamin resume.pdf", "_blank"));
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <button
        className="navbar__logo"
        onClick={() => scrollTo("home")}
        id="navbar-logo"
        aria-label="Go to top"
      >
        MZ
      </button>

      {/* Desktop links — absolutely centered */}
      <ul className="navbar__links">
        {sections.map((item) => (
          <li key={`nav-${item}`}>
            <button
              className={`navbar__link ${active === item ? "navbar__link--active" : ""}`}
              onClick={() => scrollTo(item)}
              id={`nav-link-${item}`}
            >
              {sectionLabels[item]}
            </button>
          </li>
        ))}
      </ul>

      {/* Right side: ThemeToggle + Resume grouped together */}
      <div className="navbar__right">
        <ThemeToggle />
        <a
          href="/Muhammad Zamin resume.pdf"
          className="navbar__resume"
          id="navbar-resume"
          onClick={handleResumeClick}
        >
          Resume →
        </a>
      </div>

      {/* Mobile toggle */}
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
              transition={{ duration: 0.25 }}
              onClick={() => setToggle(false)}
            />
            <motion.div
              key="mobile-menu"
              className="navbar__mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="navbar__mobile-links">
                {sections.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.35 }}
                  >
                    <button
                      onClick={() => scrollTo(item)}
                      className={active === item ? "active" : ""}
                      id={`mobile-nav-${item}`}
                    >
                      {sectionLabels[item]}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + sections.length * 0.06, duration: 0.35 }}
                >
                  <a
                    href="/Muhammad Zamin resume.pdf"
                    className="navbar__mobile-resume-link"
                    id="mobile-nav-resume"
                    onClick={handleResumeClick}
                  >
                    Resume →
                  </a>
                </motion.li>
                <motion.li
                  className="navbar__mobile-theme"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + (sections.length + 1) * 0.06, duration: 0.35 }}
                >
                  <ThemeToggle />
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
