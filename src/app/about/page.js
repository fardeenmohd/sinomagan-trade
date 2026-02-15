import { ShieldCheck, Globe2, Handshake, Factory, Truck, CheckCircle2 } from 'lucide-react';

const values = [
  {
    title: "Quality Integrity",
    desc: "We don't just source; we verify. Every commodity undergoes rigorous quality checks.",
    icon: <ShieldCheck className="w-10 h-10 text-brand-copper" />
  },
  {
    title: "Global Reach",
    desc: "With a physical presence in 7 countries, we navigate local regulations for you.",
    icon: <Globe2 className="w-10 h-10 text-brand-copper" />
  },
  {
    title: "Reliable Partnership",
    desc: "Trade is built on trust. We pride ourselves on transparent communication.",
    icon: <Handshake className="w-10 h-10 text-brand-copper" />
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      
      {/* --- HERO --- */}
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="relative py-32 px-6 overflow-hidden bg-gray-200">
        
        {/* The "Apple-Style" Mesh Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-copper/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-navy/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-brand-copper font-semibold tracking-[0.3em] uppercase text-[10px] mb-6 block">
            Our Mission & Vision
          </span>
          
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tighter leading-[1.05] text-brand-navy">
            The Bridge Between <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-navy to-brand-copper">
              Global Manufacturing
            </span> 
            <br/> & Local Markets.
          </h1>
          
          <p className="text-slate-500 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium tracking-tight">
            Sino Magan Indus is a multi-national trade collective. We simplify global commerce through physical presence, logistical precision, and absolute integrity.
          </p>
        </div>
      </div>

      <div className="border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="text-center md:border-r border-gray-100 last:border-0">
              <div className="text-4xl md:text-5xl font-semibold text-brand-navy tracking-tighter mb-1">7</div>
              <div className="text-[10px] font-bold text-brand-copper uppercase tracking-[0.2em]">Global Markets</div>
            </div>

            <div className="text-center md:border-r border-gray-100 last:border-0">
              <div className="text-4xl md:text-5xl font-semibold text-brand-navy tracking-tighter mb-1">50+</div>
              <div className="text-[10px] font-bold text-brand-copper uppercase tracking-[0.2em]">Commodities</div>
            </div>

            <div className="text-center md:border-r border-gray-100 last:border-0">
              <div className="text-4xl md:text-5xl font-semibold text-brand-navy tracking-tighter mb-1">100%</div>
              <div className="text-[10px] font-bold text-brand-copper uppercase tracking-[0.2em]">Quality Verified</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-semibold text-brand-navy tracking-tighter mb-1">24/7</div>
              <div className="text-[10px] font-bold text-brand-copper uppercase tracking-[0.2em]">Logistics Support</div>
            </div>

          </div>
        </div>
      </div>

      {/* --- VALUES --- */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <div key={i} className="group">
              <div className="mb-8">{v.icon}</div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-4 tracking-tight">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- PROCESS SECTION --- */}
      <div className="bg-brand-navy py-24 px-6 text-white text-center">
        <h2 className="text-4xl font-semibold mb-16 tracking-tight">Our End-to-End Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
                <div className="text-brand-copper text-4xl font-semibold">01</div>
                <h4 className="text-xl font-semibold tracking-tight">Strategic Sourcing</h4>
                <p className="text-gray-400 text-sm font-medium">Direct partnerships with verified manufacturing nodes.</p>
            </div>
            <div className="space-y-4">
                <div className="text-brand-copper text-4xl font-semibold">02</div>
                <h4 className="text-xl font-semibold tracking-tight">Quality Assurance</h4>
                <p className="text-gray-400 text-sm font-medium">Multi-stage inspection protocols for every shipment.</p>
            </div>
            <div className="space-y-4">
                <div className="text-brand-copper text-4xl font-semibold">03</div>
                <h4 className="text-xl font-semibold tracking-tight">Global Logistics</h4>
                <p className="text-gray-400 text-sm font-medium">Seamless delivery through our 7-country network.</p>
            </div>
        </div>
      </div>
    </div>
  );
}