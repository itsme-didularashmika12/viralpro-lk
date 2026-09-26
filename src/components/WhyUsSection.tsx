import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  CheckCircle,
  Compass,
  Sliders,
  Camera,
  Share2,
  Code,
  Users,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function WhyUsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "CheckCircle":
        return <CheckCircle className="w-5 h-5 text-[#8B0A13]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#8B0A13]" />;
      case "Sliders":
        return <Sliders className="w-5 h-5 text-[#8B0A13]" />;
      case "Camera":
        return <Camera className="w-5 h-5 text-[#8B0A13]" />;
      case "Share2":
        return <Share2 className="w-5 h-5 text-[#8B0A13]" />;
      case "Code":
        return <Code className="w-5 h-5 text-[#8B0A13]" />;
      case "Users":
        return <Users className="w-5 h-5 text-[#8B0A13]" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-[#8B0A13]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#8B0A13]" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-50/50 border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Honest &amp; Factual
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            ඇයි ViralPro LK තෝරාගත යුත්තේ?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            ව්‍යාජ ප්‍රකාශන සහ අතිශයෝක්ති නොමැතිව, සැබෑ ප්‍රතිඵල සහ විශ්වාසදායක සේවාවක් ලබාදීම අපගේ එකම අරමුණයි.
          </p>
        </div>

        {/* 8 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.whyUs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-200/90 p-5 shadow-sm hover:shadow-md hover:border-[#8B0A13]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#8B0A13]/10 flex items-center justify-center mb-4">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mb-2">
                  {item.sinhalaTitle}
                </p>
                <p className="text-xs text-neutral-600 sinhala-text leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-bold text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B0A13]" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* About ViralPro LK Statement Card */}
        <div className="mt-12 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B0A13]">
              About ViralPro LK
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 mt-1 mb-3 sinhala-text">
              අනුරාධපුරයේ සිට දිවයින පුරා ව්‍යාපාර බලගැන්වීම
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed sinhala-text mb-4">
              ViralPro LK යනු ව්‍යාපාරික ආයතන සඳහා අවශ්‍ය වන ප්‍රචාරක වීඩියෝ, සමාජ මාධ්‍ය කළමනාකරණය, ග්‍රැෆික් නිර්මාණ, වෙබ් අඩවි, ජංගම යෙදුම්, POS බිල්පත් පද්ධති සහ ව්‍යාපාර ස්වයංක්‍රීයකරණ විසඳුම් එකම තැනකින් සපයන නිර්මාණාත්මක හා තාක්ෂණික කණ්ඩායමකි.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Based in Anuradhapura, we work closely with local business owners while expanding our digital capabilities across Sri Lanka. Whether you are launching your first retail store or managing an established multi-branch enterprise, we provide transparent, high-impact digital execution.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
