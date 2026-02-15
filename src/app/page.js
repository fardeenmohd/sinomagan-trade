import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { ArrowRight, Anchor, TrendingUp, ShieldCheck } from 'lucide-react'; // Added icons for the summary
import BusinessCard from '@/components/BusinessCard'; // <--- Import the card

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full bg-brand-navy overflow-hidden">
        
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
            alt="Global Shipping Container"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-20"
            priority
          />
          {/* Gradient to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60"></div>
        </div>
        
        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT SIDE: Text Summary */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 border border-brand-copper/30 rounded-full bg-brand-copper/10 backdrop-blur-sm">
              <span className="text-brand-copper text-xs font-bold tracking-widest uppercase">
                Global Import & Export Specialists
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6 leading-tight">
              Bridging Markets. <br/>
              <span className="text-brand-copper">Delivering Trust.</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Sino Magan Indus is your strategic partner in global trade. We connect the manufacturing precision of the <strong>East</strong> with the resource wealth of the <strong>Gulf</strong> and the logistical power of <strong>India</strong>. 
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
                <div className="flex items-center gap-3 text-gray-200">
                    <div className="p-2 bg-brand-white/10 rounded-lg"><Anchor className="w-5 h-5 text-brand-copper" /></div>
                    <span className="text-sm font-medium">Global Logistics</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                    <div className="p-2 bg-brand-white/10 rounded-lg"><TrendingUp className="w-5 h-5 text-brand-copper" /></div>
                    <span className="text-sm font-medium">Market Sourcing</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                    <div className="p-2 bg-brand-white/10 rounded-lg"><ShieldCheck className="w-5 h-5 text-brand-copper" /></div>
                    <span className="text-sm font-medium">Quality Assured</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="bg-brand-copper text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-brand-navy transition-all shadow-lg hover:shadow-brand-copper/50"
              >
                Request a Quote
              </Link>
              <Link 
                href="/products" 
                className="px-8 py-3 rounded font-bold text-white border border-gray-600 hover:border-brand-copper hover:text-brand-copper transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Business Card (Hidden on very small mobile screens if needed, but visible on others) */}
          <div className="flex-1 w-full max-w-md flex justify-center lg:justify-end">
             {/* We add a tilt/float effect to make it stand out */}
             <div className="transform transition-transform hover:scale-105 duration-500">
                <BusinessCard />
             </div>
          </div>

        </div>
      </div>

      {/* --- PRODUCT GRID (Keep your existing code below this) --- */}
      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-navy font-bold mb-4">Our Export Portfolio</h2>
          <div className="h-1 w-24 bg-brand-copper mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group block h-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
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