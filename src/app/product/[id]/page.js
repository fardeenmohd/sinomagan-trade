import { products } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';
import BusinessCard from '@/components/BusinessCard';
import { ArrowLeft } from 'lucide-react';

// This helps Next.js know which pages to build
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// ⚠️ CHANGE 1: The component must be 'async'
export default async function ProductDetail({ params }) {
  
  // ⚠️ CHANGE 2: You must await params in Next.js 15+
  const { id } = await params; 
  
  // Now we search using the resolved ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-navy">Product Not Found</h1>
          <p className="text-brand-slate">Could not find product with ID: {id}</p>
          <Link href="/" className="text-brand-copper hover:underline mt-4 block">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-brand-navy mb-8 hover:text-brand-copper transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Left Column: Product Details */}
           <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-96 w-full">
                 <Image 
                   src={product.image} 
                   alt={product.title} 
                   fill 
                   style={{ objectFit: "cover" }}
                   priority
                 />
              </div>
              <div className="p-8">
                 <h1 className="font-serif text-4xl font-bold text-brand-navy mb-4">{product.title}</h1>
                 <p className="text-lg text-brand-slate leading-relaxed mb-8 border-l-4 border-brand-copper pl-4">
                    {product.description}
                 </p>
                 
                 <h3 className="text-xl font-bold text-brand-navy mb-4">Export Specifications</h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specs.map((spec, i) => (
                       <li key={i} className="bg-brand-white p-3 rounded-lg text-sm text-brand-slate flex items-start">
                          <span className="w-2 h-2 bg-brand-crimson rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          {spec}
                       </li>
                    ))}
                 </ul>

                 <div className="mt-10 pt-8 border-t border-gray-100">
                    <Link href="/contact" className="inline-block bg-brand-navy text-white px-8 py-3 rounded hover:bg-brand-copper transition-colors font-semibold">
                      Request Quotation
                    </Link>
                 </div>
              </div>
           </div>
           
           {/* Right Column: Business Card */}
           <div className="lg:col-span-1">
              <div className="sticky top-8">
                 <BusinessCard />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}