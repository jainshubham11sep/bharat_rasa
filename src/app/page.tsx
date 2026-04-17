import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PressSection from "@/components/sections/PressSection";
import DashboardSection from "@/components/sections/DashboardSection";
import HowWeGrowSection from "@/components/sections/HowWeGrowSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutCardSection from "@/components/sections/AboutCardSection";
import CareersSection from "@/components/sections/CareersSection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <CaseStudiesSection />
      <PressSection />
      <ServicesSection />
      {/* <DashboardSection /> */}
      <HowWeGrowSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutCardSection />
      <CareersSection />
      <FAQSection />
    </>
  );
}
