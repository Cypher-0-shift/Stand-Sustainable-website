import type { DonationAmount } from '@/types/content';

/* ============================================================
   DONATE PAGE CONTENT
   Source: Stitch commitment_stand_sustainable_foundation screen
   ============================================================ */

export const donateHero = {
  headline: 'Your commitment builds a better architecture for tomorrow.',
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
  { icon: 'verified', label: '501(c)(3) Certified' }, // ⚠️ INCORRECT — Indian NGO
  { icon: 'security', label: 'Secure Encrypted Payment' },
];

export const thankYouContent = {
  headline: 'Thank You.',
  body: 'Your commitment has been secured. We\'ve sent a receipt to your email, along with details on how your contribution is building a better architecture for those who need it most.',
  ctaLabel: 'Return Home',
  ctaHref: '/',
  image: '/images/hero_india.png',
  imageAlt: 'Close-up portrait of a child smiling warmly in soft natural light',
};

export const feeCoverOption = {
  label: 'I\'d like to cover the transaction fees (₹20) so 100% goes to the cause.',
  fee: 20,
};
