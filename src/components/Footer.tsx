import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/config/siteConfig";
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-28 lg:pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#E53E3E] uppercase">
              {siteConfig.brand.tagline}
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm sinhala-text leading-relaxed">
              {siteConfig.brand.sinhalaTagline}
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8B0A13] shrink-0" />
                <span>{siteConfig.brand.locationCity} • Serving Island-wide</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8B0A13] shrink-0" />
                <a href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.brand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#8B0A13] shrink-0" />
                <a href={siteConfig.getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: {siteConfig.brand.whatsappHandle}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#video-promotion" className="hover:text-white transition-colors">
                  Promotional Videos (Reels)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  All Digital Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Packages &amp; Pricing Info
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  How It Works (8 Steps)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Sample Concepts &amp; Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About ViralPro LK
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Channels Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Connect With Us
            </h4>
            <p className="text-xs text-neutral-400 sinhala-text">
              අපගේ නිල සමාජ මාධ්‍ය පිටු සමඟ එක්වන්න:
            </p>

            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={siteConfig.brand.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span>Facebook / ViralPro LK</span>
              </a>

              <a
                href={siteConfig.brand.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                <span>TikTok @viralprolk</span>
              </a>

              <a
                href={siteConfig.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span>Instagram @viralprolk</span>
              </a>

              <a
                href={siteConfig.brand.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                <span>YouTube @viralprolk</span>
              </a>

              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#8B0A13] text-neutral-300 hover:text-white transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>WhatsApp @viralprolk (074 167 1668)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} {siteConfig.brand.name}. All rights reserved. Anuradhapura, Sri Lanka.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400 sinhala-text">
              Create • Promote • Grow
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
