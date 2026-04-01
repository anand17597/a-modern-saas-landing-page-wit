import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * Applies an 'is-visible' class to trigger CSS transitions.
 *
 * @param {number} threshold - A single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
 * @param {string} rootMargin - Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
 * @returns {{ ref: React.RefObject<HTMLElement>, isVisible: boolean }} An object containing a ref to attach to the element and a boolean indicating its visibility.
 */
export function useScrollAnimation(threshold = 0.1, rootMargin = '0px'): { ref: React.RefObject<HTMLElement>, isVisible: boolean } {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // defaults to the viewport
        rootMargin,
        threshold,
      }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]); // Re-run effect if threshold or rootMargin changes

  return { ref, isVisible };
}