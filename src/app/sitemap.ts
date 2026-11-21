import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.toneupsolutions.com'; // UPDATE THIS

  const routes = [
    '',
    '/about',
    '/contact',
    '/services/home-automation',
    '/services/web-development',
    '/services/digital-marketing',
    '/services/video-editing',
    '/services/interior-works',
    '/services/renovations',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}