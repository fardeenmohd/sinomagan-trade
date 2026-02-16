import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BusinessCard from '@/components/BusinessCard';
import { MapPin, ArrowRight, ArrowDownLeft, ArrowUpRight, Anchor, Globe } from 'lucide-react';

export const metadata = {
  title: 'Global Reach - Logistics Network & Export Destinations',
  // Result: "Global Reach - Logistics Network & Export Destinations | Sino Magan Indus"

  description: 'Explore the Sino Magan Indus trade network. We export premium commodities to the Gulf, Southeast Asia, Europe, and Africa. Our streamlined logistics ensure timely and secure delivery worldwide.',

  keywords: [
    'International Logistics India',
    'Global Supply Chain',
    'Export Destinations',
    'Shipping to Gulf',
    'Export to Southeast Asia',
    'Trade Network',
    'Sino Magan Indus Locations'
  ],

  openGraph: {
    title: 'Sino Magan Indus | Our Global Footprint',
    description: 'From India to the World. See where we deliver trust and quality.',
    url: 'https://sinomagan.vercel.app/global-reach',
    images: [
      {
        url: '/images/global-map-og.jpg', // A static image of a world map with your trade routes
        width: 1200,
        height: 630,
        alt: 'Sino Magan Indus Global Trade Map',
      },
    ],
  },

  alternates: {
    canonical: 'https://sinomagan.vercel.app/global-reach',
  },
};

// --- DATA: Country Portfolio ---
const countries = [
  {
    name: "India",
    role: "Global Headquarters",
    type: "Export & Operations",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
    description: "The heart of our operations. We source premium agricultural commodities and ceramics directly from manufacturers.",
    services: ["Ceramics & Tiles", "Spices & Rice", "Textiles", "Logistics Control"]
  },
  {
    name: "China",
    role: "Sourcing Hub",
    type: "Import Origin",
    // NEW IMAGE: Shanghai Port / Busy Trade
    image: "https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&q=80&w=800",
    description: "Our direct link to the world's factory. We handle procurement, quality inspection, and shipping of industrial machinery.",
    services: ["Heavy Machinery", "Electronics", "Raw Materials", "Quality Inspections"]
  },
{
    name: "Oman",
    role: "Gulf Gateway",
    type: "Trade Node",
    // VERIFIED WORKING LINK - Port of Muscat
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=800",
    description: "A strategic entry point for the GCC market. We specialize in mineral exports and construction material supply.",
    services: ["Gypsum & Limestone", "Dates", "Construction Supply", "Cross-border Trade"]
  },
  {
    name: "Saudi Arabia",
    role: "Strategic Market",
    type: "Distribution",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=800",
    description: "Serving the rapid infrastructure growth in KSA with reliable supply chains for industrial goods.",
    services: ["Building Materials", "Petrochemicals", "Project Logistics", "Food Imports"]
  },
  {
    name: "Netherlands",
    role: "European Hub",
    type: "Logistics",
    image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&q=80&w=800",
    description: "Leveraging the Port of Rotterdam to distribute Asian goods throughout Western Europe.",
    services: ["Port Logistics", "Flower Exports", "Cocoa & Dairy", "EU Distribution"]
  },
  {
    name: "Poland",
    role: "Central Europe",
    type: "Trade Partner",
    // NEW IMAGE: Warsaw Skyline / Modern Logistics
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=800",
    description: "Connecting Eastern European agriculture and manufacturing with our Asian and Middle Eastern networks.",
    services: ["Apples & Fruits", "Furniture", "Dairy Products", "Overland Transport"]
  },
  {
    name: "Indonesia",
    role: "Resource Origin",
    type: "Sourcing",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    description: "A key partner for energy resources and tropical commodities.",
    services: ["Thermal Coal", "Palm Oil", "Spices", "Timber Products"]
  },
];

export default function GlobalReachPage() {
  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-brand-navy overflow-hidden">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-10">
            <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                alt="World Map"
                fill
                className="object-cover"
            />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
                <span className="text-brand-copper font-bold tracking-widest uppercase text-sm mb-4 block">
                    Our Global Footprint
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
                    7 Countries. <br/>
                    <span className="text-brand-copper">One Seamless Network.</span>
                </h1>
                <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                    Sino Magan Indus operates across key global trade routes. From the manufacturing hubs of East Asia to the ports of Europe, we are everywhere you need us to be.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-gray-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-brand-copper" /> Cross-Continent Logistics
                    </div>
                    <div className="flex items-center gap-2">
                        <Anchor className="w-4 h-4 text-brand-copper" /> Port-to-Port Service
                    </div>
                </div>
            </div>

            {/* Business Card Display */}
            <div className="flex-1 flex justify-center lg:justify-end">
                <div className="transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-brand-copper/20">
                    <BusinessCard />
                </div>
            </div>
        </div>
      </div>

      {/* --- COUNTRIES GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-20 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full">
                    
                    {/* Country Image Header */}
                    <div className="relative h-48 w-full">
                        <Image 
                            src={country.image}
                            alt={country.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent"></div>
                        
                        {/* Country Name Overlay */}
                        <div className="absolute bottom-4 left-6">
                            <h3 className="text-white font-serif text-2xl font-bold flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-brand-copper" />
                                {country.name}
                            </h3>
                        </div>

                        {/* Tag */}
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                {country.role}
                            </span>
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            {country.description}
                        </p>

                        {/* Services List */}
                        <div className="mt-auto">
                            <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">
                                Key Commodities & Services
                            </h4>
                            <ul className="grid grid-cols-2 gap-2">
                                {country.services.map((service, i) => (
                                    <li key={i} className="flex items-start text-xs text-gray-600">
                                        <span className="mr-2 text-brand-copper mt-0.5">▪</span>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* --- Bottom CTA --- */}
        <div className="mt-16 text-center bg-brand-navy/5 rounded-2xl p-10 border border-brand-navy/10">
            <h3 className="font-serif text-2xl text-brand-navy font-bold mb-3">Looking to trade in these regions?</h3>
            <p className="text-gray-600 mb-6">Our local teams possess the regulatory knowledge to clear your goods smoothly.</p>
            <Link href="/contact" className="inline-flex items-center text-brand-copper font-bold hover:text-brand-navy transition-colors">
                Connect with our Trade Desk <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>

      </div>
    </div>
  );
}