import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function About() {
  const lifestyleImg = (PlaceHolderImages || []).find(img => img.id === 'about-lifestyle') || (PlaceHolderImages || [])[0];

  if (!lifestyleImg) return null;

  return (
    <section id="about" className="py-24 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[700px] glass p-4 rounded-[3rem]">
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src={lifestyleImg.imageUrl}
                alt={lifestyleImg.description}
                fill
                className="object-cover"
                data-ai-hint={lifestyleImg.imageHint}
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-primary rounded-full flex items-center justify-center p-8 text-center border-white/20">
              <p className="font-headline text-xl font-bold italic">Curated Excellence</p>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.4em] font-bold mb-4 block">Our Story</span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight">
                Quality, Comfort, and Modernity.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At YS Atelier, we believe that luxury isn't just about labels—it's about the feeling of perfectly tailored fabrics against your skin and the confidence that comes from a silhouette that speaks without saying a word.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { val: '100%', label: 'Organic Cotton' },
                { val: 'Hand', label: 'Crafted Designs' },
                { val: 'Elite', label: 'Curated Looks' }
              ].map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl text-center">
                  <p className="text-3xl font-bold font-headline text-primary mb-1">{stat.val}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
