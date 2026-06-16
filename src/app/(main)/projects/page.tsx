import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import StatCounter from '@/components/content/StatCounter';
import { projectsHero, projectDirectory } from '@/content/projects';
import { proofIntro, impactStats, projectsSection, heroProject, supportingProjects } from '@/content/impact';

export const metadata: Metadata = {
  title: 'Projects & Impact — Stand Sustainable Foundation',
  description: 'A transparent ledger of our structural interventions and measurable impact across India.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        headline={projectsHero.headline}
        subtext={projectsHero.subtext}
        backgroundImage={projectsHero.backgroundImage}
      />

      {/* ====================================================
          SECTION 1 — IMPACT METRICS
          ==================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
            <FadeUp className="md:col-span-12 mb-16">
              <h2 className="text-display-mobile md:text-display max-w-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
                {proofIntro.headline}<br />{proofIntro.headlineLine2}
              </h2>
              <p className="text-body-lg mt-6 max-w-2xl" style={{ color: 'var(--color-stone)' }}>
                {proofIntro.body}
              </p>
            </FadeUp>

            {impactStats.map((stat, index) => (
              <FadeUp key={stat.label} className="md:col-span-4" delay={index * 120}>
                <StatCounter target={stat.value} label={stat.label} description={stat.description} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 2 — STRUCTURAL INTERVENTIONS
          ==================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-16 border-t" style={{ backgroundColor: 'var(--color-surface-linen)', borderColor: 'var(--color-alabaster)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <FadeUp className="flex items-baseline justify-between border-b pb-4 mb-12" style={{ borderColor: 'var(--color-alabaster)' }}>
            <h2 className="text-section-header-mobile md:text-section-header" style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}>
              {projectsSection.headline}
            </h2>
            <span className="text-label-caps" style={{ color: 'var(--color-stone)' }}>
              {projectsSection.subLabel}
            </span>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
            <FadeUp className="md:col-span-8" delay={120}>
              <div className="ambient-shadow rounded-[6px] overflow-hidden h-full flex flex-col p-3 group cursor-pointer" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="relative overflow-hidden rounded-t-[4px] aspect-[2/1]">
                  <Image src={heroProject.image} alt={heroProject.imageAlt} fill className="object-cover img-hover-scale" unoptimized />
                  <div className="absolute bottom-4 left-4 backdrop-blur px-3 py-1 rounded-[2px]" style={{ backgroundColor: 'rgba(248, 250, 244, 0.9)' }}>
                    <span className="text-label-caps" style={{ color: 'var(--color-primary)' }}>{heroProject.location} · {heroProject.year}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-section-header-mobile mb-3" style={{ fontFamily: 'var(--font-section-header)', color: 'var(--color-primary)' }}>{heroProject.title}</h3>
                    <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{heroProject.description}</p>
                  </div>
                  <div className="mt-6 flex items-center text-label-caps transition-colors group-hover:opacity-80" style={{ color: 'var(--color-accent-terracotta)' }}>
                    <span>{heroProject.ctaLabel}</span>
                    <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp className="md:col-span-4 flex flex-col gap-[var(--spacing-gutter)]" delay={240}>
              {supportingProjects.map((project) => (
                <div key={project.title} className="ambient-shadow rounded-[6px] overflow-hidden group cursor-pointer p-3 flex-1" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <div className="relative overflow-hidden rounded-t-[4px] aspect-video">
                    <Image src={project.image} alt={project.imageAlt} fill className="object-cover img-hover-scale" unoptimized />
                    <div className="absolute bottom-3 left-3 backdrop-blur px-2 py-1 rounded-[2px]" style={{ backgroundColor: 'rgba(248, 250, 244, 0.9)' }}>
                      <span className="text-label-caps tracking-wider" style={{ fontSize: '10px', color: 'var(--color-primary)' }}>{project.location} · {project.year}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-body-lg font-bold mb-2" style={{ color: 'var(--color-primary)' }}>{project.title}</h4>
                    <p className="line-clamp-2" style={{ fontSize: '14px', color: 'var(--color-stone)' }}>{project.description}</p>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ====================================================
          SECTION 3 — ALL PROJECTS DIRECTORY
          ==================================================== */}
      <section className="py-16 md:py-24 px-6 md:px-16" style={{ backgroundColor: 'var(--color-surface-linen)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-gutter)]">
            {projectDirectory.map((project, index) => (
              <FadeUp key={project.slug} delay={index * 120}>
                <Link href={`/projects/${project.slug}`} className="block group h-full">
                  <div
                    className="flex flex-col h-full rounded-[6px] overflow-hidden ambient-shadow transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover img-hover-scale"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        unoptimized
                      />
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-[4px] backdrop-blur text-label-caps"
                        style={{
                          backgroundColor: 'rgba(248, 250, 244, 0.9)',
                          color: 'var(--color-primary)',
                          fontSize: '10px'
                        }}
                      >
                        {project.status}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-label-caps mb-2" style={{ color: 'var(--color-stone)', fontSize: '11px' }}>
                        {project.location} · {project.year}
                      </div>
                      <h3 className="text-body-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                        {project.title}
                      </h3>
                      <p className="text-body-md line-clamp-3 mb-6 flex-grow" style={{ color: 'var(--color-on-surface-variant)' }}>
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--color-alabaster)' }}>
                        <span className="text-label-caps" style={{ color: 'var(--color-accent-terracotta)', fontSize: '11px' }}>
                          View Report
                        </span>
                        <span className="material-symbols-outlined" style={{ color: 'var(--color-accent-terracotta)', fontSize: '16px' }}>
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
