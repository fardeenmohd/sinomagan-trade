import BusinessCard from '@/components/BusinessCard';

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h1 className="font-serif text-4xl md:text-5xl text-brand-navy font-bold mb-4">Start a Conversation</h1>
           <p className="text-brand-slate text-lg">We are ready to handle your logistics and sourcing needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Business Card */}
          <div className="flex justify-center md:justify-end">
            <BusinessCard />
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-navy">
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-slate mb-2">Your Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-brand-copper bg-brand-white" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-slate mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-brand-copper bg-brand-white" placeholder="john@company.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-slate mb-2">Message</label>
                <textarea name="message" rows="4" required className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-brand-copper bg-brand-white" placeholder="I am interested in sourcing..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-copper text-white py-3 rounded font-bold hover:bg-brand-navy transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}