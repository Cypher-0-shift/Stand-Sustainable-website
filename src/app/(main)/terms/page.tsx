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
      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: 'var(--color-surface-linen)' }}>
        <div className="max-w-4xl mx-auto prose prose-lg" style={{ color: 'var(--color-on-surface)' }}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Stand Sustainable Foundation. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.
          </p>

          <h2>2. Use of Our Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Stand Sustainable Foundation and is protected by applicable copyright and intellectual property laws.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            Stand Sustainable Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="p-6 bg-white rounded-[6px] border my-6" style={{ borderColor: 'var(--color-alabaster)' }}>
            <p className="font-bold mb-1">Stand Sustainable Foundation</p>
            <p>13/B, next to Social, Hauz Khas Village, Deer Park, Hauz Khas, New Delhi, Delhi 110016</p>
            <p>Email: <a href="mailto:standsustainable@gmail.com" style={{ color: 'var(--color-primary)' }}>standsustainable@gmail.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
