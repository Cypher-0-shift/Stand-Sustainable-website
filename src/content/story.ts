import type { TestimonialItem } from '@/types/content';

/* ============================================================
   STORY PAGE CONTENT
   Source: website-content-master.md
   All content verified against https://standsustainable.org/
   ============================================================ */

export const storyHero = {
  headline: 'Lets Stand',
  headlineItalic: 'Together.',
  subtext: 'We are working on social project to ensure sustainability among all vulnerable and marginalised community, with key focus on Sustainable Development Goals.',
  caption: 'Stand Sustainable Foundation',
  image: '/images/content/stock-8609.jpg',
  imageAlt: 'Community sustainability initiative by Stand Sustainable Foundation',
};

export const scaleOfChallenge = {
  headline: 'Stand Up Against COVID',
  body: 'We for past 1 year have been responding to COVID crisis in India. We have through our MHM program have been able raise 1500 re-usable pads for migrant workers and their family members. In the second wave of Covid-19 outbreak India is having an unprecedented impact on its people. There is a huge crisis of medical support leading chaos and confusion in the country. In the light of these challenges, Stand Sustainable Foundation with the help of its team and more than 50 volunteers is trying to support people in arranging Oxygen Cylinders, Concentrators, Medical devices, Hospital Beds, Ambulance support etc.',
  image: '/images/content/mhm-training.jpg',
  imageAlt: 'MHM Training program by Stand Sustainable Foundation',
  caption: 'MHM Training Program',
};

export const traditionalSolutions = {
  eyebrow: 'Our Approach',
  headline: 'Welcome',
  body1: 'We are working on social project to ensure sustainability among all vulnerable and marginalised community, with key focus on Sustainable Development Goals.',
  body2: 'We believe in mainstreaming of climate change, gender and access to education and livelihood as necessity in development projects.',
  pullQuote: '"It is not about giving what is lacking, but building what can last."',
};

export const methodology = {
  eyebrow: 'Our Mission',
  headline: 'Making a Lasting Difference',
  body: 'We focus on making the maximum positive effort for our community. Our members and volunteers provide the momentum that helps us affect change. Using data driven models, we provide solutions that make a long-lasting difference.',
  image: '/images/content/mhm.jpg',
  imageAlt: 'MHM program activity by Stand Sustainable Foundation',
  caption: 'MHM Program, Stand Sustainable Foundation',
};

/* Testimonials: NOT FOUND on the original website */
export const testimonial: TestimonialItem | null = null;

export const transitionCta = {
  headline: 'See what we have accomplished together.',
  ctaLabel: 'View Our Work',
  ctaHref: '/projects',
};

export const sdgAlignment = {
  headline: 'Our Commitment to the SDGs',
  statement: 'We are proud to align our grassroots initiatives with the United Nations Sustainable Development Goals. Our focus areas include sustainability, community empowerment, gender equality, education access, and collaboration.',
  note: "These goals represent the real, measurable change we are actively working towards in our communities every single day — through our programs in education, gender empowerment, skills and livelihood, and collaborations.",
  badges: [
    { number: '1', label: 'No Poverty', color: '#E5243B' },
    { number: '4', label: 'Quality Education', color: '#C5192D' },
    { number: '5', label: 'Gender Equality', color: '#FF3A21' },
    { number: '6', label: 'Clean Water', color: '#26BDE2' },
    { number: '7', label: 'Clean Energy', color: '#FCC30B' },
    { number: '13', label: 'Climate Action', color: '#3F7E44' },
  ]
};

/* Partners: NOT FOUND on the original website */
export const partnerStrip = {
  label: 'Trusted By',
  partners: [] as { name: string; logo: string }[],
};

export const editorialNews = {
  headline: 'Our Programs',
  ctaLabel: 'View All Programs',
  ctaHref: '/projects',
  articles: [
    {
      image: '/images/content/icon-community.jpg',
      category: 'Community Engagement',
      title: 'Our Work',
      excerpt: 'To effectively engage with the marginalised communities on sensitising various issues that can help them in realising their full potential.'
    },
    {
      image: '/images/content/icon-skill.jpg',
      category: 'Livelihood',
      title: 'Skill and Livelihood',
      excerpt: 'To network with various skills based training Institutions including various vocational institutions to reach to vulnerable section of society.'
    },
    {
      image: '/images/content/icon-gender.jpg',
      category: 'Empowerment',
      title: 'Gender',
      excerpt: 'Gender empowerment through access to resources.'
    }
  ]
};

export const actionCta = {
  headline: 'Get Involved.',
  subStatement: 'Our amazing team of regulars and part-time volunteers are committed to helping others. We take our convictions and turn them into action. Think you would be a good fit? Get in touch for more information!',
  cta1: { label: 'Partner With Us', href: '/partner' },
  cta2: { label: 'Contact Us', href: '/contact' }
};
