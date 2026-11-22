
import Link from "next/link";
import {
  Target,
  Eye,
  CheckCircle2,
  Lightbulb,
  Wallet,
  Users,
  Sparkles,
} from "lucide-react";
import { servicesData } from "../../data/services";
import CTASection from "../../components/common/CTASection";

export const metadata = {
  title: "About Us | ToneUp Solutions",
  description:
    "Learn about ToneUp Solutions, a multi-domain company based in Hyderabad. We bring technology, creativity, and practical solutions together for homes and businesses.",
};

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Practicality",
      description:
        "We focus on solutions that actually work for your specific space and daily needs.",
    },
    {
      icon: Wallet,
      title: "Affordability",
      description:
        "We believe modern solutions shouldn't break the bank, offering fair and transparent pricing.",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description:
        "We bring fresh ideas and a creative touch to our digital and interior services.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay updated with modern technology to bring smart improvements to your life.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your requirements are our priority. We listen, plan, and deliver accordingly.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
<section className="page-hero relative overflow-hidden bg-brand-navy py-20 md:py-24">
          <div className="absolute right-0 top-0 h-full w-2/3 sm:w-1/2 bg-brand-blue/10 -skew-x-12 origin-top-right" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            About ToneUp Solutions
          </h1>

          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Bringing technology, creativity, and practical solutions together.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center">
          <h2 className="mb-5 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
            Who We Are
          </h2>

          <p className="mb-5 sm:mb-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            ToneUp Solutions is a multi-domain solutions company based in
            Hyderabad, Telangana, India. We aim to serve individuals,
            homeowners, businesses, and organisations by offering solutions
            across home automation, digital services, creative services, and
            interior improvement works.
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our goal is to make modern living and business operations simpler,
            smarter, and more efficient by providing everything you need under
            one trusted brand.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-light py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-bl-full bg-brand-blue/5 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <div className="mb-5 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Eye size={28} className="sm:hidden" />
                  <Eye size={32} className="hidden sm:block" />
                </div>

                <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-brand-navy">
                  Our Vision
                </h3>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  To make modern technology, digital solutions and space
                  improvements more accessible through practical and affordable
                  services.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-bl-full bg-brand-cyan/5 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <div className="mb-5 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <Target size={28} className="sm:hidden" />
                  <Target size={32} className="hidden sm:block" />
                </div>

                <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-brand-navy">
                  Our Mission
                </h3>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  To understand customer requirements and provide suitable,
                  practical solutions across our service domains with a focus
                  on affordability, functionality and customer satisfaction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Domains */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy">
              Our Domains
            </h2>

            <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-600 leading-relaxed">
              Explore the different areas we specialize in to help you live
              smarter and work better.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="flex items-start gap-3 sm:gap-4 rounded-xl border border-gray-100 bg-brand-light p-4 sm:p-5 md:p-6 transition-all hover:bg-white hover:shadow-md"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue shadow-sm transition-transform group-hover:scale-110">
                  <service.icon size={22} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-bold text-brand-navy transition-colors hover:text-brand-blue">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-brand-navy py-12 sm:py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Our Values
            </h2>

            <p className="mx-auto max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed">
              The principles that guide how we work and serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 text-center transition-colors hover:bg-white/10"
              >
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20 text-brand-cyan">
                  <value.icon size={24} />
                </div>

                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-white">
                  {value.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
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
