# PRD.md — Product Requirement Document: Ammy's Coffee Brand Platform

**Project:** Ammy's Coffee — Official Web Flagship & Franchise Acquisition Platform  
**Stage:** Pre-development Concept Showcase (CEO Pitch)  
**Target Delivery:** High-impact, responsive, production-ready frontend concept

---

## 1. Executive Summary & Purpose

Ammy’s Coffee is an expanding café chain across Delhi NCR (Galleria Gurugram, GK-1 M-Block, SDA Market, Punjabi Bagh, Gujranwala Town). The brand currently lacks an official digital flagship.

This web application serves two distinct business objectives:
1. **Consumer Flagship:** Establish digital brand authority, celebrate 100% Arabica specialty coffee and artisanal bakery offerings, and drive physical foot traffic to NCR outlets.
2. **Franchise Acquisition Engine:** Provide a credible, high-converting B2B portal to capture qualified franchise inquiries from entrepreneurs across India.

> [!IMPORTANT]
> ### STRICT SCOPE EXCLUSION: NO ONLINE ORDERING / NO E-COMMERCE
> This platform is **NOT** a delivery, e-commerce, or food-ordering app.
> - **NO** shopping cart or checkout functionality.
> - **NO** online payment gateway (Razorpay/Stripe/UPI).
> - **NO** delivery tracking or order fulfillment system.
> The menu is strictly an **interactive visual catalog and appetite-appeal showcase**. Transactions occur in-person at physical outlets or via third-party aggregators (Zomato/Swiggy).

---

## 2. Target Personas & User Journeys

### Persona A: The Café Enthusiast & Local Customer ("Aanya, 24")
- **Profile:** Gen-Z / Millennial student or creative professional in South Delhi or Gurugram.
- **Goal:** Wants to know what Ammy's is about, explore signature drinks (Spanish Latte, Strawberry Matcha) and aesthetic desserts, find the nearest café, check timings, and get directions or call the outlet.
- **Primary Flow:**
  `Lands on Hero → Sees Video Atmosphere → Explores Signature Menu → Switches to GK-1 Location → Clicks "Get Directions" on Google Maps`.

### Persona B: The High-Intent Franchise Partner ("Vikram, 38")
- **Profile:** Experienced F&B entrepreneur or multi-unit investor looking to franchise a modern café brand in Tier 1/2 cities (e.g., Chandigarh, Jaipur, Lucknow).
- **Goal:** Evaluate the brand’s maturity, store aesthetic, unit expansion velocity, and submit an inquiry with investment capability.
- **Primary Flow:**
  `Sees "Franchise With Us" in Nav / Hero → Reads Expansion Proposition → Reviews Franchise Criteria → Submits Lead Form with City & Investment Tier`.

### Persona C: The Brand CEO & Internal Leadership
- **Profile:** The decision-maker deciding whether to commission this developer for the full contract.
- **Goal:** Sees an elevated digital identity that outclasses competitors, uses their authentic assets, and generates tangible business ROI (franchise leads).

---

## 3. Information Architecture & Section Breakdown

```
┌────────────────────────────────────────────────────────────────────────┐
│ NAVBAR: Sticky, Transparent-to-Solid, Logo, Nav Links, Franchise CTA  │
├────────────────────────────────────────────────────────────────────────┤
│ 1. HERO SECTION                                                        │
│    - Ambient 4K Video Background (Espresso pour / Café vibe)           │
│    - White Brand Logo Mark & "From Beans to Bonds" Headline            │
│    - Dual CTAs: "Explore Menu" & "Franchise With Us"                   │
│    - Social Proof Pill: "5 Locations across Delhi NCR • 100% Arabica"  │
├────────────────────────────────────────────────────────────────────────┤
│ 2. BRAND STORY & CRAFT ("From Beans to Bonds")                         │
│    - Editorial 2-column storytelling layout on Warm Cream              │
│    - Narrative: "A warm hug in a cup" / "Two beans = one bond"         │
│    - 3 Craft Pillars: 100% Arabica, Handcrafted Bakery, Community Hub │
├────────────────────────────────────────────────────────────────────────┤
│ 3. SIGNATURE CRAVINGS (Interactive Menu Showcase — No Ordering)        │
│    - Category Filter Tabs: Specialty Coffee, Matcha & Teas, Bakery,   │
│      Artisanal Desserts                                                │
│    - Visual Cards with Item Name, Detailed Description, and Real ₹ Price│
│    - Secondary Action: "Download Full Menu (PDF)"                      │
├────────────────────────────────────────────────────────────────────────┤
│ 4. CAFÉ ATMOSPHERE & VIBE GALLERY                                      │
│    - Curated masonry / carousel gallery of 20 real HDR interior shots │
│    - Copy: "The Chill Spot You've Been Manifesting — Built for Vibes" │
├────────────────────────────────────────────────────────────────────────┤
│ 5. OUR CAFÉS (Interactive Multi-Store Finder)                          │
│    - Location Tab Switcher: GK-1, Galleria, SDA, Punjabi Bagh, etc.   │
│    - Active Card Display: Street Address, Landmark, Operating Hours   │
│    - Action Triggers: "Get Directions" (Google Maps) + "Call Café"    │
├────────────────────────────────────────────────────────────────────────┤
│ 6. FRANCHISE ACQUISITION PORTAL (The Commercial B2B Funnel)           │
│    - Dark Obsidian container with luxury bronze accents               │
│    - Value Proposition: Rapid expansion, prime unit economics         │
│    - Qualified Lead Capture Form:                                     │
│      * Full Name                                                       │
│      * Phone Number (WhatsApp compatible)                              │
│      * Email Address                                                   │
│      * Target City / Location                                          │
│      * Commercial Property Status (Have Space / Searching)             │
│      * Investment Capacity Bracket (₹25L–₹40L, ₹40L–₹60L, ₹60L+)       │
│      * Business / F&B Experience                                       │
│      * Additional Message                                              │
├────────────────────────────────────────────────────────────────────────┤
│ 7. FOOTER & COMMUNITY FEED                                             │
│    - Social Link: @ammyscoffee Instagram handle                        │
│    - Direct Contact: hello@ammyscoffee.com                             │
│    - Quick Links, Legal Copyright, Back to Top button                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Functional Requirements

### 4.1 Sticky Navigation Bar
- Transparent over the Hero section; transitions to solid Espresso Obsidian (`#121313`) with subtle backdrop-blur on scroll.
- Mobile hamburger menu with smooth full-screen or slide-over drawer navigation.
- Prominent `Franchise With Us` button styled in Latte Bronze (`#C88A58`).

### 4.2 Hero Section Video Loop
- Plays compressed WebM/MP4 snippet (`muted`, `playsInline`, `autoPlay`, `loop`).
- Graceful poster fallback image (`DSC03610-HDR.jpg`) for low-power mobile mode or slow connections.
- Headline and CTA overlay with smooth entrance animations.

### 4.3 Interactive Menu Showcase (Strictly Informational)
- **Tabs:** Specialty Brews, Iced & Matcha, Bakery & Croissants, Patisserie & Desserts.
- Cards show verified items from [MENU.md](file:///r:/Ammy's%20Coffee/MENU.md) (e.g., *Spanish Latte @ ₹260*, *San Sebastian Cheesecake @ ₹222*, *Avocado Croissant @ ₹250*).
- **No cart, no checkout button.** Instead, an informational badge: *"Available across all Delhi NCR outlets."*
- Download button opening the actual menu PDF (`assets/Ammys Menu.pdf`).

### 4.4 Multi-Store Explorer
- Lists all 5 confirmed outlets:
  1. **Greater Kailash 1 (GK-1):** 1st Floor, M Block Market (above Wafflesome), Delhi
  2. **Galleria Market:** Galleria Market, DLF Phase IV, Gurugram
  3. **SDA Market:** SDA Market (Opposite IIT Delhi), South Delhi
  4. **Punjabi Bagh:** Club Road / Central Market, Punjabi Bagh, Delhi
  5. **Gujranwala Town:** Next to Invitation, Gujranwala Town, Delhi
- Features dynamic click-to-call (`tel:+9199110...`) and Google Maps navigation deep links.

### 4.5 Franchise Lead Capture Funnel
- Client-side validation for all fields (valid Indian mobile number, email syntax, required dropdowns).
- Instant success state modal or inline confirmation with reassurance: *"Thank you. Our expansion team will review your application and contact you within 24–48 hours."*
- Ready for backend webhook / email delivery integration.

---

## 5. Non-Functional Requirements

| Metric | Target Standard |
| :--- | :--- |
| **Mobile Responsiveness** | Fully fluid from 360px (mobile) to 2560px (ultra-wide desktop). |
| **Performance (Lighthouse)** | ≥ 90 on Desktop; ≥ 85 on Mobile. |
| **First Contentful Paint (FCP)** | < 1.5 seconds on 4G network. |
| **Accessibility** | WCAG 2.1 Level AA (color contrast ratio ≥ 4.5:1 for body copy). |
| **Asset Optimization** | All images converted to WebP/AVIF with responsive `srcset` and lazy loading. |

