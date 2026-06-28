import type { NavItem, FooterLink } from '@/types/content';

export const siteConfig = {
  name: 'Stand Sustainable',
  fullName: 'Stand Sustainable Foundation',
  tagline: 'Lets Stand Together.',
  description: 'Working for sustainability',
  copyright: 'Copyright © 2026 Stand Sustainable - All Rights Reserved.',
  url: 'https://standsustainable.org',
  locale: 'en_IN',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Projects & Impact', href: '/projects/' },
  { label: 'Gallery', href: '/gallery/' },

  { label: 'Contact', href: '/contact/' },
];

export const mobileNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Projects & Impact', href: '/projects/' },
  { label: 'Gallery', href: '/gallery/' },

  { label: 'Contact', href: '/contact/' },
];

export const footerOrganizationLinks: FooterLink[] = [
  { label: 'About Us', href: '/about/' },
  { label: 'Projects & Impact', href: '/projects/' },
  { label: 'Gallery', href: '/gallery/' },
];

export const footerActionLinks: FooterLink[] = [
  { label: 'Partner With Us', href: '/partner/' },

  { label: 'Contact', href: '/contact/' },
  { label: 'Donate', href: '/donate/' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Compliance & Security', href: '/compliance/' },
  { label: 'Terms of Service', href: '/terms/' },
];
