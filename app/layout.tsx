import type { Metadata, Viewport } from 'next';
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
  metadataBase: new URL('https://www.ammyscoffee.com'),
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
  alternates: {
    canonical: 'https://www.ammyscoffee.com',
  },
  icons: {
    icon: '/assets/logos/icon.png',
    apple: '/assets/logos/apple-icon.png',
  },
  openGraph: {
    title: "Ammy's Coffee — From Beans to Bonds",
    description: "Brewing conversations and cultivating craft across Delhi NCR.",
    url: "https://www.ammyscoffee.com",
    siteName: "Ammy's Coffee",
    images: [
      {
        url: "/assets/photos/cafe_interior_1.webp",
        width: 1120,
        height: 1400,
        alt: "Ammy's Coffee Interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ammy's Coffee — From Beans to Bonds",
    description: 'Brewing conversations and cultivating craft across Delhi NCR.',
    images: ['/assets/photos/cafe_interior_1.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#121313',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-espresso text-cream selection:bg-caramel/30 selection:text-cream">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-caramel focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:text-espresso focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

