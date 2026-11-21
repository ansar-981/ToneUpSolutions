export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Prevent crawlers from hitting the API
    },
    sitemap: 'https://www.toneupsolutions.com/sitemap.xml', // UPDATE THIS
  };
}