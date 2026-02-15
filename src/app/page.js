import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';
import { ArrowRight, Anchor, TrendingUp, ShieldCheck, MapPin, Globe } from 'lucide-react';
import BusinessCard from '@/components/BusinessCard';
import ProductCarousel from '@/components/ProductCarousel';

// --- DATA: Countries for Homepage ---
const globalNetwork = [
  { name: "India", flag: "🇮🇳", role: "Global HQ & Sourcing" },
  { name: "China", flag: "🇨🇳", role: "Industrial Procurement" },
  { name: "Oman", flag: "🇴🇲", role: "Gulf Distribution" },
  { name: "Saudi Arabia", flag: "🇸🇦", role: "Strategic Market" },
  { name: "Netherlands", flag: "🇳🇱", role: "Euro Logistics Hub" },
  { name: "Poland", flag: "🇵🇱", role: "Central Europe Gateway" },
  { name: "Indonesia", flag: "🇮🇩", role: "Resource Origin" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* --- HERO SECTION (Unchanged) --- */}
      <div className="relative w-full bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
            alt="Global Shipping Container"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
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
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                {/* Primary CTA */}
                <Link 
                  href="/contact" 
                  className="bg-brand-copper text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-brand-navy transition-all shadow-lg hover:shadow-brand-copper/50 text-center"
                >
                  Request a Quote
                </Link>

                {/* Secondary Link 1: Products */}
                <Link 
                  href="/products" 
                  className="px-8 py-3 rounded font-bold text-white border border-gray-600 hover:border-brand-copper hover:text-brand-copper transition-all text-center flex items-center justify-center gap-2"
                >
                  View Portfolio
                </Link>

                {/* Secondary Link 2: Global Reach (NEW) */}
                <Link 
                  href="/global-reach" 
                  className="px-8 py-3 rounded font-bold text-white border border-gray-600 hover:border-brand-copper hover:text-brand-copper transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Countries
                </Link>
              </div>
          </div>
          <div className="flex-1 w-full max-w-md flex justify-center lg:justify-end">
             <div className="transform transition-transform hover:scale-105 duration-500">
                <BusinessCard />
             </div>
          </div>
        </div>
      </div>

      {/* --- EXPORT PORTFOLIO SECTION --- */}
      <div className="bg-brand-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-brand-copper font-bold tracking-widest uppercase text-xs mb-2 block">
                Our Commodities
              </span>
              <h2 className="font-serif text-4xl text-brand-navy font-bold">Export Portfolio</h2>
            </div>
            
            <Link 
              href="/products" 
              className="group flex items-center gap-2 text-brand-navy font-bold hover:text-brand-copper transition-colors"
            >
              View Full Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* THE CAROUSEL */}
          <ProductCarousel products={products} />
        </div>
        </div>

      {/* --- NEW SECTION: GLOBAL PRESENCE --- */}
      <div className="bg-brand-navy py-20 text-white relative overflow-hidden">
         {/* Background Map Graphic (Subtle) */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                alt="World Map Background"
                fill
                className="object-cover"
            />
         </div>

         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                    <span className="text-brand-copper font-bold tracking-widest uppercase text-xs mb-2 block">
                        International Reach
                    </span>
                    <h2 className="font-serif text-4xl font-bold">Operating Across 7 Key Markets</h2>
                </div>
                <Link href="/global-reach" className="flex items-center text-brand-copper hover:text-white transition-colors font-bold">
                    Explore Our Network <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {globalNetwork.map((country, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg text-center hover:bg-white/10 transition-colors group">
                        <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                            {country.flag}
                        </div>
                        <h3 className="font-bold text-white text-sm mb-1">{country.name}</h3>
                        <p className="text-gray-400 text-[10px] uppercase tracking-wider">{country.role}</p>
                    </div>
                ))}
            </div>
         </div>
      </div>

    </div>
  );
}