import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const galleryItems = [
  { id: 'gallery-1' },
  { id: 'gallery-2' },
  { id: 'gallery-3' },
  { id: 'gallery-4' },
];

export function Gallery() {
  const images = PlaceHolderImages || [];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center mb-12">
        <div className="flex flex-col items-center gap-4">
          <Instagram className="w-8 h-8 text-primary" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-widest">Follow @YSAtelier</h2>
          <p className="text-muted-foreground">Join our community for daily inspiration and exclusive previews.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {galleryItems.map((item) => {
          const img = images.find(i => i.id === item.id) || images[0];
          if (!img) return null;
          return (
            <div key={item.id} className="relative aspect-square group overflow-hidden">
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
