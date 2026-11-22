
"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          element.classList.remove("reveal-visible");
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal reveal-${direction} ${className}`}
      style={{
        "--reveal-delay": `${delay}s`,
        "--reveal-duration": `${duration}s`,
        "--reveal-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  );
}
