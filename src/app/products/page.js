import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { ArrowRight, PackageSearch, ArrowUpRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      
      {/* --- PAGE HEADER --- */}
      <div className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-4 block">
            Global Trade Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Connecting Markets, <br/> <span className="text-brand-copper">Delivering Excellence.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our curated selection of high-demand commodities. From agricultural staples to industrial raw materials, we ensure premium quality and reliable logistics.
          </p>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-grow">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group block h-full">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col overflow-hidden relative">
                
                {/* Image Container with Zoom Effect */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Decorative Icon */}
                  <div className="absolute -top-6 right-6 bg-brand-copper text-white p-3 rounded-full shadow-lg group-hover:bg-brand-navy transition-colors">
                     <ArrowUpRight className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-copper transition-colors">
                    {product.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gray-200 mb-4 group-hover:bg-brand-copper transition-colors"></div>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-brand-slate uppercase tracking-wide">
                      View Specifications
                    </span>
                    <ArrowRight className="w-5 h-5 text-brand-crimson group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* --- CUSTOM SOURCING CTA --- */}
      <div className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-4 bg-brand-white rounded-full mb-6 shadow-sm">
                <PackageSearch className="w-8 h-8 text-brand-navy" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">
                Don't see what you need?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
                Our network extends far beyond this catalog. We specialize in custom sourcing for specific industrial and agricultural requirements.
            </p>
            <Link 
                href="/contact"
                className="inline-block bg-brand-navy text-white px-10 py-4 rounded font-bold hover:bg-brand-copper transition-colors shadow-lg"
            >
                Request Custom Sourcing
            </Link>
        </div>
      </div>
    </div>
  );
}