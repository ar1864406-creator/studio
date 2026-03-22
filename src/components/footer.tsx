'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
import React from 'react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[3rem] mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link href="/" className="font-headline text-3xl font-black tracking-[0.3em] text-foreground uppercase">
              YS OUTFITTERS
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Luxury minimalism for the modern urban dweller. Crafting quality since 2010.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 glass flex items-center justify-center rounded-xl hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-primary mb-10">Navigation</h4>
            <ul className="space-y-5 text-sm text-muted-foreground">
              {['Collections', 'Featured Looks', 'Our Story', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-primary transition-colors tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-primary mb-10">Customer Care</h4>
            <ul className="space-y-5 text-sm text-muted-foreground">
              {['Shipping & Returns', 'Size Guide', 'Atelier Appointments', 'Sustainability'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-primary transition-colors tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-primary mb-10">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive exclusive collection updates.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="glass bg-transparent border-white/5 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:border-primary transition-all"
              />
              <button className="bg-primary/40 hover:bg-primary/60 px-6 py-4 rounded-2xl text-xs uppercase tracking-[0.3em] font-bold transition-all border border-white/10">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            © {new Date().getFullYear()} YS Outfitters Atelier. All Rights Reserved.
          </p>
          <div className="flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <div className="w-12 h-12 glass flex items-center justify-center rounded-xl group-hover:border-primary transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
