import React from "react";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Digital Services | ViralPro LK Anuradhapura",
  description:
    "Promotional videos, social media management, graphic design, business websites, mobile apps, POS systems and AI automation for Sri Lankan businesses.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <Header />
      <main className="flex-1">
        <ServicesSection />
        <PackagesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
