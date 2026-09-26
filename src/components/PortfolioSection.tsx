"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import { Check, ExternalLink, MessageCircle } from "lucide-react";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "videos", label: "Promotional Videos" },
    { id: "social", label: "Social Media" },
    { id: "web", label: "Websites" },
    { id: "systems", label: "Business Systems" },
  ];

  const filteredItems =
    filter === "all"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Real Work &amp; Concepts
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            නිර්මාණ සහ ආදර්ශ සංකල්ප
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            පහත දැක්වෙන්නේ ඔබේ ව්‍යාපාරයට ක්‍රියාත්මක කළ හැකි ආකර්ෂණීය වීඩියෝ, වෙබ් අඩවි සහ POS පද්ධති ආදර්ශ සංකල්ප (Sample Concepts) වේ.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                filter === cat.id
                  ? "bg-[#8B0A13] text-white border-[#8B0A13] shadow-sm"
                  : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#8B0A13]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-video sm:aspect-4/3 w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={380}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Sample Concept Tag */}
                  <div className="absolute top-3 left-3 bg-neutral-900/90 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    Sample Concept
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 right-3 bg-[#8B0A13] text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    {item.tag}
                  </div>

                  {/* Overlay Title on Hover/Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-neutral-300">{item.categoryLabel}</p>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mb-2">
                    {item.sinhalaTitle}
                  </p>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 border-t border-neutral-100 pt-3">
                    <p className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">
                      Included Scope:
                    </p>
                    {item.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={siteConfig.getWhatsAppUrl(
                    `Hi ViralPro LK, I'm interested in a concept similar to: ${item.title}. Can you provide details?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-50 hover:bg-[#8B0A13] hover:text-white text-neutral-800 text-xs font-bold rounded-xl transition-all border border-neutral-200 group-hover:border-[#8B0A13]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire Similar Project</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Note on Real Work and Client Privacy */}
        <div className="mt-12 text-center text-xs text-neutral-500 max-w-xl mx-auto sinhala-text">
          සටහන: පාරිභෝගික රහස්‍යභාවය සුරැකීම සඳහා සහ සත්‍ය නොවන සංඛ්‍යාලේඛන හෝ ව්‍යාජ Review ඉදිරිපත් නොකිරීම ViralPro LK අපගේ ප්‍රතිපත්තියයි. සැබෑ සාකච්ඡාවක් සඳහා අප අමතන්න.
        </div>

      </div>
    </section>
  );
}
