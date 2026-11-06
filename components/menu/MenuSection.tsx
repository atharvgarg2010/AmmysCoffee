'use client';

import { useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuCategory = {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    label: 'Coffee',
    note: '100% Arabica, pulled and poured to order. Iced coffees are served large.',
    items: [
      { name: 'Espresso', price: '₹180' },
      { name: 'Dopio', price: '₹250' },
      { name: 'Cortado', price: '₹250' },
      { name: 'Americano', price: '₹210 / ₹250' },
      { name: 'Cappuccino', price: '₹220 / ₹260' },
      { name: 'Flat White', price: '₹230' },
      { name: 'Café Latte', price: '₹220 / ₹250' },
      { name: 'Mocha', price: '₹260 / ₹320' },
      { name: 'Caramel Macchiato', price: '₹250' },
      { name: 'Iced Americano', price: '₹250' },
      { name: 'Iced Latte', price: '₹260' },
      { name: 'Iced Spanish Latte', price: '₹290' },
      { name: 'Iced Belgian', price: '₹290' },
      { name: 'Iced Mocha', price: '₹290' },
      { name: 'Iced White Mocha', price: '₹290' },
    ],
  },
  {
    id: 'signatures',
    label: 'Signatures',
    note: "The house pours — from Spanish latte to Ammy's own affogato.",
    items: [
      { name: 'Spanish Latte', price: '₹260 / ₹300' },
      { name: 'White Mocha', price: '₹230 / ₹260' },
      { name: 'Biscoff Latte', price: '₹270 / ₹320' },
      { name: 'Classic Affogato', price: '₹240 / ₹270' },
      { name: "Ammy's Special Affogato", price: '₹300 / ₹330' },
      { name: 'Madagascar Hot Chocolate', price: '₹270' },
      { name: 'Tiramisu Latte', price: '₹320' },
      { name: 'Pistachio Latte', price: '₹330' },
    ],
  },
  {
    id: 'cold-brew',
    label: 'Cold Brew',
    note: 'Steeped slow, served cold. A quieter kind of coffee.',
    items: [
      { name: 'Vietnamese Styled Iced Coffee', price: '₹240 / ₹280' },
      { name: 'Cold Brew with Milk', price: '₹240 / ₹280' },
      { name: 'Cold Brew Sweet Cream', price: '₹240 / ₹280' },
    ],
  },
  {
    id: 'tea',
    label: 'Matcha & Tea',
    note: 'Matcha, teas, and a proper cup of chai.',
    items: [
      { name: 'Matcha Latte', price: '₹250' },
      { name: 'Iced Matcha', price: '₹260' },
      { name: 'Strawberry Matcha', price: '₹250' },
      { name: 'Mango Matcha', price: '₹320' },
      { name: 'Coconut Matcha', price: '₹320' },
      { name: 'Matcha Lemonade', price: '₹250' },
      { name: 'Earl Grey Tea', price: '₹250' },
      { name: 'Green Tea', price: '₹260' },
      { name: 'Adrak Chai', price: '₹250' },
      { name: 'Masala Chai', price: '₹320' },
    ],
  },
  {
    id: 'blended',
    label: 'Blended',
    note: 'Frappes and thick shakes, blended to order.',
    items: [
      { name: 'Classic Cold Coffee', price: '₹270 / ₹320' },
      { name: 'Hazelnut Frappe', price: '₹300 / ₹350' },
      { name: 'Brownie Frappe', price: '₹300 / ₹350' },
      { name: 'Caramel Frappe', price: '₹300 / ₹350' },
      { name: 'Mocha Frappe', price: '₹300 / ₹350' },
      { name: 'Frozen French Vanilla', price: '₹310 / ₹350' },
      { name: 'Caramel Java Chip', price: '₹340 / ₹410' },
      { name: 'Lotus Biscoff Frappe', price: '₹370 / ₹450' },
      { name: 'Vanilla Shake', price: '₹270 / ₹330' },
      { name: 'Strawberry Shake', price: '₹270 / ₹330' },
      { name: 'Mango Shake', price: '₹270 / ₹330' },
      { name: 'Mint Oreo Shake', price: '₹290 / ₹350' },
      { name: 'Cookie & Cream Shake', price: '₹290 / ₹350' },
      { name: 'Chocolate Hazelnut Shake', price: '₹290 / ₹350' },
      { name: 'Belgian Chocolate Shake', price: '₹290 / ₹350' },
      { name: 'Belgian Brownie Shake', price: '₹290 / ₹350' },
      { name: 'Lotus Biscoff Shake', price: '₹320 / ₹390' },
    ],
  },
  {
    id: 'coolers',
    label: 'Coolers',
    note: 'Iced teas and fruit coolers for the warmer Delhi afternoons.',
    items: [
      { name: 'Strawberry Iced Tea', price: '₹240 / ₹280' },
      { name: 'Lemon Iced Tea', price: '₹240 / ₹280' },
      { name: 'Peach Iced Tea', price: '₹240 / ₹280' },
      { name: 'Masala Lemonade', price: '₹240 / ₹280' },
      { name: 'Passion Fruit Cooler', price: '₹240 / ₹280' },
      { name: 'Citrus Mojito', price: '₹240 / ₹280' },
    ],
  },
  {
    id: 'bakery',
    label: 'Bakery & Kitchen',
    note: 'Buttery croissants, toasts, sandwiches, all-day breakfast, and comfort plates.',
    items: [
      { name: 'Butter Croissant', price: '₹190' },
      { name: 'Almond Croissant', price: '₹240' },
      { name: 'Avocado Croissant', price: '₹250' },
      { name: 'Chicken Tikka Croissant', price: '₹260' },
      { name: 'Chilli Cheese Toast', price: '₹300' },
      { name: 'Avocado Toast', price: '₹380' },
      {
        name: 'Tandoori Paneer Sandwich',
        price: '₹320',
        description: 'Sourdough or multigrain; wrap ₹280.',
      },
      {
        name: 'Tandoori Chicken Sandwich',
        price: '₹360',
        description: 'Sourdough or multigrain; wrap ₹300.',
      },
      {
        name: 'Eggs of Choice',
        price: '₹250',
        description: 'Scrambled or sunny side up, with toast and hashbrown.',
      },
      {
        name: 'Classic Maple Pancakes',
        price: '₹290',
        description: 'Three fluffy pancakes with whipped cream.',
      },
      {
        name: 'Nutella Pancakes',
        price: '₹350',
        description: 'Three fluffy pancakes, served with fresh fruits.',
      },
      {
        name: 'Classic Maple Waffles',
        price: '₹220 / ₹250',
        description: 'Three pieces with whipped cream and vanilla ice cream.',
      },
      {
        name: 'Lotus Biscoff Waffles',
        price: '₹270 / ₹320',
        description: 'Three pieces with whipped cream and vanilla ice cream.',
      },
      { name: 'Masala Paneer Puff', price: '₹160' },
      {
        name: 'Veg Quesadilla',
        price: '₹290',
        description: 'With salsa, guacamole, and sour cream.',
      },
      { name: 'Hummus Pita Platter', price: '₹250' },
      { name: 'Creamy Alfredo Pasta', price: '₹390' },
      { name: 'Peri Peri Fries', price: '₹220' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    note: 'Small-batch desserts, designed to satisfy your sweetest cravings.',
    items: [
      { name: 'Tiramisu', price: '₹340' },
      { name: 'San Sebastian Cheesecake', price: '₹222' },
      { name: 'Lotus Biscoff Cheesecake', price: '₹270' },
      { name: 'Blueberry Cheesecake', price: '₹250' },
      { name: 'Strawberry Cheesecake', price: '₹250' },
      { name: 'Pistachio Kunafa', price: '₹330' },
      {
        name: 'Tres Leches',
        price: '₹340',
        description: 'Classic, mango, caramel, or blueberry.',
      },
      {
        name: 'Ebony Ivory',
        price: '₹290',
        description: 'Warm truffle chocolate pastry with vanilla ice cream.',
      },
      {
        name: 'Brownie Sundae',
        price: '₹290',
        description: 'Moist brownie, vanilla ice cream, hot fudge, and nuts.',
      },
      {
        name: 'Churros',
        price: '₹250 / ₹350',
        description: 'Three or five pieces, with dark, milk, and white chocolate.',
      },
      { name: 'Walnut Brownie', price: '₹140' },
      { name: 'Chocolate Mousse Cup', price: '₹160' },
      { name: 'Chocolate Eclairs', price: '₹190' },
      { name: 'Red Velvet Slice', price: '₹210' },
    ],
  },
];

export default function MenuSection() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % menuCategories.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + menuCategories.length) % menuCategories.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = menuCategories.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextCategory = menuCategories[nextIndex];
    setActiveId(nextCategory.id);
    document.getElementById(`menu-tab-${nextCategory.id}`)?.focus();
  };

  return (
    <section
      id="menu"
      className="w-full scroll-mt-24 bg-cream py-20 text-espresso sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-8 border-b border-espresso/10 pb-10 sm:pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.3em] text-caramel-ink sm:text-xs">
              The Cravings We&apos;re Known For
            </span>
            <h2 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.03em] text-espresso">
              A menu made <br />
              <span className="font-light italic text-caramel-ink">
                for lingering.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-12">
            <p className="max-w-[42ch] text-sm leading-7 text-espresso/70">
              Coffee, comfort food, and small-batch desserts — a catalog to
              browse before you settle in. Prices in INR, GST exclusive. Where
              two prices appear, they are regular and large unless noted.
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="no-scrollbar flex gap-6 overflow-x-auto border-b border-espresso/10 sm:gap-8"
          >
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={activeId === category.id}
                aria-controls={`menu-panel-${category.id}`}
                tabIndex={activeId === category.id ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`inline-flex min-h-11 shrink-0 items-center border-b-2 pb-3 pt-2 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel-ink/70 ${
                  activeId === category.id
                    ? 'border-caramel-ink text-espresso'
                    : 'border-transparent text-espresso/70 hover:text-espresso'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {menuCategories.map((category, index) => {
            const isActive = activeId === category.id;

            return (
              <div
                key={category.id}
                id={`menu-panel-${category.id}`}
                role="tabpanel"
                aria-labelledby={`menu-tab-${category.id}`}
                hidden={!isActive}
                tabIndex={0}
                className="pt-8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel-ink/50 sm:pt-10"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-3">
                    <h3 className="font-serif text-3xl font-normal tracking-[-0.02em] text-espresso sm:text-4xl">
                      {category.label}
                    </h3>
                    <p className="mt-3 max-w-[30ch] text-sm leading-6 text-espresso/70">
                      {category.note}
                    </p>
                    <span className="mt-6 block text-[10px] uppercase tracking-[0.24em] text-espresso/70">
                      No. {String(index + 1).padStart(2, '0')} /{' '}
                      {String(menuCategories.length).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="lg:col-span-9">
                    <div className="grid gap-x-10 md:grid-cols-2">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-baseline justify-between gap-4 border-b border-espresso/10 py-3.5"
                        >
                          <div className="min-w-0">
                            <h4 className="text-[15px] font-medium leading-snug tracking-[0.01em] text-espresso">
                              {item.name}
                            </h4>
                            {item.description ? (
                              <p className="mt-1 text-xs leading-5 text-espresso/70">
                                {item.description}
                              </p>
                            ) : null}
                          </div>
                          <span className="shrink-0 text-sm tabular-nums text-espresso/80">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-espresso/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.24em] text-caramel-ink">
              Make It Yours
            </p>
            <p className="mt-2 text-xs leading-6 text-espresso/70">
              Oat milk +₹70 · Almond milk +₹60 · Lactose-free or slim milk +₹0.
              Syrups +₹40. Espresso shot, whipped cream, or ice cream +₹45.
            </p>
          </div>
          <Link
            href="/#cafes"
            className="group inline-flex items-center gap-2 border-b border-espresso/30 pb-2 text-[11px] uppercase tracking-[0.24em] text-espresso transition-colors hover:border-caramel-ink hover:text-caramel-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel-ink/70"
          >
            Find Your Café
            <ArrowRight className="h-3.5 w-3.5 text-caramel-ink transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
