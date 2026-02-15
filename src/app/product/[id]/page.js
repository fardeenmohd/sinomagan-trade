import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { ArrowLeft, CheckCircle2, FileText, Globe, Shield } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function ProductDetail({ params }) {
  const { id } = await params; 

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* --- BREADCRUMBS / BACK NAV --- */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/products" className="flex items-center gap-2 text-slate-400 hover:text-brand-copper transition-colors font-semibold text-sm group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Product Visual */}
          <div className="space-y-6">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image 
                src={product.image} 
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Quick Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
               <div className="bg-[#f5f5f7] p-4 rounded-2xl text-center">
                  <Shield className="w-5 h-5 mx-auto mb-2 text-brand-copper" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy">Quality Assured</span>
               </div>
               <div className="bg-[#f5f5f7] p-4 rounded-2xl text-center">
                  <Globe className="w-5 h-5 mx-auto mb-2 text-brand-copper" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy">Global Shipping</span>
               </div>
               <div className="bg-[#f5f5f7] p-4 rounded-2xl text-center">
                  <FileText className="w-5 h-5 mx-auto mb-2 text-brand-copper" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy">SGS Certified</span>
               </div>
            </div>
          </div>

          {/* RIGHT: Product Specs & Content */}
          <div className="flex flex-col">
            <span className="text-brand-copper font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Commodity ID: {product.id.toUpperCase()}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-brand-navy">
              {product.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
              {product.shortDesc}
            </p>

            {/* Technical Specifications Table */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 mb-10">
              <h3 className="font-semibold text-xl mb-6 tracking-tight">Technical Specifications</h3>
              <div className="space-y-4">
                {product.specs?.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <span className="font-semibold text-brand-navy">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4 mb-10">
               {product.features?.map((feature, index) => (
                 <div key={index} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-copper" />
                    {feature}
                 </div>
               ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="flex-1 bg-brand-navy text-white text-center py-4 rounded-full font-semibold hover:bg-brand-copper transition-all shadow-lg shadow-brand-navy/10"
              >
                Request Quote
              </Link>
              <button className="flex-1 border border-gray-200 text-brand-navy py-4 rounded-full font-semibold hover:bg-gray-50 transition-all">
                Download PDF Catalog
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}