'use server';
/**
 * @fileOverview A generative AI tool to craft evocative, on-brand editorial captions and concise descriptions for fashion looks and collections.
 *
 * - generateFashionEditorialCaptions - A function that generates editorial captions and concise descriptions.
 * - GenerateFashionEditorialCaptionsInput - The input type for the generateFashionEditorialCaptions function.
 * - GenerateFashionEditorialCaptionsOutput - The return type for the generateFashionEditorialCaptions function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateFashionEditorialCaptionsInputSchema = z.object({
  productName: z.string().describe('The name of the fashion item or collection.'),
  description: z.string().describe('A detailed description of the fashion item or collection, including its style, materials, and inspiration.'),
  keywords: z.array(z.string()).describe('A list of keywords or themes associated with the item or collection (e.g., "elegant", "streetwear", "sustainable").'),
  targetAudience: z.string().optional().describe('Optional: The target demographic or aesthetic this item appeals to (e.g., "sophisticated urban women", "youthful trendsetters").'),
});
export type GenerateFashionEditorialCaptionsInput = z.infer<typeof GenerateFashionEditorialCaptionsInputSchema>;

const GenerateFashionEditorialCaptionsOutputSchema = z.object({
  editorialCaption: z.string().describe('An evocative, on-brand, and luxurious editorial caption for the fashion item or collection.'),
  conciseDescription: z.string().describe('A brief, impactful, and stylish description suitable for web display.'),
});
export type GenerateFashionEditorialCaptionsOutput = z.infer<typeof GenerateFashionEditorialCaptionsOutputSchema>;

const generateCaptionPrompt = ai.definePrompt({
  name: 'generateFashionEditorialCaptionsPrompt',
  input: { schema: GenerateFashionEditorialCaptionsInputSchema },
  output: { schema: GenerateFashionEditorialCaptionsOutputSchema },
  prompt: `You are a sophisticated content creator for a luxury fashion brand named "YS Outfitters". Your goal is to craft evocative, on-brand editorial captions and concise descriptions that resonate with a minimal, high-end aesthetic.

The brand focuses on quality, comfort, and modern design, redefining everyday style. The tone should be elegant, aspirational, and slightly understated.

Product Name: "{{{productName}}}"
Description: "{{{description}}}"
Keywords: {{{keywords}}}
{{#if targetAudience}}Target Audience: {{{targetAudience}}}{{/if}}

Based on the provided information, generate:
1.  An "editorialCaption": An evocative, on-brand, and luxurious editorial caption (2-3 sentences) that highlights the essence and appeal of the item/collection, suitable for a premium landing page.
2.  A "conciseDescription": A brief, impactful, and stylish description (1-2 sentences) suitable for web display, focusing on key features or feelings.

Ensure the output is in JSON format, matching the specified output schema.
`,
});

const generateFashionEditorialCaptionsFlow = ai.defineFlow(
  {
    name: 'generateFashionEditorialCaptionsFlow',
    inputSchema: GenerateFashionEditorialCaptionsInputSchema,
    outputSchema: GenerateFashionEditorialCaptionsOutputSchema,
  },
  async (input) => {
    const { output } = await generateCaptionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate editorial captions and descriptions.');
    }
    return output;
  }
);

export async function generateFashionEditorialCaptions(
  input: GenerateFashionEditorialCaptionsInput
): Promise<GenerateFashionEditorialCaptionsOutput> {
  return generateFashionEditorialCaptionsFlow(input);
}
