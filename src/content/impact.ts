import type { StatItem, ProjectItem } from '@/types/content';

/* ============================================================
   PROOF PAGE CONTENT
   Source: Stitch proof_stand_sustainable_foundation screen
   ⚠️ ALL stats and projects are UNVERIFIED
   ============================================================ */

export const proofIntro = {
  headline: 'Measurable Impact,',
  headlineLine2: 'Tangible Futures.',
  body: 'We believe in transparent, verifiable outcomes. Our structural interventions across India are designed not just for immediate relief, but for generational resilience.',
};

export const impactStats: StatItem[] = [
  {
    value: 1250000,
    label: 'Lives Impacted',
    description: 'Across 14 states in rural India.',
    verified: false,
  },
  {
    value: 450,
    label: 'Micro-Grids Installed',
    description: 'Bringing reliable solar power to off-grid villages.',
    verified: false,
  },
  {
    value: 12000,
    label: 'Hectares Restored',
    description: 'Transitioned to organic, drought-resistant farming.',
    verified: false,
  },
];

export const projectsSection = {
  headline: 'Structural Interventions',
  subLabel: 'Case Studies',
};

export const heroProject: ProjectItem = {
  title: 'Project Title Pending',
  location: 'Location Pending',
  year: 'TBD',
  description: 'Real project data pending from client.',
  image: '/images/hero_india.png',
  imageAlt: 'Placeholder project image',
  ctaLabel: 'Read Full Report',
  ctaHref: '/reports',
  verified: false,
};

export const supportingProjects: ProjectItem[] = [
  {
    title: 'Women\'s Agritech Hub',
    location: 'Surat, Gujarat',
    year: '2023',
    description: 'A dedicated cooperative providing direct market access and modern agricultural tools to 500+ female farmers.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop',
    imageAlt: 'Women in agricultural fields',
    ctaLabel: 'View Details',
    ctaHref: '/projects',
    verified: false,
  },
  {
    title: 'Clean Water Pipeline',
    location: 'Jaisalmer, Rajasthan',
    year: '2022',
    description: 'Construction of a 15km gravity-fed water pipeline ensuring year-round clean water access for 8 remote villages.',
    image: 'https://images.unsplash.com/photo-1595844730298-b960fa25fa65?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Water infrastructure',
    ctaLabel: 'View Details',
    ctaHref: '/projects',
    verified: false,
  }
];
