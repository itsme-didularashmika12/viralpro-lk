import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, ArrowRight, MapPin, CheckCircle2, Video, Globe, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-100">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#8B0A13]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Copy & Conversions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B0A13]/5 border border-[#8B0A13]/20 mb-5">
              <MapPin className="w-3.5 h-3.5 text-[#8B0A13]" />
              <span className="text-xs font-semibold text-[#8B0A13] tracking-wide">
                {siteConfig.brand.locationText}
              </span>
            </div>

            {/* Sub-pill: Create. Promote. Grow. */}
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#8B0A13] mb-2">
              {siteConfig.brand.tagline}
            </p>

            {/* Main Sinhala Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-neutral-900 leading-[1.2] tracking-tight sinhala-text mb-4">
              ඔබේ Business එකේ <br className="hidden sm:inline" />
              <span className="text-[#8B0A13] underline decoration-[#8B0A13]/20 underline-offset-4">Digital වැඩ</span> — එකම තැනකින්.
            </h1>

            {/* Clear, simple explanation */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-6 max-w-2xl sinhala-text">
              {siteConfig.brand.heroSub}
            </p>

            {/* Authentic Value Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#8B0A13] shrink-0" />
                <span>iPhone 16 Pro Max 4K Promotional Videos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#8B0A13] shrink-0" />
                <span>Facebook, Instagram &amp; TikTok Reels</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#8B0A13] shrink-0" />
                <span>Websites, Mobile Apps &amp; POS Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#8B0A13] shrink-0" />
                <span>Graphic Design, Logos &amp; Print Material</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I'm interested in digital services for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#8B0A13] hover:bg-[#6B070E] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <span>View Services</span>
              </a>
            </div>

            {/* Direct Phone Assistance */}
            <p className="mt-4 text-xs text-neutral-500 flex items-center gap-1.5">
              <span>Direct call or WhatsApp:</span>
              <a href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`} className="font-bold text-[#8B0A13] hover:underline">
                {siteConfig.brand.phone}
              </a>
              <span className="text-neutral-300">•</span>
              <span>Based in Anuradhapura</span>
            </p>

          </div>

          {/* Right Column - Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-200/80 shadow-2xl bg-neutral-900 group">
                <Image
                  src="/images/hero-production.jpg"
                  alt="ViralPro LK commercial promotional video production in Sri Lanka"
                  width={640}
                  height={560}
                  priority
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                />

                {/* Subtle bottom gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Floating On-Image Badges */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>On-Site 4K Shooting</span>
                </div>

                <div className="absolute top-4 right-4 bg-[#8B0A13] text-white px-2.5 py-1 rounded text-[11px] font-bold tracking-wider uppercase shadow-md">
                  iPhone 16 Pro Max
                </div>

                {/* Bottom Card Inside Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-neutral-100">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8B0A13]/10 flex items-center justify-center text-[#8B0A13]">
                        <Video className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-900">Professional Video &amp; Digital Work</p>
                        <p className="text-[11px] text-neutral-600 sinhala-text">දේශීය ව්‍යාපාර සඳහාම නිර්මාණය කර ඇත</p>
                      </div>
                    </div>
                    <a
                      href="#video-promotion"
                      className="text-xs font-bold text-[#8B0A13] hover:text-[#6B070E] whitespace-nowrap flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Floating side badges for credibility without fake stats */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-neutral-200 shadow-xl rounded-xl p-3 items-center gap-3 max-w-[240px]">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-900">Custom Content</p>
                  <p className="text-[10px] text-neutral-500">Reels, Web &amp; POS Systems</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
