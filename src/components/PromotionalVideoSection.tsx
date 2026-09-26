import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import {
  Video,
  Sparkles,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Users,
  Compass,
  Share2,
  Layers,
} from "lucide-react";

export default function PromotionalVideoSection() {
  const p = siteConfig.videoPromotion;

  return (
    <section id="video-promotion" className="py-16 sm:py-24 bg-white border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B0A13]/10 border border-[#8B0A13]/25 mb-4">
            <Video className="w-4 h-4 text-[#8B0A13]" />
            <span className="text-xs font-bold text-[#8B0A13] uppercase tracking-wider">
              Our Flagship Production Service
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            {p.headline}
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 font-medium max-w-2xl sinhala-text leading-relaxed">
            {p.simpleSinhala}
          </p>
        </div>

        {/* Feature Grid: Visual + Real Production Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-900">
              <Image
                src="/images/video-shoot.jpg"
                alt="ViralPro LK promotional video production on site in Sri Lanka"
                width={640}
                height={520}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Verified Gear Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-neutral-900 shadow">
                iPhone 16 Pro Max 4K ProRes
              </div>

              {/* Bottom Specs Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white">
                <p className="text-xs font-bold tracking-wide uppercase text-red-400 mb-1">
                  Honest Production Standards
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed sinhala-text">
                  {p.gearStatement}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Format Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B0A13]">
                Social-Media Optimized
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1 mb-2">
                Facebook Reels, TikTok, Instagram &amp; YouTube Shorts
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 sinhala-text leading-relaxed">
                {p.formatNotice} අද පාරිභෝගිකයින් වැඩිපුරම බලන්නේ ජංගම දුරකථන තිරයට ගැළපෙන vertical 9:16 short video නිසා, ඔබේ ව්‍යාපාරයේ ආකර්ෂණය වැඩි කිරීමට එය ඉතාම ඵලදායී වේ.
              </p>
            </div>

            {/* Production Specifications */}
            <div className="space-y-3 mb-8">
              {p.productionSpecs.map((spec, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-[#8B0A13] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{spec.title}</h4>
                    <p className="text-xs text-neutral-600">{spec.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add-ons Quick Note: Actors & Drone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-[#8B0A13]/5 border border-[#8B0A13]/20">
                <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#8B0A13]">
                  <Users className="w-4 h-4" />
                  <span>Actors / Models</span>
                </div>
                <p className="text-[11px] text-neutral-600 sinhala-text">
                  නළු නිළියන් 1, 2, හෝ 3 දෙනෙකු සම්බන්ධ කළ හැක (Optional Add-on).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#8B0A13]/5 border border-[#8B0A13]/20">
                <div className="flex items-center gap-2 mb-1 text-xs font-bold text-[#8B0A13]">
                  <Compass className="w-4 h-4" />
                  <span>Drone Aerial Footage</span>
                </div>
                <p className="text-[11px] text-neutral-600 sinhala-text">
                  අවශ්‍යතාව, කාලගුණය සහ අවසරයන් මත ලබාගත හැක (Optional Add-on).
                </p>
              </div>
            </div>

            {/* Video CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I'm interested in a promotional video for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book a Video Shoot</span>
              </a>

              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm font-semibold px-5 py-3.5 rounded-xl transition-all"
              >
                <span>View Video Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Video Production Workflow (8 Steps) */}
        <div className="mt-12 pt-12 border-t border-neutral-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B0A13]">
              Simple &amp; Transparent Workflow
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 mt-1 sinhala-text">
              Promotional Video එකක් හැදෙන්නේ මෙහෙමයි
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 sinhala-text">
              පියවරෙන් පියවර ඉතා සරලව, ඔබේ කාලය අපතේ නොයවා ක්‍රමවත්ව වැඩ අවසන් කෙරේ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.workflow.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-neutral-50/80 border border-neutral-200/80 hover:border-[#8B0A13]/40 hover:bg-white transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-[#8B0A13] text-white tracking-widest">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Step
                  </span>
                </div>
                <h4 className="text-sm font-bold text-neutral-900 sinhala-text mb-1 group-hover:text-[#8B0A13] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 sinhala-text leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
