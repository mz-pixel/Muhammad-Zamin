import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import SocialMedia from "../../components/SocialMedia";
import "./Footer.scss";
import { HiMail, HiDocument } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("zamin@my.yorku.ca");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className="footer-section">
      <div className="footer-section__header">
        <h2 className="section-heading" id="footer-heading">
          Let's <span className="accent">Connect</span>
        </h2>
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          If you find my work impressive, I'd love to discuss further. Let's
          build something great together!
        </p>
      </div>

      <div className="footer-section__cards">
        {/* Email card */}
        <motion.button
          className="footer-card glass-card"
          onClick={copyToClipboard}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          id="footer-email-card"
        >
          <div className="footer-card__icon">
            {copied ? (
              <BsCheckCircleFill className="footer-card__check" />
            ) : (
              <HiMail />
            )}
          </div>
          <div className="footer-card__text">
            <span className="footer-card__label">
              {copied ? "Copied!" : "Email"}
            </span>
            <span className="footer-card__value">zamin@my.yorku.ca</span>
          </div>
        </motion.button>

        {/* Resume card */}
        <motion.a
          href="/Muhammad Zamin resume.pdf"
          className="footer-card footer-card--resume glass-card"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          id="footer-resume-card"
        >
          <div className="footer-card__icon">
            <HiDocument />
          </div>
          <div className="footer-card__text">
            <span className="footer-card__label">Resume</span>
            <span className="footer-card__value">Download PDF</span>
          </div>
        </motion.a>
      </div>

      {/* Social links */}
      <div className="footer-section__social">
        <SocialMedia size="lg" />
      </div>

      {/* Separator */}
      <div className="footer-section__separator" />
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "footer-section__wrapper"),
  "contact"
);
