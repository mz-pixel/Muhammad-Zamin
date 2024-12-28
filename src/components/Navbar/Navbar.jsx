import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX, HiDocument } from "react-icons/hi";
import { motion } from "framer-motion";
import { useColorModeValue } from "../index.js";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="app__navbar"
      style={{
        backgroundColor:
          useColorModeValue("light", "dark") === "dark" && "rgb(0, 0, 0, 0.35)",
      }}
    >
      <div className="app__navbar-logo">
        <h1 className="app__navbar-name">Muhammad Zamin</h1>
      </div>
      <ul className="app__navbar-links">
        {["home", "skills", "work", "contact"].map((item, index) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>
      <a href="/Muhammad Zamin resume.pdf" className="app__navbar-resume">
        <div className="app__flex">
          <strong style={{ textDecoration: "none" }}>Resume</strong>
          <HiDocument />
        </div>
      </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="app__navbar-mobile"
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
              className="app__navbar-mobile-close"
            />
            <ul>
              {["home", "skills", "work", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="/Muhammad Zamin resume.pdf"
                className="app__navbar-mobile-resume"
              >
                <div className="app__flex">
                  <strong style={{ textDecoration: "none" }}>Resume</strong>
                  <HiDocument />
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
