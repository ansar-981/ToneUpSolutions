import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Prevent crawlers from hitting the API
    },
    sitemap: 'https://www.toneupsolutions.com/sitemap.xml', // UPDATE THIS
  };
}