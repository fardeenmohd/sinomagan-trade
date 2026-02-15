import { MapPin, Mail, Phone, Globe } from 'lucide-react';

export default function BusinessCard() {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden border-t-4 border-brand-copper max-w-md w-full">
      <div className="bg-brand-navy p-6 text-center">
        <h3 className="font-serif text-2xl text-white font-bold">SINO MAGAN INDUS</h3>
        <p className="text-brand-copper text-sm uppercase tracking-widest mt-1">Global Trade</p>
      </div>
      <div className="p-8 space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="text-brand-crimson w-6 h-6 flex-shrink-0 mt-1" />
          <p className="text-brand-slate">
            C44 Old DLF Colony,<br/>
            Sector-14, Gurgaon,<br/>
            122001, India
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="text-brand-copper w-5 h-5" />
          <a href="mailto:sinomaganindustrade@gmail.com" className="text-brand-slate hover:text-brand-navy font-medium">
            sinomaganindustrade@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Globe className="text-brand-copper w-5 h-5" />
          <span className="text-brand-slate">Global Export Network</span>
        </div>
      </div>
    </div>
  );
}