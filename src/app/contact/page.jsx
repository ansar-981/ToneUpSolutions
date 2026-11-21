import { MapPin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import { getWhatsAppLink } from "../../lib/whatsapp";

export const metadata = {
  title: "Contact Us | ToneUp Solutions",
  description: "Get in touch with ToneUp Solutions for home automation, web development, digital marketing, interior works, and renovation enquiries in Hyderabad.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 -skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a product enquiry, service requirement, or project idea? Share your details and we'll get back to you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* WhatsApp Card */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Prefer WhatsApp?</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Contact us directly through WhatsApp to discuss products, services, or project requirements.
                </p>
                <a
                  href={getWhatsAppLink("Hello ToneUp Solutions, I would like to enquire about your products and services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For detailed enquiries, you can reach us via email.
                </p>
                <a 
                  href="mailto:toneupsolutions@gmail.com" 
                  className="text-brand-blue font-semibold hover:underline"
                >
                  toneupsolutions@gmail.com
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 text-brand-navy rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ToneUp Solutions<br />
                  Hyderabad, Telangana, India
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}