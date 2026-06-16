import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import { complianceHero, complianceCategories } from '@/content/compliance';

export const metadata: Metadata = {
  title: 'Legal & Security Compliance — Stand Sustainable Foundation',
  description: 'Our institutional governance, financial compliance, and data security standards.',
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        headline={complianceHero.headline}
        subtext={complianceHero.subtext}
        backgroundImage={complianceHero.backgroundImage}
      />

      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{ backgroundColor: 'var(--color-surface-linen)' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col gap-16 md:gap-24">
          {complianceCategories.map((category, index) => (
            <div key={category.title} className="flex flex-col gap-8">
              <FadeUp delay={index * 100}>
                <h2
                  className="text-section-header-mobile md:text-section-header mb-4 border-b pb-4"
                  style={{
                    fontFamily: 'var(--font-section-header)',
                    color: 'var(--color-primary)',
                    borderColor: 'var(--color-alabaster)'
                  }}
                >
                  {category.title}
                </h2>
                <p className="text-body-lg" style={{ color: 'var(--color-stone)', maxWidth: '800px' }}>
                  {category.description}
                </p>
              </FadeUp>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {category.items.map((item, i) => (
                  <FadeUp key={item.title} delay={100 + i * 100} className="h-full">
                    <div 
                      className="p-8 rounded-[6px] h-full flex flex-col ambient-shadow transition-transform duration-300 hover:-translate-y-1"
                      style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--color-surface-linen)' }}
                        >
                          <span 
                            className="material-symbols-outlined"
                            style={{ color: 'var(--color-accent-terracotta)', fontSize: '24px' }}
                          >
                            {item.icon}
                          </span>
                        </div>
                        <span 
                          className="text-label-caps px-3 py-1 rounded-full"
                          style={{ 
                            fontSize: '10px', 
                            backgroundColor: 'rgba(0, 64, 31, 0.05)',
                            color: 'var(--color-primary)' 
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                      
                      <h3 className="text-body-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                        {item.title}
                      </h3>
                      <p className="text-body-md" style={{ color: 'var(--color-stone)' }}>
                        {item.description}
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
