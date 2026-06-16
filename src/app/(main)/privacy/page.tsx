import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy — Stand Sustainable Foundation',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        headline="Privacy Policy"
        subtext="Pending legal review."
      />
    </>
  );
}
