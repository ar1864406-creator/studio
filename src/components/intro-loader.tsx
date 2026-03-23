'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the progress bar growth almost immediately
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Duration of the full intro

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3300); // Duration + fade out time

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
        "fixed inset-0 z-[100] flex items-center justify-center bg-background",
        !isVisible && "animate-intro-fade-out"
      )}
    >
      <div className="text-center relative">
        {/* Background Atmosphere Glow */}
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-glow" />
        
        {/* Animated Brand Name */}
        <h1 className="relative font-headline text-4xl md:text-7xl font-black tracking-[0.5em] text-white uppercase animate-tracking-in-expand">
          YS OUTFITTERS
        </h1>
        
        {/* Luxury Loading Bar */}
        <div className="mt-10 relative h-[1px] w-48 md:w-64 mx-auto overflow-hidden bg-white/5 rounded-full border border-white/5">
          <div 
            className="absolute top-0 left-0 h-full bg-primary transition-all duration-[2300ms] ease-in-out shadow-[0_0_20px_rgba(64,138,113,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-primary/40 animate-pulse">
          Crafting Excellence
        </p>
      </div>
    </div>
  );
}
