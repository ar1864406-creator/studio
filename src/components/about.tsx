import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function About() {
  const lifestyleImg = (PlaceHolderImages || []).find(img => img.id === 'about-lifestyle') || (PlaceHolderImages || [])[0];

  if (!lifestyleImg) return null;

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px]">
            <Image
              src={lifestyleImg.imageUrl}
              alt={lifestyleImg.description}
              fill
              className="object-cover"
              data-ai-hint={lifestyleImg.imageHint}
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 backdrop-blur-3xl rounded-full" />
          </div>
          <div className="space-y-8">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold">Our Story</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight">
              Quality, Comfort, and Modernity.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At YS Atelier, we believe that luxury isn't just about labels—it's about the feeling of perfectly tailored fabrics against your skin and the confidence that comes from a silhouette that speaks without saying a word.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the principles of minimalism and meticulous craftsmanship, we redefine everyday style for the discerning individual. Every piece in our collection is a testament to our commitment to quality, designed to last and intended to inspire.
            </p>
            <div className="flex items-center gap-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold font-headline mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Organic Cotton</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-headline mb-1">Hand</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Crafted Designs</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-headline mb-1">Elite</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Curated Looks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
