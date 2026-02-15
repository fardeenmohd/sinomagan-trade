import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function BusinessCard() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl border-l-8 border-brand-copper max-w-md w-full relative overflow-hidden group">
      
      {/* Decorative Background Arc */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-navy/5 rounded-full blur-3xl transition-all group-hover:bg-brand-navy/10"></div>

      {/* --- HEADER SECTION (Logo + Text Side-by-Side) --- */}
      <div className="flex items-center gap-5 mb-8 relative z-10 border-b border-gray-100 pb-6">
        
        {/* Logo */}
        <div className="relative w-16 h-16 shrink-0">
             <Image 
               src="/icon.png" 
               alt="Sino Magan Logo" 
               fill 
               className="object-contain"
             />
        </div>

        {/* Company Name */}
        <div>
           <h3 className="text-xl font-serif font-bold text-brand-navy leading-tight">
             Sino Magan <br/> Indus
           </h3>
           <p className="text-[10px] text-brand-copper uppercase tracking-widest mt-1 font-bold">
             Global Trade LLP
           </p>
        </div>
      </div>

      {/* --- CONTACT DETAILS --- */}
      <div className="space-y-4 relative z-10">
        
        <div className="flex items-center text-brand-slate group/item hover:translate-x-1 transition-transform">
          <div className="w-8 h-8 rounded-full bg-brand-white flex items-center justify-center mr-4 text-brand-crimson">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">+91 8700793327</span>
        </div>

        <div className="flex items-center text-brand-slate group/item hover:translate-x-1 transition-transform">
          <div className="w-8 h-8 rounded-full bg-brand-white flex items-center justify-center mr-4 text-brand-copper">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">sinomaganindustrade@gmail.com</span>
        </div>

        <div className="flex items-center text-brand-slate group/item hover:translate-x-1 transition-transform">
          <div className="w-8 h-8 rounded-full bg-brand-white flex items-center justify-center mr-4 text-brand-navy">
            <Globe className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">www.sinomagan.com</span>
        </div>

        <div className="flex items-start text-brand-slate group/item hover:translate-x-1 transition-transform">
          <div className="w-8 h-8 rounded-full bg-brand-white flex items-center justify-center mr-4 text-brand-navy mt-1 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-sm leading-snug">
            C44, Old DLF Colony, <br/>
            Sector-14, Gurgaon, <br/>
            Haryana, India.
          </span>
        </div>

      </div>
    </div>
  );
}