'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { getAIFashionEditorial } from '@/app/actions/content';
import { Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryDetailProps {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  imageId: string;
  reverse?: boolean;
}

export function CategoryDetail({ id, name, description, keywords, imageId, reverse }: CategoryDetailProps) {
  const [aiContent, setAiContent] = useState<{ editorialCaption: string; conciseDescription: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAI() {
      try {
        const result = await getAIFashionEditorial(name, description, keywords);
        setAiContent(result);
      } catch (e) {
        setAiContent({
          editorialCaption: "Refined elegance redefined for the modern individual.",
          conciseDescription: "Discover timeless silhouettes and quality materials."
        });
      } finally {
        setLoading(false);
      }
    }
    fetchAI();
  }, [name, description, keywords]);

  const img = PlaceHolderImages?.find(i => i.id === imageId) || PlaceHolderImages[0];

  return (
    <section id={id} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
          reverse && "lg:flex-row-reverse"
        )}>
          {/* Image Container */}
          <div className={cn(
            "relative h-[600px] md:h-[800px] glass p-4 rounded-[3rem]",
            reverse ? "lg:order-2" : "lg:order-1"
          )}>
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem]">
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint={img.imageHint}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 w-48 h-48 glass-primary rounded-full flex items-center justify-center p-6 text-center border-white/20 animate-float">
              <p className="font-headline text-lg font-bold italic leading-tight">{name} Essential</p>
            </div>
          </div>

          {/* Content Container */}
          <div className={cn(
            "space-y-10",
            reverse ? "lg:order-1" : "lg:order-2"
          )}>
            <div className="space-y-4">
              <span className="text-primary text-sm uppercase tracking-[0.4em] font-bold block">Editorial Focus</span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight uppercase tracking-tight">
                {name} <span className="text-primary/50 italic">Look.</span>
              </h2>
            </div>

            <div className="glass p-8 rounded-[2rem] border-white/5 space-y-6">
              {loading ? (
                <div className="flex flex-col gap-4 animate-pulse">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-4 bg-white/10 rounded w-1/2" />
                  <div className="flex items-center gap-2 text-primary/60">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs italic tracking-widest uppercase">YS Atelier AI crafting vision...</span>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-2xl font-headline italic text-foreground leading-relaxed">
                    "{aiContent?.editorialCaption}"
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] leading-loose">
                    {aiContent?.conciseDescription}
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {keywords.map((kw, i) => (
                <span key={i} className="px-4 py-2 glass-dark border-white/10 rounded-full text-[10px] uppercase tracking-widest text-primary font-bold">
                  {kw}
                </span>
              ))}
            </div>

            <div className="pt-8">
              <Button className="bg-primary/20 hover:bg-primary/40 text-white rounded-full px-10 py-7 text-xs uppercase tracking-[0.3em] font-bold border border-white/10 group">
                Shop {name} Series
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
