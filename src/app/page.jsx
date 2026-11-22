import Hero from "../components/home/Hero";
import AboutIntro from "../components/home/AboutIntro";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import ServiceArea from "../components/home/ServiceArea";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/common/ScrollReveal";

import "./globals.css";

export default function Home() {
  return (
    <>
    <ScrollReveal direction="up">
      <Hero />
    </ScrollReveal>

    <ScrollReveal direction="up">
      <AboutIntro />
    </ScrollReveal>

      <ScrollReveal direction="up">
        <ServicesGrid />
      </ScrollReveal>

      <ScrollReveal direction="up"  >
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <ProcessSection />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <ServiceArea />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <CTASection />
      </ScrollReveal>
    </>
  );
}