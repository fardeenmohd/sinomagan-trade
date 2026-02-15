'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-navy text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center space-x-2">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-brand-copper rounded-full flex items-center justify-center font-serif font-bold text-brand-navy text-xl">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wide font-bold leading-tight">SINO MAGAN INDUS</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-copper">Global Trade</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-brand-copper transition-colors">Home</Link>
            <Link href="/contact" className="hover:text-brand-copper transition-colors">Contact Us</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-brand-navy px-4 pt-2 pb-4 border-t border-brand-copper/20">
          <Link href="/" className="block py-2 hover:text-brand-copper" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/contact" className="block py-2 hover:text-brand-copper" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}