import type { NavItem, FooterLink } from '@/types/content';

export const siteConfig = {
  name: 'Stand Sustainable',
  fullName: 'Stand Sustainable Foundation',
  tagline: 'Building a better architecture for poverty alleviation.',
  description: 'Building a better architecture for poverty alleviation through structural change, community capacity building, and institutional transparency across India.',
  copyright: '© 2026 Stand Sustainable Foundation. All rights reserved.',
  url: 'https://standsustainable.org',
  locale: 'en_IN',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Projects & Impact', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reports', href: '/reports' },
  { label: 'Contact', href: '/contact' },
];

export const mobileNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Projects & Impact', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reports & Transparency', href: '/reports' },
  { label: 'Contact', href: '/contact' },
];

export const footerOrganizationLinks: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Projects & Impact', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
];

export const footerActionLinks: FooterLink[] = [
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Reports & Transparency', href: '/reports' },
  { label: 'Contact', href: '/contact' },
  { label: 'Donate', href: '/donate' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Compliance & Security', href: '/compliance' },
  { label: 'Terms of Service', href: '/terms' },
];
