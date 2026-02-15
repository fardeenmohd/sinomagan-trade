'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel({ products }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <button 
        onClick={scrollPrev}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl text-brand-navy hover:text-brand-copper transition-all opacity-0 group-hover:opacity-100 hidden lg:block border border-gray-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={scrollNext}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-xl text-brand-navy hover:text-brand-copper transition-all opacity-0 group-hover:opacity-100 hidden lg:block border border-gray-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
              <Link href={`/product/${product.id}`} className="block h-full">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col group/card">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3 group-hover/card:text-brand-copper transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                    <div className="mt-auto flex items-center text-brand-copper font-bold text-sm tracking-widest uppercase">
                      Specifications <ArrowRight className="w-4 h-4 ml-2 group-hover/card:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}