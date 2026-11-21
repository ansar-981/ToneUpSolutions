"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import MobileNav from "./MobileNav";
import Favicon from "../../app/favicon.ico";
import Image from "next/image";

const services = [
  { name: "Home Automation", href: "/services/home-automation" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Video Editing", href: "/services/video-editing" },
  { name: "Interior Works", href: "/services/interior-works" },
  { name: "Renovations", href: "/services/renovations" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Placeholder */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={Favicon} alt="ToneUp Solutions" width={40} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-brand-navy">
          <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand-blue transition-colors py-2">
              Services <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-light hover:text-brand-blue transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-brand-blue transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link>
          
          <Link 
            href="/contact" 
            className="bg-brand-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-md flex items-center gap-2 transition-colors shadow-md shadow-blue-500/20"
          >
            <MessageCircle size={18} />
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Component */}
      <MobileNav isOpen={isMobileMenuOpen} services={services} closeMenu={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}