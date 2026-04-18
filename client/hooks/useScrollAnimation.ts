'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationFrameId = useRef<number | null>(null);
  const lastScrollProgress = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Optimized scroll listener with throttling
    const handleScroll = () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate scroll progress (0 to 1)
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
          
          // Only update if change is significant (avoids flickering)
          if (Math.abs(progress - lastScrollProgress.current) > 0.01) {
            lastScrollProgress.current = progress;
            setScrollProgress(progress);

            // Apply subtle parallax transform only when needed
            if (progress > 0.05 && progress < 0.95) {
              const offset = progress * 15; // Reduced from 30
              ref.current.style.transform = `translateY(${offset}px)`;
              ref.current.style.willChange = 'transform';
            } else {
              ref.current.style.transform = 'none';
              ref.current.style.willChange = 'auto';
            }
          }
        }
        animationFrameId.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { ref, isVisible, scrollProgress };
}

// Simplified hook for elements that should only animate once without scroll effects
export function useScrollVisibility() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate when scrolling DOWN (current scroll > last scroll)
        if (entry.isIntersecting && window.scrollY >= lastScrollY.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.05,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Track scroll direction
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { ref, isVisible };
}

