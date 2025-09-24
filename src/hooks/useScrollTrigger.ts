import { useState, useEffect } from 'react';

interface UseScrollTriggerOptions {
  threshold?: number; // percentage of page scrolled (0-100)
  delay?: number; // delay before triggering (in ms)
  once?: boolean; // only trigger once per session
}

export const useScrollTrigger = (options: UseScrollTriggerOptions = {}) => {
  const {
    threshold = 30, // 30% scrolled
    delay = 2000, // 2 seconds delay
    once = true
  } = options;

  const [shouldShow, setShouldShow] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (once && hasTriggered) return;

    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      if (scrollPercentage >= threshold) {
        // Clear any existing timeout
        clearTimeout(timeoutId);
        
        // Set timeout to show modal after delay
        timeoutId = setTimeout(() => {
          setShouldShow(true);
          if (once) {
            setHasTriggered(true);
          }
        }, delay);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold, delay, once, hasTriggered]);

  const reset = () => {
    setShouldShow(false);
    setHasTriggered(false);
  };

  return {
    shouldShow,
    reset,
    hasTriggered
  };
};
