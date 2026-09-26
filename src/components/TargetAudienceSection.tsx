import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { Store, Building2, Factory, Sparkles, ArrowRight, Check } from "lucide-react";

export default function TargetAudienceSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "small":
        return <Store className="w-6 h-6 text-[#8B0A13]" />;
      case "medium":
        return <Building2 className="w-6 h-6 text-[#8B0A13]" />;
      case "large":
        return <Factory className="w-6 h-6 text-[#8B0A13]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#8B0A13]" />;
    }
  };

  return (
    <section id="who-we-help" className="py-16 sm:py-20 bg-neutral-50/70 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Tailored For Every Stage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            ඔබේ Business එක කොයි තරම් ලොකු වුණත්...
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            කුඩා සාප්පුවේ සිට මහා පරිමාණ සමාගම් දක්වා — ඔබගේ ව්‍යාපාරයේ ප්‍රමාණය සහ අයවැයට ගැළපෙන නිවැරදිම ඩිජිටල් විසඳුම් අප සතුව ඇත.
          </p>
        </div>

        {/* Audience 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.targetAudience.map((audience) => (
            <div
              key={audience.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#8B0A13]/40 transition-all group"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="w-12 h-12 rounded-xl bg-[#8B0A13]/10 flex items-center justify-center mb-4 group-hover:bg-[#8B0A13] group-hover:text-white transition-colors">
                  {getIcon(audience.id)}
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#8B0A13] transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mt-0.5">
                    {audience.sinhalaTitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 sinhala-text leading-relaxed mb-4">
                  {audience.description}
                </p>

                {/* Examples */}
                <div className="border-t border-neutral-100 pt-3 mb-4">
                  <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    Ideal For:
                  </p>
                  <ul className="space-y-1.5">
                    {audience.examples.slice(0, 5).map((ex, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <a
                  href={siteConfig.getWhatsAppUrl(audience.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-neutral-50 hover:bg-[#8B0A13] hover:text-white text-neutral-800 text-xs font-bold rounded-xl transition-all border border-neutral-200 hover:border-[#8B0A13] group-hover:shadow-sm"
                >
                  <span>{audience.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Solution Callout Banner */}
        <div className="mt-10 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-neutral-900 sinhala-text mb-1">
              ඔබට විශේෂිත වූ වෙනස්ම අවශ්‍යතාවක් තිබේද?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl sinhala-text">
              වෙබ් අඩවි, POS පද්ධති, Promotional Video හෝ සම්පූර්ණ Social Media එකට එකතු කළ විශේෂ Custom Solution එකක් සඳහා අප සමඟ කතා කරන්න.
            </p>
          </div>

          <a
            href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I have unique requirements and would like to discuss a custom digital solution.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow shrink-0 active:scale-95"
          >
            <span>Get a Custom Solution</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
