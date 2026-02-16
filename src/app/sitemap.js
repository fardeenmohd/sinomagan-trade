import { products } from '../data/products';

export default async function sitemap() {
  // 1. CHANGE THIS to your actual live domain
  const baseUrl = 'https://sinomagan.vercel.app'; 

  // 2. Define your static pages (Home, About, Contact, etc.)
  const routes = [
    '',
    '/',
    '/about',
    '/contact',
    '/products',
    '/global-reach',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  // 3. Automatically generate URLs for every product
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. Combine and return the full list
  return [...routes, ...productRoutes];
}