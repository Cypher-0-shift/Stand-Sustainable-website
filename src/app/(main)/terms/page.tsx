import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  alternates: {
    canonical: '/terms',
  },
  title: 'Terms of Service — Stand Sustainable Foundation',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        headline="Terms of Service"
        subtext="Pending legal review."
      />
    </>
  );
}
