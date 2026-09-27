import React from "react";
import { siteConfig } from "@/config/siteConfig";
import { priceList, priceNotes, catalogImages, type PriceItem } from "@/config/priceList";
import { AlertCircle, ExternalLink, MessageCircle } from "lucide-react";

function Price({ it }: { it: PriceItem }) {
  if (it.quote) {
    return <span className="text-xs font-bold text-[#8B0A13]">{it.quote}</span>;
  }
  return (
    <span className="whitespace-nowrap">
      {it.from && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B0A13]">From&nbsp;</span>
      )}
      <span className="text-[11px] font-semibold text-neutral-500">Rs. </span>
      <span className="text-sm font-extrabold text-neutral-900">{it.amount}</span>
      {it.unit && <span className="text-[10px] font-medium text-neutral-500"> {it.unit}</span>}
    </span>
  );
}

export default function PriceListSection() {
  return (
    <section id="price-list" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Complete Price List
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            සම්පූර්ණ මිල ගණන් පත්‍රිකාව
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto sinhala-text">
            සෑම සේවාවක්ම, සෑම පැකේජයක්ම — එකම ආවරණය. සැඟවුණු ගාස්තු නොමැත.
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-2xl mx-auto mt-2">
            Every service and package in one transparent list. Prices marked “From” are starting prices.
          </p>
        </div>

        {/* Price Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {priceList.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 bg-[#8B0A13] rounded-[2px]" />
                <h3 className="text-sm font-bold text-neutral-900 tracking-tight">{cat.title}</h3>
              </div>
              <div>
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between gap-3 py-2.5 ${
                      i < cat.items.length - 1 ? "border-b border-neutral-100" : ""
                    }`}
                  >
                    <span className="text-xs font-medium text-neutral-700 leading-snug">{item.name}</span>
                    <Price it={item} />
                  </div>
                ))}
              </div>
              {cat.note && (
                <p className="mt-3 text-[11px] leading-relaxed text-neutral-500 bg-neutral-50 border border-neutral-100 rounded-lg px-3 py-2">
                  {cat.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-neutral-800">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-bold text-amber-950 mb-2">
                Important / වැදගත් සටහන්
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5">
                {priceNotes.map((n, i) => (
                  <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-amber-900/90 leading-relaxed">
                    <span className="text-[#8B0A13] font-bold mt-px">•</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I saw your price list and I'd like a quotation for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Get a Quotation on WhatsApp</span>
          </a>
          <span className="text-xs text-neutral-500">
            Call {siteConfig.brand.phone} · Mon–Sat 8:30 AM – 7:00 PM
          </span>
        </div>

        {/* Price Catalog Gallery */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
              Price Catalog
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-3">
              Price Catalog — Social Media Series
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed sinhala-text">
              මිල ගණන් පැකේජ — සමාජ මාධ්‍ය සඳහා සූදානම් ඡායාරූප පෙළ. Tap any image to view it in full size.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {catalogImages.map((img, i) => (
              <a
                key={img.file}
                href={img.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-[#8B0A13]/40 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.file}
                  alt={`ViralPro LK price catalog — ${img.title}`}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pt-8 pb-2.5 flex items-end justify-between gap-2">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-white leading-tight">
                    {String(i + 1).padStart(2, "0")} · {img.title}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80 shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
