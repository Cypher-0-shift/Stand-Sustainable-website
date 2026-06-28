import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  alternates: {
    canonical: '/compliance',
  },
  title: 'Legal & Security Compliance — Stand Sustainable Foundation',
  description: 'Our institutional governance, financial compliance, and data security standards.',
};

export default function CompliancePage() {
  return (
    <>
      <PageHero
        headline="Legal & Security Compliance"
        subtext="Stand Sustainable Foundation maintains standards of institutional governance and transparency in all our operations."
      />

      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: 'var(--color-surface-linen)' }}>
        <div className="max-w-4xl mx-auto prose prose-lg" style={{ color: 'var(--color-on-surface)' }}>
          <h2>1. Legal & Regulatory Compliance</h2>
          <p>
            Stand Sustainable Foundation is a registered non-profit organization operating in India. We adhere to all local and national regulations to ensure transparency and accountability in our operations.
          </p>
          <ul>
            <li><strong>NGO Registration:</strong> Stand Sustainable Foundation is registered as a Section 8 Company (Not for Profit) under the Companies Act, 2013. Registration Number: U85300DL2021NPL385921. Jurisdiction: Registrar of Companies, New Delhi, India.</li>
            <li><strong>Cookie Policy:</strong> We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</li>
          </ul>

          <h2>2. Data & Infrastructure Security</h2>
          <p>
            Our digital infrastructure is secured to protect the privacy of our visitors and supporters. We implement robust security measures to safeguard all personal and financial data.
          </p>
          <ul>
            <li><strong>Payment Processing Security:</strong> All financial transactions are processed via secure, encrypted payment gateways. We do not store credit card data on our servers.</li>
            <li><strong>Data Privacy:</strong> Visitor and supporter data is governed by strict privacy protocols to ensure the security and confidentiality of all personal information.</li>
          </ul>

          <h2>3. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding our compliance standards or data security practices, please contact us:
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
