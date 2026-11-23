
import Link from "next/link";
import {
    Smartphone,
    Mic,
    Settings,
    Home,
    Bed,
    ChefHat,
    Bath,
    Briefcase,
    Store,
    Layers,
    ArrowRight
} from "lucide-react";

import { smartSwitchesData } from "../../../data/products";
import { homeAutomationFaqs } from "../../../data/faq";
import ProductCard from "../../../components/services/ProductCard";
import FAQSection from "../../../components/services/FAQSection";
import ProductGallery from "../../../components/services/ProductGallery";
import CTASection from "../../../components/common/CTASection";
import { getWhatsAppLink } from "../../../lib/whatsapp";
import ScrollReveal from "../../../components/common/ScrollReveal";


export const metadata = {
    title: "Home Automation & Smart Switches in Hyderabad | ToneUp Solutions",
    description: "Upgrade your home with smart switches and home automation solutions in Hyderabad. Control lights and appliances via app, voice, and remote. Enquire with ToneUp Solutions.",
};

export default function HomeAutomationPage() {
    return (
        <>
        
            {/* Section 1: Hero */}
            <section className="bg-brand-navy pt-20 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 -skew-x-12 transform origin-top-right"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Make Your Home Smarter with Home Automation
                        </h1>

                        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                            Control your everyday electrical appliances with smart switches that bring convenience, flexibility, and modern functionality to your home.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={getWhatsAppLink("Hello ToneUp Solutions, I am interested in Home Automation products.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#24CC63] hover:bg-[#008be6] text-white px-8 py-4 rounded-md font-semibold transition-all text-center"
                            >
                                Enquire on WhatsApp
                            </a>

                            <Link
                                href="/contact"
                                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-md font-semibold transition-all text-center backdrop-blur-sm"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-brand-navy py-12">
                <div className="w-full max-w-md mx-auto aspect-[9/16] overflow-hidden rounded-xl">

                <iframe
        src="https://www.youtube.com/embed/a1YNfA8Xh8c"
        title="YouTube Short"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      /></div>

                
            </section>

            {/* Section 2: What is Home Automation? */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">
                        What is Home Automation?
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Home automation allows you to control your home's electrical appliances—like lights and fans—through smart switches. These switches replace your traditional boards and offer multiple ways to control your appliances, adding a layer of modern convenience to your daily life.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
                        {[
                            "Convenience at your fingertips",
                            "Flexible control options",
                            "Remote access when away",
                            "Voice control compatibility",
                            "Modern, sleek functionality",
                            "Better energy management habits"
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 bg-brand-light p-4 rounded-lg"
                            >
                                <div className="w-2 h-2 rounded-full bg-brand-blue shrink-0"></div>
                                <span className="text-brand-navy font-medium text-sm">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Smart Switches
            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                            Smart Switches for Modern Living
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer smart switch solutions for different needs and applications. Explore our range of configurations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {smartSwitchesData.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Section 4: Ways to Control */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                            Ways to Control Your Smart Switches
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Multiple control methods designed for your convenience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* 1. Manual */}
                        <div className="bg-brand-light p-8 rounded-xl border border-gray-100">
                            <Settings className="text-brand-blue mb-4" size={32} />

                            <h3 className="text-xl font-bold text-brand-navy mb-3">
                                1. Manual Control
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Control your connected appliances directly using the physical buttons on the smart switch. Even when smart features are not being used, the switch provides a convenient physical control method, subject to the product's operating design.
                            </p>
                        </div>

                        {/* 2. IR Remote */}
                        <div className="bg-brand-light p-8 rounded-xl border border-gray-100">
                            <Layers className="text-brand-blue mb-4" size={32} />

                            <h3 className="text-xl font-bold text-brand-navy mb-3">
                                2. IR Remote Control
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Control compatible switches using the provided infrared remote control. The remote offers a convenient way to operate supported switches from within the remote's effective range.
                            </p>

                            <div className="bg-white p-3 rounded border border-gray-200 text-xs text-gray-500 font-medium">
                                Approx. IR remote operating distance: up to 22 feet, subject to environmental conditions and product specifications.
                            </div>
                        </div>

                        {/* 3. Mobile App */}
                        <div className="bg-brand-light p-8 rounded-xl border border-gray-100">
                            <Smartphone className="text-brand-blue mb-4" size={32} />

                            <h3 className="text-xl font-bold text-brand-navy mb-3">
                                3. Mobile Application
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Use the compatible mobile application to control supported switches. With an internet connection and properly configured device and application, you can operate your connected appliances remotely, including when you are away from home.
                            </p>
                        </div>

                        {/* 4. Voice Control */}
                        <div className="bg-brand-light p-8 rounded-xl border border-gray-100">
                            <Mic className="text-brand-blue mb-4" size={32} />

                            <h3 className="text-xl font-bold text-brand-navy mb-3">
                                4. Voice Control
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Control compatible appliances through supported voice assistants such as Google Home or Alexa, when the switch and required devices are properly configured and compatible.
                            </p>

                            <div className="bg-white p-3 rounded border border-gray-200 text-xs text-gray-500 font-medium space-y-1">
                                <p>Example commands:</p>
                                <p className="italic">
                                    "Alexa, turn on the living room light."
                                </p>
                                <p className="italic">
                                    "Hey Google, turn off the bedroom light."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* Section 5: How It Works */}
<section className="py-20 bg-brand-navy text-white">
    <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How It Works
            </h2>

            <p className="text-gray-300">
                Installation and setup depend on the specific switch model and electrical configuration.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
                "Smart Switch Installation",
                "Connect to Network",
                "Configure Mobile App",
                "Connect Voice Assistants",
                "Start Using Controls"
            ].map((step, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center gap-4"
                >
                    <div className="bg-white/10 border border-white/20 rounded-full w-12 h-12 flex items-center justify-center font-bold text-brand-cyan shrink-0">
                        {index + 1}
                    </div>

                    <div className="text-sm md:text-base font-medium leading-relaxed text-white">
                        {step}
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* Section 6: Applications */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                            Smart Switch Applications
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Practical use cases for controlling lighting, compatible fans, or other supported electrical appliances.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { icon: Home, label: "Living Rooms" },
                            { icon: Bed, label: "Bedrooms" },
                            { icon: ChefHat, label: "Kitchens" },
                            { icon: Bath, label: "Bathrooms*" },
                            { icon: Briefcase, label: "Offices" },
                            { icon: Store, label: "Shops" }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 bg-brand-light rounded-xl border border-gray-100 text-center hover:bg-brand-blue/5 transition-colors cursor-default"
                            >
                                <item.icon
                                    className="text-brand-blue mb-3"
                                    size={28}
                                />

                                <span className="text-sm font-semibold text-brand-navy">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-6">
                        *Subject to appropriate product ratings and electrical safety.
                    </p>
                </div>
            </section>

            {/* Section 7: Gallery */}
            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">
                            Product Gallery
                        </h2>
                    </div>

                    <ProductGallery />
                </div>
            </section>

            {/* Section 8: Installation & Supply */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="bg-brand-navy rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">
                                Product Supply, Installation & Demonstration in Hyderabad
                            </h2>

                            <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg">
                                ToneUp Solutions offers smart home automation products, with product demo, physical experience, budgeting, supply and installation services in Hyderabad
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href={getWhatsAppLink("Hello ToneUp Solutions, I have a product enquiry for Home Automation.")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-white text-brand-navy hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors"
                                >
                                    Product Enquiry
                                </a>

                                <a
                                    href={getWhatsAppLink("Hello ToneUp Solutions, I would like to enquire about smart switch installation.")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-brand-blue hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                                >
                                    Installation Enquiry
                                </a>

                                <a
                                    href={getWhatsAppLink("Hello ToneUp Solutions, I would like to request a product demo.")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                                >
                                    Demo Enquiry
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 9: FAQs */}
            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                            Frequently Asked Questions
                        </h2>

                        <p className="text-gray-600">
                            Find answers to common questions about smart switches and home automation.
                        </p>
                    </div>

                    <FAQSection faqs={homeAutomationFaqs} />
                </div>
            </section>

            {/* Section 10: Final CTA */}
            <CTASection
                title="Ready to Make Your Home Smarter?"
                description="Get in touch with us today to discuss your home automation requirements and explore the right smart switch solutions for your space."
            />
        </>
    );
}
