import type { DonationAmount } from '@/types/content';

/* ============================================================
   DONATE PAGE CONTENT
   Source: website-content-master.md
   ⚠️ No dedicated donation page exists on the original site.
      This page is preserved as a functional placeholder.
   ============================================================ */

export const donateHero = {
  headline: 'Your support helps us stand together for sustainability.',
};

export const donationAmounts: DonationAmount[] = [
  { value: 500, currency: '₹', label: '1 Week Meals' },
  { value: 1000, currency: '₹', label: '1 Month Training', isDefault: true },
  { value: 2500, currency: '₹', label: 'Clean Water Kit' },
  { value: 5000, currency: '₹', label: 'Annual Supplies' },
];

export const frequencyOptions = [
  { value: 'one-time', label: 'One-Time' },
  { value: 'monthly', label: 'Monthly' },
] as const;

export const trustBadges = [
  { icon: 'verified', label: 'Registered NGO (India)' },
  { icon: 'security', label: 'Secure Encrypted Payment' },
];

export const thankYouContent = {
  headline: 'Thank You.',
  body: 'Your support has been received. We\'ve sent a receipt to your email, along with details on how your contribution is helping us work for sustainability in vulnerable and marginalised communities.',
  ctaLabel: 'Return Home',
  ctaHref: '/',
  image: '/images/hero_india.png',
  imageAlt: 'Stand Sustainable Foundation community impact',
};

export const feeCoverOption = {
  label: 'I\'d like to cover the transaction fees (₹20) so 100% goes to the cause.',
  fee: 20,
};
