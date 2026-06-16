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
      <TopNavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
