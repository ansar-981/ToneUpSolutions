
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGallery() {
  const images = [
    { src: "/assests/home-automation/1 Dimmer Module.jpeg", alt: "1-channel smart dimmer module" },
    { src: "/assests/home-automation/1 Plug Module.jpeg", alt: "1-channel smart plug control module" },
    { src: "/assests/home-automation/1 Switch & 1 Plug Module.jpeg", alt: "1-switch and 1-plug smart module" },
    { src: "/assests/home-automation/2 Module 4 Switch.jpeg", alt: "2-module 4-switch smart control panel" },
    { src: "/assests/home-automation/2 Plug Module.jpeg", alt: "2-channel smart plug control module" },
    { src: "/assests/home-automation/2 Switch & 2 Plug Module.jpeg", alt: "2-switch and 2-plug smart module" },
    { src: "/assests/home-automation/2 Switch Module.jpeg", alt: "2-switch smart module" },
    { src: "/assests/home-automation/3 Switch & 1 Dimmer Module.jpeg", alt: "3-switch and 1-dimmer smart module" },
    { src: "/assests/home-automation/3 Switch & 1 Fan Module.jpeg", alt: "3-switch and 1-fan smart module" },
    { src: "/assests/home-automation/3 Switch Module.jpeg", alt: "3-switch smart module" },
    { src: "/assests/home-automation/3 Switch, 1 Dimmer & 1 Plug Module.jpeg", alt: "3-switch 1-dimmer and 1-plug smart module" },
    { src: "/assests/home-automation/3 Switch, 1 Fan & 1 Plug Module.jpeg", alt: "3-switch 1-fan and 1-plug smart module" },
    { src: "/assests/home-automation/4 Switch & 1 Plug Module.jpeg", alt: "4-switch and 1-plug smart module" },
    { src: "/assests/home-automation/4 Switch Module.jpeg", alt: "4-switch smart module" },
    { src: "/assests/home-automation/5 Switch, 1 Dimmer & 1 Plug Module.jpeg", alt: "5-switch 1-dimmer and 1-plug smart module" },
    { src: "/assests/home-automation/5 Switch, 1 Fan & 1 Plug Module.jpeg", alt: "5-switch 1-fan and 1-plug smart module" },
    { src: "/assests/home-automation/6 Switch & 1 Plug Module.jpeg", alt: "6-switch and 1-plug smart module" },
    { src: "/assests/home-automation/6 Switch & 2 Dimmer Module.jpeg", alt: "6-switch and 2-dimmer smart module" },
    { src: "/assests/home-automation/6 Switch & 2 Fan Module.jpeg", alt: "6-switch and 2-fan smart module" },
    { src: "/assests/home-automation/6 Switch Module.jpeg", alt: "6-switch smart module" },
    { src: "/assests/home-automation/6 Switch, 1 Dimmer & 1 Fan Module.jpeg", alt: "6-switch 1-dimmer and 1-fan smart module" },
    { src: "/assests/home-automation/6 Switch, 2 Fan & 2 Plug Module.jpeg", alt: "6-switch 2-fan and 2-plug smart module" },
    { src: "/assests/home-automation/7 Switch & 1 Dimmer Module.jpeg", alt: "7-switch and 1-dimmer smart module" },
    { src: "/assests/home-automation/7 Switch & 1 Fan Module.jpeg", alt: "7-switch and 1-fan smart module" },
    { src: "/assests/home-automation/7 Switch, 1 Fan & 2 Plug Module.jpeg", alt: "7-switch 1-fan and 2-plug smart module" },
    { src: "/assests/home-automation/8 Module 12 Switch.jpeg", alt: "8-module 12-switch smart control panel" },
    { src: "/assests/home-automation/8 Switch & 2 Plug Module.jpeg", alt: "8-switch and 2-plug smart module" },
    { src: "/assests/home-automation/8 Switch Module.jpeg", alt: "8-switch smart module" },
    { src: "/assests/home-automation/12 Switch & 2 Plug Module.jpeg", alt: "12-switch and 2-plug smart module" },
    { src: "/assests/home-automation/Curtain Controller.jpeg", alt: "Smart curtain controller module" },
    { src: "/assests/home-automation/High Load Switch Module.jpeg", alt: "High-load smart switch module" },
    { src: "/assests/home-automation/Touch Doorbell.jpeg", alt: "Smart touch doorbell" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive slide count
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = images.length - visibleSlides;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  // Keep index valid when screen size changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel */}
      <div className="overflow-hidden">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
    }}
  >
    {images.map((image, index) => (
      <div
        key={index}
        className="flex-shrink-0 px-3"
        style={{ width: `${100 / visibleSlides}%` }}
      >
        {/* Image Container */}
        <div className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">

          {/* Fixed-size image frame */}
          <div className="relative h-64 sm:h-72 w-full bg-white">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Image Name */}
          <div className="bg-brand-navy text-white text-center px-3 py-4 min-h-[72px] flex items-center justify-center">
            <p className="text-sm sm:text-base font-medium">
              {image.alt}
            </p>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous images"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-full p-3 text-brand-navy hover:bg-brand-navy hover:text-white transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next images"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-full p-3 text-brand-navy hover:bg-brand-navy hover:text-white transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-brand-blue"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-gray-500 mt-4">
        {currentIndex + 1}–{Math.min(currentIndex + visibleSlides, images.length)} of {images.length} products
      </p>
    </div>
  );
}
