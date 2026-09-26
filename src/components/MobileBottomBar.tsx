"use client";

import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2 shadow-lg pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 active:scale-98 text-neutral-900 rounded-xl font-semibold text-xs sm:text-sm transition-all border border-neutral-200/80"
          aria-label="Call ViralPro LK"
        >
          <Phone className="w-4 h-4 text-[#8B0A13]" />
          <span>Call Now</span>
        </a>

        <a
          href={siteConfig.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] flex items-center justify-center gap-2 py-2.5 px-3 bg-[#8B0A13] hover:bg-[#6B070E] active:scale-98 text-white rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md shadow-[#8B0A13]/25"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
