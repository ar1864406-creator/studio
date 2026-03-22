import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const categories = [
  { id: 'collection-men', title: 'Men', href: '#' },
  { id: 'collection-women', title: 'Women', href: '#' },
  { id: 'collection-casual', title: 'Casual', href: '#' },
  { id: 'collection-streetwear', title: 'Streetwear', href: '#' },
];

export function Collections() {
  const images = PlaceHolderImages || [];
  
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-4 block">Categories</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold">The Collections</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Explore our curated selections designed for the modern lifestyle, blending luxury with everyday comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => {
            const img = images.find(i => i.id === cat.id) || images[0];
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative h-[600px] overflow-hidden block rounded-3xl"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={img.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl">
                  <h3 className="font-headline text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                    {cat.title}
                  </h3>
                  <div className="h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
