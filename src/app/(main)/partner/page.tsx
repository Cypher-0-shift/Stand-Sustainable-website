import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import PartnerForm from '@/components/forms/PartnerForm';
import { partnerHero, partnerModels } from '@/content/partner';

export const metadata: Metadata = {
  alternates: {
    canonical: '/partner',
  },
  title: 'Partner With Us — Stand Sustainable Foundation',
  description: 'Partner with Government and non-Governmental agencies to support vulnerable and marginalised communities.',
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
              <PartnerForm />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
