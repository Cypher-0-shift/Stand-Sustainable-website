import type { StatItem, ProjectItem } from '@/types/content';

/* ============================================================
   PROOF PAGE CONTENT
   Source: website-content-master.md
   Statistics verified against original website content.
   ============================================================ */

export const proofIntro = {
  headline: 'Measurable Impact,',
  headlineLine2: 'Real Change.',
  body: 'We believe in transparent, verifiable outcomes. Our interventions across India focus on sustainability, community empowerment, and the Sustainable Development Goals.',
};

export const impactStats: StatItem[] = [
  {
    value: 1500,
    label: 'Re-usable Pads Distributed',
    description: 'Through our MHM program for migrant workers and their families.',
    verified: true,
  },
  {
    value: 50,
    label: 'Active Volunteers',
    description: 'Mobilized during COVID-19 response across India.',
    verified: true,
  },
  {
    value: 5,
    label: 'Programs & Initiatives',
    description: 'Spanning education, gender, livelihoods, collaborations, and community engagement.',
    verified: true,
  },
];

export const projectsSection = {
  headline: 'Our Initiatives',
  subLabel: 'Programs',
};

export const heroProject: ProjectItem = {
  title: 'Stand Up Against COVID',
  location: 'India',
  year: '2020–2021',
  description: 'Stand Sustainable Foundation has been responding to the COVID crisis in India for over 1 year. Through the MHM program, we raised 1,500 re-usable pads for migrant workers and their family members. During the second wave, we mobilized 50+ volunteers to support people in arranging Oxygen Cylinders, Concentrators, Medical Devices, Hospital Beds, and Ambulance Support.',
  image: '/images/content/mhm-training.webp',
  imageAlt: 'MHM Training program by Stand Sustainable Foundation',
  ctaLabel: 'Learn More',
  ctaHref: '/projects',
  verified: true,
};

export const supportingProjects: ProjectItem[] = [
  {
    title: 'Skill and Livelihood',
    location: 'India',
    year: 'Ongoing',
    description: 'To network with various skills based training Institutions including various vocational institutions to reach to vulnerable section of society.',
    image: '/images/content/icon-skill.jpg',
    imageAlt: 'Skill and Livelihood program icon',
    ctaLabel: 'View Details',
    ctaHref: '/projects',
    verified: true,
  },
  {
    title: 'Gender Empowerment',
    location: 'India',
    year: 'Ongoing',
    description: 'Gender empowerment through access to resources.',
    image: '/images/content/icon-gender.jpg',
    imageAlt: 'Gender empowerment program icon',
    ctaLabel: 'View Details',
    ctaHref: '/projects',
    verified: true,
  }
];
