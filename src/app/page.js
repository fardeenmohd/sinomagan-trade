import Link from 'next/link';
import Image from 'next/image';
import ProductCarousel from '@/components/ProductCarousel';
import BusinessCard from '@/components/BusinessCard';
import { ArrowRight, Anchor, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import { products } from '@/data/products';

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
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full bg-[#001d3d] overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
            alt="Global Shipping Container"
            fill
            className="opacity-15 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001d3d] via-[#001d3d]/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-36 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="text-brand-copper text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
              Global Import & Export Specialists
            </span>

            {/* Apple Style Heading: Tight tracking, semibold */}
            <h1 className="text-5xl md:text-7xl text-white font-semibold mb-8 tracking-tight leading-[1.1]">
              Bridging Markets. <br/>
              <span className="text-brand-copper">Delivering Trust.</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Sino Magan Indus is your strategic partner in global trade. We connect the precision of the <strong>East</strong> with the resources of the <strong>Gulf</strong>.
            </p>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="bg-brand-copper text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-navy transition-all shadow-xl text-center">
                Request a Quote
              </Link>
              <Link href="/products" className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-brand-copper hover:text-brand-copper transition-all text-center">
                View Portfolio
              </Link>
              <Link href="/global-reach" className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-brand-copper hover:text-brand-copper transition-all text-center flex items-center justify-center gap-2 group">
                <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Global Reach
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end drop-shadow-2xl">
            <BusinessCard />
          </div>
        </div>
      </div>

      {/* --- EXPORT PORTFOLIO --- */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-brand-copper font-bold tracking-widest uppercase text-xs mb-3 block">
                 Our Commodities
              </span>
              <h2 className="text-4xl md:text-5xl text-brand-navy font-semibold tracking-tight">Export Portfolio</h2>
            </div>
            <Link href="/products" className="group flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-copper transition-colors">
              View Full Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <ProductCarousel products={products} />
        </div>
      </div>

      {/* --- GLOBAL PRESENCE --- */}
      <div className="bg-[#f5f5f7] py-24 text-brand-navy">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-brand-copper font-bold tracking-widest uppercase text-xs mb-3 block">
                    International Reach
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Operating Across 7 Markets</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {globalNetwork.map((country, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all group">
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                            {country.flag}
                        </div>
                        <h3 className="font-semibold text-brand-navy text-sm mb-1">{country.name}</h3>
                        <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">{country.role}</p>
                    </div>
                ))}
            </div>
         </div>
      </div>
    </div>
  );
}