import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../../data/services";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Explore What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our range of specialized services aimed at making your life easier and your business stronger.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon size={32} />
                </div>
                {service.comingSoon && (
                  <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                {service.description}
              </p>
              
              <Link 
                href={service.href}
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors mt-auto"
              >
                Explore Service <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}