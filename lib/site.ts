export const site = {
  name: 'SafeSight',
  url: 'https://safesight.ca',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || 'khashayar.ghorab@ucalgary.ca',
  description: 'SafeSight is developing wearable AI to support construction safety. Explore our human-led approach and potential pilot opportunities.',
};
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/technology/', label: 'Technology' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
