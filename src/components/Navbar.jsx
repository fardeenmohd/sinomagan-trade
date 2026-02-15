'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-navy text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="Sino Magan Indus Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wide leading-none group-hover:text-brand-copper transition-colors">
                  SINO MAGAN INDUS
                </span>
                <span className="text-[10px] text-gray-300 tracking-widest uppercase">
                  Global Trade LLP
                </span>
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