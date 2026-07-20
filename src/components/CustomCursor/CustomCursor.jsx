import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.scss";

const LERP_FACTOR = 0.12; // ring lag (lower = more lag)

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const rafId   = useRef(null);
  const [hovered, setHovered]   = useState(false);
  const [onNavbar, setOnNavbar] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    let navbarEl = null;

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      if (!navbarEl) {
        navbarEl = document.querySelector(".navbar");
      }

      if (navbarEl) {
        const rect = navbarEl.getBoundingClientRect();
        const inside = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        setOnNavbar(inside);
      } else {
        setOnNavbar(false);
      }
    };

    const onMouseEnterLink = () => setHovered(true);
    const onMouseLeaveLink = () => setHovered(false);

    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * LERP_FACTOR;
      ring.current.y += (mouse.current.y - ring.current.y) * LERP_FACTOR;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const attachHoverListeners = () => {
      const els = document.querySelectorAll("a, button, [data-cursor-hover]");
      els.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    // Re-attach on DOM changes (for dynamic content)
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachHoverListeners();

    window.addEventListener("mousemove", onMouseMove);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
      const els = document.querySelectorAll("a, button, [data-cursor-hover]");
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot ${onNavbar ? "cursor-dot--navbar" : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${hovered ? "cursor-ring--hover" : ""} ${onNavbar ? "cursor-ring--navbar" : ""}`} />
    </>
  );
};

export default CustomCursor;
