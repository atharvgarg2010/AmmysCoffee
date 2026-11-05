# TRD.md — Technical Requirement Document: Ammy's Coffee Brand Platform

**Project:** Ammy's Coffee Official Brand Website  
**Stack:** React / Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion  
**Target Environment:** Node.js 18+ / Modern Evergreen Browsers (Chrome, Safari, iOS Safari, Edge, Firefox)

---

## 1. System Architecture & Tech Stack

```
┌────────────────────────────────────────────────────────┐
│                   NEXT.JS / REACT 19                   │
│   (Server-Side Rendering / Static Site Generation)     │
├──────────────────────────┬─────────────────────────────┤
│      TAILWIND CSS        │        FRAMER MOTION        │
│  (Brand Design Tokens)   │  (Scroll Reveals & Tabs)    │
├──────────────────────────┼─────────────────────────────┤
│       LUCIDE ICONS       │       REACT HOOK FORM       │
│    (Lightweight SVGs)    │  (Zod Schema & Validation)  │
├──────────────────────────┴─────────────────────────────┤
│                   ASSET OPTIMIZATION                    │
│   (WebP/AVIF Responsive Images + H.264/WebM Video)      │
└────────────────────────────────────────────────────────┘
```

### Chosen Technologies:
| Layer | Technology | Justification |
| :--- | :--- | :--- |
| **Framework** | Next.js (TypeScript) | Fast SSG/SSR, built-in image optimization, superior SEO for café locations, zero-config deployment. |
| **Styling** | Tailwind CSS v3/v4 | Custom brand tokens (`espresso`, `cream`, `caramel`), atomic CSS, zero unused CSS in production bundle. |
| **Motion** | Framer Motion | Hardware-accelerated fluid animations, layout transitions (`layoutId` for tabs), staggered viewport reveals. |
| **Icons** | `lucide-react` | Tree-shakable, consistent geometric stroke icons (MapPin, Phone, Clock, ArrowRight, Instagram, etc.). |
| **Form Engine** | React Hook Form + Zod | Type-safe form validation for the high-priority franchise lead acquisition funnel. |
| **Data Architecture** | TypeScript Data Dictionaries | Static, grounded data sets (`menuData.ts`, `locationsData.ts`) decoupled from UI components. |

> [!NOTE]
> ### ARCHITECTURAL GUARDRAIL: NO ORDERING / PAYMENT SYSTEM
> The application architecture explicitly excludes:
> - Shopping cart state providers (Redux/Zustand cart stores).
> - E-commerce API endpoints (`/api/checkout`, `/api/orders`).
> - Payment SDK integrations (Stripe, Razorpay, Cashfree, PayPal).
> - Session-based checkout cookies or order tracking databases.

---

## 2. Directory Structure

```
r:/Ammy's Coffee/
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root HTML, fonts, metadata, global styles
│   ├── page.tsx                # Single-page master narrative showcase
│   ├── franchise/              # Dedicated deep-dive franchise portal (optional)
│   ├── globals.css             # Tailwind base and custom utilities
│   └── sitemap.ts              # Dynamic sitemap for SEO
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation with scroll trigger
│   │   ├── MobileDrawer.tsx    # Responsive mobile drawer menu
│   │   └── Footer.tsx          # Brand footer, contact, @ammyscoffee
│   ├── hero/
│   │   ├── HeroSection.tsx     # Video background loop + headline + CTAs
│   │   └── VideoBackground.tsx # Resilient video player with poster fallback
│   ├── story/
│   │   ├── StorySection.tsx    # "From Beans to Bonds" editorial layout
│   │   └── CraftPillars.tsx    # 100% Arabica, artisanal kitchen badges
│   ├── menu/
│   │   ├── MenuSection.tsx     # Master menu showcase container
│   │   ├── MenuTabs.tsx        # Framer Motion animated category switcher
│   │   └── MenuCard.tsx        # Item presentation (name, price, tags)
│   ├── gallery/
│   │   ├── AtmosphereGrid.tsx  # Masonry / carousel of real HDR interior photos
│   │   └── PhotoLightbox.tsx   # Optional full-screen modal zoom
│   ├── cafes/
│   │   ├── CafesSection.tsx    # Multi-store interactive explorer
│   │   ├── LocationTabs.tsx    # Tab switcher for 5 NCR branches
│   │   └── LocationCard.tsx    # Map link, 1-click call, operating hours
│   ├── franchise/
│   │   ├── FranchiseSection.tsx# High-impact B2B pitch block
│   │   └── FranchiseForm.tsx   # Validated lead acquisition form
│   └── ui/
│       ├── Button.tsx          # Consistent brand button variants
│       ├── Badge.tsx           # Tags (Vegetarian, Signature, Best Seller)
│       └── Toast.tsx           # Success notification upon form submission
├── data/
│   ├── menuData.ts             # 100% verified items extracted from MENU.md
│   ├── locationsData.ts        # 5 verified NCR outlets with coordinates
│   └── brandCopy.ts            # Official headlines, quotes, and meta info
├── types/
│   ├── menu.ts                 # Type definitions for categories and items
│   ├── location.ts             # Type definitions for café outlets
│   └── franchise.ts            # Type definitions for lead capture schema
├── public/
│   ├── assets/
│   │   ├── logos/              # ammy_logo_white.png, ammy_logo_dark.png
│   │   ├── video/              # ammy_hero_loop.mp4 (compressed web loop)
│   │   └── photos/             # Optimized WebP interior & food photography
└── tailwind.config.ts          # Brand colors, typography, extended tokens
```

---

## 3. Data Models & TypeScript Schemas

### 3.1 Menu Item Model (`types/menu.ts`)
```typescript
export type MenuCategory = 'specialty' | 'iced-matcha' | 'bakery' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  priceRegular?: number;
  priceLarge?: number;
  priceFixed?: number;
  tags?: ('Bestseller' | 'Chef Special' | 'Signature' | 'Must Try')[];
  image?: string;
  dietary?: 'veg' | 'non-veg';
}
```

### 3.2 Café Location Model (`types/location.ts`)
```typescript
export interface CafeLocation {
  id: string;
  name: string;
  city: 'Delhi' | 'Gurugram';
  market: string;
  address: string;
  landmark?: string;
  phone: string;
  mapsUrl: string;
  operatingHours: string;
  image: string;
  features: string[];
}
```

### 3.3 Franchise Lead Schema (`types/franchise.ts`)
```typescript
import { z } from 'zod';

export const FranchiseSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Please enter a valid email address'),
  preferredCity: z.string().min(2, 'City is required'),
  propertyStatus: z.enum(['owned', 'rented', 'searching'], {
    errorMap: () => ({ message: 'Please select property status' }),
  }),
  investmentRange: z.enum(['25-40L', '40-60L', '60L+'], {
    errorMap: () => ({ message: 'Please select an investment bracket' }),
  }),
  experience: z.string().min(2, 'Please briefly mention your business background'),
  message: z.string().optional(),
});

export type FranchiseLead = z.infer<typeof FranchiseSchema>;
```

---

## 4. Asset Optimization Pipeline

The raw assets extracted in `brand_materials/` total over 600 MB. They must be aggressively optimized for instant web loading:

### 4.1 Video Optimization
- **Source:** `Ammy_s Store and Products 1.mp4` (53 MB, 4K vertical, 21 seconds).
- **Processing Plan:**
  - Clip a smooth, high-impact 6-to-8 second visual loop focusing on the espresso pour and steaming pitcher.
  - Scale to 1080p and 720p with H.264 (high profile) and WebM (VP9).
  - Target file size: **under 3.5 MB**.
  - Attribute requirements: `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`.

### 4.2 Photography Optimization
- **Source:** 20 DSLR HDR interior photos (each 7–19 MB, up to 7000px).
- **Processing Plan:**
  - Convert to modern `.webp` format at 80% quality.
  - Generate 3 responsive tiers:
    - Thumbnail: 400px width (~35 KB)
    - Card: 800px width (~95 KB)
    - Full Hero: 1600px width (~220 KB)
  - Result: 98% bandwidth reduction while preserving crisp retina sharpness.

---

## 5. Performance, SEO & Structured Data

### 5.1 SEO Meta Tags
- Title: `Ammy's Coffee | Official Brand & Franchise Flagship`
- Description: `Specialty 100% Arabica craft coffee, artisanal croissants, and trending desserts across 5 prime Delhi NCR outlets. Explore our menu and franchise opportunities.`

### 5.2 Structured Data (Schema.org JSON-LD)
Inject a dynamic JSON-LD graph into the root layout:
```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Ammy's Coffee",
  "image": "https://ammyscoffee.com/assets/logos/ammy_logo_dark.png",
  "servesCuisine": "Specialty Coffee, Artisanal Bakery, Desserts",
  "priceRange": "₹₹",
  "email": "hello@ammyscoffee.com",
  "url": "https://ammyscoffee.com",
  "sameAs": [
    "https://instagram.com/ammyscoffee"
  ],
  "department": [
    {
      "@type": "Restaurant",
      "name": "Ammy's Coffee - GK-1",
      "address": "1st Floor, M Block Market, Greater Kailash 1, New Delhi",
      "telephone": "+919911000528"
    },
    {
      "@type": "Restaurant",
      "name": "Ammy's Coffee - Galleria Market",
      "address": "Galleria Market, DLF Phase IV, Gurugram",
      "telephone": "+919911000179"
    }
  ]
}
```

---

## 6. Implementation Readiness
All specifications, brand rules, verified data, and technical requirements are now locked. The project is ready for scaffold initialization and component development.

