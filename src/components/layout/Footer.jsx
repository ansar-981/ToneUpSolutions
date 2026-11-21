import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-3xl font-black text-white tracking-tighter mb-4 inline-block">
              Tone<span className="text-brand-cyan">Up</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              Smart Solutions. Better Spaces. Stronger Businesses. Bringing technology, creativity, and practical expertise together under one roof in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-cyan transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="/services/home-automation" className="hover:text-brand-cyan transition-colors">Home Automation</Link></li>
              <li><Link href="/services/web-development" className="hover:text-brand-cyan transition-colors">Web Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-brand-cyan transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/video-editing" className="hover:text-brand-cyan transition-colors">Video Editing</Link></li>
              <li><Link href="/services/interior-works" className="hover:text-brand-cyan transition-colors">Interior Works</Link></li>
              <li><Link href="/services/renovations" className="hover:text-brand-cyan transition-colors">Renovations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-cyan shrink-0" />
                <a href="mailto:toneupsolutions@gmail.com" className="hover:text-brand-cyan transition-colors">toneupsolutions@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-brand-cyan shrink-0" />
                <a href="https://wa.me/8978147676?text=Hello%20ToneUp%20Solutions%2C%20I%20would%20like%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} ToneUp Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}