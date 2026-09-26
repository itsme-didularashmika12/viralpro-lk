"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { siteConfig } from "@/config/siteConfig";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Video Promotion", href: "#video-promotion", badge: "Hot" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-2.5"
          : "bg-white border-b border-neutral-100/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-xs xl:text-sm font-medium text-neutral-700 hover:text-[#8B0A13] transition-colors rounded-md hover:bg-neutral-50"
              >
                {link.name}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 bg-[#8B0A13] text-white text-[10px] font-bold rounded-full">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#8B0A13] px-2 py-1 rounded transition-colors"
              title="Call ViralPro LK"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B0A13]" />
              <span>{siteConfig.brand.phone}</span>
            </a>

            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#8B0A13] hover:bg-[#6B070E] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Right Quick CTAs + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#8B0A13] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg active:scale-95"
              aria-label="WhatsApp ViralPro LK"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-[#8B0A13] hover:bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0A13]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-neutral-800 hover:text-[#8B0A13] hover:bg-neutral-50 rounded-lg"
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="px-2 py-0.5 bg-[#8B0A13] text-white text-[11px] font-bold rounded-full">
                    {link.badge}
                  </span>
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                )}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
            <a
              href={`tel:${siteConfig.brand.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#8B0A13]" />
              <span>Call: {siteConfig.brand.phone}</span>
            </a>
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#8B0A13] hover:bg-[#6B070E] rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct Message</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
