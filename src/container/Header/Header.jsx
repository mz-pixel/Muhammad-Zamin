import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { BsLaptopFill } from "react-icons/bs";
import { PiHandWavingFill } from "react-icons/pi";
import { FaLocationPin } from "react-icons/fa6";

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span className="hand">
            {/* 👋 */}
            <PiHandWavingFill />
          </span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Muhammad Zamin</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
          <span>
            {/* 👨‍💻| */}
            <BsLaptopFill />
          </span>
          <div>
            <p className="p-text">
              I am a <span>Web Developer</span> and a{" "}
              <span>Software Engineer</span>
            </p>
          </div>
        </div>
        <div className="tag-cmp app__flex">
          <span>
            {/* 📍 */}
            <FaLocationPin />
          </span>
          <div>
            <p className="p-text" style={{ textAlign: "center" }}>
              I live in <span>Toronto, Canada</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" id="profile_pic" />
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
