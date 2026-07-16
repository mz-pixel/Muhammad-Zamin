import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import { usePageTransition } from "../../components/PageTransition/PageTransitionContext";
import "./Footer.scss";

const Footer = () => {
  const { triggerTransition } = usePageTransition();

  const handleEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:zamin@my.yorku.ca";
  };

  return (
    <div className="footer-section">
      {/* Headline */}
      <motion.h2
        className="footer-section__headline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        id="footer-heading"
      >
        Let's build something
        <br />
        <em>meaningful.</em>
      </motion.h2>

      {/* Email */}
      <motion.a
        href="mailto:zamin@my.yorku.ca"
        className="footer-section__email"
        onClick={handleEmail}
        id="footer-email"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        zamin@my.yorku.ca →
      </motion.a>

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
          href="https://www.linkedin.com/in/muhammad-zamin-4b4998209/"
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
          href="https://www.youtube.com/@mz-pixel"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
          aria-label="YouTube"
          id="footer-youtube"
        >
          <BsYoutube />
          <span>YouTube</span>
        </a>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "footer-section__wrapper"),
  "contact"
);
