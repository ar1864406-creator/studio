import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Collections } from '@/components/collections';
import { CategoryDetail } from '@/components/category-detail';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Collections />
      
      {/* Detailed Category Sections */}
      <CategoryDetail 
        id="men"
        name="Men"
        description="Premium tailored essentials featuring organic cotton flannel and structured silhouettes for the modern man."
        keywords={['tailored', 'premium', 'organic']}
        imageId="collection-men"
      />
      
      <CategoryDetail 
        id="casual"
        name="Casual"
        description="Effortless chic styles that bridge the gap between lounge and luxury. Designed for everyday movement."
        keywords={['minimalist', 'relaxed', 'daily']}
        imageId="collection-casual"
        reverse
      />
      
      <CategoryDetail 
        id="streetwear"
        name="Streetwear"
        description="Urban-inspired high-end fashion with technical details and bold, sophisticated silhouettes."
        keywords={['technical', 'urban', 'bold']}
        imageId="collection-streetwear"
      />

      <About />
      <Contact />
      <Footer />
    </main>
  );
}
