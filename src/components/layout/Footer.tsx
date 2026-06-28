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
      className="w-full border-t py-12 md:py-20 px-[var(--spacing-margin-mobile)]"
      style={{
        backgroundColor: 'var(--color-primary)',
        borderColor: 'var(--color-primary-container)',
      }}
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-gutter)]">
        {/* Column 1: Brand + Contact */}
        <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
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
            className="text-body-md text-sm max-w-xs mb-6"
            style={{ color: 'var(--color-primary-fixed-dim)' }}
          >
            {siteConfig.tagline}
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 text-sm" style={{ color: 'var(--color-primary-fixed-dim)' }}>
            <a
              href="https://www.google.com/maps/dir//13%2FB,+next+to+Social,+Hauz+Khas+Village,+Deer+Park,+Hauz+Khas,+New+Delhi,+Delhi+110016/@24.5900172,84.8239107,6353m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390d1d8a830a42c3:0x7ba2904ce3b8044b!2m2!1d77.1942646!2d28.5546597?entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 transition-colors duration-300 hover:text-white"
            >
              <span className="material-symbols-outlined text-[16px] mt-0.5" aria-hidden="true">location_on</span>
              <span>13/B, next to Social, Hauz Khas Village, Deer Park, Hauz Khas, New Delhi, Delhi 110016</span>
            </a>
            <a
              href="tel:011-47075730"
              className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">call</span>
              <span>011-47075730</span>
            </a>
            <a
              href="mailto:standsustainable@gmail.com"
              className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">mail</span>
              <span>standsustainable@gmail.com</span>
            </a>
          </div>
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
