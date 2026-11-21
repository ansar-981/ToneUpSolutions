import Hero from "../components/home/Hero";
import AboutIntro from "../components/home/AboutIntro";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import ServiceArea from "../components/home/ServiceArea";
import CTASection from "../components/common/CTASection";
// import css file from globals.css
import "./globals.css";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <ServiceArea />
      <CTASection />
    </>
  );
}

