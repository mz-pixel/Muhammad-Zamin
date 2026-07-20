import React, { useEffect } from "react";
import { Footer, Header, Skills, Work, About } from "./container";
import { Navbar } from "./components";
import { PageTransitionProvider } from "./components/PageTransition/PageTransitionContext";
import PageTransition from "./components/PageTransition/PageTransition";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { ThemeProvider } from "./context/ThemeContext";
import Lenis from "lenis";
import "./App.scss";

// Inner app
const AppInner = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector(".app__scroll-container");
    if (!scrollContainer) return;

    const lenis = new Lenis({
      wrapper: scrollContainer,
      content: scrollContainer,
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

  return (
    <>
      <div className="viewport-frame" />
      <CustomCursor />
      <PageTransition />
      <Navbar />
      <div className="app">
        <div className="app__scroll-container">
          <Header />
          <About />
          <Skills />
          <Work />
          <Footer />
        </div>
      </div>
    </>
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
