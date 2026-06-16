import Link from 'next/link';
import {
  siteConfig,
  footerOrganizationLinks,
  footerActionLinks,
  footerLegalLinks,
} from '@/content/navigation';

/**
 * Footer — 4-column Deep Forest footer.
 * Updated for the 10-page architecture.
 */
export default function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: 'var(--color-primary)',
        borderColor: 'var(--color-primary-container)',
        padding: '80px var(--spacing-margin-mobile)',
      }}
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-gutter)]">
        {/* Column 1: Brand */}
        <div className="mb-8 md:mb-0">
          <div
            className="text-section-header-mobile mb-4"
            style={{
              fontFamily: 'var(--font-section-header)',
              color: 'var(--color-on-primary)',
            }}
          >
            {siteConfig.name}
          </div>
          <p
            className="text-body-md text-sm max-w-xs"
            style={{ color: 'var(--color-primary-fixed-dim)' }}
          >
            {siteConfig.tagline}
          </p>
        </div>

        {/* Column 2: Organization Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-label-caps" style={{ color: 'var(--color-on-primary)' }}>Organization</h3>
          {footerOrganizationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-md transition-colors duration-300 hover:text-white"
              style={{ color: 'var(--color-primary-fixed-dim)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 3: Action & Trust Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-label-caps" style={{ color: 'var(--color-on-primary)' }}>Action & Trust</h3>
          {footerActionLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-body-md transition-colors duration-300 hover:text-white"
              style={{ color: 'var(--color-primary-fixed-dim)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Column 4: Legal & Copyright */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-4 mb-8">
            <h3 className="text-label-caps" style={{ color: 'var(--color-on-primary)' }}>Legal</h3>
            {footerLegalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-md transition-colors duration-300 hover:text-white"
                style={{ color: 'var(--color-primary-fixed-dim)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p
            className="text-body-md text-xs"
            style={{ color: 'var(--color-primary-fixed-dim)' }}
          >
            {siteConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
