'use client';
import React from 'react';
import BusinessCard from '@/components/BusinessCard';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  // Replace "your_form_id" with your actual Formspree ID (e.g., "mqkvpown")
  const [state, handleSubmit] = useForm("xykdwbgr");

  // Success Message View
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 text-center">
        <div className="max-w-md p-10 bg-gray-50 rounded-2xl border border-brand-copper/20">
          <CheckCircle className="w-16 h-16 text-brand-copper mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">Inquiry Received</h2>
          <p className="text-gray-600 mb-8">
            Thank you for reaching out to Sino Magan Indus. Our trade desk has been notified and will respond within 24 business hours.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="text-brand-copper font-bold hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* --- HEADER --- */}
      <div className="bg-brand-navy py-16 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Contact Our Trade Desk</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a specific sourcing requirement or logistics query? Our global team is ready to assist you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE: The Formspree Form */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full-name" className="block text-xs font-bold text-brand-navy uppercase mb-2">Full Name</label>
                  <input 
                    id="full-name"
                    name="name"
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-copper outline-none" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-navy uppercase mb-2">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-copper outline-none" 
                    placeholder="john@company.com" 
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-brand-navy uppercase mb-2">Subject</label>
                <select 
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-copper outline-none bg-white"
                >
                  <option>Product Sourcing Inquiry</option>
                  <option>Logistics & Shipping</option>
                  <option>Partnership Proposal</option>
                  <option>General Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-brand-navy uppercase mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-copper outline-none" 
                  placeholder="Please describe your requirements..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-brand-navy text-white font-bold py-4 rounded-lg hover:bg-brand-copper disabled:bg-gray-400 transition-all flex items-center justify-center gap-2"
              >
                {state.submitting ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Business Card (Unchanged) */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6 uppercase tracking-tight">Immediate Assistance</h2>
              <div className="transform scale-95 origin-left">
                <BusinessCard />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="p-3 bg-brand-copper/10 rounded-lg h-fit text-brand-copper"><Clock className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Business Hours</h4>
                  <p className="text-sm text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-brand-copper/10 rounded-lg h-fit text-brand-copper"><Globe className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-navy">Global Support</h4>
                  <p className="text-sm text-gray-600">Available across all timezones for active shipments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}