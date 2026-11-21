import { CheckCircle2, ShieldCheck, HeartHandshake, MessageSquare } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Affordable and Practical Solutions",
      description: "We focus on delivering real value with solutions that are realistic, functional, and priced fairly.",
    },
    {
      icon: ShieldCheck,
      title: "Solutions Across Multiple Domains",
      description: "Whether it's smart tech, digital marketing, or physical renovations, we cover it all.",
    },
    {
      icon: HeartHandshake,
      title: "Customer-Focused Approach",
      description: "We listen to your requirements and tailor our approach to suit your specific needs.",
    },
    {
      icon: MessageSquare,
      title: "Convenient Enquiry and Communication",
      description: "Easily reach out via our contact form or WhatsApp for quick responses and discussions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Why ToneUp Solutions?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0 mt-1">
                <feature.icon className="text-brand-blue" size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}