import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ammyscoffee.com'),
  title: "Ammy's Coffee | Two Beans = One Bond | Official Brand & Franchise Flagship",
  description: "Specialty 100% Arabica craft coffee, artisanal croissants, and trending desserts across 5 prime Delhi NCR outlets (GK-1, Galleria Gurugram, SDA Market, Punjabi Bagh, Gujranwala Town). Discover our cafés & franchise opportunities.",
  keywords: [
    "Ammy's Coffee",
    "Specialty Coffee Delhi NCR",
    "Café in GK-1",
    "Café Galleria Gurugram",
    "SDA Market Coffee",
    "Coffee Franchise India",
    "100% Arabica",
  ],
  authors: [{ name: "Ammy's Coffee" }],
  openGraph: {
    title: "Ammy's Coffee — From Beans to Bonds",
    description: "Brewing conversations and cultivating craft across Delhi NCR.",
    url: "https://ammyscoffee.com",
    siteName: "Ammy's Coffee",
    images: [
      {
        url: "/assets/photos/cafe_interior_1.webp",
        width: 1200,
        height: 630,
        alt: "Ammy's Coffee Interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-[#121313] text-[#F5F5F7] min-h-screen selection:bg-[#C88A58]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

