import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import { reportsHero, documentCategories } from '@/content/reports';

export const metadata: Metadata = {
  title: 'Reports & Transparency — Stand Sustainable Foundation',
  description: 'Review our financial audits, annual impact reports, and governance documentation.',
};

export default function ReportsPage() {
  return (
    <>
      <PageHero
        headline={reportsHero.headline}
        subtext={reportsHero.subtext}
        backgroundImage={reportsHero.backgroundImage}
      />

      <section
        className="py-16 md:py-24 px-6 md:px-16 flex-grow"
        style={{ backgroundColor: 'var(--color-surface-linen)' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[var(--spacing-gutter)]">
            {documentCategories.map((category, index) => (
              <FadeUp key={category.title} delay={index * 120} className="flex flex-col h-full">
                <div
                  className="p-8 rounded-[6px] ambient-shadow flex-grow"
                  style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}
                >
                  <h2
                    className="text-section-header-mobile mb-8 pb-4 border-b"
                    style={{
                      fontFamily: 'var(--font-section-header)',
                      color: 'var(--color-primary)',
                      borderColor: 'var(--color-alabaster)'
                    }}
                  >
                    {category.title}
                  </h2>
                  <div className="flex flex-col gap-6">
                    {category.documents.map((doc) => (
                      <a
                        key={doc.label}
                        href={doc.href}
                        className="group flex justify-between items-start"
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="material-symbols-outlined mt-1"
                            style={{ color: 'var(--color-accent-terracotta)' }}
                          >
                            picture_as_pdf
                          </span>
                          <div>
                            <span className="block text-body-md font-semibold transition-colors group-hover:opacity-80" style={{ color: 'var(--color-primary)' }}>
                              {doc.label}
                            </span>
                            <span className="block text-label-caps mt-1" style={{ color: 'var(--color-stone)', fontSize: '11px' }}>
                              PDF · {doc.size}
                            </span>
                          </div>
                        </div>
                        <span
                          className="material-symbols-outlined transition-colors group-hover:opacity-80"
                          style={{ color: 'var(--color-stone)' }}
                        >
                          download
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
