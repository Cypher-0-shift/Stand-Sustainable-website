'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems, mobileNavItems, siteConfig } from '@/content/navigation';

/**
 * TopNavBar — Fixed navigation bar.
 * Transparent over homepage hero image, frosted-glass otherwise.
 */
export default function TopNavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine if the text should be white based on the page's hero image
  // Almost all pages use a dark cinematic hero image, except legal pages.
  const isLightHero = pathname.startsWith('/terms') || pathname.startsWith('/privacy');
  const useWhiteText = !isLightHero;

  return (
    <>
      <header
        className="absolute top-0 w-full z-50 flex justify-between items-center"
        style={{
          height: 'var(--spacing-nav-height)',
          paddingLeft: 'var(--spacing-margin-mobile)',
          paddingRight: 'var(--spacing-margin-mobile)',
          backgroundColor: 'transparent',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-section-header-mobile font-bold transition-colors duration-300 hover:opacity-80"
          style={{ fontFamily: 'var(--font-section-header)', color: useWhiteText ? 'white' : 'var(--color-primary)' }}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-label-caps transition-colors ease-out duration-200 ${
                  isActive
                    ? 'border-b-2 pb-1'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color: isActive 
                    ? (useWhiteText ? 'white' : 'var(--color-primary)')
                    : (useWhiteText ? 'rgba(255,255,255,0.85)' : 'var(--color-on-surface-variant)'),
                  borderColor: isActive 
                    ? (useWhiteText ? 'white' : 'var(--color-primary)') 
                    : 'transparent',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/partner"
            className="inline-flex items-center justify-center text-label-caps rounded-[6px] transition-colors duration-300 hover:opacity-90 border-2 whitespace-nowrap"
            style={{
              backgroundColor: 'transparent',
              color: useWhiteText ? 'white' : 'var(--color-primary)',
              borderColor: useWhiteText ? 'white' : 'var(--color-primary)',
              padding: '8px 18px', // Slightly less padding to account for border
            }}
          >
            Partner With Us
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center text-label-caps rounded-[6px] transition-colors duration-300 hover:opacity-90"
            style={{
              backgroundColor: useWhiteText ? 'white' : 'var(--color-primary)',
              color: useWhiteText ? 'var(--color-primary)' : 'var(--color-on-primary)',
              padding: '10px 20px',
            }}
          >
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden transition-colors"
          style={{ color: useWhiteText ? 'white' : 'var(--color-primary)' }}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-[28px]">menu</span>
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col p-10"
          style={{ backgroundColor: 'var(--color-primary-container)' }}
        >
          <div className="flex justify-between items-center mb-16">
            <span
              className="text-section-header-mobile font-bold"
              style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-on-primary)' }}
            >
              {siteConfig.name}
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ color: 'var(--color-on-primary)' }}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[28px]">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-10">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-display-mobile transition-opacity hover:opacity-80"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-on-primary)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4">
            <Link
              href="/partner"
              className="block text-center text-label-caps rounded-[6px] py-4 border-2 transition-colors hover:opacity-80"
              style={{
                color: 'var(--color-on-primary)',
                borderColor: 'var(--color-on-primary)',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Partner With Us
            </Link>
            <Link
              href="/donate"
              className="block text-center text-label-caps rounded-[6px] py-4 transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-on-primary)',
                color: 'var(--color-primary)',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

/* Desktop responsive padding override */
const desktopPaddingStyle = `
  @media (min-width: 768px) {
    header {
      padding-left: var(--spacing-margin-desktop) !important;
      padding-right: var(--spacing-margin-desktop) !important;
    }
  }
`;
