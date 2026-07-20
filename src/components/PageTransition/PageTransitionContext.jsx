import React, { createContext, useContext, useState, useCallback } from "react";

const PageTransitionContext = createContext(null);

export const usePageTransition = () => {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error("usePageTransition must be inside PageTransitionProvider");
  return ctx;
};

export const PageTransitionProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [pendingCallback, setPendingCallback] = useState(null);

  /**
   * triggerTransition(callback)
   * Plays the split-wipe MZ animation, then fires callback
   * (e.g. open URL, open PDF)
   */
  const triggerTransition = useCallback((callback) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPendingCallback(() => callback);
  }, [isAnimating]);

  const onAnimationMidpoint = useCallback(() => {
    if (pendingCallback) {
      pendingCallback();
      setPendingCallback(null);
    }
  }, [pendingCallback]);

  const onAnimationComplete = useCallback(() => {
    setIsAnimating(false);
    setIsFirstLoad(false);
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{ isAnimating, isFirstLoad, triggerTransition, onAnimationMidpoint, onAnimationComplete }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};

export default PageTransitionContext;
