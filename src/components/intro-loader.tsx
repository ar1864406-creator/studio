'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Immediate trigger for progress bar
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 50);

    // Fade out start - much faster now
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800); 

    // Complete removal from DOM
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2400); 

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700",
        !isVisible && "animate-intro-fade-out pointer-events-none"
      )}
    >
      <div className="text-center relative px-6">
        {/* Background Atmosphere Glow - Hardware Accelerated */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full animate-pulse-glow" />
        
        {/* Animated Brand Name */}
        <h1 className="relative font-headline text-3xl md:text-6xl lg:text-7xl font-black text-white uppercase animate-tracking-in-expand drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          YS OUTFITTERS
        </h1>
        
        {/* Luxury Loading Bar */}
        <div className="mt-12 relative h-[2px] w-40 md:w-56 mx-auto overflow-hidden bg-white/5 rounded-full border border-white/5">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/50 via-primary to-primary shadow-[0_0_15px_rgba(64,138,113,0.8)] transition-all duration-[1600ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-6 text-[9px] uppercase tracking-[0.5em] text-primary/60 animate-pulse [animation-duration:2s]">
          Atelier of Excellence
        </p>
      </div>
    </div>
  );
}
