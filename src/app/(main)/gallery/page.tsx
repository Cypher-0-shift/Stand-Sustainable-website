import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import FadeUp from '@/components/feedback/FadeUp';
import { galleryHero, galleryImages } from '@/content/gallery';

export const metadata: Metadata = {
  title: 'Gallery — Stand Sustainable Foundation',
  description: 'Documentary field photography from our ongoing structural interventions across India.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        headline={galleryHero.headline}
        subtext={galleryHero.subtext}
        backgroundImage={galleryHero.backgroundImage}
      />

      <section
        className="py-16 md:py-24 px-6 md:px-16"
        style={{ backgroundColor: 'var(--color-surface-linen)' }}
      >
        <div className="max-w-screen-2xl mx-auto">
          {/* Magazine-style Masonry Grid approximation using CSS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] auto-rows-[minmax(300px,auto)]">
            {galleryImages.map((img, index) => (
              <FadeUp
                key={index}
                className={`${img.span} group`}
                delay={index * 120}
              >
                <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-[4px] ambient-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover img-hover-scale"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-body-md text-white font-bold mb-1">
                      {img.caption}
                    </p>
                    <p className="text-label-caps" style={{ color: 'var(--color-surface-linen)' }}>
                      {img.location}
                    </p>
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
