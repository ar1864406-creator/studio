
import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="lg:hidden text-foreground hover:text-primary transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#collections" className="text-sm tracking-widest uppercase hover:text-primary transition-colors">Collections</Link>
            <Link href="#looks" className="text-sm tracking-widest uppercase hover:text-primary transition-colors">Looks</Link>
          </div>
        </div>

        <Link href="/" className="font-headline text-2xl font-bold tracking-[0.2em] text-foreground uppercase">
          YS ATELIER
        </Link>

        <div className="flex items-center gap-6">
          <Link href="#about" className="hidden lg:block text-sm tracking-widest uppercase hover:text-primary transition-colors">Our Story</Link>
          <button className="text-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-foreground hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
