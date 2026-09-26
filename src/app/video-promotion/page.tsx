import React from "react";
import Header from "@/components/Header";
import PromotionalVideoSection from "@/components/PromotionalVideoSection";
import PackagesSection from "@/components/PackagesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotional Video Production | ViralPro LK Anuradhapura",
  description:
    "Professional promotional videos and reels shot with iPhone 16 Pro Max for Sri Lankan businesses. 9:16 vertical formats for Facebook Reels, TikTok & Instagram.",
};

export default function VideoPromotionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <Header />
      <main className="flex-1">
        <PromotionalVideoSection />
        <PackagesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
