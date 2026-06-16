import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import { contactHero, officeLocations } from '@/content/contact';

export const metadata: Metadata = {
  title: 'Contact Us — Stand Sustainable Foundation',
  description: 'Get in touch with our headquarters or regional offices across India.',
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
                        <span className="material-symbols-outlined text-[18px] mt-0.5">location_on</span>
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">call</span>
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:opacity-80 transition-opacity">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">mail</span>
                        <a href={`mailto:${office.email}`} className="hover:opacity-80 transition-opacity">
                          {office.email}
                        </a>
                      </div>
                    </div>
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
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors"
                    style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors"
                    style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors"
                    style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors resize-none"
                    style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full text-center text-label-caps rounded-[6px] py-4 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
