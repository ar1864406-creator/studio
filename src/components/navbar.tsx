
'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#collections', label: 'Collections', id: 'collections' },
  { href: '#looks', label: 'Editorial', id: 'looks' },
  { href: '#about', label: 'Our Story', id: 'about' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = useMemo(() => {
    return navLinks.findIndex(link => link.id === activeSection);
  }, [activeSection]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto h-20 glass rounded-full flex items-center justify-between px-10 relative">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="font-headline text-lg md:text-xl font-black tracking-[0.1em] text-foreground uppercase whitespace-nowrap transition-colors hover:text-primary -translate-y-1.5"
          >
            YS OUTFITTERS<span className="text-primary animate-blink text-4xl md:text-5xl leading-none inline-block align-baseline ml-0.5 drop-shadow-[0_0_25px_rgba(64,138,113,1)] drop-shadow-[0_0_10px_rgba(64,138,113,0.8)]">.</span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) with Sliding Highlight */}
        <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 p-1.5 glass-dark rounded-full overflow-hidden">
          <div className="relative flex items-center gap-1">
            {/* Sliding White Box Highlight */}
            <div 
              className={cn(
                "absolute h-full rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500 ease-in-out z-0",
                activeIndex === -1 ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
              style={{
                width: '110px',
                left: activeIndex !== -1 ? `${activeIndex * (110 + 4)}px` : '0px', // 110px width + 4px gap
              }}
            />
            
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative z-10 text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 px-6 py-2.5 rounded-full flex items-center justify-center min-w-[110px]",
                  activeSection === link.id 
                    ? "text-background font-bold" 
                    : "text-foreground/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Mobile Menu Button / Actions */}
        <div className="flex items-center">
          <button className="lg:hidden text-foreground hover:text-primary transition-colors p-2 glass rounded-full">
            <span className="sr-only">Open Menu</span>
            <Menu className="w-5 h-5" />
          </button>
          {/* Spacer for desktop balance */}
          <div className="hidden lg:block w-32"></div>
        </div>
      </div>
    </nav>
  );
}
