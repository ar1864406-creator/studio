import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-model') || {
    imageUrl: 'https://picsum.photos/seed/fashion-hero/1920/1080',
    description: 'Fashion Hero',
    imageHint: 'fashion model'
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight animate-fade-in-up text-white">
          YS Outfitters
        </h1>
        <p className="text-lg md:text-2xl mb-12 tracking-[0.3em] uppercase opacity-90 animate-fade-in-up [animation-delay:200ms] text-white">
          Redefining Everyday Style
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:400ms]">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 rounded-none text-base uppercase tracking-widest transition-all hover:scale-105"
          >
            <Link href="#collections">Explore Collection</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.5em]">Scroll</span>
        <div className="w-px h-12 bg-white/30" />
      </div>
    </section>
  );
}
