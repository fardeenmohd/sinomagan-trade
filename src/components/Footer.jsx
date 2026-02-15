import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-copper">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMN 1: Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12">
                <Image 
                  src="/icon.png" 
                  alt="Sino Magan Indus Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wide leading-none group-hover:text-brand-copper transition-colors">
                  SINO MAGAN
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                  Global Trade LLP
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in global commodity trade, connecting manufacturers in the East to emerging markets worldwide through integrity and logistical excellence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-copper transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-copper transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-copper">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group">About Our Vision <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors flex items-center gap-2 group">Export Portfolio <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/global-reach" className="hover:text-white transition-colors flex items-center gap-2 group">Global Network <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group">Request a Quote <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Global Hubs */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-copper">Regional Hubs</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-brand-copper font-bold">IN:</span> Mumbai, Maharashtra
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-copper font-bold">OM:</span> Muscat, Sultanate of Oman
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-copper font-bold">CN:</span> Pudong, Shanghai
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-copper font-bold">NL:</span> Rotterdam, Netherlands
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Support */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-brand-copper">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-copper" /> +91 8700793327
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-copper" /> sinomaganindustrade@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-copper shrink-0 mt-1" /> 
                <span>C44 Old DLF Colony, <br/> Sector, 14, Gurgaon, <br/> Haryana, India. </span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© {currentYear} SINO MAGAN INDUS GLOBAL TRADE LLP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Trade</Link>
            <Link href="#" className="hover:text-white">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}