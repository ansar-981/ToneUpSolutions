import { MapPin } from "lucide-react";

export default function ServiceArea() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Serving in Hyderabad</h2>
          <p className="text-sm text-brand-blue font-medium bg-brand-blue/5 py-3 px-6 rounded-lg inline-block"><MapPin size={48} className="text-brand-blue mx-auto mb-6" />4th Floor, Aparna Astute, Senore Colony, Aparna Senore Valley Villas, Ambedkar Nagar, Jubilee Hills, Hyderabad, Telangana. 500008</p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        For Home Automation, we offer supply, installation, and demonstration in Hyderabad, subject to confirmation of specific product requirements.
          </p>
        </div>
      </div>
    </section>
  );
}