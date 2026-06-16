/* ============================================================
   CONTENT TYPE DEFINITIONS
   Every content interface includes a `verified` flag for
   tracking unverified Stitch-generated content.
   ============================================================ */

export interface SiteContent {
  org: {
    name: string;
    tagline: string;
    description: string;
    registration: string;
    copyright: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  label: string;
  description: string;
  verified: boolean;
}

export interface ProjectItem {
  title: string;
  location: string;
  year: string;
  status?: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
  verified: boolean;
}

export interface LeaderItem {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  verified: boolean;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  location: string;
  year: string;
  image: string;
  imageAlt: string;
  verified: boolean;
}

export interface DonationAmount {
  value: number;
  currency: string;
  label: string;
  isDefault?: boolean;
}

export interface GovernanceItem {
  label: string;
  value: string;
}

export interface ReportItem {
  year: string;
  label: string;
  href: string;
}
