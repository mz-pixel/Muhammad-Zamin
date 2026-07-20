import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import SocialMedia from "../../components/SocialMedia";
import { usePageTransition } from "../../components/PageTransition/PageTransitionContext";
import "./Header.scss";

const Header = () => {
  const { triggerTransition } = usePageTransition();

  const scrollToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleResume = (e) => {
    e.preventDefault();
    triggerTransition(() => window.open("/Muhammad Zamin resume.pdf", "_blank"));
  };

  return (
    <div className="hero">
      {/* ── Left: Text ── */}
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Hero Intro */}
        <div className="hero__intro">
          <h1 className="hero__name" id="hero-name">
            Muhammad Zamin
          </h1>
          <div className="hero__role" id="hero-role">
            Full Stack Developer
          </div>
        </div>

        {/* Location */}
        <div className="hero__meta">
          <span className="hero__location">Toronto, Canada</span>
        </div>

        {/* Social */}
        <div className="hero__social">
          <SocialMedia size="md" />
        </div>

        {/* CTA */}
        <div className="hero__cta">
          <a
            href="#work"
            className="btn-editorial btn-editorial--accent"
            id="hero-cta-work"
            onClick={scrollToWork}
          >
            Selected Work →
          </a>
          <a
            href="/Muhammad Zamin resume.pdf"
            className="btn-editorial"
            id="hero-cta-resume"
            onClick={handleResume}
          >
            Resume →
          </a>
        </div>
      </motion.div>

      {/* ── Right: Portrait ── */}
      <motion.div
        className="hero__image-wrapper"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__image-frame">
          <img
            src={images.profile}
            alt="Muhammad Zamin"
            className="hero__image"
            id="hero-profile-image"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
