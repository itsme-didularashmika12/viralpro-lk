import React from "react";
import Header from "@/components/Header";
import QuotationBuilderSection from "@/components/QuotationBuilderSection";
import PriceListSection from "@/components/PriceListSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instant Quotation Builder & PDF Generator | ViralPro LK",
  description:
    "Build an itemized LKR quotation and download a ready-to-send official ViralPro LK quotation PDF for promotional videos, websites, POS systems and digital marketing.",
  alternates: {
    canonical: "/quotation",
  },
};

export default function QuotationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-neutral-900">
      <Header />
      <main className="flex-1">
        <QuotationBuilderSection />
        <PriceListSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
