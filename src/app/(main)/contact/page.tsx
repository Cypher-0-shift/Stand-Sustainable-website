import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import ContactForm from '@/components/forms/ContactForm';
import { contactHero, officeLocations } from '@/content/contact';
import MapEmbedWithConsent from '@/components/content/MapEmbedWithConsent';

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact',
  },
  title: 'Contact Us — Stand Sustainable Foundation',
  description: 'Better yet, see us in person! We are happy to connect. Reach us at 13 B Hauz Khas Village, New Delhi.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline={contactHero.headline}
        subtext={contactHero.subtext}
        backgroundImage={contactHero.backgroundImage}
      />

      <section
        className="py-16 md:py-24 px-6 md:px-16 flex-grow"
        style={{ backgroundColor: 'var(--color-surface-linen)' }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          
          {/* Left Column: Office Locations */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <FadeUp>
              <h2
                className="text-section-header-mobile mb-8"
                style={{
                  fontFamily: 'var(--font-section-header)',
                  color: 'var(--color-primary)',
                }}
              >
                Our Offices
              </h2>
            </FadeUp>
            <div className="flex flex-col gap-8">
              {officeLocations.map((office, index) => (
                <FadeUp key={office.city} delay={index * 120}>
                  <div className="p-6 rounded-[6px] bg-white ambient-shadow">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b" style={{ borderColor: 'var(--color-alabaster)' }}>
                      <h3 className="text-body-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                        {office.city}
                      </h3>
                      <span className="text-label-caps" style={{ color: 'var(--color-accent-terracotta)', fontSize: '11px' }}>
                        {office.type}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3 text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] mt-0.5" aria-hidden="true">location_on</span>
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">call</span>
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:opacity-80 transition-opacity">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
                        <a href={`mailto:${office.email}`} className="hover:opacity-80 transition-opacity">
                          {office.email}
                        </a>
                      </div>
                    </div>
                    
                    {office.mapEmbedUrl && (
                      <div className="mt-6">
                        <MapEmbedWithConsent mapEmbedUrl={office.mapEmbedUrl} city={office.city} />
                      </div>
                    )}
                    
                    {office.directionsUrl && (
                      <div className="mt-4">
                        <a
                          href={office.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-[4px] font-bold transition-opacity hover:opacity-90"
                          style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                          }}
                        >
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">directions</span>
                          Get Directions
                        </a>
                      </div>
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <FadeUp className="md:col-span-6 md:col-start-7 mt-12 md:mt-0" delay={240}>
            <div
              className="p-8 md:p-12 rounded-[6px] ambient-shadow border h-full"
              style={{
                backgroundColor: 'var(--color-surface-container-lowest)',
                borderColor: 'var(--color-alabaster)',
              }}
            >
              <h2
                className="text-section-header-mobile mb-8"
                style={{
                  fontFamily: 'var(--font-section-header)',
                  color: 'var(--color-primary)',
                }}
              >
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
