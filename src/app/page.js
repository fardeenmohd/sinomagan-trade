import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products'; // Ensure this path is correct
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[600px] w-full bg-brand-navy overflow-hidden">
        {/* Background Image: Needs 'fill' and parent must be relative */}
        <Image 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
          alt="Global Shipping"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20"
          priority // Loads immediately for better LCP (Core Web Vitals)
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
            Bridging <span className="text-brand-copper">Civilizations.</span><br/>
            Modernizing <span className="text-brand-copper">Trade.</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mb-8 leading-relaxed">
            Sino Magan Indus connects the manufacturing power of the East, the resources of the Gulf, and the logistics of India.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/contact" 
              className="bg-brand-copper text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-brand-navy transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-navy font-bold mb-4">Our Export Portfolio</h2>
          <div className="h-1 w-24 bg-brand-copper mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group block h-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                
                {/* Product Image Container */}
                <div className="relative h-64 w-full">
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-copper transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDesc}</p>
                  <div className="mt-auto flex items-center text-brand-crimson font-medium text-sm">
                    View Specs <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}