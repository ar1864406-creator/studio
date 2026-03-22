'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="font-headline text-2xl font-bold tracking-[0.2em] text-foreground uppercase">
              YS ATELIER
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Luxury minimalism for the modern urban dweller. Crafting quality since 2010.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#collections" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="#looks" className="hover:text-primary transition-colors">Featured Looks</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8">Customer Care</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Size Guide</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Atelier Appointments</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-[0.2em] mb-8">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Subscribe to receive exclusive collection updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-card border border-border px-4 py-3 text-sm flex-grow focus:outline-none focus:border-primary"
              />
              <button className="bg-primary px-6 py-3 text-sm uppercase tracking-widest font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-border/50 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} YS Outfitters Atelier. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-primary">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
