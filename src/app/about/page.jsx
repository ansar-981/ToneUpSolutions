import Link from "next/link";
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  Lightbulb, 
  Wallet, 
  Users, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { servicesData } from "../../data/services";
import CTASection from "../../components/common/CTASection";

export const metadata = {
  title: "About Us | ToneUp Solutions",
  description: "Learn about ToneUp Solutions, a multi-domain company based in Hyderabad. We bring technology, creativity, and practical solutions together for homes and businesses.",
};

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Practicality",
      description: "We focus on solutions that actually work for your specific space and daily needs.",
    },
    {
      icon: Wallet,
      title: "Affordability",
      description: "We believe modern solutions shouldn't break the bank, offering fair and transparent pricing.",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "We bring fresh ideas and a creative touch to our digital and interior services.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay updated with modern technology to bring smart improvements to your life.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your requirements are our priority. We listen, plan, and deliver accordingly.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-navy pt-24 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 -skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About ToneUp Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bringing technology, creativity, and practical solutions together.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">Who We Are</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            ToneUp Solutions is a multi-domain solutions company based in Hyderabad, Telangana, India. 
            We aim to serve individuals, homeowners, businesses, and organisations by offering solutions 
            across home automation, digital services, creative services, and interior improvement works.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our goal is to make modern living and business operations simpler, smarter, and more efficient by providing everything you need under one trusted brand.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To make modern technology, digital solutions and space improvements more accessible through practical and affordable services.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 bg-brand-cyan/10 text-brand-cyan rounded-xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To understand customer requirements and provide suitable, practical solutions across our service domains with a focus on affordability, functionality and customer satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Domains */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Domains</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore the different areas we specialize in to help you live smarter and work better.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <Link 
                key={service.id} 
                href={service.href}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 bg-brand-light hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-blue shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">The principles that guide how we work and serve our customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wide">{value.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Have a requirement? Let's discuss it." 
        description="Whether it's a smart home upgrade, a new website, or an interior renovation, our team is ready to help you plan the perfect solution."
      />
    </>
  );
}