import type { TestimonialItem } from '@/types/content';

/* ============================================================
   STORY PAGE CONTENT
   Source: Stitch story_stand_sustainable_foundation screen
   ⚠️ Items marked verified: false require client confirmation
   ============================================================ */

export const storyHero = {
  headline: 'Dignity for every community,',
  headlineItalic: 'forever.',
  subtext: 'We are building a better architecture for poverty alleviation. One that values structural change over temporary relief.',
  caption: 'Aaditya, Maharashtra, 2024',
  image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop',
  imageAlt: 'Portrait of an elderly Indian farmer in warm golden light, Maharashtra, India',
};

export const scaleOfChallenge = {
  headline: 'The architecture of poverty is deeply entrenched.',
  body: 'For decades, the approach has been reactive. Band-aids applied to systemic wounds. But charity alone cannot dismantle generational cycles of deprivation. It requires an institutional overhaul.',
  image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop',
  imageAlt: 'Rural infrastructure in Bihar, India showing community development',
  caption: 'Rural Infrastructure, Bihar, 2023',
};

export const traditionalSolutions = {
  eyebrow: 'The Flaw in the System',
  headline: 'Why traditional solutions fail',
  body1: 'Dependency is not empowerment. When aid models focus strictly on immediate resource distribution, they inadvertently bypass the structural deficits that caused the need in the first place.',
  body2: 'We examined decades of data across rural India. The conclusion was stark: without localized capacity building, financial capital dissipates. True sustainability requires infrastructure, knowledge transfer, and unwavering institutional support.',
  pullQuote: '"It is not about giving what is lacking, but building what can last."',
};

export const methodology = {
  eyebrow: 'Our Methodology',
  headline: 'Capacity, not Charity',
  body: 'We partner with local leaders to establish permanent agricultural and economic frameworks. By treating rural communities as institutional partners rather than beneficiaries, we engineer permanence.',
  image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
  imageAlt: 'Capacity building program showing agricultural training in Gujarat',
  caption: 'Seed Program, Gujarat, 2024',
};

export const testimonial: TestimonialItem = {
  quote: '"The foundation did not just bring water; they brought the engineering knowledge required for us to maintain it ourselves. True ownership changed everything."',
  name: 'Meena Devi',
  role: 'Village Council Head',
  location: 'Rajasthan, India',
  year: '2024',
  image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2070&auto=format&fit=crop',
  imageAlt: 'Portrait of Meena Devi',
  verified: false,
};

export const transitionCta = {
  headline: 'The narrative is only as strong as its outcomes.',
  ctaLabel: 'See the Evidence',
  ctaHref: '/projects',
};

export const sdgAlignment = {
  headline: 'Our Commitment to the SDGs',
  statement: 'We are proud to align our grassroots initiatives with the United Nations Sustainable Development Goals.',
  note: "These goals aren't just icons on a website for us. They represent the real, measurable change we are actively working towards in our communities every single day.",
  badges: [
    { number: '1', label: 'No Poverty', color: '#E5243B' },
    { number: '4', label: 'Quality Education', color: '#C5192D' },
    { number: '5', label: 'Gender Equality', color: '#FF3A21' },
    { number: '6', label: 'Clean Water', color: '#26BDE2' },
    { number: '7', label: 'Clean Energy', color: '#FCC30B' },
    { number: '13', label: 'Climate Action', color: '#3F7E44' },
  ]
};

export const partnerStrip = {
  label: 'Trusted By',
  partners: [
    { name: 'Tata Group', logo: '/images/logos/tata.svg' },
    { name: 'Reliance Industries', logo: '/images/logos/reliance.svg' },
    { name: 'Mahindra', logo: '/images/logos/mahindra.svg' },
    { name: 'Infosys', logo: '/images/logos/infosys.svg' },
    { name: 'Wipro', logo: '/images/logos/wipro.svg' },
    { name: 'ITC Limited', logo: '/images/logos/itc.svg' },
    { name: 'HDFC Bank', logo: '/images/logos/hdfc.svg' },
    { name: 'State Bank of India', logo: '/images/logos/sbi.svg' },
  ]
};

export const editorialNews = {
  headline: 'Institutional Perspective',
  ctaLabel: 'All Publications',
  ctaHref: '/reports',
  articles: [
    {
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop',
      category: 'Field Report',
      title: 'Measuring the Multiplier Effect of Rural Micro-Grids',
      excerpt: 'A 24-month longitudinal study on the economic acceleration following solar deployment in Rajasthan.'
    },
    {
      image: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop',
      category: 'Policy Brief',
      title: 'Digital Literacy as Core Infrastructure',
      excerpt: 'Why internet access must be treated with the same urgency as clean water and electricity.'
    },
    {
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop',
      category: 'Opinion',
      title: 'The End of the Savior Complex',
      excerpt: 'Shifting power from global headquarters to local community cooperatives.'
    }
  ]
};

export const actionCta = {
  headline: 'Be the Catalyst.',
  subStatement: 'Whether you represent an institutional partner or wish to contribute individually, this work requires your agency.',
  cta1: { label: 'Apply for a Grant', href: '/partner' },
  cta2: { label: 'Volunteer with Us', href: '/contact' }
};
