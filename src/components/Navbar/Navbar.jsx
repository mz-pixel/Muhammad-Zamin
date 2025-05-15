import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX, HiDocument } from "react-icons/hi";
import { motion } from "framer-motion";
import { useColorModeValue } from "../index.js";
// import { textDecoration } from "@chakra-ui/react";

const sections = ["home", "skills", "work", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll listener to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200; // buffer offset
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

  return (
    <nav
      className="app__navbar"
      style={{
        backgroundColor:
          useColorModeValue("light", "dark") === "dark" && "rgb(0, 0, 0, 0.35)",
      }}
    >
      <div className="app__navbar-pill app__navbar-logo">
        <h1 className="app__navbar-name">MZ</h1>
      </div>

      <div className="app__navbar-pill app__navbar-nav">
        <ul className="app__navbar-links">
          {sections.map((item) => (
            <li key={`link-${item}`} className="app__flex p-text">
              <a href={`#${item}`} className={active === item ? "active" : ""}>
                {item}
              </a>
              <div />
            </li>
          ))}
        </ul>
      </div>

      <a href="/Muhammad Zamin resume.pdf" className="app__navbar-resume">
        <div className="app__flex">
          <strong style={{ textDecoration: "none" }}>Resume</strong>
          <HiDocument />
        </div>
      </a>

      <div className="app__navbar-menu">
        {!toggle ? (
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        ) : (
          <HiX
            onClick={() => setToggle(false)}
            className="app__navbar-mobile-close"
          />
        )}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="app__navbar-mobile"
          >
            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setActive(item);
                    }}
                    className={active === item ? "active" : ""}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="app__navbar-mobile-resume">
                <a
                  href="/Muhammad Zamin resume.pdf"
                  className="app__navbar-mobile-resume"
                >
                  <div className="app__flex">
                    <strong style={{ textDecoration: "none" }}>Resume</strong>
                    <HiDocument />
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
