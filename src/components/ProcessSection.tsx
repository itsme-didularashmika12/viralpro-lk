import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  MessageSquare,
  Search,
  Lightbulb,
  Camera,
  Scissors,
  Eye,
  Send,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export default function ProcessSection() {
  const getProcessIcon = (num: string) => {
    switch (num) {
      case "01":
        return <MessageSquare className="w-5 h-5" />;
      case "02":
        return <Search className="w-5 h-5" />;
      case "03":
        return <Lightbulb className="w-5 h-5" />;
      case "04":
        return <Camera className="w-5 h-5" />;
      case "05":
        return <Scissors className="w-5 h-5" />;
      case "06":
        return <Eye className="w-5 h-5" />;
      case "07":
        return <Send className="w-5 h-5" />;
      case "08":
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-neutral-50/60 border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Our Proven 8-Step System
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            අප සමඟ වැඩ කරන්නේ මෙහෙමයි
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            පළමු පණිවිඩයේ සිට අවසාන ප්‍රචාරණය දක්වා සෑම පියවරක්ම විනිවිදභාවයෙන් හා ක්‍රමානුකූලව සිදුකෙරේ.
          </p>
        </div>

        {/* 8-Step Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.process.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-neutral-200/90 p-5 shadow-sm hover:shadow-md hover:border-[#8B0A13]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Step Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8B0A13]/10 text-[#8B0A13] flex items-center justify-center group-hover:bg-[#8B0A13] group-hover:text-white transition-colors">
                    {getProcessIcon(step.number)}
                  </div>
                  <span className="text-xl font-black text-neutral-300 group-hover:text-[#8B0A13] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Titles */}
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-0.5">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mb-2.5">
                  {step.sinhalaTitle}
                </p>

                {/* Description */}
                <p className="text-xs text-neutral-600 sinhala-text leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step Flow Indicator */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Phase {idx + 1} of 8</span>
                <span className="group-hover:translate-x-1 transition-transform text-[#8B0A13]">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Start Process CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I'd like to start a project with you.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
          >
            <span>Start Step 01: Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
