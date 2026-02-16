'use client';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductCarousel({ products }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // Navigation Functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  // Sync Dots with Carousel selection
  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group pb-12"> {/* Added pb-12 to make room for dots */}
      
      {/* --- PREV BUTTON --- */}
      <button 
        onClick={scrollPrev}
        className="absolute left-2 lg:-left-6 top-1/3 lg:top-1/2 -translate-y-1/2 z-20 
                   bg-white/90 backdrop-blur-sm p-2 lg:p-3 rounded-full shadow-lg border border-gray-100
                   text-brand-navy hover:text-brand-copper transition-all 
                   opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* --- NEXT BUTTON --- */}
      <button 
        onClick={scrollNext}
        className="absolute right-2 lg:-right-6 top-1/3 lg:top-1/2 -translate-y-1/2 z-20 
                   bg-white/90 backdrop-blur-sm p-2 lg:p-3 rounded-full shadow-lg border border-gray-100
                   text-brand-navy hover:text-brand-copper transition-all 
                   opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* --- VIEWPORT --- */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing px-1" ref={emblaRef}>
        <div className="flex gap-4 lg:gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-2">
              <Link href={`/product/${product.id}`} className="block h-full">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col group/card">
                  {/* Image Container */}
                  <div className="relative h-64 lg:h-72 w-full overflow-hidden">
                    <Image 
                      src={product.image} 
                      alt={product.title}
                      fill
                      className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-brand-navy mb-3 group-hover/card:text-brand-copper transition-colors">
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

      {/* --- DOTS PAGINATION --- */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 py-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`
              w-2.5 h-2.5 rounded-full transition-all duration-300 
              ${index === selectedIndex ? 'bg-brand-copper w-6' : 'bg-gray-300 hover:bg-brand-navy'}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}