import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import SocialMedia from "../../components/SocialMedia";
import "./Header.scss";
import { FaLocationDot } from "react-icons/fa6";
import { HiDocument } from "react-icons/hi";
import { BsArrowDown } from "react-icons/bs";

const roles = ["Web Developer", "Software Engineer", "Full-Stack Dev"];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="hero">
      <motion.div
        className="hero__content"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__greeting">
          <span className="hero__greeting-line" />
          <span className="hero__greeting-text">Hello, I'm</span>
        </div>

        <h1 className="hero__name" id="hero-name">
          Muhammad<br />
          <span className="text-gradient">Zamin</span>
        </h1>

        <div className="hero__role">
          <span className="hero__role-prefix">I'm a </span>
          <span className="hero__role-typed" id="hero-role">
            {displayText}
            <span className="hero__cursor">|</span>
          </span>
        </div>

        <div className="hero__location">
          <FaLocationDot />
          <span>Toronto, Canada</span>
        </div>

        <div className="hero__social">
          <SocialMedia size="lg" />
        </div>

        <div className="hero__cta">
          <a href="#work" className="btn-gradient" id="hero-cta-work">
            View My Work
            <BsArrowDown />
          </a>
          <a href="/Muhammad Zamin resume.pdf" className="btn-outline" id="hero-cta-resume">
            <HiDocument />
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero__image-wrapper"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__image-ring">
          <div className="hero__image-glow" />
          <img
            src={images.profile}
            alt="Muhammad Zamin"
            className="hero__image"
            id="hero-profile-image"
          />
        </div>
        {/* Floating accent orbs */}
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--3"
          animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
