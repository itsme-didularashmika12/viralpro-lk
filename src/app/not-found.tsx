import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/siteConfig";
import { Home, MessageCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-6">
        <Logo size="lg" />
      </div>

      <div className="max-w-md w-full bg-neutral-50 rounded-2xl border border-neutral-200 p-8 shadow-sm">
        <span className="text-5xl font-black text-[#8B0A13]">404</span>
        <h1 className="text-xl font-bold text-neutral-900 mt-2 mb-2 sinhala-text">
          පිටුව හමුවූයේ නැත (Page Not Found)
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 mb-6 sinhala-text">
          ඔබ සොයන පිටුව සොයාගැනීමට නොහැක. පහත බොත්තමෙන් ප්‍රධාන පිටුවට යන්න.
        </p>

        <div className="flex flex-col gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#8B0A13] hover:bg-[#6B070E] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow"
          >
            <Home className="w-4 h-4" />
            <span>Go to Homepage</span>
          </Link>

          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs sm:text-sm font-bold transition-all border border-neutral-200"
          >
            <MessageCircle className="w-4 h-4 text-[#8B0A13]" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
