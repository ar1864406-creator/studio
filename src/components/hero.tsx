
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-model');

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Editorial Background Image */}
      {heroImg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            priority
            className="object-cover"
            data-ai-hint={heroImg.imageHint}
          />
          {/* Subtle overlay for luxury feel and text readability */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="animate-float">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-tight">
              <span className="block opacity-80 mb-2">YS</span>
              <span className="bg-gradient-to-r from-[#285A48] via-[#B0E4CC] to-[#408A71] bg-clip-text text-transparent animate-gradient-x">
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
