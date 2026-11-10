import type { Metadata } from 'next';
import { site } from './site';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const image = { url: '/images/construction-hero.webp', alt: 'Tower cranes above a concrete building under construction' };

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_CA',
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
  };
}
