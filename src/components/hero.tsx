import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const heroImage = (PlaceHolderImages || []).find(img => img.id === 'hero-model') || {
    imageUrl: 'https://picsum.photos/seed/fashion-hero/1920/1080',
    description: 'Fashion Hero',
    imageHint: 'fashion model'
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Dynamic Animated Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full animate-pulse-glow z-[5]" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent/10 blur-[120px] rounded-full animate-float z-[5] [animation-delay:2s]" />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="animate-float">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-tight">
              YS OUTFITTERS
            </h1>
          </div>
          
          <div className="space-y-6 animate-fade-in-up [animation-delay:400ms]">
            <p className="text-sm md:text-xl tracking-[0.6em] uppercase text-primary-foreground/90 font-medium drop-shadow-md">
              Redefining Everyday Style
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary/30 backdrop-blur-xl hover:bg-primary/50 text-white border border-white/10 px-12 py-8 rounded-full text-sm uppercase tracking-[0.3em] font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]"
              >
                <Link href="#collections">Explore Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Shifted slightly left */}
      <div className="absolute bottom-6 left-[40%] -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-white/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
