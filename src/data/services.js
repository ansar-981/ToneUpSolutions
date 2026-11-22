import { Home, Globe, Megaphone, Video, Sofa, Hammer } from "lucide-react";

export const servicesData = [
  {
    id: "home-automation",
    title: "Home Automation",
    description: "Make everyday living more convenient with smart switches and home automation solutions that help you control electrical appliances using multiple control options.",
    icon: Home,
    href: "/services/home-automation",
    comingSoon: false,
  },
  {
    id: "web-development",
    title: "Web Design & Development",
    description: "Build a professional online presence with modern, responsive and business-focused websites designed around your brand and goals.",
    icon: Globe,
    href: "/services/web-development",
    comingSoon: true,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Help your business reach more people through digital presence, social media, content strategy and online marketing solutions.",
    icon: Megaphone,
    href: "/services/digital-marketing",
    comingSoon: true,
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Transform raw footage into engaging videos for social media, YouTube, promotions, businesses, events and other creative needs.",
    icon: Video,
    href: "/services/video-editing",
    comingSoon: true,
  },
  {
    id: "interior-works",
    title: "Interior Works",
    description: "Improve your interiors with practical ideas for complete solutions including cupboards, flooring, interior finishing, installations and custom space improvements.",
    icon: Sofa,
    href: "/services/interior-works",
    comingSoon: true,
  },
  {
    id: "renovations",
    title: "Home, Office & Retail Area Renovation Works",
    description: "Upgrade and transform residential, commercial, office and retail spaces with renovation and improvement solutions.",
    icon: Hammer,
    href: "/services/renovations",
    comingSoon: true,
  },
];