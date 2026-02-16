import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { ArrowRight, PackageSearch, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Our Products - Wholesale Spices, Rice, Meat & Industrial Supplies',
  // Result: "Our Products - Wholesale Spices, Rice, Meat & Industrial Supplies | Sino Magan Indus"

  description: 'Browse our extensive catalog of premium Indian exports. We supply bulk Red Onions, Basmati Rice, Halal Buffalo Meat, and LME Grade A Copper Cathodes to global markets with certified quality assurance.',

  keywords: [
    'Wholesale Food Suppliers India',
    'Bulk Agricultural Commodities',
    'Indian Spices Catalog',
    'Frozen Meat Exporters List',
    'Industrial Raw Materials',
    'Export Quality Products',
    'Sino Magan Indus Catalog'
  ],

  openGraph: {
    title: 'Sino Magan Indus Product Catalog',
    description: 'Explore our premium range of verified Indian exports. Sourcing excellence for global businesses.',
    url: 'https://sinomagan.vercel.app/products',
    images: [
      {
        url: '/images/products-og.jpg', // A collage image of your top 4-5 products
        width: 1200,
        height: 630,
        alt: 'Sino Magan Indus Product Range',
      },
    ],
  },

  alternates: {
    canonical: 'https://sinomagan.vercel.app/products',
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col">
      
      {/* --- PAGE HEADER --- */}
      <div className="bg-[#001d3d] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-copper font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            Global Trade Portfolio
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight">
            Connecting Markets, <br/> <span className="text-brand-copper">Delivering Excellence.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Explore our curated selection of high-demand commodities. From agricultural staples to industrial raw materials.
          </p>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group block h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-brand-navy mb-3 group-hover:text-brand-copper transition-colors tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 mb-8 line-clamp-3 leading-relaxed font-medium">
                    {product.shortDesc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Specifications
                    </span>
                    <ArrowRight className="w-5 h-5 text-brand-copper group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- CUSTOM SOURCING --- */}
      <div className="bg-[#f5f5f7] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy mb-6 tracking-tight">
                Custom Sourcing Requirements
            </h2>
            <p className="text-slate-600 mb-10 text-lg font-medium">
                Our network extends far beyond this catalog. We specialize in custom sourcing for specific industrial and agricultural needs.
            </p>
            <Link 
                href="/contact"
                className="inline-block bg-brand-navy text-white px-10 py-4 rounded-full font-semibold hover:bg-brand-copper transition-all shadow-lg"
            >
                Connect with our Trade Desk
            </Link>
        </div>
      </div>
    </div>
  );
}