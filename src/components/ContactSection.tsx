"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    city: "Anuradhapura",
    service: "Promotional Video",
    message: "",
    _gotcha: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappFollowup, setWhatsappFollowup] = useState("");

  const servicesDropdown = [
    "Promotional Video",
    "Social Media Management",
    "Graphic Design & Branding",
    "Business Website",
    "Mobile / Web App",
    "POS / Business System",
    "Automation & AI Chatbot",
    "Education / LMS Platform",
    "Other Custom Solution",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setWhatsappFollowup(data.whatsappUrl || siteConfig.getWhatsAppUrl());
      } else {
        setErrorMsg(data.error || "Submission failed. Please message us directly on WhatsApp.");
      }
    } catch {
      setErrorMsg("Network connection error. Please connect directly via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-neutral-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Final CTA Headline) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8B0A13]/10 text-[#8B0A13] mb-3">
            Let's Talk Business
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight sinhala-text mb-4">
            ඔබේ Business එකේ Digital වැඩ ගැන කතා කරමු.
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto sinhala-text leading-relaxed">
            Video එකක්ද? Social Mediaද? Website එකක්ද? Business System එකක්ද? Requirement එක කියන්න.
          </p>

          {/* Quick Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <a
              href={siteConfig.getWhatsAppUrl("Hi ViralPro LK, I want to discuss digital work for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#8B0A13]" />
              <span>Call {siteConfig.brand.phone}</span>
            </a>
          </div>
        </div>

        {/* Contact Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200/90 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#8B0A13]/10 text-[#8B0A13] flex items-center justify-center shrink-0 group-hover:bg-[#8B0A13] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">Phone / Call</p>
                    <p className="text-sm font-bold text-neutral-900 group-hover:text-[#8B0A13] transition-colors">
                      {siteConfig.brand.phone}
                    </p>
                    <p className="text-[11px] text-neutral-500">Mon - Sat: 8:30 AM - 7:00 PM</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={siteConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#8B0A13]/10 text-[#8B0A13] flex items-center justify-center shrink-0 group-hover:bg-[#8B0A13] group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">WhatsApp Official</p>
                    <p className="text-sm font-bold text-neutral-900 group-hover:text-[#8B0A13] transition-colors">
                      {siteConfig.brand.phone} ({siteConfig.brand.whatsappHandle})
                    </p>
                    <p className="text-[11px] text-[#8B0A13] font-medium">Fast inquiry response</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">Headquarters</p>
                    <p className="text-sm font-bold text-neutral-900">
                      {siteConfig.brand.locationCity}
                    </p>
                    <p className="text-[11px] text-neutral-600 sinhala-text">
                      අනුරාධපුරය කේන්ද්‍ර කරගෙන දිවයින පුරා සේවා සපයයි
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-xs font-bold text-neutral-700 uppercase tracking-wider mb-3">
                  Follow Our Social Channels:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={siteConfig.brand.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-neutral-200 hover:border-[#8B0A13] text-xs font-semibold text-neutral-800 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    <span>Facebook Page</span>
                  </a>

                  <a
                    href={siteConfig.brand.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-neutral-200 hover:border-[#8B0A13] text-xs font-semibold text-neutral-800 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-black" />
                    <span>TikTok @viralprolk</span>
                  </a>

                  <a
                    href={siteConfig.brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-neutral-200 hover:border-[#8B0A13] text-xs font-semibold text-neutral-800 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-pink-600" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={siteConfig.brand.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-neutral-200 hover:border-[#8B0A13] text-xs font-semibold text-neutral-800 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span>YouTube Channel</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                Send an Online Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mb-6 sinhala-text">
                ඔබේ විස්තර පහතින් යොමු කරන්න. අපි පැය කිහිපයක් ඇතුළත ඔබව සම්බන්ධ කරගන්නෙමු.
              </p>

              {success ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-base font-bold text-emerald-950 mb-1">
                    ස්තූතියි! ඔබේ තොරතුරු සාර්ථකව ලැබුණි.
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mb-5">
                    Your inquiry has been stored securely. For fastest confirmation, you can also continue directly on WhatsApp:
                  </p>
                  <a
                    href={whatsappFollowup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#8B0A13] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Continue to WhatsApp with Details</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for spam prevention */}
                  <div className="hidden">
                    <label>
                      Do not fill this
                      <input
                        type="text"
                        name="_gotcha"
                        value={formData._gotcha}
                        onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                      />
                    </label>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Your Name / නම <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kasun Silva"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#8B0A13] focus:border-transparent text-base sm:text-sm text-neutral-900"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Business Name / ආයතනයේ නම
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. City Fashion, Anuradhapura"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#8B0A13] focus:border-transparent text-base sm:text-sm text-neutral-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Phone / WhatsApp අංකය <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 074 167 1668"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#8B0A13] focus:border-transparent text-base sm:text-sm text-neutral-900"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Anuradhapura / Colombo"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#8B0A13] focus:border-transparent text-base sm:text-sm text-neutral-900"
                      />
                    </div>
                  </div>

                  {/* Service Needed Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Service Needed / අවශ්‍ය සේවාව <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#8B0A13] focus:border-transparent text-base sm:text-sm text-neutral-900 bg-white"
                    >
                      {servicesDropdown.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Requirement Details / අවශ්‍යතාව පිළිබඳ විස්තර
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="ඔබේ ව්‍යාපාරයේ ස්වභාවය සහ බලාපොරොත්තු වන සේවාව පිළිබඳ කෙටියෙන් සටහන් කරන්න..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#8B0A13] focus:border-transparent text-base sm:text-sm text-neutral-900"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 bg-[#8B0A13] hover:bg-[#6B070E] disabled:bg-neutral-400 text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center mt-2 sinhala-text">
                    🔒 ඔබ ලබාදෙන සියලු තොරතුරු රහස්‍යව සුරක්ෂිත කෙරේ.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
