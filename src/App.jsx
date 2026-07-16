import React, { useEffect } from "react";
import { Footer, Header, Skills, Work, About } from "./container";
import { Navbar } from "./components";
import { PageTransitionProvider } from "./components/PageTransition/PageTransitionContext";
import PageTransition from "./components/PageTransition/PageTransition";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { usePageTransition } from "./components/PageTransition/PageTransitionContext";
import { ThemeProvider } from "./context/ThemeContext";
import Lenis from "lenis";
import "./App.scss";

// Inner app — needs access to transition context for first-load animation
const AppInner = () => {
  const { triggerTransition } = usePageTransition();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    // Play once per session on first visit
    const visited = sessionStorage.getItem("mz-visited");
    if (!visited) {
      sessionStorage.setItem("mz-visited", "1");
      // Small delay so the page is rendered before the transition fires
      const t = setTimeout(() => triggerTransition(() => {}), 400);
      return () => clearTimeout(t);
    }
  }, [triggerTransition]);

  return (
    <div className="app">
      <CustomCursor />
      <PageTransition />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <PageTransitionProvider>
      <AppInner />
    </PageTransitionProvider>
  </ThemeProvider>
);

export default App;
