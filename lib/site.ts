export const site = {
  name: 'SafeSight',
  url: 'https://safesight.ca',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'khashayar.ghorab@ucalgary.ca',
  description: 'SafeSight is developing wearable AI for easier safety documentation, AI-assisted review, and human-led corrective-action follow-up.',
};
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/technology/', label: 'Technology' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
