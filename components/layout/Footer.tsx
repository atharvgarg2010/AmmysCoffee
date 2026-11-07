import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

const footerLinks = [
  { label: 'The Story', href: '/#story' },
  { label: 'The Craft', href: '/#craft' },
  { label: 'The Menu', href: '/menu' },
  { label: 'Café Outlets', href: '/#cafes' },
  { label: 'Franchise', href: '/franchise' },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative h-10 w-40">
              <Image
                src="/assets/logos/ammy_logo_white.png"
                alt="Ammy's Coffee"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-5 max-w-[24ch] font-serif text-2xl font-normal leading-snug tracking-[-0.01em] text-cream sm:text-3xl">
              From Beans <span className="italic text-caramel-light">to Bonds.</span>
            </p>
            <p className="mt-3 max-w-[34ch] text-sm leading-6 text-cream/60">
              A coffee atelier and community space in Delhi NCR.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-caramel">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-caramel">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@ammyscoffee.com"
                  className="text-sm text-cream/70 transition-colors hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                >
                  hello@ammyscoffee.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ammyscoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ammy's Coffee on Instagram (opens in a new tab)"
                  className="text-sm text-cream/60 transition-colors hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
                >
                  @ammyscoffee
                </a>
              </li>
            </ul>

            <p className="mt-6 max-w-[30ch] text-sm leading-6 text-cream/60">
              Flagships across Delhi NCR. Come for the coffee. Stay for the
              connection.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
            © {new Date().getFullYear()} Ammy&apos;s Coffee
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream/60">
            Delhi NCR • India
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cream/60 transition-colors hover:text-caramel focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-caramel/70"
          >
            Back to Top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
