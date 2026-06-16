import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import { programsHero, programsList } from '@/content/programs';

export const metadata: Metadata = {
  title: 'Programs — Stand Sustainable Foundation',
  description: 'Our multi-dimensional approach to poverty alleviation including education, agriculture, and women\'s empowerment.',
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        headline={programsHero.headline}
        subtext={programsHero.subtext}
        backgroundImage={programsHero.backgroundImage}
      />

      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{ backgroundColor: 'var(--color-surface-linen)' }}
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col gap-16 md:gap-24">
          {programsList.map((program, index) => (
            <div key={program.title} className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-start">
              {/* Program Title & Overview */}
              <FadeUp className="md:col-span-5" delay={index === 0 ? 120 : 0}>
                <h2
                  className="text-section-header-mobile md:text-section-header mb-6"
                  style={{
                    fontFamily: 'var(--font-section-header)',
                    color: 'var(--color-primary)',
                  }}
                >
                  {program.title}
                </h2>
                <p className="text-body-lg mb-8" style={{ color: 'var(--color-stone)' }}>
                  {program.overview}
                </p>
                {program.image && (
                  <div className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </FadeUp>

              {/* Program Details Card */}
              <FadeUp className="md:col-span-6 md:col-start-7" delay={index === 0 ? 240 : 120}>
                <div
                  className="p-8 md:p-12 rounded-[6px] ambient-shadow border h-full"
                  style={{
                    backgroundColor: 'var(--color-surface-container-lowest)',
                    borderColor: 'var(--color-alabaster)',
                  }}
                >
                  <div className="mb-8">
                    <h3
                      className="text-label-caps tracking-widest mb-4 border-b pb-2"
                      style={{ color: 'var(--color-accent-terracotta)', borderColor: 'var(--color-alabaster)' }}
                    >
                      Key Objectives
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                      {program.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3
                      className="text-label-caps tracking-widest mb-4 border-b pb-2"
                      style={{ color: 'var(--color-primary)', borderColor: 'var(--color-alabaster)' }}
                    >
                      Measured Outcomes
                    </h3>
                    <p className="text-body-md font-semibold" style={{ color: 'var(--color-primary)' }}>
                      {program.outcomes}
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
