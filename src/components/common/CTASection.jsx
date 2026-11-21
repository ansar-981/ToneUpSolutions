import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CTASection({
  title = "Let's Build Something Better Together",
  description = "Whether you're looking to make your home smarter, establish your business online or transform your space, get in touch with ToneUp Solutions to discuss your requirements.",
}) {
  return (
    <section className="bg-brand-navy py-20 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-cyan/20 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-md font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Contact Us
          </Link>
          <a
            href="https://wa.me/8978147676?text=Hello%20ToneUp%20Solutions%2C%20I%20would%20like%20to%20discuss%20my%20requirements."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}