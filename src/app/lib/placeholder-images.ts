
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = (data as any).placeholderImages || [
  {
    "id": "hero-model",
    "description": "High-end fashion model in an urban luxury setting",
    "imageUrl": "/S22a1d4081b2644d296f25a235ef2176b6",
    "imageHint": "fashion model luxury"
  },
  {
    "id": "collection-men",
    "description": "Sophisticated menswear portrait",
    "imageUrl": "/S22a1d4081b2644d296f25a235ef2176b6",
    "imageHint": "men fashion editorial"
  },
  {
    "id": "collection-casual",
    "description": "Minimalist casual aesthetic",
    "imageUrl": "https://picsum.photos/seed/casual-fashion/800/1200",
    "imageHint": "minimalist fashion casual"
  },
  {
    "id": "collection-streetwear",
    "description": "Modern streetwear look",
    "imageUrl": "https://picsum.photos/seed/street-fashion/800/1200",
    "imageHint": "luxury streetwear fashion"
  }
];
