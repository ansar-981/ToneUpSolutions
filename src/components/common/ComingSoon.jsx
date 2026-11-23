import Link from "next/link";
import { ArrowLeft, Clock, MessageCircle, Mail, Image as ImageIcon } from "lucide-react";
import { getWhatsAppLink } from "../../lib/whatsapp";
import 'primeicons/primeicons.css';

export default function ComingSoon({ serviceName, shortDescription, futureDescription }) {
  return (
    <div className="min-h-[80vh] flex items-center bg-brand-light py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            
            {/* Visual Side */}
            <div className="bg-brand-navy p-10 flex flex-col justify-center items-center relative overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-3xl opacity-30 -mr-20 -mt-20"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                  <ImageIcon size={40} className="text-brand-cyan" />
                </div>
                <span className="inline-block py-1 px-4 rounded-full bg-brand-cyan/20 text-brand-cyan font-bold text-xs uppercase tracking-wider border border-brand-cyan/30 mb-4">
                  Under Construction
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">{serviceName}</h2>
                <p className="text-gray-400 text-sm">Coming Soon to ToneUp Solutions</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-brand-blue font-semibold mb-4">
                <Clock size={20} />
                <span>Launching Soon</span>
              </div>
              
              <h1 className="text-3xl font-bold text-brand-navy mb-4">
                We're working on something great!
              </h1>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {shortDescription}
              </p>
              
              <div className="bg-brand-light p-5 rounded-lg border border-gray-100 mb-8">
                <p className="text-sm font-medium text-brand-navy">
                  <span className="text-brand-blue font-bold mr-2">What to expect:</span>
                  {futureDescription}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppLink(`Hello ToneUp Solutions, I would like to enquire about ${serviceName}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#24CC63] hover:bg-[#1da851] text-white px-4 py-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="pi pi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 bg-white hover:bg-gray-50 text-brand-navy border border-gray-300 px-4 py-3 rounded-md font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    Contact Us
                  </Link>
                </div>
                
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-blue font-medium transition-colors mt-4"
                >
                  <ArrowLeft size={16} />
                  Back to Homepage
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}