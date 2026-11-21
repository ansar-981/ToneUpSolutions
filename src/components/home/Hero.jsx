
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import HeroImage from "../../../public/assests/HeroImage.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden bg-brand-navy">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="ToneUp Solutions modern interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark overlay for image contrast */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Dark gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 via-50% to-brand-navy/20 to-100%" />

        {/* Subtle bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Text Content */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-blue-300 font-semibold text-sm mb-6 border border-white/20 backdrop-blur-sm">
              Hyderabad's Multi-Domain Solutions Provider
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Smart Solutions.<br />
              Better Spaces.<br />
              <span className="text-brand-blue">
                Stronger Businesses.
              </span>
            </h1>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              From smart home automation and digital solutions to interiors and renovations,
              ToneUp Solutions brings innovative, practical and affordable services
              together under one roof.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="#services"
                className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Explore Our Services
                <ArrowRight size={20} />
              </Link>

              <a
                href="https://wa.me/8978147676?text=Hello%20ToneUp%20Solutions%2C%20I%20would%20like%20to%20discuss%20my%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-green-400" />
                WhatsApp Us
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
