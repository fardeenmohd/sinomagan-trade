'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // <--- Used to check which page is active
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current URL path

  // Define your navigation links here
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Countries', href: '/global-reach' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' }
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-brand-navy text-white sticky top-0 z-50 shadow-lg border-b border-brand-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10">
               {/* Make sure this file exists in your public folder! */}
               <Image 
                 src="/icon.png" 
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

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className={`font-medium text-sm tracking-wide transition-colors duration-300 ${
                  isActive(link.href) 
                    ? 'text-brand-copper font-bold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            
            {/* Call to Action Button */}
            <Link 
                href="/contact" 
                className="bg-brand-copper text-white px-5 py-2 rounded text-sm font-bold hover:bg-white hover:text-brand-navy transition-all shadow-md ml-4"
            >
                GET QUOTE
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-brand-copper/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-brand-copper bg-brand-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-brand-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}