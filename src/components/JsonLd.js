export default function JsonLd({ product }) {
  // Construct the structured data object
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.image,
    description: product.shortDesc, // or product.description
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Sino Magan Indus',
    },
    offers: {
      '@type': 'Offer',
      url: `https://sinomagan.vercel.app/product/${product.id}`,
      priceCurrency: 'USD',
      price: '0.00', // Set to '0' or a specific price if you list one. For B2B, '0' + availability is common.
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}