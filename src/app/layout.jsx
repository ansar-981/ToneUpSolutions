import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/common/ScrollReveal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadataBase = new URL("https://www.toneupsolutions.com"); // UPDATE THIS with your actual domain

export const metadata = {
  metadataBase,
  title: {
    default: "ToneUp Solutions | Home Automation, Digital & Interior Solutions in Hyderabad",
    template: "%s | ToneUp Solutions",
  },
  description: "ToneUp Solutions in Hyderabad offers home automation products, smart switches, web development, digital marketing, video editing, interior works and renovation solutions.",
  keywords: ["Home Automation Hyderabad", "Smart Switches", "Web Development", "Digital Marketing", "Interior Works", "Renovation Hyderabad"],
  openGraph: {
    title: "ToneUp Solutions | Smart Solutions. Better Spaces. Stronger Businesses.",
    description: "From smart home automation and digital solutions to interiors and renovations, ToneUp Solutions brings innovative, practical and affordable services together under one roof.",
    url: "/",
    siteName: "ToneUp Solutions",
    locale: "en_IN",
    type: "website",
    // images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "ToneUp Solutions" }], // Add your OG image later
  },
  twitter: {
    card: "summary_large_image",
    title: "ToneUp Solutions | Home Automation & Digital Services",
    description: "Innovative, practical and affordable solutions under one roof in Hyderabad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#03123B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        
          <main className="flex-grow">
            {children}
          </main>
        
        <Footer />
      </body>
    </html>
  );
}