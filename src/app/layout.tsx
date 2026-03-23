import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'YS Atelier | YS Outfitters',
  description: 'Redefining Everyday Style with premium luxury fashion. Discover our curated collections and featured editorial looks.',
  icons: {
    icon: '/Gemini_Generated_Image_vlqii7vlqii7vlqi (1).png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
