import type { Metadata } from 'next';

// This layout exists to provide server-side metadata (canonical URL)
// for the donate page, which is a 'use client' component and cannot
// export metadata directly.

export const metadata: Metadata = {
  title: 'Donate — Stand Sustainable Foundation',
  alternates: {
    canonical: '/donate',
  },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
