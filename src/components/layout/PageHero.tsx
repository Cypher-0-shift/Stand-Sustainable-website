import Image from 'next/image';
import FadeUp from '@/components/feedback/FadeUp';

interface PageHeroProps {
  headline: string;
  subtext?: string;
  backgroundImage?: string;
}

export default function PageHero({ headline, subtext, backgroundImage }: PageHeroProps) {
  // If we have a background image, we use the dark cinematic layout.
  // Otherwise, we fallback to the clean minimal layout.
  if (backgroundImage) {
    return (
      <section
        className="relative pt-28 pb-16 md:pt-56 md:pb-32 px-6 md:px-16 overflow-hidden flex items-center"
        style={{
          minHeight: '50vh',
        }}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        {/* Gradient Overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0, 40, 17, 0.8) 0%, rgba(0, 40, 17, 0.5) 40%, transparent 100%)',
          }}
        />
        <FadeUp className="relative z-10 max-w-4xl">
          <h1
            className="text-display-mobile md:text-display mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-on-primary)',
            }}
          >
            {headline}
          </h1>
          {subtext && (
            <p
              className="text-body-lg max-w-2xl"
              style={{ color: 'var(--color-on-primary)', opacity: 0.9 }}
            >
              {subtext}
            </p>
          )}
        </FadeUp>
      </section>
    );
  }

  // Fallback for pages without a hero background image
  return (
    <section
      className="relative py-10 md:py-32 px-6 md:px-16 overflow-hidden flex items-center"
      style={{
        backgroundColor: 'var(--color-surface)',
        marginTop: 'var(--spacing-nav-height)',
        minHeight: '30vh',
      }}
    >
      <FadeUp className="relative z-10 max-w-4xl">
        <h1
          className="text-display-mobile md:text-display mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-primary)',
          }}
        >
          {headline}
        </h1>
        {subtext && (
          <p
            className="text-body-lg max-w-2xl"
            style={{ color: 'var(--color-stone)' }}
          >
            {subtext}
          </p>
        )}
      </FadeUp>
    </section>
  );
}
