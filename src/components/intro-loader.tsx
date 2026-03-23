'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Duration of the full intro

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3300); // Duration + fade out time

    return () => {
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
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-glow" />
        <h1 className="relative font-headline text-4xl md:text-7xl font-black tracking-[0.5em] text-white uppercase animate-tracking-in-expand">
          YS OUTFITTERS
        </h1>
        <div className="mt-4 h-px w-0 bg-primary mx-auto transition-all duration-1000 delay-500 group-data-[state=loading]:w-full animate-breath-glow" 
             style={{ width: isVisible ? '60%' : '0%' }}
        />
      </div>
    </div>
  );
}