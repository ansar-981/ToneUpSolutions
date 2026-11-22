
import { MapPin, Mail, MessageCircle } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";
import { getWhatsAppLink } from "../../lib/whatsapp";

export const metadata = {
  title: "Contact Us | ToneUp Solutions",
  description:
    "Get in touch with ToneUp Solutions for home automation, web development, digital marketing, interior works, and renovation enquiries in Hyderabad.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="page-hero relative overflow-hidden bg-brand-navy py-20 md:py-24">
                      <div className="absolute right-0 top-0 h-full w-2/3 sm:w-1/2 bg-brand-blue/10 -skew-x-12 origin-top-right" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Get in Touch
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed">
            Have a product enquiry, service requirement, or project idea? Share
            your details and we'll get back to you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-brand-light py-12 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">

            {/* Left Column: Form */}
            <div className="min-w-0 lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right Column: Contact Information */}
            <div className="min-w-0 lg:col-span-2 flex flex-col gap-4 sm:gap-6">

              {/* WhatsApp Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <MessageCircle size={24} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-brand-navy">
                  Prefer WhatsApp?
                </h3>

                <p className="mb-5 sm:mb-6 text-sm text-gray-600 leading-relaxed">
                  Contact us directly through WhatsApp to discuss products,
                  services, or project requirements.
                </p>

                <a
                  href={getWhatsAppLink(
                    "Hello ToneUp Solutions, I would like to enquire about your products and services."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-center text-sm sm:text-base font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                  <Mail size={24} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-brand-navy">
                  Email Us
                </h3>

                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                  For detailed enquiries, you can reach us via email.
                </p>

                <a
                  href="mailto:toneupsolutions@gmail.com"
                  className="inline-block max-w-full break-all text-sm sm:text-base font-semibold text-brand-blue hover:underline"
                >
                  toneupsolutions@gmail.com
                </a>
              </div>

              {/* Location Card */}
              <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-brand-navy">
                  <MapPin size={24} />
                </div>

                <h3 className="mb-2 text-xl font-bold text-brand-navy">
                  Location
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  ToneUp Solutions
                  <br />
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
