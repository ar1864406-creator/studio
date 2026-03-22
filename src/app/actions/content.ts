
'use server';

import { generateFashionEditorialCaptions } from '@/ai/flows/generate-fashion-editorial-captions';

export async function getAIFashionEditorial(productName: string, description: string, keywords: string[]) {
  try {
    const result = await generateFashionEditorialCaptions({
      productName,
      description,
      keywords,
      targetAudience: 'sophisticated urban trendsetters'
    });
    return result;
  } catch (error) {
    console.error('Failed to generate AI editorial content:', error);
    return {
      editorialCaption: "Experience the pinnacle of modern craftsmanship. A piece designed for those who appreciate the finer things in life.",
      conciseDescription: "Timeless elegance met with contemporary design."
    };
  }
}
