'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { getAIFashionEditorial } from '@/app/actions/content';
import { Loader2 } from 'lucide-react';

const featuredData = [
  {
    id: 'look-1',
    name: 'Metropolitan Midnight',
    description: 'A deep velvet tailored blazer paired with silk tapered trousers.',
    keywords: ['elegant', 'midnight', 'tailored']
  },
  {
    id: 'look-2',
    name: 'Urban Transit Shell',
    description: 'Minimalist technical outerwear with breathable linen underlays.',
    keywords: ['technical', 'urban', 'minimalist']
  },
  {
    id: 'look-3',
    name: 'Morning Solstice',
    description: 'Heavy knit cream sweater over flowing cashmere skirts.',
    keywords: ['knitwear', 'warmth', 'premium']
  }
];

export function FeaturedLooks() {
  const [aiContent, setAiContent] = useState<Record<string, { editorialCaption: string; conciseDescription: string }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAI() {
      const results: Record<string, any> = {};
      for (const look of featuredData) {
        try {
          const editorial = await getAIFashionEditorial(look.name, look.description, look.keywords);
          results[look.id] = editorial;
        } catch (e) {
          results[look.id] = {
            editorialCaption: "Refined elegance for the modern individual.",
            conciseDescription: "Discover timeless silhouettes."
          };
        }
      }
      setAiContent(results);
      setLoading(false);
    }
    fetchAI();
  }, []);

  return (
    <section id="looks" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-4 block">Editorial</span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">Featured Looks</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {featuredData.map((look) => {
            const img = PlaceHolderImages?.find(i => i.id === look.id) || {
              imageUrl: 'https://picsum.photos/seed/look/600/800',
              description: look.name,
              imageHint: 'fashion look'
            };
            const content = aiContent[look.id];

            return (
              <div key={look.id} className="group">
                <div className="relative h-[500px] mb-8 overflow-hidden">
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    data-ai-hint={img.imageHint}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-headline text-2xl font-bold">{look.name}</h3>
                  <div className="h-px w-12 bg-primary/40" />
                  {loading ? (
                    <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm italic">YS Editorial AI crafting insights...</span>
                    </div>
                  ) : (
                    <>
                      <p className="text-foreground/90 font-medium leading-relaxed italic">
                        "{content?.editorialCaption}"
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {content?.conciseDescription}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
