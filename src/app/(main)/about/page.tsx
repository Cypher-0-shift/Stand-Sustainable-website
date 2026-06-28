import type { Metadata } from 'next';
import Image from 'next/image';
import FadeUp from '@/components/feedback/FadeUp';
import {
  overviewSection,
  missionSection,
  historySection,
  programsSection,
} from '@/content/about';

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
  title: 'About Us — Stand Sustainable Foundation',
  description: 'Working for sustainability among all vulnerable and marginalised communities, with a key focus on the Sustainable Development Goals.',
};

import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'About Us', url: '/about' }]} />
      {/* ====================================================
          SECTION 1 — OVERVIEW (DARK HERO)
          ==================================================== */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-16 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={overviewSection.backgroundImage}
            alt="Organization Overview"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
          {/* Gradient overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeUp>
            <h1
              className="text-display-mobile md:text-display text-white mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {overviewSection.headline}
            </h1>
            <p className="text-body-lg text-white/90 max-w-2xl mx-auto">
              {overviewSection.body}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================
          SECTION 2 — MISSION & HISTORY
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{ backgroundColor: 'var(--color-surface-linen)' }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[var(--spacing-gutter)]">
          {/* Mission */}
          <FadeUp>
            <div className="p-8 md:p-12 rounded-[6px] h-full" style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}>
              <span className="material-symbols-outlined mb-6 block" aria-hidden="true" style={{ fontSize: '40px', color: 'var(--color-primary)' }}>
                flag
              </span>
              <h2
                className="text-section-header-mobile mb-6"
                style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}
              >
                {missionSection.headline}
              </h2>
              <p className="text-body-lg" style={{ color: 'var(--color-stone)' }}>
                {missionSection.body}
              </p>
            </div>
          </FadeUp>

          {/* History */}
          <FadeUp delay={120}>
            <div className="p-8 md:p-12 rounded-[6px] h-full" style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}>
              <span className="material-symbols-outlined mb-6 block" aria-hidden="true" style={{ fontSize: '40px', color: 'var(--color-primary)' }}>
                history_edu
              </span>
              <h2
                className="text-section-header-mobile mb-6"
                style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}
              >
                {historySection.headline}
              </h2>
              <p className="text-body-lg" style={{ color: 'var(--color-stone)' }}>
                {historySection.body}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================
          SECTION 3 — OUR PROGRAMS
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{ backgroundColor: 'var(--color-surface)' }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-section-header-mobile md:text-section-header mb-6"
              style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}
            >
              {programsSection.headline}
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-stone)' }}>
              {programsSection.body}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-gutter)]">
            {programsSection.programs.map((program, index) => (
              <FadeUp key={program.title} delay={index * 100}>
                <div 
                  className="p-8 rounded-[6px] h-full flex flex-col ambient-shadow transition-transform duration-300 hover:-translate-y-2"
                  style={{ backgroundColor: 'white' }}
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--color-surface-linen)' }}
                  >
                    <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '24px', color: 'var(--color-primary)' }}>
                      {program.icon}
                    </span>
                  </div>
                  <h3
                    className="text-body-lg font-bold mb-4"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {program.title}
                  </h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                    {program.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
