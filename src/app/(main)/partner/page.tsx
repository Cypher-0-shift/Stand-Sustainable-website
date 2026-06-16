import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import { partnerHero, partnerModels } from '@/content/partner';

export const metadata: Metadata = {
  title: 'Partner With Us — Stand Sustainable Foundation',
  description: 'Collaborate with us to deploy capital effectively for structural poverty alleviation.',
};

export default function PartnerPage() {
  return (
    <>
      <PageHero
        headline={partnerHero.headline}
        subtext={partnerHero.subtext}
        backgroundImage={partnerHero.backgroundImage}
      />

      <section
        className="py-16 md:py-24 px-6 md:px-16 flex-grow"
        style={{ backgroundColor: 'var(--color-surface-linen)' }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          
          {/* Left Column: Models */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <FadeUp>
              <h2
                className="text-section-header-mobile mb-8"
                style={{
                  fontFamily: 'var(--font-section-header)',
                  color: 'var(--color-primary)',
                }}
              >
                Partnership Models
              </h2>
            </FadeUp>
            <div className="flex flex-col gap-8">
              {partnerModels.map((model, index) => (
                <FadeUp key={model.title} delay={index * 120}>
                  <div className="p-6 rounded-[6px] bg-white ambient-shadow">
                    <h3 className="text-body-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                      {model.title}
                    </h3>
                    <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                      {model.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
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
                Start a Conversation
              </h2>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
                    Organization Name
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
                    Official Email
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
                  <label htmlFor="interest" className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full bg-transparent border-b p-3 focus:outline-none transition-colors appearance-none"
                    style={{ borderColor: 'var(--color-alabaster)', color: 'var(--color-primary)' }}
                  >
                    <option>CSR Implementation</option>
                    <option>Co-Funding</option>
                    <option>Knowledge Partnership</option>
                    <option>Other</option>
                  </select>
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
                  Submit Inquiry
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
