'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Cinematic Flowing Gradient Background */}
      <div 
        className="absolute inset-0 z-0 animate-gradient-flow opacity-40 transition-opacity duration-1000"
        style={{
          background: 'linear-gradient(-45deg, #1A3C34, #285A48, #0D1F1A, #408A71)',
          backgroundSize: '400% 400%'
        }}
      />

      {/* Subtle Light Leak Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="animate-float">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-tight">
              <span className="block opacity-80 mb-2">YS</span>
              <span className="bg-gradient-to-r from-[#B0E4CC] via-white to-[#408A71] bg-clip-text text-transparent drop-shadow-2xl">
                OUTFITTERS
              </span>
            </h1>
          </div>
          
          <div className="space-y-6 animate-fade-in-up [animation-delay:400ms]">
            <p className="text-sm md:text-xl tracking-[0.6em] uppercase text-primary-foreground/90 font-medium drop-shadow-md">
              Redefining Everyday Style
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              {/* Moving Border Animation Wrapper */}
              <div className="relative group p-[2px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                {/* The Rotating Gradient Background (Border) */}
                <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E4CC_0%,#408A71_50%,#B0E4CC_100%)] opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <Button
                  asChild
                  size="lg"
                  className="relative bg-background/90 backdrop-blur-xl hover:bg-background/80 text-white border-none px-12 py-8 rounded-full text-sm uppercase tracking-[0.3em] font-bold transition-all"
                >
                  <Link href="#collections">Explore Collection</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
