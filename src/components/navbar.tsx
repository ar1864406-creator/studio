import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto h-20 glass rounded-full flex items-center justify-between px-10">
        <div className="flex items-center gap-8">
          <button className="lg:hidden text-foreground hover:text-primary transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#collections" className="text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors">Collections</Link>
            <Link href="#looks" className="text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors">Looks</Link>
          </div>
        </div>

        <Link href="/" className="font-headline text-xl font-black tracking-[0.3em] text-foreground uppercase">
          YS OUTFITTERS
        </Link>

        <div className="flex items-center gap-6">
          <Link href="#about" className="hidden lg:block text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors">Our Story</Link>
          <button className="text-foreground hover:text-primary transition-colors p-2 glass rounded-full">
            <Search className="w-4 h-4" />
          </button>
          <button className="text-foreground hover:text-primary transition-colors p-2 glass rounded-full">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
