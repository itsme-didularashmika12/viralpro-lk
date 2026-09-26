"use client";

import React, { useState } from "react";
import { siteConfig, ServiceCategory } from "@/config/siteConfig";
import {
  Video,
  Smartphone,
  Sparkles,
  Globe,
  Layers,
  Cpu,
  GraduationCap,
  CheckCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("promotion");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Video":
        return <Video className="w-5 h-5" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const selectedCategoryData: ServiceCategory =
    siteConfig.services.find((c) => c.id === activeCategory) || siteConfig.services[0];

  return (
    <section id="services" className="py-16 sm:py-24 bg-neutral-50/50 border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            All-in-One Digital Hub
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            ඔබේ Business එකට අවශ්‍ය සියලු Digital සේවා
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            වීඩියෝ සහ සමාජ මාධ්‍ය ප්‍රචාරණයේ සිට වෙබ් අඩවි, POS පද්ධති සහ AI ස්වයංක්‍රීයකරණය දක්වා — ඔබට අවශ්‍ය ඕනෑම සේවාවක් පහසුවෙන් තෝරාගන්න.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {siteConfig.services.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all border shrink-0 ${
                  isActive
                    ? "bg-[#8B0A13] text-white border-[#8B0A13] shadow-md shadow-[#8B0A13]/25 scale-102"
                    : "bg-white text-neutral-700 hover:text-neutral-900 border-neutral-200/90 hover:bg-neutral-100/80"
                }`}
              >
                <span>{getCategoryIcon(cat.iconName)}</span>
                <span>{cat.title}</span>
                {cat.badge && (
                  <span
                    className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                      isActive ? "bg-white/20 text-white" : "bg-red-100 text-[#8B0A13]"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Category Header Card */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="p-2 rounded-lg bg-[#8B0A13]/10 text-[#8B0A13]">
                  {getCategoryIcon(selectedCategoryData.iconName)}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {selectedCategoryData.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#8B0A13] sinhala-text">
                {selectedCategoryData.sinhalaTitle}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 sinhala-text">
                {selectedCategoryData.shortDesc}
              </p>
            </div>

            <a
              href={siteConfig.getWhatsAppUrl(
                `Hi ViralPro LK, I'm interested in your ${selectedCategoryData.title} services (${selectedCategoryData.sinhalaTitle}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Inquire This Category</span>
            </a>
          </div>

          {/* Sub-services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {selectedCategoryData.items.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/80 hover:border-[#8B0A13]/40 hover:bg-white transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#8B0A13] transition-colors">
                      {item.name}
                    </h4>
                    {item.popular && (
                      <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-[#8B0A13]">
                        Popular
                      </span>
                    )}
                  </div>
                  {item.sinhalaName && (
                    <p className="text-xs font-medium text-[#8B0A13] sinhala-text mb-1.5">
                      {item.sinhalaName}
                    </p>
                  )}
                  <p className="text-xs text-neutral-600 sinhala-text leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    Available Island-wide
                  </span>
                  <a
                    href={siteConfig.getWhatsAppUrl(
                      `Hi ViralPro LK, I would like to inquire about: ${item.name} (${item.sinhalaName || ""}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#8B0A13] hover:underline flex items-center gap-0.5"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Quick Multi-service Banner */}
        <div className="bg-gradient-to-r from-neutral-900 to-[#1F0306] rounded-2xl p-6 sm:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Bundle &amp; Save
            </span>
            <h4 className="text-lg sm:text-xl font-bold mt-1 mb-1 sinhala-text">
              සේවා කිහිපයක් එකට අවශ්‍යද?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl sinhala-text">
              වීඩියෝ + සමාජ මාධ්‍ය + වෙබ් අඩවිය හෝ POS මෘදුකාංගය එකම Package එකක් ලෙස ලබාගැනීමෙන් ඔබේ කාලය සහ මුදල් දෙකම ඉතිරි කරගත හැක.
            </p>
          </div>

          <a
            href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I want to create a custom bundle package combining multiple services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B0A13] hover:bg-[#A30D17] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md shrink-0 active:scale-95"
          >
            <span>Request Custom Bundle</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
