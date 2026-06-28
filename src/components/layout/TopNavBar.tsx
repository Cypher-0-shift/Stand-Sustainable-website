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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Determine if the text should be white based on the page's hero image
  // Almost all pages use a dark cinematic hero image, except legal pages and donate.
  const isLightHero = 
    pathname.startsWith('/terms') || 
    pathname.startsWith('/privacy') || 
    pathname.startsWith('/donate') ||
    pathname.startsWith('/compliance');
  const useWhiteText = !isLightHero && !isScrolled;

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]"
        style={{
          height: 'var(--spacing-nav-height)',
          backgroundColor: isScrolled ? 'rgba(248, 250, 244, 0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--color-alabaster)' : '1px solid transparent',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
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
          <span className="material-symbols-outlined text-[28px]" aria-hidden="true">menu</span>
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-[100] flex flex-col p-10"
          style={{ backgroundColor: 'var(--color-primary-container)' }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setMobileOpen(false);
            }
            if (e.key === 'Tab') {
              // Basic focus trap: just prevent leaving the drawer context
              const focusableElements = e.currentTarget.querySelectorAll(
                'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
              );
              const firstElement = focusableElements[0] as HTMLElement;
              const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

              if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                  lastElement.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === lastElement) {
                  firstElement.focus();
                  e.preventDefault();
                }
              }
            }
          }}
          // Auto-focus the first element when opening
          ref={(el) => {
            if (el && !el.contains(document.activeElement)) {
              const firstButton = el.querySelector('button');
              if (firstButton) firstButton.focus();
            }
          }}
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
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">close</span>
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

