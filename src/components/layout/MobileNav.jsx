"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MobileNav({ isOpen, closeMenu, services }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg h-[calc(100vh-5rem)] overflow-y-auto">
      <nav className="flex flex-col p-4">
        <Link href="/" onClick={closeMenu} className="py-4 border-b border-gray-50 text-brand-navy font-semibold flex justify-between items-center">
          Home <ChevronRight size={18} className="text-gray-400" />
        </Link>
        
        <div className="py-4 border-b border-gray-50">
          <p className="text-brand-navy font-semibold mb-2">Services</p>
          <div className="flex flex-col gap-3 pl-4">
            {services.map((service) => (
              <Link 
                key={service.name} 
                href={service.href}
                onClick={closeMenu}
                className="text-gray-600 text-sm py-1 hover:text-brand-blue"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/about" onClick={closeMenu} className="py-4 border-b border-gray-50 text-brand-navy font-semibold flex justify-between items-center">
          About Us <ChevronRight size={18} className="text-gray-400" />
        </Link>
        <Link href="/contact" onClick={closeMenu} className="py-4 border-b border-gray-50 text-brand-navy font-semibold flex justify-between items-center">
          Contact Us <ChevronRight size={18} className="text-gray-400" />
        </Link>

        <Link 
          href="/contact" 
          onClick={closeMenu}
          className="mt-6 bg-brand-blue text-white text-center py-3 rounded-md font-semibold shadow-md"
        >
          Get in Touch
        </Link>
      </nav>
    </div>
  );
}