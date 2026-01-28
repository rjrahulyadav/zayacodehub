'use client';

import { useEffect } from 'react';

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
        // Don't run on touch-only devices
        return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById('cursor-glow');
      if (glow) {
        // Using requestAnimationFrame for performance
        window.requestAnimationFrame(() => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div id="cursor-glow" className="cursor-glow hidden md:block"></div>;
}
