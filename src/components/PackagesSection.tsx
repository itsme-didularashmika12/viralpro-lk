import React from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Check,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Truck,
  Users,
  Compass,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-white border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Transparent &amp; Flexible Packages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            වීඩියෝ සහ ඩිජිටල් ප්‍රවර්ධන පැකේජ
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            සැඟවුණු ගාස්තු හෝ ව්‍යාජ මිල ගණන් නොමැත. ඔබේ ව්‍යාපාරයේ අවශ්‍යතාවය සහ අයවැයට අනුව සුදුසුම පැකේජය තෝරාගෙන සාකච්ඡා කරන්න.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.packages.map((pkg) => {
            const isStandard = pkg.id === "standard";
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                  isStandard
                    ? "border-2 border-[#8B0A13] shadow-xl bg-gradient-to-b from-[#8B0A13]/5 via-white to-white ring-1 ring-[#8B0A13]/20"
                    : "border border-neutral-200/90 hover:border-neutral-300 shadow-sm hover:shadow-md bg-white"
                } p-6`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                        isStandard
                          ? "bg-[#8B0A13] text-white"
                          : "bg-neutral-800 text-white"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Sinhala Name */}
                  <div className="text-center pb-5 mb-5 border-b border-neutral-100 pt-1">
                    <h3 className="text-lg font-bold text-neutral-900">{pkg.name}</h3>
                    <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mt-0.5">
                      {pkg.sinhalaName}
                    </p>
                    
                    {/* Price Display */}
                    <div className="mt-4">
                      <p className="text-sm font-extrabold text-neutral-900">
                        {pkg.priceDisplay}
                      </p>
                      <p className="text-[11px] text-neutral-500 sinhala-text mt-1">
                        {pkg.sinhalaPriceNote}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-600 sinhala-text mt-3 text-left">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-3">
                      Package Features:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className="w-4 h-4 text-[#8B0A13] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <div className="mb-3 text-[11px] text-neutral-500 bg-neutral-50 p-2 rounded-lg text-center sinhala-text">
                    <span className="font-semibold text-neutral-700">සුදුසු වන්නේ: </span>
                    {pkg.recommendedFor}
                  </div>

                  <a
                    href={siteConfig.getWhatsAppUrl(pkg.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 ${
                      isStandard
                        ? "bg-[#8B0A13] hover:bg-[#6B070E] text-white shadow-md shadow-[#8B0A13]/25"
                        : "bg-neutral-900 hover:bg-black text-white"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire Package</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mandatory Final Price Disclaimer Card */}
        <div className="mb-14 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-neutral-800 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs sm:text-sm font-bold text-amber-950 mb-0.5">
              Important Pricing Note / වැදගත් මිල සටහන
            </p>
            <p className="text-xs text-amber-900/90 leading-relaxed sinhala-text">
              {siteConfig.policies.sinhalaDisclaimer} {siteConfig.policies.disclaimer}
            </p>
          </div>
        </div>

        {/* Transparent Policy Explanations: Transport, Actors & Drone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Transport Policy */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#8B0A13]/10 flex items-center justify-center text-[#8B0A13] mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-0.5">
                {siteConfig.policies.transport.title}
              </h4>
              <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mb-3">
                {siteConfig.policies.transport.sinhalaTitle}
              </p>
              <ul className="space-y-2 text-xs text-neutral-600 sinhala-text leading-relaxed">
                {siteConfig.policies.transport.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8B0A13] font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Actors / Models Policy */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#8B0A13]/10 flex items-center justify-center text-[#8B0A13] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-0.5">
                {siteConfig.policies.actors.title}
              </h4>
              <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mb-3">
                {siteConfig.policies.actors.sinhalaTitle}
              </p>
              <ul className="space-y-2 text-xs text-neutral-600 sinhala-text leading-relaxed">
                {siteConfig.policies.actors.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8B0A13] font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Drone Policy */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#8B0A13]/10 flex items-center justify-center text-[#8B0A13] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-neutral-900 mb-0.5">
                {siteConfig.policies.drone.title}
              </h4>
              <p className="text-xs font-semibold text-[#8B0A13] sinhala-text mb-3">
                {siteConfig.policies.drone.sinhalaTitle}
              </p>
              <ul className="space-y-2 text-xs text-neutral-600 sinhala-text leading-relaxed">
                {siteConfig.policies.drone.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8B0A13] font-bold">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
