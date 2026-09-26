import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Briefcase,
  Palette,
  Code2,
  Video,
  Navigation,
  Smile,
  ShieldCheck,
} from "lucide-react";

export default function TeamSection() {
  const getRoleIcon = (name: string) => {
    switch (name) {
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#8B0A13]" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-[#8B0A13]" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-[#8B0A13]" />;
      case "Video":
        return <Video className="w-5 h-5 text-[#8B0A13]" />;
      case "Navigation":
        return <Navigation className="w-5 h-5 text-[#8B0A13]" />;
      case "Smile":
        return <Smile className="w-5 h-5 text-[#8B0A13]" />;
      default:
        return <Briefcase className="w-5 h-5 text-[#8B0A13]" />;
    }
  };

  return (
    <section id="team" className="py-16 sm:py-24 bg-white border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Cross-Disciplinary Squad
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            අපගේ කාර්යමණ්ඩල ව්‍යුහය
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            ව්‍යාජ නම් හෝ ඡායාරූප නොමැත. ඔබේ ව්‍යාපෘතිය පිටුපස සක්‍රීයව ක්‍රියාත්මක වන සැබෑ වෘත්තීය භූමිකාවන් මෙන්න.
          </p>
        </div>

        {/* Team Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.teamRoles.map((role, idx) => (
            <div
              key={idx}
              className="bg-neutral-50/70 rounded-2xl border border-neutral-200/90 p-6 shadow-sm hover:shadow-md hover:border-[#8B0A13]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-4 group-hover:bg-[#8B0A13] group-hover:text-white transition-colors shadow-sm">
                  {getRoleIcon(role.iconName)}
                </div>

                <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#8B0A13] transition-colors">
                  {role.role}
                </h3>
                <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mt-0.5 mb-1.5">
                  {role.sinhalaRole}
                </p>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-neutral-200/60 text-neutral-700 text-[11px] font-semibold mb-3">
                  Focus: {role.focus}
                </div>

                <p className="text-xs text-neutral-600 sinhala-text leading-relaxed">
                  {role.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Production Capability</span>
                <span className="font-bold text-neutral-700">Dedicated Unit</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
