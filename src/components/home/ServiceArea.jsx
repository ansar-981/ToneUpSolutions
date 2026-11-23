import { MapPin, Phone } from "lucide-react";

export default function ServiceArea() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <div className="bg-white p-4 md:p-16 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-brand-navy mb-6">Serving in Hyderabad</h2>
          <p className="text-sm text-brand-blue font-medium bg-brand-blue/5 py-3 px-6 rounded-lg inline-block"><MapPin size={48} className="text-brand-blue mx-auto mb-6" />Registered Office: 4th Floor, Aparna Astute, Senore Colony, Aparna Senore Valley Villas, Ambedkar Nagar, Jubilee Hills, Hyderabad, Telangana. 500008</p>
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-gray-100">
  <h2 className="text-3xl font-bold text-brand-navy mb-6">Contact Us</h2>

  <div className="text-lg text-brand-blue font-medium bg-brand-blue/5 py-6 px-6 rounded-lg inline-flex flex-col items-center gap-3">
    <Phone size={48} className="text-brand-blue mb-2" />

    <a
  href="tel:+918978147676"
  className="text-brand-blue font-semibold hover:underline whitespace-nowrap"
>
  +91 89781 47676
</a>

<a
  href="tel:+918978147066"
  className="text-brand-blue font-semibold hover:underline whitespace-nowrap"
>
  +91 89781 47066
</a>
  </div>
</div>
        
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        For Home Automation, we offer demo, supply and installation in Hyderabad, and for other services, we provide consultation, planning and execution in Hyderabad and surrounding areas. For remote services like IT solutions, we can assist clients across India.
          </p>
        </div>
      </div>
    </section>
  );
}