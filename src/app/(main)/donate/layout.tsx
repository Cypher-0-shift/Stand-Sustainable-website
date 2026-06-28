import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate — Stand Sustainable Foundation',
  alternates: {
    canonical: '/donate',
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
