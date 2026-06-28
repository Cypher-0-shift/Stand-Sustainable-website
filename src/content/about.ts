/* ============================================================
   ABOUT US PAGE CONTENT
   Source: website-content-master.md
   ============================================================ */

export const overviewSection = {
  headline: 'Working for Sustainability Across India.',
  body: 'We are working on a social project to ensure sustainability among all vulnerable and marginalised communities, with a key focus on the Sustainable Development Goals. We believe in the mainstreaming of climate change, gender equality, and access to education and livelihood as a necessity in development projects.',
  backgroundImage: '/images/content/mhm.jpg', // From website-content-master.md Image 3
};

export const missionSection = {
  headline: 'Our Mission',
  body: 'We focus on making the maximum positive effort for our community. Our members and volunteers provide the momentum that helps us affect change. Using data-driven models, we provide solutions that make a long-lasting difference.',
};

export const historySection = {
  headline: 'Our History',
  body: 'Seeing a need for energetic, nonprofit work in this area, we formed our organization to provide sensible solutions. We\'ve consistently grown since then, all thanks to the helping hands of this amazing community! Our amazing team of regulars and part-time volunteers are committed to helping others. We take our convictions and turn them into action.',
};

import { programsList } from './programs';

export const programsSection = {
  headline: 'Our Programs',
  body: 'We empower communities and drive change through these core focus areas:',
  programs: programsList.map(p => ({
    icon: p.icon,
    title: p.title,
    description: p.overview,
  })),
};
