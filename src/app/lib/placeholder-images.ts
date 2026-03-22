
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
    "imageUrl": "/S22a1d4081b2644d296f25a235ef2176b6.webp",
    "imageHint": "fashion model luxury"
  },
  {
    "id": "collection-men",
    "description": "Sophisticated menswear portrait",
    "imageUrl": "/Flannel_shirt___Types_of_shirts_for_men___AFRAZ_480x480.webp",
    "imageHint": "men fashion flannel"
  },
  {
    "id": "collection-casual",
    "description": "Minimalist casual chic style",
    "imageUrl": "/Essential-Fashion-Items-For-Men-To-Create-A-Casual-Chic-Style-Main-Image.jpg",
    "imageHint": "casual chic fashion"
  },
  {
    "id": "collection-streetwear",
    "description": "Modern streetwear look",
    "imageUrl": "/S22a1d4081b2644d296f25a235ef2176b6.webp",
    "imageHint": "luxury streetwear fashion"
  }
];
