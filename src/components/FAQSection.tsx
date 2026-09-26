"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "video", label: "Video & Shooting" },
    { id: "services", label: "Services & Systems" },
    { id: "pricing", label: "Pricing & Transport" },
  ];

  const filteredFaqs =
    filterCategory === "all"
      ? siteConfig.faqs
      : siteConfig.faqs.filter((f) => f.category === filterCategory || (filterCategory === "pricing" && f.category === "pricing"));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-neutral-50/60 border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            නිතර අසන ප්‍රශ්න (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed sinhala-text">
            වීඩියෝ රූගත කිරීම්, ප්‍රවාහන ගාස්තු, සහ තාක්ෂණික සේවාවන් පිළිබඳ පැහැදිලි සත්‍ය තොරතුරු.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                filterCategory === cat.id
                  ? "bg-[#8B0A13] text-white border-[#8B0A13]"
                  : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-0.5">
                      {faq.question}
                    </h3>
                    <p className="text-xs font-semibold text-[#8B0A13] sinhala-text">
                      {faq.sinhalaQuestion}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#8B0A13]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-neutral-100 bg-neutral-50/30">
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-2">
                      {faq.answer}
                    </p>
                    <p className="text-xs text-neutral-600 sinhala-text leading-relaxed border-t border-neutral-100/80 pt-2">
                      {faq.sinhalaAnswer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-neutral-200 text-center">
          <p className="text-sm font-bold text-neutral-900 mb-1 sinhala-text">
            ඔබේ ප්‍රශ්නයට පිළිතුර මෙහි නැද්ද?
          </p>
          <p className="text-xs text-neutral-600 mb-4 sinhala-text">
            කිසිදු පැකිලීමකින් තොරව අපගේ කණ්ඩායම අමතන්න. අපි උදව් කිරීමට සූදානම්.
          </p>
          <a
            href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I have a question regarding your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask Directly on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
