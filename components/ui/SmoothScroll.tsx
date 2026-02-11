'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      lastScrollY = window.scrollY;
      ticking = false;

      // Add smooth fade to elements as they come into view
      const elements = document.querySelectorAll('section, article, .card');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
          element.classList.add('in-view');
        }
      });
    };

    const requestTick = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    const onScroll = () => {
      requestTick();
    };

    // Initial check
    updateScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
