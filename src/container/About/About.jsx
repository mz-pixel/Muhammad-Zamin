import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-section__inner">
        <motion.div
          className="about-section__label-col"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">About</span>
          <div className="about-section__rule" />
        </motion.div>

        <motion.div
          className="about-section__text-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-section__bio">
            I'm a fourth-year Computer Science student at York University, building
            full-stack web and mobile applications. I care about clean architecture,
            thoughtful UX, and software that works reliably for real users.
          </p>
          <p className="about-section__bio about-section__bio--secondary">
            Currently looking for a Software Engineering internship where I can contribute
            to meaningful products and continue growing as an engineer.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
