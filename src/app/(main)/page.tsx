import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/feedback/FadeUp';
import {
  storyHero,
  scaleOfChallenge,
  traditionalSolutions,
  methodology,
  testimonial,
  transitionCta,
  sdgAlignment,
  partnerStrip,
  editorialNews,
  actionCta,
} from '@/content/story';

export const metadata: Metadata = {
  title: 'Stand Sustainable Foundation — Lets Stand Together.',
  description: 'We are working on a social project to ensure sustainability among all vulnerable and marginalised communities, with a key focus on the Sustainable Development Goals.',
  openGraph: {
    title: 'Stand Sustainable Foundation — Lets Stand Together.',
    description: 'We are working on a social project to ensure sustainability among all vulnerable and marginalised communities, with a key focus on the Sustainable Development Goals.',
    url: '/',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function StoryPage() {
  return (
    <>
      {/* ====================================================
          SECTION 1 — CINEMATIC HERO
          Full-bleed photography, editorial headline, gradient overlay
          ==================================================== */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src={storyHero.image}
          alt={storyHero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay — Forest Green left-to-right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0, 40, 17, 0.75) 0%, rgba(0, 40, 17, 0.5) 35%, rgba(0, 40, 17, 0.1) 60%, transparent 80%)',
          }}
        />
        {/* Hero Content */}
        <div
          className="relative z-10 w-full max-w-screen-2xl mx-auto pb-16 md:pb-24 px-6 md:px-16"
        >
          <div className="max-w-2xl">
            <FadeUp>
              <h1
                className="text-display-mobile md:text-display"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-on-primary)',
                }}
              >
                {storyHero.headline}
                <br />
                <em>{storyHero.headlineItalic}</em>
              </h1>
            </FadeUp>
            <FadeUp delay={120}>
              <p
                className="mt-6 text-body-lg max-w-lg"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                {storyHero.subtext}
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center text-label-caps rounded-[6px] transition-colors duration-300 border-2 border-transparent"
                  style={{
                    backgroundColor: 'var(--color-on-primary)',
                    color: 'var(--color-primary)',
                    padding: '14px 32px',
                  }}
                >
                  Explore Our Work
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
        {/* Photo Caption */}
        <div
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10"
        >
          <span
            className="text-label-caps"
            style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}
          >
            {storyHero.caption}
          </span>
        </div>
      </section>

      {/* ====================================================
          SECTION 2 — THE SCALE OF THE CHALLENGE
          Asymmetric 5/7 split, editorial text + captioned photo
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          <FadeUp className="md:col-span-5">
            <span
              className="text-label-caps mb-6 block tracking-widest"
              style={{ color: 'var(--color-accent-terracotta)' }}
            >
              Understanding the Crisis
            </span>
            <h2
              className="text-section-header-mobile md:text-section-header mb-8"
              style={{
                fontFamily: 'var(--font-section-header)',
                color: 'var(--color-primary)',
              }}
            >
              {scaleOfChallenge.headline}
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-stone)' }}>
              {scaleOfChallenge.body}
            </p>
          </FadeUp>

          <FadeUp className="md:col-span-5 md:col-start-8" delay={120}>
            <div className="group relative overflow-hidden rounded-[6px]">
              <Image
                src={scaleOfChallenge.image}
                alt={scaleOfChallenge.imageAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover img-hover-scale"
              />
            </div>
            <span
              className="text-label-caps mt-3 block"
              style={{ fontSize: '11px', color: 'var(--color-stone)' }}
            >
              {scaleOfChallenge.caption}
            </span>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================
          SECTION 3 — WHY TRADITIONAL SOLUTIONS FAIL
          Asymmetric split with pull-quote card
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{
          backgroundColor: 'var(--color-surface-linen)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
          <FadeUp className="md:col-span-5">
            <span
              className="text-label-caps mb-6 block tracking-widest"
              style={{ color: 'var(--color-accent-terracotta)' }}
            >
              {traditionalSolutions.eyebrow}
            </span>
            <h2
              className="text-section-header-mobile md:text-section-header mb-8"
              style={{
                fontFamily: 'var(--font-section-header)',
                color: 'var(--color-primary)',
              }}
            >
              {traditionalSolutions.headline}
            </h2>
            <p className="text-body-lg mb-6" style={{ color: 'var(--color-stone)' }}>
              {traditionalSolutions.body1}
            </p>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              {traditionalSolutions.body2}
            </p>
          </FadeUp>

          <FadeUp className="md:col-span-5 md:col-start-8 flex items-center" delay={120}>
            <div
              className="p-8 md:p-12 rounded-[6px] relative"
              style={{ backgroundColor: 'var(--color-surface-container-low)' }}
            >
              <span
                className="material-symbols-outlined absolute top-4 left-4" aria-hidden="true"
                style={{ fontSize: '48px', color: 'var(--color-primary-fixed-dim)', opacity: 0.3 }}
              >
                format_quote
              </span>
              <blockquote
                className="text-[24px] leading-[1.3] relative z-10"
                style={{
                  fontFamily: 'var(--font-section-header)',
                  color: 'var(--color-primary)',
                  fontStyle: 'italic',
                }}
              >
                {traditionalSolutions.pullQuote}
              </blockquote>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================
          SECTION 4 — OUR METHODOLOGY (CAPACITY, NOT CHARITY)
          Centered editorial + full-width image
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div className="max-w-screen-2xl mx-auto">
          <FadeUp className="max-w-3xl mx-auto text-center mb-16">
            <span
              className="text-label-caps mb-6 block tracking-widest"
              style={{ color: 'var(--color-accent-terracotta)' }}
            >
              {methodology.eyebrow}
            </span>
            <h2
              className="text-section-header-mobile md:text-section-header mb-8"
              style={{
                fontFamily: 'var(--font-section-header)',
                color: 'var(--color-primary)',
              }}
            >
              {methodology.headline}
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-stone)' }}>
              {methodology.body}
            </p>
          </FadeUp>

          <FadeUp delay={120}>
            <div className="relative overflow-hidden rounded-[6px] group">
              <img
                src={methodology.image}
                alt={methodology.imageAlt}
                className="w-full h-auto rounded-[6px] img-hover-scale transition-transform duration-500"
              />
            </div>
            <span
              className="text-label-caps mt-3 block"
              style={{ fontSize: '11px', color: 'var(--color-stone)' }}
            >
              {methodology.caption}
            </span>
          </FadeUp>
        </div>
      </section>

      {/* ====================================================
          SECTION 5 — HUMAN STORY SPOTLIGHT
          Deep Forest background, testimonial + portrait
          ==================================================== */}
      {testimonial && (
        <section
          className="py-16 md:py-24 px-6 md:px-16"
          style={{
            backgroundColor: 'var(--color-primary-container)',
          }}
        >
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
            <FadeUp className="md:col-span-6">
              <span
                className="material-symbols-outlined mb-4" aria-hidden="true"
                style={{ fontSize: '64px', color: 'var(--color-primary-fixed-dim)', opacity: 0.3 }}
              >
                format_quote
              </span>
              <blockquote
                className="text-[24px] md:text-[32px] leading-[1.3] mb-8"
                style={{
                  fontFamily: 'var(--font-section-header)',
                  color: 'var(--color-on-primary)',
                  fontStyle: 'italic',
                }}
              >
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full overflow-hidden"
                  style={{ borderColor: 'var(--color-primary-fixed-dim)' }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.imageAlt}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-body-md font-semibold"
                    style={{ color: 'var(--color-on-primary)' }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-label-caps"
                    style={{ fontSize: '11px', color: 'var(--color-primary-fixed-dim)' }}
                  >
                    {testimonial.role} · {testimonial.location}, {testimonial.year}
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="md:col-span-5 md:col-start-8" delay={120}>
              <div className="relative overflow-hidden rounded-[6px]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.imageAlt}
                  width={600}
                  height={800}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* ====================================================
          SECTION 6 — TRANSITION CTA
          Centered text + "See the Evidence" link
          ==================================================== */}
      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{
          backgroundColor: 'var(--color-surface-linen)',
        }}
      >
        <FadeUp className="max-w-3xl mx-auto text-center">
          <h2
            className="text-section-header-mobile md:text-section-header mb-8"
            style={{
              fontFamily: 'var(--font-section-header)',
              color: 'var(--color-primary)',
            }}
          >
            {transitionCta.headline}
          </h2>
          <Link
            href={transitionCta.ctaHref}
            className="inline-flex items-center gap-2 text-label-caps underline-reveal transition-colors"
            style={{ color: 'var(--color-accent-terracotta)' }}
          >
            <span>{transitionCta.ctaLabel}</span>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
          </Link>
        </FadeUp>
      </section>

      {/* ====================================================
          PHASE 6 — SDG ALIGNMENT
          ==================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-16 overflow-hidden relative" style={{ backgroundColor: 'var(--color-primary)' }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-accent-terracotta)] opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <FadeUp>
              <h2
                className="text-display-mobile md:text-display mb-6 text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {sdgAlignment.headline}
              </h2>
              <p className="text-body-lg text-white/80">
                {sdgAlignment.statement}
              </p>
            </FadeUp>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
            {sdgAlignment.badges.map((badge, index) => (
              <FadeUp key={badge.number} delay={index * 100}>
                <div 
                  className="group relative flex flex-col items-center justify-center p-8 md:p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden h-[180px] md:h-[160px]"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${badge.color}40 0%, transparent 70%)` }}
                  ></div>
                  
                  {/* Indicator Line */}
                  <div 
                    className="absolute top-0 left-0 w-full h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: badge.color }}
                  ></div>

                  <div 
                    className="relative text-display-mobile font-bold mb-3 transition-colors duration-500" 
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  >
                    <span className="text-[10px] md:text-[14px] absolute -top-2 -left-4 md:-left-8 opacity-50 font-sans tracking-widest uppercase">SDG</span>
                    <span className="group-hover:text-white transition-colors duration-300 text-5xl md:text-4xl">{badge.number}</span>
                  </div>
                  <span className="text-label-caps text-center text-white/60 group-hover:text-white transition-colors duration-300 mt-2" style={{ fontSize: '13px' }}>
                    {badge.label}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
          
          <div className="flex justify-center">
            <FadeUp delay={400}>
              <div className="inline-flex flex-col md:flex-row items-center gap-4 py-6 px-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center md:text-left">
                <span className="material-symbols-outlined text-white/40 text-[32px]" aria-hidden="true">public</span>
                <p className="text-body-sm text-white/70 max-w-xl">
                  {sdgAlignment.note}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ====================================================
          PHASE 7 — PARTNER TRUST STRIP
          ==================================================== */}
      {partnerStrip.partners.length > 0 && (
      <section className="py-16 px-6 md:px-16 border-t" style={{ borderColor: 'var(--color-alabaster)', backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <FadeUp>
            <span className="text-label-caps block text-center mb-10" style={{ color: 'var(--color-stone)' }}>
              {partnerStrip.label}
            </span>
            <div className="overflow-hidden w-full relative" aria-label="Trusted partners">
              {/* Adding fade gradients on edges for a better marquee effect */}
              <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10"></div>
              
              <div className="animate-marquee flex items-center gap-16 md:gap-24">
                {[...partnerStrip.partners, ...partnerStrip.partners].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center w-[160px] h-[80px]">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} Logo`} 
                      className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
      )}

      {/* ====================================================
          PHASE 8 — EDITORIAL / NEWS
          ==================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: 'var(--color-surface-container-lowest)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <FadeUp className="flex justify-between items-end mb-12">
            <h2
              className="text-section-header-mobile md:text-section-header"
              style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}
            >
              {editorialNews.headline}
            </h2>
            <Link
              href={editorialNews.ctaHref}
              className="hidden md:inline-flex items-center gap-2 text-label-caps underline-reveal transition-colors"
              style={{ color: 'var(--color-accent-terracotta)' }}
            >
              <span>{editorialNews.ctaLabel}</span>
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-gutter)]">
            {editorialNews.articles.map((article, index) => (
              <FadeUp key={index} delay={index * 150} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-6 rounded-[4px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="text-label-caps mb-3 block" style={{ color: 'var(--color-stone)', fontSize: '11px' }}>
                  {article.category}
                </span>
                <h3 className="text-body-lg font-bold mb-3 transition-colors duration-300 group-hover:text-[#00401F]" style={{ color: 'var(--color-primary)' }}>
                  {article.title}
                </h3>
                <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                  {article.excerpt}
                </p>
              </FadeUp>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
             <Link
              href={editorialNews.ctaHref}
              className="inline-flex items-center gap-2 text-label-caps underline-reveal transition-colors"
              style={{ color: 'var(--color-accent-terracotta)' }}
            >
              <span>{editorialNews.ctaLabel}</span>
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          PHASE 9 — VOLUNTEER / ACTION CTA
          ==================================================== */}
      <section className="py-20 md:py-32 px-6 md:px-16" style={{ backgroundColor: 'var(--color-primary-container)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-center">
          <FadeUp className="md:col-span-6">
            <h2
              className="text-display-mobile md:text-display mb-6 animate-glow"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-on-primary)' }}
            >
              {actionCta.headline}
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-on-primary)', opacity: 0.9 }}>
              {actionCta.subStatement}
            </p>
          </FadeUp>
          
          <FadeUp className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 flex flex-col sm:flex-row md:flex-col gap-4" delay={150}>
            <Link
              href={actionCta.cta1.href}
              className="px-8 py-4 border text-center text-label-caps transition-colors duration-300 hover:bg-white hover:text-[#00401F]"
              style={{ borderColor: 'var(--color-on-primary)', color: 'var(--color-on-primary)' }}
            >
              {actionCta.cta1.label}
            </Link>
            <Link
              href={actionCta.cta2.href}
              className="px-8 py-4 border text-center text-label-caps transition-colors duration-300 hover:bg-white hover:text-[#00401F]"
              style={{ borderColor: 'var(--color-on-primary)', color: 'var(--color-on-primary)' }}
            >
              {actionCta.cta2.label}
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
