import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Collections } from '@/components/collections';
import { FeaturedLooks } from '@/components/featured-looks';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedLooks />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
