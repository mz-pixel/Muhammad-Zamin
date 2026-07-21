import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { BsGithub, BsLinkedin, BsYoutube, BsFileText } from "react-icons/bs";
// import { usePageTransition } from "../../components/PageTransition/PageTransitionContext";
import "./Footer.scss";

const Footer = () => {
  // const { triggerTransition } = usePageTransition();

  const handleEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:zamin@my.yorku.ca";
  };

  return (
    <div className="footer-section">
      {/* Headline */}
      <div className="footer-section__header-group">
        <motion.p
          className="footer-section__sub"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Still scrolling?
        </motion.p>
        <motion.h2
          className="footer-section__headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          id="footer-heading"
        >
          You might as well say <em>hello!!</em>
        </motion.h2>
      </div>

      {/* Arrow & Links Container */}
      <div className="footer-section__email-container">
        <motion.span
          className="footer-section__arrow"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          ↓
        </motion.span>

        <div className="footer-section__links-group">
          <motion.a
            href="mailto:zamin@my.yorku.ca"
            className="footer-section__email"
            onClick={handleEmail}
            id="footer-email"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            zamin@my.yorku.ca
          </motion.a>

          <motion.span
            className="footer-section__divider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            /
          </motion.span>

          <motion.a
            href="https://instagram.com/muhammad.z.j"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-section__instagram"
            id="footer-instagram"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            Instagram
          </motion.a>
        </div>
      </div>

      {/* Social */}
      <motion.div
        className="footer-section__social"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
      >
        <a
          href="https://github.com/mz-pixel"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label="GitHub"
          id="footer-github"
        >
          <BsGithub />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mzamin/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label="LinkedIn"
          id="footer-linkedin"
        >
          <BsLinkedin />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.youtube.com/@muhammad-zamin"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label="YouTube"
          id="footer-youtube"
        >
          <BsYoutube />
          <span>YouTube</span>
        </a>
        <a
          href="/Muhammad Zamin resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label="Resume"
          id="footer-resume"
        >
          <BsFileText />
          <span>Resume</span>
        </a>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "footer-section__wrapper"),
  "contact",
);
