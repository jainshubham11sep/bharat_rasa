import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Bharat Innovations | AI Performance Marketing Agency for D2C Brands",
  description: "India's AI-powered performance marketing agency. Achieve 6x–8x ROAS with our proprietary RASA Framework. Meta & Google Ads, SEO, Web Dev, AI Automation & Influencer Marketing.",
  keywords: ["AI marketing agency India", "D2C marketing agency", "performance marketing India", "ROAS optimization", "Meta ads agency", "Google ads agency", "eCommerce growth agency", "RASA Framework"],
  openGraph: {
    title: "Bharat Innovations | AI Performance Marketing Agency for D2C Brands",
    description: "Scale your D2C brand to 6x–8x ROAS with India's leading AI marketing agency. Paid Ads, SEO, Web Dev, Influencer Marketing & AI Automation — all under one roof.",
    url: "https://bharatinnovations.co",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PressSection from "@/components/sections/PressSection";
import DashboardSection from "@/components/sections/DashboardSection";
import HowWeGrowSection from "@/components/sections/HowWeGrowSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClientReelsSection from "@/components/sections/ClientReelsSection";
import AboutCardSection from "@/components/sections/AboutCardSection";
import CareersSection from "@/components/sections/CareersSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <ClientsSection />
      <CaseStudiesSection />
      <PressSection />
      <ServicesSection />
      {/* <DashboardSection /> */}
      <HowWeGrowSection />
      <StatsSection />
      <TestimonialsSection />
      <ClientReelsSection />
      <AboutCardSection />
      <CareersSection />
      <FAQSection />
    </>
  );
}
