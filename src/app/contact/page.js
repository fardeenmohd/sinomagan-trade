'use client'; // <--- Critical for Client Components
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import BusinessCard from '@/components/BusinessCard';

export default function Contact() {
  // REPLACE "YOUR_FORM_ID" WITH YOUR ACTUAL ID (e.g., "mwkdlqap")
  const [state, handleSubmit] = useForm("xykdwbgr");

  // This shows up AFTER they submit the form successfully
  if (state.succeeded) {
      return (
        <div className="min-h-screen bg-brand-white py-20 flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md border-t-4 border-brand-copper">
                <div className="text-5xl mb-4">✨</div>
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-2">Message Received!</h2>
                <p className="text-brand-slate mb-6">
                    Thank you for reaching out to Sino Magan Indus. Our team will review your inquiry and respond within 24 hours.
                </p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="text-brand-copper font-bold hover:text-brand-navy underline"
                >
                    Send another message
                </button>
            </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-brand-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
           <h1 className="font-serif text-4xl md:text-5xl text-brand-navy font-bold mb-4">Start a Conversation</h1>
           <p className="text-brand-slate text-lg">We are ready to handle your logistics and sourcing needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Business Card */}
          <div className="flex justify-center md:justify-end">
            <BusinessCard />
          </div>

          {/* Right Side: The Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-navy">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-slate mb-2">
                    Your Name / Company
                </label>
                <input
                  id="name"
                  type="text" 
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-brand-copper bg-brand-white text-brand-slate"
                  placeholder="e.g. John Doe, Acme Corp"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-slate mb-2">
                    Email Address
                </label>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-brand-copper bg-brand-white text-brand-slate"
                  placeholder="john@company.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-slate mb-2">
                    Inquiry Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-brand-copper bg-brand-white text-brand-slate"
                  placeholder="I am interested in sourcing onions to Dubai..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full bg-brand-copper text-white py-3 rounded font-bold hover:bg-brand-navy transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}