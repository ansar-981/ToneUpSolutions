import { Wallet, Lightbulb, Layers } from "lucide-react";

export default function AboutIntro() {
  const highlights = [
    {
      icon: Wallet,
      title: "Affordable Solutions",
      description: "Practical and cost-effective services designed to fit your budget without compromising on quality.",
    },
    {
      icon: Lightbulb,
      title: "Modern & Practical Approach",
      description: "Bringing the latest technology and creative ideas to solve everyday problems.",
    },
    {
      icon: Layers,
      title: "Multiple Services Under One Roof",
      description: "From tech to interiors, get all your personal and business needs handled by one trusted team.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Solutions Designed Around Your Needs</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            ToneUp Solutions is a Hyderabad-based multi-domain company. We bring technology, creative services, and physical-space improvements together to serve individuals, homes, businesses, and organisations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-brand-light p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 text-brand-blue">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}