import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/technology/',
    '/about/',
    '/research/',
    '/research/ai-construction-job-safety-analysis/',
    '/resources/construction-safety-observation-report/',
    '/contact/',
    '/privacy/',
  ];
  return paths.map(path => ({ url: new URL(path, site.url).href }));
}
