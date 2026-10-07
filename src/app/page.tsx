import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import PromotionalVideoSection from "@/components/PromotionalVideoSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import PriceListSection from "@/components/PriceListSection";
import QuotationBuilderSection from "@/components/QuotationBuilderSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900 selection:bg-[#8B0A13] selection:text-white">
      {/* 5. Header */}
      <Header />

      <main className="flex-1">
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. WHO WE HELP */}
        <TargetAudienceSection />

        {/* 3. BUSINESS PROMOTION VIDEO */}
        <PromotionalVideoSection />

        {/* 4. ALL DIGITAL SERVICES */}
        <ServicesSection />

        {/* 5. PACKAGES */}
        <PackagesSection />

        {/* 5b. COMPLETE PRICE LIST + CATALOG */}
        <PriceListSection />

        {/* 5c. INTERACTIVE QUOTATION BUILDER & PDF GENERATOR */}
        <QuotationBuilderSection />

        {/* 6. HOW IT WORKS */}
        <ProcessSection />

        {/* 7. PORTFOLIO */}
        <PortfolioSection />

        {/* 8. WHY VIRALPRO LK */}
        <WhyUsSection />

        {/* 9. TEAM */}
        <TeamSection />

        {/* 10. FAQ */}
        <FAQSection />

        {/* 11. FINAL CTA + CONTACT FORM */}
        <ContactSection />
      </main>

      {/* 12. FOOTER */}
      <Footer />

      {/* 28. Fixed Mobile-First Bottom Bar */}
      <MobileBottomBar />
    </div>
  );
}
