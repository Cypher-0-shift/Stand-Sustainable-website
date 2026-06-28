import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = {
  alternates: {
    canonical: '/privacy',
  },
  title: 'Privacy Policy — Stand Sustainable Foundation',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        headline="Privacy Policy"
        subtext="Our commitment to your privacy under the Digital Personal Data Protection (DPDP) Act, 2023."
      />
      
      <section className="py-16 px-6 md:px-16" style={{ backgroundColor: 'var(--color-surface-linen)' }}>
        <div className="max-w-4xl mx-auto prose prose-lg" style={{ color: 'var(--color-on-surface)' }}>
          <h2>1. Introduction</h2>
          <p>
            Stand Sustainable Foundation ("we," "us," or "our") respects your privacy and is committed to protecting your personal data in accordance with the Digital Personal Data Protection (DPDP) Act, 2023 of India. This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website or interact with us.
          </p>

          <h2>2. Types of Personal Data Collected</h2>
          <p>We may collect the following types of personal data when you use our contact forms, partner forms, or website:</p>
          <ul>
            <li><strong>Identity Data:</strong> Name, organization name.</li>
            <li><strong>Contact Data:</strong> Email address, phone number (if provided in messages).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and usage data via essential cookies and security systems.</li>
            <li><strong>Communication Data:</strong> Any messages or inquiries you submit to us.</li>
          </ul>

          <h2>3. Purpose of Processing</h2>
          <p>We process your personal data solely for the following lawful purposes:</p>
          <ul>
            <li>To respond to your inquiries and support requests.</li>
            <li>To evaluate and establish potential partnerships or collaborations.</li>
            <li>To ensure the security and integrity of our website (e.g., rate limiting, spam prevention).</li>
            <li>To analyze aggregated website traffic for performance improvements.</li>
          </ul>

          <h2>4. Data Retention Period</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. General inquiries and contact form submissions are typically retained for a maximum of <strong>1 year</strong> after the communication is resolved, unless a longer retention period is required by law.
          </p>

          <h2>5. Your Rights as a Data Principal</h2>
          <p>Under the DPDP Act 2023, you have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Right to Access:</strong> Request a summary of your personal data being processed by us.</li>
            <li><strong>Right to Correction & Erasure:</strong> Request correction of inaccurate data or erasure of data no longer necessary for the stated purpose.</li>
            <li><strong>Right to Grievance Redressal:</strong> Register a grievance regarding the processing of your data.</li>
            <li><strong>Right to Nominate:</strong> Nominate an individual to exercise your rights in the event of death or incapacity.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for data processing at any time (this will not affect the legality of processing prior to withdrawal).</li>
          </ul>

          <h2>6. Grievance Officer</h2>
          <p>
            If you have any questions, concerns, or wish to exercise your rights under the DPDP Act, please contact our designated Grievance Officer:
          </p>
          <div className="p-6 bg-white rounded-[6px] border my-6" style={{ borderColor: 'var(--color-alabaster)' }}>
            <p className="font-bold mb-1">Grievance Officer</p>
            <p>Stand Sustainable Foundation</p>
            <p>13/B, next to Social, Hauz Khas Village, Deer Park, Hauz Khas, New Delhi, Delhi 110016</p>
            <p>Email: <a href="mailto:standsustainable@gmail.com" style={{ color: 'var(--color-primary)' }}>standsustainable@gmail.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
