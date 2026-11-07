import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'SafeSight – Safety Through Intelligence', template: '%s | SafeSight' },
  description: site.description,
  openGraph: { type: 'website', locale: 'en_CA', siteName: 'SafeSight', title: 'SafeSight – Safety Through Intelligence', description: site.description, images: [{ url: '/images/construction-hero.webp', alt: 'Illustrative construction scene for SafeSight' }] },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/brand/safesight-icon.svg' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#000000', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-CA"><head><link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
