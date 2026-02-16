export default function robots() {
  // CHANGE THIS to your actual live domain
  const baseUrl = 'https://sinomagan.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example: hide private folders if you have any
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}