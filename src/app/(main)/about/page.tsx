import type { Metadata } from 'next';
import Image from 'next/image';
import FadeUp from '@/components/feedback/FadeUp';
import {
  missionSection,
  methodologySection,
  leadershipSection,
  leaders,
  governanceSection,
  governanceItems,
  reportsSection,
  annualReports,
} from '@/content/about';

export const metadata: Metadata = {
  title: 'About Us — Mission, Leadership & Governance',
  description: 'Our commitment to radical transparency, disciplined methodology, and institutional integrity. Meet the leadership team and review governance standards.',
};

export default function AboutPage() {
  return (
    <>
      {/* ====================================================
          SECTION 1 — MISSION & VISION
          Centered full-width editorial with background image at 10% opacity
          ==================================================== */}
      <section
        className="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden"
        style={{
          marginTop: 'var(--spacing-nav-height)',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        {/* Background Image at 10% opacity */}
        <div className="absolute inset-0 opacity-[0.06]">
          <Image
            src={missionSection.backgroundImage}
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
            unoptimized
          />
        </div>

        <FadeUp className="relative z-10 max-w-3xl mx-auto text-center">
          <h1
            className="text-display-mobile md:text-display mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-primary)',
            }}
          >
            {missionSection.headline}
          </h1>
          <p
            className="text-body-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-stone)' }}
          >
            {missionSection.body}
          </p>
        </FadeUp>
      </section>

      {/* ====================================================
          SECTION 2 — HOW WE BUILD (METHODOLOGY)
          Process flow diagram with 3 steps
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{
          backgroundColor: 'var(--color-surface-linen)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          {/* Left Text */}
          <FadeUp className="md:col-span-4">
            <span
              className="text-label-caps mb-6 block tracking-widest"
              style={{ color: 'var(--color-accent-terracotta)' }}
            >
              Our Approach
            </span>
            <h2
              className="text-section-header-mobile md:text-section-header mb-6"
              style={{
                fontFamily: 'var(--font-section-header)',
                color: 'var(--color-primary)',
              }}
            >
              {methodologySection.headline}
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-stone)' }}>
              {methodologySection.body}
            </p>
          </FadeUp>

          {/* Right — Methodology Steps */}
          <FadeUp className="md:col-span-7 md:col-start-6" delay={120}>
            <div className="flex flex-col md:flex-row gap-8 items-stretch">
              {methodologySection.steps.map((step, index) => (
                <div key={step.title} className="flex-1 flex flex-col items-center md:items-start">
                  {/* Step */}
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: 'var(--color-surface-container-low)' }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '28px', color: 'var(--color-primary)' }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <h3
                    className="text-body-lg font-bold mb-2 text-center md:text-left"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-body-md text-center md:text-left"
                    style={{ color: 'var(--color-on-surface-variant)' }}
                  >
                    {step.description}
                  </p>
                  {/* Connector chevron (not on last item) */}
                  {index < methodologySection.steps.length - 1 && (
                    <span
                      className="material-symbols-outlined hidden md:block mt-6 mx-auto"
                      style={{ color: 'var(--color-outline-variant)', fontSize: '20px' }}
                    >
                      chevron_right
                    </span>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================
          SECTION 3 — LEADERSHIP
          3-column portrait grid
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2
              className="text-section-header-mobile md:text-section-header mb-4"
              style={{
                fontFamily: 'var(--font-section-header)',
                color: 'var(--color-primary)',
              }}
            >
              {leadershipSection.headline}
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-stone)' }}>
              {leadershipSection.body}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-gutter)]">
            {leaders.map((leader, index) => (
              <FadeUp key={leader.name} delay={index * 120}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-[6px] aspect-[3/4] mb-4">
                    <Image
                      src={leader.image}
                      alt={leader.imageAlt}
                      fill
                      className="object-cover img-hover-scale"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  </div>
                  <h3
                    className="text-body-lg font-bold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {leader.name}
                  </h3>
                  <p className="text-label-caps mt-1" style={{ color: 'var(--color-stone)' }}>
                    {leader.title}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 4 — GOVERNANCE & ANNUAL REPORTS
          2-column bento layout
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{
          backgroundColor: 'var(--color-primary-container)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)]">
          {/* Governance Card */}
          <FadeUp>
            <div
              className="p-8 md:p-12 rounded-[6px] h-full"
              style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}
            >
              <h2
                className="text-section-header-mobile mb-6"
                style={{
                  fontFamily: 'var(--font-section-header)',
                  color: 'var(--color-primary)',
                }}
              >
                {governanceSection.headline}
              </h2>
              <p className="text-body-md mb-8" style={{ color: 'var(--color-on-surface-variant)' }}>
                {governanceSection.body}
              </p>
              <div className="space-y-4">
                {governanceItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b"
                    style={{ borderColor: 'var(--color-alabaster)' }}
                  >
                    <span className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
                      {item.label}
                    </span>
                    <span className="text-body-md font-semibold" style={{ color: 'var(--color-primary)' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Annual Reports Card */}
          <FadeUp delay={120}>
            <div
              className="p-8 md:p-12 rounded-[6px] h-full"
              style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}
            >
              <h2
                className="text-section-header-mobile mb-6"
                style={{
                  fontFamily: 'var(--font-section-header)',
                  color: 'var(--color-primary)',
                }}
              >
                {reportsSection.headline}
              </h2>
              <p className="text-body-md mb-8" style={{ color: 'var(--color-on-surface-variant)' }}>
                {reportsSection.body}
              </p>
              <div className="space-y-4">
                {annualReports.map((report) => (
                  <a
                    key={report.year}
                    href={report.href}
                    className="flex justify-between items-center py-4 border-b transition-colors hover:opacity-80"
                    style={{ borderColor: 'var(--color-alabaster)' }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined"
                        style={{ color: 'var(--color-accent-terracotta)' }}
                      >
                        picture_as_pdf
                      </span>
                      <span className="text-body-md font-semibold" style={{ color: 'var(--color-primary)' }}>
                        {report.label}
                      </span>
                    </div>
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ color: 'var(--color-stone)' }}
                    >
                      download
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
