import { MetadataRoute } from 'next';
import { practiceAreas } from '@/data/practiceAreas';
import { attorneys } from '@/data/attorneys';

const SITE_URL = 'https://jj-lawfirm.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en'];
  const now = new Date();

  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/reservation', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/features', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/legal-notice', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/practice-areas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/team', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${SITE_URL}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }

    // Practice area pages
    for (const area of practiceAreas) {
      entries.push({
        url: `${SITE_URL}/${locale}/practice-areas/${area.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    // Attorney pages
    for (const attorney of attorneys) {
      entries.push({
        url: `${SITE_URL}/${locale}/team/${attorney.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
