import React from "react";
import Header from "@/components/Header";
import PackagesSection from "@/components/PackagesSection";
import PriceListSection from "@/components/PriceListSection";
import QuotationBuilderSection from "@/components/QuotationBuilderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 Price List & Packages | ViralPro LK Anuradhapura",
  description:
    "Complete 2026 LKR price list for promotional videos, reels, social media management, graphic design, websites, mobile apps, POS systems and AI automation in Sri Lanka.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <Header />
      <main className="flex-1">
        <PackagesSection />
        <PriceListSection />
        <QuotationBuilderSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
