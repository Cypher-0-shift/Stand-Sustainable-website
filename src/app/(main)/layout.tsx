import TopNavBar from '@/components/layout/TopNavBar';
import Footer from '@/components/layout/Footer';

/**
 * Main layout — Wraps Story, Proof, and Institution pages
 * with the full TopNavBar and Footer.
 * The Donate page lives outside this group with a suppressed nav.
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:p-4 focus:bg-white focus:text-[var(--color-primary)] focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
      >
        Skip to main content
      </a>
      <TopNavBar />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
