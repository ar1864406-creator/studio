import Link from 'next/link';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto h-20 glass rounded-full flex items-center justify-between px-10 relative">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-headline text-lg md:text-xl font-black tracking-[0.1em] text-foreground uppercase whitespace-nowrap transition-colors hover:text-primary -translate-y-1.5">
            YS OUTFITTERS<span className="text-primary animate-blink text-4xl md:text-5xl leading-none inline-block align-baseline ml-0.5 drop-shadow-[0_0_25px_rgba(64,138,113,1)] drop-shadow-[0_0_10px_rgba(64,138,113,0.8)]">.</span>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="#collections" className="text-[10px] tracking-[0.2em] uppercase hover:text-primary transition-colors">
            Collections
          </Link>
          <Link href="#looks" className="text-[10px] tracking-[0.2em] uppercase hover:text-primary transition-colors">
            Editorial
          </Link>
          <Link href="#about" className="text-[10px] tracking-[0.2em] uppercase hover:text-primary transition-colors">
            Our Story
          </Link>
          <Link href="#contact" className="text-[10px] tracking-[0.2em] uppercase hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Right: Mobile Menu Button / Actions */}
        <div className="flex items-center">
          <button className="lg:hidden text-foreground hover:text-primary transition-colors p-2 glass rounded-full">
            <span className="sr-only">Open Menu</span>
            <Menu className="w-5 h-5" />
          </button>
          {/* Spacer for desktop balance or potential action buttons */}
          <div className="hidden lg:block w-32"></div>
        </div>
      </div>
    </nav>
  );
}
