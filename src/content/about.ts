import type { LeaderItem, GovernanceItem, ReportItem } from '@/types/content';

/* ============================================================
   INSTITUTION PAGE CONTENT
   Source: Stitch institution_stand_sustainable_foundation screen
   ⚠️ Leadership team is FABRICATED by Stitch — needs real data
   ============================================================ */

export const missionSection = {
  headline: 'Building a Better Architecture for Global Sustainability.',
  body: 'We believe that radical transparency and disciplined methodology are the cornerstones of lasting impact. Our foundation operates not just as a charity, but as an institution dedicated to engineering sustainable futures through precise capital allocation and community empowerment.',
  backgroundImage: '/images/hero_india.png',
};

export const methodologySection = {
  headline: 'How We Build',
  body: 'Our methodology shifts the paradigm from traditional aid to structured investment in community agency. We trace every dollar from allocation to tangible outcome, ensuring maximum efficiency and profound local ownership.',
  steps: [
    {
      icon: 'account_balance',
      title: 'Capital Allocation',
      description: 'Strategic funding sourced from institutional partners.',
    },
    {
      icon: 'architecture',
      title: 'Methodical Design',
      description: 'Engineering solutions tailored to specific local ecologies.',
    },
    {
      icon: 'group',
      title: 'Community Agency',
      description: 'Transferring ownership and operational control locally.',
    },
  ],
};

export const leadershipSection = {
  headline: 'Leadership',
  body: 'Guided by a commitment to ethical stewardship and visionary strategy.',
};

/** Real team data pending from client */
export const leaders: LeaderItem[] = [
  {
    name: 'Dr. Arjun Mehta',
    title: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Portrait of Dr. Arjun Mehta',
    verified: false,
  },
  {
    name: 'Dr. Kavita Sharma',
    title: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    imageAlt: 'Portrait of Dr. Kavita Sharma',
    verified: false,
  },
  {
    name: 'Ravi Kumar',
    title: 'Head of Field Engineering',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    imageAlt: 'Portrait of Ravi Kumar',
    verified: false,
  },
];

/** Legal status pending from client */
export const governanceItems: GovernanceItem[] = [
  { label: 'Legal Status', value: 'Registered NGO (India)' },
];

export const governanceSection = {
  headline: 'Governance',
  body: 'Our commitment to radical transparency ensures that every decision is verifiable. We adhere to the highest standards of institutional oversight.',
};

export const reportsSection = {
  headline: 'Annual Reports',
  body: 'Review our complete financial disclosures, impact metrics, and audited statements.',
};

export const annualReports: ReportItem[] = [
  { year: '2025', label: '2025 Impact Audit (India)', href: '/reports' },
  { year: '2024', label: '2024 Field Operations Report', href: '/reports' },
  { year: '2023', label: '2023 Financial Summary', href: '/reports' },
];
