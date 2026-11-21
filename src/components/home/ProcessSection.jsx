export default function ProcessSection() {
  const steps = [
    { number: "01", title: "Understand Your Requirements", desc: "We begin by listening to your needs and understanding your space or business goals." },
    { number: "02", title: "Plan the Right Solution", desc: "Our team suggests the most practical and affordable approach for your project." },
    { number: "03", title: "Deliver the Service or Product", desc: "We execute the plan, ensuring quality work and proper installation or implementation." },
    { number: "04", title: "Support and Follow Up", desc: "We ensure everything works perfectly and remain available for any assistance." },
  ];

  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A simple, transparent process to get from your idea to the final result.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-black text-white/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-brand-cyan mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              
              {/* Connector Line (Desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-[1px] bg-white/10 translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}