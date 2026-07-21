import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "./PageTransitionContext";
import "./PageTransition.scss";

/* ─── Timing constants ──────────────────────────────────────────── */
const PANEL_DURATION   = 0.19;  // how long each panel slides
const MIDPOINT_DELAY   = 0.20;  // when to fire the callback (just after panels meet)
const EXIT_DELAY       = 0.31;  // when panels start exiting
const TOTAL_DURATION   = 0.55;  // full animation

const panelVariants = {
  left: {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: PANEL_DURATION, ease: [0.76, 0, 0.24, 1] } },
    exit:   { x: "-100%", transition: { duration: PANEL_DURATION, ease: [0.76, 0, 0.24, 1], delay: EXIT_DELAY - PANEL_DURATION } },
  },
  right: {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: PANEL_DURATION, ease: [0.76, 0, 0.24, 1] } },
    exit:   { x: "100%", transition: { duration: PANEL_DURATION, ease: [0.76, 0, 0.24, 1], delay: EXIT_DELAY - PANEL_DURATION } },
  },
};

const initialsVariants = {
  hidden:  { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.14, delay: PANEL_DURATION } },
  exit:    { opacity: 0, transition: { duration: 0.10 } },
};

const PageTransition = () => {
  const { isAnimating, isFirstLoad, onAnimationMidpoint, onAnimationComplete } = usePageTransition();

  useEffect(() => {
    if (!isAnimating) return;
    const midTimer = setTimeout(onAnimationMidpoint, MIDPOINT_DELAY * 1000);
    const endTimer = setTimeout(onAnimationComplete, TOTAL_DURATION * 1000);
    return () => {
      clearTimeout(midTimer);
      clearTimeout(endTimer);
    };
  }, [isAnimating, onAnimationMidpoint, onAnimationComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="page-transition" aria-hidden="true">
          {/* Left panel */}
          <motion.div
            className="page-transition__panel page-transition__panel--left"
            variants={panelVariants.left}
            initial={isFirstLoad ? "visible" : "hidden"}
            animate="visible"
            exit="exit"
          />
          {/* Right panel */}
          <motion.div
            className="page-transition__panel page-transition__panel--right"
            variants={panelVariants.right}
            initial={isFirstLoad ? "visible" : "hidden"}
            animate="visible"
            exit="exit"
          />
          {/* MZ initials */}
          <motion.span
            className="page-transition__initials"
            variants={initialsVariants}
            initial={isFirstLoad ? "visible" : "hidden"}
            animate="visible"
            exit="exit"
          >
            MZ
          </motion.span>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
