export const site = {
  name: 'SafeSight',
  url: 'https://safesight.ca',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'khashayar.ghorab@ucalgary.ca',
  description: 'SafeSight is developing wearable AI to help construction teams document site observations, review potential hazards, and track corrective actions.',
};
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/technology/', label: 'Technology' },
  { href: '/about/', label: 'About' },
  { href: '/research/', label: 'Research' },
  { href: '/contact/', label: 'Contact' },
];
