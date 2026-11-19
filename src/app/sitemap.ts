import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hcgbiologyacademy.com';

  const routes = [
    '',
    '/about',
    '/teacher',
    '/courses',
    '/courses/as-level-biology',
    '/courses/a-level-biology',
    '/fees',
    '/admissions',
    '/testimonials',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/courses') ? 0.9 : 0.8,
  }));
}
